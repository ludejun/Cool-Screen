package cn.wanda.idc.coolscreen.offline.dd.core

import java.sql.DriverManager

trait Executor {

  def execJob(): Unit

}

class JobExecutor(task: Task) {
  val obj = Class.forName(task.className.trim()).newInstance()
  require(obj.isInstanceOf[Executor])
  obj.asInstanceOf[Executor].execJob();
}