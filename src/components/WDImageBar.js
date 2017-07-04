import React, { Component, PropTypes } from 'react';
import './WDImageBar.less';
export default class WDImageBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { dataList } = this.props;
    // let maxPercent = dataList.map((v)=>{return v.percent}).reduce((x,y)=>{return Math.max(x,y)})
    return (
      <div className="image-bar">
        {dataList.map((v, i) => {
          return (
            (v &&
              <div key={i} className="line">
                <span
                  className="backImage"
                  style={{
                    backgroundImage: 'url(' + v.itemImage + ')',
                    width: `calc(${v.percent}% - ${v.percent * 0.65}px)`,
                  }}
                />
                <span className="percent" style={{color: v.color }}>
                  {`${v.show ? v.percent.toFixed(0)+'%' : ''} `}
                </span>
              </div>) ||
            null
          );
        })}
      </div>
    );
  }
}

WDImageBar.PropTypes = {
  dataList: PropTypes.array,
};
