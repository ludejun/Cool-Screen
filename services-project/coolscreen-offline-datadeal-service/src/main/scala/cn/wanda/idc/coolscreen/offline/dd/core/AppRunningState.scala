package  cn.wanda.idc.coolscreen.offline.dd.core

//import spray.json.{ DefaultJsonProtocol, _ }
import org.json4s._
import scala.io.Source
import org.json4s.jackson.JsonMethods._
import scala.sys.process._
import scala.io.BufferedSource
import org.apache.log4j.Logger

case class Attempt(startTime: String, endTime: String,
  sparkUser: String, completed: Boolean);
case class Application(id: String, name: String,
  attempts: List[Attempt]);
case class Applications(apps: List[Application]);

object AppRunningState {

  val logger = Logger.getLogger(this.getClass.getName);

  def succeeded(app_name: String) = {
    try {
      val idx = app_name.lastIndexOf("_")
      val beginTime = app_name.substring(idx + 1)
      //spark 2.0  前的restful api 不能带参数，暂用 yarn api 获取app_id
      val yarn_url = s"http://ctum2f0302002.idc.wanda-group.net:8088/ws/v1/cluster/apps?startedTimeBegin=$beginTime"
      val yarn_url_slave = s"http://ctum2f0502002.idc.wanda-group.net:8088/ws/v1/cluster/apps?startedTimeBegin=$beginTime"
      implicit val formats = DefaultFormats; // Brings in default date formats etc.

      var apps_json: JValue = null;
      try {
        apps_json = parse(Source.fromURL(yarn_url).mkString);
      } catch {
        case ex: Throwable => {
          try {
            apps_json = parse(Source.fromURL(yarn_url_slave).mkString);
          } catch {
            case ex: Throwable => logger.error(ex.toString())
          }
        }
      }

      val apps = for {
        JObject(application) <- apps_json
        JField("id", JString(id)) <- application
        JField("name", JString(name)) <- application
        JField("finalStatus", JString(finalStatus)) <- application
        if (name == app_name)
      } yield (id.trim(), name, finalStatus)
      logger.info(apps.toString)

      if (apps.size == 1 && apps(0)._3 == "SUCCEEDED") {
        val spark_url = s"http://ctum2f0302002.idc.wanda-group.net:18088/api/v1/applications/${apps(0)._1}/jobs"
        var jobs_json: JValue = null;
        var connected = false;
        for (i <- 1 to 10 if !connected) {
          try {
            jobs_json = parse(Source.fromURL(spark_url).mkString);
            connected = true;
          } catch {
            case ex: Throwable => {
              logger.error(ex.toString())
              Thread.sleep(50000)
            }
          }
        }

        val failed_jobs = for {
          JObject(job) <- jobs_json
          JField("jobId", JString(id)) <- job
          JField("status", JString(status)) <- job
          if (status != "SUCCEEDED")
        } yield (id, status)
        logger.info(failed_jobs.toString)
        if (failed_jobs.size > 0)
          false
        else
          true;
      } else {
        false;
      }
    } catch {
      case ex: Throwable => {
        logger.error(ex.toString())
        false
      }

    }
  }

}