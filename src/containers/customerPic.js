import React, {Component} from 'react';
import {WDAnalysis, ThreeModel} from '../components';
import HeaderTitle from './Layout/HeaderTitle';
import './customerPic.less';

class customerPic extends Component {
    constructor() {
        super();
        this.state = {
            lines: null
        }
    }
    componentDidMount() {
        this.renderPane();
    }
    renderPane = () => {
        const svg = this.refs.svgLayout;
        const male = this.refs.male;
        const style = window.getComputedStyle(svg);
        const width = parseInt(style.getPropertyValue('width'));
        const height = parseInt(style.getPropertyValue('height'));
        const resultX = [];
        const resultY = [];
        const xCount = Math.ceil(width / 10);
        const yCount = Math.ceil(height / 10);
        for (let i = 0; i < xCount; i++) {
            resultX.push(<line
                key={i}
                x1="0"
                y1={10 + i * 10}
                x2={width}
                y2={10 + i * 10}
                stroke="#162E4C"
                opacity="0.6"/>);
        }
        for (let n = 0; n < yCount; n++) {
            resultY.push(<line
                key={n + 's'}
                x1={10 + n * 10}
                y1={0}
                x2={10 + n * 10}
                y2={height}
                stroke="#162E4C"
                opacity="0.6"/>);
        }
        this.setState({
            lines: resultX.concat(resultY),
            width,
            height,
            TWidth: parseInt(window.getComputedStyle(male).width)
        });
    }
    render() {
        return <div className="container">
            <HeaderTitle title="数字金融:客群画像"/>
            <div className="customer-svg-container">
                <svg
                    className="svg"
                    viewBox="0 0 1850 911"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg">
                    <title>客群画像</title>
                    <desc>jinjilin</desc>
                    <defs></defs>
                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g >
                            <g>
                                <g id="Group-9">
                                    <polyline
                                        id="Path-154"
                                        fill="#108EE9"
                                        points="1 124 25.5 150.5 25.5 529.033024 11.5737965 542.959227 11.5737965 826.502033 57.5 879 80.5 875.5 108.5 902 283.525712 902 302.5 891.5 709.622832 891.5 720.561588 902.438757 1522.50538 902.438757 1539 891 1793.73761 891 1841.87022 842.867392 1841.87022 561.461912 1825 539 1825 356.777608 1848.5 323 1847 850 1788 909.5 66.9999274 909.5 1 831"></polyline>
                                    <circle
                                        className="circle-1 layout-cicle"
                                        id="Oval-29"
                                        fill="#108EE9"
                                        cx="1840"
                                        cy="130"
                                        r="8"></circle>
                                    <circle
                                        className="circle-2 layout-cicle"
                                        id="Oval-29-Copy"
                                        fill="#108EE9"
                                        cx="1840"
                                        cy="158"
                                        r="8"></circle>
                                    <circle
                                        className="circle-3 layout-cicle"
                                        id="Oval-29-Copy-2"
                                        fill="#108EE9"
                                        cx="1840"
                                        cy="190"
                                        r="8"></circle>
                                    <circle
                                        className="circle-4 layout-cicle"
                                        id="Oval-29-Copy-3"
                                        fill="#108EE9"
                                        cx="1840"
                                        cy="222"
                                        r="8"></circle>
                                    <circle
                                        className="circle-5 layout-cicle"
                                        id="Oval-29-Copy-4"
                                        fill="#108EE9"
                                        cx="1840"
                                        cy="254"
                                        r="8"></circle>
                                    <circle
                                        className="circle-6 layout-cicle"
                                        id="Oval-29-Copy-5"
                                        fill="#108EE9"
                                        cx="1840"
                                        cy="286"
                                        r="8"></circle>
                                    <polyline
                                        id="Path-206"
                                        stroke="#108EE9"
                                        strokeWidth="3"
                                        points="0.5 90 1 39.5 30.5 0.5 564.505852 0.5 604.5 25.5 994.562815 25.5 1018.5 2.5 1304.61187 2.5 1345 12.5 1795.0025 12.5 1847 46.5 1847 92.5"></polyline>
                                    <rect id="Rectangle-37" fill="#108EE9" x="1396" y="24" width="357" height="3"></rect>
                                    <polygon
                                        id="Path-207"
                                        fill="#108EE9"
                                        points="35.7535707 13 27 21.7535707 89.2940889 21.7535707 98.2535707 13.5"></polygon>
                                    <path
                                        d="M566.5,21.5 L30.4403018,21.5"
                                        id="Line"
                                        stroke="#108EE9"
                                        strokeLinecap="square"></path>
                                    <polyline
                                        id="Path-208"
                                        stroke="#108EE9"
                                        points="1023.98413 14.5 1307.5 14.5 1354 26 1789.50029 26"></polyline>
                                    <polygon
                                        id="Path-209"
                                        fill="#108EE9"
                                        points="578.5 22.5 559 11 479 11 496.5 22.5"></polygon>
                                    <polygon
                                        id="Path-210"
                                        fill="#108EE9"
                                        points="586.5 1 614 18 985.000337 18 1004.5 0.5 991 0.5 977 12.5 623.5 12.5 604.5 1"></polygon>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
                <div className="customer-content">
                    <div className="circle-line">
                        <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink">
                            <circle cx="20" cy="70" r="5" fill="#0E7BCD"/>
                            <circle
                                className="circle-bubble"
                                cx="20"
                                cy="70"
                                r="10"
                                fill="#0E7BCD"
                                opacity="0.6"/>
                            <polyline points="20,70 190,70 220,90" stroke="#0E7BCD" fill="none"/>
                        </svg>
                    </div>
                    <div className="customer-box">
                        <div className="scan-container">
                            <div className="scan-div"/>
                        </div>
                        <div className="Td-people">
                            <div className="male" ref={'male'}>
                                {this.state.TWidth && <ThreeModel
                                    width={this.state.TWidth}
                                    height={this.state.TWidth}
                                    modelPath={'/model/male02/male02.obj'}/>}
                            </div>
                            <div className="Td-people">
                                <div className="male" ref={'male'}>
                                    {this.state.TWidth && <ThreeModel
                                        width={this.state.TWidth}
                                        height={this.state.TWidth}
                                        modelPath={'/model/male02/male02.obj'}/>}
                                </div>
                                <div className="female">
                                    {this.state.TWidth && <ThreeModel
                                        width={this.state.TWidth}
                                        height={this.state.TWidth}
                                        modelPath={'/model/female02/female02.obj'}/>}
                                </div>
                            </div>
                        </div>
                        <svg
                            ref={'svgLayout'}
                            className="svg-left"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink">
                            <defs>
                                <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
                                    <stop stopColor="#06F0FB" offset="0%"></stop>
                                    <stop stopColor="#43B9FF" offset="100%"></stop>
                                </linearGradient>
                            </defs>
                            <g>
                                {this.state.lines && this.state.lines}
                                {this.state.lines && <g className="four-angel"><polyline points="40,0 0,0 0,40" fill="none" stroke="#108EE9" strokeWidth="6"/>
                                    <polyline
                                        points={`${this.state.width - 40},0 ${this.state.width},0 ${this.state.width},40`}
                                        fill="none"
                                        stroke="#108EE9"
                                        strokeWidth="6"/>
                                    <polyline
                                        points={`${this.state.width},${this.state.height - 40} ${this.state.width},${this.state.height} ${this.state.width - 40},${this.state.height}`}
                                        fill="none"
                                        stroke="#108EE9"
                                        strokeWidth="6"/>
                                    <polyline
                                        points={`40,${this.state.height} 0,${this.state.height} 0,${this.state.height - 40}`}
                                        fill="none"
                                        stroke="#108EE9"
                                        strokeWidth="6"/></g>}
                                <svg
                                    x="55%"
                                    y="70%"
                                    width="45%"
                                    height="45%"
                                    viewBox="0 0 305 163"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <title>Group 12</title>
                                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                        <g >
                                            <g id="Group-11-Copy">
                                                <g id="Group-12">
                                                    <g
                                                        className="elipse-rotate"
                                                        id="Oval-30"
                                                        opacity="0.696218297"
                                                        strokeLinecap="round">
                                                        <circle
                                                            className="circle"
                                                            cx="43%"
                                                            cy="29%"
                                                            r="70"
                                                            fill="#A1E0FE"
                                                            strokeWidth="0"/>
                                                        <circle
                                                            className="circle"
                                                            cx="43%"
                                                            cy="29%"
                                                            r="85"
                                                            stroke="#A1E0FE"
                                                            strokeWidth="2"/>
                                                        <circle
                                                            className="circle"
                                                            cx="43%"
                                                            cy="29%"
                                                            r="130"
                                                            stroke="#A1E0FE"
                                                            strokeWidth="3"/>
                                                        <circle
                                                            className="circle circle-move"
                                                            strokeDasharray="30%,4%"
                                                            cx="43%"
                                                            cy="29%"
                                                            r="100"
                                                            stroke="#A1E0FE"
                                                            strokeWidth="4"/>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                <svg
                                    x="6%"
                                    y="70%"
                                    width="45%"
                                    height="45%"
                                    viewBox="0 0 305 163"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <title>圈圈</title>
                                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                        <g >
                                            <g id="Group-11-Copy">
                                                <g id="Group-12">
                                                    <g
                                                        className="elipse-rotate"
                                                        id="Oval-30"
                                                        opacity="0.696218297"
                                                        strokeLinecap="round">
                                                        <circle
                                                            className="circle"
                                                            cx="43%"
                                                            cy="29%"
                                                            r="70"
                                                            fill="#A1E0FE"
                                                            strokeWidth="0"/>
                                                        <circle
                                                            className="circle"
                                                            cx="43%"
                                                            cy="29%"
                                                            r="85"
                                                            stroke="#A1E0FE"
                                                            strokeWidth="2"/>
                                                        <circle
                                                            className="circle"
                                                            cx="43%"
                                                            cy="29%"
                                                            r="130"
                                                            stroke="#A1E0FE"
                                                            strokeWidth="3"/>
                                                        <circle
                                                            className="circle circle-moves"
                                                            strokeDasharray="30%,4%"
                                                            cx="43%"
                                                            cy="29%"
                                                            r="100"
                                                            stroke="#A1E0FE"
                                                            strokeWidth="4"/>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </g>
                        </svg>
                    </div>
                    <div className="customer-box">
                        <div className="customer-pic">
                            <div className="angel"/>
                            <div className="customer-right"><WDAnalysis
                                customerPic={{
            consume: {
                high: 27,
                middle: 33,
                low: 40
            },
            cars: {
                haveCar: 46,
                noCar: 54
            },
            sex: {
                male: 59,
                female: 41
            },
            marriage: {
                yes: 38,
                no: 62
            },
            age: {
                18: 0.01,
                24: 0.2,
                34: 0.55,
                44: 0.17,
                45: 0.25
            }
        }}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}
export default customerPic;
