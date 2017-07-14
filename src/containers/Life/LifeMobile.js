import React, { Component } from 'react';
import { WDLogoSvg } from '../../components';
import HeaderTitle from '../Layout/HeaderTitle';
import LifeMobileBorder from './LifeMobileBorder';
import LifeMobileLegend from './LifeMobileLegend';
import LifeMobileRadarBg from './LifeMobileRadarBg';
import LifeMobileRadar from './LifeMobileRadar';
import LifeMobileFeature from './LifeMobileFeature';

import './LifeMobile.less';

export default class LifeMobile extends Component {
  constructor() {
    super();
    this.mobileRadar = {
      max: 100,
      values: [
        { name: '客流承载力', value: 100 },
        { name: '好评度', value: 100 },
        { name: '消费潜力', value: 100 },
        { name: '层次定位', value: 100 },
        { name: '便利性', value: 100 },
        { name: '客流承载力1', value: 100 },
        { name: '好评度1', value: 100 },
        { name: '消费潜力1', value: 100 },
        { name: '层次定位1', value: 100 },
        { name: '便利性1', value: 100 },
        { name: '层次定位2', value: 100 },
        { name: '便利性2', value: 100 }
      ]
    };
    this.brandFeature = [
      { feature: '新闻资讯', brand: '三星' },
      { feature: '便利生活', brand: '小米' },
      { feature: '拍摄美化', brand: '苹果' }
    ];
  }

  render() {
    return (
      <div className="life-mobile flex-row flex-center dark-bg">
        <HeaderTitle title="智慧生活：移动品牌及兴趣维度对比" />
        <WDLogoSvg className="main-header-logo" />
        <div className="app-use flex1">
          <LifeMobileBorder className="mobile-radar-border" />
          <LifeMobileLegend className="mobile-radar-legend" />
          <LifeMobileRadarBg className="mobile-radar-bg" />
          <LifeMobileRadar className="mobile-radar" opt={this.mobileRadar} />
        </div>
        <div className="brand-feature">
          <LifeMobileFeature className="feature-bg" />
          {this.brandFeature.map((v, i) =>
            <div className={`feature-square feature-square-${i}`} key={i}>
              <p className="feature-square-title">
                {v.feature}
              </p>
              {v.brand}用户特征
            </div>
          )}
        </div>
      </div>
    );
  }
}
