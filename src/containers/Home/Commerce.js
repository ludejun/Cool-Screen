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
        title: '年平均进入商圈人数',
        num: 20348729,
        unit: '人'
      },
      {
        icon: 'icon-home-car',
        title: '年平均进入商圈车流量',
        num: 3148385,
        unit: '辆'
      }
    ];
    resizeSquarePage();
  }
  render() {
    const consume = ['31%', '43%', '26%'];
    const list = [
      { name: '上海市', val: '10283万元', percentage: '95%' },
      { name: '上海市', val: '10283万元', percentage: '91%' },
      { name: '上海市', val: '10283万元', percentage: '90%' },
      { name: '广州市', val: '9283万元', percentage: '80%' },
      { name: '天津市', val: '8283万元', percentage: '80%' },
      { name: '上海1市', val: '7283万元', percentage: '75%' },
      { name: '南昌市', val: '6283万元', percentage: '70%' },
      { name: '上海4市', val: '5283万元', percentage: '60%' },
      { name: '上海2市', val: '4283万元', percentage: '48%' },
      { name: '上海3市', val: '3283万元', percentage: '40%' }
    ];
    const genderList = [
      [
        {
          itemImage: 'img/icon_male.png',
          percent: 1 * 100
        }
      ],
      [
        {
          itemImage: 'img/icon_male.png',
          percent: 0.4 * 100
        },
        {
          itemImage: 'img/icon_female.png',
          percent: 0.6 * 100
        }
      ],
      [
        {
          itemImage: 'img/icon_female.png',
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
                    <i className={`iconfont ${v.icon} line-icon`} />{v.title}
                  </p>
                  <p className="line-num">
                    <AnimeNumber num={v.num} /><span className="line-unit">{v.unit}</span>
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
            <div className="pillar">
              <div className="pillar-animation">
                <WDPillar />
                <div className="oval" />
              </div>
              <p className="pillar-title">广场内消费等级占比</p>
            </div>
            <div className="flex-row flex-center">

              <div className="image-bar-container flex1">
                {[0, 1, 2].map(v => <WDImageBar key={v} dataList={genderList[v]} />)}
              </div>

              <div>
                <p className="sub-title">带动就业</p>
                <p className="num">{comdify(1234567)}<span className="unit">人</span></p>
              </div>
            </div>
          </div>

          <div className="flex1">
            <p className="bar-title">万达广场销售额省市排名 TOP10</p>
            {list.map((item, i) =>
              <div className="money-container flex-row" key={i}>
                <div className="money-city">
                  {`${`0${i + 1}`.substr(-2)} ${item.name}` || ''}
                </div>
                <div className="flex1">
                  <div className="money-color-container">
                    <div className="money-color" style={{ width: `${item.percentage}` }} />
                  </div>
                </div>
                <div className="money-num">
                  {item.val}
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
