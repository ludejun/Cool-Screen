package cn.wanda.idc.coolscreen.offline.dd.core

import scala.xml.XML
import scala.collection.mutable.ListBuffer

object TaskConfiguration {

  val tasks = ListBuffer.empty[Task]

  def load(path: String) = {
    try {
      tasks.clear();
      val elem = XML.loadFile(path)
      val elemNodes = elem \\ "task"
      elemNodes.foreach { x =>
        // val id = x.\("@id").head.text
        val id = (x \ "id").head.text
        val className = (x \ "className").head.text
        val props = (x \ "properties") \ "_"
        val kvs = props.map { x => x.label -> x.text }.toMap
        val depends = (x \\ "dependent").map { x => x.text }
        tasks += Task(id, className, kvs, depends)
      }
    } catch {
      case e: Exception => e.printStackTrace()
    }
    tasks.toSeq
  }
}