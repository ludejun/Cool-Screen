import React, { Component } from 'react';
import { WDPolyLine } from '../components';
import { Radio } from 'antd';
import './WDFloor.less';

const radioList = ['Test1', 'Test2', 'Test3'];
const listArray = [
    '55,10 55,40 78,40 78,80',
    '55,10 55,60 90,60 90,120',
    '55,10 55,40 20,40 20,80'
];
export default class WDFloor extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    tab: 0,
	    consumeCount: 1,
	    path: ''
	};
	this.timer = null;
	}

	radioChange = (e) => {
	    clearInterval(this.timer);
	    this.setState({ tab: e.target.value });

	};
  	


componentDidMount() {
    clearInterval(this.timer);
    clearInterval(reRender);
    this.timer = setInterval(() => {
      if (this.state.tab < 2) {
        this.setState({
          tab: this.state.tab + 1
        });
      } else {
        this.setState({ tab: 0 });
      }
    }, 3000);
    const reRender = setInterval(() => {
      this.setState({
        consumeCount: this.state.consumeCount + 1
      });
    }, 3000);
  }
  render() {
    return (
        <div className="left-container">
          <p>广场楼层分布实例图：</p>
          <Radio.Group
            className="overview-month-group"
            value={this.state.tab}
            onChange={this.radioChange}
          >
            {radioList.map((v, i) =>
              <Radio.Button key={i} value={i} className="overview-month">{v}</Radio.Button>
            )}
          </Radio.Group>
          <div className="tag tag-0">
            <p className="tag-title">Test0</p>
            <WDPolyLine location={'55,10 55,80'} />
          </div>
          <div className="tag tag-1">
            <p className="tag-title">Test1</p>
            <WDPolyLine
              location={this.state.tab === 0 ? listArray[this.state.tab] : '55,10 55,80'}
            />
          </div>
          <div className="tag tag-2">
            <p className="tag-title">Test2</p>
            <WDPolyLine
              location={this.state.tab === 1 ? listArray[this.state.tab] : '55,10 55,120'}
            />
          </div>
          <div className="tag tag-3">
            <p className="tag-title">Test3</p>
            <WDPolyLine
              location={this.state.tab === 2 ? listArray[this.state.tab] : '55,10 55,80'}
            />
          </div>
          <img src={`/img/floor${this.state.tab+1}.png`} className="left-img" />


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