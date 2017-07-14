import React, { Component } from 'react';
import { WDPillar, WDImageBar, WDImagePercent, WDAnalysis, WDPolyLine } from '../components';
import HeaderTitle from './Layout/HeaderTitle';
import Echarts from 'echarts-for-react';
import echarts from 'echarts';
import { Radio } from 'antd';
import anime from 'animejs';
import './businessAnalysis.less';
// /////data area
const consume = [120, 40, 10];
const age = {
  name: ['18岁以下', '18~24岁', '25岁~34岁', '35岁~44岁', '45岁以上'],
  val: [0.4, 0.8, 0.2, 0.3, 0.1]
};
const carList = [
  {
    itemIcon: 'icon-car',
    percent: 0.56 * 100,
    color: '#7096EE',
    name: '有车'
  },
  {
    itemIcon: 'icon-walk',
    percent: 0.44 * 100,
    color: '#9DD455',
    name: '无车'
  }
];
const marriage = [
  {
    itemIcon: 'icon-client-married',
    percent: 0.34 * 100,
    color: '#EA6C6B',
    name: '已婚'
  },
  {
    itemIcon: 'icon-client-hearts',
    percent: 0.54 * 100,
    color: '#4C9DFF',
    name: '未婚'
  }
];
const genderList = [
  {
    itemImage: 'img/icon_male.png',
    percent: 0.9 * 100,
    color: '#4C9DFF'
  },
  {
    itemImage: 'img/icon_female.png',
    percent: 1 * 100,
    color: '#EA6C6B'
  }
];
// /////
const dataStyle = {
  normal: {
    label: {
      show: true
    },
    labelLine: {
      show: true
    },
    shadowBlur: 40,
    shadowColor: 'rgba(40, 40, 40, 0.5)'
  }
};
const placeHolderStyle = {
  normal: {
    color: 'rgba(255,255,255,0.1)',
    label: {
      show: false
    },
    labelLine: {
      show: false
    }
  },
  emphasis: {
    color: 'rgba(0,0,0,0)'
  }
};

const rawData = [
  {
    name: '18岁以下',
    val: 0.8
  },
  {
    name: '18~24岁',
    val: 0.3
  },
  {
    name: '25~34岁',
    val: 0.9
  },
  {
    name: '35~44岁',
    val: 0.3
  },
  {
    name: '45岁以上',
    val: 0.2
  }
];
const option = {
  xAxis: {
    data: rawData.map((item) => {
      return item.name;
    }),
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    },

    axisLabel: {
      interval: 0,
      rotate: -45,
      textStyle: {
        color: '#999999',
        fontSize: 12
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
      textStyle: {
        color: '#999',
        fontSize: 12
      }
    }
  },
  series: [
    {
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
            {
              offset: 0,
              color: '#6D83F1'
            },
            {
              offset: 1,
              color: '#06F0FB'
            }
          ])
        }
      },
      name: 'hill',
      type: 'pictorialBar',
      symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
      data: rawData.map((item) => {
        return item.val;
      })
    }
  ]
};
const radioList = ['Test1', 'Test2', 'Test3'];
const listArray = [
  '55,10 55,40 78,40 78,80',
  '55,10 55,60 90,60 90,120',
  '55,10 55,40 20,40 20,80'
];

export default class BusinessAnalysis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 0,
      consumeCount: 1,
      path: ''
    };
    this.timer = null;
  }

  radioChange = (e) => {
    clearInterval(this.timer);
    this.setState({ tab: e.target.value });
  };
  render() {
    return (
      <div className="analysis-container flex-center flex-row">
        <HeaderTitle title="万达大数据-商圈分析" />
        <div className="left-container">
          <p>广场楼层分布实例图：</p>
          <Radio.Group
            className="overview-month-group"
            value={this.state.tab}
            onChange={this.radioChange}
          >
            {radioList.map((v, i) =>
              <Radio.Button key={i} value={i} className="overview-month">{v}</Radio.Button>
            )}
          </Radio.Group>
          <div className="tag tag-0">
            <p className="tag-title">Test0</p>
            <WDPolyLine location={'55,10 55,80'} />
          </div>
          <div className="tag tag-1">
            <p className="tag-title">Test1</p>
            <WDPolyLine
              location={this.state.tab === 0 ? listArray[this.state.tab] : '55,10 55,80'}
            />
          </div>
          <div className="tag tag-2">
            <p className="tag-title">Test2</p>
            <WDPolyLine
              location={this.state.tab === 1 ? listArray[this.state.tab] : '55,10 55,120'}
            />
          </div>
          <div className="tag tag-3">
            <p className="tag-title">Test3</p>
            <WDPolyLine
              location={this.state.tab === 2 ? listArray[this.state.tab] : '55,10 55,80'}
            />
          </div>
          <img src="/img/building.png" className="left-img" />
        </div>
        <div  className="right-container"><WDAnalysis/></div>
      </div>
    );
  }
}
