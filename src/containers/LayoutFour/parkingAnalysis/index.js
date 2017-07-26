import React, {Component} from 'react';
import Echarts from 'echarts-for-react';
import './parkingAnalysis.less';

const data = [
    {
        name: '武汉',
        value: 53
    }
];
const geoCoordMap = {
    '武汉': [114.31, 30.52]
};

const convertData = function (data) {
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
            data: convertData(data.sort(function (a, b) {
                return b.value - a.value;
            }).slice(0, 6)),
            symbolSize: function (val) {
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
        return <div className="parking-contariner-f">
            <div className="parking-left">
                <div className="name">上海市牌照所属区域分布图</div>
                <div className="parking-layout">
                    <div className="layout-front"></div>
                    <div ref="svgPath" className="layout-head"></div>
                    {['1', '2', '3'].map((i, index) => {
                        return <div key={index} className={`bar-container-${i} bar-container`}>
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
                    })
}
                </div>
            </div>
            <div className="parking-right">
                {/*<svg
                    className="right-layout"
                    viewBox="0 0 390 166"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink">
                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g transform="translate(-622.000000, -65.000000)">
                            <g transform="translate(622.000000, 65.000000)">
                                <g >
                                    <g fill="#0D62C4">
                                        <path
                                            d="M2.42597693,0.992782142 L22.83384,0.992782142 L40.0700369,0.992782142 L44.187356,4.15946518 L384.139513,4.15946518 L387.864706,8.11781897 L387.864706,71.8473151 L389.629271,75.6077512 L389.629271,147.396435 L387.864706,152.542294 L387.864706,165.80278 L364.729294,165.80278 L360.219849,163.625685 L35.756655,163.625685 L32.8157129,165.80278 L7.13148443,165.80278 C7.13148443,165.80278 3.3938067,162.344161 2.42597693,161.448591 C1.45814716,160.55302 2.42597693,103.316228 2.42597693,103.316228 L0.269285995,97.5766148 L0.269285995,38.5971432 L2.42597693,33.4512833 L2.42597693,0.992782142 Z"
                                            id="Rectangle"></path>
                                    </g>
                                    <polygon
                                        id="Path-103"
                                        fill="#092293"
                                        points="11.3550814 9.07588862 39.6544298 9.07588862 43.7903276 6.2819317 375.59191 6.2819317 379.326878 6.2819317 383.061846 6.2819317 385.224195 9.07588862 385.224195 156.984296 381.29265 160.691935 32.7820016 160.691935 27.4744159 155.104022 8.00929733 155.104022 4.7541941 151.799389 4.7541941 9.07588862"></polygon>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>*/}
            </div>
        </div>;
    }
}
export default ParkingAnalysis;