import React, {Component} from 'react';
import Echarts from 'echarts-for-react';
import {WDMapBasic, BgAnimation} from '../components';
import {geoCoordMap} from '../assets/map/geoCoordMap';
import HeaderTitle from './Layout/HeaderTitle';
import './innerScatter.less';
const series = {
  series: [
    {
      symbolSize: 2,
      large: true,
      type: 'effectScatter',
      coordinateSystem: 'geo',
      z: 10,
      left:0,
      right:0,
      bottom:0,
      top:0,
      rippleEffect: {
        brushType: 'stroke'
      },
      symbolSize: 8,
      label: {
        normal: {
          show: true,
          position: 'top',
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
const pillar = [0,1,2,3,4,5,6,7,8,9];
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
    timer = setInterval(() => {
      if (num >= showType.length) {
        num = 0;
        showType.map((item, idx) => {
          allLI[idx].className = '';
        })
        selectTitle.innerHTML = '';
        allLI[num].className = 'active';
        selectTitle.innerHTML = showType[num];
        num++;
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
      <div>
        <HeaderTitle title="数字商业：内场分布 + 指标排名" className="sum-title"/>
        <BgAnimation />
        <div className="inner-scatter-container">
          <div>
            <div className="main-content">
              <div className="china-map">
                <WDMapBasic optionCustom={series} className="map"/>
              </div>
              <div className="bar">
                <div className="bar-title"></div>
                <img src="/img/pillar-bg.png" className="pillar-bg"/>
                <div className="pillar-list">
                  <div className="erea-wrap">
                    {city.map((item, i) => (
                      <div key={i} className="erea" style={{height: item.value}}>
                        {pillar.map((item,i) => (
                          <div key={i} className="pillar"/>
                        ))}
                        <div className="name">{item.name}</div>
                      </div>
                    ))}
                  </div>
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
      </div>
    </div>
    )
  }
}
