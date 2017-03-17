package cn.wanda.idc.coolscreen.online.dd.main

import java.util.Properties
import scala.collection.mutable.HashMap

object PropertiesFile {

  private val kv = HashMap.empty[String, String];

  {
    try {
      val prop = new Properties()
      val is = Thread.currentThread().getContextClassLoader()
        .getResourceAsStream("database.property");

      prop.load(is)
      val keys = prop.stringPropertyNames().iterator()
      while (keys.hasNext) {
        val k = keys.next()
        kv += (k -> prop.getProperty(k))
      }
    } catch {
      case e: Throwable =>
    }
  }

  def getProperty(key: String, defaultValue: String): String = {
    kv.getOrElse(key, defaultValue)
  }

  def getProperty(key: String) = {
    kv.get(key)
  }
}