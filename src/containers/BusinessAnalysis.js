import React, { Component } from 'react';
import { WDAnalysis,  WDFloor } from '../components';
import HeaderTitle from './Layout/HeaderTitle';
import './businessAnalysis.less';


export default class BusinessAnalysis extends Component {
  render() {
    return (
      <div className="analysis-container flex-center flex-row">
        <HeaderTitle title="万达大数据-商圈分析" />
        <div className="left-container"><WDFloor />
        </div>
        <div className="right-container">
          <WDAnalysis />
        </div>
      </div>
    );
  }
}
