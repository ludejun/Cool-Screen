import React, { Component } from 'react';
import { WDMapBasic } from '../components';
import { comdify } from '../utils';
import './HomeInternet.less';

export default class HomeInternet extends Component {
  constructor() {
    super();
    this.banner = [
      {
        icon: 'icon-home-people',
        title: '飞凡会员总数',
        num: 20348729,
        unit: '人'
      },
      {
        icon: 'icon-home-car',
        title: '飞凡入驻商家人数',
        num: 3148385,
        unit: '辆'
      }
    ];
  }
  getMapOption() {
    return {};
  }

  render() {
    return (
      <div className="home-internet">
        <div className="home-info-banner flex-row">
          <div className="banner-main">
            <p className="banner-title">互联网</p>
            <div className="flex-row">
              {this.banner.map(v =>
                <div className="flex1">
                  <p className="line-title">
                    <i className={`iconfont ${v.icon} line-icon`} />{v.title}
                  </p>
                  <p className="line-num">
                    {comdify(v.num)}<span className="line-unit">{v.unit}</span>
                  </p>
                </div>
              )}
            </div>
          </div>
          <img className="banner-img" src="/img/home-internet.png" />
        </div>

        <div>
          <WDMapBasic
            optionCustom={this.getMapOption()}
            className="map-member"
            style={{
              height: 588,
              width: 'calc(72% + 300px)',
              display: 'inline-block',
              margin: '-50px -150px'
            }}
          />
          <div />
        </div>
      </div>
    );
  }
}
