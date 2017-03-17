package cn.wanda.idc.coolscreen.datadeal

import java.sql.DriverManager

import org.apache.log4j.Level
import org.apache.log4j.Logger
import org.apache.spark.SparkConf
import org.apache.spark.SparkContext
import org.apache.spark.sql.Row
import org.apache.spark.sql.expressions.Window
import org.apache.spark.sql.{ functions => F }
import org.apache.spark.sql.hive.HiveContext
import org.apache.spark.sql.types.DoubleType
import cn.wanda.idc.coolscreen.offline.dd.core.PropertiesFile
import scala.collection.mutable.ListBuffer

import spray.json._

object DeviceBrandAndAppCategory {

  private lazy val conf = new SparkConf().setAppName("coolscreen.datadeal.DeviceBrandAndAppCategory")
  private lazy val sc = new SparkContext(conf)
  private lazy val hiveContext = new HiveContext(sc)

  Logger.getLogger("org").setLevel(Level.WARN)

  case class CatFavorRate(favor: String, ratio: BigDecimal)
  case class BrandCatFavorRate(brand: String, favor_arr: Array[CatFavorRate])

  object BrandCatFavorRateJsonProtocol extends DefaultJsonProtocol {
    implicit val catFavorRateFormat = jsonFormat2(CatFavorRate)
    implicit object brandCatFavorRateFormat extends RootJsonFormat[BrandCatFavorRate] {
      def write(favors: BrandCatFavorRate) = {
        JsObject(
          "brand" -> JsString(favors.brand),
          "favor_arr" -> JsArray(favors.favor_arr.map(_.toJson).toVector))
      }
      def read(value: JsValue) = {
        BrandCatFavorRate("a", Array.empty[CatFavorRate])
      }
    }
  }

  import BrandCatFavorRateJsonProtocol._

  def main(args: Array[String]) {

    val sql_mb = """
      select mobile,
      case when brand like 'honor' then 'huawei' else brand end brand
      from wifilog.guest_device_desc
      where brand like 'samsung' or brand like 'mi' 
      or brand like 'iphone' or brand like 'honor'  or brand like 'huawei'
      """
    val sql_app = """
      select  mobile,app_main_category,count(*) cat_num
	    from wifilog.dw_guest_useapp_info_day
      where length(trim(app_main_category)) >0
      group by mobile,app_main_category
      """
    val ds_mb = hiveContext.sql(sql_mb)
    val ds_app = hiveContext.sql(sql_app)

    val ds_ban = ds_app.join(ds_mb, ds_app("mobile") === ds_mb("mobile"), "inner")
      .select(ds_mb("brand"), ds_app("app_main_category"), ds_app("cat_num"))
      .groupBy("brand", "app_main_category").agg(F.sum("cat_num").as("num"))
      .select(F.col("brand"), F.col("app_main_category"), F.col("num"), F.row_number()
        .over(Window.partitionBy("brand")
          .orderBy(F.col("num") * (-1))).as("row_num"))
      .where("row_num<13")

    val ds_bn = ds_ban.groupBy("brand").agg(F.sum("num").as("num"))

    val ret = ds_ban.join(ds_bn, ds_ban("brand") === ds_bn("brand"), "inner")
      .select(ds_ban("brand"), ds_ban("app_main_category"), ds_ban("num").cast(DoubleType) / ds_bn("num"))
      .collect()

    Class.forName("com.mysql.jdbc.Driver")

    val dbIp = PropertiesFile.getProperty("database_ip", "10.213.129.36")
    val dbport = PropertiesFile.getProperty("database_port", "3306")
    val dbName = PropertiesFile.getProperty("database_name", "cool_screen")
    val user = PropertiesFile.getProperty("user", "lsd")
    val passwd = PropertiesFile.getProperty("passwd", "lsd")

    val conn = DriverManager.getConnection(s"jdbc:mysql://${dbIp}:${dbport}/${dbName}", user, passwd);
    conn.setAutoCommit(true)

    try {
      val updateState = OutputUtils.getUpdateStatement(conn);
      val insertState = OutputUtils.getInsertStatement(conn);

      val brandCatNums = ListBuffer.empty[(String, String, Double)]
      ret.foreach {
        case Row(brand: String, category: String, ratio: Double) =>
          brandCatNums += ((brand, category, ratio * 100))
      }

      val bcfrs = brandCatNums.groupBy(x => x._1)
        .map { x =>
          val catfavors = x._2.map {
            case (_, category, v) =>
              val f_v = f"$v%1.2f"
              CatFavorRate(category, BigDecimal(f_v))
          }
          BrandCatFavorRate(x._1, catfavors.toArray)
        }.toArray

      val id = "app_dyn"
      val json = bcfrs.toJson.toString()
      println(id + "=" + json)
      if (bcfrs.size > 0) {
        if (OutputUtils.update(updateState, id, json) == 0) {
          OutputUtils.insert(insertState, id, json)
        }
      }
    } catch {
      case e: Throwable =>
    } finally {
      conn.close
    }
    sc.stop()
  }

}
