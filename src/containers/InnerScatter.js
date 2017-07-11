import React, {Component} from 'react';
import Echarts from 'echarts-for-react';
import {WDMapBasic ,BgAnimation} from '../components';
import { geoCoordMap } from '../assets/map/geoCoordMap';
import './innerScatter.less';
const series = {
  series:[
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
]};
const city=[{'name':'上海',value:'90%'},{'name':'北京',value:'80%'},{'name':'天津',value:'70%'},{'name':'杭州',value:'60%'},{'name':'广州',value:'50%'}];

export default class InnerScatter extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }


  render() {
    return (
      <div className="inner-scatter-container">
        <BgAnimation />
          <div className="main-content">
            <div className="China-map">
              <WDMapBasic optionCustom={series} style={{width:'100%',height:'100%'}}/>
            </div>
            <div className="bar">
              <img src="/img/pillar-bg.png" className="pillar-bg"/>
              <div className="pillar-list">
                {city.map((item,i)=>(
                  <div key={i} className="erea">
                    <div className="pillar" />
                    <div className="name">{item.name}</div>
                  </div>
                  ))}
                </div>
              </div>
          </div>
          <div className="slide-btn">
              <ul className="slide-wrap">
                  <li>广场</li>
                  <li>城市</li>
                  <li className="active">省份</li>
                  <li>区域</li>
              </ul>
          </div>
      </div>
    )
  }
}
