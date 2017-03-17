package cn.wanda.idc.coolscreen.offline.dd.main

import java.io.IOException
import java.util.concurrent.Executors

import scala.sys.process.stringToProcess

import org.slf4j.LoggerFactory

import cn.wanda.idc.coolscreen.offline.dd.core.TaskConfiguration
import cn.wanda.idc.coolscreen.offline.dd.core.Task

object Main {

  val logger = LoggerFactory.getLogger(this.getClass.getName());

  def exec(task: Task) {
    this.synchronized {
      //      val p = s"sh ${task.shellName}"!
    }
  }

  class ExecutorThread(tasks: List[Task], freq: Long) extends Runnable {
    @Override
    def run() {
      while (true) {
        try {
          tasks.foreach(exec(_))
          Thread.sleep(freq);
        } catch {
          case e: InterruptedException =>
          case e: IOException =>
            logger.error(e.toString());
            e.printStackTrace();
        }
      }
    }
  }
  /**
   * 目前使用 azkaban 该类没使用
   */
  def main(args: Array[String]) {
    if (args.size != 1) {
      //      System.exit(1)
    }
    val configfile = "C:\\git\\cool_screen\\services-project\\coolscreen\\coolscreen-offline-datadeal-service\\src\\main\\resources\\offline_dd_service.xml";
    // args(0)
    val tasks = TaskConfiguration.load(configfile)
    
    tasks.map { x =>
      val obj = Class.forName(x.className.trim()).newInstance()
    }
    println(tasks.toSeq)
    //    val threadPool = Executors.newFixedThreadPool(tasks.size);
    //
    //    try {
    //      tasks.foreach { x =>
    //        threadPool.execute(new ExecutorThread(x, x.head.execFreq * 60000));
    //        Thread.sleep(1000);
    //      }
    //      logger.info("coolscreen-updatejson-service have start！");
    //    } catch {
    //      case e: InterruptedException =>
    //        e.printStackTrace();
    //    } finally {
    //      threadPool.shutdown();
    //    }

  }
}