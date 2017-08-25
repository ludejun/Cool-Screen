import React, {Component} from 'react';
import {WDRadar} from '../components';
import HeaderTitle from './Layout/HeaderTitle';
import './DistrictPlaza.less';
import {Rate} from 'antd';

export default class DistrictPlaza extends Component {


  constructor(props){
    super(props);
    this.timer=null;
    this.state={
      num:this.getRandom()
    }
  }

  getRandom=()=>{
    return parseInt(Math.random()*10)
  }
  componentDidMount() {
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      let num=this.getRandom();
      this.setState({
        num:this.getRandom()
      })


    }, 2000);
  }
  render() {
    return (
      <div className="flex-row district-plaza">
        <HeaderTitle title="万达广场商圈热力图"/>
        <div className="left-wrap">
          <img className="side-map" src="/img/sideMap.svg" />
          <img className="main-map" src="/img/main-map.png" />
          <img className="line-a" src="/img/lineA.svg" />
          <img className="plaza-img" src="img/wd-build.png"/>
          <img className="line-c" src="img/lineC.svg"/>
          <div className="floor-light" style={{ left:((this.state.num%8==0?7:this.state.num%8-1)*3.5+328),top:((this.state.num%8==0?7:this.state.num%8-1)*2.2+Math.floor(this.state.num/8)*7.5+63) }}></div>
          <div className="floor-light" style={{ left:(((this.state.num+15)%8==0?7:(this.state.num+15)%8-1)*3.5+328),top:(((this.state.num+15)%8==0?7:(this.state.num+15)%8-1)*2.2+Math.floor((this.state.num+15)/8)*7.5+63) }}></div>
          <div className="floor-light" style={{ left:(((this.state.num+30)%8==0?7:(this.state.num+30)%8-1)*3.5+328),top:(((this.state.num+30)%8==0?7:(this.state.num+30)%8-1)*2.2+Math.floor((this.state.num+30)/8)*7.5+63) }}></div>
          <div className="floor-light" style={{ left:(((this.state.num+45)%8==0?7:(this.state.num+45)%8-1)*3.5+328),top:(((this.state.num+45)%8==0?7:(this.state.num+45)%8-1)*2.2+Math.floor((this.state.num+45)/8)*7.5+63) }}></div>
          <div className="floor-light" style={{ left:(((this.state.num+60)%8==0?7:(this.state.num+60)%8-1)*3.5+328),top:(((this.state.num+60)%8==0?7:(this.state.num+60)%8-1)*2.2+Math.floor((this.state.num+60)/8)*7.5+63) }}></div>
          <div className="floor-light" style={{ left:(((this.state.num+75)%8==0?7:(this.state.num+75)%8-1)*3.5+328),top:(((this.state.num+75)%8==0?7:(this.state.num+75)%8-1)*2.2+Math.floor((this.state.num+75)/8)*7.5+63) }}></div>
          <div className="floor-light" style={{ left:(((this.state.num+1)%8==0?7:(this.state.num+1)%8-1)*3.5+492),top:(((this.state.num+1)%8==0?7:(this.state.num+1)%8-1)*2.2+Math.floor((this.state.num+1)/8)*7.5+92) }}></div>
          <div className="floor-light" style={{ left:(((this.state.num+15)%8==0?7:(this.state.num+15)%8-1)*3.5+492),top:(((this.state.num+15)%8==0?7:(this.state.num+15)%8-1)*2.2+Math.floor((this.state.num+15)/8)*7.5+92) }}></div>
          <div className="floor-light" style={{ left:(((this.state.num+30)%8==0?7:(this.state.num+30)%8-1)*3.5+492),top:(((this.state.num+30)%8==0?7:(this.state.num+30)%8-1)*2.2+Math.floor((this.state.num+30)/8)*7.5+92) }}></div>
          <div className="floor-light" style={{ left:(((this.state.num+45)%8==0?7:(this.state.num+45)%8-1)*3.5+492),top:(((this.state.num+45)%8==0?7:(this.state.num+45)%8-1)*2.2+Math.floor((this.state.num+45)/8)*7.5+92) }}></div>
          <div className="floor-light" style={{ left:(((this.state.num+60)%8==0?7:(this.state.num+60)%8-1)*3.5+492),top:(((this.state.num+60)%8==0?7:(this.state.num+60)%8-1)*2.2+Math.floor((this.state.num+60)/8)*7.5+92) }}></div>
          <div className="floor-light" style={{ left:(((this.state.num+75)%8==0?7:(this.state.num+75)%8-1)*3.5+492),top:(((this.state.num+75)%8==0?7:(this.state.num+75)%8-1)*2.2+Math.floor((this.state.num+75)/8)*7.5+92) }}></div>
          <div className="floor-light" style={{ left:(((this.state.num+15)%8==0?7:(this.state.num+15)%8-1)*3.5+531),top:(((this.state.num+15)%8==0?7:(this.state.num+15)%8-1)*2.2+Math.floor((this.state.num+15)/8)*7.5+110) }}></div>
          <div className="floor-light" style={{ left:(((this.state.num+30)%8==0?7:(this.state.num+30)%8-1)*3.5+531),top:(((this.state.num+30)%8==0?7:(this.state.num+30)%8-1)*2.2+Math.floor((this.state.num+30)/8)*7.5+110) }}></div>
          <div className="floor-light" style={{ left:(((this.state.num+45)%8==0?7:(this.state.num+45)%8-1)*3.5+531),top:(((this.state.num+45)%8==0?7:(this.state.num+45)%8-1)*2.2+Math.floor((this.state.num+45)/8)*7.5+110) }}></div>
          <div className="floor-light" style={{ left:(((this.state.num+60)%8==0?7:(this.state.num+60)%8-1)*3.5+531),top:(((this.state.num+60)%8==0?7:(this.state.num+60)%8-1)*2.2+Math.floor((this.state.num+60)/8)*7.5+110) }}></div>
          <div className="floor-light" style={{ left:(((this.state.num+75)%8==0?7:(this.state.num+75)%8-1)*3.5+531),top:(((this.state.num+75)%8==0?7:(this.state.num+75)%8-1)*2.2+Math.floor((this.state.num+75)/8)*7.5+110) }}></div>
        </div>
        <div className="plaza-info">
          <div className="plaza-title">
            五角场万达广场
          </div>
          <div className="info-line">
            <i className="iconfont icon-plaza-circle line-icon"/>商&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;圈：五角场
          </div>
          <div className="info-line">
            <i className="iconfont icon-plaza-building line-icon"/>所在城市：上海市
          </div>
          <div className="info-line">
            <i className="iconfont icon-plaza-squre line-icon"/>商业面积：26万平方米
          </div>
          <div className="info-line">
            <i className="iconfont icon-plaza-arrow line-icon"/>日均客流：121,596人
          </div>
          <div className="info-line">
            <i className="iconfont icon-plaza-map line-icon"/>地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址：<span className="info-line-address">杨浦区邯郸路600号</span>
          </div>
          <div className="hr"/>
          <div className="flex-row">
            <WDRadar
              opt={{
                max: 100,
                values: [
                  {name: '客流承载力', value: 30},
                  {name: '好评度', value: 40},
                  {name: '消费潜力', value: 60},
                  {name: '层次定位', value: 30},
                  {name: '便利性', value: 50}
                ]
              }}
              className="score-radar"
            />
            <div className="score-div flex-col">
              <p>项目评级</p>
              <p className="score-num">91</p>
              <Rate disabled value={4.5} allowHalf/>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
