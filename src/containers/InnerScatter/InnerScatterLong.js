import React, { Component } from 'react';
import Echarts from 'echarts-for-react';
import { WDMapBasic } from '../../components';
import { plazaGeo } from '../../assets/map/wdplaza.geo';
import { cityGeo } from '../../assets/map/city.geo';
import { provinceValue, proArea, areaValue } from '../../assets/map/mapAreaValue';
import HeaderTitle from '../Layout/HeaderTitle';
import { getBaseFontSize } from '../../utils';
import './innerScatterLong.less';

const pillarData = [
  [
    {
      name: '哈尔滨哈西万达广场',
      value: [126.5872570975, 45.7002065432, 40931],
      percent: '100%',
      label: {
        normal: {
          show: true,
          offset: [0, 2]
        }
      }
    },
    {
      name: '石家庄裕华万达广场',
      value: [114.544846, 38.024092, 39857],
      percent: '97.38%',
      label: {
        normal: {
          show: true,
          offset: [5, 25]
        }
      }
    },
    {
      name: '成都金牛万达广场',
      value: [104.0745673958, 30.6865902394, 37520],
      percent: '91.67%'
    },
    {
      name: '长春红旗街万达广场',
      value: [125.2959435287, 43.8669228852, 35605],
      percent: '86.99%'
    },
    {
      name: '沈阳太原街万达广场',
      value: [123.3987116505, 41.7914496655, 35393],
      percent: '86.47%'
    }
  ],
  [
    {
      name: '上海',
      value: [121.487899486, 31.24916171, 104481],
      percent: '100%'
    },
    {
      name: '成都',
      value: [104.067923463, 30.6799428454, 99744],
      percent: '95.47%'
    },
    {
      name: '沈阳',
      value: [123.432790922, 41.8086447835, 88127],
      percent: '84.35%'
    },
    {
      name: '东莞',
      value: [113.763433991, 23.0430238154, 83649],
      percent: '80.06%',
      label: {
        normal: {
          show: true,
          offset: [20, 10]
        }
      }
    },
    {
      name: '福州',
      value: [119.330221107, 26.0471254966, 71978],
      percent: '68.89%'
    }
  ],
  [
    {
      name: '山东',
      value: 251779,
      percent: '100%'
    },
    {
      name: '辽宁',
      value: 233768,
      percent: '92.85%'
    },
    {
      name: '广东',
      value: 211886,
      percent: '84.16%'
    },
    {
      name: '四川',
      value: 207217,
      percent: '82.30%'
    },
    {
      name: '福建',
      value: 205066,
      percent: '81.45%'
    }
  ],
  [
    {
      name: '华东区',
      value: 1021252,
      percent: '100%'
    },
    {
      name: '中南区',
      value: 547361,
      percent: '53.60%'
    },
    {
      name: '东北区',
      value: 448818,
      percent: '43.95%'
    },
    {
      name: '华北区',
      value: 292561,
      percent: '28.65%'
    },
    {
      name: '西南区',
      value: 282466,
      percent: '27.66%'
    },
    {
      name: '西北区',
      value: 173057
    }
  ]
];

