package cn.wanda.idc.coolscreen.datadeal

import java.sql.DriverManager
import scala.collection.mutable.ListBuffer
import spray.json._
import cn.wanda.idc.coolscreen.offline.dd.core.PropertiesFile
import org.apache.spark.SparkConf
import org.apache.spark.sql.hive.HiveContext
import org.apache.spark.SparkContext
import org.apache.log4j.Level
import org.apache.log4j.Logger
import org.apache.spark.sql.Row

object HWPLoginPlazaNumsInfo {

  private lazy val conf = new SparkConf().setAppName("coolscreen.datadeal.HWPLoginPlazaNumsInfo")
  private lazy val sc = new SparkContext(conf)
  private lazy val hiveContext = new HiveContext(sc)

  Logger.getLogger("org").setLevel(Level.WARN)

  def main(args: Array[String]) {

    hiveContext.read
      .option("basePath", CustomerLevelAndGoPlazaNum.OUTPUT_PATH_SEX)
      .parquet(Seq(1, 2, 3).map { x => s"${CustomerLevelAndGoPlazaNum.OUTPUT_PATH_SEX}/level=${x}" }: _*)
      .registerTempTable("high_worth_person_sex_h")

    hiveContext.read
      .option("basePath", CustomerLevelAndGoPlazaNum.OUTPUT_PATH_SEX)
      .parquet(Seq(4, 5, 6, 7).map { x => s"${CustomerLevelAndGoPlazaNum.OUTPUT_PATH_SEX}/level=${x}" }: _*)
      .registerTempTable("high_worth_person_sex_m")

    hiveContext.read
      .option("basePath", CustomerLevelAndGoPlazaNum.OUTPUT_PATH_SEX)
      .parquet(Seq(8, 9, 10).map { x => s"${CustomerLevelAndGoPlazaNum.OUTPUT_PATH_SEX}/level=${x}" }: _*)
      .registerTempTable("high_worth_person_sex_l")

    val sql = """
    select '高' level , count(1) num,sum(login_num) logins from high_worth_person_sex_h
    union all
    select '中' level , count(1) num,sum(login_num) logins from high_worth_person_sex_m
    union all
    select '低' level , count(1) num,sum(login_num) logins from high_worth_person_sex_l
  """

    val dbIp = PropertiesFile.getProperty("database_ip", "10.213.129.36")
    val dbport = PropertiesFile.getProperty("database_port", "3306")
    val dbName = PropertiesFile.getProperty("database_name", "cool_screen")
    val user = PropertiesFile.getProperty("user", "lsd")
    val passwd = PropertiesFile.getProperty("passwd", "lsd")

    val rs = hiveContext.sql(sql).collect();
    //  rs.show(10)
    val conn = DriverManager.getConnection(s"jdbc:mysql://${dbIp}:${dbport}/${dbName}", user, passwd);
    try {

      val updateState = OutputUtils.getUpdateStatement(conn);
      val insertState = OutputUtils.getInsertStatement(conn);

      // val rs = conn.createStatement().executeQuery(sql);
      case class LevelNum(level: String, ratio: BigDecimal);
      object LevelNumJsonProtocol extends DefaultJsonProtocol {
        implicit val ln = jsonFormat2(LevelNum)
      }
      val levelNums = ListBuffer.empty[(String, Long, Long)];
      rs.foreach {
        case Row(level: Any, num: Any, logins: Any) =>
          levelNums += ((level.toString(), num.asInstanceOf[Long], logins.asInstanceOf[Long]))
          println((level, num, logins))
        case _ => println("aaaaaa")
      }
      println(levelNums.toSeq)
      val cust_spend = levelNums.map(x => (x._1, x._2))
      val cust_login = levelNums.map(x => (x._1, x._3))

      val cust_spends = cust_spend.map(x => x._2).sum
      val cust_logins = cust_login.map(x => x._2).sum
      val cust_spend_obj = cust_spend.map {
        case (l, v) =>
          val v1 = (v / cust_spends.toDouble) * 100
          val f_v = f"$v1%1.2f"
          LevelNum(l, BigDecimal(f_v))
      }
      val cust_salary_obj = cust_login.map {
        case (l, v) =>
          val v1 = (v / cust_logins.toDouble) * 100
          val f_v = f"$v1%1.2f"
          LevelNum(l, BigDecimal(f_v))
      }

      import LevelNumJsonProtocol._

      val id = "cust_spend"
      val json = cust_spend_obj.toArray.toJson.toString()
      val id_b = "cust_salary"
      val json_b = cust_salary_obj.toArray.toJson.toString()
      println(id + "|" + json)
      println(id_b + "|" + json_b)

      if (OutputUtils.update(updateState, id, json) == 0) {
        OutputUtils.insert(insertState, id, json)
      }

      if (OutputUtils.update(updateState, id_b, json_b) == 0) {
        OutputUtils.insert(insertState, id_b, json_b)
      }
    } catch {
      case e: Exception => e.printStackTrace
    } finally {
      conn.close
      sc.stop()
    }
  }
}