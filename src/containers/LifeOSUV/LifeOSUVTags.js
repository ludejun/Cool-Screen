import React, { Component } from 'react';

export default class LifeOSUVTags extends Component {
  constructor() {
    super();
    this.typelist = {
      0: {
        stroke: '#2EF7FF',
        fill: 'url(#tags-linearGradient-4)',
        opacity: '0.540194746'
      },
      1: {
        stroke: '#168EFF',
        fill: 'url(#tags-linearGradient-3)',
        opacity: '0.540194746'
      },
      2: {
        fill: 'black',
        fillOpacity: '1',
        filter: 'url(#tags-filter-2)'
      }
    };
  }

  render() {
    return (
      <svg
        // width="188px"
        // height="56px"
        viewBox="0 0 188 56"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        // {...this.props}
        className={this.props.className}
      >
        <defs>
          <polygon
            id="tags-path-1"
            points="18.6931818 0 188 0 188 39.8644068 171.977273 56 0 56 0 14.2372881"
          />
          <filter
            x="-5.9%"
            y="-19.6%"
            width="111.7%"
            height="139.3%"
            filterUnits="objectBoundingBox"
            id="tags-filter-2"
          >
            <feGaussianBlur stdDeviation="11" in="SourceAlpha" result="shadowBlurInner1" />
            <feOffset dx="0" dy="0" in="shadowBlurInner1" result="shadowOffsetInner1" />
            <feComposite
              in="shadowOffsetInner1"
              in2="SourceAlpha"
              operator="arithmetic"
              k2="-1"
              k3="1"
              result="shadowInnerInner1"
            />
            <feColorMatrix
              values="0 0 0 0 0   0 0 0 0 0.869055707   0 0 0 0 1  0 0 0 0.5 0"
              type="matrix"
              in="shadowInnerInner1"
            />
          </filter>
          <linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="tags-linearGradient-3">
            <stop stopColor="#00B6FF" offset="0%" />
            <stop stopColor="#2D0094" stopOpacity="0.091796875" offset="100%" />
          </linearGradient>

          <linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="tags-linearGradient-4">
            <stop stopColor="#32ECD9" offset="0%" />
            <stop stopColor="#1B861E" stopOpacity="0.091796875" offset="100%" />
          </linearGradient>
        </defs>

        <g id="osuv-tags" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <use xlinkHref="#tags-path-1" {...this.typelist[this.props.type]} />
          {this.props.type == 2
            ? <use xlinkHref="#tags-path-1" stroke="#108EE9" strokeWidth="1" />
            : null}
          <text
            fontFamily="PingFangSC-Regular, PingFang SC"
            fontSize="36"
            fontWeight="normal"
            fill={this.props.type === 2 ? '#30D3FE' : '#fff'}
          >
            <tspan x="22" y="38">{this.props.percent || '00'}<tspan fontSize="20">%</tspan></tspan>
          </text>
          <text
            fontFamily="PingFangSC-Regular, PingFang SC"
            fontSize="24"
            fontWeight="normal"
            fill={this.props.type === 2 ? '#30D3FE' : '#fff'}
          >
            <tspan x="99" y="37">{this.props.title || ''}</tspan>
          </text>
        </g>
      </svg>
    );
  }
}
