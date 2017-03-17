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
 * 广场人群属性信息
 * 人群属性：sex/age/times to plaza
 */
object PeopleInPlaza {

  private lazy val conf = new SparkConf().setAppName("coolscreen.datadeal.PeopleInPlaza")
  private lazy val sc = new SparkContext(conf)
  private lazy val hiveContext = new HiveContext(sc)

  Logger.getLogger("org").setLevel(Level.WARN)

  val OUTPUT_PATH_AGE = "hdfs://nn-idc/user/hive/warehouse/tmp.db/coolscreen_PeopleInPlaza_AGE"
  val OUTPUT_PATH_SEX = "hdfs://nn-idc/user/hive/warehouse/tmp.db/coolscreen_PeopleInPlaza_SEX"

  def main(args: Array[String]) {

    val sqlage = """
     select mobile,
      cast((year(now())-cast(substring(b.birthday,1,4) as int)) as int) age
      from idc_unified_tagging.user_basic_info b
      where length(b.birthday)>4
      """;

    val sqlsex = """
     select mobile,
      trim(b.sex) sex
      from idc_unified_tagging.user_basic_info b
      where length(trim(b.sex))=1
      """;


    val region_name1_id = hiveContext
      .sql("select distinct region_name1_id from wifilog.dw_guest_loginwifi_info")
      .collect()
      .map { x => x.get(0).toString() }

    val ds_age = hiveContext.sql(sqlage).cache();
    val ds_sex = hiveContext.sql(sqlsex).cache();

    region_name1_id.foreach { x =>

      val sql_login_plaza = s"""
         select mobile,login_num,plaza_name,city,region_name1,region_name0
          from  wifilog.dw_guest_loginwifi_info
          where region_name1_id='${x}'
          """;
      val ds_login = hiveContext.sql(sql_login_plaza).persist()

      //关联有年龄的
      ds_age.join(ds_login, ds_age("mobile") === ds_login("mobile"), "inner")
        .select(ds_login("*"), ds_age("age"))
        .write
        .mode(SaveMode.Overwrite)
        .parquet(OUTPUT_PATH_AGE + s"/region_name1_id=${x}")

      //关联有性别的
      ds_sex.join(ds_login, ds_sex("mobile") === ds_login("mobile"), "inner")
        .select(ds_login("*"), ds_sex("sex"))
        .write
        .mode(SaveMode.Overwrite)
        .parquet(OUTPUT_PATH_SEX + s"/region_name1_id=${x}")
        
      ds_login.unpersist()
    }

    sc.stop()
  }

}
