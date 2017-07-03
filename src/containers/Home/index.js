import React, { Component } from 'react';
import
import './home.less';

export default class Home extends Component {
  render () {
    return (
      <div className="super-home">
        <img src="/img/home-title.png" className="home-title" />
        <div className="home-slogan-container">
          <div className="home-slogan-container-sub">
            <p>万 达 大 数 据 助 力 商 业 模 式 创 新</p>
          </div>
        </div>
        <div className="home-earth-container">
          <img src="/img/home-earth-oval-1.png" className="home-earth-oval-1" />
          <img src="/img/home-earth-oval-2.png" className="home-earth-oval-2" />
          <div id="home-earth" className="home-earth"></div>
        </div>
        <p className="home-chart-title">万达全球版图</p>
      </div>
    );
  }
}