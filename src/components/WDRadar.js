import React, {Component} from 'react';
import Echarts from 'echarts-for-react';

const unemptyData = {
  opt: {
    max: 100,
    values: [
      {name: '客流承载力', value: 30},
      {name: '好评度', value: 40},
      {name: '消费潜力', value: 60},
      {name: '层次定位', value: 30},
      {name: '便利性', value: 50}
    ]
  },
  className: "score-radar"
};

export default class WDRadar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nowData: unemptyData
    }
  }

  componentDidMount() {
    let that = this;
    const RInstance = this.RadarRef && this.RadarRef.getEchartsInstance();
    this.timer = setInterval(() => {
      RInstance.clear();
      that.setState({
        nowData:Object.assign({},unemptyData)
      })
    }, 3000)
  }

  assembleBrand() {
    // const { opt } = this.props;
    const {opt} = this.state.nowData;
    const indicator = [];
    const value = [];
    !!opt.values.length &&
    opt.values.forEach((val) => {
      indicator.push({text: val.name, max: opt.max});
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
        data: [{value}],
        animation: true,
        animationDuration: 3000
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
      textStyle: {color: '#0BBFFF', fontSize: 12, ...opt.textStyle},
      grid: {containLabel: true, top: '2px', bottom: '-10px'}
    };

    return option;
  }

  render() {
    return <Echarts  ref={ref => (this.RadarRef = ref)} {...this.props} option={this.assembleBrand()}/>;
  }
}
