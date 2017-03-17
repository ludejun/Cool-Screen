package cn.wanda.idc.coolscreen.datadeal

import java.sql.DriverManager

import org.apache.spark.SparkConf
import org.apache.spark.SparkContext
import org.apache.spark.sql.Row
import org.apache.spark.sql.hive.HiveContext
import org.apache.log4j.Level
import org.apache.log4j.Logger
import cn.wanda.idc.coolscreen.offline.dd.core.PropertiesFile

object PlazaRegionInfo {

  private lazy val conf = new SparkConf().setAppName("coolscreen.datadeal.create_PlazaRegionInfo")
  private lazy val sc = new SparkContext(conf)
  private lazy val hiveContext = new HiveContext(sc)

  Logger.getLogger("org").setLevel(Level.WARN)

  def main(args: Array[String]) {

    val sql = """
    select distinct d.plaza_id , d.plaza_name ,g.name,f.region_name1 ,f.region_name0
    from dwd_ffan.basedata_plaza d 
    join wifilog.bd_city_info g on g.id=d.city_id
    join wifilog.bd_region f on f.id = g.region_id
  """

    val dbIp = PropertiesFile.getProperty("database_ip", "10.213.129.36")
    val dbport = PropertiesFile.getProperty("database_port", "3306")
    val dbName = PropertiesFile.getProperty("database_name", "cool_screen")
    val user = PropertiesFile.getProperty("user", "lsd")
    val passwd = PropertiesFile.getProperty("passwd", "lsd")

    {
      val conn = DriverManager.getConnection(s"jdbc:mysql://${dbIp}:${dbport}/${dbName}", user, passwd);
      conn.setAutoCommit(true)
      conn.createStatement().execute("delete from plaza_region_info")
      conn.close();
    }

    hiveContext.sql(sql).rdd
      .foreachPartition { x =>
        Class.forName("com.mysql.jdbc.Driver")
        val conn = DriverManager.getConnection(s"jdbc:mysql://${dbIp}:${dbport}/${dbName}", user, passwd);
        conn.setAutoCommit(true)
        val insertStat = conn.prepareStatement("insert into plaza_region_info values(?,?,?,?,?)")
        try {
          x.foreach {
            case Row(id: String, plaza_name: String, city_name: String,
              region_name1: String, region_name0: String) =>
              insertStat.setString(1, id)
              insertStat.setString(2, plaza_name)
              insertStat.setString(3, city_name)
              insertStat.setString(4, region_name1)
              insertStat.setString(5, region_name0)
              insertStat.execute()
            case _ =>
          }
        } catch {
          case e: Exception => e.printStackTrace
        } finally {
          conn.close
        }
      }
    sc.stop()
  }
}