import React, { Component } from 'react';
import RoutesConfig from '../configs/routesConfig';

import './app.less';

export default class App extends Component {
  render() {
    return (
      <div id="app">
        {/* <div id="app" style={{ minWidth: 1200 }}>*/}
        {this.props.children}
      </div>
    );
  }
}
