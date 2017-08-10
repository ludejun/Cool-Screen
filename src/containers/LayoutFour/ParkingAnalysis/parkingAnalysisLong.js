import React, {Component} from 'react';
import Echarts from 'echarts-for-react';
import './parkingAnalysisLong.less';

const data = [
  {
    name: '武汉',
    value: 53
  }
];
const geoCoordMap = {
  北京: [116.4136103013, 39.9110666857],
  上海: [121.4803295328, 31.2363429624],
  广州: [113.270813674, 23.1351666766]
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

const convertData = function (data) {
  const res = [];
  for (let i = 0; i < data.length; i++) {
    const geoCoord = geoCoordMap[data[i].name];
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value)
      });
    }
  }
  return res;
};

const option = {
  backgroundColor: 'transparent',
  geo: {
    map: 'china',
    label: {
      emphasis: {
        show: false
      }
    },
    roam: true,
    itemStyle: {
      normal: {
        areaColor: '#323c48',
        borderColor: '#111'
      },
      emphasis: {
        areaColor: '#2a333d'
      }
    }
  },
  series: [
    {
      name: 'Top 5',
      type: 'effectScatter',
      coordinateSystem: 'geo',
      data: convertData(data.sort((a, b) => {
        return b.value - a.value;
      }).slice(0, 6)),
      symbolSize(val) {
        return val[2] / 10;
      },
      showEffectOn: 'render',
      rippleEffect: {
        brushType: 'stroke'
      },
      hoverAnimation: true,
      label: {
        normal: {
          formatter: '{b}',
          position: 'right',
          show: true
        }
      },
      itemStyle: {
        normal: {
          color: '#f4e925',
          shadowBlur: 10,
          shadowColor: '#333'
        }
      },
      zlevel: 1
    }, {
      name: '中国',
      type: 'map',
      mapType: 'china',
      selectedMode: 'multiple',
      label: {
        normal: {
          show: false
        }
      },
      itemStyle: {
        normal: {
          areaColor: '#14216A'
        }
      },
      data: [
        {
          name: '广东',
          selected: false,
          itemStyle: {
            normal: {
              areaColor: '#523CF1'
            }
          }
        }
      ]
    }
  ]
};
class ParkingAnalysis extends Component {
  render() {
    console.dir(window);
    return (
      <div className="parking-contariner-f">
        <div className="parking-left">
          <div className="parking-layout">
            <div className="layout-front"/>
            <div ref="svgPath" className="layout-head"/> {arrayC.map((it, i) => {
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
                <div key={i} className={`bar-container-${i+1} bar-container`}>
                  <div className="top-bar">
                    <svg
                      width="100%"
                      height="100%"
                      version="1.1"
                      viewBox="0,0,800,200"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink">
                      <polyline
                        points="0,0 100,100 700,100 800,0"
                        strokeWidth="20"
                        stroke="#16255D"
                        fill="#1C91FF"/>
                    </svg>
                  </div>
                  <div className="left-info">
                    <div className="mask"/>
                    <Echarts option={option} className="map"/>
                  </div>
                </div>
              );
            })}
          </div>
          <svg
            className="line-gab"
            width="263px"
            height="23px"
            viewBox="0 0 265 23"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink">
            <defs>
              <linearGradient
                x1="3.061617e-15%"
                y1="50%"
                x2="100%"
                y2="50%"
                id="linearGradient-1">
                <stop stopColor="#DAC81B" offset="0%"></stop>
                <stop stopColor="#0D62C4" offset="100%"></stop>
              </linearGradient>
            </defs>
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g
                transform="translate(-359.000000, -141.000000)"
                strokeWidth="2"
                stroke="url(#linearGradient-1)">
                <polyline
                  className="animate"
                  id="Path-3"
                  points="369.551579 152.235322 390.319507 163.003249 520.514543 163.003249"></polyline>
              </g>
            </g>
          </svg>
        </div>
        <div className="parking-right">
          <div className="right-layout">
            <svg
              className="svg-lay"
              viewBox="0 0 704 172"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink">
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="车牌分析" transform="translate(-468.000000, -64.000000)" fill="#0D62C4">
                    <g id="Group-5" transform="translate(468.000000, 64.000000)">
                        <path d="M2.42597693,0.992782142 L40.0700369,0.992782142 L44.187356,4.15946518 L698.139513,4.15946518 L701.864706,8.11781897 L701.864706,71.8473151 L703.629271,75.6077512 L703.629271,147.396435 L701.864706,152.542294 L701.864706,171.80278 L678.729294,171.80278 L674.219849,169.625685 L35.756655,169.625685 L32.8157129,171.80278 L7.13148443,171.80278 C7.13148443,171.80278 3.3938067,168.344161 2.42597693,167.448591 C1.45814716,166.55302 2.42597693,103.316228 2.42597693,103.316228 L0.269285995,97.5766148 L0.269285995,38.5971432 L2.42597693,33.4512833 L2.42597693,0.992782142 Z" id="Rectangle"></path>


                        <polygon transform="translate(4.000000, 6.000000)" id="Path-103" fill="#092293" points="7.35508142 3.07588862 35.6544298 3.07588862 39.7903276 0.281931701 685.59191 0.281931701 689.326878 0.281931701 693.061846 0.281931701 695.224195 3.07588862 695.224195 156.984296 691.29265 160.691935 28.7820016 160.691935 23.4744159 155.104022 4.00929733 155.104022 0.7541941 151.799389 0.7541941 3.07588862"></polygon>
                    </g>
                </g>

              </g>
            </svg>
            <div className="left-content">
              <div className="content">
                <div className="top-title">
                  <svg
                    width="89px"
                    height="21px"
                    viewBox="0 0 89 21"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink">
                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <g transform="translate(-650.000000, -87.000000)">
                        <g transform="translate(622.000000, 65.000000)">
                          <g transform="translate(29.000000, 21.000000)">
                            <polygon
                              id="Rectangle-6"
                              fill="#108EE9"
                              className="bar-flash"
                              points="7.52248328 1.90909091 79.1650539 1.90909091 83.6049383 11.9090909 79.1650539 21.9090909 7.52248328 21.9090909 3.60493827 11.9090909"></polygon>
                            <polyline
                              id="Path-104"
                              stroke="#108EE9"
                              strokeWidth="1.01317392"
                              points="2.45791246 3.81818182 0 12 2.7037037 20.1818182"></polyline>
                            <polyline
                              id="Path-104"
                              stroke="#108EE9"
                              strokeWidth="1.01317392"
                              transform="translate(85.944444, 12.000000) scale(-1, 1) translate(-85.944444, -12.000000) "
                              points="87.0505051 3.81818182 84.5925926 12 87.2962963 20.1818182"></polyline>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <div className="title-content">
                    上海（021）</div>
                </div>
                <div className="detail">
                  <svg
                    width="135"
                    height="88"
                    className="dotted-svg"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink">
                    <g stroke="#0D62C4" strokeWidth="1" fill="none" fillRule="evenodd">
                      <polyline className="polyline" points="0,0 135,0 135,88 0,88 0,0"/>
                    </g>
                  </svg>
                  <div className="first-content">
                    <svg
                      display="inline-block"
                      width="8px"
                      height="7px"
                      viewBox="0 0 8 7"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink">
                      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g transform="translate(-652.000000, -142.000000)" fill="#09CDC6">
                          <g transform="translate(622.000000, 65.000000)">
                            <g transform="translate(30.000000, 72.000000)">
                              <polygon
                                transform="translate(4.067176, 8.633987) rotate(90.000000) translate(-4.067176, -8.633987) "
                                points="4.06717557 5.31699346 7.33435115 11.9509804 4.06717557 10.2924837 0.8 11.9509804"></polygon>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <span className="title">平均单次停车消费</span>
                  </div>
                  <div className="second-content">
                    <svg
                      display="inline-block"
                      width="22px"
                      height="22px"
                      viewBox="0 0 22 22"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink">
                      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g
                          transform="translate(-668.000000, -174.000000)"
                          fillRule="nonzero"
                          fill="#FFCC11">
                          <g transform="translate(622.000000, 65.000000)">
                            <g transform="translate(30.000000, 72.000000)">
                              <g transform="translate(16.000000, 37.000000)">
                                <path
                                  d="M15.1767376,8.83708256 C11.5752334,8.83708256 8.65832995,11.7048754 8.65832995,15.2411321 C8.65832995,18.7773889 11.5773334,21.6451817 15.1767376,21.6451817 C18.7761418,21.6451817 21.6951452,18.7773889 21.6951452,15.2411321 C21.6951452,11.7048754 18.7761418,8.83708256 15.1767376,8.83708256 Z M18.154541,17.2444608 C18.0579409,17.865472 17.7072405,19.2209684 15.8046383,19.3550738 L15.8046383,20.5434541 L14.4606367,20.5434541 L14.4606367,19.3653896 C13.6584358,19.2539789 12.9192349,19.049726 12.156934,18.8000837 L12.5601345,17.2506503 C13.1628352,17.4817242 13.9566361,17.7293035 14.6559369,17.8077035 C15.6051381,17.917051 16.2435388,17.7251771 16.3044389,17.0484606 C16.438839,15.8642065 12.2136341,15.6558274 12.2535341,13.5204564 C12.1947341,11.9524546 13.3539354,11.2674854 14.5089368,11.1746432 L14.5089368,9.94087332 L15.8508383,9.94087332 L15.8508383,11.1189379 C16.6131392,11.1292537 17.2179399,11.2901802 17.8059406,11.5418857 L17.4342402,13.0026032 C16.8441395,12.7839082 16.2393388,12.5796553 15.516938,12.5796553 C15.0486374,12.5796553 14.0658363,12.5817185 14.0322362,13.2151087 C14.0322362,14.3065205 15.8928384,14.364289 16.5081391,14.622184 C16.9575396,14.8099316 17.27254,14.9935529 17.5917404,15.3009638 C18.152441,15.8373855 18.2679412,16.5285442 18.154541,17.2444608 L18.154541,17.2444608 Z M8.34962959,0.809325824 C3.91442442,0.809325824 0.321320226,2.56094892 0.321320226,4.72107776 C0.321320226,6.88120659 3.91442442,8.63282969 8.34962959,8.63282969 C12.7827348,8.63282969 16.375839,6.88120659 16.375839,4.72107776 C16.375839,2.56094892 12.7827348,0.809325824 8.34962959,0.809325824 Z M12.0162339,5.94453181 C11.8965337,6.32415331 11.4639332,7.15148059 9.12243049,7.234007 L9.12243049,7.96023943 L7.46972857,7.96023943 L7.46972857,7.24019648 C6.48272741,7.17211219 5.57132635,7.04832258 4.63472526,6.89358555 L5.13032584,5.94659497 C5.8716267,6.08688988 6.85022784,6.23956374 7.71122885,6.28701642 C8.87883021,6.35303755 9.66633113,6.23543742 9.73983121,5.82280536 C9.90573141,5.09863609 4.70402534,4.97278331 4.7523254,3.668866 C4.68092531,2.71155962 6.10682698,2.29273808 7.52852863,2.23496959 L7.52852863,1.48191608 L9.18123056,1.48191608 L9.18123056,2.20195903 C10.1199317,2.20814851 10.8633325,2.30511704 11.5878334,2.45985407 L11.1300328,3.35320248 C10.403432,3.21909706 9.66003112,3.09530744 8.76753008,3.09530744 C8.19002941,3.09530744 6.98042799,3.09530744 6.93842795,3.48318157 C6.93842795,4.14958235 9.22743062,4.18465608 9.9876315,4.34145626 C10.5420321,4.45699324 10.9284326,4.56840389 11.3232331,4.75615148 C12.0120339,5.08419397 12.154834,5.50714183 12.0162339,5.94453181 L12.0162339,5.94453181 Z M10.8801325,9.63758875 C10.0842316,9.76756785 9.23583063,9.83977846 8.34962959,9.83977846 C4.52972514,9.83977846 1.33982141,8.53792431 0.527120466,6.79661702 C0.396920314,7.07514366 0.321320226,7.36604926 0.321320226,7.66520751 C0.321320226,9.82533634 3.91442442,11.5769594 8.34962959,11.5769594 C8.56592984,11.5769594 8.77593009,11.5687068 8.98803034,11.5604542 C9.48363091,10.8032743 10.1262317,10.1492525 10.8801325,9.63758875 L10.8801325,9.63758875 Z M16.1553387,8.55855592 C16.2939389,8.27177663 16.375839,7.97261839 16.375839,7.66314435 C16.375839,7.3639861 16.3002389,7.07514366 16.1700387,6.79455386 C15.8823384,7.41350195 15.2880377,7.97674471 14.4753367,8.4450821 C14.5887369,8.43889262 14.702137,8.42857682 14.8176371,8.42857682 C15.2754377,8.42857682 15.7227382,8.4760295 16.1553387,8.55855592 Z M8.34962959,12.4125394 C4.52972514,12.4125394 1.33982141,11.1106852 0.527120466,9.36937792 C0.396920314,9.64790456 0.321320226,9.93881016 0.321320226,10.2379684 C0.321320226,12.3362024 3.71702419,14.0444992 7.97582916,14.1414677 C8.07662927,13.5328354 8.25932949,12.9530874 8.51342978,12.4104762 C8.45882972,12.4104762 8.40422966,12.4125394 8.34962959,12.4125394 Z M7.89392906,14.9770476 C4.27772484,14.8780159 1.30622138,13.6153618 0.527120466,11.9421388 C0.396920314,12.2206655 0.321320226,12.5115711 0.321320226,12.8107293 C0.321320226,14.9213423 3.75482423,16.6378917 8.04722924,16.7142286 C7.94012911,16.2397017 7.87922904,15.7466064 7.87922904,15.2411321 C7.88132905,15.1524162 7.88972906,15.0657635 7.89392906,14.9770476 L7.89392906,14.9770476 Z M0.527120466,14.5169629 C0.396920314,14.7954895 0.321320226,15.0863951 0.321320226,15.3855534 C0.321320226,17.5456822 3.91442442,19.2973053 8.34962959,19.2973053 C8.64782994,19.2973053 8.94183028,19.2869895 9.23163062,19.2725474 C8.84313017,18.752631 8.5323298,18.1770092 8.30552954,17.5601243 C4.50452511,17.5498085 1.33562141,16.2520807 0.527120466,14.5169629 Z M9.92883143,20.0565483 C9.41853084,20.1060641 8.89143022,20.1349484 8.34962959,20.1349484 C4.52972514,20.1349484 1.33982141,18.8330942 0.527120466,17.0917869 C0.396920314,17.3703136 0.321320226,17.6612192 0.321320226,17.9603774 C0.321320226,20.1205062 3.91442442,21.8721293 8.34962959,21.8721293 C9.65583112,21.8721293 10.8864326,21.7173923 11.9784338,21.4471183 C11.2077329,21.1066969 10.5168321,20.6342332 9.92883143,20.0565483 L9.92883143,20.0565483 Z"
                                  id="Shape"></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <span style={{
                      fontSize: 27
                    }}>11.38</span>
                    <span>元</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="middle-content">
              <div className="content">
                <svg
                  width="146"
                  height="126"
                  className="dotted-svg"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink">
                  <g stroke="#0D62C4" strokeWidth="1" fill="none" fillRule="evenodd">
                    <polyline className="polyline" points="0,0 146,0 146,126 0,126 0,0"/>
                  </g>
                </svg>
                <div className="first-content">
                  <svg
                    display="inline-block"
                    width="8px"
                    height="7px"
                    viewBox="0 0 8 7"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink">
                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <g transform="translate(-652.000000, -142.000000)" fill="#09CDC6">
                        <g transform="translate(622.000000, 65.000000)">
                          <g transform="translate(30.000000, 72.000000)">
                            <polygon
                              transform="translate(4.067176, 8.633987) rotate(90.000000) translate(-4.067176, -8.633987) "
                              points="4.06717557 5.31699346 7.33435115 11.9509804 4.06717557 10.2924837 0.8 11.9509804"></polygon>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <span className="title">车牌占比分析</span>
                </div>
                <div className="second-content">
                  <div className="content-column">
                    <div className="text">56%</div>
                    <div>
                      <img width="32" height="42" className="img-svg" src="/img/money.svg"></img>
                    </div>
                    <div className="text">沪牌</div>
                  </div>
                  <div className="content-column">
                    <div className="text">44%</div>
                    <div className="img-svg2">
                      <img width="32" height="30" className="img-svg" src="/img/money2.svg"></img>
                    </div>
                    <div className="text">非沪牌</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-content">
              <div className="content">
                <svg
                  width="279"
                  height="126"
                  className="dotted-svg"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink">
                  <g stroke="#0D62C4" strokeWidth="1" fill="none" fillRule="evenodd">
                    <polyline className="polyline" points="0,0 279,0 279,126 0,126 0,0"/>
                  </g>
                </svg>
                <div className="first-content">
                  <svg
                    display="inline-block"
                    width="8px"
                    height="7px"
                    viewBox="0 0 8 7"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink">
                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <g transform="translate(-652.000000, -142.000000)" fill="#09CDC6">
                        <g transform="translate(622.000000, 65.000000)">
                          <g transform="translate(30.000000, 72.000000)">
                            <polygon
                              transform="translate(4.067176, 8.633987) rotate(90.000000) translate(-4.067176, -8.633987) "
                              points="4.06717557 5.31699346 7.33435115 11.9509804 4.06717557 10.2924837 0.8 11.9509804"></polygon>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <span className="title">车辆类型及车辆品牌占比排名</span>
                </div>
                <div className="second-content">
                  <ul>
                    <li>
                      <div className="content-number">
                        <div className="level-img"><img src="/img/level1.png"/></div>
                        <div className="car-img"><img src="/img/car1.png"/></div>
                        <div className="car-name">轿车</div>
                      </div>
                      <div className="content-lavish">
                        <div className="car-logo"><img src="/img/logo1.png"/></div>
                        <div className="car-name">大众</div>
                      </div>
                    </li>
                    <li>
                      <div className="content-number">
                        <div className="level-img"><img src="/img/level2.png"/></div>
                        <div className="car-img"><img src="/img/car2.png"/></div>
                        <div className="car-name">多用途乘用车</div>
                      </div>
                      <div className="content-lavish">
                        <div className="car-logo"><img src="/img/logo2.png"/></div>
                        <div className="car-name">别克</div>                        
                      </div>
                    </li>
                    <li>
                      <div className="content-number">
                        <div className="level-img"><img src="/img/level3.png"/></div>
                        <div className="car-img"><img src="/img/car3.png"/></div>
                        <div className="car-name">越野车</div></div>
                      <div className="content-lavish">
                        <div className="car-logo"><img src="/img/logo3.png"/></div>
                        <div className="car-name">东风</div>                       
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ParkingAnalysis;
