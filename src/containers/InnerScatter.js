import React, {Component} from 'react';
import Echarts from 'echarts-for-react';
import {WDMapBasic, BgAnimation, WDAreaMap} from '../components';
import {plazaGeo} from '../assets/map/wdplaza.geo';
import {cityGeo} from '../assets/map/city.geo';
import {provinceValue, areaValue, proArea} from '../assets/map/mapAreaValue';
import HeaderTitle from './Layout/HeaderTitle';
import { getBaseFontSize } from '../utils';
import './innerScatter.less';

const pillarData = [
  [
    {
      'name': '长春红旗街万达广场',
      value: 6947,
      percent: '100%'
    }, {
      'name': '福州仓山万达广场',
      value: 6510,
      percent: '93.7%'
    }, {
      'name': '南京江宁万达广场',
      value: 5944,
      percent: '85.6%'
    }, {
      'name': '南京建邺万达广场',
      value: 4098,
      percent: '59.0%'
    }, {
      'name': '郑州中原万达广场',
      value: 3912,
      percent: '56.3%'
    }
  ],
  [
    {
      'name': '北京市',
      value: 20866,
      percent: '100%'
    }, {
      'name': '福州市',
      value: 9939,
      percent: '47.6%'
    }, {
      'name': '南京市',
      value: 9678,
      percent: '46.4%'
    }, {
      'name': '武汉市',
      value: 9390,
      percent: '45.0%'
    }, {
      'name': '无锡市',
      value: 8157,
      percent: '39.1%'
    }
  ],
  [
    {
      'name': '江苏',
      value: 36786,
      percent: '100%'
    }, {
      'name': '福建',
      value: 26579,
      percent: '72.3%'
    }, {
      'name': '北京',
      value: 20867,
      percent: '56.7%'
    }, {
      'name': '湖北',
      value: 18358,
      percent: '49.9%'
    }, {
      'name': '安徽',
      value: 17239,
      percent: '46.9%'
    }
  ],
  [
    {
      'name': '华东区',
      value: 119331,
      percent: '100%'
    }, {
      'name': '中南区',
      value: 54783,
      percent: '45.9%'
    }, {
      'name': '东北区',
      value: 32421,
      percent: '27.2%'
    }, {
      'name': '华北区',
      value: 31823,
      percent: '26.7%'
    }, {
      'name': '西南区',
      value: 15345,
      percent: '12.9%'
    }
  ]
];

const pillar = [0,1,2,3,4,5,6,7,8,9];
const showType = ['广场', '城市', '省份', '区域'];
export default class InnerScatter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      index:0
    }
  }

  componentDidMount() {
    this.slideBtn();
  }

  slideBtn() {
    let timer = null;
    clearInterval(timer);
    let ul = document.getElementById('slideWrap');
    let allLI = ul.getElementsByTagName("li");
    let selectTitle = document.querySelector('.bar-title');
    selectTitle.innerHTML = showType[this.state.index];

    timer = setInterval(() => {
      if(this.state.index === 3){
        this.setState({index:0});
      }else{
        this.setState({index:this.state.index+1});
      }
      selectTitle.innerHTML = showType[this.state.index];
    }, 3000)
  }

  renderMap(index){
    const geo = index === 0 ? plazaGeo : cityGeo;
    const multiple = index === 0 ? 1000 : 10000;
    const color = index === 0 ? 'red' : '#108EE9';
    const scatterMap = {
      series: [
        {
          type: 'effectScatter',
          coordinateSystem: 'geo',
          z: 10,
          rippleEffect: {
            brushType: 'stroke'
          },
          symbolSize:function (val) {
            return val[2] /multiple/192*getBaseFontSize();
          },
          label: {
            normal: {
              show: true,
              position: 'top',
              formatter: '{b}',
              textStyle: {
                color: '#fff',
                fontSize:10/192*getBaseFontSize()
              }
            }
          },
          itemStyle: {
            normal: {
              color: color,
            }
          },
          data:  geo
        }
      ]
    };
    const colorList = index === 2 ? ['#e0ffff', '#006edd'] : ['red','yellow'];
    const provinceMap = {
      visualMap: {
        min: Math.min.apply(null, provinceValue.map(i=>{return i.value})),
        max: Math.max.apply(null, provinceValue.map(i=>{return i.value})),
        show: false,
        inRange: {
          color: colorList
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
              areaColor: '#eeeeee',
              borderColor: '#666'
            },
            emphasis: {
              areaColor: 'yellow'
            }
          },
          data: provinceValue
        }
      ]
    };
    const data = (index === 0 || index === 1) ? scatterMap : provinceMap;
    // console.log (index,data);
    return(
      <WDMapBasic optionCustom={data} className="map"/>
    )
  }
  render() {
    return (
      <div>
        <HeaderTitle title="数字商业：内场分布 + 指标排名" className="sum-title"/>
        <BgAnimation />
        <div className="inner-scatter-container">
          <div>
            <div className="main-content">
              <div className="china-map">
                {this.renderMap(this.state.index)}
              </div>
              <div className="bar">
                <div className="bar-title"></div>
                <img src="/img/pillar-bg.png" className="pillar-bg"/>
                <div className="pillar-list">
                  <div className="erea-wrap" >
                    {pillarData[this.state.index].map((item, i) => (
                      <div key={i} className="erea" style={{height: item.percent}}>
                        <div className="child-item">
                          {pillar.map((item,i) => (
                            <div key={i} className="pillar"/>
                          ))}
                          <div className={this.state.index === 0 ? "name name-rotate" : "name"}>{item.name.substring(0,4)}</div>
                        </div>
                      </div>
                    ))}
                  </div>
               </div>
              </div>
            </div>
           <div className="slide-btn">
            <ul id="slideWrap" className="slide-wrap">
              {showType.map((item, i) => (
                <li key={i} className={i === this.state.index ? "active": ""} onClick={this.alertMsg}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
