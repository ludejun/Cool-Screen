package cn.wanda.idc.coolscreen.datadeal

import java.sql.DriverManager

import org.apache.log4j.Level
import org.apache.log4j.Logger
import org.apache.spark.SparkConf
import org.apache.spark.SparkContext
import org.apache.spark.sql.Row
import org.apache.spark.sql.hive.HiveContext

import cn.wanda.idc.coolscreen.offline.dd.core.PropertiesFile
import java.sql.PreparedStatement
import java.sql.Connection

import spray.json._
import scala.collection.mutable.ListBuffer

object HWPAgeInfo {

  private lazy val conf = new SparkConf().setAppName("coolscreen.datadeal.CustomerLevelAndGoPlazaNum")
  private lazy val sc = new SparkContext(conf)
  private lazy val hiveContext = new HiveContext(sc)

  val dbIp = PropertiesFile.getProperty("database_ip", "10.213.129.36")
  val dbport = PropertiesFile.getProperty("database_port", "3306")
  val dbName = PropertiesFile.getProperty("database_name", "cool_screen")
  val user = PropertiesFile.getProperty("user", "lsd")
  val passwd = PropertiesFile.getProperty("passwd", "lsd")

  Class.forName("com.mysql.jdbc.Driver")

  Logger.getLogger("org").setLevel(Level.WARN)

  def main(args: Array[String]) {

//    conf.set("spark.master", "yarn-client")
//      .set("spark.executor.memory", "8G")
//      .set("spark.driver.cores", "2")
//      .set("spark.driver.memory", "4G")
//      .set("spark.executor.cores", "2")
//      .set("spark.submit.deployMode", "client")
//      .set("spark.executor.instances", "4")
    hiveContext.read
      .option("basePath", CustomerLevelAndGoPlazaNum.OUTPUT_PATH_AGE)
      .parquet(Seq(1, 2, 3, 4, 5).map { x => s"${CustomerLevelAndGoPlazaNum.OUTPUT_PATH_AGE}/level=${x}" }: _*)
      .registerTempTable("high_worth_person_age_h")


    hiveContext.read
      .option("basePath", CustomerLevelAndGoPlazaNum.OUTPUT_PATH_AGE)
      .parquet(Seq(6, 7, 8, 9, 10).map { x => s"${CustomerLevelAndGoPlazaNum.OUTPUT_PATH_AGE}/level=${x}" }: _*)
      .registerTempTable("high_worth_person_age_l")

    val sqlh = """
           select '高' level , cast(sum(case when age<25 then 1 else 0 end) as int) age_0_25,
              cast(sum(case when age>=25 and age< 45 then 1 else 0 end) as int) age_25_45,
              cast(sum(case when age>=45 then 1 else 0 end) as int) age_45_
              from high_worth_person_age_h 
        """

    val sqll = """
           select '低' level , cast(sum(case when age<25 then 1 else 0 end) as int) age_0_25,
              cast(sum(case when age>=25 and age< 45 then 1 else 0 end) as int) age_25_45,
              cast(sum(case when age>=45 then 1 else 0 end) as int) age_45_
              from high_worth_person_age_l
        """

    val conn = DriverManager.getConnection(s"jdbc:mysql://${dbIp}:${dbport}/${dbName}", user, passwd);
    conn.setAutoCommit(true)

    try {

      val updateState = OutputUtils.getUpdateStatement(conn);
      val insertState = OutputUtils.getInsertStatement(conn);

      //      val rsh = conn.createStatement().executeQuery(sqlh);
      //      val rsl = conn.createStatement().executeQuery(sqll);
      case class HWPAge(age: String, ratio: BigDecimal);
      object HWPAgeHLJsonProtocol extends DefaultJsonProtocol {
        implicit val ln = jsonFormat2(HWPAge)
      }

      val ageh = //ListBuffer.empty[HWPAge];
        hiveContext.sql(sqlh).collect().head match {
          case Row(level: String, age_0_25: Int, age_25_45: Int, age_45_ : Int) =>
            Seq(HWPAge("25以下", age_0_25),
              HWPAge("26-45", age_25_45),
              HWPAge("46以上", age_45_));
          case _ => println("scala.MatchError"); Seq.empty[HWPAge]
        }

      val sumh = ageh.map { x => x.ratio }.sum
      val ageh_r = ageh.map { x =>
        val r = (x.ratio / sumh.toDouble) * 100
        val f_v = f"$r%1.2f"
        HWPAge(x.age, BigDecimal(f_v))
      }

      val agel = //ListBuffer.empty[HWPAge];
        hiveContext.sql(sqll).collect().head match {
          case Row(level: String, age_0_25: Int, age_25_45: Int, age_45_ : Int) => {
            Seq(HWPAge("25以下", age_0_25),
              HWPAge("26-45", age_25_45),
              HWPAge("46以上", age_45_));
          }
          case _ => { println("scala.MatchError"); ; Seq.empty[HWPAge] }
        }
      val suml = agel.map { x => x.ratio }.sum
      val agel_r = agel.map { x =>
        val r = (x.ratio / suml.toDouble) * 100
        val f_v = f"$r%1.2f"
        HWPAge(x.age, BigDecimal(f_v))
      }

      import HWPAgeHLJsonProtocol._

      val id = "cust_age_A"
      val json = ageh_r.toArray.toJson.toString()
      val id_b = "cust_age_B"
      val json_b = agel_r.toArray.toJson.toString()
      println(id + "|" + json)
      println(id_b + "|" + json_b)

      if (json.length() > 0)
        if (OutputUtils.update(updateState, id, json) == 0) {
          OutputUtils.insert(insertState, id, json)
        }

      if (json_b.length() > 0)
        if (OutputUtils.update(updateState, id_b, json_b) == 0) {
          OutputUtils.insert(insertState, id_b, json_b)
        }
    } catch {
      case e: Exception => e.printStackTrace
    } finally {
      conn.close
    }
   
    sc.stop()
  }
}