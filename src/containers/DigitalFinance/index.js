import React, { Component } from 'react';
import Echarts from 'echarts-for-react';
import echarts from 'echarts';
import HeaderTitle from '../Layout/HeaderTitle';
import { WDLogoSvg } from '../../components';
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
      // visualMap: {
      //     max: 20,
      //     inRange: {
      //         color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
      //     }
      // },
      xAxis3D: {
        name: '',
        type: 'category',
        data: xData,
        axisLabel: { show: false },
        splitLine: { show: false }
      },
      yAxis3D: {
        name: '',
        type: 'category',
        data: ['0'],
        axisLabel: { show: false }
      },
      zAxis3D: {
        name: '',
        type: 'value'
      },
      grid3D: {
        // axisLine:{interval:1},
        boxWidth: 500 / 192 * getBaseFontSize(),
        boxDepth: 20 / 192 * getBaseFontSize(),
        viewControl: {
          rotateSensitivity: 0,
          beta: 0,
          alpha: 10
        },
        light: {
          main: {
            intensity: 1.2,
            shadow: true
          },
          ambient: {
            intensity: 0.3
          }
        }
      },
      series: [
        {
          type: 'bar3D',
          data: data1.map((item) => {
            return {
              value: [item[0], item[1], item[2]]
            };
          }),
          itemStyle: {
            // color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
            //   { offset: 0, color: '#3CF1FF' },
            //   { offset: 1, color: '#1D7CDE' }
            // ])
            color: 'red'
          }
        },
        {
          type: 'bar3D',
          data: data2.map((item) => {
            return {
              value: [item[0], item[1], item[2]]
            };
          }),
          itemStyle: {
            color: 'green'
            // color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
            //   { offset: 0, color: '#FF9999' },
            //   { offset: 1, color: '#ED504E' }
            // ])
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
        <svg
          // width="1826px"
          // height="896px"
          className="bg-svg"
          viewBox="0 0 1826 896"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="数字金融" transform="translate(-41.000000, -140.000000)">
              <g id="边框" transform="translate(42.000000, 141.000000)">
                <polygon
                  id="Path-912"
                  stroke="#0B58C0"
                  strokeWidth="2"
                  points="71.9239649 0.458802153 33.2667822 38.1159849 33.2667822 192.483626 2.96734231 222.783066 2.96734231 667.445224 33.2667822 700.014829 33.2667822 853.247158 73.1018286 892.511043 1745.93141 892.511043 1786.24962 852.192834 1786.24962 703.276691 1823.1436 666.382714 1823.1436 229.246065 1788.16854 192.271009 1788.16854 39.1159849 1749.93141 0.458802153"
                />
                <polygon
                  id="Path-913"
                  stroke="#1872E9"
                  fillOpacity="0.479676178"
                  fill="#2D8CFF"
                  points="1822.42462 681.164401 1797.90131 705.687714 1797.90131 857.094095 1761.23391 893.761486 1794.11592 893.761486 1822.42462 862.951518"
                />
                <polygon
                  id="Path-913-Copy"
                  stroke="#1872E9"
                  fillOpacity="0.479676178"
                  fill="#2D8CFF"
                  transform="translate(30.595352, 787.298542) scale(-1, 1) translate(-30.595352, -787.298542) "
                  points="61.1907043 681 36.6673913 705.523313 36.6673913 856.929693 0 893.597085 32.8820089 893.597085 61.1907043 862.787117"
                />
                <polygon
                  id="Path-913-Copy-3"
                  stroke="#1872E9"
                  fillOpacity="0.479676178"
                  fill="#2D8CFF"
                  transform="translate(1791.595352, 106.298542) scale(1, -1) translate(-1791.595352, -106.298542) "
                  points="1822.1907 0 1797.66739 24.523313 1797.66739 175.929693 1761 212.597085 1793.88201 212.597085 1822.1907 181.787117"
                />
                <polygon
                  id="Path-913-Copy-2"
                  stroke="#1872E9"
                  fillOpacity="0.479676178"
                  fill="#2D8CFF"
                  transform="translate(30.595352, 106.298542) scale(-1, -1) translate(-30.595352, -106.298542) "
                  points="61.1907043 0 36.6673913 24.523313 36.6673913 175.929693 0 212.597085 32.8820089 212.597085 61.1907043 181.787117"
                />
                <path
                  d="M20,636.621808 L20,256"
                  id="Path-914"
                  strokeOpacity="0.803442029"
                  stroke="#0B59C0"
                  strokeWidth="4"
                />
                <path
                  d="M1805,636.621808 L1805,256"
                  id="Path-914-Copy"
                  strokeOpacity="0.803442029"
                  stroke="#0B59C0"
                  strokeWidth="4"
                />
                <rect
                  id="Rectangle-58"
                  fillOpacity="0.731657609"
                  fill="#3B9EEB"
                  x="13"
                  y="322"
                  width="14"
                  height="228"
                />
                <rect
                  id="Rectangle-58-Copy"
                  fillOpacity="0.731657609"
                  fill="#3B9EEB"
                  x="1798"
                  y="322"
                  width="14"
                  height="228"
                />
                <polygon
                  id="Path-915"
                  stroke="#1981EC"
                  fillOpacity="0.242102582"
                  fill="#31BDEB"
                  points="78.6868851 14 60 31.7205052 70.2619891 31.7205052 89.7908502 14"
                />
                <polygon
                  id="Path-915-Copy-3"
                  stroke="#1981EC"
                  fillOpacity="0.242102582"
                  fill="#31BDEB"
                  points="98.6868851 14 80 31.7205052 90.2619891 31.7205052 109.79085 14"
                />
                <polygon
                  id="Path-915-Copy-4"
                  stroke="#1981EC"
                  fillOpacity="0.242102582"
                  fill="#31BDEB"
                  points="118.686885 14 100 31.7205052 110.261989 31.7205052 129.79085 14"
                />
                <polygon
                  id="Path-915-Copy-2"
                  stroke="#1981EC"
                  fillOpacity="0.242102582"
                  fill="#31BDEB"
                  points="138.686885 14 120 31.7205052 340.261989 31.7205052 359.79085 14"
                />
                <polygon
                  id="Path-915-Copy-8"
                  stroke="#1981EC"
                  fillOpacity="0.242102582"
                  fill="#31BDEB"
                  points="1707.68689 861 1689 878.720505 1699.26199 878.720505 1718.79085 861"
                />
                <polygon
                  id="Path-915-Copy-7"
                  stroke="#1981EC"
                  fillOpacity="0.242102582"
                  fill="#31BDEB"
                  points="1727.68689 861 1709 878.720505 1719.26199 878.720505 1738.79085 861"
                />
                <polygon
                  id="Path-915-Copy-6"
                  stroke="#1981EC"
                  fillOpacity="0.242102582"
                  fill="#31BDEB"
                  points="1747.68689 861 1729 878.720505 1739.26199 878.720505 1758.79085 861"
                />
                <polygon
                  id="Path-915-Copy-5"
                  stroke="#1981EC"
                  fillOpacity="0.242102582"
                  fill="#31BDEB"
                  points="1477.68689 861 1459 878.720505 1679.26199 878.720505 1698.79085 861"
                />
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
                </g>
              </g>
            </g>
          </g>
        </svg>

        <svg
          // width="129px"
          // height="60px"
          className="title-bg"
          viewBox="0 0 129 60"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
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
