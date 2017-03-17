package cn.wanda.idc.coolscreen.main

import scala.reflect.runtime.universe._
import cn.wanda.idc.coolscreen.core.Executor
import cn.wanda.idc.coolscreen.core.Configuration
import scala.collection.mutable.ListBuffer
import spray.json.DefaultJsonProtocol
import spray.json._

object Test extends App {

  //  val l = Seq(800, 956, 1007, 1021, 959, 943, 920, 826, 807, 826, 758, 596, 410, 175, 59)
  //  val h = Seq(4088, 4742, 5026, 5057, 4814, 5164, 5280, 4760, 4476, 4109, 3610, 2900, 2006, 899, 210)
  //  val m = Seq(6269, 7227, 7504, 7676, 7356, 7756, 7876, 7082, 6515, 5940, 5352, 4328, 3083, 1442, 353)
  val h = Seq(25338, 27749, 28850, 29121, 26545, 28606, 29050, 25993, 24691, 23492, 21032, 17166, 11896, 5611, 1431)
  val l = Seq(5551, 6068, 6314, 6464, 5724, 5493, 5428, 5022, 4956, 5206, 4742, 3780, 2544, 1214, 453)
  val m = Seq(38582, 42462, 43895, 44180, 41058, 42878, 43163, 39001, 36948, 35520, 31894, 26275, 18379, 8640, 2241)

  val hh = ListBuffer.empty[Seq[Int]]
  val mm = ListBuffer.empty[Seq[Int]]
  val ll = ListBuffer.empty[Seq[Int]]

  for (i <- 0 to 14) {

    hh += Seq(9 + i, h(i) / 5)
    mm += Seq(9 + i, m(i) / 5)
    ll += Seq(9 + i, l(i) / 5)
  }

  import DefaultJsonProtocol._

  println("d1=" + hh.toArray.toJson.toString)
  println("d2=" + mm.toArray.toJson.toString)
  println("d3=" + ll.toArray.toJson.toString)
}