#!/bin/sh
cd $(dirname $0)
path=$(pwd)

sh ${path}/CustomerValueLevel_3.sh
sh ${path}/CustomerValueLevel_10.sh
sh ${path}/DeviceBrandAndAppCategory.sh
sh ${path}/PeopleInPlaza.sh
sh ${path}/UseAAppGuestsHour.sh
sh ${path}/CustomerLevelAndGoPlazaNum.sh
sh ${path}/CustomerLevelAndUsingAppTime.sh
sh ${path}/HWPAgeInfo.sh
sh ${path}/HWPLoginPlazaNumsInfo.sh
sh ${path}/HWPSexInfo.sh
