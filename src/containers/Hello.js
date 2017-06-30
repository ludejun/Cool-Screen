import React, { Component } from 'react';
import HeaderTitle from './Layout/HeaderTitle';
import './hello.less';

export default class Hello extends Component {
  render() {
    return (
      <div>
        <HeaderTitle title={'万达大数据-商圈分析'} />
        <h1>Hello World!</h1>
        <p>Test - REM</p>
        <div className="test-background">测试CSS图片</div>
      </div>
    );
  }
}