const pillar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const showType = ['广场', '城市', '省份', '区域'];
export default class InnerScatterFour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
    this.timer = null;
  }

  componentDidMount() {
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      this.setState({
        index: (this.state.index + 1) % 4
      });
    }, 3000);
  }

  componentWillUnMount() {
    clearInterval(this.timer);
  }

  renderMap(index) {
    const topGeo = index === 0 ? pillarData[0] : pillarData[1];
    const geo = index === 0 ? plazaGeo : cityGeo;
    const multiple = index === 0 ? 6000 : 10000;
    const color = '#108EE9';
    const scatterMap = {
      series: [
        {
          type: 'effectScatter',
          coordinateSystem: 'geo',
          z: 10,
          rippleEffect: {
            brushType: 'stroke'
          },
          symbolSize: 7 / 192 * getBaseFontSize(),
          label: {
            normal: {
              show: true,
              position: 'top',
              formatter: '{b}',
              textStyle: {
                color: '#fff',
                fontSize: 10 / 192 * getBaseFontSize()
              }
            }
          },
          itemStyle: {
            normal: {
              color
            }
          },
          data: topGeo
        },
        {
          type: 'scatter',
          coordinateSystem: 'geo',
          symbolSize(val) {
            return val[2] / multiple / 192 * getBaseFontSize();
          },
          label: {
            normal: {
              show: false,
              position: 'top',
              formatter: '{b}',
              textStyle: {
                color: '#fff',
                fontSize: 10 / 192 * getBaseFontSize()
              }
            }
          },
          itemStyle: {
            normal: {
              color
            }
          },
          data: geo
        }
      ]
    };
    const provinceColor = ['#0F60E5', '#081E8F'];
    const areaColor = ['#3F87FD', '#0F60E5', '#1A2EE4', '#0027AF', '#081E8F', '#121E67'];
    const provinceMap = {
      visualMap: {
        min: Math.min.apply(
          null,
          provinceValue.map((i) => {
            return i.value;
          })
        ),
        max: Math.max.apply(
          null,
          provinceValue.map((i) => {
            return i.value;
          })
        ),
        show: false,
        inRange: {
          color: provinceColor
        },
        calculable: true,
        precision: 2
      },
      series: [
        {
          type: 'map',
          mapType: 'china',
          label: {
            emphasis: {
              show: true
            }
          },
          roam: false,
          itemStyle: {
            normal: {
              areaColor: '#0F60E5',
              borderColor: '#2A8EDA',
              borderWidth: 0.5 / 192 * getBaseFontSize()
            },
            emphasis: {
              areaColor: 'yellow'
            }
          },
          data: provinceValue
        }
      ]
    };
    const areaMap = {
      tooltip: {
        show: false,
        trigger: 'item',
        formatter: (params) => {
          return `${params.data.area}: ${params.data.value}`;
        }
      },
      visualMap: {
        min: Object.values(areaValue).sort((prev, next) => prev - next)[0],
        max: Object.values(areaValue).sort((prev, next) => next - prev)[0],
        show: false,
        inRange: {
          color: areaColor
        },
        calculable: true,
        precision: 2
      },
      series: [
        {
          type: 'map',
          mapType: 'china',
          label: {
            emphasis: {
              show: false
            }
          },
          roam: false,
          itemStyle: {
            normal: {
              areaColor: '#3F87FD',
              borderColor: '#2A8EDA',
              borderWidth: 0.5 / 192 * getBaseFontSize()
            },
            emphasis: {
              areaColor: 'yellow'
            }
          },
          data: proArea.map((item) => {
            return {
              name: item.name,
              value: areaValue[item.area],
              area: item.area
            };
          })
        }
      ]
    };
    let data = null;

    switch (index) {
      case 0:
        data = scatterMap;
        break;
      case 1:
        data = scatterMap;
        break;
      case 2:
        data = provinceMap;
        break;
      case 3:
        data = areaMap;
        break;
      default:
        data = scatterMap;
    }
    data.index = index;
    return <WDMapBasic key={index} optionCustom={data} className="map" />;
  }

  render() {
    return (
      <div>
        <HeaderTitle title="万达广场WiFi热度分布" />
        <div className="inner-scatter-four">
          <div className="map-out">
            <div className="hanabi hanabi-1" />
            <div className="hanabi hanabi-2" />
            <div className="hanabi hanabi-3" />
            <div className="hanabi hanabi-4" />
            <img src="/img/inner-scatter-bg.png" className="bg-pic" />
            <div className="map-inner">
              {this.renderMap(this.state.index)}
            </div>
          </div>
          {showType.map((item, i) =>
            <div key={i} className={this.state.index === i ? 'box-active' : 'box'}>
              <img
                className="box-pic"
                src={
                  this.state.index === i ? '/img/pillar-bg-active.png' : '/img/pillar-bg-normal.png'
                }
              />
              <div className="bar-title">
                {item}
              </div>
              <div key={this.state.index} className="pillar-wrap">
                {pillarData[i].slice(0, 5).map((item, k) =>
                  <div
                    key={k}
                    className="erea"
                    style={{
                      height: item.percent
                    }}
                  >
                    {pillar.map((item, j) =>
                      <div
                        key={j}
                        className={this.state.index === i ? 'pillar pillar-active' : 'pillar'}
                      />
                    )}
                  </div>
                )}
              </div>
              <div className={i === 0 ? 'name-wrap-rotate' : 'name-wrap'}>
                {pillarData[i].slice(0, 5).map((item, k) =>
                  <div
                    key={k}
                    className={i === 0 ? (k === 2 ? 'name-rotate-short' : 'name-rotate') : 'name'}
                  >
                    {k === 2 ? item.name.substring(0, 4) : item.name.substring(0, 5)}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
