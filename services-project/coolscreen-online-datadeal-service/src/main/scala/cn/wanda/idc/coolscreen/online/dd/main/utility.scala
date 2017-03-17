package cn.wanda.idc.coolscreen.online.dd.main

import java.io._
import java.sql.Date
import java.text.SimpleDateFormat
import java.util.Properties

import org.apache.hadoop.hbase.HBaseConfiguration
import org.apache.hadoop.security.{SecurityUtil, UserGroupInformation}

/**
  * Created by bruce on 16/7/27.
  */
object utility {
  val split_filed = ","
  val flag_httplog = "httplog"
  val flag_userlog = "userlog"
  val flag_heartbeat = "heartbeat"

  val split_flagMsg = "\001"
  val split_interval = "\002"
  val split_rk_filed="^"
  val topic_userLog = "wifi_UserLog"
  val topic_httpLog = "wifi_HttpLog"
  val topic_heartBeatLog = "wifi_HeartBeatLog"

   class paracfg extends Serializable {
     var topics: String = ""
     var group_id: String = ""

     var zookeeper_quorum: String = ""

     var zookeeper_clientPort: String = "2181"

     var heartbeat_table: String = "plaza_wifi:heartbeat"

     var heartbeat_columnFamily: String = "info"

     var batch_duration_minutes: Int = 15

     var statis_batchTime: Long = 10

     var window_slide_length: Int = 1

     var window_length: Int = 10

     var hdfs_path_userlog: String = "/raw/wifilog/userlog"

     var hdfs_path_httplog: String = "/raw/wifilog/httplog"

     var hdfs_file_sieze: Long = 500

     var kafka_brokers: String = ""

     var graph_table: String = "plaza_wifi:recnum_stat"

     var graph_columnFamily: String = "info"

     var kerbos_ketab: String = ""

     var kerbos_principal: String = ""

     var hadoop_conf: String = ""

     var jass_conf: String = ""

     var krb5_conf: String = ""

     var kafka_zookeeper_quorum: String = ""

     var kafka_per_partition_task_num: Int = 6

     var spark_checkpoint_dir:String ="."
     var kafka_fetch_message_max_bytes:String = "10485760" //10m
     var kafka_stream_num : Int = 4
   }

  //获取配置文件参数
  def getPara(filePath: String): paracfg = {
    val prop = new Properties()
    val file: File = new File(filePath);
    val pp = new paracfg()

    if (!file.exists() && !file.isDirectory()) {
      System.out.print("conf file isn't exist, will be set default value")
      pp.group_id = "wifiHttpLog,wifiHeatBeatLog,wifiUserLog"
      pp.topics = "wifi_UserLog,wifi_HttpLog,wifi_HeatBeatLog"
      pp.batch_duration_minutes = 15
      pp.hdfs_path_httplog = "/raw/wifilog/httplog"
      pp.hdfs_path_userlog = "/raw/wifilog/userlog"
      pp.hdfs_file_sieze = 500000
      pp.kafka_brokers = ""
      pp.zookeeper_clientPort = "2181"
      pp.zookeeper_quorum = "10.199.192.11,10.199.192.12"
      pp.heartbeat_columnFamily = "info"
      pp.heartbeat_table = "plaza_wifi:heartbeat"
      pp.graph_table = "plaza_wifi:recnum_stat"
      pp.graph_columnFamily = "info"
      pp.kafka_zookeeper_quorum=""
      pp.kafka_stream_num = 4
      pp
    } else {
      var parameter = Map[String, String]()
      try {
        val in: InputStream = new BufferedInputStream(new FileInputStream(filePath))
        prop.load(in)
        val it = prop.stringPropertyNames().iterator()

        while (it.hasNext) {
          val key = it.next()
          parameter += (key -> prop.getProperty(key))
        }
      }
      catch {
        case e: FileNotFoundException => System.out.print("Requested file does not exist")
        case e: IOException => System.out.print("can't open the file")
        case _: Exception => System.out.print("An unexpected error has occurred in readProperty!!!")
      }
      pp.group_id = parameter.getOrElse("kafka.consumer.groupid", "test1")
      pp.topics = parameter.getOrElse("kafka.topics", "wifi_UserLog,wifi_HttpLog,wifi_HeatBeatLog")
      pp.hdfs_path_httplog = parameter.getOrElse("hdfs.path.httplog", "/raw/wifilog/httplog")
      pp.hdfs_path_userlog = parameter.getOrElse("hdfs.path.userlog", "/raw/wifilog/userlog")
      pp.hdfs_file_sieze = parameter.getOrElse("hdfs.file.size", "500000").toLong
      pp.kafka_brokers = parameter.getOrElse("kafka.brokers", "")
      pp.zookeeper_clientPort = parameter.getOrElse("hbase.zookeeper.clientPort", "2181")
      pp.zookeeper_quorum = parameter.getOrElse("hbase.zookeeper.quorum", "")
      pp.heartbeat_table = parameter.getOrElse("hbase.heartbeat.table", "plaza_wifi:heartbeat")
      pp.heartbeat_columnFamily = parameter.getOrElse("hbase.heartbeat.columnFamily", "info")
      
      pp.batch_duration_minutes = parameter.getOrElse("batch.duration.minutes", "15").toInt
      pp.window_slide_length=parameter.getOrElse("window.slide.length","1").toInt
      pp.window_length = parameter.getOrElse("window.length", "10").toInt

      pp.graph_table = parameter.getOrElse("hbase.graph.table", "plaza_wifi:recnum_stat")
      pp.graph_columnFamily = parameter.getOrElse("hbase.graph.columnFamily", "info")

      pp.kerbos_ketab = parameter.getOrElse("kerberos.keytab", "")
      pp.kerbos_principal = parameter.getOrElse("kerberos.principal", "")
      pp.jass_conf = parameter.getOrElse("jaas.conf", "")
      pp.krb5_conf = parameter.getOrElse("krb5.conf", "")
      pp.hadoop_conf = parameter.getOrElse("hadoop.conf", "")
      pp.kafka_zookeeper_quorum=parameter.getOrElse("kafka.zookeeper.quorum", "")
      pp.kafka_per_partition_task_num=parameter.getOrElse("kafka.per.partition.task.num", "6").toInt
      pp.spark_checkpoint_dir=parameter.getOrElse("spark.checkpoint.dir",".")
      pp.kafka_fetch_message_max_bytes = parameter.getOrElse("kafka.fetch.message.max.bytes","10485760")
      pp.kafka_stream_num = parameter.getOrElse("kafka.stream.num", "4").toInt
      pp
    }
  }

