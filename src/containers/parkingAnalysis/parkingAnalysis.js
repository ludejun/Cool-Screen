import React, { Component } from "react";
import Echarts from "echarts-for-react";
import "./parkingAnalysis.less";
import HeaderTitle from "../Layout/HeaderTitle";
import { AngelAside } from "../../components";

const cityNumber = {
  name: "上海",
  id: 21,
  price: 11.388
};

const parkingInfo = [
  {
    name: "a"
  },
  {
    name: "b"
  },
  {
    name: "c"
  }
];
const geoCoordMap = {
  北京: [116.4136103013, 39.9110666857],
  上海: [121.4803295328, 31.2363429624],
  广州: [113.270813674, 23.1351666766]
};

const convertData = function(data) {
  const res = [];
  for (let i = 0; i < data.length; i++) {
    let geoCoord = geoCoordMap[data[i].name];
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value)
      });
    }
  }
  return res;
};

const arrayC = [
  {
    native: {
      name: "北京",
      location: [116.4136103013, 39.9110666857],
      percent: 0.85
    },
    nonlocal: {
      distribution: [
        {
          province: "河北",
          count: 202191,
          percentage: 0.481532112
        },
        {
          province: "天津",
          count: 50705,
          percentage: 0.12075753
        },
        {
          province: "山东",
          count: 25246,
          percentage: 0.060125128
        },
        {
          province: "辽宁",
          count: 16085,
          percentage: 0.038307561
        },
        {
          province: "湖南",
          count: 15077,
          percentage: 0.035906938
        },
        {
          province: "河南",
          count: 13881,
          percentage: 0.033058579
        },
        {
          province: "内蒙古",
          count: 11522,
          percentage: 0.027440455
        },
        {
          province: "山西",
          count: 11129,
          percentage: 0.026504498
        },
        {
          province: "黑龙江",
          count: 11066,
          percentage: 0.026354459
        },
        {
          province: "江苏",
          count: 8820,
          percentage: 0.021005451
        },
        {
          province: "广东",
          count: 7893,
          percentage: 0.018797736
        },
        {
          province: "海南",
          count: 6466,
          percentage: 0.015399235
        },
        {
          province: "吉林",
          count: 6282,
          percentage: 0.014961026
        },
        {
          province: "四川",
          count: 5026,
          percentage: 0.011969773
        },
        {
          province: "安徽",
          count: 4978,
          percentage: 0.011855458
        },
        {
          province: "湖北",
          count: 4590,
          percentage: 0.010931408
        },
        {
          province: "浙江",
          count: 3661,
          percentage: 0.008718929
        },
        {
          province: "江西",
          count: 3140,
          percentage: 0.007478131
        },
        {
          province: "陕西",
          count: 2863,
          percentage: 0.006818436
        },
        {
          province: "福建",
          count: 1944,
          percentage: 0.004629773
        },
        {
          province: "上海",
          count: 1687,
          percentage: 0.004017709
        },
        {
          province: "广西",
          count: 1601,
          percentage: 0.003812894
        },
        {
          province: "重庆",
          count: 1267,
          percentage: 0.00301745
        },
        {
          province: "甘肃",
          count: 1090,
          percentage: 0.002595912
        },
        {
          province: "宁夏",
          count: 503,
          percentage: 0.00119793
        },
        {
          province: "云南",
          count: 409,
          percentage: 0.000974062
        },
        {
          province: "贵州",
          count: 288,
          percentage: 0.000685892
        },
        {
          province: "新疆",
          count: 267,
          percentage: 0.000635879
        },
        {
          province: "青海",
          count: 211,
          percentage: 0.000502511
        },
        {
          province: "西藏",
          count: 3,
          percentage: 0.00000714471
        }
      ],
      percent: 0.15
    },
    averageCost: 8.5
  },
  {
    native: {
      name: "上海",
      location: [121.4803295328, 31.2363429624],
      percent: 0.6
    },
    nonlocal: {
      distribution: [
        {
          province: "江苏",
          count: 839426,
          percentage: 0.340271098
        },
        {
          province: "浙江",
          count: 364743,
          percentage: 0.14785282
        },
        {
          province: "安徽",
          count: 270048,
          percentage: 0.109467099
        },
        {
          province: "江西",
          count: 117904,
          percentage: 0.047793758
        },
        {
          province: "福建",
          count: 115549,
          percentage: 0.046839132
        },
        {
          province: "山东",
          count: 109992,
          percentage: 0.044586537
        },
        {
          province: "广东",
          count: 95986,
          percentage: 0.038909042
        },
        {
          province: "湖南",
          count: 95324,
          percentage: 0.038640693
        },
        {
          province: "天津",
          count: 87673,
          percentage: 0.035539271
        },
        {
          province: "河南",
          count: 82691,
          percentage: 0.033519759
        },
        {
          province: "湖北",
          count: 44125,
          percentage: 0.017886582
        },
        {
          province: "黑龙江",
          count: 40508,
          percentage: 0.016420389
        },
        {
          province: "四川",
          count: 26688,
          percentage: 0.010818291
        },
        {
          province: "陕西",
          count: 23509,
          percentage: 0.009529647
        },
        {
          province: "北京市",
          count: 20511,
          percentage: 0.008314373
        },
        {
          province: "河北",
          count: 20057,
          percentage: 0.008130338
        },
        {
          province: "山西",
          count: 17158,
          percentage: 0.006955195
        },
        {
          province: "广西",
          count: 16673,
          percentage: 0.006758595
        },
        {
          province: "辽宁",
          count: 14672,
          percentage: 0.005947466
        },
        {
          province: "内蒙古",
          count: 11983,
          percentage: 0.004857448
        },
        {
          province: "甘肃",
          count: 11455,
          percentage: 0.004643418
        },
        {
          province: "贵州",
          count: 9834,
          percentage: 0.003986326
        },
        {
          province: "吉林",
          count: 8885,
          percentage: 0.003601638
        },
        {
          province: "重庆",
          count: 6973,
          percentage: 0.002826587
        },
        {
          province: "宁夏",
          count: 6763,
          percentage: 0.002741461
        },
        {
          province: "云南",
          count: 3761,
          percentage: 0.001524565
        },
        {
          province: "海南",
          count: 1552,
          percentage: 0.000629121
        },
        {
          province: "青海",
          count: 1477,
          percentage: 0.000598719
        },
        {
          province: "新疆",
          count: 906,
          percentage: 0.000367258
        },
        {
          province: "西藏",
          count: 107,
          percentage: 0.0000433737
        }
      ],
      percent: 0.4
    },
    averageCost: 11.38
  },
  {
    native: {
      name: "广州",
      location: [113.270813674, 23.1351666766],
      percent: 0.92
    },
    nonlocal: {
      distribution: [
        {
          province: "黑龙江",
          count: 20529,
          percentage: 0.140871069
        },
        {
          province: "湖南",
          count: 17177,
          percentage: 0.11786947
        },
        {
          province: "浙江",
          count: 14452,
          percentage: 0.099170378
        },
        {
          province: "福建",
          count: 11230,
          percentage: 0.077060846
        },
        {
          province: "四川",
          count: 8923,
          percentage: 0.061230091
        },
        {
          province: "山东",
          count: 7612,
          percentage: 0.052233941
        },
        {
          province: "湖北",
          count: 7156,
          percentage: 0.049104845
        },
        {
          province: "江西",
          count: 7041,
          percentage: 0.048315709
        },
        {
          province: "广西",
          count: 6363,
          percentage: 0.043663238
        },
        {
          province: "天津",
          count: 5578,
          percentage: 0.038276527
        },
        {
          province: "河南",
          count: 5146,
          percentage: 0.03531212
        },
        {
          province: "江苏",
          count: 4486,
          percentage: 0.030783166
        },
        {
          province: "北京市",
          count: 3968,
          percentage: 0.027228623
        },
        {
          province: "上海",
          count: 3336,
          percentage: 0.022891806
        },
        {
          province: "重庆",
          count: 3262,
          percentage: 0.022384014
        },
        {
          province: "辽宁",
          count: 2623,
          percentage: 0.017999163
        },
        {
          province: "河北",
          count: 2192,
          percentage: 0.015041618
        },
        {
          province: "安徽",
          count: 2173,
          percentage: 0.014911239
        },
        {
          province: "陕西",
          count: 2168,
          percentage: 0.014876929
        },
        {
          province: "吉林",
          count: 1877,
          percentage: 0.012880072
        },
        {
          province: "海南",
          count: 1867,
          percentage: 0.012811451
        },
        {
          province: "山西",
          count: 1498,
          percentage: 0.010279354
        },
        {
          province: "云南",
          count: 1300,
          percentage: 0.008920668
        },
        {
          province: "贵州",
          count: 1088,
          percentage: 0.007465913
        },
        {
          province: "内蒙古",
          count: 792,
          percentage: 0.005434745
        },
        {
          province: "甘肃",
          count: 718,
          percentage: 0.004926953
        },
        {
          province: "新疆",
          count: 532,
          percentage: 0.003650612
        },
        {
          province: "宁夏",
          count: 310,
          percentage: 0.002127236
        },
        {
          province: "青海",
          count: 262,
          percentage: 0.001797858
        },
        {
          province: "西藏",
          count: 70,
          percentage: 0.000480344
        }
      ],
      percent: 0.18
    },
    averageCost: 8.56
  }
];
export default class ParkingAnalysis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: null,
      height: null
    };
  }
  componentDidMount() {
    const svgDOM = this.refs.svgPath;
    let width = parseInt(window.getComputedStyle(svgDOM).width);
    let height = parseInt(window.getComputedStyle(svgDOM).height);
    this.setState({ width, height });
  }
  render() {
    return (
      <div className="parking-container">
        <HeaderTitle title="车牌分析:  万达广场停车分析" />
        <div className="parking-layout">
          <div className="layout-front" />
          <div ref="svgPath" className="layout-head">
            {this.state.width &&
              <svg
                width="100%"
                height="100%"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <defs>
                  <path
                    d={`M0,0 L${this.state.width},0 ${this.state.width},${this
                      .state.height} 0,${this.state.height} 0,0`}
                    id="circlePath"
                  />
                </defs>
                <circle cx="0" cy="0" r="10" stroke="#fff" fill="white">
                  <animateMotion
                    begin="0s"
                    dur="7s"
                    rotate="auto"
                    repeatCount="indefinite"
                  >
                    <mpath xlinkHref="#circlePath" />
                  </animateMotion>
                </circle>
              </svg>}
          </div>
          {arrayC.map((it, i) => {
            const data = [
              {
                name: it.native.name,
                value: 50
              }
            ];
            const dataArray = it.nonlocal.distribution.map((it, index) => {
              return {
                name: it.province,
                selected: false,
                itemStyle: {
                  normal: {
                    areaColor: `rgba(${Math.round(
                      Math.random() * 8 + 8
                    )},${Math.round(Math.random() * 67 + 30)},${Math.round(
                      Math.random() * 87 + 143
                    )},1)`
                  }
                }
              };
            });
            const option = {
              backgroundColor: "transparent",
              geo: {
                map: "china",
                label: {
                  emphasis: {
                    show: false
                  }
                },
                roam: true,
                itemStyle: {
                  normal: {
                    areaColor: "#323c48",
                    borderColor: "#111"
                  },
                  emphasis: {
                    areaColor: "#2a333d"
                  }
                }
              },
              series: [
                {
                  type: "effectScatter",
                  coordinateSystem: "geo",
                  data: convertData(
                    data
                      .sort(function(a, b) {
                        return b.value - a.value;
                      })
                      .slice(0, 6)
                  ),
                  symbolSize: function(val) {
                    return val[2] / 10;
                  },
                  showEffectOn: "render",
                  rippleEffect: {
                    brushType: "stroke"
                  },
                  hoverAnimation: true,
                  label: {
                    normal: {
                      formatter: "{b}",
                      position: "right",
                      show: true
                    }
                  },
                  itemStyle: {
                    normal: {
                      color: "#f4e925",
                      shadowBlur: 10,
                      shadowColor: "#333"
                    }
                  },
                  zlevel: 1
                },
                {
                  name: "中国",
                  type: "map",
                  mapType: "china",
                  selectedMode: "multiple",
                  label: {
                    normal: {
                      show: false
                    }
                  },
                  itemStyle: {
                    normal: {
                      areaColor: "#14216A"
                    }
                  },
                  data: dataArray
                }
              ]
            };
            return (
              <div key={i} className={`bar-container-${i + 1} bar-container`}>
                <div className="angel-style left-top-angel">
                  <AngelAside />
                </div>
                <div className="angel-style rigth-top-angel">
                  <AngelAside />
                </div>
                <div className="angel-style left-bottom-angel">
                  <AngelAside color="#074ac5" />
                </div>
                <div className="angel-style right-bottom-angel">
                  <AngelAside color="#074ac5" />
                </div>
                <div className="top-bar">
                  <svg
                    width="100%"
                    height="100%"
                    version="1.1"
                    viewBox="0,0,800,200"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <polyline
                      points="0,0 100,100 700,100 800,0"
                      strokeWidth="20"
                      stroke="#16255D"
                      fill="#1C91FF"
                    />
                  </svg>
                </div>
                <div className="left-info">
                  <div className="mask" />{" "}
                  {<Echarts option={option} className="left-map" />}
                  <div className="city-area">{`${it.native
                    .name}市牌照所属区域分布图`}</div>
                </div>
                <div className="right-info">
                  <div className="info-container">
                    <svg
                      className="right-bgsvg"
                      viewBox="0 0 292 401"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <g
                        stroke="#0D62C4"
                        strokeWidth="14"
                        fill="#0A2393"
                        fillRule="evenodd"
                      >
                        <g
                          transform="translate(-1110.000000, -352.000000)"
                          fill=""
                        >
                          <g transform="translate(396.000000, 254.000000)">
                            <g transform="translate(714.000000, 98.000000)">
                              <path
                                d="M6.56158759,0.904201681 L105.452099,0.904201681 L116.268248,9.14621849 L276.965328,9.14621849 L286.751369,19.4487395 L286.751369,185.319328 L291.386861,195.106723 L291.386861,352.735294 L286.751369,366.128571 L286.751369,400.642017 L225.974909,400.642017 L214.12865,394.97563 L94.1208942,394.97563 L86.395073,400.642017 L18.9229015,400.642017 C18.9229015,400.642017 9.10406523,391.640171 6.56158759,389.309244 C4.01910996,386.978317 6.56158759,267.22437 6.56158759,267.22437 L0.895985401,252.285714 L0.895985401,98.7781513 L6.56158759,85.3848739 L6.56158759,0.904201681 Z"
                                id="Rectangle"
                              />
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <div className="right">
                      <ul className="list-ul">
                        <li>
                          <div className="belong-to">
                            <svg
                              width="135px"
                              height="42px"
                              viewBox="0 0 147 42"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                              <g
                                id="Page-1"
                                stroke="none"
                                strokeWidth="1"
                                fill="none"
                                fillRule="evenodd"
                              >
                                <g
                                  id="车牌分析"
                                  transform="translate(-1182.000000, -392.000000)"
                                >
                                  <g
                                    id="上海"
                                    transform="translate(396.000000, 254.000000)"
                                  >
                                    <g
                                      id="Group-5"
                                      transform="translate(787.000000, 138.000000)"
                                    >
                                      <path
                                        d="M12.6955447,0.568781513 L131.685294,0.568781513 L139.035103,20.6588235 L131.685294,40.7488655 L12.6955447,40.7488655 L6.210419,20.6588235 L12.6955447,0.568781513 Z"
                                        id="Rectangle-6"
                                        stroke="#108EE9"
                                        strokWidth="1.03"
                                      />
                                      <polygon
                                        id="Rectangle-6"
                                        fill="#108EE9"
                                        points="14.8848091 2.62941176 129.774421 2.62941176 137.008212 20.6588235 129.774421 38.6882353 14.8848091 38.6882353 8.50205292 20.6588235"
                                      />
                                      <polyline
                                        id="Path-104"
                                        stroke="#108EE9"
                                        strokeWidth="2.06"
                                        points="5.66925182 3.65966387 0.51870438 20.1436975 6.18430657 36.6277311"
                                      />
                                      <polyline
                                        id="Path-104"
                                        stroke="#108EE9"
                                        strokeWidth="2.06"
                                        transform="translate(141.386177, 20.143697) scale(-1, 1) translate(-141.386177, -20.143697) "
                                        points="143.703923 3.65966387 138.553376 20.1436975 144.218978 36.6277311"
                                      />
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </svg>
                            <span className="location-name">
                              {it.native.name}
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="arrow-title">
                            <span className="arrow">
                              <svg
                                width="10px"
                                height="10px"
                                viewBox="0 0 10 10"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                              >
                                <g
                                  id="Page-1"
                                  stroke="none"
                                  strokeWidth="1"
                                  fill="none"
                                  fillRule="evenodd"
                                >
                                  <g
                                    transform="translate(-1142.000000, -469.000000)"
                                    fill="#09CDC6"
                                  >
                                    <g transform="translate(396.000000, 254.000000)">
                                      <g transform="translate(746.000000, 210.000000)">
                                        <polygon
                                          transform="translate(5.000000, 10.000000) rotate(90.000000) translate(-5.000000, -10.000000) "
                                          points="5 5 10 15 5 12.5 0 15"
                                        />
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </span>
                            <span className="under-line">单次平均停车消费</span>
                          </div>
                          <div
                            className="arrow-content"
                            style={{
                              paddingLeft: 40
                            }}
                          >
                            <span>
                              <svg
                                width="23px"
                                height="23px"
                                viewBox="0 0 23 23"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                              >
                                <g
                                  id="Page-1"
                                  stroke="none"
                                  strokeWidth="1"
                                  fill="none"
                                  fillRule="evenodd"
                                >
                                  <g
                                    transform="translate(-1161.000000, -500.000000)"
                                    fillRule="nonzero"
                                    fill="#FFCC11"
                                  >
                                    <g transform="translate(396.000000, 254.000000)">
                                      <g transform="translate(746.000000, 210.000000)">
                                        <g transform="translate(19.000000, 36.000000)">
                                          <path
                                            d="M15.8665893,9.23876813 C12.1013803,9.23876813 9.0518904,12.2369152 9.0518904,15.9339109 C9.0518904,19.6309066 12.1035758,22.6290536 15.8665893,22.6290536 C19.6296027,22.6290536 22.6812881,19.6309066 22.6812881,15.9339109 C22.6812881,12.2369152 19.6296027,9.23876813 15.8665893,9.23876813 Z M18.9797474,18.0282999 C18.8787564,18.6775389 18.5121151,20.0946487 16.5230309,20.2348499 L16.5230309,21.4772475 L15.1179384,21.4772475 L15.1179384,20.2456346 C14.2792738,20.1291598 13.5064729,19.9156227 12.7095219,19.6546329 L13.1310497,18.0347707 C13.7611459,18.276348 14.5910287,18.5351809 15.3221159,18.6171446 C16.3144625,18.7314625 16.9818815,18.530867 17.0455497,17.8233906 C17.186059,16.5853068 12.7687993,16.3674559 12.810513,14.1350226 C12.7490402,12.495748 13.9609325,11.7796438 15.1684339,11.6825815 L15.1684339,10.3927312 L16.571331,10.3927312 L16.571331,11.6243441 C17.3682819,11.6351288 18.0005736,11.8033702 18.6153016,12.0665169 L18.2267057,13.5936306 C17.6097822,13.364995 16.9774906,13.1514579 16.2222533,13.1514579 C15.7326664,13.1514579 14.7051925,13.1536148 14.6700651,13.8157955 C14.6700651,14.9568169 16.6152401,15.0172112 17.2585091,15.2868288 C17.7283369,15.4831103 18.0576555,15.675078 18.3913649,15.9964621 C18.977552,16.5572666 19.0983021,17.2798416 18.9797474,18.0282999 L18.9797474,18.0282999 Z M8.72915821,0.846113361 C4.0923528,0.846113361 0.335925691,2.67735569 0.335925691,4.9356722 C0.335925691,7.19398871 4.0923528,9.02523104 8.72915821,9.02523104 C13.3637682,9.02523104 17.1201953,7.19398871 17.1201953,4.9356722 C17.1201953,2.67735569 13.3637682,0.846113361 8.72915821,0.846113361 Z M12.5624263,6.21473781 C12.4372853,6.61161482 11.9850211,7.47654789 9.53708642,7.5628255 L9.53708642,8.32206849 L7.80926168,8.32206849 L7.80926168,7.56929632 C6.77739684,7.49811729 5.82456846,7.36870087 4.84539459,7.20693035 L5.36352247,6.21689475 C6.13851882,6.36356669 7.16160184,6.52318027 8.06173925,6.5727899 C9.2824134,6.64181199 10.1057098,6.51886639 10.1825508,6.08747833 C10.3559919,5.33039228 4.91784467,5.19881892 4.96834019,3.83563264 C4.89369464,2.83481233 6.38441002,2.39695345 7.87073448,2.33655912 L7.87073448,1.5492759 L9.59855922,1.5492759 L9.59855922,2.30204807 C10.5799286,2.3085189 11.3571204,2.40989509 12.1145531,2.57166561 L11.6359434,3.50562077 C10.8763153,3.36541965 10.0991234,3.23600323 9.16605417,3.23600323 C8.56230347,3.23600323 7.29772018,3.23600323 7.25381103,3.64150801 C7.25381103,4.33819973 9.64685928,4.37486772 10.4416148,4.53879518 C11.0212154,4.65958384 11.4251795,4.77605862 11.8379255,4.97234018 C12.5580354,5.31529369 12.7073265,5.75746646 12.5624263,6.21473781 L12.5624263,6.21473781 Z M11.374684,10.075661 C10.5426058,10.2115482 9.65564111,10.2870411 8.72915821,10.2870411 C4.73562173,10.2870411 1.40072239,8.92601178 0.551080487,7.10555416 C0.414962147,7.3967411 0.335925691,7.70086968 0.335925691,8.01362603 C0.335925691,10.2719425 4.0923528,12.1031849 8.72915821,12.1031849 C8.95529029,12.1031849 9.174836,12.0945571 9.39657717,12.0859293 C9.91470505,11.2943322 10.5865149,10.6105822 11.374684,10.075661 L11.374684,10.075661 Z M16.8896723,8.94758119 C17.0345724,8.64776648 17.1201953,8.33501014 17.1201953,8.01146909 C17.1201953,7.69871274 17.0411588,7.3967411 16.9050405,7.10339722 C16.6042629,7.75047931 15.9829485,8.33932402 15.1333066,8.82894947 C15.2518613,8.82247865 15.370416,8.81169395 15.4911661,8.81169395 C15.9697757,8.81169395 16.4374081,8.86130357 16.8896723,8.94758119 Z M8.72915821,12.9767457 C4.73562173,12.9767457 1.40072239,11.6157164 0.551080487,9.79525873 C0.414962147,10.0864457 0.335925691,10.3905743 0.335925691,10.7033306 C0.335925691,12.8969389 3.88597983,14.6828855 8.33836684,14.7842617 C8.44374879,14.1479643 8.63475355,13.5418641 8.90040386,12.9745888 C8.84332198,12.9745888 8.78624009,12.9767457 8.72915821,12.9767457 Z M8.25274402,15.6578225 C4.47216688,15.5542894 1.36559507,14.2342419 0.551080487,12.4849633 C0.414962147,12.7761502 0.335925691,13.0802788 0.335925691,13.3930352 C0.335925691,15.5995851 3.92549806,17.3941595 8.41301239,17.4739663 C8.30104407,16.97787 8.23737582,16.4623612 8.23737582,15.9339109 C8.23957127,15.8411624 8.2483531,15.7505709 8.25274402,15.6578225 L8.25274402,15.6578225 Z M0.551080487,15.1768248 C0.414962147,15.4680118 0.335925691,15.7721403 0.335925691,16.0848967 C0.335925691,18.3432132 4.0923528,20.1744555 8.72915821,20.1744555 C9.04091312,20.1744555 9.34827711,20.1636708 9.65125019,20.1485722 C9.24509063,19.6050233 8.92016298,19.0032369 8.68305361,18.3583118 C4.70927625,18.3475271 1.39633147,16.9908116 0.551080487,15.1768248 Z M10.380142,20.9682096 C9.84664588,21.0199761 9.29558614,21.0501733 8.72915821,21.0501733 C4.73562173,21.0501733 1.40072239,19.689144 0.551080487,17.8686863 C0.414962147,18.1598733 0.335925691,18.4640019 0.335925691,18.7767582 C0.335925691,21.0350747 4.0923528,22.866317 8.72915821,22.866317 C10.0947325,22.866317 11.3812704,22.7045465 12.5229081,22.4219873 C11.7171753,22.0660922 10.9948699,21.5721529 10.380142,20.9682096 L10.380142,20.9682096 Z"
                                            id="Shape"
                                          />
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </span>
                            <span
                              style={{
                                paddingLeft: 10
                              }}
                            >{`${it.averageCost}元`}</span>
                          </div>
                        </li>
                        <li>
                          <div className="arrow-title">
                            <span className="arrow">
                              <svg
                                width="10px"
                                height="10px"
                                viewBox="0 0 10 10"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                              >
                                <g
                                  id="Page-1"
                                  stroke="none"
                                  strokeWidth="1"
                                  fill="none"
                                  fillRule="evenodd"
                                >
                                  <g
                                    transform="translate(-1142.000000, -469.000000)"
                                    fill="#09CDC6"
                                  >
                                    <g transform="translate(396.000000, 254.000000)">
                                      <g transform="translate(746.000000, 210.000000)">
                                        <polygon
                                          transform="translate(5.000000, 10.000000) rotate(90.000000) translate(-5.000000, -10.000000) "
                                          points="5 5 10 15 5 12.5 0 15"
                                        />
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </span>
                            <span className="under-line">车牌占比分析</span>
                          </div>
                          <div className="arrow-content">
                            <div className="content-column">
                              <div>{`${it.native.percent * 100}%`}</div>
                              <div>
                                <img className="img-svg" src="/img/money.svg" />
                              </div>
                              <div>
                                {it.native.name}牌
                              </div>
                            </div>
                            <div className="content-column left">
                              <div>{`${it.nonlocal.percent}%`}</div>
                              <div className="img-svg2">
                                <img
                                  className="img-svg"
                                  src="/img/money2.svg"
                                />
                              </div>
                              <div>
                                非{it.native.name}牌
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
