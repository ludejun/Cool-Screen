import React, { Component, PropTypes } from 'react';
import ReactEcharts from 'echarts-for-react';
import '../assets/map/china';
import echarts from 'echarts';

class WDMapBasic extends Component {
  getInstance() {
    this.mapInstance = this.refs.echarts_Instance.getEchartsInstance();
    return this.mapInstance;
  }

  getOption() {
    const { optionCustom = {} } = this.props;
    const optionStatic = {
      tooltip: {
        trigger: 'item'
      },
      geo: {
        map: 'china',
        label: {
          emphasis: {
            show: false
          }
        },
        itemStyle: {
          normal: {
            areaColor: '#19274A',
            borderColor: '#10B3FF'
          }
          // emphasis: {
          //   areaColor: '#2a333d'
          // }
        }
      }
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

WDMapBasic.propTypes = {
  optionCustom: PropTypes.object
};

export default WDMapBasic;
