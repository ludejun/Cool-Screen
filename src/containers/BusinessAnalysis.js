import React, { Component } from 'react';
import {WDPillar, WDImageBar, WDImagePercent} from '../components';
import Echarts from 'echarts-for-react';
import './businessAnalysis.less';
///////data area
const consume = [400, 60, 30];
const age = {name:['18岁以下','18~24岁','25岁~34岁','35岁~44岁','45岁以上',],
val:[0.4,0.8,0.2,0.3,0.1]};
const carList = [
  {
    itemIcon: 'icon-car',
    percent: 0.56 * 100,
    color: '#7096EE',
    name: '有车',
  },
  {
    itemIcon: 'icon-walk',
    percent: 0.44 * 100,
    color: '#9DD455',
    name: '无车',
  },
];;
const marriage = [
  {
    itemIcon: 'icon-client-married',
    percent: 0.34 * 100,
    color: '#EA6C6B',
    name: '已婚',
  },
  {
    itemIcon: 'icon-client-hearts',
    percent: 0.54 * 100,
    color: '#4C9DFF',
    name: '未婚',
  },
];;
const genderList = [
  {
    itemImage: 'img/icon_male.png',
    percent: 0.9 * 100,
    color: '#4C9DFF',
    minWidth: 11,
    show: true,
  },
  {
    itemImage: 'img/icon_female.png',
    percent: 1 * 100,
    color: '#EA6C6B',
    minWidth: 11,
    show: true,
  },
];
///////
const dataStyle = {
    normal: {
        label: {show:false},
        labelLine: {show:false},
        shadowBlur: 40,
        shadowColor: 'rgba(40, 40, 40, 0.5)',
    }
};
const placeHolderStyle = {
    normal : {
        color: 'rgba(f,f,f,f.1)',
        label: {show:false},
        labelLine: {show:false}
    },
    emphasis : {
        color: 'rgba(0,0,0,0)'
    }
};
const consumeOption = {
   backgroundColor: '#f4f2e3',
     color: ['#85b6b2', '#6d4f8d','#cd5e7e', '#e38980','#f7db88'],
    tooltip : {
        show: false,
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {

        orient:'vertical',
        top: 'bottom',
        right:'20px',
        data:['低端消费','中端消费','高端消费']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    series : [
        {
            name:'Line 1',
            type:'pie',
            clockWise:false,
            radius : [180,200],
            itemStyle : dataStyle,
            hoverAnimation: false,

            data:[
                {
                    value:consume[0],
                    name:'低端消费'
                },
                {
                    value:300,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }

            ]
        },
         {
            name:'Line 2',
            type:'pie',
            clockWise:false,
            radius : [140, 160],
            itemStyle : dataStyle,
            hoverAnimation: false,

            data:[
                {
                    value:consume[1],
                    name:'中端消费'
                },
                {
                    value:60,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }
            ]
        },
        {
            name:'Line 3',
            type:'pie',
            clockWise:false,
            hoverAnimation: false,
            radius : [100, 120],
            itemStyle : dataStyle,

            data:[
                {
                    value:consume[2],
                    name:'高端消费'
                },
                {
                    value:50,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }
            ]
        },

    ]
};
export default class BusinessAnalysis extends Component {

  render() {
    return (
      <div style={{display:'flex'}}>
        <div style={{flex:1}}></div>
        <div style={{flex:1}}>
          <div style={{display:'flex'}}>
            <div style={{flex:1}}>
              <div>
                <p>消费等级占比</p>
                <Echarts style={{width:300, height:300}} option={consumeOption} />
              </div>
              <div>
                <p>年龄分布</p>
                <Echarts style={{width:300, height:300}} option={ageOption} />
              </div>
            </div>
            <div style={{flex:1}}>
              <p>车辆情况对比</p>
              <WDImagePercent dataList={carList} />
              <p>性别对比</p>
              <WDImageBar dataList={genderList} />
              <p>已婚对比</p>
              <WDImagePercent dataList={marriage} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
