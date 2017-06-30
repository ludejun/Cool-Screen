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
        // roam: true, // 开启缩放
        label: {
          emphasis: {
            show: false
          }
        },
        itemStyle: {
          normal: {
            areaColor: '#F3F3F3',
            borderColor: '#C0B796'
          },
          emphasis: {
            areaColor: 'rgba(243,243,243,.5)'
          }
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
