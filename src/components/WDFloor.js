import React, {Component} from 'react';
import {WDPolyLine} from '../components';
import {Radio} from 'antd';
import './WDFloor.less';

const radioList = ['一层', '二层', '三层'];
const listArray = ['55,10 55,40 78,40 78,80', '55,10 55,60 90,60 90,120', '55,10 55,40 20,40 20,140'];
export default class WDFloor extends Component {
  constructor(props) {
    super(props);
  }
  radioChange = (e) => {
    this.props.radioChange(e);
  };
  render() {
    return (
      <div className="left-container">
        <p>广场楼层分布实例图：</p>
        <Radio.Group
          className="overview-month-group"
          value={this.props.tab}
          onChange={this.radioChange}
        >
          {radioList.map((v, i) => <Radio.Button key={i} value={i} className="overview-month">{v}</Radio.Button>)}
        </Radio.Group>
        {this
          .props
          .brandsName
          .map((it, index) => {
            return (
              <div className={`tag tag-${index}`} key={index}>
                <p className="tag-title">{it}</p>
                <WDPolyLine
                  location={Math.pow(-1,this.props.tab) > 0
                  ? listArray[index]
                  : '55,10 55,80'} />
              </div>
            )
          })
        }
        <img src={`/img/floor${this.props.tab + 1}.png`} className="left-img" />
        <div className="left-container-border">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
          <div className="line4"></div>
        </div>
      </div>
    );
  }
}