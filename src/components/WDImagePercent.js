import React, {Component, PropTypes}  from 'react'
import {Row, Col} from 'antd'

// <WDImagePercent dataList={[{
  // itemIcon: 'icon-client-married',                         icon priority first
//   itemImage: require('../../assets/icon_married.png'),     单个图片
//   percent: 54,                                             百分比，整数
//   color: '#EA6C6B',                                        百分比颜色
  //   name: '已婚'                                            标题
// }, {
  // itemIcon: 'icon-client-married',
//   itemImage: require('../../assets/icon_unmarried.png'),
//   percent: 46,
//   color: '#4C9DFF',
//   name: '未婚'
// }]}/>

export default class WDImagePercent extends Component{
  constructor(props) {
    super(props)
  }

  render(){
    let {dataList} = this.props
    return(
      <Row style={styles.line}>
      {dataList.map((v, i) => {
        return v && (
          <Col key={i} span={Math.ceil(24/dataList.length)}>
            <div style={styles.center}>
              {
                v.itemIcon && v.itemIcon.indexOf('icon') > -1 ?
                <i className={`iconfont ${v.itemIcon}`} style={{...styles.icon, color: v.color}}></i>
                :
                <span style={{...styles.image, ...{backgroundImage: `url(${v.itemImage})`}}} />
              }
              <span style={{...styles.percent, color: v.color}}>
              {`${v.percent.toFixed(0)}%`}
              </span>
            </div>
            <p style={styles.name}>
            {v.name}
            </p>
          </Col>
        ) || null
      })}
      </Row>
    )
  }
}

WDImagePercent.PropTypes = {
  dataList: PropTypes.array
}

const styles = {
  line: {
    marginTop: 8,
    marginBottom: 8
  },
  center: {
    textAlign: 'center'
  },
  icon: {
    fontSize: 36,
    lineHeight: 1,
    marginRight: 15
  },
  image: {
    height: 36,
    width: 50,
    display: 'inline-block',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    marginRight: 5,
  },
  percent: {
    fontSize: 24,
    fontWeight: 200
  },
  name: {
    color: '#999',
    fontSize: 12,
    lineHeight: 1.5,
    textAlign: 'center',
    marginTop: 5
  }
}
