import React, {Component, PropTypes}  from 'react'
import {Row, Col} from 'antd'
import './WDImagePercent.less';
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
      <div className="wdImagePercent">
        <Row className="line">
        {dataList.map((v, i) => {
          return v && (
            <Col key={i} span={Math.ceil(24/dataList.length)}>
              <div className="center">
                {
                  v.itemIcon && v.itemIcon.indexOf('icon') > -1 ?
                  <i className={`iconfont ${v.itemIcon} icon`} style={{ color: v.color}}></i>
                  :
                  <span className="image" style={{...{backgroundImage: `url(${v.itemImage})`}}} />
                }
                <span className="percent" style={{color: v.color}}>
                {`${v.percent.toFixed(0)}%`}
                </span>
              </div>
              <p className="name">
              {v.name}
              </p>
            </Col>
          ) || null
        })}
        </Row>
      </div>
    )
  }
}

WDImagePercent.PropTypes = {
  dataList: PropTypes.array
}
