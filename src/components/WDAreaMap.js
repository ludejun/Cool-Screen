import React, { Component, PropTypes } from 'react';
import ReactEcharts from 'echarts-for-react';
import '../assets/map/china';
import echarts from 'echarts';
import area from '../assets/map/area.geo.json';
echarts.registerMap('chinaArea', area);

class WDAreaMap extends Component {
  getInstance() {
    this.mapInstance = this.refs.echarts_Instance.getEchartsInstance();
    return this.mapInstance;
  }

  getOption() {
    const { optionCustom = {},areaData, mapType, areaValue} = this.props;
    const optionStatic = {
      tooltip: {
        trigger: 'item'
      },
      geo: {
				map:'china',
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
        }
      },
			// visualMap: {
      //   min: Math.min.apply(null, areaValue.map(i=>{return i.value})),
      //   max: Math.max.apply(null, areaValue.map(i=>{return i.value})),
      //   show: false,
      //   inRange: {
      //     color: ['#e0ffff', '#006edd']
      //   },
      //   calculable: true,
      //   precision: 2
      // },
      series: [
        {
          type: 'map',
          geoIndex:0,
          label: {
            emphasis: {
              show: false
            }
          },
          roam: false,
          itemStyle: {
             normal: {
                 borderColor: 'white',
                 color: function(obj) {
                    // console.log("obj",obj.data.name, obj.data.region);
                     var color = "";
                     switch (obj.data.region) {
                         case "华北":
                             color = "red";
                             break;
                         case "华东":
                              console.log(obj.data.name);
                             color = "pink";
                             break;
                         case "华南":
                             color = "#49296a";
                             break;
                         case "华西":
                             color = "#b3bb31";
                             break;
                         default:
                            color = 'yellow';
                     }
                     return color;
                 }
             }
         },
          data: areaData
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
