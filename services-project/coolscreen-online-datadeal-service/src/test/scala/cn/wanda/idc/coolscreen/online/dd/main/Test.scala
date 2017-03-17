package cn.wanda.idc.coolscreen.online.dd.main

import java.sql.DriverManager

object Test extends App {
  Class.forName("com.mysql.jdbc.Driver")
  val conn = DriverManager.getConnection("jdbc:mysql://10.213.129.36:3306/cool_screen", "lsd", "lsd");
  conn.setAutoCommit(true)

  val updateStat = conn.prepareStatement("update plaza_guests set id=?, guests=? where id=?")
  val insertStat = conn.prepareStatement("insert into plaza_guests values(?,?)")

  try {
    val plazaId = "1";
    val guests = 1

    updateStat.setString(1, plazaId);
    updateStat.setInt(2, guests)
    updateStat.setString(3, plazaId)
    val updates = updateStat.executeUpdate()
    println(updates)
    if (updates < 1) {
      insertStat.setString(1, plazaId)
      insertStat.setInt(2, guests)
      insertStat.execute()
    }
  } catch {
    case e: Exception => e.printStackTrace
  } finally {
    conn.close
  }
}