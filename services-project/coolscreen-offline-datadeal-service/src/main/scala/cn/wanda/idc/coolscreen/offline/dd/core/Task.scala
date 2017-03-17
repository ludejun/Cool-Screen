package cn.wanda.idc.coolscreen.offline.dd.core

case class Task(id: String, className: String, props: Map[String, String], dependents: Seq[String])