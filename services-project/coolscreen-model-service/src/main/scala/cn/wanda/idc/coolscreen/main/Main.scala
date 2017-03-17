package cn.wanda.idc.coolscreen.main

import org.slf4j.LoggerFactory

import com.typesafe.config.ConfigFactory

import akka.actor.Actor
import akka.actor.ActorLogging
import akka.actor.ActorSystem
import akka.actor.Props
import cn.wanda.idc.coolscreen.core.Configuration
import cn.wanda.idc.coolscreen.core.Executor
import cn.wanda.idc.coolscreen.core.DataProcessingComplete

object Main {

  var executors: Map[String, Seq[Executor]] = null

  class ModelServiceActor extends Actor with ActorLogging {
    def receive = {
      case DataProcessingComplete(taskId) => {
        executors.get(taskId) match {
          case Some(es) => es.foreach { x => x.exec() }
          case _ => log.error(s"不存在id为'${taskId}'的任务！")
        }
      }
      case _ => {
        log.error("没匹配到消息！")
      }
    }
  }

  def createModelServiceActor() = {

    //读入配置
    val config = ConfigFactory
      .parseResources("akka.conf")
      .getConfig("ModelServiceActor")

    val system = ActorSystem("ModelService", config)

    system.actorOf(Props[ModelServiceActor], "modelServiceActor")
  }

  val logger = LoggerFactory.getLogger(this.getClass.getName());

  def main(args: Array[String]) {
    if (args.size != 1) {
      System.exit(1)
    }
    val configfile = args(0)
    val tasks = Configuration.load(configfile)

    println(tasks.toSeq)

    executors = tasks.map { x =>
      logger.info(x.className)
      val obj = Class.forName(x.className.trim()).newInstance()
      val v = if (obj.isInstanceOf[Executor]) {
        obj.asInstanceOf[Executor]
      } else {
        null
      }
      (x.id -> v)
    }
      .filter(x => x._2 != null)
      .groupBy(x => x._1)
      .map { x =>
        (x._1, x._2.map(x => x._2))
      }

    createModelServiceActor()
  }
}