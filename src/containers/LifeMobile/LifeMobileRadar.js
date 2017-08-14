import React, { Component } from 'react';
import Echarts from 'echarts-for-react';

export default class LifeMobileRadar extends Component {
  constructor(props) {
    super(props);
    this.LifeMobileRadarRef = null;
    this.echartsInstantce = null;
    this.refInterval = null;
  }

  componentDidMount() {
    clearInterval(this.refInterval);
    let i = 0;
    const eInstance = this.LifeMobileRadarRef && this.LifeMobileRadarRef.getEchartsInstance();
    !!eInstance &&
      (this.refInterval = setInterval(() => {
        eInstance.clear();
        i = (i + 1) % 3;
        eInstance.setOption(this.getOption(i));
      }, 10000));
  }

  componentWillUnmount() {
    clearInterval(this.refInterval);
  }

  getOption(i) {
    const { opt } = this.props;
    const indicator = [];
    const showData = [];
    let showIndex = 'apple';
    let showColor = '#fff';

    switch (i) {
      case 0: // apple
        showIndex = 'apple';
        showColor = '#fff';
        break;
      case 1: // ss
        showIndex = 'ss';
        showColor = '#2871FF';
        break;
      case 2: // mi
        showIndex = 'mi';
        showColor = '#FFB37C';
        break;
      default:
        showIndex = 'apple';
    }

    !!opt.values.length &&
      opt.values.forEach((val) => {
        indicator.push({ text: val.name, max: opt.max });
        showData.push(val[showIndex]);
      });

    const series = [
      {
        type: 'radar',
        areaStyle: {
          normal: {
            color: showColor
          }
        },
        lineStyle: {
          normal: {
            color: showColor
          }
        },
        itemStyle: {
          normal: {
            color: showColor
          }
        },
        data: [
          {
            value: showData
          }
        ]
      }
    ];

    const option = {
      series,
      radar: {
        indicator,
        shape: 'polygon',
        name: {
          show: false
        },
        axisLine: {
          show: false
        },
        splitLine: {
          show: false
        },
        splitArea: {
          areaStyle: {
            color: ['rgba(0,0,0,0)']
          }
        }
      },
      grid: { left: 0, right: 0, top: 0, bottom: 0 }
    };

    return option;
  }

  render() {
    return (
      <Echarts
        {...this.props}
        option={this.getOption()}
        ref={ref => (this.LifeMobileRadarRef = ref)}
      />
    );
  }
}
