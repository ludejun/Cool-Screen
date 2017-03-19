package controllers

import play.api._
import play.api.mvc._
import play.api.libs.json._
import models.cool_screen_db

object Application extends Controller {
  

  def index = Action {
    Ok(views.html.index("Your new application is ready."))
  }

  def preference = Action { implicit request =>
    val title = "万达广场App动态"
    render{ 
      case Accepts.Html() => Ok(views.html.preference(title))
    }
  }
  
  def appDynamics() = Action  { implicit request =>
 //   val myValue = "[{\"name\":\"test\", \"age\":\"20\"}]"
    val db_conn = cool_screen_db;
    val myValue: String = db_conn.getData("app_dyn");
    render {
      case Accepts.Json() => Ok(Json.toJson(myValue))
    }
  }

  def cn_map = Action { implicit request =>
    val title = "万达广场Wifi动态"
    render{ 
      case Accepts.Html() => Ok(views.html.cn_map(title))
    }
  }

  def app_topN = Action { implicit request =>
    val title = "广场客群常用App"
    render {
      case Accepts.Html() => Ok(views.html.app(title))
    }
  }

  def user_salary = Action { implicit request =>
    val title = "广场客群消费能力预测"
    render {
      case Accepts.Html() => Ok(views.html.user_salary(title))
    }
  }

  def plaza_customer = Action { implicit request =>
    val title = "广场客群年龄性别分析"
    render {
      case Accepts.Html() => Ok(views.html.plaza_customer(title))
    }
  }

  def plaza_brand = Action { implicit request =>
    val title = "广场客群兴趣品牌"
    render {
      case Accepts.Html() => Ok(views.html.plaza_brand(title))
    }
  }

  def topN_data(id: String) = Action { implicit request =>
    val db_conn = cool_screen_db;
    val myValue: String = db_conn.getData(id);
    render {
      case Accepts.Json() => Ok(Json.toJson(myValue))
    }
  }

  def app_topN_province = Action { implicit request =>
    val db_conn = cool_screen_db;
    val myValue: String = db_conn.getData("prov_top");
    render {
      case Accepts.Json() => Ok(Json.toJson(myValue))
    }
  }

  def app_topN_area = Action { implicit request =>
    val db_conn = cool_screen_db;
    val myValue: String = db_conn.getData("area_top");
    render {
      case Accepts.Json() => Ok(Json.toJson(myValue))
    }
  }

  def cust_data(id: String) = Action { implicit request =>
    val db_conn = cool_screen_db;
    val myValue: String = db_conn.getData(id);
    render {
      case Accepts.Json() => Ok(Json.toJson(myValue))
    }
  }


  def high_cust  = Action { implicit request =>
    val title = "广场Wifi优选客户画像";
    //val myValue: String = db_conn.getData("area_top");
    render {
      //case Accepts.Json() => Ok(Json.toJson(myValue))
      case Accepts.Html() => Ok(views.html.high_cust(title))
    }
  }


  def echarts1 = Action { implicit request =>
    render{ 
      case Accepts.Html() => Ok(views.html.echarts1())
    }
  }

  def echarts2 = Action { implicit request =>
    render{ 
      case Accepts.Html() => Ok(views.html.echarts2())
    }
  }

  def echarts_map = Action { implicit request =>
    render{ 
      case Accepts.Html() => Ok(views.html.echarts_map())
    }
  }

  def bd_heatmap = Action { implicit request =>
    render{ 
      case Accepts.Html() => Ok(views.html.bd_heatmap())
    }
  }

  def cust_source = Action { implicit request =>
    render{ 
      case Accepts.Html() => Ok(views.html.cust_source())
    }
  }

  def pplt_move = Action { implicit request =>
    render{ 
      case Accepts.Html() => Ok(views.html.pplt_move())
    }
  }

  def wd_heatmap = Action { implicit request =>
    render{ 
      case Accepts.Html() => Ok(views.html.wd_heatmap())
    }
  }

  def wd_3km = Action { implicit request =>
    render{ 
      case Accepts.Html() => Ok(views.html.wd_3km())
    }
  }

  def brand_wall = Action { implicit request =>
    render{ 
      case Accepts.Html() => Ok(views.html.brand_wall())
    }
  }
}
