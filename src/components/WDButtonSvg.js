import React, { Component } from 'react';

export default class WDButtonSvg extends Component {
  render() {
    const { title } = this.props;
    return (
      <svg
        // width="190px"
        // height="50px"
        viewBox="0 0 190 50"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        {...this.props}
      >

        <g
          id="WDButtonSvg"
          transform="translate(1.000000, 0.000000)"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g id="border" stroke="#108EE9">

            <path
              d="M19.6418759,0.5 L168.358124,0.5 L180.991724,25 L168.358124,49.5 L19.6418759,49.5 L7.0082759,25 L19.6418759,0.5 Z"
              id="rect"
            />
            <polyline id="left" points="11.8171429 3.62903226 0 25 11.8171429 46.3709677" />
            <polyline
              id="right"
              transform="translate(182.091429, 25.000000) scale(-1, 1) translate(-182.091429, -25.000000) "
              points="188 3.62903226 176.182857 25 188 46.3709677"
            />

          </g>

          <text
            id="ios"
            fontFamily="PingFangSC-Regular, PingFang SC"
            fontSize="30"
            fontWeight="normal"
            fill="#FFFFFF"
          >
            <tspan x="74.295" y="36">{title}</tspan>
          </text>
        </g>

      </svg>
    );
  }
}
