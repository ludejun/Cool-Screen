package models

import scalikejdbc._
import scalikejdbc.config._

/**
  * Created by Tian Jie(tianjie12)on 17/01/11.
  */
object cool_screen_db extends SQLSyntaxSupport[Any] {

/*  implicit val session = autoSession   */
  scalikejdbc.config.DBs.setupAll()
  def getData(tgt_id: String) = { 
      val myResult: Option[String] = DB readOnly { implicit session => 
          sql"select json_v from exibit_contents  where id = ${tgt_id}".map(rs => rs.string("json_v")).single().apply()
      }
      myResult.getOrElse("")
  }
}
