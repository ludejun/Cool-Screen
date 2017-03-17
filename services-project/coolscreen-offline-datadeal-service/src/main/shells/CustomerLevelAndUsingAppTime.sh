#!/bin/sh
SERVICE_HOME=~/coolscreen-services/coolscreen-offline-datadeal-service
SERVICE_EXE=$SERVICE_HOME/libs/coolscreen-offline-datadeal-service-1.0.jar
MAIN_CLASS=cn.wanda.idc.coolscreen.datadeal.CustomerLevelAndUsingAppTime

spark-submit --conf spark.port.maxRetries=10000 --master yarn --deploy-mode client --driver-memory 8G --executor-memory 5G --num-executors 6 --class $MAIN_CLASS  $SERVICE_EXE

