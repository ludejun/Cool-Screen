import React, { Component, PropTypes } from 'react';

// <WDImageBar dataList={[{
//   itemImage: require('../assets/icon_male.png'),     单个图片
//   percent: 54,                                       百分比，整数
//   color: '#4C9DFF'                                   百分比颜色
// }, {
//   itemImage: require('../assets/icon_female.png'),
//   percent: 46,
//   color: '#EA6C6B'
// }]}/>

export default class WDImageBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { dataList } = this.props;
    // let maxPercent = dataList.map((v)=>{return v.percent}).reduce((x,y)=>{return Math.max(x,y)})
    return (
      <div style={{  display: 'inline-block',width:180}}>
        {dataList.map((v, i) => {
          return (
            (v &&
              <div key={i} style={styles.line}>
                <span
                  style={{
                    ...styles.backImage,
                    minWidth: v.minWidth || 0,
                    backgroundImage: 'url(' + v.itemImage + ')',
                    width: `calc(${v.percent}% - ${v.percent * 0.65}px)`,
                  }}
                />
                <span style={{ ...styles.percent, color: v.color }}>
                  {`${v.show ? v.percent.toFixed(0)}% :''`}
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

const styles = {
  line: {
    height: 36,
  },
  backImage: {
    height: 24,
    backgroundSize: 'contain',
    // backgroundImage: 'url(' + require('../assets/icon_male.png') + ')',
    backgroundRepeat: 'repeat-x',
    display: 'inline-block',
    // width: 'calc(100% - 60px)',
    marginTop: 6,
    marginBottom: 6,
  },
  percent: {
    fontSize: 24,
    color: '#EA6C6B',
    lineHeight: 1.5,
    textAlign: 'right',
    fontWeight: 200,
    float: 'right',
  },
};
