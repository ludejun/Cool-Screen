import React, {Component} from 'react';
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
                                <mpath xlinkHref="#circlePath" />
                            </animateMotion>
                        </circle>
                    </svg>}
                </div>
                <div className="bar-container-1 bar-container">
                    <div className="angel-style left-top-angel">
                        <AngelAside />
                    </div>
                    <div className="angel-style rigth-top-angel">
                        <AngelAside />
                    </div>
                    <div className="angel-style left-bottom-angel">
                        <AngelAside color="#074ac5"/>
                    </div>
                    <div className="angel-style right-bottom-angel">
                        <AngelAside color="#074ac5"/>
                    </div>
                </div>
                <div className="bar-container-2 bar-container">
                    <div className="angel-style left-top-angel">
                        <AngelAside />
                    </div>
                    <div className="angel-style rigth-top-angel">
                        <AngelAside />
                    </div>
                    <div className="angel-style left-bottom-angel">
                        <AngelAside color="#074ac5"/>
                    </div>
                    <div className="angel-style right-bottom-angel">
                        <AngelAside color="#074ac5"/>
                    </div>
                </div>
                <div className="bar-container-3 bar-container">
                    <div className="angel-style left-top-angel">
                        <AngelAside />
                    </div>
                    <div className="angel-style rigth-top-angel">
                        <AngelAside />
                    </div>
                    <div className="angel-style left-bottom-angel">
                        <AngelAside color="#074ac5"/>
                    </div>
                    <div className="angel-style right-bottom-angel">
                        <AngelAside color="#074ac5"/>
                    </div>
                </div>
            </div>
        </div>
    }

}