package cn.wanda.idc.coolscreen.offline.dd.main

import scala.collection.mutable.ListBuffer
import java.util.Calendar

object Test extends App {
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

  val (w1, w2) = getWeek(20170208)
  val w3 = w1.map { x => "access_url_date = " + x }.mkString(" or ")
  println(w3)
  println(w2)
}