import React, { Component, PropTypes } from 'react';
import './WDImageBar.less';
import { getProperSize } from '../utils';

export default class WDImageBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { dataList } = this.props;
    return (
      <div className="image-bar">
        {dataList.map((v, i) => {
          return (
            (!!v &&
              <div
                key={i}
                className="line"
                style={{
                  width: !v.color ? `${v.percent}%` : '100%'
                }}
              >
                <span
                  className="backImage"
                  style={{
                    backgroundImage: `url(${v.itemImage})`,
                    width: v.color ? `${getProperSize(v.percent, 0, 100, 0, 80)}%` : '100%'
                  }}
                />
                {!!v.color &&
                  <span className="percent" style={{ color: v.color }}>
                    {`${v.percent.toFixed(0)}%`}
                  </span>}
              </div>) ||
            null
          );
        })}
      </div>
    );
  }
}

WDImageBar.PropTypes = {
  dataList: PropTypes.array
};
