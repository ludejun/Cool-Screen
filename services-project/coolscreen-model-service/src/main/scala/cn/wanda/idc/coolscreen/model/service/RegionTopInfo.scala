package cn.wanda.idc.coolscreen.model.service

import java.sql.DriverManager
import scala.collection.mutable.ListBuffer
import cn.wanda.idc.coolscreen.core.Executor
import spray.json._
import java.sql.ResultSet
import java.sql.Connection
import cn.wanda.idc.coolscreen.core.PropertiesFile

class RegionTopInfo extends Executor {

  var conn: Connection = null;

  case class RegionRate(name: String, ratio: Int)

  object RateJsonProtocol extends DefaultJsonProtocol {
    implicit val regionRateFormat = jsonFormat2(RegionRate)
  }
  import RateJsonProtocol._

  def city_json() = {
    val sql = getSql("city_name")
    val rs = executeSql(sql)
    val cityRates = ListBuffer.empty[RegionRate]
    while (rs.next) {
      cityRates += RegionRate(rs.getString("city_name"), rs.getInt("guests"))
    }
    import RateJsonProtocol._
    cityRates.sortBy { x => x.ratio }.takeRight(5).toArray.toJson.toString()
  }

  def province_json() = {
    val sql = getSql("region_name1")
    val rs = executeSql(sql)
    val provinceRates = ListBuffer.empty[RegionRate]
    while (rs.next) {
      provinceRates += RegionRate(rs.getString("region_name1"), rs.getInt("guests"))
    }
    import RateJsonProtocol._
    provinceRates.sortBy { x => x.ratio }.takeRight(5).toArray.toJson.toString()
  }

  def region_json() = {
    val sql = getSql("region_name0")
    val rs = executeSql(sql)
    val regionRates = ListBuffer.empty[RegionRate]
    while (rs.next) {
      regionRates += RegionRate(rs.getString("region_name0"), rs.getInt("guests"))
    }
    import RateJsonProtocol._
    regionRates.toArray.toJson.toString()
  }

  def executeSql(sqlText: String) = {
    val statement = conn.createStatement(ResultSet.TYPE_FORWARD_ONLY, ResultSet.CONCUR_READ_ONLY)
    val rs = statement.executeQuery(sqlText)
    rs
  }
  def getSql(name: String) = {
    val sql = s"""
      select ${name},sum(guests) guests from plaza_guests a
      join plaza_region_info b on a.id=b.id
      group by ${name}
      """
    sql
  }

  def exec() = {

    val dbIp = PropertiesFile.getProperty("database_ip", "10.213.129.36")
    val dbport = PropertiesFile.getProperty("database_port", "3306")
    val dbName = PropertiesFile.getProperty("database_name", "cool_screen")
    val user = PropertiesFile.getProperty("user", "lsd")
    val passwd = PropertiesFile.getProperty("passwd", "lsd")

    conn = DriverManager.getConnection(s"jdbc:mysql://${dbIp}:${dbport}/${dbName}", user, passwd);

    try {
      val updateState = getUpdateStatement(conn);
      val insertState = getInsertStatement(conn);

      val cityj = city_json()
      println(cityj)
      val ret = update(updateState, "city_top", cityj);
      println(ret)
      if (ret < 1) {
        insert(insertState, "city_top", cityj)
      }
      val provincej = province_json()
      println(provincej)
      if (update(updateState, "province_top", provincej) < 1) {
        insert(insertState, "province_top", provincej)
      }
      val regionj = region_json()
      println(regionj)
      if (update(updateState, "region_top", regionj) < 1) {
        insert(insertState, "region_top", regionj)
      }
    } catch {
      case e: Exception => e.printStackTrace
    } finally {
      conn.close
    }
  }
}