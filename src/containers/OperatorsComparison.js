/**
 * Created by wangxiaoling on 2017/7/13.
 */
import React, {Component} from 'react';
import Echarts from 'echarts-for-react';
import HeaderTitle from './Layout/HeaderTitle'
import './OperatorsComparison.less'

const cir = [0,1,2,3,4];
export default class operatorsComparison extends Component {
  componentDidMount (){

  }
  render () {
    return (
      <div>
        <HeaderTitle title="智慧生活：飞凡会员运营商设备活跃对比" className="sum-title"/>
        <div className="content-wrap clearfix">
          <div className="comparison-map">map</div>
          <div className="operators">
            <img className="bg-img" src="/img/provider.png" alt=""/>
            <p className="operators-title">三大运营商</p>
            <p className="telecom">中国电信</p>
            <p className="unicom">中国联通</p>
            <p className="mobile">中国移动</p>
            <ul className="slide-circle1">
              {cir.map((item,i)=>(
                <li key={i} className="circle-item"></li>
              ))}
            </ul>
            <ul className="slide-circle2">
              {cir.map((item,i)=>(
                <li key={i} className="circle-item"></li>
              ))}
            </ul>
            <div className="star-wrap1">
              <div className="star"></div>
            </div>
            <div className="star-wrap2">
              <div className="star"></div>
            </div>
            <div className="star-wrap3">
              <div className="star"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}