import React, { Component } from 'react';
import { WDMapBasic, AnimeNumber, WDLogoSvg } from '../../components';
import HomeCorner from './HomeCorner';
import feifanChina from '../../assets/map/feifanChina.json';
import './HomeInternet.less';
import { resizeSquarePage } from '../../utils';

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
        unit: '人'
      }
    ];
    resizeSquarePage();
  }

  getMapOption() {
    const seriesConfig = {
      type: 'scatter',
      coordinateSystem: 'geo',
      symbolSize: 2,
      large: true
    };

    const option = {
      series: [
        {
          ...seriesConfig,
          name: '弱',
          itemStyle: {
            normal: {
              shadowBlur: 2,
              shadowColor: 'rgba(37, 140, 249, 0.8)',
              color: 'rgba(37, 140, 249, 0.8)'
            }
          },
          data: feifanChina[0]
        },
        {
          ...seriesConfig,
          name: '中',
          itemStyle: {
            normal: {
              shadowBlur: 2,
              shadowColor: 'rgba(14, 241, 242, 0.8)',
              color: 'rgba(14, 241, 242, 0.8)'
            }
          },
          data: feifanChina[1]
        },
        {
          ...seriesConfig,
          // type: 'effectScatter',
          // showEffectOn: 'render',
          // rippleEffect: {
          //   brushType: 'stroke'
          // },
          name: '强',
          itemStyle: {
            normal: {
              shadowBlur: 2,
              shadowColor: 'rgba(255, 255, 255, 0.8)',
              color: 'rgba(255, 255, 255, 0.8)'
            }
          },
          data: feifanChina[2]
        }
      ]
    };
    return option;
  }

  render() {
    return (
      <div className="home-internet dark-bg flex-col">
        <WDLogoSvg className="header-logo" />
        <HomeCorner className="home-corner right-top" />
        <div className="home-info-banner flex-row">
          <div className="flex1">
            <p className="banner-title">互联网</p>
            <div className="flex-row">
              {this.banner.map((v, i) =>
                <div className="flex1" key={i}>
                  <p className="line-title">
                    <i className={`iconfont ${v.icon} line-icon`} />{v.title}
                  </p>
                  <p className="line-num">
                    <AnimeNumber num={v.num} /><span className="line-unit">{v.unit}</span>
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="right-img">
            <div className="outer">
              <div className="inner">
                <img className="home-earth" src="/img/home-earth.png" />
                <div className="line1">
                  <div className="circle" />
                </div>
                <div className="line2">
                  <div className="circle" />
                </div>
              </div>
            </div>
            <div className="ball1" />
            <div className="ball2" />
            <div className="ball3">
              <div className="outshadow" />
            </div>
            <div className="ball4">
              <div className="outshadow1" />
            </div>
            <div className="ball5" />
            <div className="ball6" />
            <div className="ball7" />
            <div className="ball8" />
          </div>
        </div>

        <div className="flex-row">
          <div className="flex1 map-div">
            <WDMapBasic optionCustom={this.getMapOption()} className="map-member" />
            <p className="map-title">飞凡会员分布图</p>
          </div>
          <div className="flex1">
            <div className="internet-net-div">
              {[
                ['icon-home-users', '互联网用户'],
                ['icon-home-shop', '商铺'],
                ['飞凡通'],
                ['万达财富', '小贷'],
                ['wifi'],
                ['整合', '营销传播'],
                ['飞凡APP']
              ].map((v, i) =>
                <div className={`net-cube-div net-cube-div-${i}`} key={i}>
                  <div className={`net-cube-scale-${i}`}>
                    <div className="net-cube outer" />
                    <div className="net-cube inner" />
                  </div>
                  <div className="net-content flex-col">
                    {v[0].indexOf('icon') > -1
                      ? <i className={`iconfont ${v[0]} net-icon`} />
                      : <span>{v[0]}</span>}
                    <span>{v[1]}</span>
                  </div>
                </div>
              )}
              <img className="internet-gragh" src="/img/home-net.png" />
            </div>
            <p className="map-title">数字商业互联</p>
          </div>
        </div>
        <HomeCorner className="home-corner right-bottom" />
      </div>
    );
  }
}
