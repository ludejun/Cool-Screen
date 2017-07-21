import React, { Component, PropTypes } from 'react';
import ReactEcharts from 'echarts-for-react';
import '../assets/map/china';
import echarts from 'echarts';

class WDAreaMap extends Component {
  getInstance() {
    this.mapInstance = this.refs.echarts_Instance.getEchartsInstance();
    return this.mapInstance;
  }

  getOption() {
    const { optionCustom = {}, data, name, map} = this.props;
    echarts.registerMap(name, map);
    const seriesConfig = {
      type: 'scatter',
      coordinateSystem: 'geo',
      symbolSize: 2,
    };

    const optionStatic = {
      geo:{
        map:name,
        roam:true,
          itemStyle: {
            normal: {
              areaColor: '#19274A',
              borderColor: '#10B3FF'
            },
            emphasis: {
              areaColor: '#389BB7',
              borderWidth: 0
            }
          }
      },
      series: [
          {
            ...seriesConfig,
            name: '弱',
            itemStyle: {
              normal: {
                shadowBlur: 2,
                shadowColor: 'rgba(37, 140, 249, 0.8)',
                color: 'rgba(37, 140, 249, 0.8)'
              }
            },
            data: data[0]
          },
          {
            ...seriesConfig,
            name: '中',
            itemStyle: {
              normal: {
                shadowBlur: 2,
                shadowColor: 'rgba(14, 241, 242, 0.8)',
                color: 'rgba(14, 241, 242, 0.8)'
              }
            },
            data: data[1]
          },
          {
            ...seriesConfig,
            name: '强',
            itemStyle: {
              normal: {
                shadowBlur: 2,
                shadowColor: 'rgba(255, 255, 255, 0.8)',
                color: 'rgba(255, 255, 255, 0.8)'
              }
            },
            data: data[2]
          }
       ]
    };

    return {
      ...optionStatic,
      ...optionCustom
    };
  }

  componentWillUnmount() {
    this.mapInstance && this.mapInstance.dispose && this.mapInstance.dispose();
  }

  render() {
    return (
      <ReactEcharts
        {...this.props}
        ref="echarts_Instance"
        option={this.getOption()}
        notMerge={false}
        lazyUpdate={false}
      />
    );
  }
}

WDAreaMap.propTypes = {
  optionCustom: PropTypes.object
};

export default WDAreaMap;
