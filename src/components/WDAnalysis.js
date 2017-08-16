import React, {Component} from 'react';
import {WDPillar, WDImageBar, WDImagePercent, WDPan} from './index';
import Echarts from 'echarts-for-react';
import echarts from 'echarts';
import anime from 'animejs';
import './WDAnalysis.less';

const consume = [120, 40, 10];
const age = {
  name: [
    '18岁以下', '18~24岁', '25岁~34岁', '35岁~44岁', '45岁以上'
  ],
  val: [0.4, 0.8, 0.2, 0.3, 0.1]
};
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

export default class Analysis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 0,
      consumeCount: 1,
      path: ''
    };
    this.timer = null;
    this.carList = [
      {
        itemIcon: 'icon-car',
        percent: props.customerPic.cars.haveCar,
        color: '#7096EE',
        name: '有车'
      }, {
        itemIcon: 'icon-walk',
        percent: props.customerPic.cars.noCar,
        color: '#9DD455',
        name: '无车'
      }
    ];
    this.genderList = [
      {
        itemImage: 'img/icon_male.png',
        percent: props.customerPic.sex.male,
        color: '#4C9DFF'
      }, {
        itemImage: 'img/icon_female.png',
        percent: props.customerPic.sex.female,
        color: '#EA6C6B'
      }
    ];
    this.marriage = [
      {
        itemIcon: 'icon-client-married',
        percent: props.customerPic.marriage.yes,
        color: '#EA6C6B',
        name: '已婚'
      }, {
        itemIcon: 'icon-client-hearts',
        percent: props.customerPic.marriage.no,
        color: '#4C9DFF',
        name: '未婚'
      }
    ];
    this.rawData = [
      {
        name: '18岁以下',
        val: props.customerPic.age[18]
      }, {
        name: '18~24岁',
        val: props.customerPic.age[24]
      }, {
        name: '25~34岁',
        val: props.customerPic.age[34]
      }, {
        name: '35~44岁',
        val: props.customerPic.age[44]
      }, {
        name: '45岁以上',
        val: props.customerPic.age[45]
      }
    ];
    this.rawFData = [
      {
        name: '90后',
        val: props.customerPic.age[18]
      }, {
        name: '80后',
        val: props.customerPic.age[24]
      }, {
        name: '70后',
        val: props.customerPic.age[34]
      }, {
        name: '60后',
        val: props.customerPic.age[44]
      }, {
        name: '50后',
        val: props.customerPic.age[45]
      }
    ];
  }
  componentDidMount() {
    clearInterval(reRender);
    const reRender = setInterval(() => {
      this.setState({
        consumeCount: this.state.consumeCount + 1
      });
    }, 3000);

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

  assembleAge = () => {
    const option = {
      xAxis: {
        data: this.props.fPic ? this.rawFData.map((item) => {
          return item.name;
        }) : this.rawData.map((item) => {
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
          },  
          formatter: function (value, index) {
            return value*100+'%'
          },
        }
      },
      series: [
        {
          itemStyle: {
            normal: {
              color: new echarts
                .graphic
                .LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: '#6D83F1'
                  }, {
                    offset: 1,
                    color: '#06F0FB'
                  }
                ])
            }
          },
          name: 'hill',
          type: 'pictorialBar',
          symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
          data: this.props.fPic ? this.rawFData.map((item) => {
            return item.val;
          }) : this
            .rawData
            .map((item) => {
              return item.val;
            })
        }
      ]
    };
    return option;
  }

  renderEchart = () => {
    const consumeOption = {
      color: [
        '#85b6b2', '#6d4f8d', '#cd5e7e', '#e38980', '#f7db88'
      ],
      tooltip: {
        show: true,
        formatter: '{a} <br/>{b}'
      },
      series: [
        {
          name: '等级占比',
          type: 'pie',
          clockWise: false,
          radius: [
            50, 60
          ],
          itemStyle: dataStyle,
          hoverAnimation: false,
          data: [
            {
              value: this.props.customerPic.consume.low,
              name: '低端消费' + this.props.customerPic.consume.low + '%',
              label: {
                normal: {
                  textStyle: {
                    fontSize: 10
                  }
                }
              }
            }, {
              value: (100 - this.props.customerPic.consume.low),
              name: '低端消费' + this.props.customerPic.consume.low + '%',
              itemStyle: placeHolderStyle
            }
          ]
        }, {
          name: '等级占比',
          type: 'pie',
          clockWise: false,
          radius: [
            30, 40
          ],
          itemStyle: dataStyle,
          hoverAnimation: false,
          data: [
            {
              value: (100 - this.props.customerPic.consume.middle),
              name: '中端消费' + this.props.customerPic.consume.middle + '%',
              itemStyle: placeHolderStyle
            }, {
              value: this.props.customerPic.consume.middle,
              name: '中端消费' + this.props.customerPic.consume.middle + '%'
            }
          ]
        }, {
          name: '等级占比',
          type: 'pie',
          clockWise: false,
          hoverAnimation: false,
          radius: [
            10, 20
          ],
          itemStyle: dataStyle,
          data: [
            {
              value: this.props.customerPic.consume.high,
              name: '高端消费' + this.props.customerPic.consume.high + '%'
            }, {
              value: (100 - this.props.customerPic.consume.high),
              name: '高端消费' + this.props.customerPic.consume.high + '%',
              itemStyle: placeHolderStyle
            }
          ]
        }
      ]
    };
    return <Echarts className="consume-chart" option={consumeOption}/>;
  };
  render() {
    return (
      <div className="right-container">
        <img src="/img/analysis-border.png" className="right-container-bg"/>
        <svg
          className="svg-style"
          viewBox="0 0 820 687"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg">
          <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <rect
              className="Rectangle-19"
              fillOpacity="0.600883152"
              fill="#108EE9"
              opacity="0.498471467"
              x="47%"
              y="8"
              width="180"
              height="12">
              <animate
                attributeName="x"
                values="47%;29%;47%"
                dur="3s"
                repeatCount="indefinite"/>
            </rect>
          </g>
        </svg>
        <div className="right-sub-container right-sub-container-first">
          <div style={{position:'relative'}}>
            <p className="consume-title">消费等级占比</p>
            <div
              style={{
              transform: 'translate(60px)',
              position:'absolute',
              width:'90%',
              height:'100%',
              top:-30,
              left:-40
            }}
              className="consume-container">
              <WDPan data={this.props.customerPic.consume} />
            </div>
          </div>
          <div className="age-container">
            <p className="age-title">年龄分布</p>
            <Echarts
              style={{
              transform: 'translate(-20px,-20px) scaleX(0.77)'
            }}
              className="age-chart"
              option={this.assembleAge()}/>
          </div>
        </div>
        <div className="right-sub-container flex-col">
          <div className="flex1">
            <p className="right-sub-title">车辆情况对比</p>
            <WDImagePercent dataList={this.carList}/>
          </div>
          <div className="gender-compare flex1">
            <p className="right-sub-title">性别对比</p>
            <WDImageBar dataList={this.genderList}/>
          </div>
          <div className="flex1">
            <p className="right-sub-title">已婚对比</p>
            <WDImagePercent dataList={this.marriage}/>
          </div>
        </div>
      </div>
    );
  }
}
