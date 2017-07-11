import React, {Component} from 'react';
import HeaderTitle from './Layout/HeaderTitle';
import './VisAnalysis.less';

const yArray = [
    22,
    20,
    18,
    16,
    14,
    12,
    10,
    8,
    6,
    4,
    2
];
const xArray = [
    5,
    10,
    15,
    20,
    25,
    30,
    35,
    40,
    45,
    50,
    55,
    60,
    65,
    70,
    75,
    80,
    85,
    90,
    95,
    100,
    105,
    110
];
const circle = [
    {
        x: 350,
        y: 500,
        color: '#F8E81C',
        r: Math.ceil(Math.random()*10)
    }, {
        x: 250,
        y: 300,
        color: '#F8E81C',
        r: Math.ceil(Math.random()*10)
    }, {
        x: 1650,
        y: 700,
        color: '#F8E81C',
        r: Math.ceil(Math.random()*10)
    }, {
        x: 1360,
        y: 400,
        color: '#F8E81C',
        r: Math.ceil(Math.random()*10)
    }, {
        x: 200,
        y: 800,
        color: '#108EE9',
        r: Math.ceil(Math.random()*10)
    }, {
        x: 940,
        y: 650,
        color: '#F8E81C',
        r: Math.ceil(Math.random()*10)
    }, {
        x: 850,
        y: 300,
        color: '#F8E81C',
        r: Math.ceil(Math.random()*10)
    }, {
        x: 1460,
        y: 500,
        color: '#F8E81C',
        r: Math.ceil(Math.random()*10)
    }, {
        x: 1600,
        y: 465,
        color: '#108EE9',
        r: Math.ceil(Math.random()*10)
    }, {
        x: 1100,
        y: 870,
        color: '#F8E81C',
        r: Math.ceil(Math.random()*10)
    }, {
        x: 980,
        y: 430,
        color: '#09CDC6',
        r: Math.ceil(Math.random()*10)
    }, {
        x: 568,
        y: 698,
        color: '#F8E81C',
        r: Math.ceil(Math.random()*10)
    }, {
        x: 1000,
        y: 428,
        color: '#09CDC6',
        r: Math.ceil(Math.random()*10)
    }, {
        x: 888,
        y: 666,
        color: '#F8E81C',
        r: Math.ceil(Math.random()*10)
    }, {
        x: 1548,
        y: 500,
        color: '#09CDC6',
        r: Math.ceil(Math.random()*10)
    }, {
        x: 1368,
        y: 777,
        color: '#F8E81C',
        r: Math.ceil(Math.random()*10)
    }, {
        x: 543,
        y: 888,
        color: '#F8E81C',
        r: Math.ceil(Math.random()*10)
    }, {
        x: 777,
        y: 398,
        color: '#F8E81C',
        r: Math.ceil(Math.random()*10)
    }, {
        x: 356,
        y: 877,
        color: '#108EE9',
        r: Math.ceil(Math.random()*10)
    }, {
        x: 1689,
        y: 654,
        color: '#108EE9',
        r: Math.ceil(Math.random()*10)
    }, {
        x: 300,
        y: 800,
        color: '#09CDC6',
        r: Math.ceil(Math.random()*10)
    }, {
        x: 400,
        y: 700,
        color: '#F8E81C',
        r: Math.ceil(Math.random()*10)
    }, {
        x: 500,
        y: 800,
        color: '#09CDC6',
        r: Math.ceil(Math.random()*10)
    }, {
        x: 600,
        y: 600,
        color: '#F8E81C',
        r: Math.ceil(Math.random()*10)
    }, {
        x: 460,
        y: 740,
        color: '#09CDC6',
        r: Math.ceil(Math.random()*10)
    }, {
        x: 700,
        y: 800,
        color: '#108EE9',
        r: Math.ceil(Math.random()*10)
    }, {
        x: 1300,
        y: 800,
        color: '#F8E81C',
        r: Math.ceil(Math.random()*10)
    }, {
        x: 1200,
        y: 700,
        color: '#108EE9',
        r: Math.ceil(Math.random()*10)
    }, {
        x: 1400,
        y: 700,
        color: '#F8E81C',
        r: Math.ceil(Math.random()*10)
    }, {
        x: 1300,
        y: 600,
        color: '#09CDC6',
        r: Math.ceil(Math.random()*10)
    }, {
        x: 1000,
        y: 500,
        color: '#F8E81C',
        r: Math.ceil(Math.random()*10)
    }, {
        x: 1340,
        y: 790,
        color: '#108EE9',
        r: Math.ceil(Math.random()*10)
    }, {
        x: 940,
        y: 790,
        color: '#F8E81C',
        r: Math.ceil(Math.random()*10)
    }, {
        x: 990,
        y: 700,
        color: '#09CDC6',
        r: Math.ceil(Math.random()*10)
    }, {
        x: 1040,
        y: 630,
        color: '#09CDC6',
        r: Math.ceil(Math.random()*10)
    }
]
const ballArray = [
    {
        chinese: '警察',
        english: 'police',
        x: 17,
        y: 19,
        width: 60
    }, {
        chinese: '司机',
        english: 'driver',
        x: 35,
        y: 14,
        width: 50
    }, {
        chinese: '教师',
        english: 'teacher',
        x: 24,
        y: 7,
        width: 40
    }, {
        chinese: '医生',
        english: 'doctor',
        x: 64,
        y: 15,
        width: 66
    }, {
        chinese: '工人',
        english: 'worker',
        x: 50,
        y: 8,
        width: 73
    }, {
        chinese: '公务员',
        english: 'civil servant',
        x: 83,
        y: 20,
        width: 78
    }, {
        chinese: '律师',
        english: 'lawyer',
        x: 74,
        y: 75,
        width: 30
    }, {
        chinese: '金融',
        english: 'finance',
        x: 87,
        y: 10,
        width: 70
    }, {
        chinese: '服务业',
        english: 'services',
        x: 103,
        y: 18,
        width: 50
    }, {
        chinese: '私企',
        english: 'private enterprises',
        x: 115,
        y: 10,
        width: 60
    }
];
class VisAnalysis extends Component {
    constructor() {
        super();
        this.state = {
            xPer: 0,
            yPer: 0,
            ballArray: null
        };
    }
    componentDidMount() {
        const content = this.refs.contentAss;
        const style = window.getComputedStyle(content);
        const width = parseFloat(style.getPropertyValue('width'));
        const height = parseFloat(style.getPropertyValue('height'));
        const yPer = (height / (yArray.length + 2)) / 2;
        const xPer = (width / (xArray.length + 5)) / 5;
        this.setState({xPer, yPer, ballArray});
    }
    render() {
        return <div>
            <HeaderTitle title="智慧生活： 客群黏性分析" />
            <svg
                className="svg-container"
                viewBox="0 0 1724 771"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg">
                <g stroke="none" strokeWidth="1" fill="none">
                    <g
                        transform="translate(-100.000000, -193.000000)"
                        stroke="#108EE9"
                        strokeWidth="3">
                        <path
                            opacity="0.301856884"
                            d="M114,210 L419,210 L419.311107,210 L419.567305,209.823508 L441.811107,194.5 L905.199911,194.5 L928.449405,209.834773 L928.699911,210 L929,210 L1365,210 L1365.34214,210 L1365.61257,209.790415 L1385.34214,194.5 L1621.21515,194.5 L1645.97306,209.849903 L1646.21515,210 L1646.5,210 L1805,210 L1805,352.5 L1805,352.940675 L1805.32523,353.238029 L1822.5,368.940675 L1822.5,539.585786 L1805.29289,556.792893 L1805,557.085786 L1805,557.5 L1805,712.5 L1805,712.843108 L1805.21065,713.113941 L1822.5,735.343108 L1822.5,856.689867 L1805.17549,881.934158 L1805,882.189867 L1805,882.5 L1805,950 L1496,950 L1495.7721,950 L1495.56671,950.098748 L1469.7721,962.5 L1354.22025,962.5 L1327.42012,950.092533 L1327.22025,950 L1327,950 L760,950 L759.724904,950 L759.488516,950.140707 L738.724904,962.5 L331.286796,962.5 L311.529999,950.152002 L311.286796,950 L311,950 L114,950 L114,864.5 L114,864.259804 L113.890906,864.045813 L101,838.759804 L101,678.268121 L113.865865,656.000278 L114,655.768121 L114,655.5 L114,480 L114,479.775544 L113.904072,479.57262 L101,452.275544 L101,337.732073 L113.897789,311.440425 L114,311.232073 L114,311 L114,210 Z"></path>
                        <path
                            opacity="0.301856884"
                            strokeDasharray="5,5"
                            d="M123,218 L1797,218 L1797,940 L123,940 L123,218"></path>
                        <path
                            className="angle-flash"
                            strokeWidth="5"
                            stroke="#48AAFD"
                            opacity="1"
                            d="M114,260 L114,210 L164,210"></path>
                        <path
                            className="angle-flash"
                            strokeWidth="5"
                            stroke="#48AAFD"
                            opacity="1"
                            d="M1805,260 L1805,210 L1760,210"></path>
                        <path
                            className="angle-flash"
                            strokeWidth="5"
                            stroke="#48AAFD"
                            opacity="1"
                            d="M1805,900 L1805,950 L1755,950"></path>
                        <path
                            className="angle-flash"
                            strokeWidth="5"
                            stroke="#48AAFD"
                            opacity="1"
                            d="M164,950 L114,950 L114,900"></path>
                            {circle.map((it,index) => {
                                return  <circle key={index} stroke="none" cx={it.x.toString()} cy={it.y.toString()} r={it.r.toString()} fill={it.color.toString()} opacity="0.3"/>
                            })}
                    </g>
                </g>
            </svg>
            <div className="content">
                <div ref="contentAss" className="content-ruler">
                    {this.state.ballArray && this
                        .state
                        .ballArray
                        .map((it, index) => {
                            const y = it.y * this.state.yPer;
                            return <div
                                className="ball-style"
                                key={index}
                                style={{
                                position: 'absolute',
                                bottom: y,
                                left: it.x * this.state.xPer,
                                width: it.width,
                                height: it.width,
                                borderRadius: '50%',
                                animationDelay: index + 's'
                            }}>
                                <div>
                                    <span>{it.chinese}</span>
                                    <span>{it.english}</span>
                                </div>
                            </div>
                        })}
                    <section className="left-degree">
                        <div className="degree-center count">次数</div>
                        {yArray.map((it, index) => {
                            return <div key={index} className="degree-center">{it}</div>
                        })}
                    </section>
                    <div className="bottom-degree">{xArray.map((it, index) => {
                            return <span key={index} className="y-degree">{it}</span>
                        })
}
                        <span>时常（分钟）</span>
                    </div>
                </div>
            </div>
            <div className="net-style">
                <svg
                    className="svg-net"
                    width="100%"
                    height="100%"
                    viewBox="0 0 1724 771"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg">
                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" opacity="0.13">
                        <g transform="translate(-100.000000, -193.000000)">
                            <image
                                x="60"
                                y="190"
                                width="1920"
                                height="1080"
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    }
}
export default VisAnalysis;