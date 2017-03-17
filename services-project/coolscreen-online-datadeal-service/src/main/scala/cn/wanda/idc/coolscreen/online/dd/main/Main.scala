package cn.wanda.idc.coolscreen.online.dd.main

import java.sql.DriverManager

import scala.collection.mutable.HashMap
import scala.concurrent.Await
import scala.concurrent.duration.DurationInt

import org.I0Itec.zkclient.ZkClient
import org.apache.log4j.Level
import org.apache.log4j.Logger
import org.apache.spark.SparkConf
import org.apache.spark.streaming.Duration
import org.apache.spark.streaming.Minutes
import org.apache.spark.streaming.StreamingContext
import org.apache.spark.streaming.dstream.DStream.toPairDStreamFunctions
import org.apache.spark.streaming.kafka.HasOffsetRanges
import org.apache.spark.streaming.kafka.KafkaUtils

import com.typesafe.config.ConfigFactory

import akka.actor.ActorSystem
import akka.actor.actorRef2Scala
import akka.util.Timeout
import cn.wanda.idc.coolscreen.core.DataProcessingComplete
import kafka.common.TopicAndPartition
import kafka.message.MessageAndMetadata
import kafka.serializer.StringDecoder


/**
 * 统计各个广场最近一段时间（配置文件设置）内使用过app的人数
 */
object Main {

  var configFile = ""
  //val checkpointPath = "hdfs://nn-idc/tmp/cool_screen_sstream"
  val zk_offset_path = "/data_science_department/cool_screen"
  val topic = "wifi_HttpLog"
  val APP_NAME = "coolscreen.online_datadeal_service"

  val config = ConfigFactory
    .parseResources("akka.conf")
    .getConfig("OnlineDatadealServiceActor")

  val actorSystem = ActorSystem("OnlineDatadealService", config)

  implicit val resolveTimeout = Timeout(5 seconds)
  val modelServiceActor = Await.result(actorSystem.actorSelection("akka.tcp://ModelService@127.0.0.1:4999/user/modelServiceActor").resolveOne(), resolveTimeout.duration)

  def notifyModelService() = {
    modelServiceActor ! DataProcessingComplete("1")
  }

  def createSSContent() = {
    println(configFile)
    val paraCfg = utility.getPara(configFile);

    val batch_duration_minutes = paraCfg.batch_duration_minutes
    val windowLen = paraCfg.window_length;
    val windowSlideLen = paraCfg.window_slide_length;
    val conf = new SparkConf().setAppName(APP_NAME)
    val ssc = new StreamingContext(conf, Minutes(batch_duration_minutes))
    // ssc.checkpoint(checkpointPath)
    val zk = new ZkClient(paraCfg.kafka_zookeeper_quorum)
    var offset: String = null;

    println(paraCfg.kafka_brokers)
    println(paraCfg.kafka_zookeeper_quorum)

    try {
      offset = zk.readData[String](zk_offset_path, true)
      if (offset == null) {
        zk.createPersistent(zk_offset_path)
      }
    } catch {
      case e: Throwable =>
    }

    val kafkaParams = Map(
      "zookeeper.connect" -> paraCfg.kafka_zookeeper_quorum,
      "group.id" -> "cool_screen_sstream",
      "metadata.broker.list" -> paraCfg.kafka_brokers,
      "zookeeper.connection.timeout.ms" -> "10000",
      "serializer.class" -> "kafka.serializer.StringEncoder",
      "fetch.message.max.bytes" -> paraCfg.kafka_fetch_message_max_bytes)

    val readParallelism = paraCfg.kafka_stream_num
    
    val kafkaDStreams = if (offset == null) {
      KafkaUtils.createDirectStream[String, String, StringDecoder, StringDecoder](ssc, kafkaParams, Set(topic))
    } else {
      val os = HashMap.empty[TopicAndPartition, Long]
      offset.trim().split(",").map { x =>
        val kv = x.split(":")
        os += (TopicAndPartition(topic, kv(0).toInt) -> kv(1).toLong)
      }
      val messageHandler = (mmd: MessageAndMetadata[String, String]) => (mmd.key, mmd.message)
      KafkaUtils.createDirectStream[String, String, StringDecoder, StringDecoder, (String, String)](ssc, kafkaParams, os.toMap, messageHandler)
    }

    val windowStream = kafkaDStreams
      .transform { rdd =>
        val offsetsRanges = rdd.asInstanceOf[HasOffsetRanges].offsetRanges
        val offsetsRangesStr = offsetsRanges.map(offsetRange => s"${offsetRange.partition}:${offsetRange.fromOffset}")
          .mkString(",")
        zk.writeData(zk_offset_path, offsetsRangesStr)
        rdd
      }
      .map { x =>
        val msgs = x._2.split(utility.split_flagMsg)
        if (msgs.size > 1) {
          val logs = msgs(1).split(utility.split_filed)
          if (logs.size > 12) {
            //(plaza_id,mobile)
            (logs(0).substring(2), logs(12).trim()) // msgs(7),
          } else {
            ("", "")
          }
        } else {
          ("", "")
        }
      }
      .window(new Duration(windowLen * batch_duration_minutes * 60 * 1000),
        new Duration(windowSlideLen * batch_duration_minutes * 60 * 1000))
      .transform(x => x.distinct)
      .map(x => (x._1, 1))
      .reduceByKey(_ + _)

    val dbIp = PropertiesFile.getProperty("database_ip", "10.213.129.36")
    val dbport = PropertiesFile.getProperty("database_port", "3306")
    val dbName = PropertiesFile.getProperty("database_name", "cool_screen")
    val user = PropertiesFile.getProperty("user", "lsd")
    val passwd = PropertiesFile.getProperty("passwd", "lsd")

    windowStream.foreachRDD { x =>
      x.foreachPartition { x =>
        Class.forName("com.mysql.jdbc.Driver")
        val conn = DriverManager.getConnection(s"jdbc:mysql://${dbIp}:${dbport}/${dbName}", user, passwd);
        conn.setAutoCommit(true)

        val updateStat = conn.prepareStatement("update plaza_guests set id=?, guests=? where id=?")
        val insertStat = conn.prepareStatement("insert into plaza_guests values(?,?)")

        try {
          x.foreach { x =>
            val plazaId = x._1;
            val guests = x._2

            updateStat.setString(1, plazaId);
            updateStat.setInt(2, guests)
            updateStat.setString(3, plazaId);
            val updates = updateStat.executeUpdate()
            if (updates < 1) {
              insertStat.setString(1, plazaId)
              insertStat.setInt(2, guests)
              insertStat.execute()
            }
          }
        } catch {
          case e: Exception => e.printStackTrace
        } finally {
          conn.close
        }
      }
      notifyModelService()
    }
    ssc
  }

  def main(args: Array[String]): Unit = {
    Logger.getLogger("org").setLevel(Level.WARN)
    if (args.length < 1) {
      System.out.print("usage:  {confFile } ")
      System.exit(1)
    }

    configFile = args(0) //conf file name

    val ssc = createSSContent

    ssc.start()
    ssc.awaitTermination()
  }
}