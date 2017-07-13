import React, { Component } from 'react';

export default class LifeMobileLegend extends Component {
  render() {
    return (
      <svg
        // width="226px"
        // height="243px"
        viewBox="0 0 226 243"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        {...this.props}
      >
        <title>雷达右下角</title>
        <defs>
          <radialGradient
            cx="50%"
            cy="50%"
            fx="50%"
            fy="50%"
            r="70.4835957%"
            gradientTransform="translate(0.500000,0.500000),scale(1.000000,0.887315),rotate(90.000000),translate(-0.500000,-0.500000)"
            id="radialGradient-1"
          >
            <stop stopColor="#020A2E" stopOpacity="0" offset="0%" />
            <stop stopColor="#020A2C" stopOpacity="0" offset="70.1643076%" />
            <stop stopColor="#00BAFF" stopOpacity="0.490036232" offset="100%" />
          </radialGradient>
          <polygon
            id="legend-path-2"
            points="0.844952161 35.4639351 29.5228631 6.79411485 120.565092 6.79411485 120.565092 44.469449 128.289405 52.1915829 128.289405 82.9805366 120.396243 90.8714715 120.396243 136.453938 106.42285 150.423389 1.7628114 150.423389 1.7628114 101.93132 9.0443512 94.6518344 9.0443512 77.6432838 0.8449419 69.4105545"
          />
          <filter
            x="-62.4%"
            y="-54.0%"
            width="224.8%"
            height="210.7%"
            filterUnits="objectBoundingBox"
            id="filter-3"
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
              result="shadowMatrixOuter1"
            />
            <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter2" />
            <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter2" result="shadowBlurOuter2" />
            <feComposite
              in="shadowBlurOuter2"
              in2="SourceAlpha"
              operator="out"
              result="shadowBlurOuter2"
            />
            <feColorMatrix
              values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"
              type="matrix"
              in="shadowBlurOuter2"
              result="shadowMatrixOuter2"
            />
            <feMerge>
              <feMergeNode in="shadowMatrixOuter1" />
              <feMergeNode in="shadowMatrixOuter2" />
            </feMerge>
          </filter>
          <polyline
            id="legend-path-4"
            points="86 7.20807721 93.2080772 0 126.444463 0 126.444463 48.2247817"
          />
          <mask
            id="mask-5"
            maskContentUnits="userSpaceOnUse"
            maskUnits="objectBoundingBox"
            x="0"
            y="0"
            width="40.4444631"
            height="48.2247817"
            fill="white"
          >
            <use xlinkHref="#legend-path-4" />
          </mask>
          <circle id="legend-path-6" cx="31" cy="40" r="6" />
          <filter
            x="-83.3%"
            y="-83.3%"
            width="266.7%"
            height="266.7%"
            filterUnits="objectBoundingBox"
            id="filter-7"
          >
            <feGaussianBlur stdDeviation="9" in="SourceAlpha" result="shadowBlurInner1" />
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
              values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.521456069 0"
              type="matrix"
              in="shadowInnerInner1"
            />
          </filter>
          <circle id="legend-path-8" cx="31" cy="81" r="6" />
          <filter
            x="-83.3%"
            y="-83.3%"
            width="266.7%"
            height="266.7%"
            filterUnits="objectBoundingBox"
            id="filter-9"
          >
            <feGaussianBlur stdDeviation="9" in="SourceAlpha" result="shadowBlurInner1" />
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
              values="0 0 0 0 0   0 0 0 0 0.270588235   0 0 0 0 1  0 0 0 0.521456069 0"
              type="matrix"
              in="shadowInnerInner1"
            />
          </filter>
          <circle id="legend-path-10" cx="31" cy="122" r="6" />
          <filter
            x="-104.2%"
            y="-87.5%"
            width="308.3%"
            height="308.3%"
            filterUnits="objectBoundingBox"
            id="filter-11"
          >
            <feMorphology
              radius="1"
              operator="dilate"
              in="SourceAlpha"
              result="shadowSpreadOuter1"
            />
            <feOffset dx="0" dy="2" in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
            <feGaussianBlur stdDeviation="3.5" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
            <feComposite
              in="shadowBlurOuter1"
              in2="SourceAlpha"
              operator="out"
              result="shadowBlurOuter1"
            />
            <feColorMatrix
              values="0 0 0 0 0.328815901   0 0 0 0 0.176769061   0 0 0 0 0.0132530557  0 0 0 0.701115263 0"
              type="matrix"
              in="shadowBlurOuter1"
            />
          </filter>
          <filter
            x="-141.7%"
            y="-125.0%"
            width="383.3%"
            height="383.3%"
            filterUnits="objectBoundingBox"
            id="filter-12"
          >
            <feGaussianBlur stdDeviation="9" in="SourceAlpha" result="shadowBlurInner1" />
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
              values="0 0 0 0 0.863919005   0 0 0 0 0.400191899   0 0 0 0 0.0928378871  0 0 0 0.449473505 0"
              type="matrix"
              in="shadowInnerInner1"
            />
          </filter>
          <polyline
            id="legend-path-13"
            points="7.45785801 105.012689 7.45785801 145.068694 50.9050628 145.068694"
          />
          <mask
            id="mask-14"
            maskContentUnits="userSpaceOnUse"
            maskUnits="objectBoundingBox"
            x="0"
            y="0"
            width="43.4472048"
            height="40.0560053"
            fill="white"
          >
            <use xlinkHref="#legend-path-13" />
          </mask>
        </defs>

        <g
          id="radar-legend"
          transform="translate(49.000000, 43.000000)"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g id="border" opacity="0.31884058">
            <use fill="black" fillOpacity="1" filter="url(#filter-3)" xlinkHref="#legend-path-2" />
            <use fill="url(#radialGradient-1)" fillRule="evenodd" xlinkHref="#legend-path-2" />
            <use
              fillOpacity="0.356827446"
              fill="#00AEFF"
              fillRule="evenodd"
              xlinkHref="#legend-path-2"
            />
            <path
              stroke="#40C1FF"
              strokeWidth="1"
              d="M1.3449521,35.6710833 L29.7299286,7.29411485 L120.065092,7.29411485 L120.065092,44.469449 L120.065092,44.6765972 L120.211588,44.8230523 L127.789405,52.398731 L127.789405,82.7733885 L120.04274,90.5178682 L119.896243,90.6643234 L119.896243,90.8714715 L119.896243,136.24679 L106.215784,149.923389 L2.2628114,149.923389 L2.2628114,102.138468 L9.39785471,95.0054377 L9.5443512,94.8589825 L9.5443512,94.6518344 L9.5443512,77.6432838 L9.5443512,77.4367706 L9.39862078,77.290448 L1.34494196,69.2040415 L1.3449521,35.6710833 Z"
            />
            <use stroke="#00ADFF" strokeWidth="1" xlinkHref="#legend-path-2" />
          </g>
          <use
            id="corner-right"
            stroke="#1D4B7B"
            mask="url(#mask-5)"
            strokeWidth="2"
            strokeDasharray="4"
            xlinkHref="#legend-path-4"
          />
          <g id="apple-oval" opacity="0.900758605">
            <use
              fillOpacity="0.049999997"
              fill="#FFFFFF"
              fillRule="evenodd"
              xlinkHref="#legend-path-6"
            />
            <use fill="black" fillOpacity="1" filter="url(#filter-7)" xlinkHref="#legend-path-6" />
            <use stroke="#FFFFFF" strokeWidth="2" xlinkHref="#legend-path-6" />
          </g>
          <g id="samsung-oval" opacity="0.900758605">
            <use
              fillOpacity="0.049999997"
              fill="#0045FF"
              fillRule="evenodd"
              xlinkHref="#legend-path-8"
            />
            <use fill="black" fillOpacity="1" filter="url(#filter-9)" xlinkHref="#legend-path-8" />
            <use stroke="#2871FF" strokeWidth="2" xlinkHref="#legend-path-8" />
          </g>
          <g id="xiaomi-oval" opacity="0.900758605">
            <use
              fill="black"
              fillOpacity="1"
              filter="url(#filter-11)"
              xlinkHref="#legend-path-10"
            />
            <use
              fillOpacity="0.200000003"
              fill="#E86E1A"
              fillRule="evenodd"
              xlinkHref="#legend-path-10"
            />
            <use
              fill="black"
              fillOpacity="1"
              filter="url(#filter-12)"
              xlinkHref="#legend-path-10"
            />
            <use stroke="#FFB37C" strokeWidth="2" xlinkHref="#legend-path-10" />
          </g>
          <text
            id="apple"
            fontFamily="PingFangSC-Regular, PingFang SC"
            fontSize="24"
            fontWeight="normal"
            fill="#FFFFFF"
          >
            <tspan x="58" y="48">苹果</tspan>
          </text>
          <text
            id="samsung"
            fontFamily="PingFangSC-Regular, PingFang SC"
            fontSize="24"
            fontWeight="normal"
            fill="#FFFFFF"
          >
            <tspan x="58" y="89">三星</tspan>
          </text>
          <text
            id="xiaomi"
            fontFamily="PingFangSC-Regular, PingFang SC"
            fontSize="24"
            fontWeight="normal"
            fill="#FFFFFF"
          >
            <tspan x="58" y="130">小米</tspan>
          </text>
          <use
            id="corner-left"
            stroke="#1D4B7B"
            mask="url(#mask-14)"
            strokeWidth="2"
            strokeDasharray="4"
            xlinkHref="#legend-path-13"
          />
        </g>

      </svg>
    );
  }
}
