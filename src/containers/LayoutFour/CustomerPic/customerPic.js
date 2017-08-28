import React, {Component} from 'react';
import Echarts from 'echarts-for-react';
import echarts from 'echarts';
import {WDImageBar, WDImagePercent, WDFloor, WDPan } from '../../../components';
import './customerPic.less';

const consume = [120, 40, 10];
const age = {
    name: [
        '<18', '18~24', '25~34', '35~44', '>45'
    ],
    val: [0.4, 0.8, 0.2, 0.3, 0.1]
};
const carList = [
    {
        itemIcon: 'icon-car',
        percent: 0.34 * 100,
        color: '#7096EE',
        name: '有车'
    }, {
        itemIcon: 'icon-walk',
        percent: 0.66 * 100,
        color: '#9DD455',
        name: '无车'
    }
];
const marriage = [
    {
        itemIcon: 'icon-client-married',
        percent: 0.40 * 100,
        color: '#EA6C6B',
        name: '已婚'
    }, {
        itemIcon: 'icon-client-hearts',
        percent: 0.60 * 100,
        color: '#4C9DFF',
        name: '未婚'
    }
];
const genderList = [[
    {
        itemImage: '/img/icon_male.png',
        percent: 0.45 * 100,
        color: '#4C9DFF'
    }, {
        itemImage: '/img/icon_female.png',
        percent: 0.55 * 100,
        color: '#EA6C6B'
    }
],[
    {
        itemImage: '/img/icon_male.png',
        percent: 0.44 * 100,
        color: '#4C9DFF'
    }, {
        itemImage: '/img/icon_female.png',
        percent: 0.56 * 100,
        color: '#EA6C6B'
    }
],[
    {
        itemImage: '/img/icon_male.png',
        percent: 0.44 * 100,
        color: '#4C9DFF'
    }, {
        itemImage: '/img/icon_female.png',
        percent: 0.56 * 100,
        color: '#EA6C6B'
    }
]];
// /////
const dataStyle = {
    normal: {
        label: {
            show: true
        },
        labelLine: {
            show: true
        },
        shadowBlur: 40,
        shadowColor: 'rgba(40, 40, 40, 0.5)'
    }
};
const placeHolderStyle = {
    normal: {
        color: 'rgba(255,255,255,0.1)',
        label: {
            show: false
        },
        labelLine: {
            show: false
        }
    },
    emphasis: {
        color: 'rgba(0,0,0,0)'
    }
};

const rawData = [
    {
        name: '<18',
        val: 0.07
    }, {
        name: '18~24',
        val: 0.17
    }, {
        name: '25~34',
        val: 0.38
    }, {
        name: '35~44',
        val: 0.27
    }, {
        name: '>45',
        val: 0.01
    }
];
const option = {
    xAxis: {
        data: rawData.map((item) => {
            return item.name;
        }),
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },

        axisLabel: {
            interval: 0,
            rotate: -45,
            textStyle: {
                color: '#ffffff',
                fontSize: 12
            }
        }
    },
    grid: {
        left: 50,
        top: 10,
        right: 10,
        bottom: 50
    },
    yAxis: {
        type: 'value',
        splitLine: {
            show: true
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: true,
            formatter: function (value, index) {
              return value*100+'%'
            },
            textStyle: {
                color: '#ffffff',
                fontSize: 12
            }
        }
    },
    series: [
        {
            itemStyle: {
                normal: {
                    color: new echarts
                        .graphic
                        .LinearGradient(0, 0, 1, 0, [
                            {
                                offset: 0,
                                color: '#6D83F1'
                            }, {
                                offset: 1,
                                color: '#06F0FB'
                            }
                        ])
                }
            },
            name: 'hill',
            type: 'pictorialBar',
            symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
            data: rawData.map((item) => {
                return item.val;
            })
        }
    ]
};
const radioList = ['Test1', 'Test2', 'Test3'];
const listArray = ['55,10 55,40 78,40 78,80', '55,10 55,60 90,60 90,120', '55,10 55,40 20,40 20,80'];

