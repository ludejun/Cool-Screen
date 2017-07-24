import React, { Component } from 'react';
// import { WDButtonSvg } from '../../components';
import HeaderTitle from '../Layout/HeaderTitle';
import RecomandPersonCard from './RecomandPersonCard';
import RecomandBuilding from './RecomandBuilding';
import RecomandTitle from './RecomandTitle';

import './DigitalRecomand.less';
import './DigitalRecomandAnime.less';

export default class DigitalRecomand extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="digital-recomand flex-row flex-center dark-bg">
        <HeaderTitle title="数字商业：精准化推荐Demo" />
        <div className="recomand-div flex1 flex-row flex-center">
          <RecomandBuilding className="recomand-building" />
          <RecomandTitle className="recomand-title" />
        </div>
        <div className="flex-col cards-div">
          {['blue', 'red'].map(v =>
            <RecomandPersonCard key={v} className="recomand-card" type={v} />
          )}
        </div>
      </div>
    );
  }
}