  def getTimeStamp(): String = {
    val date = new Date(System.currentTimeMillis())
    val sdf: SimpleDateFormat = new SimpleDateFormat("yyyyMMddHHmmss");
    val str: String = sdf.format(date);
    str
  }

  def kerberosVerify(cfg: paracfg): Unit = {
    //设置hadoop和hbase认证机制

    val secureConf = HBaseConfiguration.create()
    secureConf.set("dfs.client.keytab.file", cfg.kerbos_ketab)
    secureConf.set("dfs.client.kerberos.principal", cfg.kerbos_principal)
    System.setProperty("java.security.krb5.conf", cfg.krb5_conf)
    System.setProperty("java.security.auth.login.config", cfg.jass_conf)
    SecurityUtil.login(secureConf, "dfs.client.keytab.file", "dfs.client.kerberos.principal")
    System.out.println("=====Kereros LOGIN OK !!!!!!! ");

//    //设置hadoop和hbase认证机制
//    val configuration =  HBaseConfiguration.create();
//    configuration.set("hbase.security.authentication", "kerberos");
//    configuration.set("hadoop.security.authentication", "kerberos");
//
//
//    //        //设置hdfs认证方式
//    configuration.set("hadoop.security.authentication", "kerberos");
//    configuration.set("hadoop.security.authorization", "true");
//    // 设置namenode、datanode的kerberos principal
//    configuration.set("dfs.datanode.kerberos.principal", "hdfs/_HOST@IDC.FINANCE.WANDA.CN");
//    configuration.set("dfs.namenode.kerberos.principal", "hdfs/_HOST@IDC.FINANCE.WANDA.CN");
//
//
//    //设置principal
//    configuration.set("hbase.master.kerberos.principal", "hbase/_HOST@IDC.WANDA-GROUP.NET");
//    configuration.set("hbase.regionserver.kerberos.principal", "hbase/_HOST@IDC.WANDA-GROUP.NET");
//
//    //    设置kerberos realm与服务端口
//    System.setProperty("java.security.krb5.realm", "IDC.WANDA-GROUP.NET");
//    System.setProperty("java.security.krb5.kdc", "ctum2f0302001.idc.wanda-group.net:88");
//    UserGroupInformation.setConfiguration(configuration);
//
//    //加载keytab文件
//    UserGroupInformation.loginUserFromKeytab(cfg.kerbos_principal, cfg.kerbos_ketab);
//    System.out.println("LOGIN OK !!!!!!! ");
  }
 def getLastSlashStr(str:String):String=
 {

   val array:Array[String] = str.split("/")
   return array(array.length-1)

 }
}

