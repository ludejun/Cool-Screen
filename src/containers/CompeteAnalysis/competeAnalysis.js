import React, {Component} from 'react';
import {BgAnimation, WDCurve} from '../../components';
import HeaderTitle from '../Layout/HeaderTitle';
import './competeAnalysis.less';

class CompeteAnalysis extends Component {
    constructor() {
        super();
        this.config = {
            "plaza": {
                "baidu_lng": 114.275174,
                "baidu_lat": 30.616155,
                "name": "武汉菱角湖万达广场",
                "gaode_lng": 114.268695,
                "gaode_lat": 30.610074,
                "address": "唐家墩路5-1号"
            },
            "toPlazas": [
                {
                    "baidu_lng": 114.277674,
                    "baidu_lat": 30.585788,
                    "project_name": "武汉国际广场购物中心",
                    "ratio": 0.22
                }, {
                    "baidu_lng": 114.267519,
                    "baidu_lat": 30.621944,
                    "project_name": "大武汉1911",
                    "ratio": 0.22
                }, {
                    "baidu_lng": 114.276443,
                    "baidu_lat": 30.601023,
                    "project_name": "新世界百货(国贸店)",
                    "ratio": 0.18
                }, {
                    "baidu_lng": 114.276327,
                    "baidu_lat": 30.588259,
                    "project_name": "武汉武商广场",
                    "ratio": 0.17
                }, {
                    "baidu_lng": 114.268583,
                    "baidu_lat": 30.629511,
                    "project_name": "武汉新唐万科广场",
                    "ratio": 0.15
                }, {
                    "baidu_lng": 114.273658,
                    "baidu_lat": 30.574579,
                    "project_name": "武汉凯德广场·武胜",
                    "ratio": 0.14
                }, {
                    "baidu_lng": 114.218241,
                    "baidu_lat": 30.571169,
                    "project_name": "武汉海天欢乐购",
                    "ratio": 0.11
                }, {
                    "baidu_lng": 114.404056,
                    "baidu_lat": 30.514846,
                    "project_name": "武汉流行视窗购物广场",
                    "ratio": 0.1
                }, {
                    "baidu_lng": 114.217298,
                    "baidu_lat": 30.567088,
                    "project_name": "武汉21世纪购物中心",
                    "ratio": 0.1
                }, {
                    "baidu_lng": 114.338154,
                    "baidu_lat": 30.543097,
                    "project_name": "武汉中商广场购物中心",
                    "ratio": 0.1
                }
            ],
            "inPlazas": [
                {
                    "baidu_lng": 114.267519,
                    "baidu_lat": 30.621944,
                    "project_name": "大武汉1911",
                    "ratio": 0.42
                }, {
                    "baidu_lng": 114.268583,
                    "baidu_lat": 30.629511,
                    "project_name": "武汉新唐万科广场",
                    "ratio": 0.24
                }, {
                    "baidu_lng": 114.261875,
                    "baidu_lat": 30.60936,
                    "project_name": "武汉欧亚达城市生活广场",
                    "ratio": 0.22
                }, {
                    "baidu_lng": 114.276443,
                    "baidu_lat": 30.601023,
                    "project_name": "新世界百货(国贸店)",
                    "ratio": 0.21
                }, {
                    "baidu_lng": 114.261875,
                    "baidu_lat": 30.609372,
                    "project_name": "武汉泛海城市广场购物中心",
                    "ratio": 0.2
                }, {
                    "baidu_lng": 114.261863,
                    "baidu_lat": 30.60947,
                    "project_name": "泛海城市广场",
                    "ratio": 0.19
                }, {
                    "baidu_lng": 114.286379,
                    "baidu_lat": 30.670931,
                    "project_name": "武汉海昌海街",
                    "ratio": 0.16
                }, {
                    "baidu_lng": 114.359683,
                    "baidu_lat": 30.587324,
                    "project_name": "武汉福星惠誉·国际城",
                    "ratio": 0.15
                }, {
                    "baidu_lng": 114.217584,
                    "baidu_lat": 30.606261,
                    "project_name": "武汉江城壹号",
                    "ratio": 0.14
                }, {
                    "baidu_lng": 114.359448,
                    "baidu_lat": 30.588281,
                    "project_name": "武汉联发国际",
                    "ratio": 0.14
                }
            ]
        }
        this.color = [
            '#FDB933',
            '#D64F44',
            '#00A6AC',
            '#1D953F',
            '#E0861A',
            '#45B97C',
            '#F3715C',
            '#F26522',
            '#7FB80E',
            '#63C5FA'
        ];
    }
    labelFormatter(params) {
        return `${parseInt(params.value[2], 10)}%`;
    }
    render() {
        return <div className="compete-contatiner">
            <HeaderTitle title="数字商业: 广场竞品客流分析"/>
            <BgAnimation>
                <div className="competess-content">
                    <div className="competee-left">
                        <div className="compete-map">
                            <div className="cross-left-top cross-common">
                                <svg
                                    className="svg-container"
                                    viewBox="0 0 100 100"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg">
                                     <g strokeWidth="6">
                                        <polyline points="50,0 50 100" stroke="#80ECFE"/>
                                        <polyline points="0,50 100 50" stroke="#80ECFE"/>
                                    </g>
                                </svg>
                            </div>
                            <div className="cross-right-top cross-common">
                                <svg
                                    className="svg-container"
                                    viewBox="0 0 100 100"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg">
                                     <g strokeWidth="6">
                                        <polyline points="50,0 50 100" stroke="#80ECFE"/>
                                        <polyline points="0,50 100 50" stroke="#80ECFE"/>
                                    </g>
                                </svg>
                            </div>
                            <div className="cross-right-bottom cross-common">
                                <svg
                                    className="svg-container"
                                    viewBox="0 0 100 100"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg">
                                     <g strokeWidth="6">
                                        <polyline points="50,0 50 100" stroke="#80ECFE"/>
                                        <polyline points="0,50 100 50" stroke="#80ECFE"/>
                                    </g>
                                </svg>
                            </div>
                            <div className="cross-left-bottom cross-common">
                                <svg
                                    className="svg-container"
                                    viewBox="0 0 100 100"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg">
                                     <g strokeWidth="6">
                                        <polyline points="50,0 50 100" stroke="#80ECFE"/>
                                        <polyline points="0,50 100 50" stroke="#80ECFE"/>
                                    </g>
                                </svg>
                            </div>
                            <WDCurve
                                projectName={'武汉菱角万达广场'}
                                radius={[2000, 5000, 10000]}
                                colors={this.color}
                                curveObj={this.config}
                                labelFormatter={this.labelFormatter}
                                style={{
                                height: '100%',
                                width: '100%'
                            }}
                                direction={'out'}/>
                        </div>
                    </div>
                    <div className="compete-right"></div>
                </div>
            </BgAnimation>
        </div>
    }
}
export default CompeteAnalysis;