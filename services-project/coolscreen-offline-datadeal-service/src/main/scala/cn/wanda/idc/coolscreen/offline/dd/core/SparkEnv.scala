package cn.wanda.idc.coolscreen.offline.dd.core

import org.apache.spark.SparkConf
import org.apache.spark.SparkContext
import org.apache.spark.sql.hive.HiveContext

object SparkEnv {
  def getSqlExecInstance(kvs: Option[Map[String, String]] = None) = {
    val conf = new SparkConf()
    if (kvs != None)
      conf.setAll(kvs.get)
    val sc = new SparkContext(conf)
    val hiveContext = new HiveContext(sc)
    hiveContext
  }
}