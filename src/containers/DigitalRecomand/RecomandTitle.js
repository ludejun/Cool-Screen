import React, { Component } from 'react';

export default class RecomandTitle extends Component {
  render() {
    return (
      <svg
        // width="352px"
        // height="109px"
        viewBox="0 0 352 109"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        {...this.props}
      >

        <defs>
          <rect id="title-path-1" x="0" y="0" width="302" height="59" />
          <filter
            x="-25.0%"
            y="-127.9%"
            width="150.0%"
            height="355.8%"
            filterUnits="objectBoundingBox"
            id="title-filter-2"
          >
            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1" />
            <feGaussianBlur stdDeviation="25" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
            <feComposite
              in="shadowBlurOuter1"
              in2="SourceAlpha"
              operator="out"
              result="shadowBlurOuter1"
            />
            <feColorMatrix
              values="0 0 0 0 0.395345742   0 0 0 0 0.0333412247   0 0 0 0 1  0 0 0 0.615432518 0"
              type="matrix"
              in="shadowBlurOuter1"
            />
          </filter>
        </defs>

        <g id="广场楼层分布实例图" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="title-rect" opacity="0.31884058">
            <use
              fill="black"
              fillOpacity="1"
              filter="url(#title-filter-2)"
              xlinkHref="#title-path-1"
            />
            <use
              fillOpacity="0.322775136"
              fill="#01225F"
              fillRule="evenodd"
              xlinkHref="#title-path-1"
            />
            <rect
              stroke="#40C1FF"
              strokeWidth="1.9"
              x="0.95"
              y="0.95"
              width="300.1"
              height="57.1"
            />
            <use stroke="#0BB5FF" strokeWidth="0.95" xlinkHref="#title-path-1" />
          </g>
          <text
            fontFamily="PingFangSC-Medium, PingFang SC"
            fontSize="24"
            fontWeight="400"
            fill="#FFFFFF"
          >
            <tspan x="43" y="38">广场楼层分布实例图</tspan>
          </text>
          <path
            d="M12.1917412,1 L1,1 L1,14.0038443 M290,1 L301.191741,1 L301.191741,14.0038443 M12.1917412,58.0038443 L1,58.0038443 L1,45 M290,58.0038443 L301.191741,58.0038443 L301.191741,45"
            id="title-corner"
            stroke="#108EE9"
            strokeWidth="4"
          />
        </g>

      </svg>
    );
  }
}
