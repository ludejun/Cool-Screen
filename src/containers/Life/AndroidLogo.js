import React, { Component } from 'react';

export default class AndroidLogo extends Component {
  render() {
    return (
      <svg
        // width="79px"
        // height="96px"
        viewBox="0 0 79 96"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        {...this.props}
      >

        <defs>
          <path
            d="M1403.6518,587.717949 L1395.69262,587.717949 L1395.69262,601.371079 C1395.69262,604.479846 1393.19195,607 1390.12119,607 C1387.04418,607 1384.54976,604.477546 1384.54976,601.371079 L1384.54976,587.717949 L1378.97438,587.717949 C1376.7787,587.717949 1374.99874,585.926466 1374.99874,583.70548 L1374.99874,542.726496 L1424.34568,542.726496 L1424.34568,583.70548 C1424.34568,585.921505 1422.56025,587.717949 1420.37005,587.717949 L1414.79466,587.717949 L1414.79466,601.371079 C1414.79466,604.479846 1412.29399,607 1409.22323,607 C1406.14622,607 1403.6518,604.477546 1403.6518,601.371079 L1403.6518,587.717949 Z M1360.67221,548.298563 C1360.67221,545.221195 1363.17289,542.726496 1366.24364,542.726496 C1369.32066,542.726496 1371.81507,545.221446 1371.81507,548.298563 L1371.81507,570.898018 C1371.81507,573.975386 1369.31439,576.470085 1366.24364,576.470085 C1363.16663,576.470085 1360.67221,573.975135 1360.67221,570.898018 L1360.67221,548.298563 Z M1427.52936,548.298563 C1427.52936,545.221195 1430.03003,542.726496 1433.10078,542.726496 C1436.1778,542.726496 1438.67221,545.221446 1438.67221,548.298563 L1438.67221,570.898018 C1438.67221,573.975386 1436.17154,576.470085 1433.10078,576.470085 C1430.02377,576.470085 1427.52936,573.975135 1427.52936,570.898018 L1427.52936,548.298563 Z M1411.45324,520.730277 C1418.23602,524.308765 1423.22347,530.880867 1424.69463,538.709402 L1374.6498,538.709402 C1376.11839,530.894532 1381.09101,524.331713 1387.85569,520.749044 L1383.11411,514.281391 C1382.85263,513.924718 1382.92709,513.421606 1383.28044,513.157658 C1383.63378,512.893709 1384.1322,512.968877 1384.39368,513.32555 L1389.31327,520.036022 C1392.47804,518.612045 1395.98355,517.820513 1399.67221,517.820513 C1403.34648,517.820513 1406.83903,518.60588 1409.9941,520.019382 L1414.90148,513.32555 C1415.16297,512.968877 1415.66138,512.893709 1416.01473,513.157658 C1416.36807,513.421606 1416.44254,513.924718 1416.18105,514.281391 L1411.45324,520.730277 L1411.45324,520.730277 Z M1389.32527,532.282051 C1391.08357,532.282051 1392.50895,530.84324 1392.50895,529.068376 C1392.50895,527.293512 1391.08357,525.854701 1389.32527,525.854701 C1387.56698,525.854701 1386.1416,527.293512 1386.1416,529.068376 C1386.1416,530.84324 1387.56698,532.282051 1389.32527,532.282051 Z M1410.01915,532.282051 C1411.77745,532.282051 1413.20282,530.84324 1413.20282,529.068376 C1413.20282,527.293512 1411.77745,525.854701 1410.01915,525.854701 C1408.26086,525.854701 1406.83548,527.293512 1406.83548,529.068376 C1406.83548,530.84324 1408.26086,532.282051 1410.01915,532.282051 Z"
            id="android-path-1"
            transform="translate(-1360.000000, -512.000000)"
          />
          <filter
            x="-10.0%"
            y="-8.3%"
            width="120.0%"
            height="116.6%"
            filterUnits="objectBoundingBox"
            id="android-filter-2"
          >
            <feGaussianBlur stdDeviation="7.5" in="SourceAlpha" result="shadowBlurInner1" />
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
              values="0 0 0 0 0   0 0 0 0 0.491168478   0 0 0 0 1  0 0 0 0.674818841 0"
              type="matrix"
              in="shadowInnerInner1"
            />
          </filter>
        </defs>
        <g
          id="AndroidLogo"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
          className="logo-shine-bigger android"
        >
          <use fill="#FFFFFF" fillRule="evenodd" xlinkHref="#android-path-1" />
          <use
            fill="black"
            fillOpacity="1"
            filter="url(#android-filter-2)"
            xlinkHref="#android-path-1"
            className="logo-shine-border android"
          />
          <use stroke="#20E9FF" strokeWidth="0.5832" xlinkHref="#android-path-1" />
        </g>
      </svg>
    );
  }
}
