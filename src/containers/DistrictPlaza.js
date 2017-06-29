import React, { Component } from 'react';
import { WDRadar } from '../components';
import './DistrictPlaza.less';
import { Rate } from 'antd';

export default class DistrictPlaza extends Component {
  render() {
    return (
      <div className="flex-row district-plaza">

        <div className="plaza-info">
          <div className="plaza-title">
            五角场万达广场
          </div>
          <div className="info-line">
            <i className="iconfont icon-plaza-circle line-icon" />商&ensp;&ensp;&ensp;圈：五角场
          </div>
          <div className="info-line">
            <i className="iconfont icon-plaza-building line-icon" />所在城市：上海市
          </div>
          <div className="info-line">
            <i className="iconfont icon-plaza-squre line-icon" />商业面积：26万平方米
          </div>
          <div className="info-line">
            <i className="iconfont icon-plaza-arrow line-icon" />日均客流：121596
          </div>
          <div className="info-line">
            <i className="iconfont icon-plaza-map line-icon" />地&emsp;&ensp;&nbsp;址：杨浦区邯郸路600号
          </div>
          <div className="hr" />
          <div className="flex-row">
            <WDRadar
              opt={{
                max: 100,
                values: [
                  { name: '客流承载力', value: 30 },
                  { name: '好评度', value: 40 },
                  { name: '消费潜力', value: 60 },
                  { name: '层次定位', value: 30 },
                  { name: '便利性', value: 50 }
                ]
              }}
              className="score-radar"
            />
            <div className="score-div">
              <p>项目评级</p>
              <p className="score-num">91</p>
              <Rate disabled value={4.5} allowHalf className="score-rate" />
            </div>
          </div>
        </div>

        <svg viewBox="0 0 212 336" className="plaza-line">
          <defs>
            <linearGradient x1="8.38388457e-14%" y1="0%" x2="100%" y2="100%" id="linearGradient-1">
              <stop stopColor="#06F0FB" stopOpacity="0.8" offset="0%" />
              <stop stopColor="#6D83F1" offset="100%" />
            </linearGradient>
          </defs>
          <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g
              id="商圈分析"
              transform="translate(-737.000000, -339.000000)"
              stroke="url(#linearGradient-1)"
            >
              <g id="Group-6" transform="translate(739.000000, 341.000000)">
                <polyline
                  id="Path-52"
                  strokeWidth="4.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  points="18 9 77 9 77 249.5 207 331.5"
                />
                <ellipse
                  id="Oval-3"
                  strokeWidth="3.6"
                  cx="9"
                  cy="9.00300601"
                  rx="9"
                  ry="9.00300601"
                />
              </g>
            </g>
          </g>
        </svg>

        <img className="plaza-image" src="img/district-plaza.png" />

      </div>
    );
  }
}
