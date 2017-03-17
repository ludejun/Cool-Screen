#!/bin/sh

SERVICE_HOME=~/coolscreen-services/coolscreen-offline-datadeal-service
SERVICE_EXE=$SERVICE_HOME/libs/coolscreen-offline-datadeal-service-1.0.jar
MAIN_CLASS=cn.wanda.idc.coolscreen.datadeal.PlazaRegionInfo

spark-submit --conf spark.port.maxRetries=10000 --master yarn --deploy-mode client --driver-memory 3G --executor-memory 6G --num-executors 4 --executor-cores 4 --class $MAIN_CLASS  $SERVICE_EXE

