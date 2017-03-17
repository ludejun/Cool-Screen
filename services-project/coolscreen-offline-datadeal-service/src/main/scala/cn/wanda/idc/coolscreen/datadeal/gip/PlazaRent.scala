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
 * 最近广场各业态的租金指数
 */
object PlazaRent {

  val appname = "coolscreen.gip.dd.PlazaRent"
  lazy val hiveContext = SparkEnv.getSqlExecInstance(Option(Map("spark.app.name" -> appname)))
  Logger.getLogger("org").setLevel(Level.WARN)



  def main(args: Array[String]) {

    
    val sql = s"""
    select b.categoryname, b.total_rent/min(b.total_rent) over (partition by b.c) norm_rent
    from 
    (
    	select  c,categoryname,sum(rent) total_rent
    	from 
    	(
    		select categoryname,cast(area as double)*cast(rentprice as double)/30 rent,1 as c
    		from dw_plaza.contractsummarydata 
    		where plazaname='上海五角场万达广场' and statis_date ='20170202'
    	) a
    	group by a.c,a.categoryname
    ) b
    """

    val ds = hiveContext.sql(sql);
    ds.write
      .mode(SaveMode.Overwrite)
      .saveAsTable("cool_screen.gip_plaza_rent")

    val valmap = HashMap.empty[String, Double]

    ds.select("categoryname", "norm_rent").collect().foreach {
      case Row(key: String, v: Double) =>
        valmap.put(key, v)
    }

    val jsons = valmap.toMap.toJson.toString()
    val id = "plaza_rent"

    OutputUtils.writeJson(id, jsons)
     println(s"$id | $jsons ")
    
    val sql2="""
    select categoryname,total_rent/total_salesamount rental_ratio from 
    (select categoryname,sum(rent) total_rent,sum(cast(salesamount as double)) total_salesamount
    from (select datekey,categoryname,cast(area as double)*cast(rentprice as double)/30 rent,salesamount 
    from dw_plaza.contractsummarydata
    where plazaname='上海五角场万达广场' and substring(statis_date,1,6)='201702') a
    group by categoryname) b
    """
    
     val ds2 = hiveContext.sql(sql2);
    ds2.write
      .mode(SaveMode.Overwrite)
      .saveAsTable("cool_screen.gip_plaza_rental_ratio")

    val valmap2 = HashMap.empty[String, Double]

    ds2.select("categoryname", "rental_ratio").collect().foreach {
      case Row(key: String, v: Double) =>
        valmap2.put(key, v)
    }

    val jsons2 = valmap2.toMap.toJson.toString()
    val id2 = "plaza_rental_ratio"

    OutputUtils.writeJson(id2, jsons2)
    println(s"$id2 | $jsons2 ")
    
    hiveContext.sparkContext.stop()

  }
}