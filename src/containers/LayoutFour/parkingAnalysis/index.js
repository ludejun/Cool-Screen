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
                            {<Echarts option={option} className="left-map"/>}
                            <div className="city-area">上海市牌照所属区域分布图</div>
                        </div>
                    </div>
                })
}
            </div>
            </div>
            <div className="parking-right">

            </div>
        </div>;
    }
}
export default ParkingAnalysis;