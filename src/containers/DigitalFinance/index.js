import React, { Component } from 'react';
import Echarts from 'echarts-for-react';
import echarts from 'echarts';
import HeaderTitle from '../Layout/HeaderTitle';
import { WDLogoSvg, BgGradualHeight } from '../../components';
import { getBaseFontSize } from '../../utils';
import ReactEcharts from 'echarts-for-react';
import './digitalFinance.less';

// {"tag":["亲子","户外运动品牌店","数码"，"电影","海鲜"，"日料", "西餐", "停车","运动健身", "国际酒店"],'caifu':[4.73,4.16，6.97，0.78，2.13，6.52，11.52，2.29，2.26，0.02],'xiaodai':[16.38,17.29，29.47，2.76，7.26，21.18，49.51，8.03，7.26，0.07]},
const data = [
  { name: '亲子', img: '/img/doll.png' },
  { name: '户外运动品牌店', img: '/img/outdoor.png' },
  { name: '数码', img: '/img/camera.png' },
  { name: '电影', img: '/img/movie.png' },
  { name: '海鲜', img: '/img/seafood.png' },
  { name: '日料', img: '/img/food.png' },
  { name: '西餐', img: '/img/westfood.png' },
  { name: '停车', img: '/img/park.png' },
  { name: '运动健身', img: '/img/run.png' },
  { name: '国际酒店', img: '/img/hotel.png' }
];
export default class DigitalFinance extends Component {
  constructor(props) {
    super(props);
    const xData = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29
    ];
    const data1 = [
      [1, 0, 4.73],
      [4, 0, 4.16],
      [7, 0, 6.97],
      [10, 0, 0.78],
      [13, 0, 2.13],
      [16, 0, 6.52],
      [19, 0, 11.52],
      [22, 0, 2.29],
      [25, 0, 2.26],
      [28, 0, 0.02]
    ];
    const data2 = [
      [2, 0, 16.38],
      [5, 0, 17.29],
      [8, 0, 29.47],
      [11, 0, 2.76],
      [14, 0, 7.26],
      [17, 0, 21.18],
      [20, 0, 49.51],
      [23, 0, 8.03],
      [26, 0, 7.26],
      [29, 0, 0.07]
    ];
    this.option = {
      tooltip: {},
      xAxis3D: {
        name: '',
        type: 'category',
        data: xData,
        axisLabel: { show: false },
        splitLine: { show: false },
        axisLine: {
          lineStyle: {
            color: '#0C55B7'
          }
        }
      },
      yAxis3D: {
        name: '',
        type: 'category',
        data: ['0'],
        axisLabel: { show: false },
        splitLine: {
          lineStyle: {
            color: 'rgba(5,60,116,0.89)'
          }
        }
      },
      zAxis3D: {
        name: '',
        type: 'value',
        axisLabel: {
          formatter: '{value}%',
          margin: 12 / 192 * getBaseFontSize()
        },
        axisLine: {
          lineStyle: {
            color: '#0C55B7'
          }
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(5,60,116,0.89)'
          }
        }
      },
      grid3D: {
        // environment: new echarts.graphic.LinearGradient(
        //   0,
        //   0,
        //   1,
        //   1,
        //   [
        //     {
        //       offset: 0,
        //       color: 'rgba(65,177,255,0)'
        //     },
        //     {
        //       offset: 1,
        //       color: 'rgba(23,84,244,0.21)'
        //     }
        //   ],
        //   false
        // ),
        boxHeight: 200 / 192 * getBaseFontSize(),
        boxWidth: 500 / 192 * getBaseFontSize(),
        boxDepth: 20 / 192 * getBaseFontSize(),
        viewControl: {
          rotateSensitivity: 0,
          beta: 0,
          alpha: 0
        },
        light: {
          main: {
            intensity: 1.2,
            shadow: true,
            alpha: 0,
            beta: 0
          },
          ambient: {
            intensity: 0.3
          }
        }
      },
      series: [
        {
          type: 'bar3D',
          shading: 'lambert',
          data: data1.map((item) => {
            return {
              value: [item[0], item[1], item[2]]
            };
          }),
          itemStyle: {
            color: '#ED504E'
          }
        },
        {
          type: 'bar3D',
          shading: 'lambert',
          data: data2.map((item) => {
            return {
              value: [item[0], item[1], item[2]]
            };
          }),
          itemStyle: {
            color: '#1D7CDE'
          }
        }
      ]
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div className="digital-finance">
        <HeaderTitle title="理财 vs 贷款－客群消费生活对比" className="sum-title" />
        <WDLogoSvg className="header-logo" />
        {/* background */}
        <BgGradualHeight className="bg-svg" show />
        {/* circle */}
        <svg
          className="circle-top"
          viewBox="0 0 30 30"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <ellipse id="path-1" cx="20" cy="40" rx="5" ry="5" />
            <filter
              x="-150.0%"
              y="-150.0%"
              width="400.0%"
              height="400.0%"
              filterUnits="objectBoundingBox"
              id="filter-2"
            >
              <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1" />
              <feGaussianBlur stdDeviation="5" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
              <feColorMatrix
                values="0 0 0 0 0.15692077   0 0 0 0 0.886739866   0 0 0 0 1  0 0 0 0.786769701 0"
                type="matrix"
                in="shadowBlurOuter1"
              />
            </filter>
          </defs>
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g transform="translate(-152.000000, -265.000000)">
              <g transform="translate(147.000000, 240.000000)">
                <g id="Oval-3-Copy">
                  <use fill="black" fillOpacity="1" filter="url(#filter-2)" xlinkHref="#path-1" />
                  <use fill="#2389F2" fillRule="evenodd" xlinkHref="#path-1" />
                </g>
              </g>
            </g>
          </g>
        </svg>
        <svg
          className="circle-bottom-inner"
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
              <feGaussianBlur stdDeviation="5" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
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
                  <use fill="#2389F2" fillRule="evenodd" xlinkHref="#circle2-1" />
                </g>
              </g>
            </g>
          </g>
        </svg>
        <svg
          className="circle-bottom-out"
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
            <g transform="translate(-146.000000, -834.000000)" stroke="#2C6CFF" fill="#2F45FF">
              <g transform="translate(147.000000, 240.000000)">
                <circle id="Oval-44" cx="20" cy="615" r="20" />
              </g>
            </g>
          </g>
        </svg>

