package cn.wanda.idc.coolscreen.datadeal

import cn.wanda.idc.coolscreen.offline.dd.core.PropertiesFile
import java.sql.PreparedStatement
import java.sql.Connection
import java.sql.DriverManager

object OutputUtils {
  val outputTable = PropertiesFile.getProperty("output_table", "exibit_contents")

  def getInsertStatement(conn: Connection) = {
    conn.prepareStatement(s"insert into ${outputTable} values(?,?)")
  }

  def getUpdateStatement(conn: Connection) = {
    conn.prepareStatement(s"update ${outputTable} set id=?, json_v=? where id=?")
  }

  def update(updateStat: PreparedStatement, id: String, json: String) = {
    updateStat.setString(1, id)
    updateStat.setString(2, json)
    updateStat.setString(3, id)
    updateStat.executeUpdate()
  }

  def insert(insertStat: PreparedStatement, id: String, json: String) = {
    insertStat.setString(1, id)
    insertStat.setString(2, json)
    insertStat.execute()
  }

  def writeJson(id: String, json: String) {
    val dbIp = PropertiesFile.getProperty("database_ip", "10.213.129.36")
    val dbport = PropertiesFile.getProperty("database_port", "3306")
    val dbName = PropertiesFile.getProperty("database_name", "cool_screen")
    val user = PropertiesFile.getProperty("user", "lsd")
    val passwd = PropertiesFile.getProperty("passwd", "lsd")

    val conn = DriverManager.getConnection(s"jdbc:mysql://${dbIp}:${dbport}/${dbName}", user, passwd);
    try {

      val updateState = getUpdateStatement(conn);
      val insertState = getInsertStatement(conn);
      if (OutputUtils.update(updateState, id, json) == 0) {
        OutputUtils.insert(insertState, id, json)
      }
    } catch {
      case e: Exception => e.printStackTrace
    } finally {
      conn.close
    }
  }
}