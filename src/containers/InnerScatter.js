import React, {Component} from 'react';
import Echarts from 'echarts-for-react';
import './innerScatter.less';

export default class InnerScatter extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }


  render() {
    return (
      <div className="inner-scatter-container">
          <div className="main-content">
              <div className="china-map">map</div>
              <div className="bar">bar</div>
          </div>
          <div className="slide-btn">
              <ul className="slide-wrap">
                  <li><i className="left"></i>广场<i className="right"></i></li>
                  <li>城市</li>
                  <li className="active">省份</li>
                  <li>区域</li>
              </ul>
          </div>
      </div>
    )
  }
}
