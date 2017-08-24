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
        num: 241783164,
        unit: '人'
      },
      {
        icon: 'icon-home-shop',
        title: '飞凡入驻商家数',
        num: 94157,
        unit: '家'
      }
    ];
    resizeSquarePage();
    // this.refInterval = null;
    // this.homeMapFeifanRef = null;
    // this.feifanChinaFormat = [];
    this.state = {
      optionCustom: {}
    };
  }

  componentDidMount() {
    // clearInterval(this.refInterval);

    // const mapInstance = this.homeMapFeifanRef.getInstance();
    this.getMapOption();
    // this.refInterval = setInterval(() => {
    //   mapInstance.clear();
    //   this.getMapOption();
    // }, 10000);
  }

  // componentWillUnmount() {
  //   clearInterval(this.refInterval);
  // }

  // 在arr数组里随机挑选count个组成randomList数组
  // generateRandomListFromArray(arr, count, randomList) {
  //   while (count > 0) {
  //     randomList.push(arr.splice(Math.floor(Math.random() * arr.length), 1)[0]);
  //     count -= 1;
  //   }
  //   return [arr, randomList];
  // }

  getMapOption() {
    // const animeCount = [0, 0, 0]; // 弱，中，强 动画个数,现在数据太大，加动画会特别卡，所以动画先去掉
    //
    // for (let i = 0; i < animeCount.length; i++) {
    //   // 每组数据挑选1000个显示动画;
    //   const list = this.generateRandomListFromArray(feifanChina[i], animeCount[i], []);
    //   // ['弱','弱动画','中','中动画','强','强动画']
    //   this.feifanChinaFormat.push(list[0]); // list[0]);
    //   this.feifanChinaFormat.push(list[1]);
    // }

    const seriesConfig = {
      type: 'scatter',
      coordinateSystem: 'geo',
      symbolSize: 1.5,
      large: true
      // animationThreshold: 2000
    };

    const colors = [
      'rgba(37, 140, 249, 0.8)',
      'rgba(14, 241, 242, 0.8)',
      'rgba(255, 255, 255, 0.8)'
    ];

    const option = {
      series: ['弱', '中', '强'].map((v, i) => ({
        ...seriesConfig,
        name: { v },
        itemStyle: {
          normal: {
            shadowBlur: 2,
            shadowColor: colors[i],
            color: colors[i]
          }
        },
        data: feifanChina[i] // ['弱','弱动画','中','中动画','强','强动画']
        // animation: i % 2 !== 0,
        // animationDelay: (idx) => {
        //   return i % 2 !== 0 ? idx * 5 : 2600;
        // }
      }))
      // series: ['弱', '弱', '中', '中', '强', '强'].map((v, i) => ({
      //   ...seriesConfig,
      //   name: { v },
      //   itemStyle: {
      //     normal: {
      //       shadowBlur: 2,
      //       shadowColor: colors[parseInt(i / 2)],
      //       color: colors[parseInt(i / 2)]
      //     }
      //   },
      //   data: this.feifanChinaFormat[i] // ['弱','弱动画','中','中动画','强','强动画']
      //   animation: i % 2 !== 0,
      //   animationDelay: (idx) => {
      //     return i % 2 !== 0 ? idx * 5 : 2600;
      //   }
      // }))
    };

    this.setState({
      optionCustom: option
    });
  }

  render() {
    const { optionCustom } = this.state;
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
          <div className="right-img">
            <div className="outer">
              <img className="home-earth" src="/img/home-earth.png" />
              <div className="line1">
                <div className="circle" />
              </div>
              <div className="line2">
                <div className="circle" />
              </div>
            </div>
            {[0, 0, 1, 1, 0, 0, 0, 0].map((v, i) =>
              <div className={`ball${i + 1}`} key={i}>
                {!!v && <div className={`outshadow${i + 1}`} />}
              </div>
            )}
          </div>
        </div>

        <div className="flex-row">
          <div className="flex1 map-div">
            <WDMapBasic
              // ref={ref => (this.homeMapFeifanRef = ref)}
              optionCustom={optionCustom}
              className="map-member"
            />
            <p className="map-title">飞凡会员分布图</p>
          </div>
          <div className="flex1">
            <div className="internet-net-div">
              {[
                ['icon-home-users', '互联网用户'],
                ['icon-home-shop', '商铺'],
                ['Beacon'],
                ['财富', '小贷APP'],
                ['Wi-Fi'],
                ['云Pos'],
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
                      : <span>
                        {v[0]}
                      </span>}
                    <span>
                      {v[1]}
                    </span>
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
