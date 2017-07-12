import React, {Component} from 'react';
import Echarts from 'echarts-for-react';
import {WDMapBasic, BgAnimation} from '../components';
import {geoCoordMap} from '../assets/map/geoCoordMap';
import './innerScatter.less';
const series = {
  series: [
    {
      type: 'effectScatter',
      coordinateSystem: 'geo',
      z: 10,
      rippleEffect: {
        brushType: 'stroke'
      },
      symbolSize: 8,
      label: {
        normal: {
          show: true,
          position: 'right',
          formatter: '{b}',
          textStyle: {
            color: '#fff',
          }
        }
      },
      itemStyle: {
        normal: {
          color: '#108EE9',
        }
      },
      data: geoCoordMap
    }
  ]
};
const city = [{'name': '上海', value: '90%'}, {'name': '北京', value: '80%'}, {'name': '天津', value: '70%'}, {
  'name': '杭州',
  value: '60%'
}, {'name': '广州', value: '50%'}];
const showType = ['广场', '城市', '省份', '区域'];
export default class InnerScatter extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.slideBtn();
  }

  slideBtn() {
    let timer = null;
    clearInterval(timer);
    let num = 0;
    let ul = document.getElementById('slideWrap');
    let allLI = ul.getElementsByTagName("li");
    let selectTitle = document.querySelector('.bar-title');

    allLI[num].className = 'active';
    selectTitle.innerHTML = showType[num];
    timer = setInterval(() => {
      if (num >= showType.length) {
        num = 0;
      } else {
        showType.map((item, idx) => {
          allLI[idx].className = '';
        })
        selectTitle.innerHTML = '';
        allLI[num].className = 'active';
        selectTitle.innerHTML = showType[num];
        num++
      }
    }, 1000)
  }

  render() {
    return (
      <div className="inner-scatter-container">
        <BgAnimation />
        <div className="main-content">
          <div className="china-map">
            {/*<WDMapBasic optionCustom={series} style={{width: '100%', height: '100%'}}/>*/}
          </div>
          <div className="bar">
            <div className="bar-title"></div>
            <img src="/img/pillar-bg.png" className="pillar-bg"/>
            <div className="pillar-list">
              {city.map((item, i) => (
                <div key={i} className="erea">
                  <div className="pillar"/>
                  <div className="name">{item.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="slide-btn">
          <ul id="slideWrap" className="slide-wrap">
            {showType.map((item, i) => (
              <li key={i} onClick={this.alertMsg}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
