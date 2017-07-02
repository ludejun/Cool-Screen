import React, { Component } from 'react';
import {WDPillar, WDImageBar, WDImagePercent} from '../components';
import Echarts from 'echarts-for-react';
import './businessAnalysis.less';
///////data area
const consume = [120, 40, 10];
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
        color: 'rgba(255,255,255,0.1)',
        label: {show:false},
        labelLine: {show:false}
    },
    emphasis : {
        color: 'rgba(0,0,0,0)'
    }
};
const consumeOption = {
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
    series : [
        {
            name:'Line 1',
            type:'pie',
            clockWise:false,
            radius : [70,80],
            itemStyle : dataStyle,
            hoverAnimation: false,

            data:[
                {
                    value:consume[0],
                    name:'低端消费'
                },
                {
                    value:80,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }

            ]
        },
         {
            name:'Line 2',
            type:'pie',
            clockWise:false,
            radius : [40, 50],
            itemStyle : dataStyle,
            hoverAnimation: false,

            data:[
                {
                    value:consume[1],
                    name:'中端消费'
                },
                {
                    value:40,
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
            radius : [20, 30],
            itemStyle : dataStyle,

            data:[
                {
                    value:consume[2],
                    name:'高端消费'
                },
                {
                    value:20,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }
            ]
        },

    ]
};

//http://gallery.echartsjs.com/editor.html?c=xHJEWRrrbZ
// const option = {
//     title:{
//         text:'驯鹿与其他交通方式速度对比'
//     },
//     xAxis: {
//         data: rawData.map(function(item) {
//             return item.name;
//         }),
//         axisTick: {
//             show: false
//         },
//         axisLine: {
//             show: false
//         },
//         axisLabel: {
//             textStyle: {
//                 color: '#e54035'
//             }
//         }
//     },
//     grid: {
//         left: 10,
//         top: 10,
//         right: 10,
//         bottom: 50
//     },
//     yAxis: {
//         splitLine: {
//             show: false
//         },
//         axisTick: {
//             show: false
//         },
//         axisLine: {
//             show: false
//         },
//         axisLabel: {
//             show: false
//         }
//     },
//     color: ['#e54035'],
//     series: [{
//         itemStyle: {
// 				normal: {
// 				    color:new echarts.graphic.LinearGradient(0, 0, 1, 0, [
//             { offset: 0, color: '#6D83F1' },
//             { offset: 1, color: '#06F0FB' },
//           ])
//
//     }},
//         name: 'hill',
//         type: 'pictorialBar',
//         symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
//         data: rawData.map(function(item) {
//             return item.velocity;
//         })
//     }, {
//         name: 'glyph',
//         type: 'pictorialBar',
//         barGap: '-100%',
//         barCategoryGap: '30%',
//         symbolPosition: 'end',
//         symbolSize: [25, 25],
//         symbolOffset: [0, -35],
//         data: rawData.map(function(item) {
//             return {
//                 value: item.velocity,
//                 symbol: symbols[item.symbol]
//             };
//         })
//     }]
// };
export default class BusinessAnalysis extends Component {

  render() {
    return (
      <div style={{display:'flex'}}>
        <div style={{flex:1}}>
          <p>广场楼层分布实例图：</p>
        </div>
        <div style={{flex:1}}>
          <div style={{display:'flex'}}>
            <div style={{flex:1}}>
              <div>
                {/* <p style={{display:'inline-block', width:10}}>消费等级占比</p> */}
                <Echarts className="echarts-body" style={{width:370, height:270}} option={consumeOption} />
              </div>
              <div style={{display:'flex'}}>
                {/* <p>年龄分布</p> */}
                <Echarts className="echarts-body" style={{width:370, height:270}} option={consumeOption} />
              </div>
            </div>
            <div style={{flex:1}}>
              <div>
                <p className="right-sub-title">车辆情况对比</p>
                <WDImagePercent dataList={carList} />
             </div>
             <div style={{marginTop:90,marginBottom:90}}>
                <p className="right-sub-title">性别对比</p>
                <WDImageBar dataList={genderList} />
              </div>
              <div>
                <p className="right-sub-title">已婚对比</p>
                <WDImagePercent dataList={marriage} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
