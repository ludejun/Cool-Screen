import React, { Component } from 'react';
import Echarts from 'echarts-for-react';
import echarts from 'echarts';
import HeaderTitle from '../Layout/HeaderTitle';
import { WDLogoSvg, BgGradualHeight } from '../../components';
import { getBaseFontSize } from '../../utils';
import ReactEcharts from 'echarts-for-react';
import './digitalFinance.less';

const data = [
  { name: ' 亲子', img: '/img/doll.png' },
  { name: '户外运动品牌店', img: '/img/outdoor.png' },
  { name: '数码品牌店', img: '/img/camera.png' },
  { name: '逛电影院', img: '/img/movie.png' },
  { name: '海鲜店', img: '/img/seafood.png' },
  { name: '日料店', img: '/img/food.png' },
  { name: '西餐店', img: '/img/westfood.png' },
  { name: '进出停车场', img: '/img/park.png' },
  { name: '进出国际酒店', img: '/img/hotel.png' },
  { name: '运动健身', img: '/img/run.png' }
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
      [1, 0, 5],
      [4, 0, 1],
      [7, 0, 3],
      [10, 0, 4],
      [13, 0, 5],
      [16, 0, 6],
      [19, 0, 7],
      [22, 0, 8],
      [25, 0, 7],
      [28, 0, 8]
    ];
    const data2 = [
      [2, 0, 1],
      [5, 0, 3],
      [8, 0, 4],
      [11, 0, 5],
      [14, 0, 6],
      [17, 0, 20],
      [20, 0, 9],
      [23, 0, 8],
      [26, 0, 9],
      [29, 0, 8]
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
        //       color: 'rgba(65,177,255,1)'
        //     },
        //     {
        //       offset: 1,
        //       color: 'rgba(23,84,243,0.91)'
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
            alpha: 50
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
        <HeaderTitle title="数字金融-财富 / 小贷客群的万达生态描绘" className="sum-title" />
        <WDLogoSvg className="header-logo" />
        {/* background */}
        <div className="bg-svg">
          <BgGradualHeight />
        </div>
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
          <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="数字金融" transform="translate(-1546.000000, -243.000000)">
              <g id="Group-4" transform="translate(1547.000000, 244.000000)">
                <g id="Group-2">
                  <polygon
                    id="Path-864"
                    stroke="#2593E1"
                    strokeWidth="2"
                    fill="#112C52"
                    points="19.6350912 4.17013932 0.446552179 23.3586783 0.446552179 67.9156793 4.95903429 72.4281614 4.95903429 89.4414469 0.569316407 93.8311647 0.569316407 126.330959 131.649705 126.330959 149.263105 108.717558 149.263105 72.7734068 143.6081 67.1184011 143.6081 36.0917267 149.171778 30.5280487 149.171778 4.22986773"
                  />
                  <circle id="Oval-4" fill="#2593E1" cx="19.5" cy="4.5" r="2.5" />
                  <circle id="Oval-4-Copy-2" stroke="#2593E1" cx="19.5" cy="4.5" r="4.5" />
                  <circle id="Oval-4-Copy" fill="#2593E1" cx="132.5" cy="125.5" r="2.5" />
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
                    id="Path-872"
                    stroke="#137BF4"
                    strokeDasharray="5,3"
                    points="11.3765294 51.1327502 11.3765294 91.7730403 7.07411894 96.0754508 7.07411894 120.089813 72.0173095 120.089813"
                  />
                  <circle id="Oval-5" fill="#147BF4" cx="69" cy="120" r="2" />
                  <circle id="Oval-5-Copy" fill="#147BF4" cx="142" cy="10" r="2" />
                  <polyline
                    id="Path-873"
                    stroke="#137BF4"
                    strokeDasharray="5,3"
                    points="136.898129 83.8824001 136.898129 35.9662233 142.268015 30.5963377 142.268015 10.2618689 44.9632007 10.2618689"
                  />
                  <rect className="desc-rect" x="30" y="40" fill="#ED504E" />
                  <text fill="#fff" x="70" y="55" className="desc-title">
                    财富
                  </text>
                  <rect className="desc-rect" x="30" y="80" fill="#1D7CDE" />
                  <text fill="#fff" x="70" y="95" className="desc-title">
                    小贷
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
            viewBox="0 0 129 60"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#fff"
              className="title"
            >
              {item.name}
            </text>
            <defs />
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g id="数字金融" transform="translate(-1244.000000, -647.000000)">
                <g id="文字框Copy-Copy-6" transform="translate(1244.000000, 647.000000)">
                  <path
                    d="M0.5,14.2274618 L9.36559076,6.5 L128.5,6.5 L128.5,52.5 L69.6217963,52.5 L69.379514,52.5 L69.2293737,52.6901542 L64.0851972,59.2053019 L58.6727697,52.6807678 L58.5228138,52.5 L58.287944,52.5 L0.5,52.5 L0.5,14.2274618 Z"
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
                  <circle id="Oval-46" fill="#258DFF" cx="2" cy="6" r="2" />
                </g>
              </g>
            </g>
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
