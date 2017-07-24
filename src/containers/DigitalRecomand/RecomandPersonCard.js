import React, { Component } from 'react';

export default class RecomandPersonCard extends Component {
  constructor() {
    super();
    this.typelist = {
      blue: {
        iconColorStart: '#1EE7CE',
        iconColorEnd: '#1ED2E1',
        hanabiColorStart: '#328DEC',
        hanabiColorEnd: '#1B3686',
        InfoStrokeColor: '#09B0CA',
        InfoFillColor: '#1CEEFF',
        stepPointFillColor: '#79FFF9',
        cardInfo: ['性别：女', '年龄：20～25', '爱好品牌：', 'ZARA', '亦谷']
      },
      red: {
        iconColorStart: '#F0506B',
        iconColorEnd: '#AE1735',
        hanabiColorStart: '#EC3291',
        hanabiColorEnd: '#861B40',
        InfoStrokeColor: '#C35648',
        InfoFillColor: '#FF3F1C',
        stepPointFillColor: '#FA6767',
        cardInfo: ['性别：男', '年龄：20～30', '爱好品牌：', '迪士尼（童鞋）', '亦谷']
      }
    };
  }
  render() {
    const { type = 'red' } = this.props;

    return (
      <svg
        // width="671px"
        // height="420px"
        viewBox="0 0 671 420"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        {...this.props}
      >
        <defs>
          <polygon
            id="card-path-1"
            points="8.15889338 8.89243264 108.148736 8.89243264 115.50093 0.5 267.119514 0.5 274.798473 8.89243264 417.26766 8.89243264 423.802944 2.5 501.082675 2.5 509.251779 8.89243264 561.370668 8.89243264 561.370668 68.0739864 561.370668 74.9587635 561.370668 145.687938 561.370668 152.619063 561.370668 174.54339 571 183.822727 571 234.137358 561.370668 244.653941 561.370668 314.904369 460.073769 314.904369 451.5779 322.059557 413.673254 322.059557 404.850621 314.904369 219.575325 314.904369 212.713277 320.5 79.3934869 320.5 72.8582031 314.904369 8.15889338 314.904369 8.15889338 279.230471 8.15889338 268.781593 8.15889338 202.382776 8.15889338 193.035734 8.15889338 144.6569 0 133.315487 0 85.8877613 8.15889338 74.9587635"
          />
          <filter
            x="-13.2%"
            y="-23.5%"
            width="126.4%"
            height="146.9%"
            filterUnits="objectBoundingBox"
            id="card-filter-2"
          >
            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1" />
            <feGaussianBlur stdDeviation="25" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
            <feComposite
              in="shadowBlurOuter1"
              in2="SourceAlpha"
              operator="out"
              result="shadowBlurOuter1"
            />
            <feColorMatrix
              values="0 0 0 0 0.395345742   0 0 0 0 0.0333412247   0 0 0 0 1  0 0 0 0.615432518 0"
              type="matrix"
              in="shadowBlurOuter1"
            />
          </filter>
          <path
            d="M349.5,62.9298103 L374.616444,37.5 L533.5,37.5 L533.5,283.5 L349.5,283.5 L349.5,62.9298103 Z"
            id="card-path-3"
          />
          <mask
            id="card-mask-4"
            maskContentUnits="userSpaceOnUse"
            maskUnits="objectBoundingBox"
            x="0"
            y="0"
            width="185"
            height="247"
            fill="white"
          >
            <use xlinkHref="#card-path-3" />
          </mask>

          <linearGradient x1="50%" y1="0%" x2="50%" y2="82.5600421%" id="card-linearGradient-5">
            <stop stopColor={this.typelist[type].hanabiColorStart} offset="0%" />
            <stop stopColor={this.typelist[type].hanabiColorEnd} stopOpacity="0" offset="100%" />
          </linearGradient>

          <linearGradient
            x1="38.7908125%"
            y1="15.6555404%"
            x2="64.7623841%"
            y2="100%"
            id="card-linearGradient-6"
          >
            <stop stopColor={this.typelist[type].iconColorStart} offset="0%" />
            <stop stopColor={this.typelist[type].iconColorEnd} offset="100%" />
          </linearGradient>

          {/* 以下*/}

          <linearGradient
            x1="-12.6547442%"
            y1="24.3374224%"
            x2="118.748914%"
            y2="77.6605872%"
            id="card-linearGradient-7"
          >
            <stop stopColor="#F25A5A" offset="0%" />
            <stop stopColor="#ED359C" offset="50.3069196%" />
            <stop stopColor="#940B0B" offset="100%" />
          </linearGradient>
          <filter
            x="-3.6%"
            y="-4.5%"
            width="107.2%"
            height="108.9%"
            filterUnits="objectBoundingBox"
            id="card-filter-8"
          >
            <feGaussianBlur stdDeviation="2" in="SourceGraphic" />
          </filter>
          <linearGradient
            x1="50%"
            y1="150%"
            x2="50%"
            y2="-60%"
            id="card-linearGradient-9"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF104A" offset="0%" />
            <stop stopColor="#430C28" opacity="0" offset="100%" />
          </linearGradient>
          <polyline
            id="card-path-10"
            stroke="url(#card-linearGradient-7)"
            strokeWidth="2.88"
            strokeDasharray="6.048000240325927,4.032000160217285"
            points="20.1088435 78.9901073 40.5983016 85.216549 48.4883323 67 184.23214 106.17683 148.361348 211.188585 227.189937 233.318537"
          />

          <circle
            id={`card-path-11-${type}`}
            fill={this.typelist[type].stepPointFillColor}
            cx="0"
            cy="0"
            r="3"
          />

          {/* 当中*/}

          <filter
            x="-3.6%"
            y="-5.7%"
            width="107.2%"
            height="111.4%"
            filterUnits="objectBoundingBox"
            id="card-filter-12"
          >
            <feGaussianBlur stdDeviation="2" in="SourceGraphic" />
          </filter>
          <linearGradient
            x1="0%"
            y1="25.907367%"
            x2="108.561985%"
            y2="79.2818843%"
            id="card-linearGradient-13"
          >
            <stop stopColor="#16E4D8" offset="0%" />
            <stop stopColor="#56FF7B" offset="50.4185268%" />
            <stop stopColor="#0EC5FF" offset="100%" />
          </linearGradient>
          <linearGradient
            x1="50%"
            y1="0%"
            x2="50%"
            y2="100%"
            id="card-linearGradient-14"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#10FEFF" offset="0%" />
            <stop stopColor="#0C1C43" stopOpacity="0" offset="100%" />
          </linearGradient>
          <linearGradient
            x1="6.40763271%"
            y1="50%"
            x2="100%"
            y2="50%"
            id="card-linearGradient-15"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#79FFF9" offset="0%" />
            <stop stopColor="#0C1C43" stopOpacity="0" offset="100%" />
          </linearGradient>

          {/* 以上*/}

          <path
            d="M115.296797,122.258752 L167.794512,137.704915 L157.464582,163.993644 L104.677006,148.336098 L115.296797,122.258752 Z M182.390079,141.483231 L225.91983,153.325754 L215.867103,179.318293 L172.44874,166.673274 L182.390079,141.483231 Z M99.7708908,165.432822 L152.007857,181.159985 L140.929859,210.320741 L87.8144493,194.154356 L99.7708908,165.432822 Z M164.979445,186.506588 L209.074993,200.090807 L198.198252,229.605977 L154.047009,215.162302 L164.979445,186.506588 Z M240.558433,158.62932 L293.805482,173.889416 L285.304586,200.619898 L231.57528,185.592704 L240.558433,158.62932 Z M223.481961,204.305813 L277.208736,219.593755 L267.629406,249.213985 L213.308986,233.067852 L223.481961,204.305813 Z M293.096652,224.958079 L311.218648,230.441384 L302.691171,260.036298 L283.370493,254.582105 L293.096652,224.958079 Z M64.2957195,215.867397 L213.238236,262.321726 L200.72026,301.544895 L49.8546614,255.113158 L64.2957195,215.867397 Z M187.145415,72.8448407 L263.755027,94.6569207 L253.34021,124.823132 L176.753989,103.032216 L187.145415,72.8448407 Z M270.055156,96.9905081 L310.498063,109.229867 L301.592559,139.565389 L261.015986,127.045331 L270.055156,96.9905081 Z M73.7840991,40.6943464 L181.555952,70.8650802 L170.683981,100.372529 L115.74621,84.7032296 L112.097045,92.283948 L89.686533,85.8349741 L64.5057639,61.4181873 L73.7840991,40.6943464 Z M61.5428698,66.393923 L86.5977679,90.4221516 L66.032634,138.76647 L34.3558262,129.482662 L61.5428698,66.393923 Z"
            id="card-path-16-red"
            strokeOpacity="0.636548913"
            stroke="#194D7D"
            fill="#0D183F"
          />
          <path
            d="M34.1752865,179.062796 L57.5737853,186.08137 L45.461583,214.994579 L60.8107511,220.03293 L49.2431914,247.61461 L32.538107,242.587639 L34.1752865,179.062796 Z M67.0278064,221.702626 L181.805962,256.741845 L171.399223,285.666435 L56.2520108,250.224017 L67.0278064,221.702626 Z M64.8752485,103.51517 L84.410849,122.254128 L68.874714,159.545079 L44.2145952,151.950972 L64.8752485,103.51517 Z M75.9729523,85.0656028 L157.033663,107.995871 L148.891662,130.778192 L107.27446,119.044801 L104.348022,124.392054 L86.2349954,119.465883 L67.993531,101.074845 L75.9729523,85.0656028 Z M162.938565,109.181079 L221.781107,124.939948 L214.681243,148.541672 L155.599709,131.05783 L162.938565,109.181079 Z M226.790194,127.007965 L259.579308,135.892956 L252.172167,157.073865 L220.890169,148.718884 L226.790194,127.007965 Z M105.684429,146.047696 L147.194328,158.257447 L139.75142,179.179854 L97.1441065,166.83191 L105.684429,146.047696 Z M94.2859519,180.044779 L135.512962,192.082194 L126.558061,213.19482 L85.8594358,201.09725 L94.2859519,180.044779 Z M162.164685,163.692493 L194.26446,172.063732 L187.478375,190.075958 L155.111969,181.919325 L162.164685,163.692493 Z M205.287377,175.871353 L245.355192,186.804851 L239.998185,205.212147 L198.241164,194.013643 L205.287377,175.871353 Z M146.935826,196.58078 L180.571981,207.187493 L172.568172,227.719708 L138.678393,217.420271 L146.935826,196.58078 Z M191.655052,211.117049 L234.028251,223.193483 L227.060077,243.572873 L184.325951,230.673784 L191.655052,211.117049 Z M259.27547,191.777341 L292.522259,201.393566 L287.726687,219.569661 L253.607801,209.180703 L259.27547,191.777341 Z M246.107254,227.241632 L259.459696,230.575456 L253.12318,250.475524 L239.441749,246.740912 L246.107254,227.241632 Z M270.184514,233.899635 L281.679831,236.978413 L276.38279,256.101553 L264.78567,252.586624 L270.184514,233.899635 Z"
            id="card-path-16-blue"
            strokeOpacity="0.636548913"
            stroke="#194D7D"
            fill="#0D173D"
          />

          <path
            d="M23,178.794581 L56.5516064,101 L118.703221,119.151522 L106.290869,156.109279 L205.356875,184.31658 L217.193332,146.503187 L247.817819,155.980796 C247.817819,155.980796 262.54736,164.621905 259.613433,176.886484 C256.679505,189.151063 243.001004,237.795229 243.001004,237.795229 L257.863968,241.780909 L255.760526,249.990099"
            id="card-path-17"
            stroke="url(#card-linearGradient-13)"
            strokeWidth="2.88"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

        </defs>

        <g
          id="personal-card"
          transform="translate(50, 50)"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g id="border" opacity="0.31884058">
            <use
              fill="black"
              fillOpacity="1"
              filter="url(#card-filter-2)"
              xlinkHref="#card-path-1"
            />
            <use
              fillOpacity="0.322775136"
              fill="#01225F"
              fillRule="evenodd"
              xlinkHref="#card-path-1"
            />
            <use stroke="#40C1FF" strokeWidth="2.5" xlinkHref="#card-path-1" />
          </g>

          <polyline
            id="border-lt"
            stroke="#108EE9"
            strokeWidth="4"
            points="8 31.4088417 8 8.5 8 8.5 25.8143544 8.5"
          />
          <polyline
            id="border-lb"
            stroke="#108EE9"
            strokeWidth="4"
            points="8 291.5 8 314.408842 8 314.408842 25.8143544 314.408842"
          />
          <polyline
            id="border-rt"
            stroke="#108EE9"
            strokeWidth="4"
            points="559.814354 32.4088417 559.814354 9.5 559.814354 9.5 542 9.5"
          />
          <polyline
            id="border-rb"
            stroke="#108EE9"
            strokeWidth="4"
            points="559.814354 291.5 559.814354 314.408842 559.814354 314.408842 542 314.408842"
          />

          <use
            id="info-div"
            className="build-big-dot"
            stroke={this.typelist[type].InfoStrokeColor}
            mask="url(#card-mask-4)"
            strokeWidth="2"
            fillOpacity="0.08"
            fill={this.typelist[type].InfoFillColor}
            strokeDasharray="5"
            xlinkHref="#card-path-3"
          />
          {/*
          <use
            id="hanabi-right"
            className="trans-center hanabi-right"
            stroke={this.typelist[type].InfoStrokeColor}
            strokeWidth="2"
            xlinkHref="#card-path-3"
          />
        */}
          <polygon
            id="hanabi-path"
            className="trans-center hanabi-right"
            stroke={this.typelist[type].InfoStrokeColor}
            strokeWidth="2"
            points="363 76.766899 384.562056 55 520 55 520 264 363 264"
          />

          {this.typelist[type].cardInfo.map((v, i) =>
            <text
              // id="gender"
              fontFamily="PingFangSC-Regular, PingFang SC"
              fontSize="18"
              fontWeight="normal"
              fill="#FFFFFF"
              key={i}
            >
              <tspan x="377" y={127 + i * 31}>{v}</tspan>
            </text>
          )}
          <text
            id="name"
            fontFamily="PingFangSC-Regular, PingFang SC"
            fontSize="20"
            fontWeight="normal"
            fill="#FFFFFF"
          >
            <tspan x="417" y="79">客户2</tspan>
          </text>

          <path
            d="M393.476749,82.3269431 C393.795044,82.3269431 394.052194,82.0503158 394.062151,81.6973214 L394.068383,81.4777396 L394.077532,81.4777396 C394.086067,81.3178724 394.090042,81.1758024 394.090042,81.0409011 C394.090408,77.2493046 391.97607,73.8921762 388.703899,72.4883467 L388.336913,72.3308236 L388.660752,72.0975976 C390.227756,70.9687824 391.163268,69.0847586 391.163268,67.0579074 C391.163268,63.7175536 388.64297,61 385.545117,61 C382.44729,61 379.927066,63.7175536 379.927066,67.0579074 C379.927066,69.0846343 380.862554,70.9686581 382.429385,72.0975976 L382.753225,72.3308236 L382.386289,72.4883467 C379.114339,73.8921523 377,77.2491827 377,81.0406573 C377,81.1748992 377.004317,81.3148878 377.013466,81.4778639 L377.027766,81.4778639 L377.029163,81.703852 C377.029163,82.0619792 377.292959,82.3534024 377.617289,82.3534024 C377.941324,82.3534024 393.158698,82.3269431 393.476749,82.3269431 Z M392.033979,72.8776239 C393.504857,73.0525309 394.836737,73.8103322 395.7904,75.0157583 C396.740262,76.2165129 397.263462,77.7929746 397.263462,79.4547283 C397.263462,79.819606 397.532263,80.1164319 397.862553,80.1164319 C398.183645,80.1164319 398.445357,79.8373101 398.458331,79.4812116 L398.459999,79.4609388 C398.460488,79.4573688 398.460956,79.4538968 398.461543,79.4506207 C398.459999,76.2964215 396.700452,73.5060484 393.978389,72.340972 L393.610473,72.1835469 L393.935247,71.9500771 C395.23801,71.0140187 396.01581,69.4495621 396.01581,67.7651173 C396.01581,65.4325653 394.556828,63.4329047 392.462233,62.884857 L392.449723,62.8901379 L392.392401,62.8842453 C392.380014,62.8830481 392.367653,62.8812632 392.355266,62.87933 C392.350359,62.8786466 392.345283,62.8776669 392.34023,62.8771794 C392.005257,62.8783766 391.733095,63.1797762 391.733095,63.5500326 C391.733095,63.8826085 391.950435,64.1608271 392.249749,64.2116621 L392.277488,64.2163313 L392.303121,64.2275812 C392.332898,64.2406138 392.376385,64.2551374 392.432406,64.2706909 C392.444301,64.2739407 392.452837,64.2768272 392.457523,64.2784665 L392.457523,64.2784665 C393.833332,64.7805203 394.757708,66.1629299 394.757708,67.7183636 C394.757708,69.4562863 393.609492,70.948046 392.021101,71.2834343 L391.996206,71.297934 L391.943103,71.301504 C391.567119,71.3271557 391.272615,71.6695119 391.272615,72.0809688 C391.272615,72.5028703 391.574331,72.84618 391.959464,72.8628303 L392.009452,72.8649833 L392.033979,72.8776239 L392.033979,72.8776239 Z"
            id="info-icon"
            fill="url(#card-linearGradient-6)"
            fillRule="nonzero"
          />

          <use
            id={`building-${type}-bottom`}
            xlinkHref={`#card-path-16-${type}`}
            transform="translate(1, 3)"
          />
          <use id={`building-${type}-top`} xlinkHref={`#card-path-16-${type}`} />
          {/*          <use id="building-1-bottom" xlinkHref="#card-path-8" transform="translate(1, 3)" />
                              <use id="building-1-top" xlinkHref="#card-path-8" />*/}

          {type === 'red'
            ? <g id="steps" transform="translate(55.000000, 38.000000)">

              <use
                id="step-card-path-shadow"
                opacity="0.309499547"
                filter="url(#card-filter-8)"
                transform="translate(0, 10)"
                xlinkHref="#card-path-10"
              />
              <use id="step-card-path" xlinkHref="#card-path-10" />

              <circle
                id="step-red-4-shadow"
                className="path-point-shadow"
                fillOpacity="0.5"
                fill="#FA6767"
                cx="227"
                cy="233.004262"
                r="5.99786881"
              />

              <use id="step-red-4" xlinkHref={`#card-path-11-${type}`} x="227" y="232.993606" />
              <use id="step-red-3" xlinkHref={`#card-path-11-${type}`} x="156" y="188.993606" />
              <use id="step-red-2" xlinkHref={`#card-path-11-${type}`} x="169" y="101.993606" />
              <use
                id="step-red-1"
                xlinkHref={`#card-path-11-${type}`}
                x="88.4038325"
                y="78.5021115"
              />

              <circle
                id="step-red-0-shadow"
                className="path-point-shadow"
                fillOpacity="0.5"
                fill="#FA6767"
                cx="21"
                cy="80"
                r="8"
              />

              <circle id="step-red-0" fill="#FA6767" cx="21" cy="80" r="5" />

              <path
                d="M21,30 L21,73.460342"
                id="step-red-line-0"
                className="path-line-up"
                stroke="url(#card-linearGradient-9)"
                strokeDasharray="5"
                strokeWidth="1"
              />
              <path
                d="M88,34 L88,77.460342"
                id="step-red-line-1"
                className="path-line-up"
                stroke="url(#card-linearGradient-9)"
                strokeDasharray="5"
                strokeWidth="1"
              />
              <path
                d="M169,57 L169,100.460342"
                id="step-red-line-2"
                className="path-line-up"
                stroke="url(#card-linearGradient-9)"
                strokeDasharray="5"
                strokeWidth="1"
              />
              <path
                d="M155,140 L155,183.460342"
                id="step-red-line-3"
                className="path-line-up"
                stroke="url(#card-linearGradient-9)"
                strokeDasharray="5"
                strokeWidth="1"
              />
              <path
                d="M227,188 L227,231.460342"
                id="step-red-line-4"
                className="path-line-up"
                stroke="url(#card-linearGradient-9)"
                strokeDasharray="5"
                strokeWidth="1"
              />

              <text
                id="step-0"
                className="path-step-text"
                fontFamily="PingFangSC-Regular, PingFang SC"
                fontSize="14"
                fontWeight="normal"
                fill="#FF6F93"
              >
                <tspan x="0" y="15">出发点</tspan>
              </text>
              <text
                id="step1"
                className="path-step-text"
                fontFamily="PingFangSC-Regular, PingFang SC"
                fontSize="14"
                fontWeight="normal"
                fill="#FF6F93"
              >
                <tspan x="71" y="19">step1</tspan>
              </text>
              <text
                id="step2"
                className="path-step-text"
                fontFamily="PingFangSC-Regular, PingFang SC"
                fontSize="14"
                fontWeight="normal"
                fill="#FF6F93"
              >
                <tspan x="152" y="42">step2</tspan>
              </text>
              <text
                id="step3"
                className="path-step-text"
                fontFamily="PingFangSC-Regular, PingFang SC"
                fontSize="14"
                fontWeight="normal"
                fill="#FF6F93"
              >
                <tspan x="138" y="125">step3</tspan>
              </text>
              <text
                id="step-4"
                className="path-step-text"
                fontFamily="PingFangSC-Regular, PingFang SC"
                fontSize="14"
                fontWeight="normal"
                fill="#FF6F93"
              >
                <tspan x="213" y="173">终点</tspan>
              </text>
            </g>
            : <g id="steps-blue" transform="translate(40.000000, 30.000000)">
              <use
                id="step-card-path-shadow-blue"
                xlinkHref="#card-path-17"
                opacity="0.198652627"
                transform="translate(3, 11)"
                filter="url(#card-filter-12)"
              />
              <use id="step-card-path-blue" xlinkHref="#card-path-17" />

              <circle
                id="step-blue-5-shadow"
                className="path-point-shadow"
                fillOpacity="0.5"
                fill="#79FFF9"
                cx="255.25"
                cy="249.730198"
                r="6"
              />

              <use id="step-blue-5" xlinkHref={`#card-path-11-${type}`} x="255.5" y="250" />
              <use id="step-blue-4" xlinkHref={`#card-path-11-${type}`} x="257" y="187.785479" />
              <use id="step-blue-3" xlinkHref={`#card-path-11-${type}`} x="182" y="177.250825" />
              <use id="step-blue-2" xlinkHref={`#card-path-11-${type}`} x="112" y="139.125413" />
              <use id="step-blue-1" xlinkHref={`#card-path-11-${type}`} x="53" y="109.026403" />

              <circle
                id="step-blue-0-shadow"
                className="path-point-shadow"
                fillOpacity="0.5"
                fill="#79FFF9"
                cx="22"
                cy="179"
                r="8"
              />
              <circle id="step-blue-0" fill="#79FFF9" cx="22" cy="179" r="5" />

              <path
                d="M22,183.774655 L22,96"
                id="step-blue-line-0"
                className="path-line-up"
                stroke="url(#card-linearGradient-14)"
                strokeDasharray="5"
              />
              <path
                d="M52,113.774655 L52,26"
                id="step-blue-line-1"
                className="path-line-up"
                stroke="url(#card-linearGradient-14)"
                strokeDasharray="5"
              />
              <path
                d="M112,143.774655 L112,56"
                id="step-blue-line-2"
                className="path-line-up"
                stroke="url(#card-linearGradient-14)"
                strokeDasharray="5"
              />
              <path
                d="M182,182.774655 L182,95"
                id="step-blue-line-3"
                className="path-line-up"
                stroke="url(#card-linearGradient-14)"
                strokeDasharray="5"
              />
              <path
                d="M257,192.774655 L257,105"
                id="step-blue-line-4"
                className="path-line-up"
                stroke="url(#card-linearGradient-14)"
                strokeDasharray="5"
              />
              <path
                d="M254.511014,249.318114 L186.489731,249.318114"
                id="step-blue-line-5"
                className="path-line-right"
                stroke="url(#card-linearGradient-15)"
                strokeDasharray="5"
              />

              <text
                id="step-0"
                className="path-step-text"
                fontFamily="PingFangSC-Regular, PingFang SC"
                fontSize="14"
                fontWeight="normal"
                fill="#1CDBFF"
              >
                <tspan x="0" y="85">出发点</tspan>
              </text>
              <text
                id="step-1"
                className="path-step-text"
                fontFamily="PingFangSC-Regular, PingFang SC"
                fontSize="14"
                fontWeight="normal"
                fill="#1CDBFF"
              >
                <tspan x="32" y="15">step 1</tspan>
              </text>
              <text
                id="step-2"
                className="path-step-text"
                fontFamily="PingFangSC-Regular, PingFang SC"
                fontSize="14"
                fontWeight="normal"
                fill="#1CDBFF"
              >
                <tspan x="92" y="45">step 2</tspan>
              </text>
              <text
                id="step-3"
                className="path-step-text"
                fontFamily="PingFangSC-Regular, PingFang SC"
                fontSize="14"
                fontWeight="normal"
                fill="#1CDBFF"
              >
                <tspan x="162" y="84">step 3</tspan>
              </text>
              <text
                id="step-4"
                className="path-step-text"
                fontFamily="PingFangSC-Regular, PingFang SC"
                fontSize="14"
                fontWeight="normal"
                fill="#1CDBFF"
              >
                <tspan x="235" y="94">step 4</tspan>
              </text>
              <text
                id="step-5"
                className="path-step-text"
                fontFamily="PingFangSC-Regular, PingFang SC"
                fontSize="14"
                fontWeight="normal"
                fill="#1CDBFF"
              >
                <tspan x="155" y="254">终点</tspan>
              </text>
            </g>}

        </g>

      </svg>
    );
  }
}
