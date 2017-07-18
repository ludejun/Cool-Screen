import React, {Component} from 'react';
import Echarts from 'echarts-for-react';
import './parkingAnalysis.less';
import HeaderTitle from '../Layout/HeaderTitle';
import {AngelAside} from '../../components';

const parkingInfo = [
    {
        name: 'a'
    }, {
        name: 'b'
    }, {
        name: 'c'
    }
];
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
export default class ParkingAnalysis extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: null,
            height: null
        }
    }
    componentDidMount() {
        const svgDOM = this.refs.svgPath;
        const width = parseInt(window.getComputedStyle(svgDOM).width);
        const height = parseInt(window.getComputedStyle(svgDOM).height);
        this.setState({width, height});
    }
    render() {
        return <div className="parking-container">
            <HeaderTitle title="车牌分析:  万达广场停车分析"/>
            <div className="parking-layout">
                <div className="layout-front"></div>
                <div ref="svgPath" className="layout-head">
                    {this.state.width && <svg
                        width="100%"
                        height="100%"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink">
                        <defs>
                            <path
                                d={`M0,0 L${this.state.width},0 ${this.state.width},${this.state.height} 0,${this.state.height} 0,0`}
                                id="circlePath"/>
                        </defs>
                        <circle cx="0" cy="0" r="10" stroke="#fff" fill="white">
                            <animateMotion begin="0s" dur="3s" rotate="auto" repeatCount="indefinite">
                                <mpath xlinkHref="#circlePath"/>
                            </animateMotion>
                        </circle>
                    </svg>}
                </div>
                {['1', '2', '3'].map((i, index) => {
                    return <div key={index} className={`bar-container-${i} bar-container`}>
                        <div className="angel-style left-top-angel">
                            <AngelAside/>
                        </div>
                        <div className="angel-style rigth-top-angel">
                            <AngelAside/>
                        </div>
                        <div className="angel-style left-bottom-angel">
                            <AngelAside color="#074ac5"/>
                        </div>
                        <div className="angel-style right-bottom-angel">
                            <AngelAside color="#074ac5"/>
                        </div>
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
                            <div className="mask" />
                            <Echarts option={option} className="left-map"/>
                            <div className="city-area">上海市牌照所属区域分布图</div>
                        </div>
                        <div className="right-info">
                            <svg
                                className="right-bgsvg"
                                viewBox="0 0 292 401"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink">
                                <g stroke="#0D62C4" strokeWidth="14" fill="#0A2393" fillRule="evenodd">
                                    <g transform="translate(-1110.000000, -352.000000)" fill="">
                                        <g transform="translate(396.000000, 254.000000)">
                                            <g transform="translate(714.000000, 98.000000)">
                                                <path
                                                    d="M6.56158759,0.904201681 L105.452099,0.904201681 L116.268248,9.14621849 L276.965328,9.14621849 L286.751369,19.4487395 L286.751369,185.319328 L291.386861,195.106723 L291.386861,352.735294 L286.751369,366.128571 L286.751369,400.642017 L225.974909,400.642017 L214.12865,394.97563 L94.1208942,394.97563 L86.395073,400.642017 L18.9229015,400.642017 C18.9229015,400.642017 9.10406523,391.640171 6.56158759,389.309244 C4.01910996,386.978317 6.56158759,267.22437 6.56158759,267.22437 L0.895985401,252.285714 L0.895985401,98.7781513 L6.56158759,85.3848739 L6.56158759,0.904201681 Z"
                                                    id="Rectangle"></path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div>
                })
}

            </div>
        </div>
    }

}