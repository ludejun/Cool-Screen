package cn.wanda.idc.coolscreen.core

import scala.xml.XML
import scala.collection.mutable.ListBuffer

object Configuration {

  val tasks = ListBuffer.empty[Task]

  def load(path: String) = {
    tasks.clear();
    val elem = XML.loadFile(path)
    val serviceNodes = elem.\("service")
    serviceNodes.foreach { x =>
      val cn = x.\("className")
        .head.text
      val id = x.\("serviceId")
        .head.text
      tasks += Task(cn, id)
    }
    tasks.toSeq
  }
}