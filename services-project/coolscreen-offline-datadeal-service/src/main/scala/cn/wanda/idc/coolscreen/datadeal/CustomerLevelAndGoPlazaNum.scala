package cn.wanda.idc.coolscreen.datadeal

import java.sql.DriverManager

import org.apache.log4j.Level
import org.apache.log4j.Logger
import org.apache.spark.SparkConf
import org.apache.spark.SparkContext
import org.apache.spark.sql.Row
import org.apache.spark.sql.hive.HiveContext

import cn.wanda.idc.coolscreen.offline.dd.core.PropertiesFile
import org.apache.spark.sql.SaveMode

/**
 * 不同客户价值层级人群逛广场的次数
 * 人群属性：level \ age \ sex
 */
object CustomerLevelAndGoPlazaNum {

  private lazy val conf = new SparkConf().setAppName("coolscreen.datadeal.CustomerLevelAndGoPlazaNum")
  private lazy val sc = new SparkContext(conf)
  private lazy val hiveContext = new HiveContext(sc)

  Logger.getLogger("org").setLevel(Level.WARN)

  val OUTPUT_PATH_AGE = "hdfs://nn-idc/user/hive/warehouse/tmp.db/coolscreen_CustomerLevelAndGoPlazaNum_AGE"
  val OUTPUT_PATH_SEX = "hdfs://nn-idc/user/hive/warehouse/tmp.db/coolscreen_CustomerLevelAndGoPlazaNum_SEX"

  def main(args: Array[String]) {

    val sql_gli = s"""
     select 
      a.mobile,
      a.login_num,
      a.plaza_id,
      a.plaza_name,
      a.city,
      a.region_name1,
      a.region_name0
      from wifilog.dw_guest_loginwifi_info a
      """;

    val sql_age = """
    select mobile,cast((year(now())-cast(substring(a.birthday,1,4) as int)) as int) age
    	from idc_unified_tagging.user_basic_info a
    	where length(a.birthday)>4
      """;
    val sql_sex = """
    select mobile,sex
    	from idc_unified_tagging.user_basic_info a
    	where length(a.sex)>0
      """;

    val dataset_age = hiveContext.sql(sql_age).persist();
    val dataset_gli = hiveContext.sql(sql_gli).persist();

    //关联有年龄的
    for (level <- 1 to 10) {
      val dataset_cvl = hiveContext.read
      //  .option("basePath", CustomerValueLevel_10.OUTPUT_PATH)
        .parquet(CustomerValueLevel_10.OUTPUT_PATH + s"/level=$level")
      val dataset_hw = dataset_gli.join(dataset_cvl, dataset_gli("mobile") === dataset_cvl("mobile"), "inner")
        .select(dataset_gli("*"));
      dataset_age.join(dataset_hw, dataset_hw("mobile") === dataset_age("mobile"), "inner")
        .select(dataset_hw("*"), dataset_age("age"))
        .write
        .mode(SaveMode.Overwrite)
        .parquet(OUTPUT_PATH_AGE + s"/level=${level}")
    }
    dataset_age.unpersist()
    //关联有性别的
    val dataset_sex = hiveContext.sql(sql_sex).persist();
    for (level <- 1 to 10) {
      val dataset_cvl = hiveContext.read.parquet(CustomerValueLevel_10.OUTPUT_PATH + s"/level=$level")
      val dataset_hw = dataset_gli.join(dataset_cvl, dataset_gli("mobile") === dataset_cvl("mobile"), "inner")
        .select(dataset_gli("*"));

      dataset_sex.join(dataset_hw, dataset_hw("mobile") === dataset_sex("mobile"), "inner")
        .select(dataset_hw("*"), dataset_sex("sex"))
        .write
        .mode(SaveMode.Overwrite)
        .parquet(OUTPUT_PATH_SEX + s"/level=${level}")

    }
    dataset_sex.unpersist()
    sc.stop()
  }

}
