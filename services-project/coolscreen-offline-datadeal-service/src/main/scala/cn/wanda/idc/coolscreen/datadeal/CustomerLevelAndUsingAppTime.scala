package cn.wanda.idc.coolscreen.datadeal

import java.sql.DriverManager

import org.apache.log4j.Level
import org.apache.log4j.Logger
import org.apache.spark.SparkConf
import org.apache.spark.SparkContext
import org.apache.spark.sql.hive.HiveContext
import cn.wanda.idc.coolscreen.offline.dd.core.PropertiesFile
import java.util.Calendar
import parquet.schema.Types.ListBuilder
import scala.collection.mutable.ListBuffer

import spray.json._
import scala.collection.mutable.HashMap

/**
 * 不同客户价值层级人群使用app 时间段的人数统计
 * 时间维度：最近一个星期内的工作日、休息天
 */
object CustomerLevelAndUsingAppTime {

  private lazy val conf = new SparkConf().setAppName("coolscreen.datadeal.CustomerLevelAndUsingAppTime")
  private lazy val sc = new SparkContext(conf)
  private lazy val hiveContext = new HiveContext(sc)

  Logger.getLogger("org").setLevel(Level.WARN)

  Class.forName("com.mysql.jdbc.Driver")

  def getWeek(date: Int) = {
    val format = new java.text.SimpleDateFormat("yyyyMMdd");
    val date2 = format.parse(date.toString);
    val calendar = new Calendar.Builder().setInstant(date2).build();
    val weekend = ListBuffer.empty[Int]
    val weekday = ListBuffer.empty[Int]

    for (i <- 0 to 6) {
      calendar.add(Calendar.DAY_OF_MONTH, -1)
      val week = calendar.get(Calendar.DAY_OF_WEEK)
      if (week == 1 || week == 7) {
        weekend += format.format(calendar.getTime).toInt
      } else {
        weekday += format.format(calendar.getTime).toInt
      }
    }
    (weekend.toList, weekday.toList)
  }

