import React, { Component } from 'react';
import { WDLogoSvg, AnimeNumber } from '../../components';
import HeaderTitle from '../Layout/HeaderTitle';
import LifeMobileBorder from './LifeMobileBorder';
import LifeMobileLegend from './LifeMobileLegend';
import LifeMobileRadarBg from './LifeMobileRadarBg';
import LifeMobileRadar from './LifeMobileRadar';
import LifeMobileFeature from './LifeMobileFeature';

import './LifeMobile.less';
import './LifeMobileAnime.less';

export default class LifeMobile extends Component {
  constructor() {
    super();
    this.mobileRadar = {
      max: 12,
      values: [
        { name: '聊天社交', apple: 7.172208186, ss: 10.55958716, mi: 11.32139776 },
        { name: '蹭网', apple: 5.318873168, ss: 2.123528463, mi: 2.206212252 },
        { name: '娱乐消遣', apple: 5.035927236, ss: 10.19948395, mi: 10.61554501 },
        { name: '网购支付', apple: 1.390904497, ss: 5.029188841, mi: 4.230083405 },
        { name: '拍摄美化', apple: 2.336533603, ss: 1.016771488, mi: 0.953623814 },
        { name: '新闻资讯', apple: 2.464830723, ss: 5.029833898, mi: 5.346922634 },
        { name: '金融理财', apple: 1.370212228, ss: 4.20754717, mi: 5.051481162 },
        { name: '旅行交通', apple: 0.654775139, ss: 3.541364296, mi: 2.917169974 },
        { name: '便利生活', apple: 0.998383022, ss: 2.381551363, mi: 5.535087719 },
        { name: '浏览器&搜索', apple: 0.339742294, ss: 2.553781648, mi: 1.349726776 },
        { name: '汽车相关', apple: 0.317104598, ss: 0.889533946, mi: 0.82635893 },
        { name: '主题个性', apple: 0.194138454, ss: 0.882438316, mi: 1.207146966 }
      ]
    };
    this.brandFeature = [
      { feature: '聊天社交', brand: '苹果', percent: 26, id: 0 },
      { feature: '娱乐消遣', brand: '三星', percent: 21, id: 1 },
      { feature: '便利生活', brand: '小米', percent: 10, id: 2 }
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
            <div className={`feature-square feature-square-${v.id}`} key={i}>
              <p className="feature-square-title">
                {v.feature}
              </p>
              {v.brand}用户特征
            </div>
          )}
          {this.brandFeature.map((v, i) =>
            <div className={`feature-percent feature-percent-${v.id}`} key={i}>
              <AnimeNumber num={v.percent} duration={2500} delay={7500} />%
            </div>
          )}
          {[1, 2, 3, 4, 5].map((v, i) =>
            <div className={`feature-hanabi feature-hanabi-${v}`} key={i} />
          )}
        </div>
      </div>
    );
  }
}