class Cuspic extends Component {
    constructor(props) {
        super(props);
        this.timer = null;
        this.state = {
            tab: 0
        };
        this.brandsName = [
            [
                'CROCS', 'GUESS 时尚表', '1001牛肉面'
            ],
            [
                '中国黄金', '海澜之家', '吴良材眼镜'
            ],
            ['上海书城', '沃尔玛', 'DISSONA']
        ];
        this.customerPic = [
            {
              consume: {
                high: 7.5,
                middle: 40,
                low: 52.5
              },
              cars: {
                haveCar: 34,
                noCar: 66
              },
              sex: {
                male: 45,
                female: 55
              },
              marriage: {
                yes: 40,
                no: 60
              },
              age: {
                18: 0.07,
                24: 0.17,
                34: 0.38,
                44: 0.27,
                45: 0.01
              }
            }, {
              consume: {
                high: 7.5,
                middle: 40,
                low: 52.5
              },
              cars: {
                haveCar: 34,
                noCar: 66
              },
              sex: {
                male: 44,
                female: 56
              },
              marriage: {
                yes: 40,
                no: 60
              },
              age: {
                18: 0.07,
                24: 0.17,
                34: 0.38,
                44: 0.27,
                45: 0.01
              }
            }, {
              consume: {
                high: 7.5,
                middle: 40,
                low: 52.5
              },
              cars: {
                haveCar: 34,
                noCar: 66
              },
              sex: {
                male: 44,
                female: 56
              },
              marriage: {
                yes: 38,
                no: 62
              },
              age: {
                18: 0.07,
                24: 0.17,
                34: 0.38,
                44: 0.27,
                45: 0.01
              }
            }
        ];
    }
    componentDidMount() {
        clearInterval(this.timer);

        this.timer = setInterval(() => {
            if (this.state.tab < 2) {
                this.setState({
                    tab: this.state.tab + 1
                });
            } else {
                this.setState({tab: 0});
            }
        }, 4000);
    }
    radioChange = (e) => {
        clearInterval(this.timer);
        this.setState({tab: e.target.value});
    }
    render() {
        return <div className="customer-container-f">
            <div className="left">
                <div className="content">
                    <div className="row">
                        <div className="cell">
                            <div className="cell-title">
                                消费等级占比
                            </div>
                            <div className="cell-content WDPan">
                                <WDPan data={this.customerPic[this.state.tab].consume}/>
                            </div>
                        </div>
                        <div className="cell">
                            <div className="cell-title">
                                年龄分布
                            </div>
                            <div
                                className="cell-content"
                                style={{
                                textAlign: 'left'
                            }}>
                                <Echarts className="age-chart" option={option}/>
                            </div>
                        </div>
                    </div>
                    <div className="row second-row">
                        <div className="cell">
                            <p>车辆情况对比<span/></p>
                            <div className="car-situation"><WDImagePercent dataList={carList}/></div>
                        </div>
                        <div className="cell">
                            <p className="right-sub-title">性别对比<span/></p>
                            <div className="sex-situation"><WDImageBar four={true} dataList={genderList[this.state.tab]}/></div>
                        </div>
                        <div className="cell">
                            <p className="right-sub-title">已婚对比<span/></p>
                            <div className="car-situation"><WDImagePercent dataList={marriage}/></div>
                        </div>
                    </div>
                </div>
                <div className="left-layout">
                    <svg
                        viewBox="0 0 45 226"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink">
                        <defs></defs>
                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g
                                transform="translate(-23.000000, -15.000000)"
                                strokeWidth="0.8151"
                                stroke="#108EE9">
                                <g
                                    transform="translate(332.000000, 128.000000) rotate(-90.000000) translate(-332.000000, -128.000000) translate(219.500000, -180.500000)">
                                    <g >
                                        <path
                                            d="M0.40755,43.2161629 L0.40755,16.2709084 L6.91733803,10.7568327 L24.7629229,10.7568327 L24.8861524,10.7568327 L24.9887367,10.6885541 L31.1894419,6.56145953 L57.0875968,6.56145953 L57.2189589,6.56145953 L57.3255951,6.48474761 L65.7734232,0.40755 L155.432671,0.40755 L165.993641,6.50683067 L166.197464,6.56145953 L191.817848,6.56145953 L198.426828,10.6948199 L198.525983,10.7568327 L198.642933,10.7568327 L218.129337,10.7568327 L224.109617,16.6718264 L224.109617,41.6828996 L0.40755,43.2161629 Z"
                                            id="Rectangle"></path>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
                <div className="right-layout">
                    <svg
                        viewBox="0 0 45 226"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink">
                        <defs></defs>
                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g
                                transform="translate(-23.000000, -15.000000)"
                                strokeWidth="0.8151"
                                stroke="#108EE9">
                                <g
                                    transform="translate(332.000000, 128.000000) rotate(-90.000000) translate(-332.000000, -128.000000) translate(219.500000, -180.500000)">
                                    <g >
                                        <path
                                            d="M0.40755,43.2161629 L0.40755,16.2709084 L6.91733803,10.7568327 L24.7629229,10.7568327 L24.8861524,10.7568327 L24.9887367,10.6885541 L31.1894419,6.56145953 L57.0875968,6.56145953 L57.2189589,6.56145953 L57.3255951,6.48474761 L65.7734232,0.40755 L155.432671,0.40755 L165.993641,6.50683067 L166.197464,6.56145953 L191.817848,6.56145953 L198.426828,10.6948199 L198.525983,10.7568327 L198.642933,10.7568327 L218.129337,10.7568327 L224.109617,16.6718264 L224.109617,41.6828996 L0.40755,43.2161629 Z"
                                            id="Rectangle"></path>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>

            </div>
            <div className="right">
                <WDFloor
                    brandsName={this.brandsName[this.state.tab]}
                    tab={this.state.tab}
                    radioChange={this.radioChange}
                />
            </div>
        </div>
    }
}
export default Cuspic;