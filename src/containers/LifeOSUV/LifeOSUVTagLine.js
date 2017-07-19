import React, { Component } from 'react';

export default class LifeOSUVTagLine extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <svg
        // width="144px"
        // height="108px"
        viewBox="0 0 500 500"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        {...this.props}
      >
        <defs>
          <circle id="tag-line-path-1" r="3" fill="#fff" />
        </defs>
        <g id="LifeOSUVTagLine" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <path
            d={`M3,3 ${this.props.line || 'L107.772966,107.065859 L142.364231,107.065859'}`}
            id="tag-line"
            stroke="#108EE9"
          />
          <use xlinkHref="#tag-line-path-1" x="3" y="3" />
        </g>
      </svg>
    );
  }
}
