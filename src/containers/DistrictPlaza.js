import React, {Component} from 'react';
import {WDRadar} from '../components';
import HeaderTitle from './Layout/HeaderTitle';
import './DistrictPlaza.less';
import {Rate} from 'antd';

export default class DistrictPlaza extends Component {
  render() {
    return (
      <div className="flex-row district-plaza">
        <HeaderTitle title="万达大数据-商圈分析"/>
        <div className="left-wrap">
          <img className="side-map" src="/img/sideMap.svg" alt=""/>
          <img className="base-map" src="/img/main-map.svg" alt=""/>
          <img className="line-a" src="/img/lineA.svg" alt=""/>
          <img className="plaza-img" src="img/wd-build.png"/>
          <img className="line-c" src="img/lineC.svg"/>
        </div>
        <div className="plaza-info">
          <div className="plaza-title">
            五角场万达广场
          </div>
          <div className="info-line">
            <i className="iconfont icon-plaza-circle line-icon"/>商&ensp;&ensp;&ensp;圈：五角场
          </div>
          <div className="info-line">
            <i className="iconfont icon-plaza-building line-icon"/>所在城市：上海市
          </div>
          <div className="info-line">
            <i className="iconfont icon-plaza-squre line-icon"/>商业面积：26万平方米
          </div>
          <div className="info-line">
            <i className="iconfont icon-plaza-arrow line-icon"/>日均客流：121596
          </div>
          <div className="info-line">
            <i className="iconfont icon-plaza-map line-icon"/>地&emsp;&ensp;&nbsp;址：杨浦区邯郸路600号
          </div>
          <div className="hr"/>
          <div className="flex-row">
            <WDRadar
              opt={{
                max: 100,
                values: [
                  {name: '客流承载力', value: 30},
                  {name: '好评度', value: 40},
                  {name: '消费潜力', value: 60},
                  {name: '层次定位', value: 30},
                  {name: '便利性', value: 50}
                ]
              }}
              className="score-radar"
            />
            <div className="score-div flex-col">
              <p>项目评级</p>
              <p className="score-num">91</p>
              <Rate disabled value={4.5} allowHalf/>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
