import React, {Component} from 'react';
import './financial.less';
class Expect extends Component {
    constructor() {
        super();
        this.state = {
            leftWidth: null,
            leftHeight: null,
            content: null
        };
        this.color = ['#1772F3', '#E9C969', '#E96A69', '#80EBFD'];
        this.filter = ['filter-10', 'filter-14', 'filter-12', 'filter-16'];
        this.offset = [0];
        this.lengthArray = [];
        this.offsetArray = [];
    }
    componentDidMount() {
        const svgDOM = this.refs.svgCon;
        const width = parseInt(window.getComputedStyle(svgDOM).width);
        const height = parseInt(window.getComputedStyle(svgDOM).height);
        const content = {
            title: '短期期望',
            titleContent: '您对期限为半年的产品的投资态度是?',
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
        };
        content
            .expects
            .map((it, index) => {
                const length = 700 * it.percent;
                this
                    .lengthArray
                    .push(length);
                const offsetX = this
                    .offset
                    .reduce((sum, value) => {
                        return sum + value;
                    }, 0)
                this
                    .offsetArray
                    .push(offsetX);
                this
                    .offset
                    .push(length);
            });
        this.setState({leftWidth: width, leftHeight: height, content});
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
                                        {/*<circle cx="132" cy="132" r="110" strokeDasharray="120,800" strokeDashoffset="100" stroke="red" strokeWidth="40" />
                                        <circle cx="132" cy="132" r="110" strokeDasharray="120,800" strokeDashoffset="200" stroke="green" strokeWidth="40" />
                                        <circle cx="132" cy="132" r="110" strokeDasharray="120,800" strokeDashoffset="10" stroke="yellow" strokeWidth="40" />*/}
                                        {this.state.content && this
                                            .state
                                            .content
                                            .expects
                                            .map((it, index) => {
                                                return <g key={index}>
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

                                                return <g key={index}>
                                                    <polyline
                                                        stroke="#2870E8"
                                                        strokeWidth="3"
                                                        points={`${x + flagX * 60 + flagX * 70},${y + flagY * 30} ${x + flagX * 60 + flagX * 70 + flagX * xSpan - flagX * 10},${y + flagY * 30} ${x + flagX * 60 + flagX * 70 + flagX * xSpan},${y + flagY * 30 + flagY * 10} ${x + flagX * 60 + flagX * 70 + flagX * xSpan},${y + flagY * 30 + flagY * ySpan} ${x + flagX * 60 + flagX * 70 + flagX * 10},${y + flagY * 30 + flagY * ySpan} ${x + flagX * 60 + flagX * 70},${y + flagY * 30 + flagY * ySpan - flagY * 10} ${x + flagX * 60 + flagX * 70},${y + flagY * 30}`}/>
                                                    <circle cx={x} cy={y} r="5" fill="#fff"/>
                                                    <polyline points={points} stroke="#fff"/>
                                                    <circle cx={x + flagX * 60 + flagX * 70} cy={y + flagY * 60} r="4" fill="#fff"/>
                                                    <circle
                                                        className="circle-bubble-jin"
                                                        cx={x + flagX * 60 + flagX * 70}
                                                        cy={y + flagY * 60}
                                                        r="10"
                                                        stroke="#3D83FF"/>
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
                        viewBox="0 0 1000 680"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink">
                        <defs>
                            <rect id="path-1" x="0" y="0" width="572" height="392"></rect>
                            <mask
                                id="mask-2"
                                maskContentUnits="userSpaceOnUse"
                                maskUnits="objectBoundingBox"
                                x="0"
                                y="0"
                                width="100%"
                                height="100%"
                                fill="white">
                                <use xlinkHref="#path-1"></use>
                            </mask>
                            <linearGradient
                                x1="50%"
                                y1="0%"
                                x2="50%"
                                y2="97.8296397%"
                                id="linearGradient-3">
                                <stop stopColor="#0E8CF4" offset="0%"></stop>
                                <stop stopColor="#035AE3" offset="100%"></stop>
                            </linearGradient>
                            <linearGradient
                                x1="50%"
                                y1="0%"
                                x2="50%"
                                y2="98.5112404%"
                                id="linearGradient-4">
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
                                id="linearGradient-6">
                                <stop stopColor="#2DABF8" offset="0%"></stop>
                                <stop stopColor="#1A91F1" offset="100%"></stop>
                            </linearGradient>
                            <polygon
                                id="path-7"
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
                            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-9">
                                <stop stopColor="#0E91F5" offset="0%"></stop>
                                <stop stopColor="#035AE3" offset="100%"></stop>
                            </linearGradient>
                            <linearGradient x1="100%" y1="50%" x2="0%" y2="50%" id="linearGradient-10">
                                <stop stopColor="#0E91F5" offset="0%"></stop>
                                <stop stopColor="#035AE3" offset="100%"></stop>
                            </linearGradient>
                            <linearGradient
                                x1="100%"
                                y1="50%"
                                x2="0.364716199%"
                                y2="50%"
                                id="linearGradient-11">
                                <stop stopColor="#035BE3" offset="0%"></stop>
                                <stop stopColor="#035CE4" offset="1.61338596%"></stop>
                                <stop stopColor="#0E90F5" offset="100%"></stop>
                            </linearGradient>
                            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-12">
                                <stop stopColor="#0F92F6" offset="0%"></stop>
                                <stop stopColor="#035BE3" offset="100%"></stop>
                            </linearGradient>
                            <circle id="path-13" cx="14" cy="20" r="14"></circle>
                            <linearGradient
                                x1="50%"
                                y1="0%"
                                x2="50%"
                                y2="98.1465242%"
                                id="linearGradient-14">
                                <stop stopColor="#0E91F5" offset="0%"></stop>
                                <stop stopColor="#035AE3" offset="100%"></stop>
                            </linearGradient>
                        </defs>
                        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g id="数字金融-期望划分" transform="translate(-1295.000000, -193.000000)">
                                <g id="Group" transform="translate(1298.000000, 196.000000)">
                                    <use
                                        id="Rectangle-65"
                                        stroke="#2D78FF"
                                        mask="url(#mask-2)"
                                        strokeWidth="2"
                                        strokeDasharray="5"
                                        xlinkHref="#path-1"></use>
                                    <polyline
                                        id="Path-935"
                                        stroke="#2E5DDD"
                                        strokeWidth="6"
                                        points="35.5118236 0 0 0 0 32.2977295"></polyline>
                                    <polyline
                                        id="Path-935-Copy-5"
                                        stroke="#2E5DDD"
                                        strokeWidth="6"
                                        transform="translate(553.755912, 16.148865) scale(-1, 1) translate(-553.755912, -16.148865) "
                                        points="571.511824 0 536 0 536 32.2977295"></polyline>
                                    <polyline
                                        id="Path-935-Copy-4"
                                        stroke="#2E5DDD"
                                        strokeWidth="6"
                                        transform="translate(17.755912, 375.148865) scale(1, -1) translate(-17.755912, -375.148865) "
                                        points="35.5118236 359 0 359 0 391.29773"></polyline>
                                    <polyline
                                        id="Path-935-Copy-6"
                                        stroke="#2E5DDD"
                                        strokeWidth="6"
                                        transform="translate(553.755912, 375.148865) scale(-1, -1) translate(-553.755912, -375.148865) "
                                        points="571.511824 359 536 359 536 391.29773"></polyline>
                                    <g id="风险" transform="translate(26.000000, 31.000000)">
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
                                            id="Group-2"
                                            transform="translate(46.000000, 23.000000)"
                                            fill="url(#linearGradient-3)">
                                            <polygon
                                                id="Path-927"
                                                fillRule="nonzero"
                                                points="14.7371259 7.23500271 0 21.4427002 1.61639597 23 14.5028055 10.5765323 18.924881 16.1794785 32.4013587 3.17539112 32.6944011 2.14671482 33 1.29416002 32.6944011 1 31.9710208 1.29416002 30.7639659 1.63835176 19.1584784 12.8370328"></polygon>
                                            <polygon id="Path-928" points="2 30.5545819 6 27 6 34 2.00030554 34"></polygon>
                                            <polygon id="Path-929" points="10 22.8066404 14 19 14 34 10 34"></polygon>
                                            <polygon id="Path-929-Copy" points="19 22.7740035 23 19 23 34 19 34"></polygon>
                                            <polygon id="Path-929-Copy-2" points="28 16.3692602 32 13 32 34 28 34"></polygon>
                                            <polygon id="Path-930" points="28 2.37595913 34 0 31.6782185 6"></polygon>
                                        </g>
                                    </g>
                                    <g id="经验" transform="translate(284.000000, 78.000000)">
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
                                            id="Group-10"
                                            transform="translate(46.000000, 23.000000)"
                                            stroke="url(#linearGradient-4)"
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
                                    <g id="短期" filter="url(#filter-5)" transform="translate(26.000000, 133.000000)">
                                        <g id="Rectangle-64">
                                            <use
                                                fillOpacity="0.779013813"
                                                fill="#0E3AAA"
                                                fillRule="evenodd"
                                                xlinkHref="#path-7"></use>
                                            <use fill="black" fillOpacity="1" filter="url(#filter-8)" xlinkHref="#path-7"></use>
                                            <path
                                                stroke="url(#linearGradient-6)"
                                                strokeWidth="3"
                                                d="M25.602288,1.5 L236.404808,1.5 L260.235901,40.0464946 L236.405851,78.5 L25.5868933,78.5 L1.76415306,40.6861846 L25.602288,1.5 Z"></path>
                                        </g>
                                        <text
                                            id="短期期望"
                                            fontFamily="PingFangSC-Semibold, PingFang SC"
                                            fontSize="30"
                                            fontWeight="500"
                                            fill="#FFFFFF">
                                            <tspan x="96" y="51">短期期望</tspan>
                                        </text>
                                        <g id="Group-21" transform="translate(52.000000, 23.000000)">
                                            <path
                                                d="M21,33 L1,33 L1,17.9965015 C1,13.0281461 5.03055526,9 10.0021973,9 L11.9978027,9 C16.9718831,9 21,13.0241465 21,17.9965015 L21,33 Z"
                                                id="Rectangle-6"
                                                stroke="#FFFFFF"
                                                strokeWidth="2"></path>
                                            <path
                                                d="M6.04157575,1 L15.9584243,1 L12.0790292,6 L9.92097078,6 L6.04157575,1 Z"
                                                id="Rectangle-7"
                                                stroke="#FFFFFF"
                                                strokeWidth="2"></path>
                                            <polygon
                                                id="Path-936"
                                                fill="#FFFFFF"
                                                points="11.9863078 12.2719192 6.44365383 19.0664711 11.9750872 22.7032267 8.17226684 28.7770958 16.0359813 21.811029 9.88565746 19.0069521"></polygon>
                                        </g>
                                    </g>
                                    <g id="目的" transform="translate(26.000000, 235.000000)">
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
                                        <g id="Group-22" transform="translate(46.000000, 23.000000)">
                                            <circle id="Oval-52" fill="url(#linearGradient-3)" cx="17" cy="17" r="4"></circle>
                                            <circle
                                                id="Oval-52-Copy"
                                                stroke="url(#linearGradient-4)"
                                                strokeWidth="2"
                                                cx="17"
                                                cy="17"
                                                r="12"></circle>
                                            <path
                                                d="M17,0 L17,10.0046567"
                                                id="Path-52"
                                                stroke="url(#linearGradient-9)"
                                                strokeWidth="4"></path>
                                            <path
                                                d="M17,24 L17,33.9832446"
                                                id="Path-52-Copy"
                                                stroke="url(#linearGradient-9)"
                                                strokeWidth="4"
                                                transform="translate(17.000000, 28.991622) scale(-1, 1) translate(-17.000000, -28.991622) "></path>
                                            <path
                                                d="M24,17 L33.9980221,17.0011879"
                                                id="Path-52-Copy-2"
                                                stroke="url(#linearGradient-10)"
                                                strokeWidth="4"></path>
                                            <path
                                                d="M0,17 L10,17"
                                                id="Path-52-Copy-3"
                                                stroke="url(#linearGradient-10)"
                                                strokeWidth="4"></path>
                                        </g>
                                    </g>
                                    <g id="目标" transform="translate(284.000000, 282.000000)">
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
                                        <g id="Group-12" transform="translate(46.000000, 23.000000)">
                                            <circle
                                                id="Oval-5-Copy"
                                                stroke="url(#linearGradient-4)"
                                                strokeWidth="2"
                                                cx="17"
                                                cy="17"
                                                r="16"></circle>
                                            <path
                                                d="M8,17 L26,17"
                                                id="Path-53"
                                                stroke="url(#linearGradient-11)"
                                                strokeWidth="2"></path>
                                            <path
                                                d="M17,16.4882135 L17,26"
                                                id="Path-53-Copy"
                                                stroke="url(#linearGradient-12)"
                                                strokeWidth="2"></path>
                                            <path
                                                d="M14.779325,13.6725422 C13.7064696,14.3899674 13,15.6124813 13,17 C13,19.209139 14.790861,21 17,21 C19.209139,21 21,19.209139 21,17 C21,15.6647568 20.3457608,14.4823193 19.3403578,13.7557629 L17.0740987,6.46010686 L14.779325,13.6725422 Z"
                                                id="Combined-Shape"
                                                fill="url(#linearGradient-3)"></path>
                                        </g>
                                    </g>
                                    <g id="投资" transform="translate(284.000000, 180.000000)">
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
                                        <g id="Group-13" transform="translate(46.000000, 23.000000)">
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
                                            <g id="Oval-53">
                                                <use fill="#080725" fillRule="evenodd" xlinkHref="#path-13"></use>
                                                <circle stroke="url(#linearGradient-4)" strokeWidth="2" cx="14" cy="20" r="13"></circle>
                                            </g>
                                            <circle
                                                id="Oval-6"
                                                stroke="url(#linearGradient-14)"
                                                strokeWidth="2"
                                                cx="14"
                                                cy="16"
                                                r="3"></circle>
                                            <path
                                                d="M20.4128009,25.4454397 C19.2296876,23.1048373 16.8026723,21.5 14.0008273,21.5 C11.2041256,21.5 8.78087878,23.0989507 7.59538176,25.4325573"
                                                id="Oval-7"
                                                stroke="url(#linearGradient-14)"
                                                strokeWidth="2"></path>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
                <div className="bottom-content"></div>
            </div>
        </div>
    }
}
export default Expect;