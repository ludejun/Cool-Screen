import React, { Component } from 'react';
import { WDPillar, WDImageBar, AnimeNumber } from '../../components';
import HomeCorner from './HomeCorner';
import { comdify, resizeSquarePage } from '../../utils';
import './commerce.less';

export default class Commerce extends Component {
  constructor(props) {
    super(props);
    this.banner = [
      {
        icon: 'icon-home-wanda',
        title: '万达广场数',
        num: 211,
        unit: '个'
      },
      {
        icon: 'icon-home-shop',
        title: '签约合作大型商业项目',
        num: 3382,
        unit: '个'
      }
    ];
    resizeSquarePage();
  }

  render() {
    const consume = ['31%', '43%', '26%'];
    const list = [
      { name: '江苏省', val: 0.058, val1: 0.941, num: 361 },
      { name: '浙江省', val: 0.057, val1: 0.942, num: 328 },
      { name: '广东省', val: 0.065, val1: 0.934, num: 307 },
      { name: '陕西省', val: 0.03, val1: 0.969, num: 194 },
      { name: '河北省', val: 0.017, val1: 0.982, num: 174 },
      { name: '福建省', val: 0.076, val1: 0.923, num: 170 },
      { name: '湖北省', val: 0.069, val1: 0.93, num: 143 },
      { name: '安徽省', val: 0.12, val1: 0.879, num: 124 },
      { name: '山东省', val: 0.114, val1: 0.885, num: 122 },
      { name: '山西省', val: 0.016, val1: 0.983, num: 120 }
    ];

    const shop = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
      <div className="home-commerce dark-bg flex-col">
        <HomeCorner className="home-corner left-top" />
        <div className="home-info-banner flex-row">
          <div className="flex1">
            <p className="banner-title banner-yellow">实体商业</p>
            <div className="flex-row">
              {this.banner.map((v, i) =>
                <div className="flex1" key={i}>
                  <p className="line-title">
                    <i className={`iconfont ${v.icon} line-icon`} />
                    {v.title}
                  </p>
                  <p className="line-num">
                    <AnimeNumber num={v.num} fromNum={v.num - 100} />
                    <span className="line-unit">
                      {v.unit}
                    </span>
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="img-container">
            <div className="span-hanabi span-hanabi-0" />
            <div className="span-hanabi span-hanabi-1" />
            <div className="span-hanabi span-hanabi-2" />
            <img className="banner-img" src="/img/home-real.png" />
          </div>
        </div>

        <div className="flex-row commerce-bottom">
          <div className="flex1">
            <WDPillar />
            <p className="pillar-title">广场客群消费潜力占比</p>
            <div className="flex-row flex-center">
              <div className="image-bar-container">
                {[0, 1, 2, 3].map((item, i) =>
                  <div key={i} className={i % 2 === 0 ? 'red' : 'blue'}>
                    {shop.map((item, j) => <i key={j} className={'iconfont icon-shop'} />)}
                  </div>
                )}
              </div>

              <div>
                <p className="sub-title">签约合作独立门店数</p>
                <p className="num">
                  <AnimeNumber num={161500} fromNum={161500 - 100} />
                  <span className="unit">+家</span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex1">
            <p className="bar-title">广场总数省市分布排名Top 10</p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div className=" light-blue" />
              <div className="legend">万达</div>
              <div className=" deep-blue" />
              <div className=" legend">签约合作项目</div>
            </div>
            {list.map((item, i) =>
              <div className="money-container flex-row" key={i}>
                <div className="money-city">
                  {`${`0${i + 1}`.substr(-2)} ${item.name}` || ''}
                </div>
                {/* <div className="flex1"> */}
                {/* <div className="money-color-container">
                    <div className="money-color-0" style={{width: `${item.val * 100}%`}}/>
                    <div className="money-color-1" style={{width: `${item.val1 * 100}%`}}/>
                  </div> */}
                <svg className="hexagon" xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 4 4">
                  <defs>
                    <linearGradient id={`colorFill${i}`}>
                      <stop offset="0%" stopColor="#12def5" />
                      <stop offset={`${item.val * 100}%`} stopColor="#12def5" />
                      <stop offset={`${item.val * 100 + 0.1}%`} stopColor="#108ee9" />
                      <stop offset={`${item.val1 * 100}%`} stopColor="#108ee9" />
                    </linearGradient>
                  </defs>
                  <polygon
                    points="40,0 38,1.732 -38,1.732 -40,0 -38,-1.732 38,-1.732"
                    fill={`url(#colorFill${i})`}
                    stroke="none"
                  />
                </svg>
                {/* </div> */}
                <div className="inner-scale">
                  万达 {Math.round(item.val * 100)}%
                </div>
                <div className="outer-scale">
                  签约 {Math.round(item.val1 * 100)}%
                </div>
              </div>
            )}
          </div>
        </div>
        <HomeCorner className="home-corner left-bottom" />
      </div>
    );
  }
}
