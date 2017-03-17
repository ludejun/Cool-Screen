package cn.wanda.idc.coolscreen.datadeal.gip

import java.util.Calendar

import scala.collection.mutable.HashMap
import scala.collection.mutable.ListBuffer

import org.apache.log4j.Level
import org.apache.log4j.Logger
import org.apache.spark.sql.Row
import org.apache.spark.sql.SaveMode

import spray.json._
import DefaultJsonProtocol._

import cn.wanda.idc.coolscreen.offline.dd.core.SparkEnv
import cn.wanda.idc.coolscreen.offline.dd.core.PropertiesFile
import java.sql.DriverManager
import cn.wanda.idc.coolscreen.datadeal.OutputUtils

/**
 * 广场最近一星期每天的客流量
 */
object PlazaPassenger {

  val appname = "coolscreen.gip.dd.PlazaPassenger"
  lazy val hiveContext = SparkEnv.getSqlExecInstance(Option(Map("spark.app.name" -> appname)))
  Logger.getLogger("org").setLevel(Level.WARN)

  def getWeek(date: Int) = {
    val format = new java.text.SimpleDateFormat("yyyyMMdd");
    val date2 = format.parse(date.toString);
    val calendar = new Calendar.Builder().setInstant(date2).build();
    val daykey = ListBuffer.empty[Int]

    for (i <- 0 to 6) {
      calendar.add(Calendar.DAY_OF_MONTH, -1)
      daykey += format.format(calendar.getTime).toInt
    }
    daykey
  }

  def main(args: Array[String]) {

    if (args.length != 1)
      System.exit(1);

    val plaza_id = args(0)
    val maxdate = hiveContext.sql("select max(datekey) from dw_plaza.SummaryPassengerLocation")
      .collect().head.getInt(0)

    val daykeys = getWeek(maxdate)
    val condition = daykeys.map { x => "datekey = " + x }.mkString(" or ")

    val sql = s"""
      select b.wifi_id plaza_id, a.datekey,
      cast((cast(a.periodin as int) +cast(a.periodout as int))/2 as int) periodin
      from dw_plaza.SummaryPassengerLocation a
      join wifilog.bd_plaza b on a.plazacode=b.bass_id
      where (${condition})
      and a.typeid=6
      and b.wifi_id='${plaza_id}'
    """

    val ds = hiveContext.sql(sql);
    ds.write
      .mode(SaveMode.Overwrite)
      .saveAsTable("cool_screen.gip_plaza_passenger")

    val valmap = HashMap.empty[String, Int]

    ds.select("datekey", "periodin").collect().foreach {
      case Row(key: Int, v: Int) =>
        valmap.put(key.toString(), v)
    }

    val jsons = valmap.toMap.toJson.toString()
    val id = "plaza_passenger"

    OutputUtils.writeJson(id, jsons)
    println(jsons)
    hiveContext.sparkContext.stop()

  }
}