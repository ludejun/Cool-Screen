import React, { Component } from 'react';
import { BgAnimation, WDAreaMap } from '../../components';
import HeaderTitle from '../Layout/HeaderTitle';
import './mapScatter.less';
import beijing from '../../assets/map/feifanBeijing.json';
import shanghai from '../../assets/map/feifanShanghai.json';
import beijingMap from '../../assets/map/beijing.json';
import shanghaiMap from '../../assets/map/shanghai.json';
import guangzhouMap from '../../assets/map/guangzhou.json';
import guangzhou from '../../assets/map/feifanguangzhou.json';
import { getBaseFontSize } from '../../utils';

const pointList = [
  `0,0 ${484 / 192 * getBaseFontSize()},0 ${484 / 192 * getBaseFontSize()},${133 /
    192 *
    getBaseFontSize()}`,
  `0,0 ${557 / 192 * getBaseFontSize()},0 ${557 / 192 * getBaseFontSize()},${282 /
    192 *
    getBaseFontSize()}`,
  `0,0 ${451 / 192 * getBaseFontSize()},0 ${451 / 192 * getBaseFontSize()},${430 /
    192 *
    getBaseFontSize()}`
];

const mapList = [
  {
    img: '/img/beijing-tab.png',
    city: '北京市',
    name: 'beijing'
  },
  {
    img: '/img/shanghai-tab.png',
    city: '上海市',
    name: 'shanghai'
  },
  {
    img: '/img/guangzhou-tab.png',
    city: '广州市',
    name: 'guangzhou'
  }
];
const SkyAnimate = React.createClass({
  render() {
    return (
      <div>
        <div className={this.props.name != 'beijing' ? 'month-container' : 'month-container show'}>
          <div className="dot" />
          <div className="pulse" />
          <div className="pulse1" />
        </div>
        <div className="line-container">
          <div className="hover-line" />
          <div className="hover-line" />
          <div className="hover-line" />
          <div className="hover-line" />
        </div>
      </div>
    );
  }
});
export default class MapScatter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
    this.timer = null;
  }

  componentDidMount() {
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      if (this.state.index === 2) {
        this.setState({
          index: 0
        });
      } else {
        this.setState({
          index: this.state.index + 1
        });
      }
    }, 6000);
  }

  componentWillUnMount() {
    clearInterval(this.timer);
  }

  render() {
    const data = [beijing, shanghai, guangzhou];
    const map = [beijingMap, shanghaiMap, guangzhouMap];
    return (
      <div>
        <HeaderTitle title="智慧生活：飞凡会员分布地图" className="sum-title" />
        <BgAnimation />
        <div className="map-scatter">
          <img className="map-scatter-img" src="/img/map-scatter.png" />
          <div key={this.state.index} className="area-map-tag">
            <div className="area-map">
              <div className="animate-wrap">
                <SkyAnimate name={mapList[this.state.index].name} />
              </div>
              <img src={mapList[this.state.index].img} className="small-area-img" />
              <div className="map-container">
                <WDAreaMap
                  className="map"
                  name={mapList[this.state.index].name}
                  data={data[this.state.index]}
                  map={map[this.state.index]}
                />
              </div>
              <p className="name">
                {mapList[this.state.index].city}
              </p>
            </div>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlSpace="preserve"
              className={`line-wrap line-wrap-${this.state.index}`}
              // viewBox="0 0 600 400"
            >
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0057ff" />
                  <stop offset="100%" stopColor="#0effb5" />
                </linearGradient>
              </defs>
              <polyline
                points={pointList[this.state.index]}
                stroke="url(#grad1)"
                fill="none"
                className={`line-fill line-fill-${this.state.index}`}
              />
            </svg>

            <svg
              className={`circle-inner circle-inner-${this.state.index}`}
              viewBox="0 0 34 34"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <defs>
                <ellipse id="circle2-1" cx="20" cy="615" rx="7" ry="7" />
                <filter
                  x="-107.1%"
                  y="-107.1%"
                  width="314.3%"
                  height="314.3%"
                  filterUnits="objectBoundingBox"
                  id="circle2-2"
                >
                  <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1" />
                  <feGaussianBlur
                    stdDeviation="5"
                    in="shadowOffsetOuter1"
                    result="shadowBlurOuter1"
                  />
                  <feColorMatrix
                    values="0 0 0 0 0.15692077   0 0 0 0 0.886739866   0 0 0 0 1  0 0 0 0.786769701 0"
                    type="matrix"
                    in="shadowBlurOuter1"
                  />
                </filter>
              </defs>
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g transform="translate(-150.000000, -838.000000)">
                  <g transform="translate(147.000000, 240.000000)">
                    <g>
                      <use
                        fill="black"
                        fillOpacity="1"
                        filter="url(#circle2-2)"
                        xlinkHref="#circle2-1"
                      />
                      <use fill="#FFF42E" fillRule="evenodd" xlinkHref="#circle2-1" />
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <svg
              className={`circle-out circle-out-${this.state.index}`}
              viewBox="0 0 42 42"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <defs />
              <g
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
                fillOpacity="0.265341938"
                strokeDasharray="3"
              >
                <g transform="translate(-146.000000, -834.000000)" stroke="#FFF42E" fill="#FFF42E">
                  <g transform="translate(147.000000, 240.000000)">
                    <circle id="Oval-44" cx="20" cy="615" r="20" />
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    );
  }
}
