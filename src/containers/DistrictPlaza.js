import React, { Component } from 'react';
import { Rate } from 'antd';
import { WDRadar } from '../components';
import { getResize } from '../utils';
import HeaderTitle from './Layout/HeaderTitle';
import './DistrictPlaza.less';

export default () => {
  // DistrictPlaza extends Component {
  // constructor(props) {
  //   super(props);
  //   this.timer = null;
  //   this.state = {
  //     num: this.getRandom()
  //   };
  // }

  // getRandom = () => {
  //   return parseInt(Math.random() * 10);
  // };
  // componentDidMount() {
  //   clearInterval(this.timer);
  //   this.timer = setInterval(() => {
  //     const num = this.getRandom();
  //     this.setState({
  //       num: this.getRandom()
  //     });
  //   }, 2000);
  // }
  // render() {
  return (
    <div className="flex-row district-plaza">
      <HeaderTitle title="万达广场商圈热力图" />
      <div className="left-wrap">
        <img className="side-map" src="/img/sideMap.svg" />
        <img className="main-map" src="/img/main-map.png" />
        <img className="red-point" src="/img/point.png" />
        <img className="line-a" src="/img/lineA.svg" />
        <img className="plaza-img" src="img/wd-build.png" />
        <img className="line-c" src="img/lineC.svg" />
        {/*
          {[0, 15, 30, 45, 60, 75].map(v =>
            <div
              className="floor-light"
              key={v}
              style={{
                left: getResize(
                  ((this.state.num + v) % 8 == 0 ? 7 : (this.state.num + v) % 8 - 1) * 3.5 + 328
                ),
                top: getResize(
                  ((this.state.num + v) % 8 == 0 ? 7 : (this.state.num + v) % 8 - 1) * 2.2 +
                    Math.floor((this.state.num + v) / 8) * 7.5 +
                    63
                )
              }}
            />
          )}

          {[1, 15, 30, 45, 60, 75].map(v =>
            <div
              className="floor-light"
              key={v}
              style={{
                left: getResize(
                  ((this.state.num + v) % 8 == 0 ? 7 : (this.state.num + v) % 8 - 1) * 3.5 + 492
                ),
                top: getResize(
                  ((this.state.num + v) % 8 == 0 ? 7 : (this.state.num + v) % 8 - 1) * 2.2 +
                    Math.floor((this.state.num + v) / 8) * 7.5 +
                    92
                )
              }}
            />
          )}

          {[15, 30, 45, 60, 75].map(v =>
            <div
              className="floor-light"
              key={v}
              style={{
                left: getResize(
                  ((this.state.num + v) % 8 == 0 ? 7 : (this.state.num + v) % 8 - 1) * 3.5 + 531
                ),
                top: getResize(
                  ((this.state.num + v) % 8 == 0 ? 7 : (this.state.num + v) % 8 - 1) * 2.2 +
                    Math.floor((this.state.num + v) / 8) * 7.5 +
                    110
                )
              }}
            />
          )}
          */}
      </div>
      <div className="plaza-info">
        <div className="plaza-title">
          五角场万达广场
        </div>
        <div className="info-line">
          <i className="iconfont icon-plaza-circle line-icon" />商<span className="line-blank" />圈：五角场
        </div>
        <div className="info-line">
          <i className="iconfont icon-plaza-building line-icon" />所在城市：上海市
        </div>
        <div className="info-line">
          <i className="iconfont icon-plaza-squre line-icon" />商业面积：19.57万平方米
        </div>
        <div className="info-line">
          <i className="iconfont icon-plaza-arrow line-icon" />日均客流：15万人
        </div>
        <div className="info-line">
          <i className="iconfont icon-plaza-map line-icon" />地<span className="line-blank" />址：<span className="info-line-address">杨浦区邯郸路600号</span>
        </div>
        <div className="hr" />
        <div className="flex-row">
          <WDRadar
            opt={{
              max: 10,
              values: [
                { name: '商业能级', value: 9.4 },
                { name: '交通便利性', value: 8.96 },
                { name: '公众认知度', value: 9.28 },
                { name: '品牌入驻情况', value: 8.73 },
                { name: '企业综合实力', value: 9.8 },
                { name: '消费潜力', value: 8.84 },
                { name: '商业体量', value: 9.42 }
              ]
            }}
            className="score-radar"
          />
          <div className="score-div flex-col">
            <p className="radar-title">项目评级</p>
            <p className="score-num">9.2</p>
            <Rate disabled defaultValue={4.5} allowHalf />
          </div>
        </div>
      </div>

    </div>
  );
  // }
};
