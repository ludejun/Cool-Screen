import React, { Component } from 'react';
import { WDButtonSvg } from '../../components';
import HeaderTitle from '../Layout/HeaderTitle';
import LifeOSUVDotBg from './LifeOSUVDotBg';
import LifeOSUVRoundBoard from './LifeOSUVRoundBoard';
import AppleLogo from './AppleLogo';
import AndroidLogo from './AndroidLogo';

import './LifeOSUV.less';
import './LifeOSUVAnime.less';

export default class LifeOSUV extends Component {
  constructor() {
    super();

    // 1	android	广场	52324	57.1126064912597
    // 2	android	闪购	35292	38.5218658414788
    // 3	android	优惠券	34085	37.2044031850506
    // 4	android	门店	19276	21.0401078420136
    // 5	android	电影	16334	17.8288608368671
    // 6	android	其它	25920	28.2921558033302
    // 	android	外圈sum	102743	112.145870513177
    // 	android	内圈sum	80488	87.8541294868226
    //            sum	183231	200

    // 1	ios	广场	27712	46.121711922376
    // 2	ios	优惠券	24214	40.2999109587331
    // 3	ios	电影	20070	33.4029575015187
    // 4	ios	闪购	16394	27.2849070891827
    // 5	ios	门店	14985	24.93987634082
    // 6	ios	其它	16794	27.9506361873695
    // 	ios	外圈sum	62767	104.464545764715
    // 	ios	内圈sum	57402	95.5354542352853
    // 		    sum	120169	200

    this.list = {
      ios: { out: '46% 40% 34% 27% 25% 28%', in: '33% 27% 22% 20.5% 22.5% 46%', offset: '-37%' },
      android: { out: '57% 39% 37% 21% 18% 28%', in: '32% 30% 17% 14.5% 22.5% 51%', offset: '-46%' }
    };
  }

  render() {
    return (
      <div className="life-osuv flex-row flex-center dark-bg">
        <HeaderTitle title="智慧生活：按照移动OS类型／应用UV对比" />
        {Object.keys(this.list).map(v =>
          <div className={`dotted-panel panel-${v} flex1`} key={v}>
            <LifeOSUVDotBg className={`dot-bg dot-bg-${v}`} />
            <LifeOSUVRoundBoard
              className="round-board"
              outerDashArray={{ strokeDasharray: this.list[v].out }}
              innerDashArray={{
                strokeDasharray: this.list[v].in,
                strokeDashoffset: this.list[v].offset
              }}
            />
            {v === 'ios'
              ? <AppleLogo className="center-logo" />
              : <AndroidLogo className="center-logo-android" />}
            <WDButtonSvg className="title-button" title={v} />
          </div>
        )}
      </div>
    );
  }
}
