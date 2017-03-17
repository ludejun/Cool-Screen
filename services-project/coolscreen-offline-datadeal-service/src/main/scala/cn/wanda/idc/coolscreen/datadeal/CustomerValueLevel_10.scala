package cn.wanda.idc.coolscreen.datadeal

import org.apache.spark.SparkConf
import org.apache.spark.SparkContext
import org.apache.spark.sql.hive.HiveContext
import org.apache.spark.sql.SaveMode
import org.apache.log4j.Level
import org.apache.log4j.Logger

/**
 * 从表idc_unified_tagging.customer_value_total_rank_level_new
 * 中导入数据，将value_level 10等分
 * 生成表：tmp.coolscreen_customer_value_level_10
 */
object CustomerValueLevel_10 {

  private lazy val conf = new SparkConf().setAppName("coolscreen.datadeal.create_CustomerValueLevel")
  private lazy val sc = new SparkContext(conf)
  private lazy val hiveContext = new HiveContext(sc)

  Logger.getLogger("org").setLevel(Level.WARN)

  val OUTPUT_PATH = "hdfs://nn-idc/user/hive/warehouse/tmp.db/coolscreen_customer_value_level_10"
  
  def main(args: Array[String]) {

    val sqlText = """
     select  case when hotel_mobile is not null then hotel_mobile
	 			  when mall_mobile is not null then mall_mobile
	 			  when ffan_mobile is not null then ffan_mobile
	 		 end mobile,
	    value_level level
      from idc_unified_tagging.customer_value_total_rank_level
      where hotel_mobile is not null or mall_mobile is not null or ffan_mobile is not null
      """;

    val dataset_hw = hiveContext.sql(sqlText).cache()
    for (level <- 1 to 10) {
      dataset_hw.where(s"level=$level")
        .write
        .mode(SaveMode.Overwrite)
        .parquet(OUTPUT_PATH + s"/level=$level")
    }
    sc.stop()
  }

}