        {/* describe tag*/}
        <svg
          className="desc-tag"
          // width="152px"
          // height="129px"
          viewBox="0 0 152 129"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <defs />
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g transform="translate(-1546.000000, -243.000000)">
              <g transform="translate(1547.000000, 244.000000)">
                <g>
                  <polygon
                    id="Path-864"
                    stroke="#2593E1"
                    strokeWidth="2"
                    fill="#112C52"
                    points="19.6350912 4.17013932 0.446552179 23.3586783 0.446552179 67.9156793 4.95903429 72.4281614 4.95903429 89.4414469 0.569316407 93.8311647 0.569316407 126.330959 131.649705 126.330959 149.263105 108.717558 149.263105 72.7734068 143.6081 67.1184011 143.6081 36.0917267 149.171778 30.5280487 149.171778 4.22986773"
                  />
                  <circle className="desc-tag-circle" fill="#2593E1" cx="19.5" cy="4.5" r="2.5" />
                  <circle className="desc-tag-circle" stroke="#2593E1" cx="19.5" cy="4.5" r="4.5" />
                  <circle
                    // className="desc-tag-circle"
                    fill="#2593E1"
                    cx="132.5"
                    cy="125.5"
                    r="2.5"
                  />
                  <polyline
                    id="Path-870"
                    stroke="#137BF4"
                    points="5.51607327 63.2611917 5.51607327 27.0120498 18.2188075 14.3093156"
                  />
                  <polyline
                    id="Path-871"
                    stroke="#137BF4"
                    points="144.048799 76.2637947 144.048799 105.619069 131.492299 118.175568"
                  />
                  <polyline
                    className="desc-tag-top"
                    stroke="#137BF4"
                    strokeDasharray="5,3"
                    points="11.3765294 51.1327502 11.3765294 91.7730403 7.07411894 96.0754508 7.07411894 120.089813 72.0173095 120.089813"
                  />
                  <circle fill="#147BF4" cx="69" cy="120" r="2" />
                  <circle fill="#147BF4" cx="142" cy="10" r="2" />
                  <polyline
                    className="desc-tag-bottom"
                    stroke="#137BF4"
                    strokeDasharray="5,3"
                    points="136.898129 83.8824001 136.898129 35.9662233 142.268015 30.5963377 142.268015 10.2618689 44.9632007 10.2618689"
                  />
                  <rect x="30" y="32" fill="#ED504E" width="25" height="25" />
                  <text fill="#fff" x="65" y="50" fontSize="20">
                    理财类
                  </text>
                  <rect x="30" y="70" fill="#1D7CDE" width="25" height="25" />
                  <text fill="#fff" x="65" y="90" fontSize="20">
                    借贷类
                  </text>
                </g>
              </g>
            </g>
          </g>
        </svg>
        {data.map((item, i) =>
          <svg
            // width="129px"
            // height="60px"
            key={i}
            className={`title-bg title-bg-${i}`}
            viewBox="0 0 160 60"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <defs />
            <g stroke="none" strokeWidth="1" fill="#02041d" fillRule="evenodd">
              <g transform="translate(-1244.000000, -647.000000)">
                <g transform="translate(1244.000000, 647.000000)">
                  <path
                    d="M0.5,14.2274618 L9.36559076,6.5 L159.5,6.5 L159.5,52.5 L69.6215963,52.5 L69.379514,52.5 L69.2293737,52.6901542 L64.0851972,59.2053019 L58.6727697,52.6807678 L58.5228138,52.5 L58.287944,52.5 L0.5,52.5 L0.5,14.2274618 Z"
                    id="Rectangle-55"
                    stroke="#258DFF"
                  />
                  <polyline
                    id="Path-876"
                    stroke="#258DFF"
                    points="61.155647 49.786014 64.0652463 53.2915287 66.9925242 49.5304112"
                  />
                  <polyline
                    id="Path-877"
                    stroke="#258DFF"
                    points="2.28990232 5.43537872 8.20426794 0.655167616 43.2027768 0.655167616"
                  />
                  <circle fill="#258DFF" cx="2" cy="6" r="2" />
                </g>
              </g>
            </g>
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#fff"
              className="title"
              fontSize="20"
            >
              {item.name}
            </text>
          </svg>
        )}

        <p className="echart-title">近一年进店人数占广场中出现的人数比例</p>
        <ReactEcharts
          ref="echarts_Instance"
          {...this.props}
          option={this.option}
          notMerge={false}
          lazyUpdate={false}
          className="bar3D"
        />
        <div className="icon-list">
          {data.map((item, i) => <img key={i} className="icon" src={item.img} />)}
        </div>
      </div>
    );
  }
}
