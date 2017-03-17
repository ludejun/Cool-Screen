package cn.wanda.idc.coolscreen.datadeal.gip

import java.sql.DriverManager

import org.apache.log4j.Level
import org.apache.log4j.Logger
import org.apache.spark.SparkConf
import org.apache.spark.SparkContext
import org.apache.spark.sql.Row
import org.apache.spark.sql.hive.HiveContext

import cn.wanda.idc.coolscreen.offline.dd.core.PropertiesFile
import org.apache.spark.sql.SaveMode
import cn.wanda.idc.coolscreen.offline.dd.core.SparkEnv

/**
 * 招商平台展示：用户画像
 * 人群属性：年龄、性别、婚姻、生育占比、收入、消费层次（高、中、低档）
 *
 */
object CrowdAttributes {

  private lazy val hiveContext = SparkEnv.getSqlExecInstance()

  Logger.getLogger("org").setLevel(Level.WARN)

  val OUTPUT_PATH_AGE = "hdfs://nn-idc/user/hive/warehouse/tmp.db/coolscreen_CustomerLevelAndGoPlazaNum_AGE"
  val OUTPUT_PATH_SEX = "hdfs://nn-idc/user/hive/warehouse/tmp.db/coolscreen_CustomerLevelAndGoPlazaNum_SEX"

  def main(args: Array[String]) {

    val sql_age = """
    select mobile,cast((year(now())-cast(substring(a.birthday,1,4) as int)) as int) age
    	from idc_unified_tagging.user_basic_info a
    	where length(a.birthday)>4
      """;
    hiveContext.sql(sql_age).write.mode(SaveMode.Overwrite).saveAsTable("cool_screen.wanda_user_age")

    val sql_sex = """
    select mobile,sex
    	from idc_unified_tagging.user_basic_info a
    	where length(a.sex)>0
      """;
    hiveContext.sql(sql_sex)
      .write
      .mode(SaveMode.Overwrite)
      .saveAsTable("cool_screen.wanda_user_sex")

    val sql_marry = """
      select mobile,
      case when life_stage='考研' then 0
           when life_stage='高中生' then 0
           when life_stage='大学生' then 0
           when life_stage='研究生' then 0
           when life_stage='备婚' then 0
      else 1 end marry
      from baidu_ffan.baidu_to_wanda_final
      where life_stage!='null'
    """

    hiveContext.sql(sql_marry)
      .write
      .mode(SaveMode.Overwrite)
      .saveAsTable("cool_screen.baidu_user_marry")

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
      .saveAsTable("cool_screen.wanda_customervalue_level_3");

    hiveContext.sparkContext.stop()
  }

}
