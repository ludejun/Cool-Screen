/**
 * Created by wangxiaoling on 2017/7/13.
 */
import React, {Component} from 'react';
import Echarts from 'echarts-for-react';
import HeaderTitle from './Layout/HeaderTitle';
import './OperatorsComparison.less';
import { getBaseFontSize } from '../utils';
import {operators} from '../assets/map/mapAreaValue';
const cir = [0,1,2,3,4];

// var pillarChart = function(data){
//   return(
//     {/*<div className="pillar-container clearfix">*/}
//       {/*{data.map((item,i)=>(*/}
//         {/*<span key={i} className="pillar" style={{width:data[i]/192*getBaseFontSize()}}></span>*/}
//       {/*))}*/}
//     {/*</div>*/}
//   );
// }
export default class operatorsComparison extends Component {

  componentDidMount (){
    console.log(operators)
  }
  render () {
    return (
      <div>
        <HeaderTitle title="飞凡会员运营商对比" className="sum-title"/>
        <div className="content-wrap clearfix">
          <div className="comparison-map">
            <div className="map-container">
              {operators.map((item,i) =>(
                <div key={i} className="yys-wrap">
                  <div className="pillar-container clearfix">
                    {item.value.map((v,i)=>(
                      <span key={i} className="pillar" style={{width:v/400000/192*getBaseFontSize()}}></span>
                    ))}
                  </div>
                  <span key={i} className="province-name">{item.name}</span>
                </div>
              ))}
              <img className="base-img" src="/img/operatorsmap.png" alt=""/>
            </div>
            <div className="operators-move">
              <img className="base-seat" src="img/base.png" alt=""/>
              <img className="unicom-style" src="img/unicom.png" alt=""/>
              <img className="mobile-style" src="img/mobile.png" alt=""/>
              <img className="telecom-style" src="img/telecom.png" alt=""/>
              <img className="phone-style" src="img/phone.png" alt=""/>
            </div>
          </div>
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
