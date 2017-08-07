import React, { Component } from 'react';
import Echarts from 'echarts-for-react';
import { WDMapBasic, BgAnimation } from '../../components';
import { plazaGeo } from '../../assets/map/wdplaza.geo';
import { cityGeo } from '../../assets/map/city.geo';
import { provinceValue, proArea, areaValue } from '../../assets/map/mapAreaValue';
import HeaderTitle from '../Layout/HeaderTitle';
import { getBaseFontSize } from '../../utils';
import './innerScatter.less';

const pillarData = [
  [
    {
      name: '郑州惠济万达广场',
      value: [113.640612525, 34.8684219261, 13478],
      percent: '100%'
    },
    {
      name: '徐州铜山万达广场',
      value: [117.1902587966, 34.1960255201, 11544],
      percent: '85.7%'
    },
    {
      name: '北京槐房万达广场',
      value: [116.3682659401, 39.813840514, 11048],
      percent: '82.0%'
    },
    {
      name: '东莞虎门万达广场',
      value: [113.682834261, 22.8330205339, 10984],
      percent: '81.5%'
    },
    {
      name: '烟台开发区万达广场',
      value: [121.2565552877, 37.5375066159, 10266],
      percent: '76.2%'
    }
  ],
  [
    {
      name: '北京',
      value: [116.395645038, 39.9299857781, 338700],
      percent: '100%'
    },
    {
      name: '郑州',
      value: [113.64964385, 34.7566100641, 234991],
      percent: '69.4%'
    },
    {
      name: '成都',
      value: [104.067923463, 30.6799428454, 226535],
      percent: '66.9%'
    },
    {
      name: '徐州',
      value: [117.188106623, 34.2715534311, 195691],
      percent: '57.8%'
    },
    {
      name: '烟台',
      value: [121.30955503, 37.5365615629, 157102],
      percent: '46.4%'
    }
  ],
  [
    {
      name: '江苏',
      value: 36786,
      percent: '100%'
    },
    {
      name: '福建',
      value: 26579,
      percent: '72.3%'
    },
    {
      name: '北京',
      value: 20867,
      percent: '56.7%'
    },
    {
      name: '湖北',
      value: 18358,
      percent: '49.9%'
    },
    {
      name: '安徽',
      value: 17239,
      percent: '46.9%'
    }
  ],
  [
    {
      name: '华东区',
      value: 119331,
      percent: '100%'
    },
    {
      name: '中南区',
      value: 54783,
      percent: '45.9%'
    },
    {
      name: '东北区',
      value: 32421,
      percent: '27.2%'
    },
    {
      name: '华北区',
      value: 31823,
      percent: '26.7%'
    },
    {
      name: '西南区',
      value: 15345,
      percent: '12.9%'
    }
  ]
];

const pillar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const showType = ['广场', '城市', '省份', '区域'];
export default class InnerScatter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
    this.timer = null;
  }

  componentDidMount() {
    this.slideBtn();
  }

  slideBtn() {
    clearInterval(this.timer);
    const ul = document.getElementById('slideWrap');
    const allLI = ul.getElementsByTagName('li');
    const selectTitle = document.querySelector('.bar-title');
    selectTitle.innerHTML = showType[this.state.index];

    this.timer = setInterval(() => {
      if (this.state.index === 3) {
        this.setState({ index: 0 });
      } else {
        this.setState({ index: this.state.index + 1 });
      }
      selectTitle.innerHTML = showType[this.state.index];
    }, 3000);
  }

  componentWillUnMount() {
    clearInterval(this.timer);
  }

  renderMap(index) {
    const topGeo = index === 0 ? pillarData[0] : pillarData[1];
    const geo = index === 0 ? plazaGeo : cityGeo;
    const multiple = index === 0 ? 1000 : 10000;
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
          symbolSize: 8 / 192 * getBaseFontSize(),
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
        <HeaderTitle title="数字商业：内场分布 + 指标排名" className="sum-title" />
        <BgAnimation />
        <div className="inner-scatter-container">
          <div>
            <div className="main-content">
              <div className="china-map">
                {this.renderMap(this.state.index)}
              </div>
              <div className="bar">
                <div className="bar-title" />
                <img src="/img/pillar-bg.png" className="pillar-bg" />
                <div key={this.state.index} className="pillar-container">
                  {pillarData[this.state.index].map((item, i) =>
                    <div key={i} className="area" style={{ height: item.percent }}>
                      {pillar.map((item, i) => <div key={i} className="pillar" />)}
                    </div>
                  )}
                </div>
                <div className="name-container">
                  {pillarData[this.state.index].map((item, i) =>
                    <div key={i} className={this.state.index === 0 ? 'name name-rotate' : 'name'}>
                      {item.name.substring(0, 4)}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="slide-btn">
              <ul id="slideWrap" className="slide-wrap">
                {showType.map((item, i) =>
                  <li
                    key={i}
                    className={i === this.state.index ? 'active' : ''}
                    onClick={this.alertMsg}
                  >
                    {item}
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
