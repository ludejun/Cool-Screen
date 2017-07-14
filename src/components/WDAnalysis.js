import React, { Component } from 'react';
import { WDPillar, WDImageBar, WDImagePercent, WDPolyLine } from './index';
import Echarts from 'echarts-for-react';
import echarts from 'echarts';
import { Radio } from 'antd';
import anime from 'animejs';
import './WDAnalysis.less';


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

export default class Analysis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 0,
      consumeCount: 1,
      path: ''
    };
    this.timer = null;
  }
  componentDidMount() {
    clearInterval(this.timer);
    clearInterval(reRender);
    this.timer = setInterval(() => {
      if (this.state.tab < 2) {
        this.setState({
          tab: this.state.tab + 1
        });
      } else {
        this.setState({ tab: 0 });
      }
    }, 3000);
    const reRender = setInterval(() => {
      this.setState({
        consumeCount: this.state.consumeCount + 1
      });
    }, 3000);

    anime({
      targets: '.Rectangle-19',
      translateX: -40,
      easing: 'easeInOutQuad',
      direction: 'alternate',
      duration: 400,
      loop: true
    });

    for (let i = 0; i < 4; i++) {
      anime({
        targets: '.tag',
        // translateY: 50,
        opacity: 1,
        easing: 'easeInOutQuad',
        duration: 1600,
        delay: 2000
        // loop: true
      });
      anime({
        targets: `.tag-tail-${i}`,
        opacity: 1,
        translateY: 50,
        easing: 'easeInOutQuad',
        direction: 'reverse',
        duration: 800,
        delay: 1100
      });
    }
  }

  renderEchart = () => {
    const randomL = parseInt(Math.random() * 60);
    const randomM = parseInt(Math.random() * 70);
    const randomH = parseInt(Math.random() * 30);
    const consumeOption = {
      color: ['#85b6b2', '#6d4f8d', '#cd5e7e', '#e38980', '#f7db88'],
      tooltip: {
        show: true,
        formatter: '{a} <br/>{b}'
      },
      series: [
        {
          name: '等级占比',
          type: 'pie',
          clockWise: false,
          radius: [60, 70],
          itemStyle: dataStyle,
          hoverAnimation: false,
          data: [
            {
              value: consume[0],
              name:  '低端消费' + (100 - randomL) + '%',
              label: {normal:{textStyle:{fontSize:10}}}
            },
            {
              value: randomL,
              name: '低端消费',
              itemStyle: placeHolderStyle
            }
          ]
        },
        {
          name: '等级占比',
          type: 'pie',
          clockWise: false,
          radius: [40, 50],
          itemStyle: dataStyle,
          hoverAnimation: false,
          data: [
            {
              value: consume[1],
              name: '中端消费' + (100 - randomM) + '%'
            },
            {
              value: randomM,
              name: '中端消费',
              itemStyle: placeHolderStyle
            }
          ]
        },
        {
          name: '等级占比',
          type: 'pie',
          clockWise: false,
          hoverAnimation: false,
          radius: [20, 30],
          itemStyle: dataStyle,
          data: [
            {
              value: consume[2],
              name: '高端消费' + (100 - randomH) + '%'
            },
            {
              value: randomH,
              name: '高端消费',
              itemStyle: placeHolderStyle
            }
          ]
        }
      ]
    };
    return <Echarts className="consume-chart" option={consumeOption} />;
  };
  radioChange = (e) => {
    clearInterval(this.timer);
    this.setState({ tab: e.target.value });
  };
  render() {
    return (
        <div className="right-container">
          <img src="/img/analysis-border.png" className="right-container-bg" />
          <svg
            className="svg-style"
            viewBox="0 0 820 687"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs />
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <rect
                className="Rectangle-19"
                fillOpacity="0.600883152"
                fill="#108EE9"
                opacity="0.498471467"
                x="40%"
                y="8"
                width="180"
                height="12"
              />
            </g>
          </svg>
          <div className="right-sub-container right-sub-container-first">
            <div>
              <p className="consume-title">消费等级占比</p>
              <div style={{transform: 'translate(60px)'}} className="consume-container">
                {this.renderEchart()}
              </div>
            </div>
            <div className="age-container">
              <p className="age-title">年龄分布</p>
              <Echarts style={{transform: 'translate(30px)'}} className="age-chart" option={option} />
            </div>
          </div>
          <div className="right-sub-container flex-col">
            <div className="flex1">
              <p className="right-sub-title">车辆情况对比</p>
              <WDImagePercent dataList={carList} />
            </div>
            <div className="gender-compare flex1">
              <p className="right-sub-title">性别对比</p>
              <WDImageBar dataList={genderList} />
            </div>
            <div className="flex1">
              <p className="right-sub-title">已婚对比</p>
              <WDImagePercent dataList={marriage} />
            </div>
          </div>
        </div>
    );
  }
}