package cn.wanda.idc.coolscreen.core

import java.sql.DriverManager
import java.sql.PreparedStatement
import java.sql.Connection

trait Executor {

  val outputTable = PropertiesFile.getProperty("output_table", "exibit_contents")
//  val dbIp = PropertiesFile.getProperty("database_ip", "10.213.129.36")
//  val dbport = PropertiesFile.getProperty("database_port", "3306")
//  val dbName = PropertiesFile.getProperty("database_name", "cool_screen")
//  val user = PropertiesFile.getProperty("user", "lsd")
//  val passwd = PropertiesFile.getProperty("passwd", "lsd")

  Class.forName("com.mysql.jdbc.Driver")

//  private[this] lazy val conn = DriverManager.getConnection(s"jdbc:mysql://${dbIp}:${dbport}/${dbName}", user, passwd);
//  private[this] lazy val insertStat = conn.prepareStatement(s"insert into ${outputTable} values(?,?)")
//  private[this] lazy val updateStat = conn.prepareStatement(s"update ${outputTable} set id=?, json_v=? where id=?")

  protected[this] def getInsertStatement(conn: Connection) = {
    conn.prepareStatement(s"insert into ${outputTable} values(?,?)")
  }

  protected[this] def getUpdateStatement(conn: Connection) = {
    conn.prepareStatement(s"update ${outputTable} set id=?, json_v=? where id=?")
  }

  protected[this] def update(updateStat: PreparedStatement, id: String, json: String) = {
    updateStat.setString(1, id)
    updateStat.setString(2, json)
    updateStat.setString(3, id)
    updateStat.executeUpdate()
  }

  protected[this] def insert(insertStat: PreparedStatement, id: String, json: String) = {
    insertStat.setString(1, id)
    insertStat.setString(2, json)
    insertStat.execute()
  }

  def exec(): Unit
}