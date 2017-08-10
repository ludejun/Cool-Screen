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
        icon: 'icon-home-people',
        title: '飞凡内场',
        num: 202,
        unit: '个'
      },
      {
        icon: 'icon-home-car',
        title: '飞凡商业联盟广场总数',
        num: 2764,
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
    const genderList = [
      [
        {
          itemImage: '../img/icon_male.png',
          percent: 1 * 100
        }
      ],
      [
        {
          itemImage: '../img/icon_male.png',
          percent: 0.4 * 100
        },
        {
          itemImage: '../img/icon_female.png',
          percent: 0.6 * 100
        }
      ],
      [
        {
          itemImage: '../img/icon_female.png',
          percent: 1 * 100
        }
      ]
    ];
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
            <p className="pillar-title">广场内消费等级占比</p>

            <div className="flex-row flex-center">
              <div className="image-bar-container flex1">
                {[0, 1, 2].map(v => <WDImageBar key={v} dataList={genderList[v]} />)}
              </div>

              <div>
                <p className="sub-title">带动就业</p>
                <p className="num">
                  <AnimeNumber num={1820000} fromNum={1820000 - 100} />
                  <span className="unit">人</span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex1">
            <p className="bar-title">广场分布省市排名Top 10</p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div className=" light-blue" />
              <div className="legend">万达广场</div>
              <div className=" deep-blue" />
              <div className=" legend">飞凡联盟</div>
            </div>
            {list.map((item, i) =>
              <div className="money-container flex-row" key={i}>
                <div className="money-city">
                  {`${`0${i + 1}`.substr(-2)} ${item.name}` || ''}
                </div>
                <div className="flex1">
                  <div className="money-color-container">
                    <div className="money-color-0" style={{ width: `${item.val * 100}%` }} />
                    <div className="money-color-1" style={{ width: `${item.val1 * 100}%` }} />
                  </div>
                </div>
                {/* <div className="money-num">
                  {item.val}
                </div> */}
              </div>
            )}
          </div>
        </div>
        <HomeCorner className="home-corner left-bottom" />
      </div>
    );
  }
}
