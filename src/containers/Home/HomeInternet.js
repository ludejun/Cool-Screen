import React, { Component } from 'react';
import { WDMapBasic } from '../../components';
import HomeCorner from './HomeCorner';
import { comdify } from '../../utils';
import weibo from '../../assets/map/weibo.json'; // 'http://echarts.baidu.com/data/asset/data/weibo.json';
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
    const weiboData = weibo.map((serieData, idx) => {
      let px = serieData[0] / 1000;
      let py = serieData[1] / 1000;
      const res = [[px, py]];

      for (let i = 2; i < serieData.length; i += 2) {
        const dx = serieData[i] / 1000;
        const dy = serieData[i + 1] / 1000;
        const x = px + dx;
        const y = py + dy;
        res.push([x.toFixed(2), y.toFixed(2), 1]);

        px = x;
        py = y;
      }
      return res;
    });

    const seriesConfig = {
      type: 'scatter',
      coordinateSystem: 'geo',
      symbolSize: 1,
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
          data: weiboData[0]
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
          data: weiboData[1]
        },
        {
          ...seriesConfig,
          name: '强',
          itemStyle: {
            normal: {
              shadowBlur: 2,
              shadowColor: 'rgba(255, 255, 255, 0.8)',
              color: 'rgba(255, 255, 255, 0.8)'
            }
          },
          data: weiboData[2]
        }
      ]
    };
    return option;
  }

  render() {
    return (
      <div className="home-internet flex-col">
        <img src="/img/wanda-logo.png" className="header-logo" />
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
                    {comdify(v.num)}<span className="line-unit">{v.unit}</span>
                  </p>
                </div>
              )}
            </div>
          </div>
          <img className="banner-img" src="/img/home-internet.png" />
        </div>

        <div className="flex-row">
          <div className="flex1 map-div">
            <WDMapBasic optionCustom={this.getMapOption()} className="map-member" />
            <p className="map-title">飞凡会员分布图</p>
          </div>
          <div className="flex1">
            <img className="internet-gragh" src="/img/home-internet-gragh.png" />
            <p className="map-title">数字商业互联</p>
          </div>
        </div>
        <HomeCorner className="home-corner right-bottom" />
      </div>
    );
  }
}
