#!/bin/sh

export APP_HOME=~/coolscreen-services/coolscreen-online-datadeal-service
CLOUDERA_HOME=/opt/cloudera/parcels/CDH/lib
APP_PID_DIR=$APP_HOME/pids

jar_package=$APP_HOME/libs/coolscreen-online-datadeal-service-1.0.jar
classname=cn.wanda.idc.coolscreen.online.dd.main.Main
prop_file=$APP_HOME/resources/CoolScreen.property

driver_mem="4g"
executor_mem="8g"
num_executors=8
num_exec_cores=2

keytab=/home/wifilog_app_user/wifietl/configs/wifilog_app_user.keytab
driver_classpath="--driver-class-path $CLOUDERA_HOME/hbase/conf"
executor_classpath="--conf spark.executor.extraClassPath=$CLOUDERA_HOME/hbase/conf"
executor_java_options="--conf spark.executor.extraJavaOptions=-XX:+PrintGCDetails -XX:+PrintGCTimeStamps"   
#receiver_maxRate="--conf spark.streaming.receiver.maxRate=8"
#spark_cleaner_ttl="--conf spark.cleaner.ttl=60  --conf spark.cleaner.ttl.BROADCAST_VARS=-1"
#ss_recv_wal="--conf spark.streaming.receiver.writeAheadLog.enable=true"
#ss_spec="--conf spark.speculation=true --conf spark.speculation.multiplier=4 --conf spark.speculation.interval=1s"
#ss_task_maxFail="--conf spark.task.maxFailures=12"
#ss_exec_mo="--conf spark.yarn.executor.memoryOverhead=8192"
#ss_paralell="--conf spark.default.parallelism=160"
#ss_ack_timeout="--conf spark.core.connection.ack.wait.timeout=300"
enable_backpressure="--conf spark.streaming.backpressure.enabled=true"
port_retry_max="--conf spark.port.maxRetries=100"
#storage_fraction="--conf spark.memory.storageFraction=0.5"
enable_offheap="--conf spark.memory.offHeap.enabled=true  --conf spark.memory.offHeap.size=4g"
enable_compression="--conf spark.rdd.compress=true"
local_time="--conf spark.locality.wait=10ms"
rpc_timeout="--conf spark.rpc.askTimeout=300s"


spark-submit  --files $keytab   $ss_spec  $ss_exec_mo  $enable_backpressure $port_retry_max   $enable_compression  $local_time  $enable_offheap $rpc_timeout   $executor_java_options  $driver_classpath $executor_classpath --driver-memory $driver_mem --num-executors $num_executors  --executor-cores $num_exec_cores  $receiver_maxRate --executor-memory $executor_mem --class $classname --deploy-mode client --master yarn $jar_package $prop_file  

