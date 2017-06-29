import React, { Component } from 'react';
import REcharts from 'echarts-for-react';

export default class WDRadar extends Component {
  constructor(props) {
    super(props);
  }

  assembleBrand() {
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
        tooltip: {
          trigger: 'item',
          [opt.formatter ? 'formatter' : '']: opt.formatter || ''
        },
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
        nameGap: 5,
        splitNumber: 4,
        axisLine: {
          lineStyle: {
            color: '#09CDC6',
            width: 0.5
          }
        },
        splitLine: {
          lineStyle: {
            color: '#108EE9',
            width: 0.5
          }
        },
        splitArea: {
          areaStyle: {
            color: [
              'rgba(16,142,233,1)',
              'rgba(16,142,233,.3)',
              'rgba(16,142,233,.4)',
              'rgba(16,142,233,.7)'
            ]
          }
        }
      },
      textStyle: { color: '#0BBFFF', fontSize: 12, ...opt.textStyle },
      grid: { containLabel: true, top: '2px', bottom: '-10px' }
    };

    return option;
  }

  render() {
    return <REcharts {...this.props} option={this.assembleBrand()} />;
  }
}
