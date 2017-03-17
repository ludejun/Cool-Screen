package cn.wanda.idc.coolscreen.main

import java.io.BufferedInputStream

object test2 extends App {
  //同一包下
  val u = Thread.currentThread().getContextClassLoader().getResourceAsStream("coolscreen-model-service.property");
  val dd = new BufferedInputStream(u)

}