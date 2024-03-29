import React, { Component } from 'react';
// import anime from 'animejs';

export default class LifeOSUVRoundBoard extends Component {
  // componentDidMount() {
  //   const lineDrawing = anime({
  //     targets: '.round-circle-4',
  //     strokeDasharray: '200%', // '200%', // ['33%', '27%', '22%', '20.5%', '22.5%', '46%'],
  //     easing: 'linear', // 'easeInOutSine',
  //     delay: (el, i) => {
  //       return 1000;
  //     },
  //     duration: 2000,
  //     // direction: 'reverse',
  //     loop: true
  //   });
  // }
  render() {
    return (
      <svg
        // width="540px"
        // height="550px"
        viewBox="0 0 540 550"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        // {...this.props}
        className={this.props.className}
      >
        <defs>
          <linearGradient x1="50%" y1="0%" x2="50%" y2="98.4913106%" id="board-linearGradient-1">
            <stop stopColor="#2ED1FE" offset="0%" />
            <stop stopColor="#07499B" offset="100%" />
          </linearGradient>
          <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="board-linearGradient-2">
            <stop stopColor="#0D9799" offset="0%" />
            <stop stopColor="#30FFC2" offset="100%" />
          </linearGradient>
          <circle id="board-path-3" cx="339" cy="337" r="90" />
          <filter
            x="-6.4%"
            y="-6.4%"
            width="112.8%"
            height="112.8%"
            filterUnits="objectBoundingBox"
            id="board-filter-4"
          >
            <feGaussianBlur stdDeviation="11" in="SourceAlpha" result="shadowBlurInner1" />
            <feOffset dx="0" dy="0" in="shadowBlurInner1" result="shadowOffsetInner1" />
            <feComposite
              in="shadowOffsetInner1"
              in2="SourceAlpha"
              operator="arithmetic"
              k2="-1"
              k3="1"
              result="shadowInnerInner1"
            />
            <feColorMatrix
              values="0 0 0 0 0.766078756   0 0 0 0 0.928965492   0 0 0 0 1  0 0 0 0.472741168 0"
              type="matrix"
              in="shadowInnerInner1"
            />
          </filter>
        </defs>

        <g
          id="bordPanel"
          transform="translate(-70.000000, -63.000000)"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <path
            d="M73.3246128,398.51834 C100.856709,520.168155 209.617594,611 339.593395,611 L339.593395,611 C469.555993,611 578.307986,520.186606 605.853785,398.555408 M607.193496,283.701832 C582.015697,158.941161 471.775113,65 339.593395,65 C207.423409,65 97.1906629,158.924485 72,283.66861"
            id="Oval-7"
            className="round-circle-7"
            stroke="#49FFE8"
            strokeWidth="4"
            opacity="0.241168478"
            strokeLinecap="round"
          />
          <path
            d="M95.4754658,393.804452 C120.762719,505.535492 220.655735,588.96132 340.033897,588.96132 L340.033897,588.96132 C459.399933,588.96132 559.284781,505.552439 584.58462,393.838498 M585.815097,288.349563 C562.690182,173.761312 461.438116,87.4796882 340.033897,87.4796882 C218.640454,87.4796882 117.395586,173.745996 94.258856,288.319049"
            id="Oval-6"
            className="round-circle-6"
            stroke="#2AADFF"
            strokeWidth="4"
            opacity="0.313066123"
            strokeLinecap="round"
            strokeDasharray="5,15,9"
            // transform="translate(340.036976, 338.220504) rotate(-60.000000) translate(-340.036976, -338.220504) "
          />
          <circle
            id="Oval-5-line"
            className="round-circle-5-line"
            stroke="#0073CC"
            strokeWidth="2"
            opacity="0.908854167"
            strokeDasharray="10"
            cx="340"
            cy="338"
            r="190"
          />
          <circle
            id="Oval-5"
            className="round-circle-5"
            stroke="url(#board-linearGradient-1)"
            strokeWidth="34"
            cx="339.5"
            cy="337.5"
            r="190.5"
            {...this.props.outerDashArray || null}
          />
          <circle
            id="Oval-4-line"
            className="round-circle-4-line"
            stroke="#20CFAF"
            strokeWidth="2"
            opacity="0.908854167"
            strokeDasharray="10"
            cx="340"
            cy="337"
            r="155"
          />
          <circle
            id="Oval-4"
            className="round-circle-4"
            stroke="url(#board-linearGradient-2)"
            strokeWidth="34"
            cx="339.5"
            cy="337.5"
            r="154.5"
            {...this.props.innerDashArray || null}
          />
          <g id="Oval-3" transform="translate(227.000000, 225.000000)" fill="#20E8FF">
            <rect
              id="Oval-3-line-12"
              x="111"
              y="0"
              width="2"
              height="16"
              className="round-circle-3"
            />
            <rect
              id="Oval-3-line-11"
              x="111"
              y="208"
              width="2"
              height="16"
              className="round-circle-3"
            />
            <rect
              id="Oval-3-line-10"
              className="round-circle-3"
              transform="translate(202.561487, 59.866025) rotate(60.000000) translate(-202.561487, -59.866025) "
              x="201.561487"
              y="51.8660254"
              width="2"
              height="16"
            />
            <rect
              id="Oval-3-line-9"
              className="round-circle-3"
              transform="translate(22.428203, 163.866025) rotate(60.000000) translate(-22.428203, -163.866025) "
              x="21.4282032"
              y="155.866025"
              width="2"
              height="16"
            />
            <rect
              id="Oval-3-line-8"
              className="round-circle-3"
              transform="translate(22.428203, 61.866025) scale(-1, 1) rotate(60.000000) translate(-22.428203, -61.866025) "
              x="21.4282032"
              y="53.8660254"
              width="2"
              height="16"
            />
            <rect
              id="Oval-3-line-7"
              className="round-circle-3"
              transform="translate(202.561487, 165.866025) scale(-1, 1) rotate(60.000000) translate(-202.561487, -165.866025) "
              x="201.561487"
              y="157.866025"
              width="2"
              height="16"
            />
            <rect
              id="Oval-3-line-6"
              className="round-circle-3"
              transform="translate(163.866025, 22.428203) rotate(30.000000) translate(-163.866025, -22.428203) "
              x="162.866025"
              y="14.4282032"
              width="2"
              height="16"
            />
            <rect
              id="Oval-3-line-5"
              className="round-circle-3"
              transform="translate(59.866025, 202.561487) rotate(30.000000) translate(-59.866025, -202.561487) "
              x="58.8660254"
              y="194.561487"
              width="2"
              height="16"
            />
            <rect
              id="Oval-3-line-4"
              className="round-circle-3"
              transform="translate(59.866025, 22.428203) scale(-1, 1) rotate(30.000000) translate(-59.866025, -22.428203) "
              x="58.8660254"
              y="14.4282032"
              width="2"
              height="16"
            />
            <rect
              id="Oval-3-line-3"
              className="round-circle-3"
              transform="translate(163.866025, 202.561487) scale(-1, 1) rotate(30.000000) translate(-163.866025, -202.561487) "
              x="162.866025"
              y="194.561487"
              width="2"
              height="16"
            />
            <rect
              id="Oval-3-line-2"
              className="round-circle-3"
              transform="translate(216.000000, 112.000000) rotate(90.000000) translate(-216.000000, -112.000000) "
              x="215"
              y="104"
              width="2"
              height="16"
            />
            <rect
              id="Oval-3-line-1"
              className="round-circle-3"
              transform="translate(8.000000, 112.000000) rotate(90.000000) translate(-8.000000, -112.000000) "
              x="7"
              y="104"
              width="2"
              height="16"
            />
          </g>
          <path
            d="M339.109981,241.123343 L339.109981,233 M344.089862,241.252621 L344.515005,233.140411 M349.056329,241.640109 L349.905449,233.561267 M353.996001,242.284761 L355.266771,234.26143 M358.895571,243.184842 L360.584509,235.239014 M363.741841,244.337927 L365.844317,236.49138 M368.521755,245.740909 L371.032006,238.015151 M373.222437,247.390009 L376.133583,239.806215 M377.831224,249.280784 L381.135285,241.859741 M382.335699,251.408142 L386.02362,244.17019 M386.723729,253.76635 L390.7854,246.731329 M390.983492,256.349057 L395.407782,249.536249 M395.103513,259.149305 L399.878294,252.577383 M399.072693,262.15955 L404.184878,255.846527 M402.88034,265.371683 L408.315917,259.334863 M406.516195,268.777051 L412.260266,263.032981 M409.970465,272.366481 L416.007285,266.930903 M413.233844,276.130302 L419.546867,271.018117 M416.29754,280.058376 L422.869462,275.283595 M419.1533,284.14012 L425.966109,279.71583 M421.793431,288.364539 L428.828453,284.302868 M424.243554,292.783132 L431.41604,288.969454 M426.428355,297.260035 L433.790604,293.826962 M428.377927,301.844265 L435.909759,298.801207 M430.087018,306.523474 L437.76779,303.878773 M431.551025,311.285057 L439.359683,309.04596 M432.766002,316.116186 L440.681144,314.288832 M433.728679,321.003847 L441.72861,319.593243 M434.43646,325.934872 L442.499253,324.944886 M434.88744,330.895979 L442.990995,330.329323 M435.080404,335.873802 L443.202509,335.73203 M435.014831,340.854932 L443.133225,341.138433 M434.690899,345.82595 L442.78333,346.533946 M434.109481,350.773464 L442.153767,351.904015 M433.272141,355.684147 L441.246236,357.234154 M432.181138,360.54477 L440.063182,362.509984 M430.839408,365.342238 L438.6078,367.717273 M429.250568,370.063628 L436.884013,372.841974 M427.418896,374.69622 L434.896473,377.870263 M425.349328,379.227536 L432.65054,382.788575 M423.047439,383.645368 L430.152275,387.583643 M420.519429,387.937815 L427.408415,392.242531 M417.772109,392.093313 L424.426362,396.752671 M414.81288,396.100669 L421.214162,401.101898 M411.649714,399.949086 L417.780479,405.278479 M408.291132,403.628198 L414.134576,409.271146 M404.746181,407.128093 L410.286288,413.06913 M401.024412,410.439343 L406.245996,416.662184 M397.13585,413.553027 L402.0246,420.040617 M393.090971,416.460758 L397.633487,423.195315 M388.900672,419.154703 L393.084502,426.117767 M384.576239,421.627604 L388.389918,428.80009 M380.129324,423.8728 L383.562397,431.235049 M375.571905,425.884242 L378.614963,433.416074 M370.91626,427.656511 L373.560962,435.337283 M366.174931,429.184834 L368.414027,436.993492 M361.360689,430.465092 L363.188044,438.380234 M356.486505,431.493837 L357.897109,439.493768 M351.565509,432.268298 L352.555495,440.331091 M346.610957,432.786388 L347.177613,440.889943 M341.636197,433.046712 L341.777969,441.168818 M336.583765,433.046712 L336.441993,441.168818 M331.609004,432.786388 L331.042349,440.889943 M326.654453,432.268298 L325.664466,440.331091 M321.733456,431.493837 L320.322853,439.493768 M316.859272,430.465092 L315.031918,438.380234 M312.045031,429.184834 L309.805934,436.993492 M307.303701,427.656511 L304.659,435.337283 M302.648056,425.884242 L299.604999,433.416074 M298.090638,423.8728 L294.657565,431.235049 M293.643722,421.627604 L289.830044,428.80009 M289.31929,419.154703 L285.135459,426.117767 M285.12899,416.460758 L280.586475,423.195315 M281.084111,413.553027 L276.195361,420.040617 M277.195549,410.439343 L271.973965,416.662184 M273.47378,407.128093 L267.933674,413.06913 M269.92883,403.628198 L264.085386,409.271146 M266.570247,399.949086 L260.439483,405.278479 M263.407081,396.100669 L257.0058,401.101898 M260.447852,392.093313 L253.793599,396.752671 M257.700532,387.937815 L250.811547,392.242531 M255.172523,383.645368 L248.067687,387.583643 M252.870633,379.227536 L245.569421,382.788575 M250.801065,374.69622 L243.323489,377.870263 M248.969394,370.063628 L241.335949,372.841974 M247.380553,365.342238 L239.612162,367.717273 M246.038824,360.54477 L238.156779,362.509984 M244.94782,355.684147 L236.973726,357.234154 M244.110481,350.773464 L236.066194,351.904015 M243.529062,345.82595 L235.436631,346.533946 M243.20513,340.854932 L235.086736,341.138433 M243.139558,335.873802 L235.017452,335.73203 M243.332522,330.895979 L235.228967,330.329323 M243.783501,325.934872 L235.720709,324.944886 M244.491283,321.003847 L236.491352,319.593243 M245.453959,316.116186 L237.538817,314.288832 M246.668937,311.285057 L238.860279,309.04596 M248.132943,306.523474 L240.452172,303.878773 M249.842035,301.844265 L242.310202,298.801207 M251.791607,297.260035 L244.429358,293.826962 M253.976407,292.783132 L246.803921,288.969454 M256.42653,288.364539 L249.391509,284.302868 M259.066662,284.14012 L252.253853,279.71583 M261.922422,280.058376 L255.3505,275.283595 M264.986118,276.130302 L258.673095,271.018117 M268.249497,272.366481 L262.212677,266.930903 M271.703766,268.777051 L265.959696,263.032981 M275.339622,265.371683 L269.904045,259.334863 M279.147268,262.15955 L274.035083,255.846527 M283.116448,259.149305 L278.341667,252.577383 M287.236469,256.349057 L282.81218,249.536249 M291.496233,253.76635 L287.434561,246.731329 M295.884262,251.408142 L292.196342,244.17019 M300.388738,249.280784 L297.084676,241.859741 M304.997524,247.390009 L302.086378,239.806215 M309.698206,245.740909 L307.187955,238.015151 M314.478121,244.337927 L312.375645,236.49138 M319.324391,243.184842 L317.635453,235.239014 M324.223961,242.284761 L322.95319,234.26143 M329.163633,241.640109 L328.314512,233.561267 M334.130099,241.252621 L333.704956,233.140411"
            id="Oval-2"
            className="round-circle-2"
            stroke="#209DFF"
          />
          <g id="Oval-1">
            <use
              className="round-circle-1"
              fill="black"
              fillOpacity="1"
              filter="url(#board-filter-4)"
              xlinkHref="#board-path-3"
            />
            <use stroke="#15A5FF" strokeWidth="1" xlinkHref="#board-path-3" />
          </g>
        </g>
      </svg>
    );
  }
}
