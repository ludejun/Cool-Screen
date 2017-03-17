package cn.wanda.idc.coolscreen.datadeal

import org.apache.spark.SparkConf
import org.apache.spark.SparkContext
import org.apache.spark.sql.hive.HiveContext
import org.apache.spark.sql.SaveMode
import org.apache.spark.sql.types.StructField
import org.apache.spark.sql.types.StructType
import org.apache.spark.sql.Row
import org.apache.spark.sql.types.IntegerType
import org.apache.log4j.Level
import org.apache.log4j.Logger
import java.sql.DriverManager
import cn.wanda.idc.coolscreen.offline.dd.core.PropertiesFile
import scala.collection.mutable.ListBuffer
import spray.json._

object UseAAppGuestsHour extends App {
  private lazy val conf = new SparkConf().setAppName("coolscreen.datadeal.UseAAppGuestsHour")
  private lazy val sc = new SparkContext(conf)
  private lazy val hiveContext = new HiveContext(sc)

  Logger.getLogger("org").setLevel(Level.WARN)

  Class.forName("com.mysql.jdbc.Driver")

  if (this.args.size != 2) {
    println("access_url_date    app_name")
    System.exit(0)
  }
  val access_url_date = this.args(0)
  val app_name = this.args(1)

  val sqlText = s"""
  select app_name,
		hour(cast(access_url_time as timestamp)) as  hour,
    count(distinct mobile) num
		from wifilog.httplog
		where access_url_date=${access_url_date}
    and app_name like '${app_name}'
    group by app_name,hour(cast(access_url_time as timestamp))
"""

  val dbIp = PropertiesFile.getProperty("database_ip", "10.213.129.36")
  val dbport = PropertiesFile.getProperty("database_port", "3306")
  val dbName = PropertiesFile.getProperty("database_name", "cool_screen")
  val user = PropertiesFile.getProperty("user", "lsd")
  val passwd = PropertiesFile.getProperty("passwd", "lsd")

  val conn = DriverManager.getConnection(s"jdbc:mysql://${dbIp}:${dbport}/${dbName}", user, passwd);
  conn.setAutoCommit(true)

  try {

    val updateState = OutputUtils.getUpdateStatement(conn);
    val insertState = OutputUtils.getInsertStatement(conn);
    val kv = ListBuffer.empty[Seq[Int]]

    hiveContext.sql(sqlText).where("hour>8").collect()
      .foreach { x =>
        kv += Seq(x.getInt(1), x.getLong(2).toInt)
      }
    if (kv.size > 0) {
      import DefaultJsonProtocol._

      println("zfb_by_hour=" + kv.toArray.toJson.toString)

      if (OutputUtils.update(updateState, "zfb_by_hour", kv.toArray.toJson.toString()) == 0) {
        OutputUtils.insert(insertState, "zfb_by_hour", kv.toArray.toJson.toString)
      }
    }
  } catch {
    case e: Exception => e.printStackTrace
  } finally {
    conn.close
    sc.stop()
  }
}