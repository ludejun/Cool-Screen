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
    const eInstance = this.LifeMobileRadarRef && this.LifeMobileRadarRef.getEchartsInstance();
    !!eInstance &&
      (this.refInterval = setInterval(() => {
        eInstance.clear();
        eInstance.setOption(this.getOption());
      }, 10000));
  }

  componentWillUnmount() {
    clearInterval(this.refInterval);
  }

  getOption() {
    const { opt } = this.props;
    const indicator = [];
    const value = [];

    !!opt.values.length &&
      opt.values.forEach((val) => {
        indicator.push({ text: val.name, max: opt.max });
        value.push(val.value);
      });

    const series = [
      {
        type: 'radar',
        // tooltip: {
        //   trigger: 'item',
        //   [opt.formatter ? 'formatter' : '']: opt.formatter || ''
        // },
        areaStyle: {
          normal: {
            opacity: 0.8,
            color: opt.paddingColor || '#5ECBD5'
          }
        },
        lineStyle: {
          normal: {
            color: opt.lineColor || '#5ECBD5'
          }
        },
        itemStyle: {
          normal: {
            color: '#09CDC6'
          }
        },
        data: [{ value }]
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