  def main(args: Array[String]) {

    val sql = """select nvl(max(access_url_date),20160801) from wifilog.dw_guest_usingapp_hour"""
    val lastdate = hiveContext.sql(sql).collect().take(1)(0).getAs[Int](0)
    val (weekend, weekday) = getWeek(lastdate)
    val weekend_condition = weekend.map { x => "access_url_date = " + x }.mkString(" or ")
    val weekday_condition = weekday.map { x => "access_url_date = " + x }.mkString(" or ")

    val sql1 = s"""
       select level,sum(hour_9),sum(hour_10),sum(hour_11),sum(hour_12),sum(hour_13),sum(hour_14),
          sum(hour_15),sum(hour_16),sum(hour_17),sum(hour_18),sum(hour_19),sum(hour_20),sum(hour_21),
          sum(hour_22),sum(hour_23)
           from wifilog.dw_guest_usingapp_hour a
      join tmp.coolscreen_customer_value_level_3 b on a.mobile=b.mobile
      where ${weekend_condition} 
          group by level
      """;

    val sql2 = s"""
       select level,sum(hour_9),sum(hour_10),sum(hour_11),sum(hour_12),sum(hour_13),sum(hour_14),
          sum(hour_15),sum(hour_16),sum(hour_17),sum(hour_18),sum(hour_19),sum(hour_20),sum(hour_21),
          sum(hour_22),sum(hour_23)
           from wifilog.dw_guest_usingapp_hour a
      join tmp.coolscreen_customer_value_level_3 b on a.mobile=b.mobile
      where ${weekday_condition}
          group by level
      """;

    val dbIp = PropertiesFile.getProperty("database_ip", "10.213.129.36")
    val dbport = PropertiesFile.getProperty("database_port", "3306")
    val dbName = PropertiesFile.getProperty("database_name", "cool_screen")
    val user = PropertiesFile.getProperty("user", "lsd")
    val passwd = PropertiesFile.getProperty("passwd", "lsd")

//    {
//      val conn = DriverManager.getConnection(s"jdbc:mysql://${dbIp}:${dbport}/${dbName}", user, passwd);
//      conn.setAutoCommit(true)
//      conn.createStatement().execute("delete from customer_level_and_usingapp_time")
//      conn.close();
//    }

    val conn = DriverManager.getConnection(s"jdbc:mysql://${dbIp}:${dbport}/${dbName}", user, passwd);
    conn.setAutoCommit(true)

    try {

      val updateState = OutputUtils.getUpdateStatement(conn);
      val insertState = OutputUtils.getInsertStatement(conn);

      val kv = HashMap.empty[String, List[Seq[Int]]]

      hiveContext.sql(sql1).collect()
        .foreach { x =>
          val v = ListBuffer.empty[Seq[Int]]
          val key = "0_" + x.getString(0)
          val days = 2 //if (key.startsWith("0_")) 2 else 5
          for (i <- 1 to 15) {
            v += Seq(8 + i, x.getLong(i).toInt / days)
          }
          kv += (key -> v.toList)
        }

      hiveContext.sql(sql2).collect()
        .foreach { x =>
          val v = ListBuffer.empty[Seq[Int]]
          val key = "1_" + x.getString(0)
          val days = 5
          for (i <- 1 to 15) {
            v += Seq(8 + i, x.getLong(i).toInt / days)
          }
          kv += (key -> v.toList)
        }

      if (kv.size > 0) {
        import DefaultJsonProtocol._

        println("high_cust_ratio_h=" + kv("1_高").toArray.toJson.toString)
        println("high_cust_ratio_h_67=" + kv("0_高").toArray.toJson.toString)
        println("low_cust_ratio_h=" + kv("1_低").toArray.toJson.toString)
        println("low_cust_ratio_h_67=" + kv("0_低").toArray.toJson.toString)
        println("medium_cust_ratio_h=" + kv("1_中").toArray.toJson.toString)
        println("medium_cust_ratio_h_67=" + kv("0_中").toArray.toJson.toString)

        if (OutputUtils.update(updateState, "high_cust_ratio_h", kv("1_高").toArray.toJson.toString) == 0) {
          OutputUtils.insert(insertState, "high_cust_ratio_h", kv("1_高").toArray.toJson.toString)
        }
        if (OutputUtils.update(updateState, "high_cust_ratio_h_67", kv("0_高").toArray.toJson.toString()) == 0) {
          OutputUtils.insert(insertState, "high_cust_ratio_h_67", kv("0_高").toArray.toJson.toString())
        }
        if (OutputUtils.update(updateState, "low_cust_ratio_h", kv("1_低").toArray.toJson.toString()) == 0) {
          OutputUtils.insert(insertState, "low_cust_ratio_h", kv("1_低").toArray.toJson.toString())
        }
        if (OutputUtils.update(updateState, "low_cust_ratio_h_67", kv("0_低").toArray.toJson.toString()) == 0) {
          OutputUtils.insert(insertState, "low_cust_ratio_h_67", kv("0_低").toArray.toJson.toString())
        }
        if (OutputUtils.update(updateState, "medium_cust_ratio_h", kv("1_中").toArray.toJson.toString()) == 0) {
          OutputUtils.insert(insertState, "medium_cust_ratio_h", kv("1_中").toArray.toJson.toString())
        }
        if (OutputUtils.update(updateState, "medium_cust_ratio_h_67", kv("0_中").toArray.toJson.toString()) == 0) {
          OutputUtils.insert(insertState, "medium_cust_ratio_h_67", kv("0_中").toArray.toJson.toString())
        }
      }
    } catch {
      case e: Exception => e.printStackTrace
    } finally {
      conn.close
      sc.stop()
    }

    //    val sqlinsert = """
    //        insert into customer_level_and_usingapp_time values(
    //          ?,?,?,?,?,?,?,?,?,?,      ?,?,?,?,?,?,?
    //        )
    //        """
    //    val insertStat = conn.prepareStatement(sqlinsert)
    //
    //    try {
    //      hiveContext.sql(sql1).collect()
    //        .foreach { x =>
    //          insertStat.setInt(1, 0)
    //          insertStat.setString(2, x.getString(0))
    //          for (i <- 3 to 17) {
    //            insertStat.setInt(i, x.getLong(i - 2).toInt)
    //          }
    //          insertStat.execute()
    //        }
    //      hiveContext.sql(sql2).collect()
    //        .foreach { x =>
    //          insertStat.setInt(1, 1)
    //          insertStat.setString(2, x.getString(0))
    //          for (i <- 3 to 17) {
    //            insertStat.setInt(i, x.getLong(i - 2).toInt)
    //          }
    //          insertStat.execute()
    //        }
    //    } catch {
    //      case e: Exception => e.printStackTrace
    //    } finally {
    //      conn.close
    //      sc.stop()
    //    }

  }
}

