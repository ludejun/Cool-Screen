package cn.wanda.idc.coolscreen.datadeal.gip

import java.sql.DriverManager

import scala.BigDecimal
import scala.collection.mutable.HashMap

import org.apache.log4j.Level
import org.apache.log4j.Logger
import org.apache.spark.sql.Row
import org.apache.spark.sql.functions.avg

import cn.wanda.idc.coolscreen.datadeal.OutputUtils
import cn.wanda.idc.coolscreen.offline.dd.core.PropertiesFile
import cn.wanda.idc.coolscreen.offline.dd.core.SparkEnv

import spray.json._
import DefaultJsonProtocol._
import org.apache.spark.sql.SaveMode

/**
 * 计算最近一个自然月里广场各业态平均每天的坪效
 */
object IndustryLGE {
  val appname = "coolscreen.gip.dd.IndustryLGE"
  private lazy val hiveContext = SparkEnv.getSqlExecInstance(Option(Map("spark.app.name" -> appname)))

  Logger.getLogger("org").setLevel(Level.WARN)

  def main(args: Array[String]) {
    if (args.length != 1)
      System.exit(1);
    val plaza_id = args(0)
    val cal = java.util.Calendar.getInstance
    cal.add(java.util.Calendar.MONTH, -1)
    val format = new java.text.SimpleDateFormat("yyyyMM");
    val month = format.format(cal.getTime)

    val sql = s"""
    select c.wifi_id,categoryname,brandid,
    avg(cast(salesamount as double)/cast(area as double)) LGE_avg,
    avg(periodin) periodin_avg,
    avg(cast(area as double)) area
    from dw_plaza.contractsummarydata a
    join wifilog.bd_plaza c on c.bass_id=a.plazacode
    where substr(cast(datekey as STRING),1,6)='${month}' 
    and from_unixtime(cast(defaultstartdate/1000 as bigint),'yyyyMM') < '${month}'
    and from_unixtime(cast(defaultexpirydate/1000 as bigint),'yyyyMM') > '${month}'
    and wifi_id='${plaza_id}'
    group by c.wifi_id,categoryname,brandid
    """

    //  val valmap = new java.util.HashMap[String, Double]
    val valmap = HashMap.empty[String, BigDecimal]

    val ret = hiveContext.sql(sql).where("LGE_avg >0");
    ret.write
      .mode(SaveMode.Overwrite)
      .saveAsTable("cool_screen.gip_fact_brand_LGE")

    ret.groupBy("categoryname")
      .agg(avg("LGE_avg"))
      .collect()
      .foreach {
        case Row(categoryname: String, lge: Double) =>
          valmap.put(categoryname, BigDecimal(f"$lge%1.2f"))
      }

    //val gson = new GsonBuilder().disableHtmlEscaping().create(); //.setPrettyPrinting()
    val jsons = valmap.toMap.toJson.toString() // gson.toJson(valmap)

    val id = "industry_lge";
    OutputUtils.writeJson(id, jsons)
    println(jsons)
    hiveContext.sparkContext.stop()
  }
}