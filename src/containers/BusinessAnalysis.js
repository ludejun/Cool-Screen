import React, {Component} from 'react';
import {WDAnalysis, WDFloor} from '../components';
import HeaderTitle from './Layout/HeaderTitle';
import './businessAnalysis.less';

export default class BusinessAnalysis extends Component {
  render() {
    return (
      <div className="analysis-container flex-center flex-row">
        <HeaderTitle title="万达大数据-商圈分析" />
        <div className="left-container">
          <WDFloor />
        </div>
        <div className="right-container">
          <WDAnalysis
            customerPic={{
            consume: {
              high: 27,
              middle: 33,
              low: 40
            },
            cars: {
              haveCar: 46,
              noCar: 54
            },
            sex: {
              male: 59,
              female: 41
            },
            marriage: {
              yes: 38,
              no: 62
            },
            age: {
              18: 0.01,
              24: 0.2,
              34: 0.55,
              44: 0.17,
              45: 0.25
            }
          }} />
        </div>
      </div>
    );
  }
}
