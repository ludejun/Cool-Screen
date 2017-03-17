#!/bin/sh
SERVICE_HOME=~/coolscreen-services/coolscreen-offline-datadeal-service
SERVICE_EXE=$SERVICE_HOME/libs/coolscreen-offline-datadeal-service-1.0.jar
MAIN_CLASS=cn.wanda.idc.coolscreen.datadeal.UseAAppGuestsHour

last=$(date  +%Y%m%d --date="-1 day")
spark-submit --conf spark.port.maxRetries=10000 --master yarn --deploy-mode client --driver-memory 4G --executor-memory 12G --num-executors 6 --executor-cores 2 --class $MAIN_CLASS  $SERVICE_EXE  $last  支付宝

