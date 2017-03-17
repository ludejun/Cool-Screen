package cn.wanda.idc.coolscreen.datadeal

import java.sql.DriverManager
import scala.collection.mutable.ListBuffer
import spray.json._
import org.apache.spark.SparkConf
import org.apache.spark.sql.hive.HiveContext
import org.apache.spark.SparkContext
import org.apache.log4j.Level
import cn.wanda.idc.coolscreen.offline.dd.core.PropertiesFile
import org.apache.log4j.Logger
import org.apache.spark.sql.Row

object HWPSexInfo {
  private lazy val conf = new SparkConf().setAppName("coolscreen.datadeal.HWPSexInfo")
  private lazy val sc = new SparkContext(conf)
  private lazy val hiveContext = new HiveContext(sc)

  Logger.getLogger("org").setLevel(Level.WARN)

  def main(args: Array[String]) {

    hiveContext.read
      .option("basePath", CustomerLevelAndGoPlazaNum.OUTPUT_PATH_SEX)
      .parquet(Seq(1, 2, 3, 4, 5).map { x => s"${CustomerLevelAndGoPlazaNum.OUTPUT_PATH_SEX}/level=${x}" }: _*)
      .registerTempTable("high_worth_person_sex_h")

    hiveContext.read
      .option("basePath", CustomerLevelAndGoPlazaNum.OUTPUT_PATH_SEX)
      .parquet(Seq(6, 7, 8, 9, 10).map { x => s"${CustomerLevelAndGoPlazaNum.OUTPUT_PATH_SEX}/level=${x}" }: _*)
      .registerTempTable("high_worth_person_sex_l")

    val sqlh = """
          select '高' level , cast(sum(case when sex='M' then 1 else 0 end) as int) M_cnt,
          cast(sum(case when sex='F' then 1 else 0 end) as int) F_cnt
          from high_worth_person_sex_h 
        """

    val sqll = """
           select '低' level , cast(sum(case when sex='M' then 1 else 0 end) as int) M_cnt,
          cast(sum(case when sex='F' then 1 else 0 end) as int) F_cnt
          from high_worth_person_sex_l
        """

    val dbIp = PropertiesFile.getProperty("database_ip", "10.213.129.36")
    val dbport = PropertiesFile.getProperty("database_port", "3306")
    val dbName = PropertiesFile.getProperty("database_name", "cool_screen")
    val user = PropertiesFile.getProperty("user", "lsd")
    val passwd = PropertiesFile.getProperty("passwd", "lsd")

    val conn = DriverManager.getConnection(s"jdbc:mysql://${dbIp}:${dbport}/${dbName}", user, passwd);
    conn.setAutoCommit(true)

    val updateState = OutputUtils.getUpdateStatement(conn);
    val insertState = OutputUtils.getInsertStatement(conn);

    //    val rsh = conn.createStatement().executeQuery(sqlh);
    //    val rsl = conn.createStatement().executeQuery(sqll);

    case class HWPInfo(male: BigDecimal, female: BigDecimal, marriage: BigDecimal, baby: BigDecimal, car: BigDecimal);
    object HWPAgeHLJsonProtocol extends DefaultJsonProtocol {
      implicit val ln = jsonFormat5(HWPInfo)
    }

    import HWPAgeHLJsonProtocol._
    try {
      hiveContext.sql(sqlh).collect().take(1)(0) match {
        case Row(_, m: Int, f: Int) => {
          val id = "cust_stat_A"
          val json = HWPInfo(m, f, 0, 0, 0).toJson.toString()
          println(id + "|" + json)
          if (OutputUtils.update(updateState, id, json) == 0) {
            OutputUtils.insert(insertState, id, json)
          }
        }
        case _ => println("match errorf")
      }

      val agel = hiveContext.sql(sqll).collect().take(1)(0) match {
        case Row(_, m: Int, f: Int) => {
          val id_b = "cust_stat_B"
          val json_b = HWPInfo(m, f, 0, 0, 0).toJson.toString()
          println(id_b + "|" + json_b)
          if (OutputUtils.update(updateState, id_b, json_b) == 0) {
            OutputUtils.insert(insertState, id_b, json_b)
          }
        }
        case _ => println("match errorf")
      }
    } catch {
      case e: Exception => e.printStackTrace
    } finally {
      conn.close
    }

    sc.stop()
  }
}