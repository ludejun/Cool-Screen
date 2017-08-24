import React from 'react';

export default function layout(props) {
  return (
    <svg
      // width="597px"
      // height="63px"
      viewBox="0 0 597 63"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <defs>
        <circle id="layout-path-circle" fill="#108EE9" r="5.68071852" />
      </defs>

      <g
        transform="translate(2.000000, 11.000000)"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        opacity="0.699898098"
      >
        <polyline
          id="Line"
          className="layout-svg-polyline"
          stroke="#108EE9"
          strokeWidth="3"
          strokeLinecap="square"
          points="1.13686838e-13 49.5 125.5 49.5 172.5 20.5 413.5 20.5 451.5 49.5 591 49.5 561.5 9 505.5 9"
        />
        <circle
          id="Oval-7"
          className="layout-svg-circle"
          stroke="#108EE9"
          cx="504.840359"
          cy="8.84035926"
          r="8.84035926"
        />

        <use xlinkHref="#layout-path-circle" x="505" y="8.68071852" />
        <use xlinkHref="#layout-path-circle" x="470" y="32" />
        <use xlinkHref="#layout-path-circle" x="493" y="32" />
        <use xlinkHref="#layout-path-circle" x="517" y="32" />
        <use xlinkHref="#layout-path-circle" x="540" y="32" />

        <path d="M0,19.5 L153.640015,19.5" id="Line" stroke="#108EE9" strokeLinecap="square" />
        <path
          d="M159.5,40 L423.640015,40"
          id="Line"
          stroke="#108EE9"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="4"
        />
        <path d="M0,30.5 L137.636961,30.5" id="Line" stroke="#108EE9" strokeLinecap="square" />
        <rect
          id="Rectangle-Copy-2"
          fill="#108EE9"
          opacity="0.595391757"
          x="33"
          y="28"
          width="70"
          height="4"
        />
      </g>

    </svg>
  );
}
