import React, {Component} from 'react';
import './financial.less';
class Expect extends Component {
    constructor() {
        super();
        this.state = {
            leftWidth: null,
            leftHeight: null,
            content: null,
            purStyle: null,
            tagName: null
        };
        this.reverseArray = [];
        this.color = ['#1772F3', '#E9C969', '#E96A69', '#80EBFD'];
        this.colorShift = ['#E9C969', '#E96A69', '#80EBFD', '#1772F3'];
        this.filter = ['filter-10', 'filter-14', 'filter-12', 'filter-16'];
        this.offset = [0];
        this.lengthArray = [];
        this.offsetArray = [];
        this.contentArray = {
            'riskAttitude': {
                title: '风险态度',
                titleContent: '风险态度是个啥?',
                expects: [
                    {
                        content: '承担风险 求收益',
                        count: 45402,
                        percent: 0.3
                    }, {
                        content: '保本 适当波动',
                        count: 65423,
                        percent: 0.3
                    }, {
                        content: '低风险才求收益',
                        count: 453,
                        percent: 0.4
                    }
                ]
            },
            'shortExpects': {
                title: '短期期望',
                titleContent: '您对期限为半年的产品的投资态度是?',
                expects: [
                    {
                        content: '承担风险 求收益',
                        count: 45402,
                        percent: 0.4
                    }, {
                        content: '保本 适当波动',
                        count: 65423,
                        percent: 0.3
                    }, {
                        content: '低风险才求收益',
                        count: 453,
                        percent: 0.2
                    }, {
                        content: '低风险才求收益',
                        count: 453,
                        percent: 0.1
                    }
                ]
            },
            'investProject': {
                title: '投资目的',
                titleContent: '你为啥投资?',
                expects: [
                    {
                        content: '承担风险 求收益',
                        count: 45402,
                        percent: 0.3
                    }, {
                        content: '保本 适当波动',
                        count: 65423,
                        percent: 0.7
                    }
                ]
            },
            'experiencePre': {
                title: '经验偏好',
                titleContent: '以下哪项最能说明您的投资经验?',
                expects: [
                    {
                        content: '承担风险 求收益',
                        count: 45402,
                        percent: 0.2
                    }, {
                        content: '保本 适当波动',
                        count: 65423,
                        percent: 0.6
                    }, {
                        content: '低风险才求收益',
                        count: 453,
                        percent: 0.2
                    }
                ]
            },
            'investAge': {
                title: '投资年龄',
                titleContent: '多大开始的投资?',
                expects: [
                    {
                        content: '承担风险 求收益',
                        count: 45402,
                        percent: 0.3
                    }, {
                        content: '保本 适当波动',
                        count: 65423,
                        percent: 0.3
                    }, {
                        content: '低风险才求收益',
                        count: 453,
                        percent: 0.4
                    }
                ]
            },
            'targetLimit': {
                title: '目标期限',
                titleContent: '能接受的期限?',
                expects: [
                    {
                        content: '承担风险 求收益',
                        count: 45402,
                        percent: 0.3
                    }, {
                        content: '保本 适当波动',
                        count: 65423,
                        percent: 0.3
                    }, {
                        content: '低风险才求收益',
                        count: 453,
                        percent: 0.4
                    }
                ]
            }
        };
    }
    componentDidMount() {
        const svgDOM = this.refs.svgCon;
        const width = parseInt(window.getComputedStyle(svgDOM).width);
        const height = parseInt(window.getComputedStyle(svgDOM).height);
        this.setState({leftWidth: width, leftHeight: height});
        this.assembleData('shortExpects');
    }
    change = (key) => {
        return () => {
            this.assembleData(key);
        }
    }
    assembleData = (key)=>{
        this.reverseArray = [];
            this.offset = [0];
            this.lengthArray = [];
            this.offsetArray = [];
            this.contentArray[key].expects.forEach((it, index) => {
                const length = 700 * it.percent;
                this.lengthArray.push(length);
                const offsetX = this.offset.reduce((sum, value) => {
                        return sum + value;
                }, 0);
                this.offsetArray.push(offsetX);
                this.offset.push(length);
            });
            this.setState({content:this.contentArray[key]});
            for(let i = 0; i < this.contentArray[key].expects.length; i++){
                this.reverseArray.push(this.contentArray[key].expects[i]);
            }
            const pop = this.reverseArray.shift();
            this.reverseArray.push(pop);
            this.setState({tagName: key});
    }
    render() {
        return <div className="financial-contianer-j">
            {this.state.content && this
                .state
                .content
                .expects
                .map((it, index) => {
                    return <style key={index}>
                        {
                            `@keyframes jin-circle-dash-${
                                index
                            }
                            {
                                80% {
                                    stroke-dasharray:${
                                        it.percent * 700
                                    }
                                    ,700;
                                }
                                100% {
                                    stroke-dasharray: 0,700;
                                }
                            }
                            .jin-circle-dash-${
                                index
                            }
                            {
                                animation:jin-circle-dash-${
                                    index
                                }
                                6s linear infinite;
                                animation-direction: alternate-reverse;
                            }
                             `
                        }</style>;
                })
}
            <div ref={'svgCon'} className="financial-left">
                {this.state.leftHeight && <svg
                    className="financial-svg"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink">
                    <defs>
                        <rect
                            id="path-1"
                            x="20"
                            y="20"
                            width={this.state.leftWidth - 30}
                            height={this.state.leftHeight - 30}></rect>
                        <mask
                            id="mask-2"
                            maskContentUnits="userSpaceOnUse"
                            maskUnits="objectBoundingBox"
                            x="0"
                            y="0"
                            width="1203"
                            height="771"
                            fill="white">
                            <use xlinkHref="#path-1"></use>
                        </mask>
                    </defs>
                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g>
                            <g>
                                <use
                                    id="Rectangle-67"
                                    stroke="#2D78FF"
                                    mask="url(#mask-2)"
                                    strokeWidth="2"
                                    strokeDasharray="5"
                                    xlinkHref="#path-1"></use>
                                <polyline
                                    id="Path-935"
                                    stroke="#2E5DDD"
                                    strokeWidth="6"
                                    points="20,50 20,20 50,20 "></polyline>
                                <polyline
                                    id="Path-935-Copy-2"
                                    stroke="#2E5DDD"
                                    strokeWidth="6"
                                    points={`${this.state.leftWidth - 40},20 ${this.state.leftWidth - 10},20 ${this.state.leftWidth - 10},50`}></polyline>
                                <polyline
                                    id="Path-935-Copy"
                                    stroke="#2E5DDD"
                                    strokeWidth="6"
                                    points={`${this.state.leftWidth - 10},${this.state.leftHeight - 40} ${this.state.leftWidth - 10},${this.state.leftHeight - 10} ${this.state.leftWidth - 40},${this.state.leftHeight - 10}`}></polyline>
                                <polyline
                                    id="Path-935-Copy-3"
                                    stroke="#2E5DDD"
                                    strokeWidth="6"
                                    points={`20,${this.state.leftHeight - 40} 20,${this.state.leftHeight - 10} 50,${this.state.leftHeight - 10}`}></polyline>
                            </g>
                        </g>
                    </g>
                </svg>}
                {this.state.content && <svg
                    className="svg-content"
                    viewBox="0 0 1142 722"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink">
                    <defs>
                        <path
                            d="M0.853824342 22.2104094L12.2800352 10.7841985 378.506396 10.7841985 388.735811 0.554784091"
                            id="circle-001"/>
                        <linearGradient
                            x1="100%"
                            y1="0%"
                            x2="0.381544247%"
                            y2="100.628383%"
                            id="linearGradient-1">
                            <stop stopColor="#2DABF8" offset="0%"></stop>
                            <stop stopColor="#2443DC" offset="100%"></stop>
                        </linearGradient>
                        <polygon
                            id="path-2"
                            points="48.9708405 64 1093.02916 64 1142 112.937908 1142 655.099996 1094 703 694.172558 703 674.954204 722 468.093489 722 449.011202 703 48 703 0 655.0787 0 113.003078"></polygon>
                        <filter
                            x="-6.3%"
                            y="-10.9%"
                            width="112.6%"
                            height="121.9%"
                            filterUnits="objectBoundingBox"
                            id="filter-3">
                            <feGaussianBlur stdDeviation="72" in="SourceAlpha" result="shadowBlurInner1"></feGaussianBlur>
                            <feOffset dx="0" dy="0" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
                            <feComposite
                                in="shadowOffsetInner1"
                                in2="SourceAlpha"
                                operator="arithmetic"
                                k2="-1"
                                k3="1"
                                result="shadowInnerInner1"></feComposite>
                            <feColorMatrix
                                values="0 0 0 0 0.151332197   0 0 0 0 0.353247766   0 0 0 0 0.972948554  0 0 0 0.431357563 0"
                                type="matrix"
                                in="shadowInnerInner1"></feColorMatrix>
                        </filter>
                        <linearGradient
                            x1="65.0930579%"
                            y1="-64.3376306%"
                            x2="-43.5964624%"
                            y2="177.536316%"
                            id="linearGradient-4">
                            <stop stopColor="#2DABF8" offset="0%"></stop>
                            <stop stopColor="#2443DC" offset="100%"></stop>
                        </linearGradient>
                        <polyline id="path-5" points="77 59 127.323498 0 332.837859 0 383 59"></polyline>
                        <linearGradient
                            x1="50%"
                            y1="0%"
                            x2="50%"
                            y2="98.5112404%"
                            id="linearGradient-6">
                            <stop stopColor="#0F93F6" offset="0%"></stop>
                            <stop stopColor="#035AE3" offset="100%"></stop>
                        </linearGradient>
                        <linearGradient
                            x1="50%"
                            y1="0%"
                            x2="50%"
                            y2="97.8296397%"
                            id="linearGradient-7">
                            <stop stopColor="#0E8CF4" offset="0%"></stop>
                            <stop stopColor="#035AE3" offset="100%"></stop>
                        </linearGradient>
                        <linearGradient
                            x1="60.4127586%"
                            y1="0%"
                            x2="60.4127608%"
                            y2="100%"
                            id="linearGradient-8">
                            <stop stopColor="#2DA1F5" offset="0%"></stop>
                            <stop stopColor="#2446DD" offset="100%"></stop>
                        </linearGradient>
                        <path
                            d="M90.8968733,256.085046 L103.63614,221.08129 C112.347833,223.748225 121.597755,225.183246 131.182815,225.183246 C140.767876,225.183246 150.017798,223.748225 158.729491,221.08129 L171.468757,256.085046 C158.775388,260.177095 145.237207,262.387435 131.182815,262.387435 C117.128424,262.387435 103.590242,260.177095 90.8968733,256.085046 Z"
                            id="path-9"></path>
                        <filter
                            x="-41.0%"
                            y="-79.9%"
                            width="181.9%"
                            height="259.8%"
                            filterUnits="objectBoundingBox"
                            id="filter-10">
                            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                            <feGaussianBlur
                                stdDeviation="11"
                                in="shadowOffsetOuter1"
                                result="shadowBlurOuter1"></feGaussianBlur>
                            <feColorMatrix
                                values="0 0 0 0 0.0402571165   0 0 0 0 0.333389556   0 0 0 0 0.804634354  0 0 0 1 0"
                                type="matrix"
                                in="shadowBlurOuter1"></feColorMatrix>
                        </filter>
                        <path
                            d="M7.23066624,174.257412 C2.54561811,160.768272 0,146.2783 0,131.193717 C0,60.3763837 56.1055467,2.66429168 126.287934,0.0896399114 L126.287934,37.3294756 C76.6583257,39.8761636 37.2010969,80.9266927 37.2010969,131.193717 C37.2010969,141.393262 38.8256046,151.21335 41.8299747,160.409318 L7.23066624,174.257412 Z"
                            id="path-11"></path>
                        <filter
                            x="-26.1%"
                            y="-18.9%"
                            width="152.3%"
                            height="137.9%"
                            filterUnits="objectBoundingBox"
                            id="filter-12">
                            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                            <feGaussianBlur
                                stdDeviation="11"
                                in="shadowOffsetOuter1"
                                result="shadowBlurOuter1"></feGaussianBlur>
                            <feColorMatrix
                                values="0 0 0 0 0.82124256   0 0 0 0 0.212164176   0 0 0 0 0.207368283  0 0 0 1 0"
                                type="matrix"
                                in="shadowBlurOuter1"></feColorMatrix>
                        </filter>
                        <path
                            d="M46.1670851,171.309991 C55.9917793,192.097728 73.215074,208.7034 94.4384236,217.728179 L81.6987671,252.733007 C50.4428607,239.992268 25.2041628,215.543008 11.4297813,184.832788 L46.1670851,171.309991 Z"
                            id="path-13"></path>
                        <filter
                            x="-39.8%"
                            y="-40.5%"
                            width="179.5%"
                            height="181.1%"
                            filterUnits="objectBoundingBox"
                            id="filter-14">
                            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                            <feGaussianBlur
                                stdDeviation="11"
                                in="shadowOffsetOuter1"
                                result="shadowBlurOuter1"></feGaussianBlur>
                            <feColorMatrix
                                values="0 0 0 0 0.82124256   0 0 0 0 0.703326152   0 0 0 0 0.207368283  0 0 0 1 0"
                                type="matrix"
                                in="shadowBlurOuter1"></feColorMatrix>
                        </filter>
                        <path
                            d="M180.666864,252.733007 L167.927207,217.728179 C201.572168,203.421374 225.164534,170.062921 225.164534,131.193717 C225.164534,80.9266927 185.707305,39.8761636 136.077763,37.329479 L136.077697,0.0896399114 C206.260084,2.66429168 262.365631,60.3763837 262.365631,131.193717 C262.365631,186.141112 228.588647,233.198813 180.666864,252.733007 L180.666864,252.733007 Z"
                            id="path-15"></path>
                        <filter
                            x="-29.3%"
                            y="-13.9%"
                            width="158.6%"
                            height="129.3%"
                            filterUnits="objectBoundingBox"
                            id="filter-16">
                            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                            <feGaussianBlur
                                stdDeviation="11"
                                in="shadowOffsetOuter1"
                                result="shadowBlurOuter1"></feGaussianBlur>
                            <feColorMatrix
                                values="0 0 0 0 0.158687476   0 0 0 0 0.688803165   0 0 0 0 0.777981505  0 0 0 1 0"
                                type="matrix"
                                in="shadowBlurOuter1"
                                result="shadowMatrixOuter1"></feColorMatrix>
                            <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter2"></feOffset>
                            <feGaussianBlur
                                stdDeviation="2"
                                in="shadowOffsetOuter2"
                                result="shadowBlurOuter2"></feGaussianBlur>
                            <feColorMatrix
                                values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"
                                type="matrix"
                                in="shadowBlurOuter2"
                                result="shadowMatrixOuter2"></feColorMatrix>
                            <feMerge>
                                <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                                <feMergeNode in="shadowMatrixOuter2"></feMergeNode>
                            </feMerge>
                        </filter>
                        <polygon
                            id="path-17"
                            points="0 13.7068063 14.1016643 0 249.841566 0 249.841566 115.528796 236.275065 129.235602 0 129.235602"></polygon>
                        <filter
                            x="-24.6%"
                            y="-47.6%"
                            width="149.2%"
                            height="195.2%"
                            filterUnits="objectBoundingBox"
                            id="filter-18">
                            <feGaussianBlur stdDeviation="61.5" in="SourceAlpha" result="shadowBlurInner1"></feGaussianBlur>
                            <feOffset dx="0" dy="0" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
                            <feComposite
                                in="shadowOffsetInner1"
                                in2="SourceAlpha"
                                operator="arithmetic"
                                k2="-1"
                                k3="1"
                                result="shadowInnerInner1"></feComposite>
                            <feColorMatrix
                                values="0 0 0 0 0.108029056   0 0 0 0 0.343864701   0 0 0 0 0.916294643  0 0 0 0.264832428 0"
                                type="matrix"
                                in="shadowInnerInner1"></feColorMatrix>
                        </filter>
                        <polygon
                            id="path-19"
                            points="0 13.7068063 14.1016643 0 276.35649 0 276.35649 115.528796 262.789988 129.235602 0 129.235602"></polygon>
                        <filter
                            x="-22.3%"
                            y="-47.6%"
                            width="144.5%"
                            height="195.2%"
                            filterUnits="objectBoundingBox"
                            id="filter-20">
                            <feGaussianBlur stdDeviation="61.5" in="SourceAlpha" result="shadowBlurInner1"></feGaussianBlur>
                            <feOffset dx="0" dy="0" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
                            <feComposite
                                in="shadowOffsetInner1"
                                in2="SourceAlpha"
                                operator="arithmetic"
                                k2="-1"
                                k3="1"
                                result="shadowInnerInner1"></feComposite>
                            <feColorMatrix
                                values="0 0 0 0 0.108029056   0 0 0 0 0.343864701   0 0 0 0 0.916294643  0 0 0 0.264832428 0"
                                type="matrix"
                                in="shadowInnerInner1"></feColorMatrix>
                        </filter>
                        <polygon
                            id="path-21"
                            points="0 13.7068063 14.1016643 0 273.35649 0 273.35649 115.528796 259.789988 129.235602 0 129.235602"></polygon>
                        <filter
                            x="-22.5%"
                            y="-47.6%"
                            width="145.0%"
                            height="195.2%"
                            filterUnits="objectBoundingBox"
                            id="filter-22">
                            <feGaussianBlur stdDeviation="61.5" in="SourceAlpha" result="shadowBlurInner1"></feGaussianBlur>
                            <feOffset dx="0" dy="0" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
                            <feComposite
                                in="shadowOffsetInner1"
                                in2="SourceAlpha"
                                operator="arithmetic"
                                k2="-1"
                                k3="1"
                                result="shadowInnerInner1"></feComposite>
                            <feColorMatrix
                                values="0 0 0 0 0.108029056   0 0 0 0 0.343864701   0 0 0 0 0.916294643  0 0 0 0.264832428 0"
                                type="matrix"
                                in="shadowInnerInner1"></feColorMatrix>
                        </filter>
                        <polygon
                            id="path-23"
                            points="0 13.7068063 14.1016643 0 296.02011 0 296.02011 115.528796 282.453608 129.235602 0 129.235602"></polygon>
                        <filter
                            x="-20.8%"
                            y="-47.6%"
                            width="141.6%"
                            height="195.2%"
                            filterUnits="objectBoundingBox"
                            id="filter-24">
                            <feGaussianBlur stdDeviation="61.5" in="SourceAlpha" result="shadowBlurInner1"></feGaussianBlur>
                            <feOffset dx="0" dy="0" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
                            <feComposite
                                in="shadowOffsetInner1"
                                in2="SourceAlpha"
                                operator="arithmetic"
                                k2="-1"
                                k3="1"
                                result="shadowInnerInner1"></feComposite>
                            <feColorMatrix
                                values="0 0 0 0 0.108029056   0 0 0 0 0.343864701   0 0 0 0 0.916294643  0 0 0 0.264832428 0"
                                type="matrix"
                                in="shadowInnerInner1"></feColorMatrix>
                        </filter>
                        <linearGradient
                            x1="50%"
                            y1="-41.4943692%"
                            x2="50%"
                            y2="97.7130115%"
                            id="linearGradient-25">
                            <stop stopColor="#15AEFF" offset="0%"></stop>
                            <stop stopColor="#0258E3" offset="100%"></stop>
                        </linearGradient>
                    </defs>
                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g transform="translate(-79.000000, -219.000000)">
                            <g transform="translate(79.000000, 219.000000)">
                                <g id="Rectangle-63">
                                    <use
                                        fillOpacity="0.425922781"
                                        fill="#062062"
                                        fillRule="evenodd"
                                        xlinkHref="#path-2"></use>
                                    <use fill="black" fillOpacity="1" filter="url(#filter-3)" xlinkHref="#path-2"></use>
                                    <path
                                        stroke="url(#linearGradient-1)"
                                        strokeWidth="3"
                                        d="M49.59245,65.5 L1092.40813,65.5 L1140.5,113.559524 L1140.5,654.477759 L1093.3796,701.5 L694.172558,701.5 L693.556252,701.5 L693.117975,701.933297 L674.337898,720.5 L468.712911,720.5 L450.069568,701.93705 L449.630625,701.5 L449.011202,701.5 L48.6205995,701.5 L1.5,654.456658 L1.5,113.624109 L49.59245,65.5 Z"></path>
                                </g>
                                <text
                                    fontFamily="PingFangSC-Medium, PingFang SC"
                                    fontSize="36"
                                    fontWeight="400"
                                    fill="#FFFFFF">
                                    <tspan x="303" y="152">{this.state.content.titleContent}</tspan>
                                </text>
                                <g id="Group-4" transform="translate(342.000000, 0.000000)">
                                    <g id="Rectangle">
                                        <use
                                            fillOpacity="0.361865942"
                                            fill="#0B3396"
                                            fillRule="evenodd"
                                            xlinkHref="#path-5"></use>
                                        <path
                                            stroke="url(#linearGradient-4)"
                                            strokeWidth="2"
                                            d="M79.1672875,58 L127.784904,1 L332.375491,1 L380.83722,58 L79.1672875,58 Z"></path>
                                    </g>
                                    <g id="Group-3" transform="translate(146.000000, 10.000000)">
                                        <text
                                            fontFamily="PingFangSC-Semibold, PingFang SC"
                                            fontSize="30"
                                            fontWeight="500"
                                            fill="#FFFFFF">
                                            <tspan x="54" y="32">{this.state.content.title}</tspan>
                                        </text>
                                        <g id="Group-21" transform="translate(0.000000, 4.000000)">
                                            <path
                                                d="M21,33 L1,33 L1,17.9965015 C1,13.0281461 5.03055526,9 10.0021973,9 L11.9978027,9 C16.9718831,9 21,13.0241465 21,17.9965015 L21,33 Z"
                                                id="Rectangle-6"
                                                stroke="url(#linearGradient-6)"
                                                strokeWidth="2"></path>
                                            <path
                                                d="M6.04157575,1 L15.9584243,1 L12.0790292,6 L9.92097078,6 L6.04157575,1 Z"
                                                id="Rectangle-7"
                                                stroke="url(#linearGradient-6)"
                                                strokeWidth="2"></path>
                                            <polygon
                                                id="Path-936"
                                                fill="url(#linearGradient-7)"
                                                points="11.9863078 12.2719192 6.44365383 19.0664711 11.9750872 22.7032267 8.17226684 28.7770958 16.0359813 21.811029 9.88565746 19.0069521"></polygon>
                                        </g>
                                    </g>
                                    <polygon
                                        id="Path-920"
                                        fill="url(#linearGradient-8)"
                                        opacity="0.373754529"
                                        points="353 18 388.015347 59 459 59 424.994189 18"></polygon>
                                    <polygon
                                        id="Path-920-Copy-2"
                                        fill="url(#linearGradient-8)"
                                        opacity="0.373754529"
                                        transform="translate(53.000000, 38.500000) scale(-1, 1) translate(-53.000000, -38.500000) "
                                        points="-2.84217094e-14 18 35.0153467 59 106 59 71.9941895 18"></polygon>
                                </g>
                                <g id="Group-11" transform="translate(57.000000, 263.000000)">
                                    <g id="Group-10-Copy" transform="translate(367.632541, 39.162304)">
                                        {this.state.content && this
                                            .state
                                            .content
                                            .expects
                                            .map((it, index) => {
                                                return <g key={index+Math.random()}>
                                                    <circle
                                                        className={`jin-circle-dash-${index}`}
                                                        filter={`url(#${this.filter[index]})`}
                                                        cx="132"
                                                        cy="132"
                                                        r="110"
                                                        strokeDasharray={`${this.lengthArray[index]},700`}
                                                        strokeDashoffset={- this.offsetArray[index]}
                                                        stroke={`${this.color[index]}`}
                                                        strokeWidth="40"/>
                                                    <circle
                                                        className={`jin-circle-dash-${index}`}
                                                        cx="132"
                                                        cy="132"
                                                        r="110"
                                                        strokeDasharray={`${this.lengthArray[index]},700`}
                                                        strokeDashoffset={- this.offsetArray[index]}
                                                        stroke={`${this.color[index]}`}
                                                        strokeWidth="40"/>
                                                </g>
                                            })
                                        }
                                        {this.offsetArray.length > 0 && this
                                            .offsetArray
                                            .map((it, index) => {
                                                const x = Math.cos((it + 40 + this.lengthArray[index]) / 110) * 110 + 132;
                                                const y = Math.sin((it + 40 + this.lengthArray[index]) / 110) * 110 + 132;
                                                const flagX = (x - 132) / Math.abs(x - 132);
                                                const flagY = (y - 132) / Math.abs(y - 132);
                                                let points = `${x},${y} ${x + flagX * 60},${y + flagY * 60} ${x + flagX * 60 + flagX * 70},${y + flagY * 60}`
                                                const xSpan = 220;
                                                const ySpan = 100;
                                                return <g key={index+Math.random()}>
                                                    <polyline
                                                        className="content-box"
                                                        stroke="#2870E8"
                                                        strokeWidth="3"
                                                        points={`${x + flagX * 60 + flagX * 70},${y + flagY * 30} 
                                                                 ${x + flagX * 60 + flagX * 70 + flagX * xSpan - flagX * 10},${y + flagY * 30} 
                                                                 ${x + flagX * 60 + flagX * 70 + flagX * xSpan},${y + flagY * 30 + flagY * 10} 
                                                                 ${x + flagX * 60 + flagX * 70 + flagX * xSpan},${y + flagY * 30 + flagY * ySpan} 
                                                                 ${x + flagX * 60 + flagX * 70 + flagX * 10},${y + flagY * 30 + flagY * ySpan} 
                                                                 ${x + flagX * 60 + flagX * 70},${y + flagY * 30 + flagY * ySpan - flagY * 10} 
                                                                 ${x + flagX * 60 + flagX * 70},${y + flagY * 30}`}/>
                                                    
                                                    <circle className="from-circle" cx={x} cy={y} r="5" fill="#fff"/>
                                                    <polyline strokeDasharray="0,400" className="to-line" points={points} stroke="#fff"/>
                                                    <circle opacity="0" className="to-circle-quiet" cx={x + flagX * 60 + flagX * 70} cy={y + flagY * 60} r="4" fill="#fff"/>
                                                    <circle
                                                        className="circle-bubble-jin"
                                                        cx={x + flagX * 60 + flagX * 70}
                                                        cy={y + flagY * 60}
                                                        r="10"
                                                        stroke="#3D83FF"/>
                                                    {
                                                        flagX > 0 ? <text className="text-appear" fill="#fff" x={x + flagX * 60 + flagX * 70 + 20} y={flagY > 0 ? y + flagY * 60 + 10:y + flagY * 90}>{this.reverseArray[index].content}</text>:
                                                                    <text className="text-appear" fill="#fff" x={x + flagX * 60 + flagX * 70 + flagX * xSpan + 14} y={flagY > 0 ? y + flagY * 30 + flagY * ySpan - 60 :y + flagY * 30 + flagY * ySpan + 35 }>{this.reverseArray[index].content}</text>
                                                    }
                                                    {
                                                        flagX > 0 ? <text className="text-appear" fill={this.colorShift[index]} x={x + flagX * 60 + flagX * 70 + 20} y={flagY > 0 ? y + flagY * 60 + 60:y + flagY * 90 + 50 }>{`${this.reverseArray[index].percent * 100}%`}</text>:
                                                                    <text className="text-appear" fill={this.colorShift[index]} x={x + flagX * 60 + flagX * 70 + flagX * xSpan + 14} y={flagY > 0 ? y + flagY * 30 + flagY * ySpan-10 :y + flagY * 30 + flagY * ySpan + 90 }>{`${this.reverseArray[index].percent * 100}%`}</text>
                                                    }
                                                </g>
                                            })
}
                                        <path
                                            d="M145.100433,149.001113 C145.739276,149.001113 146.255396,148.445855 146.27538,147.737309 L146.287888,147.296555 L146.306251,147.296555 C146.323382,146.975662 146.331358,146.690493 146.331358,146.419714 C146.332094,138.809058 142.088456,132.070485 135.52096,129.252658 L134.784391,128.936471 L135.434361,128.46833 C138.579457,126.202523 140.457101,122.420829 140.457101,118.352446 C140.457101,111.647544 135.39867,106.192753 129.181042,106.192753 C122.963468,106.192753 117.905186,111.647544 117.905186,118.352446 C117.905186,122.42058 119.782781,126.202274 122.927531,128.46833 L123.577502,128.936471 L122.841034,129.252658 C116.27398,132.070437 112.030341,138.808813 112.030341,146.419224 C112.030341,146.68868 112.039005,146.969672 112.057368,147.296804 L112.086069,147.296804 L112.088874,147.750417 C112.088874,148.469266 112.618333,149.054223 113.269288,149.054223 C113.919651,149.054223 144.462081,149.001113 145.100433,149.001113 Z M142.204684,130.034032 C145.156849,130.385113 147.830032,131.906204 149.744107,134.325788 C151.650553,136.735994 152.700655,139.900336 152.700655,143.235879 C152.700655,143.968278 153.24016,144.564079 153.903076,144.564079 C154.547533,144.564079 155.072808,144.003814 155.098849,143.289038 L155.102197,143.248345 C155.103179,143.241179 155.104117,143.23421 155.105295,143.227634 C155.102197,136.89639 151.570651,131.295433 146.107262,128.956841 L145.368827,128.640851 L146.020673,128.17222 C148.63542,126.293323 150.196523,123.153079 150.196523,119.771988 C150.196523,115.08999 147.268234,111.076185 143.064222,109.97612 L143.039114,109.98672 L142.924065,109.974892 C142.899202,109.972489 142.874393,109.968906 142.849531,109.965026 C142.839683,109.963654 142.829494,109.961687 142.819353,109.960709 C142.147037,109.963112 141.600787,110.568094 141.600787,111.311289 C141.600787,111.978849 142.037005,112.537302 142.637751,112.63934 L142.693426,112.648712 L142.744873,112.671294 C142.804637,112.697453 142.891919,112.726606 143.004356,112.757825 C143.028232,112.764348 143.045364,112.770142 143.054769,112.773433 L143.054769,112.773433 C145.816124,113.781177 147.671416,116.556009 147.671416,119.678142 C147.671416,123.166576 145.366859,126.1609 142.178836,126.834106 L142.128871,126.86321 L142.022288,126.870376 C141.26766,126.921865 140.676568,127.609058 140.676568,128.434952 C140.676568,129.281811 141.282135,129.970916 142.055127,130.004338 L142.155456,130.008659 L142.204684,130.034032 L142.204684,130.034032 Z"
                                            id="Shape-Copy-3"
                                            fill="#FFFFFF"
                                            className="flash-people"
                                            fillRule="nonzero"></path>
                                    </g>
                                </g>
                                <text
                                    id="Q"
                                    fill="url(#linearGradient-25)"
                                    fontFamily="PingFangSC-Medium, PingFang SC"
                                    fontSize="36"
                                    fontWeight="400">
                                    <tspan x="226" y="152">Q</tspan>
                                </text>
                                <path d="M42,192 L1100,192" id="Path-926" stroke="#3A84EA" strokeWidth="2"></path>
                                <rect
                                    id="Rectangle-60"
                                    fillOpacity="0.508208786"
                                    fill="#2481FF"
                                    x="270"
                                    y="187"
                                    width="579"
                                    height="11"></rect>
                                <circle
                                    id="Oval-3"
                                    className="dotted-circle"
                                    strokeOpacity="0.515313632"
                                    stroke="#3493F0"
                                    strokeWidth="14"
                                    strokeDasharray="4"
                                    cx="555"
                                    cy="434"
                                    r="153"></circle>
                                <circle
                                    id="Oval-3-Copy"
                                    className="flash-circle"
                                    stroke="#3493F0"
                                    strokeWidth="2"
                                    cx="555"
                                    cy="434"
                                    r="169"></circle>
                                <g id="Group-6" transform="translate(29.000000, 73.000000)">
                                    <polygon id="Rectangle-62" fill="#3A84EA" points="1084 35 1068 35 1068 19"></polygon>
                                    <polygon
                                        id="Rectangle-62-Copy"
                                        fill="#3A84EA"
                                        transform="translate(8.000000, 27.000000) scale(-1, 1) translate(-8.000000, -27.000000) "
                                        points="16 35 0 35 0 19"></polygon>
                                    <g id="Group-5" transform="translate(26.000000, 0.000000)">
                                        <polyline
                                            id="Path-932"
                                            stroke="#3A84EA"
                                            points="0.853824342 22.2104094 12.2800352 10.7841985 378.506396 10.7841985 388.735811 0.554784091"></polyline>
                                        <circle id="Oval-3" fill="#3A84EA" cx="27" cy="11" r="3"></circle>
                                        <circle id="Oval-3-Copy-2" fill="#3A84EA" cx="42" cy="11" r="3"></circle>
                                        <circle id="Oval-3-Copy-3" fill="#3A84EA" cx="57" cy="11" r="3"></circle>
                                        <path
                                            className="poly-move"
                                            d="M18,18 L93.5269388,18"
                                            id="Path-933"
                                            stroke="#3A84EA"></path>
                                        <path
                                            className="poly-move-1"
                                            d="M383.830103,5.57976618 L323.89957,5.57976618"
                                            id="Path-934"
                                            stroke="#3A84EA"></path>
                                    </g>
                                    <g
                                        id="Group-5-Copy-2"
                                        transform="translate(863.500000, 11.500000) scale(-1, 1) translate(-863.500000, -11.500000) translate(669.000000, 0.000000)">
                                        <polyline
                                            id="Path-932"
                                            stroke="#3A84EA"
                                            points="0.853824342 22.2104094 12.2800352 10.7841985 378.506396 10.7841985 388.735811 0.554784091"></polyline>
                                        <circle id="Oval-3" fill="#3A84EA" cx="27" cy="11" r="3"></circle>
                                        <circle id="Oval-3-Copy-2" fill="#3A84EA" cx="42" cy="11" r="3"></circle>
                                        <circle id="Oval-3-Copy-3" fill="#3A84EA" cx="57" cy="11" r="3"></circle>
                                        <path
                                            className="poly-move"
                                            d="M18,18 L93.5269388,18"
                                            id="Path-933"
                                            stroke="#3A84EA"></path>
                                        <path
                                            className="poly-move-1"
                                            d="M383.830103,5.57976618 L323.89957,5.57976618"
                                            id="Path-934"
                                            stroke="#3A84EA"></path>
                                    </g>
                                </g>
                                <g
                                    id="Group-6-Copy-2"
                                    transform="translate(571.000000, 676.500000) scale(1, -1) translate(-571.000000, -676.500000) translate(29.000000, 659.000000)">
                                    <polygon id="Rectangle-62" fill="#3A84EA" points="1084 35 1068 35 1068 19"></polygon>
                                    <polygon
                                        id="Rectangle-62-Copy"
                                        fill="#3A84EA"
                                        transform="translate(8.000000, 27.000000) scale(-1, 1) translate(-8.000000, -27.000000) "
                                        points="16 35 0 35 0 19"></polygon>
                                    <g id="Group-5" transform="translate(26.000000, 0.000000)">
                                        <polyline
                                            id="Path-932"
                                            stroke="#3A84EA"
                                            points="0.853824342 22.2104094 12.2800352 10.7841985 378.506396 10.7841985 388.735811 0.554784091"></polyline>
                                        <circle id="Oval-3" fill="#3A84EA" cx="27" cy="11" r="3"></circle>
                                        <circle id="Oval-3-Copy-2" fill="#3A84EA" cx="42" cy="11" r="3"></circle>
                                        <circle id="Oval-3-Copy-3" fill="#3A84EA" cx="57" cy="11" r="3"></circle>
                                        <path
                                            className="poly-move"
                                            d="M18,18 L93.5269388,18"
                                            id="Path-933"
                                            stroke="#3A84EA"></path>
                                        <path
                                            className="poly-move-1"
                                            d="M383.830103,5.57976618 L323.89957,5.57976618"
                                            id="Path-934"
                                            stroke="#3A84EA"></path>
                                    </g>
                                    <g
                                        id="Group-5-Copy-2"
                                        transform="translate(863.500000, 11.500000) scale(-1, 1) translate(-863.500000, -11.500000) translate(669.000000, 0.000000)">
                                        <polyline
                                            id="Path-932"
                                            stroke="#3A84EA"
                                            points="0.853824342 22.2104094 12.2800352 10.7841985 378.506396 10.7841985 388.735811 0.554784091"></polyline>
                                        <circle id="Oval-3" fill="#3A84EA" cx="27" cy="11" r="3"></circle>
                                        <circle id="Oval-3-Copy-2" fill="#3A84EA" cx="42" cy="11" r="3"></circle>
                                        <circle id="Oval-3-Copy-3" fill="#3A84EA" cx="57" cy="11" r="3"></circle>
                                        <path
                                            className="poly-move"
                                            d="M18,18 L93.5269388,18"
                                            id="Path-933"
                                            stroke="#3A84EA"></path>
                                        <path
                                            className="poly-move-1"
                                            d="M383.830103,5.57976618 L323.89957,5.57976618"
                                            id="Path-934"
                                            stroke="#3A84EA"></path>
                                    </g>
                                </g>
                                <g
                                    id="Group-7"
                                    className="run-circle-flash"
                                    transform="translate(478.000000, 701.000000)"
                                    fill="#2873E9">
                                    <circle id="Oval-50" cx="2.5" cy="2.5" r="2.5"></circle>
                                    <circle id="Oval-50-Copy" cx="17.5" cy="2.5" r="2.5"></circle>
                                    <circle id="Oval-50-Copy-2" cx="32.5" cy="2.5" r="2.5"></circle>
                                    <circle id="Oval-50-Copy-3" cx="47.5" cy="2.5" r="2.5"></circle>
                                    <circle id="Oval-50-Copy-4" cx="62.5" cy="2.5" r="2.5"></circle>
                                    <circle id="Oval-50-Copy-6" cx="77.5" cy="2.5" r="2.5"></circle>
                                    <circle id="Oval-50-Copy-5" cx="92.5" cy="2.5" r="2.5"></circle>
                                    <circle id="Oval-50-Copy-7" cx="107.5" cy="2.5" r="2.5"></circle>
                                    <circle id="Oval-50-Copy-8" cx="122.5" cy="2.5" r="2.5"></circle>
                                    <circle id="Oval-50-Copy-10" cx="137.5" cy="2.5" r="2.5"></circle>
                                    <circle id="Oval-50-Copy-9" cx="152.5" cy="2.5" r="2.5"></circle>
                                    <circle id="Oval-50-Copy-11" cx="167.5" cy="2.5" r="2.5"></circle>
                                    <circle id="Oval-50-Copy-12" cx="182.5" cy="2.5" r="2.5"></circle>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>}
            </div>
            <div className="financial-right">
                <div className="top-content">
                    <svg
                        className="svg-content-left"
                        viewBox="0 0 800 544"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink">
                        <defs>
                            <rect id="jin-path-1" x="0" y="0" width="572" height="392"></rect>
                            <mask
                                id="jin-mask-2"
                                maskContentUnits="userSpaceOnUse"
                                maskUnits="objectBoundingBox"
                                x="0"
                                y="0"
                                width="100%"
                                height="100%"
                                fill="white">
                                <use xlinkHref="#jin-path-1"></use>
                            </mask>
                            <linearGradient
                                x1="50%"
                                y1="0%"
                                x2="50%"
                                y2="97.8296397%"
                                id="jin-linearGradient-3">
                                <stop stopColor="#0E8CF4" offset="0%"></stop>
                                <stop stopColor="#035AE3" offset="100%"></stop>
                            </linearGradient>
                            <linearGradient
                                x1="50%"
                                y1="0%"
                                x2="50%"
                                y2="98.5112404%"
                                id="jin-linearGradient-4">
                                <stop stopColor="#0F93F6" offset="0%"></stop>
                                <stop stopColor="#035AE3" offset="100%"></stop>
                            </linearGradient>
                            <filter
                                x="-13.2%"
                                y="-39.4%"
                                width="126.3%"
                                height="186.2%"
                                filterUnits="objectBoundingBox"
                                id="filter-5">
                                <feOffset dx="0" dy="3" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                                <feGaussianBlur
                                    stdDeviation="11"
                                    in="shadowOffsetOuter1"
                                    result="shadowBlurOuter1"></feGaussianBlur>
                                <feColorMatrix
                                    values="0 0 0 0 0.120702093   0 0 0 0 0.54249074   0 0 0 0 0.946056548  0 0 0 1 0"
                                    type="matrix"
                                    in="shadowBlurOuter1"
                                    result="shadowMatrixOuter1"></feColorMatrix>
                                <feMerge>
                                    <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                                    <feMergeNode in="SourceGraphic"></feMergeNode>
                                </feMerge>
                            </filter>
                            <linearGradient
                                x1="100%"
                                y1="0%"
                                x2="0.381544247%"
                                y2="100.628383%"
                                id="jin-linearGradient-6">
                                <stop stopColor="#2DABF8" offset="0%"></stop>
                                <stop stopColor="#1A91F1" offset="100%"></stop>
                            </linearGradient>
                            <polygon
                                id="jin-path-7"
                                points="24.7590361 0 237.240964 0 262 40.0474307 237.240964 80 24.7590361 80 0 40.7000029"></polygon>
                            <filter
                                x="-27.5%"
                                y="-90.0%"
                                width="155.0%"
                                height="280.0%"
                                filterUnits="objectBoundingBox"
                                id="filter-8">
                                <feGaussianBlur stdDeviation="72" in="SourceAlpha" result="shadowBlurInner1"></feGaussianBlur>
                                <feOffset dx="0" dy="0" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
                                <feComposite
                                    in="shadowOffsetInner1"
                                    in2="SourceAlpha"
                                    operator="arithmetic"
                                    k2="-1"
                                    k3="1"
                                    result="shadowInnerInner1"></feComposite>
                                <feColorMatrix
                                    values="0 0 0 0 0.151332197   0 0 0 0 0.353247766   0 0 0 0 0.972948554  0 0 0 0.431357563 0"
                                    type="matrix"
                                    in="shadowInnerInner1"></feColorMatrix>
                            </filter>
                            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="jin-linearGradient-9">
                                <stop stopColor="#0E91F5" offset="0%"></stop>
                                <stop stopColor="#035AE3" offset="100%"></stop>
                            </linearGradient>
                            <linearGradient x1="100%" y1="50%" x2="0%" y2="50%" id="jin-linearGradient-10">
                                <stop stopColor="#0E91F5" offset="0%"></stop>
                                <stop stopColor="#035AE3" offset="100%"></stop>
                            </linearGradient>
                            <linearGradient
                                x1="100%"
                                y1="50%"
                                x2="0.364716199%"
                                y2="50%"
                                id="jin-linearGradient-11">
                                <stop stopColor="#035BE3" offset="0%"></stop>
                                <stop stopColor="#035CE4" offset="1.61338596%"></stop>
                                <stop stopColor="#0E90F5" offset="100%"></stop>
                            </linearGradient>
                            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="jin-linearGradient-12">
                                <stop stopColor="#0F92F6" offset="0%"></stop>
                                <stop stopColor="#035BE3" offset="100%"></stop>
                            </linearGradient>
                            <circle id="jin-path-13" cx="14" cy="20" r="14"></circle>
                            <linearGradient
                                x1="50%"
                                y1="0%"
                                x2="50%"
                                y2="98.1465242%"
                                id="jin-linearGradient-14">
                                <stop stopColor="#0E91F5" offset="0%"></stop>
                                <stop stopColor="#035AE3" offset="100%"></stop>
                            </linearGradient>
                        </defs>
                        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g transform="translate(100,32) scale(1.2)">
                                <polyline
                                    id="jin-path-935"
                                    stroke="#2E5DDD"
                                    strokeWidth="6"
                                    points="35.5118236 0 0 0 0 32.2977295"></polyline>
                                <polyline
                                    id="jin-path-935-Copy-5"
                                    stroke="#2E5DDD"
                                    strokeWidth="6"
                                    transform="translate(553.755912, 16.148865) scale(-1, 1) translate(-553.755912, -16.148865) "
                                    points="571.511824 0 536 0 536 32.2977295"></polyline>
                                <polyline
                                    id="jin-path-935-Copy-4"
                                    stroke="#2E5DDD"
                                    strokeWidth="6"
                                    transform="translate(17.755912, 375.148865) scale(1, -1) translate(-17.755912, -375.148865) "
                                    points="35.5118236 359 0 359 0 391.29773"></polyline>
                                <polyline
                                    id="jin-path-935-Copy-6"
                                    stroke="#2E5DDD"
                                    strokeWidth="6"
                                    transform="translate(553.755912, 375.148865) scale(-1, -1) translate(-553.755912, -375.148865) "
                                    points="571.511824 359 536 359 536 391.29773"></polyline>
                                <rect
                                    stroke="#0A7AEE"
                                    strokeWidth="1"
                                    strokeDasharray="8,3"
                                    x="0"
                                    y="0"
                                    width="570"
                                    height="395"
                                    stroke="#0A7AEE"/>
                                <g
                                    onClick={this.change('investAge')}
                                    className={this.state.tagName === 'investAge'?"cursor-svgs":'cursor-svg'}
                                    id="投资"
                                    transform="translate(284.000000, 180.000000)">
                                    <path
                                        d="M25.602288,1.5 L236.404808,1.5 L260.235901,40.0464946 L236.405851,78.5 L25.5868933,78.5 L1.76415306,40.6861846 L25.602288,1.5 Z"
                                        id="Rectangle-64"
                                        strokeOpacity="0.962834013"
                                        stroke="#285EF3"
                                        strokeWidth="3"></path>
                                    <text
                                        id="投资年龄"
                                        fontFamily="PingFangSC-Semibold, PingFang SC"
                                        fontSize="30"
                                        fontWeight="500"
                                        fill="#275BEB">
                                        <tspan x="96" y="51">投资年龄</tspan>
                                    </text>
                                    <g
                                        className="logo-svg"
                                        id="Group-13"
                                        transform="translate(46.000000, 23.000000)">
                                        <rect id="Rectangle-8" stroke="#0A7AEE" x="15.5" y="0.5" width="17" height="3"></rect>
                                        <rect
                                            id="Rectangle-8-Copy-4"
                                            stroke="#0A7AEE"
                                            x="16.5"
                                            y="12.5"
                                            width="17"
                                            height="3"></rect>
                                        <rect
                                            id="Rectangle-8-Copy"
                                            stroke="#0A7AEE"
                                            x="14.5"
                                            y="3.5"
                                            width="17"
                                            height="3"></rect>
                                        <rect
                                            id="Rectangle-8-Copy-5"
                                            stroke="#0A7AEE"
                                            x="15.5"
                                            y="15.5"
                                            width="17"
                                            height="3"></rect>
                                        <rect
                                            id="Rectangle-8-Copy-2"
                                            stroke="#0A7AEE"
                                            x="15.5"
                                            y="6.5"
                                            width="17"
                                            height="3"></rect>
                                        <rect
                                            id="Rectangle-8-Copy-6"
                                            stroke="#0A7AEE"
                                            x="15.5"
                                            y="18.5"
                                            width="17"
                                            height="3"></rect>
                                        <rect
                                            id="Rectangle-8-Copy-8"
                                            stroke="#0A7AEE"
                                            x="15.5"
                                            y="24.5"
                                            width="17"
                                            height="3"></rect>
                                        <rect
                                            id="Rectangle-8-Copy-3"
                                            stroke="#0A7AEE"
                                            x="15.5"
                                            y="9.5"
                                            width="17"
                                            height="3"></rect>
                                        <rect
                                            id="Rectangle-8-Copy-7"
                                            stroke="#0A7AEE"
                                            x="14.5"
                                            y="21.5"
                                            width="17"
                                            height="3"></rect>
                                        <rect
                                            id="Rectangle-8-Copy-9"
                                            stroke="#0A7AEE"
                                            x="15.5"
                                            y="27.5"
                                            width="17"
                                            height="3"></rect>
                                        <rect
                                            id="Rectangle-8-Copy-10"
                                            stroke="#0A7AEE"
                                            x="14.5"
                                            y="30.5"
                                            width="17"
                                            height="3"></rect>
                                        <circle
                                            className="special-circle"
                                            fill="black"
                                            stroke="#0A7AEE"
                                            strokeWidth="2"
                                            cx="14"
                                            cy="20"
                                            r="13"></circle>
                                        <circle id="Oval-6" stroke="#0A7AEE" strokeWidth="2" cx="14" cy="16" r="3"></circle>
                                        <path
                                            d="M20.4128009,25.4454397 C19.2296876,23.1048373 16.8026723,21.5 14.0008273,21.5 C11.2041256,21.5 8.78087878,23.0989507 7.59538176,25.4325573"
                                            id="Oval-7"
                                            stroke="#0A7AEE"
                                            strokeWidth="2"></path>
                                    </g>
                                </g>
                                <g
                                    onClick={this.change('riskAttitude')}
                                    className={this.state.tagName === 'riskAttitude'?"cursor-svgs":'cursor-svg'}
                                    id="风险"
                                    transform="translate(26.000000, 31.000000)">
                                    <path
                                        d="M25.602288,1.5 L236.404808,1.5 L260.235901,40.0464946 L236.405851,78.5 L25.5868933,78.5 L1.76415306,40.6861846 L25.602288,1.5 Z"
                                        id="Rectangle-64"
                                        strokeOpacity="0.962834013"
                                        stroke="#285EF3"
                                        strokeWidth="3"></path>
                                    <text
                                        id="风险态度"
                                        fontFamily="PingFangSC-Semibold, PingFang SC"
                                        fontSize="30"
                                        fontWeight="500"
                                        fill="#275BEB">
                                        <tspan x="96" y="51">风险态度</tspan>
                                    </text>
                                    <g
                                        className="logo-svg-s"
                                        id="Group-2"
                                        transform="translate(46.000000, 23.000000)"
                                        fill="url(#jin-linearGradient-3)">
                                        <polygon
                                            id="jin-path-927"
                                            fillRule="nonzero"
                                            points="14.7371259 7.23500271 0 21.4427002 1.61639597 23 14.5028055 10.5765323 18.924881 16.1794785 32.4013587 3.17539112 32.6944011 2.14671482 33 1.29416002 32.6944011 1 31.9710208 1.29416002 30.7639659 1.63835176 19.1584784 12.8370328"></polygon>
                                        <polygon id="jin-path-928" points="2 30.5545819 6 27 6 34 2.00030554 34"></polygon>
                                        <polygon id="jin-path-929" points="10 22.8066404 14 19 14 34 10 34"></polygon>
                                        <polygon id="jin-path-929-Copy" points="19 22.7740035 23 19 23 34 19 34"></polygon>
                                        <polygon id="jin-path-929-Copy-2" points="28 16.3692602 32 13 32 34 28 34"></polygon>
                                        <polygon id="jin-path-930" points="28 2.37595913 34 0 31.6782185 6"></polygon>
                                    </g>
                                </g>
                                <g
                                    onClick={this.change('experiencePre')}
                                    className={this.state.tagName === 'experiencePre'?"cursor-svgs":'cursor-svg'}
                                    id="经验"
                                    transform="translate(284.000000, 78.000000)">
                                    <path
                                        d="M25.602288,1.5 L236.404808,1.5 L260.235901,40.0464946 L236.405851,78.5 L25.5868933,78.5 L1.76415306,40.6861846 L25.602288,1.5 Z"
                                        id="Rectangle-64"
                                        strokeOpacity="0.962834013"
                                        stroke="#285EF3"
                                        strokeWidth="3"></path>
                                    <text
                                        id="经验偏好"
                                        fontFamily="PingFangSC-Semibold, PingFang SC"
                                        fontSize="30"
                                        fontWeight="500"
                                        fill="#275BEB">
                                        <tspan x="96" y="51">经验偏好</tspan>
                                    </text>
                                    <g
                                        className="logo-svg-l"
                                        id="Group-10"
                                        transform="translate(46.000000, 23.000000)"
                                        stroke="url(#jin-linearGradient-4)"
                                        strokeWidth="2">
                                        <path
                                            d="M12.9946554,1.50491217 L13.0098243,32.4989876 C6.03200398,30.7112308 1,24.3800211 1,17 C1,9.62575801 6.02424781,3.2980868 12.9946554,1.50491217 Z M21.0336271,32.4877751 L21.0341172,1.51235215 C27.9903717,3.31575006 33,9.63664664 33,17 C33,24.3635402 27.9901214,30.6845514 21.0336271,32.4877751 Z"
                                            id="Oval-4"></path>
                                        <path
                                            d="M10.6771277,10 L17.6771277,10 L17.6771277,25 L10.6771277,25 L10.6771277,10 Z"
                                            id="Rectangle-5"
                                            transform="translate(14.177128, 17.500000) rotate(-45.000000) translate(-14.177128, -17.500000) "></path>
                                        <path
                                            d="M16.4099492,9.90944533 L23.6288926,10.0915429 L23.6288926,25.1164498 L16.6154691,25.1164498 L16.4099492,9.90944533 Z"
                                            id="Rectangle-5-Copy"
                                            transform="translate(20.012443, 17.500000) scale(-1, 1) rotate(-45.000000) translate(-20.012443, -17.500000) "></path>
                                    </g>
                                </g>
                                <g
                                    onClick={this.change('shortExpects')}
                                    className={this.state.tagName === 'shortExpects'?"cursor-svgs":'cursor-svg'}
                                    id="短期"
                                    transform="translate(26.000000, 133.000000)">
                                    <g id="Rectangle-64">
                                        <path
                                            id="Rectangle-64"
                                            strokeOpacity="0.962834013"
                                            stroke="#285EF3"
                                            strokeWidth="3"
                                            d="M25.602288,1.5 L236.404808,1.5 L260.235901,40.0464946 L236.405851,78.5 L25.5868933,78.5 L1.76415306,40.6861846 L25.602288,1.5 Z"></path>
                                    </g>
                                    <text
                                        id="shortExpect"
                                        fontFamily="PingFangSC-Semibold, PingFang SC"
                                        fontSize="30"
                                        fontWeight="500"
                                        fill="#275BEB">
                                        <tspan x="96" y="51">短期期望</tspan>
                                    </text>
                                    <g className="logo-svg" transform="translate(52.000000, 23.000000)">
                                        <path
                                            d="M21,33 L1,33 L1,17.9965015 C1,13.0281461 5.03055526,9 10.0021973,9 L11.9978027,9 C16.9718831,9 21,13.0241465 21,17.9965015 L21,33 Z"
                                            id="Rectangle-6"
                                            stroke="url(#jin-linearGradient-3)"
                                            strokeWidth="2"></path>
                                        <path
                                            d="M6.04157575,1 L15.9584243,1 L12.0790292,6 L9.92097078,6 L6.04157575,1 Z"
                                            id="Rectangle-7"
                                            stroke="url(#jin-linearGradient-3)"
                                            strokeWidth="2"></path>
                                        <polygon
                                            id="jin-path-936"
                                            fill="url(#jin-linearGradient-3)"
                                            points="11.9863078 12.2719192 6.44365383 19.0664711 11.9750872 22.7032267 8.17226684 28.7770958 16.0359813 21.811029 9.88565746 19.0069521"></polygon>
                                    </g>
                                </g>
                                <g
                                    onClick={this.change('investProject')}
                                    className={this.state.tagName === 'investProject'?"cursor-svgs":'cursor-svg'}
                                    id="目的"
                                    transform="translate(26.000000, 235.000000)">
                                    <path
                                        d="M25.602288,1.5 L236.404808,1.5 L260.235901,40.0464946 L236.405851,78.5 L25.5868933,78.5 L1.76415306,40.6861846 L25.602288,1.5 Z"
                                        id="Rectangle-64"
                                        strokeOpacity="0.962834013"
                                        stroke="#285EF3"
                                        strokeWidth="3"></path>
                                    <text
                                        id="投资目的"
                                        fontFamily="PingFangSC-Semibold, PingFang SC"
                                        fontSize="30"
                                        fontWeight="500"
                                        fill="#275BEB">
                                        <tspan x="96" y="51">投资目的</tspan>
                                    </text>
                                    <g
                                        className="logo-svg"
                                        id="Group-22"
                                        transform="translate(46.000000, 23.000000)">
                                        <circle
                                            className="need-fill"
                                            fill="url(#jin-linearGradient-3)"
                                            cx="17"
                                            cy="17"
                                            r="4"></circle>
                                        <circle
                                            id="Oval-52-Copy"
                                            stroke="#1146AF"
                                            strokeWidth="2"
                                            cx="17"
                                            cy="17"
                                            r="12"></circle>
                                        <path
                                            d="M17,0 L17,10.0046567"
                                            id="jin-path-52"
                                            stroke="#1146AF"
                                            strokeWidth="4"></path>
                                        <path
                                            d="M17,24 L17,33.9832446"
                                            id="jin-path-52-Copy"
                                            stroke="#1146AF"
                                            strokeWidth="4"
                                            transform="translate(17.000000, 28.991622) scale(-1, 1) translate(-17.000000, -28.991622) "></path>
                                        <path
                                            d="M24,17 L33.9980221,17.0011879"
                                            id="jin-path-52-Copy-2"
                                            stroke="#1146AF"
                                            strokeWidth="4"></path>
                                        <path d="M0,17 L10,17" id="jin-path-52-Copy-3" stroke="#1146AF" strokeWidth="4"></path>
                                    </g>
                                </g>
                                <g
                                    onClick={this.change('targetLimit')}
                                    className={this.state.tagName === 'targetLimit'?"cursor-svgs":'cursor-svg'}
                                    id="purposeSvg"
                                    transform="translate(284.000000, 282.000000)">
                                    <path
                                        d="M25.602288,1.5 L236.404808,1.5 L260.235901,40.0464946 L236.405851,78.5 L25.5868933,78.5 L1.76415306,40.6861846 L25.602288,1.5 Z"
                                        id="Rectangle-64"
                                        strokeOpacity="0.962834013"
                                        stroke="#285EF3"
                                        strokeWidth="3"></path>
                                    <text
                                        id="目标期限"
                                        fontFamily="PingFangSC-Semibold, PingFang SC"
                                        fontSize="30"
                                        fontWeight="500"
                                        fill="#275BEB">
                                        <tspan x="96" y="51">目标期限</tspan>
                                    </text>
                                    <g
                                        className="logo-svg"
                                        id="Group-12"
                                        transform="translate(46.000000, 23.000000)">
                                        <circle
                                            id="Oval-5-Copy"
                                            stroke="url(#jin-linearGradient-4)"
                                            strokeWidth="2"
                                            cx="17"
                                            cy="17"
                                            r="16"></circle>
                                        <path d="M8,17 L26,17" id="jin-path-53" stroke="#1146AF" strokeWidth="2"></path>
                                        <path
                                            d="M17,16.4882135 L17,26"
                                            id="jin-path-53-Copy"
                                            stroke="#1146AF"
                                            strokeWidth="2"></path>
                                        <path
                                            d="M14.779325,13.6725422 C13.7064696,14.3899674 13,15.6124813 13,17 C13,19.209139 14.790861,21 17,21 C19.209139,21 21,19.209139 21,17 C21,15.6647568 20.3457608,14.4823193 19.3403578,13.7557629 L17.0740987,6.46010686 L14.779325,13.6725422 Z"
                                            id="Combined-Shape"
                                            stroke="url(#jin-linearGradient-3)"></path>
                                    </g>
                                </g>

                            </g>
                        </g>
                    </svg>
                </div>
                <div className="bottom-content" onClick={this.addStyle}>
                    <div className="state-play">
                        <div className="layer-svg">
                            <svg
                                width="399px"
                                height="270px"
                                viewBox="0 0 399 230"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink">
                                <defs>
                                    <linearGradient
                                        x1="21.4054134%"
                                        y1="0%"
                                        x2="95.3093894%"
                                        y2="98.4821502%"
                                        id="jin-linearGradient-1">
                                        <stop stopColor="#0C21A4" offset="0%"></stop>
                                        <stop stopColor="#2D4BF0" offset="100%"></stop>
                                    </linearGradient>
                                    <polygon
                                        id="jin-path-2"
                                        points="0 63.3539325 23.6345184 77.1339279 50 61.8061628 26.2735419 48"></polygon>
                                    <filter
                                        x="-30.0%"
                                        y="-50.0%"
                                        width="160.0%"
                                        height="200.1%"
                                        filterUnits="objectBoundingBox"
                                        id="jin-filter-3">
                                        <feGaussianBlur stdDeviation="14" in="SourceAlpha" result="shadowBlurInner1"></feGaussianBlur>
                                        <feOffset dx="0" dy="0" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
                                        <feComposite
                                            in="shadowOffsetInner1"
                                            in2="SourceAlpha"
                                            operator="arithmetic"
                                            k2="-1"
                                            k3="1"
                                            result="shadowInnerInner1"></feComposite>
                                        <feColorMatrix
                                            values="0 0 0 0 0.0813210227   0 0 0 0 0.739905256   0 0 0 0 1  0 0 0 0.156901042 0"
                                            type="matrix"
                                            in="shadowInnerInner1"></feColorMatrix>
                                    </filter>
                                    <filter
                                        x="-31.7%"
                                        y="-47.6%"
                                        width="163.5%"
                                        height="195.2%"
                                        filterUnits="objectBoundingBox"
                                        id="jin-filter-4">
                                        <feGaussianBlur stdDeviation="1.26953125" in="SourceGraphic"></feGaussianBlur>
                                    </filter>
                                    <polygon
                                        id="jin-path-5"
                                        points="358 218.283146 376.907615 229.307142 398 217.04493 379.018833 206"></polygon>
                                    <filter
                                        x="-37.5%"
                                        y="-62.6%"
                                        width="175.0%"
                                        height="225.1%"
                                        filterUnits="objectBoundingBox"
                                        id="jin-filter-6">
                                        <feGaussianBlur stdDeviation="14" in="SourceAlpha" result="shadowBlurInner1"></feGaussianBlur>
                                        <feOffset dx="0" dy="0" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
                                        <feComposite
                                            in="shadowOffsetInner1"
                                            in2="SourceAlpha"
                                            operator="arithmetic"
                                            k2="-1"
                                            k3="1"
                                            result="shadowInnerInner1"></feComposite>
                                        <feColorMatrix
                                            values="0 0 0 0 0.0813210227   0 0 0 0 0.739905256   0 0 0 0 1  0 0 0 0.156901042 0"
                                            type="matrix"
                                            in="shadowInnerInner1"></feColorMatrix>
                                    </filter>
                                    <filter
                                        x="-42.3%"
                                        y="-63.5%"
                                        width="184.6%"
                                        height="227.0%"
                                        filterUnits="objectBoundingBox"
                                        id="jin-filter-7">
                                        <feGaussianBlur stdDeviation="1.26953125" in="SourceGraphic"></feGaussianBlur>
                                    </filter>
                                    <polygon
                                        id="jin-path-8"
                                        points="204.105799 21.4959943 17.1013584 128.360327 194.070707 229.777081 380.605886 122.665535"></polygon>
                                    <filter
                                        x="-4.1%"
                                        y="-7.0%"
                                        width="108.3%"
                                        height="114.0%"
                                        filterUnits="objectBoundingBox"
                                        id="jin-filter-9">
                                        <feGaussianBlur stdDeviation="14" in="SourceAlpha" result="shadowBlurInner1"></feGaussianBlur>
                                        <feOffset dx="0" dy="0" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
                                        <feComposite
                                            in="shadowOffsetInner1"
                                            in2="SourceAlpha"
                                            operator="arithmetic"
                                            k2="-1"
                                            k3="1"
                                            result="shadowInnerInner1"></feComposite>
                                        <feColorMatrix
                                            values="0 0 0 0 0.0813210227   0 0 0 0 0.739905256   0 0 0 0 1  0 0 0 0.156901042 0"
                                            type="matrix"
                                            in="shadowInnerInner1"></feColorMatrix>
                                    </filter>
                                    <path
                                        d="M1.02087625,1.68811258 L1.85579029,24.6394596 L4.69449804,26.5276393 L5.52941208,4.68698625 L1.02087625,1.68811258 Z M3.25844588,27.9484425 C2.52372153,27.4597371 1.92258341,27.3678873 1.45503155,27.672893 C0.920686562,27.9334709 0.686910629,28.5699738 0.686910629,29.5379738 C0.686910629,30.5059738 0.920686562,31.4534709 1.45503155,32.424893 C1.92258341,33.3518873 2.52372153,34.1037371 3.25844588,34.5924425 C3.99317024,35.0811478 4.59430836,35.1729976 5.12865334,34.9124197 C5.59620521,34.607414 5.8633777,33.949125 5.8633777,32.981125 C5.8633777,32.013125 5.59620521,31.043414 5.12865334,30.1164197 C4.62770492,29.1672115 3.99317024,28.4371478 3.25844588,27.9484425 Z"
                                        id="jin-path-10"></path>
                                    <filter
                                        x="-9.7%"
                                        y="-4.5%"
                                        width="138.6%"
                                        height="106.0%"
                                        filterUnits="objectBoundingBox"
                                        id="jin-filter-11">
                                        <feOffset dx="1" dy="-1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                                        <feColorMatrix
                                            values="0 0 0 0 0.0509803922   0 0 0 0 0.168627451   0 0 0 0 0.494117647  0 0 0 1 0"
                                            type="matrix"
                                            in="shadowOffsetOuter1"></feColorMatrix>
                                    </filter>
                                    <path
                                        d="M10.0281341,1.57672063 C7.24445943,3.26659085 5.06266035,5.51508373 3.44511966,8.34503535 C1.78996174,11.1978231 1,14.2293808 1,17.4853808 L5.28836371,14.8820672 C5.28836371,13.0340672 5.58930151,11.3993786 6.22879434,9.99916513 C6.94352163,8.33327953 8.10965562,7.05336092 9.76481354,6.04857322 C11.0437992,5.27214636 12.0594643,5.05157209 12.7741916,5.45368649 C13.4513016,5.87863697 13.8274739,6.79427613 13.8274739,8.24627613 C13.8274739,9.34627613 13.4889189,10.6078009 12.8118088,11.9868504 L12.3604021,12.8768834 C9.91528244,16.9132289 8.44821065,19.6518362 7.95918672,21.1367053 C7.43254556,22.6444104 7.20684221,24.2334269 7.20684221,25.9054269 L7.20684221,26.5214269 L11.5328231,23.8952773 L11.5328231,23.2792773 C11.5328231,22.2232773 11.7209093,21.1850968 12.0970815,20.076736 C12.4356365,19.0792112 12.9246605,18.0343422 13.6017705,16.9632926 C15.4073974,14.0191606 16.4982969,12.1689142 16.8368519,11.5233894 C17.7396653,9.56732338 18.2286893,7.46645429 18.2286893,5.26645429 C18.2286893,2.58245429 17.4763448,0.927175974 15.9716557,0.300619339 C14.4669667,-0.369937297 12.4732538,0.0923751619 10.0281341,1.57672063 Z M9.35102406,27.3757701 C8.5234451,27.878164 7.84633504,28.5972135 7.28207666,29.5557548 C6.71781827,30.514296 6.4544977,31.4661486 6.4544977,32.4341486 C6.4544977,33.4021486 6.71781827,34.034296 7.28207666,34.3077548 C7.84633504,34.5812135 8.5234451,34.522164 9.35102406,34.0197701 C10.178603,33.5173763 10.8557131,32.7983268 11.4199715,31.8397855 C11.9842298,30.8812443 12.2851676,29.8625556 12.2851676,28.8945556 C12.2851676,27.9265556 11.9842298,27.3172443 11.4575887,27.0209494 C10.8933303,26.7474907 10.178603,26.8733763 9.35102406,27.3757701 Z"
                                        id="jin-path-12"></path>
                                    <filter
                                        x="-8.7%"
                                        y="-4.4%"
                                        width="111.6%"
                                        height="105.8%"
                                        filterUnits="objectBoundingBox"
                                        id="jin-filter-13">
                                        <feOffset dx="-1" dy="-1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                                        <feColorMatrix
                                            values="0 0 0 0 0.0501135367   0 0 0 0 0.167447816   0 0 0 0 0.492373512  0 0 0 1 0"
                                            type="matrix"
                                            in="shadowOffsetOuter1"></feColorMatrix>
                                    </filter>
                                    <linearGradient
                                        x1="95.4430203%"
                                        y1="6.22693522%"
                                        x2="8.11371985%"
                                        y2="83.4756125%"
                                        id="jin-linearGradient-14">
                                        <stop stopColor="#061442" stopOpacity="0.483582428" offset="0%"></stop>
                                        <stop stopColor="#061442" stopOpacity="0.35657269" offset="56.5713877%"></stop>
                                        <stop stopColor="#061442" stopOpacity="0" offset="100%"></stop>
                                    </linearGradient>
                                    <filter
                                        x="-4.2%"
                                        y="-9.4%"
                                        width="108.4%"
                                        height="118.8%"
                                        filterUnits="objectBoundingBox"
                                        id="jin-filter-15">
                                        <feGaussianBlur stdDeviation="1.50669643" in="SourceGraphic"></feGaussianBlur>
                                    </filter>
                                    <linearGradient
                                        x1="76.3579426%"
                                        y1="0%"
                                        x2="39.5791561%"
                                        y2="100%"
                                        id="jin-linearGradient-16">
                                        <stop stopColor="#032739" offset="0%"></stop>
                                        <stop stopColor="#044869" offset="100%"></stop>
                                    </linearGradient>
                                    <filter
                                        x="-18.5%"
                                        y="-37.1%"
                                        width="137.0%"
                                        height="174.3%"
                                        filterUnits="objectBoundingBox"
                                        id="jin-filter-17">
                                        <feGaussianBlur stdDeviation="2.27399554" in="SourceGraphic"></feGaussianBlur>
                                    </filter>
                                    <filter
                                        x="-6.4%"
                                        y="-10.9%"
                                        width="112.9%"
                                        height="121.7%"
                                        filterUnits="objectBoundingBox"
                                        id="jin-filter-18">
                                        <feGaussianBlur stdDeviation="1.50669643" in="SourceGraphic"></feGaussianBlur>
                                    </filter>
                                    <filter
                                        x="-5.0%"
                                        y="-23.0%"
                                        width="110.1%"
                                        height="146.0%"
                                        filterUnits="objectBoundingBox"
                                        id="jin-filter-19">
                                        <feGaussianBlur stdDeviation="1.50669643" in="SourceGraphic"></feGaussianBlur>
                                    </filter>
                                    <linearGradient
                                        x1="75.644265%"
                                        y1="-36.2350278%"
                                        x2="8.11371985%"
                                        y2="83.4756125%"
                                        id="jin-linearGradient-20">
                                        <stop stopColor="#061442" stopOpacity="0.483582428" offset="0%"></stop>
                                        <stop stopColor="#061442" stopOpacity="0.35657269" offset="56.5713877%"></stop>
                                        <stop stopColor="#061442" stopOpacity="0" offset="100%"></stop>
                                    </linearGradient>
                                    <filter
                                        x="-12.5%"
                                        y="-24.2%"
                                        width="125.0%"
                                        height="148.4%"
                                        filterUnits="objectBoundingBox"
                                        id="jin-filter-21">
                                        <feGaussianBlur stdDeviation="1.50669643" in="SourceGraphic"></feGaussianBlur>
                                    </filter>
                                    <linearGradient
                                        x1="114.363388%"
                                        y1="0%"
                                        x2="50%"
                                        y2="77.4930316%"
                                        id="jin-linearGradient-22">
                                        <stop stopColor="#80EBFD" offset="0%"></stop>
                                        <stop stopColor="#1D5EDE" offset="100%"></stop>
                                    </linearGradient>
                                    <filter
                                        x="-50.2%"
                                        y="-100.4%"
                                        width="200.4%"
                                        height="300.9%"
                                        filterUnits="objectBoundingBox"
                                        id="jin-filter-23">
                                        <feGaussianBlur stdDeviation="3.34821429" in="SourceGraphic"></feGaussianBlur>
                                    </filter>
                                    <path
                                        d="M8.21127273,3.05799296 C8.21124141,3.03365236 8.21115053,3.00932132 8.211,2.985 L2.365,0.18 C2.372,1.311 2.249,2.463 2.009,3.621 C1.763,4.79 1.404,5.939 0.934,7.083 L6.781,9.889 C7.251,8.745 7.609,7.596 7.855,6.427 C8.08809103,5.30603527 8.20986441,4.19161863 8.21127273,3.09641651 L8.21127273,3.05799295 L8.21127273,3.05799296 Z"
                                        id="jin-path-24"></path>
                                    <path
                                        d="M5.935,5.902 L0.088,3.097 C0.873,3.473 1.83,3.341 2.965,2.685 C3.917,2.136 4.809,1.351 5.647,0.326 L11.494,3.132 C10.655,4.156 9.763,4.942 8.811,5.491 C7.676,6.146 6.719,6.279 5.935,5.902 Z"
                                        id="jin-path-26"></path>
                                    <linearGradient
                                        x1="77.4778792%"
                                        y1="0%"
                                        x2="0%"
                                        y2="96.9515275%"
                                        id="jin-linearGradient-28">
                                        <stop stopColor="#3AC5FC" offset="0%"></stop>
                                        <stop stopColor="#1349A6" offset="46.0758131%"></stop>
                                        <stop stopColor="#1349A6" offset="47.5199132%"></stop>
                                        <stop stopColor="#103992" offset="100%"></stop>
                                    </linearGradient>
                                    <linearGradient
                                        x1="50%"
                                        y1="0%"
                                        x2="0%"
                                        y2="91.1083083%"
                                        id="jin-linearGradient-29">
                                        <stop stopColor="#0B7C97" offset="0%"></stop>
                                        <stop stopColor="#1DCBFB" offset="51.6165716%"></stop>
                                        <stop stopColor="#085985" offset="100%"></stop>
                                    </linearGradient>
                                    <linearGradient
                                        x1="77.4778792%"
                                        y1="0%"
                                        x2="0%"
                                        y2="96.9515275%"
                                        id="jin-linearGradient-30">
                                        <stop stopColor="#3AE6FC" offset="0%"></stop>
                                        <stop stopColor="#096C94" offset="46.0758131%"></stop>
                                        <stop stopColor="#104792" offset="100%"></stop>
                                    </linearGradient>
                                    <path
                                        d="M13.027,0.534 L18.874,3.34 C17.485,2.674 15.76,2.932 13.699,4.122 C11.383,5.458 9.505,7.308 8.075,9.647 C6.646,11.993 5.951,14.503 5.998,17.179 C6.021,18.524 6.277,19.69 6.766,20.666 C7.254,21.636 7.939,22.476 8.807,23.187 L2.961,20.381 C2.093,19.67 1.408,18.83 0.92,17.861 C0.431,16.884 0.175,15.719 0.152,14.373 C0.105,11.697 0.799,9.188 2.229,6.841 C3.658,4.502 5.537,2.653 7.852,1.316 C9.913,0.126 11.638,-0.132 13.027,0.534 Z"
                                        id="jin-path-31"></path>
                                    <linearGradient
                                        x1="50%"
                                        y1="0.825095663%"
                                        x2="50%"
                                        y2="100%"
                                        id="jin-linearGradient-33">
                                        <stop stopColor="#79EAFF" offset="0%"></stop>
                                        <stop stopColor="#42CFFF" offset="100%"></stop>
                                    </linearGradient>
                                    <linearGradient
                                        x1="100%"
                                        y1="0%"
                                        x2="-67.8373403%"
                                        y2="157.232719%"
                                        id="jin-linearGradient-34">
                                        <stop stopColor="#0B4083" offset="0%"></stop>
                                        <stop stopColor="#3488EF" offset="100%"></stop>
                                    </linearGradient>
                                    <path
                                        d="M8.882,13.036 L0.112,8.827 C3.183,10.252 6.828,9.738 11.041,7.306 C12.626,6.391 14.145,5.274 15.598,3.941 C16.404,3.213 17.422,2.154 18.669,0.762 L27.439,4.971 C26.191,6.363 25.174,7.422 24.368,8.15 C22.915,9.483 21.395,10.599 19.811,11.514 C15.597,13.947 11.952,14.46 8.882,13.036 Z"
                                        id="jin-path-35"></path>
                                    <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="jin-linearGradient-37">
                                        <stop stopColor="#37BBF6" offset="0%"></stop>
                                        <stop stopColor="#13439E" offset="100%"></stop>
                                    </linearGradient>
                                    <path
                                        d="M5.035,1.715 C5.874,2.117 6.645,2.689 7.347,3.428 C10.463,6.719 12.104,12.969 12.265,22.19 C12.335,26.212 12.071,29.909 11.466,33.301 L2.697,29.092 C3.301,25.701 3.566,22.003 3.496,17.981 C3.36344762,10.389289 2.22770107,4.81142258 0.0915506639,1.24070387 L0.07605228,1.14878872 C0.07605228,1.14878872 0.716955226,0.739438488 2.58769896,1.03701373 C4.45844269,1.33458898 5.035,1.715 5.035,1.715 Z M9.396,41.594 L0.626,37.385 C0.982,36.216 1.299,35.113 1.576,34.075 L10.346,38.283 C10.068,39.321 9.752,40.425 9.396,41.594 L9.396,41.594 M10.346,38.283 L1.576,34.075 C1.897,32.875 2.165,31.763 2.382,30.738 L11.151,34.946 C10.935,35.972 10.666,37.084 10.346,38.283 Z M11.151,34.946 L2.382,30.738 C2.503,30.162 2.608,29.614 2.697,29.092 L11.466,33.301 C11.378,33.822 11.273,34.37 11.151,34.946 Z"
                                        id="jin-path-38"></path>
                                    <linearGradient
                                        x1="50%"
                                        y1="0.825095663%"
                                        x2="50%"
                                        y2="100%"
                                        id="jin-linearGradient-40">
                                        <stop stopColor="#80EBFD" offset="0%"></stop>
                                        <stop stopColor="#248EEF" offset="100%"></stop>
                                    </linearGradient>
                                    <path
                                        d="M46.0508437,0.298224088 C48.4561336,0.315767908 50.7040894,0.826392002 52.795,1.83 L61.565,6.039 C55.819,3.281 48.887,4.246 40.763,8.936 C32.281,13.833 25.242,21.071 19.646,30.651 C12.79,42.378 9.493,55.758 9.755,70.782 C10.015,85.692 13.621,95.033 20.573,98.796 C20.812,98.928 21.054,99.052 21.299,99.169 L12.529,94.961 C12.285,94.843 12.043,94.719 11.803,94.587 C4.851,90.824 1.245,81.483 0.986,66.574 C0.724,51.549 4.021,38.169 10.876,26.442 C16.472,16.863 23.511,9.625 31.993,4.727 C37.0555765,1.80436534 41.6552611,0.328268036 45.7935057,0.298224088 L46.0508437,0.298224088 L46.0508437,0.298224088 Z"
                                        id="jin-path-41"></path>
                                </defs>
                                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <g id="数字金融-期望划分" transform="translate(-1403.000000, -688.000000)">
                                        <g id="q&amp;a" transform="translate(1404.000000, 688.000000)">
                                            <g id="Group-3">
                                                <g id="Group-23">
                                                    <g id="Path-941-Copy" opacity="0.898663949" strokeDasharray="2">
                                                        <use
                                                            fillOpacity="0.183791893"
                                                            fill="#0851C9"
                                                            fillRule="evenodd"
                                                            xlinkHref="#jin-path-2"></use>
                                                        <use
                                                            fill="black"
                                                            fillOpacity="1"
                                                            filter="url(#jin-filter-3)"
                                                            xlinkHref="#jin-path-2"></use>
                                                        <use
                                                            stroke="url(#jin-linearGradient-1)"
                                                            strokeWidth="1"
                                                            xlinkHref="#jin-path-2"></use>
                                                    </g>
                                                    <ellipse
                                                        id="Oval-9"
                                                        fill="#00041B"
                                                        opacity="0.284193841"
                                                        filter="url(#jin-filter-4)"
                                                        cx="25"
                                                        cy="63"
                                                        rx="6"
                                                        ry="4"></ellipse>
                                                    <g id="Path-941-Copy-2" opacity="0.904608243" strokeDasharray="2">
                                                        <use
                                                            fillOpacity="0.183791893"
                                                            fill="#0851C9"
                                                            fillRule="evenodd"
                                                            xlinkHref="#jin-path-5"></use>
                                                        <use
                                                            fill="black"
                                                            fillOpacity="1"
                                                            filter="url(#jin-filter-6)"
                                                            xlinkHref="#jin-path-5"></use>
                                                        <use
                                                            stroke="url(#jin-linearGradient-1)"
                                                            strokeWidth="1"
                                                            xlinkHref="#jin-path-5"></use>
                                                    </g>
                                                    <ellipse
                                                        id="Oval-9"
                                                        fill="#00041B"
                                                        opacity="0.284193841"
                                                        filter="url(#jin-filter-7)"
                                                        cx="378.5"
                                                        cy="217"
                                                        rx="4.5"
                                                        ry="3"></ellipse>
                                                    <g id="Path-939" strokeDasharray="3">
                                                        <use
                                                            fillOpacity="0.183791893"
                                                            fill="#0851C9"
                                                            fillRule="evenodd"
                                                            xlinkHref="#jin-path-8"></use>
                                                        <use
                                                            fill="black"
                                                            fillOpacity="1"
                                                            filter="url(#jin-filter-9)"
                                                            xlinkHref="#jin-path-8"></use>
                                                        <use
                                                            stroke="url(#jin-linearGradient-1)"
                                                            strokeWidth="1"
                                                            xlinkHref="#jin-path-8"></use>
                                                    </g>
                                                    <g id="Group-20" transform="translate(375.000000, 170.000000)">
                                                        <polygon
                                                            id="Path-60"
                                                            fill="#0D2B7E"
                                                            points="1.05277897 1.70447754 2.04030632 0.721386284 2.70559192 2.39988715 2.36726874 3.01562403"></polygon>
                                                        <polygon
                                                            id="Path-61"
                                                            fill="#0D2B7E"
                                                            points="4.74118385 26.5687962 5.70866943 25.4715777 4.86116563 23.6967236 3.99529005 24.376479"></polygon>
                                                        <g id="！">
                                                            <use
                                                                fill="black"
                                                                fillOpacity="1"
                                                                filter="url(#jin-filter-11)"
                                                                xlinkHref="#jin-path-10"></use>
                                                            <use fill="#275BEB" fillRule="evenodd" xlinkHref="#jin-path-10"></use>
                                                        </g>
                                                    </g>
                                                    <g id="Group-8" transform="translate(16.000000, 8.000000)">
                                                        <g id="Group-19">
                                                            <polygon
                                                                id="Path-58"
                                                                fill="#0D2B7E"
                                                                points="0.0200724664 16.4700895 1.02718638 17.462826 1.58968296 15.9337969 1.09489931 14.8663907"></polygon>
                                                            <polygon
                                                                id="Path-59"
                                                                fill="#0D2B7E"
                                                                points="6.24200969 25.5154086 7.19640646 26.4837963 7.85993135 24.4654717 7.27138539 24.1197183"></polygon>
                                                            <g id="？">
                                                                <use
                                                                    fill="black"
                                                                    fillOpacity="1"
                                                                    filter="url(#jin-filter-13)"
                                                                    xlinkHref="#jin-path-12"></use>
                                                                <use fill="#275BEB" fillRule="evenodd" xlinkHref="#jin-path-12"></use>
                                                            </g>
                                                        </g>
                                                    </g>
                                                    <polygon
                                                        id="Fill-1"
                                                        fillOpacity="0.838541667"
                                                        fill="#1C50B9"
                                                        points="204.45 31.795 341.270823 111.220942 193.878875 196.232065 58.124038 116.653317"></polygon>
                                                    <polygon
                                                        id="Path-54"
                                                        fill="#3ABDFC"
                                                        points="341.280074 111.203695 341.280074 117.489464 193.883588 201.981336 193.883588 196.239296"></polygon>
                                                    <polygon
                                                        id="Path-938"
                                                        fill="#062973"
                                                        points="58.2964026 116.750218 58.2964026 123.531564 193.980003 201.960286 193.980003 196.253853"></polygon>
                                                    <polygon
                                                        id="Path-62"
                                                        fill="url(#jin-linearGradient-14)"
                                                        filter="url(#jin-filter-15)"
                                                        points="169.574177 85.367777 135.386283 99.8496359 68.730114 122.629787 62.3109831 114.910769 145.058344 74.824127 156.341881 74.4654267"></polygon>
                                                    <polygon
                                                        id="Path-63"
                                                        fill="url(#jin-linearGradient-16)"
                                                        opacity="0.647418478"
                                                        filter="url(#jin-filter-17)"
                                                        points="197.806108 138.411023 189.306481 140.728623 160.900552 124.76172 168.142836 122.360497"></polygon>
                                                    <g id="Group-17" className="a-animation">
                                                        <polyline
                                                            id="Fill-4"
                                                            fill="#3ABDFC"
                                                            points="19.295 67.344 28.065 63.135 23.293 77.448 14.523 81.657 19.295 67.344"></polyline>
                                                        <polyline
                                                            id="Fill-5"
                                                            fill="#7EF2FF"
                                                            points="23.295 55.343 32.065 51.134 48.98 60.9 40.21 65.108 23.295 55.343"></polyline>
                                                        <polyline
                                                            id="Fill-6"
                                                            fill="#3ABDFC"
                                                            points="32.427 27.939 41.196 23.73 32.065 51.134 23.295 55.343 32.427 27.939"></polyline>
                                                        <path
                                                            d="M23.295,55.343 L40.21,65.108 L32.427,27.939 L23.295,55.343 M40.708,13.729 L62.646,109.44 L47.678,100.798 L43.617,81.386 L19.295,67.344 L14.523,81.657 L0.084,73.32 L25.096,4.715 L40.708,13.729"
                                                            id="Fill-7"
                                                            fill="url(#jin-linearGradient-22)"></path>
                                                        <polyline
                                                            id="Fill-8"
                                                            fill="#3ABDFC"
                                                            points="40.708 13.729 49.478 9.521 71.415 105.231 62.646 109.44 40.708 13.729"></polyline>
                                                        <polyline
                                                            id="Fill-9"
                                                            fill="#7EF2FF"
                                                            points="25.096 4.715 33.865 0.507 49.478 9.521 40.708 13.729 25.096 4.715"></polyline>
                                                    </g>
                                                    <g id="Group-18" transform="translate(167.000000, 63.000000)">
                                                        <polygon
                                                            id="Path-55"
                                                            fillOpacity="0.840268342"
                                                            fill="#1FC6E8"
                                                            points="0 55.2295395 29.5289571 38 58.9810363 55.1458629 29.5221584 71.7541035"></polygon>
                                                        <ellipse
                                                            id="Oval-8"
                                                            fill="#0D5E75"
                                                            filter="url(#jin-filter-23)"
                                                            cx="30"
                                                            cy="55"
                                                            rx="10"
                                                            ry="5"></ellipse>
                                                        <g id="Group-14" transform="translate(18.000000, 0.000000)">
                                                            <polyline
                                                                id="Fill-59"
                                                                fill="#686968"
                                                                points="26.683 35.866 20.837 33.06 18.731 31.14 24.577 33.946 26.683 35.866"></polyline>
                                                            <g id="Group-65" transform="translate(13.000000, 28.000000)" fill="#094D76">
                                                                <path
                                                                    d="M6.494,6.132 L0.647,3.326 C0.857,3.07 1.057,2.815 1.246,2.563 L7.093,5.368 C6.903,5.621 6.703,5.875 6.494,6.132 Z M7.093,5.368 L1.246,2.563 C1.501,2.224 1.738,1.888 1.956,1.557 L7.802,4.363 C7.584,4.694 7.347,5.029 7.093,5.368 Z M7.802,4.363 L1.956,1.557 C2.121,1.306 2.276,1.058 2.421,0.812 L8.267,3.618 C8.122,3.864 7.968,4.112 7.802,4.363 Z M8.267,3.618 L2.421,0.812 C2.511,0.658 2.597,0.505 2.68,0.353 L8.526,3.159 C8.444,3.311 8.357,3.464 8.267,3.618 Z"
                                                                    id="Combined-Shape"></path>
                                                            </g>
                                                            <g id="Group-74" transform="translate(18.000000, 14.000000)">
                                                                <mask id="mask-25" fill="white">
                                                                    <use xlinkHref="#jin-path-24"></use>
                                                                </mask>
                                                                <use id="Clip-67" fill="#0B5988" xlinkHref="#jin-path-24"></use>
                                                            </g>
                                                            <polyline
                                                                id="Fill-75"
                                                                fill="#23F9FE"
                                                                points="26.211 16.985 20.365 14.18 25.426 11.258 31.272 14.063 26.211 16.985"></polyline>
                                                            <g id="Group-87" transform="translate(8.000000, 31.000000)">
                                                                <mask id="mask-27" fill="white">
                                                                    <use xlinkHref="#jin-path-26"></use>
                                                                </mask>
                                                                <use id="Clip-77" fill="#094D76" xlinkHref="#jin-path-26"></use>
                                                            </g>
                                                            <path
                                                                d="M21.526,31.159 L15.68,28.353 L10.025,23.177 L15.871,25.982 L21.526,31.159 Z M17.513,17.296 L11.666,14.49 C11.891,14.165 12.099,13.858 12.288,13.571 L18.135,16.376 C17.945,16.664 17.738,16.971 17.513,17.296 Z M18.135,16.376 L12.288,13.571 C12.579,13.13 12.828,12.734 13.035,12.381 L18.881,15.187 C18.674,15.54 18.425,15.936 18.135,16.376 Z M18.881,15.187 L13.035,12.381 C13.152,12.182 13.256,11.996 13.346,11.825 L19.192,14.631 C19.102,14.802 18.998,14.988 18.881,15.187 Z M19.192,14.631 L13.346,11.825 C13.371,11.778 13.394,11.733 13.417,11.688 L19.263,14.494 C19.24,14.539 19.217,14.584 19.192,14.631 Z"
                                                                id="Combined-Shape"
                                                                fill="#0B5988"></path>
                                                            <g id="Group-94" transform="translate(11.000000, 11.000000)"></g>
                                                            <g id="Group-105" transform="translate(13.000000, 6.000000)" fill="#0A5888">
                                                                <path
                                                                    d="M6.263,8.494 L0.417,5.688 C0.495,5.539 0.568,5.392 0.637,5.246 L6.483,8.051 C6.415,8.197 6.341,8.345 6.263,8.494 Z M6.483,8.051 L0.637,5.246 C0.702,5.107 0.763,4.97 0.82,4.835 L6.666,7.641 C6.61,7.776 6.549,7.913 6.483,8.051 Z M6.666,7.641 L0.82,4.835 C0.873,4.708 0.923,4.583 0.969,4.459 L6.815,7.264 C6.769,7.389 6.72,7.514 6.666,7.641 Z M6.815,7.264 L0.969,4.459 C1.013,4.339 1.054,4.22 1.091,4.103 L6.938,6.908 C6.9,7.026 6.859,7.145 6.815,7.264 Z M6.938,6.908 L1.091,4.103 C1.129,3.985 1.163,3.869 1.194,3.754 L7.04,6.559 C7.009,6.675 6.975,6.791 6.938,6.908 Z M7.04,6.559 L1.194,3.754 C1.226,3.634 1.254,3.515 1.279,3.398 L7.125,6.203 C7.101,6.321 7.072,6.439 7.04,6.559 Z M7.125,6.203 L1.279,3.398 C1.306,3.268 1.329,3.14 1.348,3.013 L7.194,5.819 C7.176,5.945 7.153,6.074 7.125,6.203 Z M7.194,5.819 L1.348,3.013 C1.37,2.856 1.386,2.701 1.396,2.548 L7.242,5.354 C7.233,5.507 7.217,5.661 7.194,5.819 Z M7.242,5.354 L1.396,2.548 C1.403,2.42 1.406,2.293 1.404,2.168 C1.39,1.404 1.17,0.844 0.748,0.485 C0.686,0.433 0.619,0.391 0.549,0.357 L6.395,3.163 C6.466,3.196 6.532,3.239 6.594,3.291 C7.016,3.649 7.237,4.209 7.25,4.974 C7.252,5.099 7.249,5.226 7.242,5.354 Z"
                                                                    id="Combined-Shape"></path>
                                                            </g>
                                                            <g
                                                                id="Group-120"
                                                                transform="translate(0.000000, 20.000000)"
                                                                fill="url(#jin-linearGradient-29)">
                                                                <path
                                                                    d="M9.98,23.78 L4.134,20.974 C3.938,20.88 3.749,20.77 3.567,20.644 C1.834,19.428 0.944,17.486 0.897,14.818 C0.89,14.395 0.899,13.975 0.924,13.557 L6.77,16.363 C6.745,16.781 6.736,17.201 6.744,17.624 C6.79,20.292 7.68,22.234 9.414,23.45 C9.596,23.576 9.784,23.686 9.98,23.78 Z M6.77,16.363 L0.924,13.557 C0.951,13.106 0.997,12.658 1.061,12.213 L6.908,15.018 C6.843,15.464 6.797,15.912 6.77,16.363 Z M6.908,15.018 L1.061,12.213 C1.11,11.881 1.169,11.551 1.238,11.222 L7.084,14.028 C7.015,14.357 6.956,14.687 6.908,15.018 Z M7.084,14.028 L1.238,11.222 C1.297,10.944 1.363,10.667 1.437,10.391 L7.283,13.197 C7.209,13.473 7.143,13.75 7.084,14.028 Z M7.283,13.197 L1.437,10.391 C1.504,10.139 1.577,9.888 1.657,9.639 L7.503,12.444 C7.424,12.694 7.35,12.945 7.283,13.197 Z M7.503,12.444 L1.657,9.639 C1.733,9.402 1.814,9.165 1.901,8.93 L7.747,11.736 C7.66,11.971 7.579,12.207 7.503,12.444 Z M7.747,11.736 L1.901,8.93 C1.968,8.748 2.039,8.567 2.113,8.386 C2.135,8.331 2.158,8.277 2.181,8.222 L8.027,11.028 C8.004,11.082 7.981,11.137 7.959,11.191 C7.885,11.372 7.815,11.554 7.747,11.736 Z M8.027,11.028 L2.181,8.222 C2.296,7.947 2.421,7.666 2.556,7.381 L8.402,10.187 C8.268,10.472 8.143,10.752 8.027,11.028 Z M8.402,10.187 L2.556,7.381 C2.712,7.051 2.88,6.713 3.061,6.37 L8.907,9.175 C8.726,9.519 8.558,9.856 8.402,10.187 Z M8.907,9.175 L3.061,6.37 C3.28,5.953 3.518,5.526 3.775,5.088 L9.622,7.894 C9.365,8.331 9.127,8.758 8.907,9.175 Z M9.622,7.894 L3.775,5.088 C4.11,4.519 4.477,3.931 4.875,3.327 L10.722,6.132 C10.323,6.737 9.956,7.324 9.622,7.894 Z M10.722,6.132 L4.875,3.327 C5.327,2.641 5.821,1.933 6.355,1.202 L12.201,4.008 C11.667,4.739 11.174,5.447 10.722,6.132 Z M12.201,4.008 L6.355,1.202 L6.961,0.381 L12.807,3.187 L12.201,4.008 Z"
                                                                    id="Combined-Shape"></path>
                                                            </g>
                                                            <g id="Group-144" transform="translate(4.000000, 0.000000)">
                                                                <mask id="mask-32" fill="white">
                                                                    <use xlinkHref="#jin-path-31"></use>
                                                                </mask>
                                                                <use id="Clip-122" fill="url(#jin-linearGradient-30)" xlinkHref="#jin-path-31"></use>
                                                            </g>
                                                            <path
                                                                d="M16.228,10.856 C15.543,11.776 15.213,12.785 15.233,13.902 C15.244,14.567 15.453,15.149 15.853,15.66 C16.107,16 16.662,16.544 17.513,17.296 C18.33,16.114 18.915,15.181 19.263,14.494 C19.941,13.199 20.268,12.021 20.25,10.974 C20.237,10.209 20.016,9.649 19.594,9.291 C19.166,8.935 18.534,8.999 17.693,9.485 C17.165,9.79 16.676,10.242 16.228,10.856 M19.494,34.132 C20.332,33.107 21.009,32.114 21.526,31.159 L15.871,25.982 C14.448,27.993 13.515,29.583 13.063,30.747 C12.612,31.911 12.396,33.04 12.415,34.118 C12.436,35.333 12.861,36.208 13.683,36.76 C14.511,37.302 15.552,37.218 16.811,36.491 C17.763,35.942 18.655,35.156 19.494,34.132 M28.092,27.02 L33.58,31.884 L26.683,35.866 L24.577,33.946 C23.602,35.667 22.69,37.059 21.833,38.102 C20.315,39.975 18.555,41.493 16.546,42.653 C13.525,44.397 11.153,44.654 9.414,43.45 C7.68,42.234 6.79,40.292 6.744,37.624 C6.705,35.414 7.108,33.274 7.959,31.191 C8.816,29.098 10.226,26.708 12.201,24.008 L12.807,23.187 C11.939,22.476 11.254,21.636 10.766,20.666 C10.277,19.69 10.021,18.524 9.998,17.179 C9.951,14.503 10.646,11.993 12.075,9.647 C13.505,7.308 15.383,5.458 17.699,4.122 C19.818,2.898 21.582,2.66 22.99,3.399 C24.399,4.145 25.128,5.71 25.169,8.103 C25.207,10.267 24.82,12.267 24.02,14.087 C23.215,15.92 22.014,17.871 20.431,19.944 L24.781,23.889 C25.251,22.745 25.609,21.596 25.855,20.427 C26.096,19.268 26.218,18.116 26.211,16.985 L31.272,14.063 C31.219,16.342 30.822,18.849 30.094,21.578 C29.686,23.103 29.023,24.915 28.092,27.02"
                                                                id="Fill-145"
                                                                fill="url(#jin-linearGradient-33)"></path>
                                                        </g>
                                                        <polygon
                                                            id="Path-56"
                                                            fill="#3AE9FC"
                                                            points="58.9914645 55.1284836 58.9914645 58.7828362 29.5371597 75.5825384 29.5371597 71.7400251"></polygon>
                                                        <polygon
                                                            id="Path-57"
                                                            fill="#044869"
                                                            points="0.0157726584 55.2631886 0.0157726584 59.4920614 29.5285995 75.5512631 29.5285995 71.7636695"></polygon>
                                                    </g>
                                                    <g className="q-animation" id="Group-16" transform="translate(102.000000, 0.000000)">
                                                        <polyline
                                                            id="Fill-10"
                                                            fill="#0D347A"
                                                            points="66.991 85.38 58.221 81.172 50.123 76.379 58.892 80.588 66.991 85.38"></polyline>
                                                        <g id="Group-15" transform="translate(47.000000, 49.000000)"></g>
                                                        <polyline
                                                            id="Fill-16"
                                                            fill="#0D347A"
                                                            points="49.439 74.971 40.669 70.762 33.843 66.702 42.612 70.911 49.439 74.971"></polyline>
                                                        <g id="Group-28" transform="translate(22.000000, 70.000000)">
                                                            <mask id="mask-36" fill="white">
                                                                <use xlinkHref="#jin-path-35"></use>
                                                            </mask>
                                                            <use id="Clip-19" fill="url(#jin-linearGradient-34)" xlinkHref="#jin-path-35"></use>
                                                        </g>
                                                        <g id="Group-33" transform="translate(47.000000, 20.000000)">
                                                            <mask id="mask-39" fill="white">
                                                                <use xlinkHref="#jin-path-38"></use>
                                                            </mask>
                                                            <use id="Clip-30" fill="url(#jin-linearGradient-37)" xlinkHref="#jin-path-38"></use>
                                                        </g>
                                                        <path
                                                            d="M58.466,53.301 C59.071,49.909 59.335,46.212 59.265,42.19 C59.104,32.969 57.463,26.719 54.347,23.428 C51.225,20.141 46.753,20.182 40.931,23.544 C35.464,26.7 31.14,31.637 27.969,38.349 C24.798,45.061 23.296,53.233 23.464,62.867 C23.66,74.138 26.135,80.857 30.882,83.036 C33.952,84.46 37.597,83.947 41.811,81.514 C43.395,80.599 44.915,79.483 46.368,78.15 C47.174,77.422 48.191,76.363 49.439,74.971 L42.612,70.911 L49.546,57.602 L56.396,61.594 C57.393,58.315 58.084,55.553 58.466,53.301 M66.286,67.368 L74.02,71.877 L66.991,85.38 L58.892,80.588 C56.504,83.82 54.432,86.314 52.682,88.081 C49.743,91.021 46.21,93.679 42.083,96.062 C33.472,101.033 26.304,101.943 20.573,98.796 C13.621,95.033 10.015,85.692 9.755,70.782 C9.493,55.758 12.79,42.378 19.646,30.651 C25.242,21.071 32.281,13.833 40.763,8.936 C49.306,4.004 56.532,3.191 62.446,6.496 C69.269,10.334 72.804,19.167 73.045,33.006 C73.173,40.331 72.567,46.875 71.216,52.651 C70.137,58.039 68.492,62.943 66.286,67.368"
                                                            id="Fill-34"
                                                            fill="url(#jin-linearGradient-40)"></path>
                                                        <g id="Group-58">
                                                            <mask id="mask-42" fill="white">
                                                                <use xlinkHref="#jin-path-41"></use>
                                                            </mask>
                                                            <use id="Clip-36" fill="url(#jin-linearGradient-28)" xlinkHref="#jin-path-41"></use>
                                                        </g>
                                                        <polyline
                                                            id="Fill-17"
                                                            fill="#1C61DE"
                                                            points="42.612 70.911 33.843 66.702 40.776 53.393 49.546 57.602 42.612 70.911"></polyline>
                                                    </g>
                                                    <polyline
                                                        className="line-move"
                                                        id="Path-942"
                                                        stroke="#215AD2"
                                                        points="156.07656 95.274665 174.904063 106.39552 146.94551 122.651149 195.043145 150.532777 242.376654 122.662688 223.301708 111.277722 263.151653 88.861647"></polyline>
                                                    <polyline
                                                         className="line-move"
                                                        id="Path-66"
                                                        stroke="#215AD2"
                                                        points="159.218488 115.995 146.311046 108.466709 113.520699 127.259768 149.23302 148.171556 169.214943 135.796582"></polyline>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        {/* <div className="layer-1"></div> */}
                        <div className="layer-2"></div>
                        <div className="layer-3"></div>
                    </div>
                </div>
            </div>
        </div>
    }
}
export default Expect;