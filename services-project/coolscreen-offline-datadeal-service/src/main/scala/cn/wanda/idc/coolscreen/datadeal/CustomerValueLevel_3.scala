package cn.wanda.idc.coolscreen.datadeal

import org.apache.spark.SparkConf
import org.apache.spark.SparkContext
import org.apache.spark.sql.hive.HiveContext
import org.apache.spark.sql.SaveMode
import org.apache.log4j.Level
import org.apache.log4j.Logger

/**
 * 从表idc_unified_tagging.customer_value_total_rank_level_new
 * 中导入数据，将value_level 3等分
 * 生成表：tmp.coolscreen_customer_value_level_3
 */
object CustomerValueLevel_3 {

  private lazy val conf = new SparkConf().setAppName("coolscreen.datadeal.create_CustomerValueLevel")
  private lazy val sc = new SparkContext(conf)
  private lazy val hiveContext = new HiveContext(sc)

  Logger.getLogger("org").setLevel(Level.WARN)

  def main(args: Array[String]) {

    val sqlText = """
     select  case when hotel_mobile is not null then hotel_mobile
	 			  when mall_mobile is not null then mall_mobile
	 			  when ffan_mobile is not null then ffan_mobile
	 		 end mobile,
      case when value_level =1 or value_level =2 or value_level =3 then '高'
           when value_level =4 or value_level =5 or value_level =6 or value_level =7 then '中'
           when value_level =8 or value_level =9 or value_level =10 then '低'
       end level
      from idc_unified_tagging.customer_value_total_rank_level
      where hotel_mobile is not null or mall_mobile is not null or ffan_mobile is not null
      """;

    val dataset_hw = hiveContext.sql(sqlText)
      .write
      .mode(SaveMode.Overwrite)
      .saveAsTable("tmp.coolscreen_customer_value_level_3");

    sc.stop()
  }

}
