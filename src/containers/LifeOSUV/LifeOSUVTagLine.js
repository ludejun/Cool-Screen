import React, { Component } from 'react';

export default class LifeOSUVTagLine extends Component {
  constructor() {
    super();
  }
  render() {
    const { line } = this.props;
    const circleXY = line.indexOf('M') >= 0 ? line.substring(1, line.indexOf(' ')).split(',') : '';
    return (
      <svg
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
          <path d={`M3,3 ${line || 'L0,0'}`} id="tag-line" stroke="#108EE9" />
          <use xlinkHref="#tag-line-path-1" x={circleXY[0] || '3'} y={circleXY[1] || '3'} />
        </g>
      </svg>
    );
  }
}
