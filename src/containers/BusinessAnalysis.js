import React, { Component } from 'react';
import {WDPillar, WDImageBar, WDImagePercent} from '../components';
import Echarts from 'echarts-for-react';
import echarts from 'echarts';
import { Radio } from 'antd';
import anime from 'animejs';
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
    grid: {
        left: 10,
        top: 10,
        right: 10,
        bottom: 50
    },
    legend: {
      show:false,
      orient:'vertical',
      top: 'bottom',
      // right:'20px',
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
const rawData = [{
    name: '18岁以下',
    val: 0.8,
}, {
    name: '18~24岁',
    val: 0.3,
}, {
    name: '25~34岁',
    val: 0.9,
}, {
    name: '35~44岁',
    val: 0.3,
}, {
    name: '45岁以上',
    val: 0.2,
}];
const option = {
  xAxis: {
    data: rawData.map(function(item) {
        return item.name;
    }),
    axisTick: {
        show: false
    },
    axisLine: {
        show: false
    },
    axisLabel: {
        textStyle: {
            color: '#999'
        }
    }
  },
  grid: {
      left: 50,
      top: 10,
      right: 10,
      bottom: 50
  },
  yAxis: {
    type: 'value',
    splitLine: {
        show: true
    },
    axisLine: {
        show: false
    },
    axisLabel: {
      show: true,
      textStyle: {color: '#999', fontSize: 12},
    },
  },
  series: [{
      itemStyle: {
			normal: {
			    color:new echarts.graphic.LinearGradient(0, 0, 1, 0, [
          { offset: 0, color: '#6D83F1' },
          { offset: 1, color: '#06F0FB' },
        ])

  }},
      name: 'hill',
      type: 'pictorialBar',
      symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
      data: rawData.map(function(item) {
          return item.val;
      })
  }]
};
const radioList = ['Test1', 'Test2', 'Test3'];

export default class BusinessAnalysis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab:0
    };
  }
  componentDidMount() {
    clearInterval(timer);
    const timer = setInterval(()=>{
      if(this.state.tab<2){
        this.setState({
          tab: this.state.tab + 1
        });
      }else{
        this.setState({
          tab: 0
        });
      }
    },6000);

    // anime({
    //   targets: '.Rectangle-19',
    //   translateX: -90,
    //   easing: 'easeInOutQuad',
    //   direction: 'alternate',
    //   duration: 400,
    //   loop: true
    // });
  }

  render() {
    return (
      <div className="analysis-container">
        <div className="left-container">
          <p>广场楼层分布实例图：</p>
          <Radio.Group
            className="overview-month-group"
            value={this.state.tab}
          >
            {radioList.map((v,i) =>(
              <Radio.Button key={i} value={i} className="overview-month">{v}</Radio.Button>
            ))}
          </Radio.Group>
          <img src="/img/building.png" className="left-img"/>
        </div>
        <div style={{flex:1}} className="right-container">
          {/* <div className="right-container"> */}
          {/* <img src="/img/analysis-border.png" className="right-container-bg" /> */}
            {/* <svg style={{position:'absolute', width:"820px", height:"687px"}} viewBox="0 0 820 687" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <defs></defs>
              <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <rect className="Rectangle-19" fillOpacity="0.600883152" fill="#108EE9" opacity="0.498471467" x="315" y="8" width="230" height="12"></rect>
              </g>
            </svg> */}
            <div className="right-sub-container">
              <div>
                <p className="consume-title">消费等级占比</p>
                <div className="consume-container">
                  <Echarts className="consume-chart" option={consumeOption} />
                </div>
              </div>
              <div className="age-container">
                <p className="age-title">年龄分布</p>
                <Echarts className="age-chart"  option={option} />
              </div>
            </div>
            <div className="right-sub-container">
              <div>
                <p className="right-sub-title">车辆情况对比</p>
                <WDImagePercent dataList={carList} />
             </div>
             <div className="gender-compare">
                <p className="right-sub-title">性别对比</p>
                <div className="image-bar">
                  <WDImageBar dataList={genderList} />
                </div>
              </div>
              <div>
                <p className="right-sub-title">已婚对比</p>
                <WDImagePercent dataList={marriage} />
              </div>
            </div>
          {/* </div> */}
        </div>
      </div>
    )
  }
}
