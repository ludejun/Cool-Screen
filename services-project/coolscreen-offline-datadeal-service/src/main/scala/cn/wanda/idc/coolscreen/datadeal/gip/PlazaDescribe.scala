package cn.wanda.idc.coolscreen.datadeal.gip

import cn.wanda.idc.coolscreen.offline.dd.core.SparkEnv
import org.apache.log4j.Level
import org.apache.log4j.Logger
import org.apache.spark.sql.{ functions => F }
import org.apache.spark.sql.Row
import java.sql.DriverManager
import cn.wanda.idc.coolscreen.offline.dd.core.PropertiesFile
import com.google.gson.GsonBuilder
import cn.wanda.idc.coolscreen.datadeal.OutputUtils
import scala.collection.mutable.HashMap

import spray.json._
import DefaultJsonProtocol._

/**
 * 使用上海周浦 宝山两个百货的2年内的会员分布情况来估计五角场的分布情况
 */
object PlazaDescribe {

  val appname = "coolscreen.gip.dd.PlazaDescribe"
  private lazy val hiveContext = SparkEnv.getSqlExecInstance(Option(Map("spark.app.name" -> appname)))
  Logger.getLogger("org").setLevel(Level.WARN)

  def main(args: Array[String]) {
    //    if (args.length != 1)
    //      System.exit(1);
    //    val plaza_id = args(0)
    //    val sqltext = s"""
    //    select distinct mobile from wifilog.dw_guest_loginwifi_info
    //    where  plaza_id ='${plaza_id}'
    //    """
    val sqltext = """
    select 
    distinct regexp_extract(regexp_replace(b.cdemobile, '\\D',''),'.*?(1\\d{10})',1) as mobile
    from dw_mall.fact_good_sale_detail a
    join staging_mall_c.cardextent  b on a.code_membership = b.cdeno 
    join dw_mall.dim_store f on a.store_id = f.store_id
    where a.code_membership is not null 
    and f.store_name like '%上海%'
    and a.date_id > '20150302'
    """
    val plaza_user = hiveContext.sql(sqltext).persist();

    val ret = HashMap.empty[String, BigDecimal]
    //sex
    val sex_info = hiveContext.sql("select mobile,sex from cool_screen. wanda_user_sex")
    var ds = sex_info.join(plaza_user, sex_info("mobile") === plaza_user("mobile"), "inner")
      .select(sex_info("sex")).persist();
    println("sex:" + ds.count())
    val sex_f_ratio = ds.where("sex='F'").count() / ds.count().toDouble * 100;
    val sex_m_ratio = 100 - sex_f_ratio
    ret.put("sex_f", BigDecimal(f"$sex_f_ratio%1.2f"))
    ret.put("sex_m", BigDecimal(f"$sex_m_ratio%1.2f"))
    ds.unpersist()

    //age
    val age_info = hiveContext.sql("select mobile,age from cool_screen. wanda_user_age")
    val (age1, age2, age3) = age_info.join(plaza_user, age_info("mobile") === plaza_user("mobile"), "inner")
      .select(F.sum(F.when(F.col("age") < 26, 1).otherwise(0)).as("age_1"),
        F.sum(F.when((F.col("age") > 25) && (F.col("age") < 46), 1).otherwise(0)).as("age_2"),
        F.sum(F.when(F.col("age") > 45, 1).otherwise(0)).as("age_2")).collect()
      .map {
        case Row(age1: Long, age2: Long, age3: Long) =>
          (age1, age2, age3)
      }.head
    val shaonian_ratio = age1.toDouble / (age1 + age2 + age3) * 100
    val zhongnian_ratio = age2.toDouble / (age1 + age2 + age3) * 100
    val laonian_ratio = age3.toDouble / (age1 + age2 + age3) * 100
    ret.put("age_youth", BigDecimal(f"$shaonian_ratio%1.2f"))
    ret.put("age_middle", BigDecimal(f"$zhongnian_ratio%1.2f"))
    ret.put("age_old", BigDecimal(f"$laonian_ratio%1.2f"))

    //marry
    val marry_info = hiveContext.sql("select mobile,marry from cool_screen. baidu_user_marry")
    ds = marry_info.join(plaza_user, marry_info("mobile") === plaza_user("mobile"), "inner")
      .select("marry").persist();
    val marry_ratio = ds.where("marry=1").count().toDouble / ds.count() * 100
    val no_marry_ratio = 100 - marry_ratio
    ds.unpersist();
    ret.put("marry_y", BigDecimal(f"$marry_ratio%1.2f"))
    ret.put("marry_n", BigDecimal(f"$no_marry_ratio%1.2f"))

    //消费层次
    val level_info = hiveContext.sql("select mobile,level from cool_screen.wanda_customervalue_level_3")
    val (h, m, l) = level_info.join(plaza_user, level_info("mobile") === plaza_user("mobile"), "inner")
      .select("level")
      .select(F.sum(F.when(F.col("level").like("高"), 1).otherwise(0)).as("h"),
        F.sum(F.when(F.col("level").like("中"), 1).otherwise(0)).as("m"),
        F.sum(F.when(F.col("level").like("低"), 1).otherwise(0)).as("l")).collect()
      .map {
        case Row(h: Long, m: Long, l: Long) =>
          (h, m, l)
      }.head
    val h_ratio = h.toDouble / (h + m + l) * 100
    val m_ratio = m.toDouble / (h + m + l) * 100
    val l_ratio = l.toDouble / (h + m + l) * 100
    ret.put("vl_hight", BigDecimal(f"$h_ratio%1.2f"))
    ret.put("vl_middle", BigDecimal(f"$m_ratio%1.2f"))
    ret.put("vl_low", BigDecimal(f"$l_ratio%1.2f"))

    //      val obj = new jsonobj.PlazaDescribe(sex_f_ratio, sex_m_ratio, marry_ratio, no_marry_ratio,
    //        shaonian_ratio, zhongnian_ratio, laonian_ratio,
    //        h_ratio, m_ratio, l_ratio);
    //      val gson = new GsonBuilder().disableHtmlEscaping().create(); //.setPrettyPrinting()
    val jsons = ret.toMap.toJson.toString() //gson.toJson(obj)
    val id = "plaza_desc";
    OutputUtils.writeJson(id, jsons)
    println(jsons)

    hiveContext.sparkContext.stop()
  }
}