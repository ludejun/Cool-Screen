import React, { Component } from 'react';

export default class RecomandBuilding extends Component {
  constructor() {
    super();
    // this.state = {
    //   pathRedPoints: ''
    // };
    // this.pointsInterval = null;

    this.typeList = {
      red: {
        tags: [
          { text: 'C&A', x: '111.41', y: '26' },
          { text: 'ochirly', x: '315.14', y: '56' },
          { text: '亦谷', x: '534', y: '63' },
          { text: '凯迪·米拉', x: '355', y: '642' },
          { text: 'TGGC', x: '498.15', y: '690' }
        ]
      },
      green: {
        tags: [
          { text: 'MIGAINO', x: '22.03', y: '541' },
          { text: 'C&A', x: '43.41', y: '102' },
          { text: 'lagogo', x: '197.04', y: '597' },
          { text: 'JOPSHOP', x: '561.44', y: '142' },
          { text: 'CK Jeans', x: '725', y: '194' },
          { text: 'LuLualways', x: '606.28', y: '740' }
        ]
      }
    };
  }

  render() {
    // const { pathRedPoints } = this.state;
    return (
      <svg
        // width="838px"
        // height="756px"
        viewBox="0 0 838 756"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        {...this.props}
      >

        <defs>
          <linearGradient
            x1="21.4054134%"
            y1="0%"
            x2="95.3093894%"
            y2="98.4821502%"
            id="building-linearGradient-1"
          >
            <stop stopColor="#0C21A4" offset="0%" />
            <stop stopColor="#2D4BF0" offset="100%" />
          </linearGradient>
          <path
            d="M180.657993,62 L3,456.118389 L788.572792,714 C788.572792,714 800.251312,669.219352 818.191447,594.89528 C836.131581,520.571207 881.885873,326.217046 646.364723,201.753724 C407.011965,126.261397 180.657993,62 180.657993,62 Z"
            id="building-path-2"
          />
          <filter
            x="-1.8%"
            y="-2.3%"
            width="103.6%"
            height="104.6%"
            filterUnits="objectBoundingBox"
            id="building-filter-3"
          >
            <feGaussianBlur stdDeviation="14" in="SourceAlpha" result="shadowBlurInner1" />
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
              values="0 0 0 0 0.0813210227   0 0 0 0 0.739905256   0 0 0 0 1  0 0 0 0.156901042 0"
              type="matrix"
              in="shadowInnerInner1"
            />
          </filter>
          <linearGradient
            x1="0%"
            y1="-14.2845766%"
            x2="70.0606755%"
            y2="98.2689677%"
            id="building-linearGradient-4"
          >
            <stop stopColor="#06F0FB" stopOpacity="0.0442991395" offset="0%" />
            <stop stopColor="#3758FD" stopOpacity="0.408231431" offset="100%" />
          </linearGradient>
          <path
            d="M192.959257,82 L38,423.141389 L756.830179,647 C756.830179,647 767.414201,608.514391 783.673007,544.638425 C799.931812,480.762459 841.398063,313.729634 627.949691,206.762743 C411.028805,141.882749 192.959257,82 192.959257,82 Z"
            id="building-path-5"
          />
          <filter
            x="-9.4%"
            y="-8.1%"
            width="118.8%"
            height="125.3%"
            filterUnits="objectBoundingBox"
            id="building-filter-6"
          >
            <feOffset dx="0" dy="26" in="SourceAlpha" result="shadowOffsetOuter1" />
            <feGaussianBlur stdDeviation="19.5" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
            <feColorMatrix
              values="0 0 0 0 0.084771604   0 0 0 0 0.394339468   0 0 0 0 0.952327806  0 0 0 0.394870924 0"
              type="matrix"
              in="shadowBlurOuter1"
            />
          </filter>
          <linearGradient
            x1="50%"
            y1="6.58215495%"
            x2="50%"
            y2="100%"
            id="building-linearGradient-7"
          >
            <stop stopColor="#18FFE7" stopOpacity="0.892210145" offset="0%" />
            <stop stopColor="#17FFFF" stopOpacity="0" offset="100%" />
          </linearGradient>
          <linearGradient
            x1="50%"
            y1="3.94610969%"
            x2="50%"
            y2="100%"
            id="building-linearGradient-8"
          >
            <stop stopColor="#1499FF" stopOpacity="0.785212862" offset="0%" />
            <stop stopColor="#133EFB" stopOpacity="0" offset="100%" />
          </linearGradient>
          <linearGradient
            x1="60.8553474%"
            y1="50%"
            x2="58.0780803%"
            y2="78.5154276%"
            id="building-linearGradient-9"
          >
            <stop stopColor="#1EABFF" offset="0%" />
            <stop stopColor="#2451DA" stopOpacity="0" offset="100%" />
          </linearGradient>
          <linearGradient
            x1="50%"
            y1="18.8957281%"
            x2="50%"
            y2="100%"
            id="building-linearGradient-10"
          >
            <stop stopColor="#227CE5" offset="0%" />
            <stop stopColor="#1370FF" stopOpacity="0" offset="100%" />
          </linearGradient>
          <linearGradient
            x1="50%"
            y1="1.78431003%"
            x2="50%"
            y2="85.4335211%"
            id="building-linearGradient-11"
          >
            <stop stopColor="#F45A5A" offset="0%" />
            <stop stopColor="#D15B4F" stopOpacity="0.179998868" offset="100%" />
          </linearGradient>
          <linearGradient
            x1="50%"
            y1="3.94610969%"
            x2="50%"
            y2="100%"
            id="building-linearGradient-12"
          >
            <stop stopColor="#39B8FF" stopOpacity="0.785212862" offset="0%" />
            <stop stopColor="#1742FF" stopOpacity="0.883831522" offset="100%" />
          </linearGradient>
          <linearGradient
            x1="50%"
            y1="18.8957281%"
            x2="50%"
            y2="100%"
            id="building-linearGradient-13"
          >
            <stop stopColor="#0F36D7" offset="0%" />
            <stop stopColor="#133DFF" stopOpacity="0" offset="100%" />
          </linearGradient>
          <linearGradient
            x1="65.4241694%"
            y1="31.2554579%"
            x2="52.7394114%"
            y2="90.2982423%"
            id="building-linearGradient-14"
          >
            <stop stopColor="#1EABFF" offset="0%" />
            <stop stopColor="#2451DA" stopOpacity="0" offset="100%" />
          </linearGradient>
          <linearGradient
            x1="63.4046187%"
            y1="40.0920068%"
            x2="57.0711195%"
            y2="82.1860988%"
            id="building-linearGradient-15"
          >
            <stop stopColor="#1EABFF" offset="0%" />
            <stop stopColor="#2451DA" stopOpacity="0" offset="100%" />
          </linearGradient>
          <linearGradient
            x1="22.2803409%"
            y1="38.4763938%"
            x2="100%"
            y2="47.4133575%"
            id="building-linearGradient-16"
          >
            <stop stopColor="#1717F5" offset="0%" />
            <stop stopColor="#0136A8" stopOpacity="0.174733922" offset="100%" />
          </linearGradient>
          <linearGradient
            x1="63.1735377%"
            y1="42.7846216%"
            x2="58.5978081%"
            y2="82.3348038%"
            id="building-linearGradient-17"
          >
            <stop stopColor="#1EABFF" offset="0%" />
            <stop stopColor="#2451DA" stopOpacity="0" offset="100%" />
          </linearGradient>
          <linearGradient
            x1="64.8322813%"
            y1="38.9834677%"
            x2="56.1862803%"
            y2="86.6402089%"
            id="building-linearGradient-18"
          >
            <stop stopColor="#1EABFF" offset="0%" />
            <stop stopColor="#2451DA" stopOpacity="0" offset="100%" />
          </linearGradient>
          <linearGradient
            x1="50%"
            y1="3.94610969%"
            x2="50%"
            y2="100%"
            id="building-linearGradient-19"
          >
            <stop stopColor="#1473FF" stopOpacity="0.785212862" offset="0%" />
            <stop stopColor="#133EFB" stopOpacity="0.883831522" offset="100%" />
          </linearGradient>
          <linearGradient
            x1="95.7318755%"
            y1="56.2519654%"
            x2="52.2044511%"
            y2="80.7202667%"
            id="building-linearGradient-20"
          >
            <stop stopColor="#1EABFF" offset="0%" />
            <stop stopColor="#2451DA" stopOpacity="0" offset="100%" />
          </linearGradient>
          <linearGradient
            x1="63.1735377%"
            y1="42.7846216%"
            x2="56.910872%"
            y2="84.9595998%"
            id="building-linearGradient-21"
          >
            <stop stopColor="#1EABFF" offset="0%" />
            <stop stopColor="#2451DA" stopOpacity="0" offset="100%" />
          </linearGradient>
          <linearGradient
            x1="63.1735377%"
            y1="42.7846216%"
            x2="57.4679747%"
            y2="83.6117771%"
            id="building-linearGradient-22"
          >
            <stop stopColor="#1EABFF" offset="0%" />
            <stop stopColor="#2451DA" stopOpacity="0" offset="100%" />
          </linearGradient>
          <linearGradient
            x1="66.5691594%"
            y1="34.2684234%"
            x2="54.6132486%"
            y2="91.4891438%"
            id="building-linearGradient-23"
          >
            <stop stopColor="#1EABFF" offset="0%" />
            <stop stopColor="#2451DA" stopOpacity="0" offset="100%" />
          </linearGradient>
          <linearGradient
            x1="63.4667547%"
            y1="40.5864086%"
            x2="57.494611%"
            y2="86.5472327%"
            id="building-linearGradient-24"
          >
            <stop stopColor="#1EABFF" offset="0%" />
            <stop stopColor="#2451DA" stopOpacity="0" offset="100%" />
          </linearGradient>
          <linearGradient
            x1="64.9435348%"
            y1="39.3790819%"
            x2="58.7279895%"
            y2="87.2470411%"
            id="building-linearGradient-25"
          >
            <stop stopColor="#1EABFF" offset="0%" />
            <stop stopColor="#2451DA" stopOpacity="0" offset="100%" />
          </linearGradient>
          <linearGradient
            x1="63.4053032%"
            y1="39.3461576%"
            x2="57.6394634%"
            y2="85.1036391%"
            id="building-linearGradient-26"
          >
            <stop stopColor="#1EABFF" offset="0%" />
            <stop stopColor="#2451DA" stopOpacity="0" offset="100%" />
          </linearGradient>
          <linearGradient
            x1="63.1943309%"
            y1="38.4576788%"
            x2="56.3052712%"
            y2="85.3104946%"
            id="building-linearGradient-27"
          >
            <stop stopColor="#1EABFF" offset="0%" />
            <stop stopColor="#2451DA" stopOpacity="0" offset="100%" />
          </linearGradient>
          <linearGradient
            x1="50%"
            y1="-19.190574%"
            x2="67.7369475%"
            y2="135.014594%"
            id="building-linearGradient-28"
          >
            <stop stopColor="#0F43DE" offset="0%" />
            <stop stopColor="#4F33D5" stopOpacity="0.0237538216" offset="100%" />
            <stop stopColor="#5034D5" stopOpacity="0" offset="100%" />
          </linearGradient>
          <linearGradient
            x1="18.635643%"
            y1="82.5887838%"
            x2="122.324549%"
            y2="50%"
            id="building-linearGradient-29"
          >
            <stop stopColor="#270FDE" offset="0%" />
            <stop stopColor="#5034D5" stopOpacity="0" offset="100%" />
          </linearGradient>
          <linearGradient
            x1="162.21148%"
            y1="-6.74167797%"
            x2="122.32455%"
            y2="111.769912%"
            id="building-linearGradient-30"
          >
            <stop stopColor="#270FDE" offset="0%" />
            <stop stopColor="#5034D5" stopOpacity="0" offset="100%" />
          </linearGradient>
          <linearGradient
            x1="18.635643%"
            y1="82.5887838%"
            x2="122.324549%"
            y2="50%"
            id="building-linearGradient-31"
          >
            <stop stopColor="#270FDE" offset="0%" />
            <stop stopColor="#5034D5" stopOpacity="0.516021286" offset="100%" />
          </linearGradient>
          <linearGradient
            x1="9.42135125%"
            y1="97.2447046%"
            x2="190.634535%"
            y2="5.67160362%"
            id="building-linearGradient-32"
          >
            <stop stopColor="#270FDE" offset="0%" />
            <stop stopColor="#5034D5" stopOpacity="0" offset="100%" />
          </linearGradient>
          <linearGradient
            x1="-12.6547442%"
            y1="24.3374224%"
            x2="118.748914%"
            y2="77.6605872%"
            id="building-linearGradient-33"
          >
            <stop stopColor="#F25A5A" offset="0%" />
            <stop stopColor="#ED359C" offset="50.3069196%" />
            <stop stopColor="#940B0B" offset="100%" />
          </linearGradient>
          <linearGradient
            x1="0%"
            y1="25.907367%"
            x2="108.561985%"
            y2="79.2818843%"
            id="building-linearGradient-34"
          >
            <stop stopColor="#16E4D8" offset="0%" />
            <stop stopColor="#56FF7B" offset="50.4185268%" />
            <stop stopColor="#0EC5FF" offset="100%" />
          </linearGradient>
          <path
            d="M189,349.077355 L256.103213,194 L380.406442,230.183626 L355.581738,303.855996 L553.713749,360.085024 L577.386665,284.707011 L638.635637,303.599877 C638.635637,303.599877 668.094721,320.825245 662.226866,345.273715 C656.35901,369.722185 629.002008,466.690488 629.002008,466.690488 L658.727936,474.635628 L654.521051,491"
            id="building-path-35"
          />
          {/* <filter
            x="-5.8%"
            y="-5.2%"
            width="110.7%"
            height="118.8%"
            filterUnits="objectBoundingBox"
            id="building-filter-36"
          >
            <feMorphology
              radius="2.88"
              operator="dilate"
              in="SourceAlpha"
              result="shadowSpreadOuter1"
            />
            <feOffset dx="-2" dy="15" in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
            <feMorphology radius="2.88" operator="erode" in="SourceAlpha" result="shadowInner" />
            <feOffset dx="-2" dy="15" in="shadowInner" result="shadowInner" />
            <feComposite
              in="shadowOffsetOuter1"
              in2="shadowInner"
              operator="out"
              result="shadowOffsetOuter1"
            />
            <feGaussianBlur stdDeviation="5" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
            <feColorMatrix
              values="0 0 0 0 0.0588235294   0 0 0 0 0.705882353   0 0 0 0 0.984313725  0 0 0 0.421422101 0"
              type="matrix"
              in="shadowBlurOuter1"
            />
          </filter>*/}

          <circle id="building-filter-37" fill="#79FFF9" cx="0" cy="0" r="6" />
          <circle id="building-filter-38" fill="#FA6767" cx="0" cy="0" r="6" />

        </defs>

        <g
          id="RecomandBuilding"
          transform="translate(1, 1)"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <use
            fill="black"
            fillOpacity="1"
            filter="url(#building-filter-3)"
            stroke="url(#building-linearGradient-1)"
            xlinkHref="#building-path-2"
          />
          <use
            className="build-big-dot"
            stroke="url(#building-linearGradient-1)"
            strokeWidth="1.824"
            strokeDasharray="5.5"
            xlinkHref="#building-path-2"
          />
          <g id="build-big-3">
            <use
              fill="black"
              fillOpacity="1"
              filter="url(#building-filter-6)"
              xlinkHref="#building-path-5"
            />
            <use
              fill="url(#building-linearGradient-4)"
              fillRule="evenodd"
              xlinkHref="#building-path-5"
            />
          </g>
          <path
            d="M192.959257,85 L38,426.141389 L756.830179,650 C756.830179,650 767.414201,611.514391 783.673007,547.638425 C799.931812,483.762459 841.398063,316.729634 627.949691,209.762743 C411.028805,144.882749 192.959257,85 192.959257,85 Z"
            id="build-big-2"
            fillOpacity="0.251160553"
            fill="#0E27D6"
          />
          <polygon
            id="build-big-1"
            fill="#0E77E6"
            points="38 424 40.4028411 429.207137 754.119665 652 756 648.463446"
          />
          <polygon
            id="build-21-4"
            fill="url(#building-linearGradient-7)"
            points="137.527747 283 88 395.984919 172.164636 421.63354 195.087719 361.583841 166.342102 352.141669 189.626413 297.918125"
          />
          <polygon
            id="build-21-3"
            fill="url(#building-linearGradient-7)"
            points="88 395.639752 95.2790123 411.84158 175.964912 437.037267 172.09512 421.440391"
          />
          <polygon
            id="build-21-2"
            fill="url(#building-linearGradient-7)"
            points="172.140351 421.871079 176.003213 437.452408 196.658512 379.632534 195.044496 361.944099"
          />
          <polygon
            id="build-21-1"
            fill="url(#building-linearGradient-7)"
            points="189.607589 298.403727 193.175439 316.88716 176.888476 356.167702 166.403509 352.678827"
          />
          <polygon
            id="build-20-3"
            fill="url(#building-linearGradient-8)"
            points="208.247065 364.463518 436.083019 434.3233 416.564234 495.696774 184 424.970096 207.077184 364"
          />
          <polygon
            id="build-20-2"
            fill="url(#building-linearGradient-9)"
            points="183.999711 425.016991 187.812423 440.742708 419.833153 512.127335 416.622132 495.758385"
          />
          <polygon
            id="build-20-1"
            fill="url(#building-linearGradient-10)"
            points="415.954717 495.587797 419.312049 512.005766 437.129603 453.394228 435.409501 434.174194"
          />
          <polygon
            id="build-19-3"
            fill="url(#building-linearGradient-11)"
            points="447.887889 438 593 482.29409 573.432734 542.708661 428.959302 499.064683 447.887889 438"
          />
          <polygon
            id="build-19-2"
            fill="url(#building-linearGradient-11)"
            opacity="0.841768569"
            points="428.946109 498.987532 432.8427 516.307064 572.86439 559.910843 573.510511 542.593677"
          />
          <polygon
            id="build-19-1"
            fill="url(#building-linearGradient-11)"
            opacity="0.946331522"
            points="573.459043 542.53097 572.854651 559.870533 591.392868 501.11543 592.95897 482.188976"
          />
          <path
            d="M713.389672,585.818713 L609.960938,554.497043 L628.554856,493.723583 L667.238777,505.255951 L686.149858,441 L708.417486,447.993904 L690.556299,511.992713 L731.039063,524.653127 C718.564271,569.554817 713.389672,585.818713 713.389672,585.818713 Z"
            id="build-18-4"
            fill="url(#building-linearGradient-7)"
          />
          <polygon
            id="build-18-3"
            fill="url(#building-linearGradient-7)"
            points="609.979602 554.667056 609.59141 571.146487 712.377931 603.579337 713.37266 585.813813"
          />
          <polygon
            id="build-18-2"
            fill="url(#building-linearGradient-7)"
            points="713.414531 585.795678 711.820312 604.196739 729.622928 544.752311 731.054483 524.729329"
          />
          <polygon
            id="build-18-1"
            fill="url(#building-linearGradient-7)"
            points="708.474385 447.71345 707.816508 465.011429 694.888338 513.141471 690.679688 511.755965"
          />
          <polygon
            id="build-17-6"
            fill="url(#building-linearGradient-12)"
            points="206 129.678232 220.923101 96 388 142.839383 371.26668 189.847458 285.596797 165.216053 281.003895 176.980809 244.565117 166.113322"
          />
          <polygon
            id="build-17-5"
            fill="url(#building-linearGradient-13)"
            points="206 129.516949 211.439017 147.577612 249.073329 183.924072 244.789748 166.062242"
          />
          <polygon
            id="build-17-4"
            fill="url(#building-linearGradient-14)"
            points="244.315789 165.90678 248.216508 183.14155 282.762198 193.859498 280.760685 176.880692"
          />
          <polygon
            id="build-17-3"
            fill="url(#building-linearGradient-13)"
            points="280.715789 177.029981 285.264277 164.949153 287.366257 184.860312 282.698601 194.047798"
          />
          <polygon
            id="build-17-2"
            fill="url(#building-linearGradient-15)"
            points="371.301246 189.822175 371.301246 208.770482 287.592228 184.86324 285.505263 164.949153"
          />
          <polygon
            id="build-17-1"
            fill="url(#building-linearGradient-16)"
            points="370.757895 189.853902 370.757895 208.793895 386.618658 162.180778 387.487959 142.923729"
          />
          <polygon
            id="build-16-3"
            fill="url(#building-linearGradient-11)"
            points="159.956044 232.764979 202.510344 136 241.21978 172.183937 208.93512 247.671642"
          />
          <polygon
            id="build-16-2"
            fill="url(#building-linearGradient-11)"
            opacity="0.841768569"
            points="159.80337 232.727281 165.66318 249.703256 213.173435 264.05273 208.887723 247.618133"
          />
          <polygon
            id="build-16-1"
            fill="url(#building-linearGradient-11)"
            opacity="0.946331522"
            points="208.714286 248.028949 213.297449 264.727889 245.050593 189.705563 241.192665 172.329967"
          />
          <polygon
            id="build-15-3"
            fill="url(#building-linearGradient-8)"
            points="395.113906 145 513 178.43122 497.299691 226.761905 379 192.209595"
          />
          <polygon
            id="build-15-2"
            fill="url(#building-linearGradient-17)"
            points="379 192.133333 379.233607 210.83867 498.001934 245.181063 497.240416 226.850309"
          />
          <polygon
            id="build-15-1"
            fill="url(#building-linearGradient-10)"
            points="496.728571 227.110448 497.514236 245.307294 511.9761 197.048856 512.406947 178.666667"
          />
          <path
            d="M520.659123,181 L578.163488,197.232335 C578.163488,197.232335 580.637321,197.857958 585,199.235634 L570.22346,248.808989 L506,229.293798 L520.659123,181 Z"
            id="build-14-3"
            fill="url(#building-linearGradient-8)"
          />
          <polygon
            id="build-14-2"
            fill="url(#building-linearGradient-18)"
            points="506 228.752809 507.07326 247.609713 570.160934 266 570.54878 248.051788"
          />
          <polygon
            id="build-14-1"
            fill="url(#building-linearGradient-10)"
            points="570.028689 247.708704 569.585366 265.907029 584.186477 216.263533 584.498646 199.146067"
          />
          <path
            d="M596.061406,202 L581,253.287698 C620.470277,270.057979 692.993945,304.44655 692.993945,392.803468 L755.957844,411.615385 C758.547072,274.497937 641.16666,218.45108 596.061406,202 Z"
            id="build-13-3"
            fill="url(#building-linearGradient-19)"
          />
          <path
            d="M581,270.029224 C581,270.029224 643.993769,299.141074 666.192677,336.429702 C688.391585,373.71833 689.458332,408.320171 689.458332,408.320171 L693.059509,392.645636 C693.059509,304.261677 620.738718,269.77605 581.070713,252.961538 L581,270.029224 Z"
            id="build-13-2"
            fill="url(#building-linearGradient-20)"
          />
          <polygon
            id="build-13-1"
            fill="url(#building-linearGradient-10)"
            points="689.371358 408.228152 750.930468 426.330655 755.993242 411.448638 692.979922 392.611419"
          />
          <polygon
            id="build-12-3"
            fill="url(#building-linearGradient-8)"
            points="259.336643 288 241 332.095556 323.024814 356.764045 340.038462 311.522067"
          />
          <polygon
            id="build-12-2"
            fill="url(#building-linearGradient-21)"
            points="241 331.932584 245.263283 348.608292 324.619655 371.953932 323.038809 356.514255"
          />
          <polygon
            id="build-12-1"
            fill="url(#building-linearGradient-10)"
            points="339.75196 311.876404 340.686177 326.082875 324.340685 372.260448 322.730769 356.999958"
          />
          <polygon
            id="build-11-3"
            fill="url(#building-linearGradient-8)"
            points="343.955056 364.755811 361.106863 319 428 339.334596 411.191347 385.564706"
          />
          <polygon
            id="build-11-2"
            fill="url(#building-linearGradient-21)"
            points="343.937154 364.728711 345.443808 379.382139 411.744422 400.018415 411.140134 385.530415"
          />
          <polygon
            id="build-11-1"
            fill="url(#building-linearGradient-10)"
            points="411.147348 385.594692 411.735831 400.080015 427.654759 354.150194 427.966326 339.378164"
          />
          <polygon
            id="build-10-3"
            fill="url(#building-linearGradient-8)"
            points="433 390.725664 449.742426 344 534 368.787537 518.673662 416.695652"
          />
          <polygon
            id="build-10-2"
            fill="url(#building-linearGradient-22)"
            points="433 390.869565 433.980917 405.223618 519.571429 431.043478 518.729409 416.531476"
          />
          <polygon
            id="build-10-1"
            fill="url(#building-linearGradient-10)"
            points="518.609524 416.433348 519.536489 431.148728 533.706392 384.675334 533.853405 368.869565"
          />
          <polygon
            id="build-9-3"
            fill="url(#building-linearGradient-23)"
            points="540.940382 424.191208 541.528511 437.31743 571.509457 446.271208 571.509457 433.574444"
          />
          <polygon
            id="build-9-2"
            fill="url(#building-linearGradient-8)"
            points="556.945486 376 540.958333 424.207551 571.63557 433.6 586 384.367038"
          />
          <polygon
            id="build-9-1"
            fill="url(#building-linearGradient-10)"
            points="571.625 433.921912 571.625 447.147823 585.676678 399.299275 585.979102 384.64"
          />
          <polygon
            id="build-8-3"
            fill="url(#building-linearGradient-8)"
            points="604.984838 390 590.953488 438.545231 617.686608 447.567568 631 398.238101"
          />
          <polygon
            id="build-8-2"
            fill="url(#building-linearGradient-23)"
            points="590.925484 438.5606 591.227578 452.187418 617.623158 460.628167 617.604332 447.356485"
          />
          <polygon
            id="build-8-1"
            fill="url(#building-linearGradient-10)"
            points="617.651163 447.728256 617.780605 460.885667 630.77536 412.375864 630.872187 398.635135"
          />
          <polygon
            id="build-7-3"
            fill="url(#building-linearGradient-12)"
            points="285.282081 221 269 261.32975 350.647028 285.635294 367 244.45106"
          />
          <polygon
            id="build-7-2"
            fill="url(#building-linearGradient-24)"
            points="269 261.517647 272.40856 277.9604 351.642093 302.189494 350.661725 285.766721"
          />
          <polygon
            id="build-7-1"
            fill="url(#building-linearGradient-16)"
            points="350.666667 286.266831 351.636672 302.698915 367 261.284031 367 245.117647"
          />
          <polygon
            id="build-6-3"
            fill="url(#building-linearGradient-8)"
            points="372 291.139254 387.871106 250 455.034483 269.383017 439.812261 310.666667"
          />
          <polygon
            id="build-6-2"
            fill="url(#building-linearGradient-25)"
            points="372.057993 291.180424 372.598672 306.678553 439.6336 327.066581 439.812567 310.678309"
          />
          <polygon
            id="build-6-1"
            fill="url(#building-linearGradient-10)"
            points="439.835773 310.711446 455.06324 269.259259 453.794692 287.149618 439.586207 327.006861"
          />
          <polygon
            id="build-5-3"
            fill="url(#building-linearGradient-12)"
            points="474.5544 276 459.960784 317.7116 543.875398 342.564706 557 299.682667"
          />
          <polygon
            id="build-5-2"
            fill="url(#building-linearGradient-26)"
            points="459.910208 317.744884 459.910208 333.471303 543.573662 357.442345 543.86853 342.536275"
          />
          <polygon
            id="build-5-1"
            fill="url(#building-linearGradient-16)"
            points="543.804822 342.918985 543.54902 357.896417 556.314154 317.11527 556.882891 300.117647"
          />
          <polygon
            id="build-4-3"
            fill="url(#building-linearGradient-8)"
            points="565.913043 347.858306 580.020902 305 651.043478 326.155954 639.607225 369.578313"
          />
          <polygon
            id="build-4-2"
            fill="url(#building-linearGradient-27)"
            points="566.068101 347.997162 564.143634 362.979883 638.000278 384.771921 639.596928 369.589093"
          />
          <polygon
            id="build-4-1"
            fill="url(#building-linearGradient-10)"
            points="639.479617 369.550807 637.879444 384.524362 649.430467 342.109777 651.029884 326.200595"
          />
          <polygon
            id="build-3-3"
            fill="url(#building-linearGradient-28)"
            points="153.123617 261.720068 154.957642 273.066983 180.623297 280.464972 179.497039 269.652096"
          />
          <polygon
            id="build-3-2"
            fill="url(#building-linearGradient-29)"
            points="153 261.772349 161.788793 240 187.982066 247.364865 179.706386 269.77908"
          />
          <polygon
            id="build-3-1"
            fill="url(#building-linearGradient-30)"
            points="179.503783 270.058038 180.803996 280.900529 188.872559 257.407073 188.173646 247.201843"
          />
          <polygon
            id="build-2-2"
            fill="url(#building-linearGradient-29)"
            points="145 285.818788 150.016453 274 175.699982 280.902026 170.988282 293.030413"
          />
          <polygon
            id="build-2-1"
            fill="url(#building-linearGradient-30)"
            points="175.499264 281.057096 175.499264 294.385849 170.949517 293.140965"
          />
          <polygon
            id="build-1-3"
            fill="url(#building-linearGradient-31)"
            points="700.659432 489 694 513.139844 734.287089 525.574356 741.336245 500.922246"
          />
          <polygon
            id="build-1-2"
            fill="url(#building-linearGradient-32)"
            points="734.312685 525.543596 733.410517 539.14194 741.363312 512.903201 741.363312 501.030728"
          />

          {/*
            <use
              fill="black"
              fillOpacity="1"
              // filter="url(#building-filter-36)"
              xlinkHref="#building-path-35"
            />
        */}
          <use
            id="building-path-green"
            className="building-path-blue"
            stroke="url(#building-linearGradient-34)"
            strokeWidth="3.84"
            strokeLinecap="round"
            strokeLinejoin="round"
            xlinkHref="#building-path-35"
          />
          <circle
            id="oval-green-6-shadow"
            className="path-point-shadow"
            fillOpacity="0.5"
            fill="#79FFF9"
            cx="654"
            cy="491"
            r="11"
          />
          {/* <use className="path-point-shadow" xlinkHref="#building-filter-37" x="654" y="491" />*/}

          <use xlinkHref="#building-filter-37" x="654" y="491" />
          <use className="tag-text-green-3" xlinkHref="#building-filter-37" x="657" y="367" />
          <use className="tag-text-green-2" xlinkHref="#building-filter-37" x="507" y="346" />
          <use className="tag-text-green-1" xlinkHref="#building-filter-37" x="367" y="270" />
          <use className="tag-text-green-0" xlinkHref="#building-filter-37" x="249" y="210" />

          <circle
            id="oval-green-1-shadow"
            className="path-point-shadow"
            fillOpacity="0.5"
            fill="#79FFF9"
            cx="188.5"
            cy="349.5"
            r="13.5"
          />
          {/* <use
            className="path-point-shadow"
            xlinkHref="#building-filter-37"
            x="188.5"
            y="349.5"
            r="13.5"
          /> */}
          <circle id="oval-green-1" fill="#79FFF9" cx="188.5" cy="349.5" r="7.5" />

          <polyline
            id="building-path-red"
            className="building-path-red"
            stroke="url(#building-linearGradient-33)"
            strokeWidth="3.84"
            strokeDasharray="8.64,5.76"
            points="232 225.148642 272.40502 236.472604 289.508755 197.483792 472.433975 249.318896 415.039983 414.223209 556.463941 454.989828"
          />
          {/*
          <path
            // d="M231,227.148642 L239.332335,229.483873 M244.881924,231.039208 L253.185551,233.366392 M258.767621,234.93083 L267.046425,237.251059 M271.902294,237.339043 L275.365697,229.444044 M277.680922,224.166375 L281.153456,216.250561 M283.475875,210.956493 L286.925669,203.092515 M290.320327,199.997133 L298.606942,202.345292 M304.177719,203.923871 L312.530203,206.290695 M318.043977,207.85312 L326.344848,210.20532 M331.885467,211.775352 L340.181672,214.126229 M345.722271,215.696256 L354.01871,218.047199 M359.570775,219.620475 L367.881413,221.975442 M373.427485,223.54702 L381.739661,225.902422 M387.280343,227.472472 L395.595296,229.828662 M400,231.076813 L408,233.343755 M420.80084,236.9711 L412.512461,234.62244 M434.637921,240.892082 L426.330471,238.538019 M448.514257,244.824188 L440.217129,242.473049 M462.444886,248.771678 L454.04774,246.392198 M469.79424,256.030178 L471.433975,251.318896 L468.000538,250.345971 M465.059235,269.634788 L467.879759,261.530861 M460.325624,283.235389 L463.171509,275.058599 M455.595969,296.824626 L458.415773,288.722771 M450.833622,310.507792 L453.660256,302.386312 M446.120742,324.04883 L448.945182,315.933654 M441.40196,337.606826 L444.222042,329.504171 M436.652028,351.254321 L439.516932,343.022884 M431.902226,364.901445 L434.757075,356.698898 M427.147781,378.561908 L430.023072,370.300626 M422.442367,392.081493 L425.289406,383.901388 M417.710436,405.677268 L420.544273,397.535093 M417.121595,417.111509 L414.039983,416.223209 L415.813965,411.126205 M430.978847,421.105976 L422.659637,418.707896 M444.849342,425.10426 L436.523087,422.704149 M458.623607,429.074805 L450.28111,426.670012 M472.471217,433.066493 L464.20043,430.682371 M486.359223,437.069825 L478.035266,434.670376 M500.157133,441.047186 L491.818491,438.643504 M513.920384,445.014556 L505.712557,442.648582 M527.842328,449.027671 L519.439177,446.605393 M541.63554,453.003677 L533.374232,450.622287 M555.463941,456.989828 L547.194219,454.606012"
            d={pathRedPoints}
            id="building-path-red"
            className="building-path-red"
            stroke="url(#building-linearGradient-33)"
            strokeWidth="3.84"
          />
          */}

          <circle
            id="oval-red-5-shadow"
            className="path-point-shadow"
            fillOpacity="0.5"
            fill="#FA6767"
            cx="557"
            cy="455"
            r="11"
          />
          {/*
          <use className="path-point-shadow" xlinkHref="#building-filter-38" x="557" y="455" />
          */}

          <use xlinkHref="#building-filter-38" x="557" y="455" />
          <use className="tag-text-red-2" xlinkHref="#building-filter-38" x="427" y="379" />
          <use className="tag-text-red-1" xlinkHref="#building-filter-38" x="461" y="246" />
          <use className="tag-text-red-0" xlinkHref="#building-filter-38" x="341" y="212" />

          {/* <use className="path-point-shadow" xlinkHref="#building-filter-38" x="232.5" y="226.5" />*/}
          <circle
            id="oval-red-1-shadow"
            className="path-point-shadow"
            fillOpacity="0.5"
            fill="#FA6767"
            cx="232.5"
            cy="226.5"
            r="13.5"
          />
          <circle id="oval-red-1" fill="#FA6767" cx="232.5" cy="226.5" r="7.5" />

          {['green', 'red'].map((l, i) => {
            return this.typeList[l].tags.map((v, j) =>
              <text
                key={`${i}${j}`}
                className={`tag-text-${l}-${j}`}
                fontFamily="HoeflerText-Regular, Hoefler Text"
                fontSize="20"
                fontWeight="normal"
                fill={l === 'green' ? '#79FFF9' : '#F76768'}
              >
                <tspan x={v.x} y={v.y}>{v.text}</tspan>
              </text>
            );
          })}

          <path
            d="M17.7215909,515 L142,515 L142,543.474576 L130.238636,555 L4,555 L4,525.169492 L17.7215909,515 Z M189.548503,350.080769 L189.548503,534.57526 L141.118694,534.57526"
            id="tag-green-1"
            className="tag-line-green-0"
            stroke="#79FFF9"
          />
          <path
            d="M13.7215909,76 L138,76 L138,104.474576 L126.238636,116 L0,116 L0,86.1694915 L13.7215909,76 Z M249.725818,209.906518 L249.725818,93.0238483 L137.273236,93.0238483"
            id="tag-green-2"
            className="tag-line-green-1"
            stroke="#79FFF9"
          />
          <path
            d="M340.721591,615 L465,615 L465,643.474576 L453.238636,655 L327,655 L327,625.169492 L340.721591,615 Z M425.800862,380.19047 L425.800862,615.509712"
            id="tag-red-4"
            className="tag-line-red-3"
            stroke="#F76768"
          />
          <path
            d="M498.721591,36 L623,36 L623,64.4745763 L611.238636,76 L485,76 L485,46.1694915 L498.721591,36 Z M462.313128,245.973222 L462.313128,60.2639019 L485.220437,60.2639019"
            id="tag-red-3"
            className="tag-line-red-2"
            stroke="#F76768"
          />
          <path
            d="M168.721591,571 L293,571 L293,599.474576 L281.238636,611 L155,611 L155,581.169492 L168.721591,571 Z M368.081462,269.577248 L368.081462,584.582028 L292.960969,584.582028"
            id="tag-green-3"
            className="tag-line-green-2"
            stroke="#79FFF9"
          />
          <path
            d="M288.721591,30 L413,30 L413,58.4745763 L401.238636,70 L275,70 L275,40.1694915 L288.721591,30 Z M342.592301,211.273501 L342.592301,70.395571"
            id="tag-red-2"
            className="tag-line-red-1"
            stroke="#F76768"
          />
          <path
            d="M552.721591,116 L677,116 L677,144.474576 L665.238636,156 L539,156 L539,126.169492 L552.721591,116 Z M508.888219,345.926696 L508.888219,141.491477 L540.220733,141.491477"
            id="tag-green-4"
            className="tag-line-green-3"
            stroke="#79FFF9"
          />
          <path
            d="M473.721591,664 L598,664 L598,692.474576 L586.238636,704 L460,704 L460,674.169492 L473.721591,664 Z M555.986109,455.165006 L555.986109,664.047755 "
            id="tag-red-5"
            className="tag-line-red-4"
            stroke="#F76768"
          />
          <path
            d="M711.721591,168 L836,168 L836,196.474576 L824.238636,208 L698,208 L698,178.169492 L711.721591,168 Z M658.08696,368.40732 L658.08696,188.611086 L698.693365,188.611086"
            id="tag-green-5"
            className="tag-line-green-4"
            stroke="#79FFF9"
          />
          <path
            d="M600.721591,714 L725,714 L725,742.474576 L713.238636,754 L587,754 L587,724.169492 L600.721591,714 Z M654.589823,492.015121 L654.589823,714.389274 "
            id="tag-green-6"
            className="tag-line-green-5"
            stroke="#79FFF9"
          />
          <path
            d="M81.7215909,0 L206,0 L206,28.4745763 L194.238636,40 L68,40 L68,10.1694915 L81.7215909,0 Z M234.518135,225.601074 L234.518135,18.6795584 L205.014082,18.6795584"
            id="tag-red-1"
            className="tag-line-red-0"
            stroke="#F76768"
          />
        </g>

      </svg>
    );
  }
}
