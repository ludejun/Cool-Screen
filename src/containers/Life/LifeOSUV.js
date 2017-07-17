import React, { Component } from 'react';
import { WDButtonSvg } from '../../components';
import HeaderTitle from '../Layout/HeaderTitle';
import LifeOSUVDotBg from './LifeOSUVDotBg';
import LifeOSUVRoundBoard from './LifeOSUVRoundBoard';
import AppleLogo from './AppleLogo';
import AndroidLogo from './AndroidLogo';

import './LifeOSUV.less';

export default class LifeOSUV extends Component {
  constructor() {
    super();
    this.list = ['ios', 'android'];
  }

  render() {
    return (
      <div className="life-osuv flex-row flex-center dark-bg">
        <HeaderTitle title="智慧生活：按照移动OS类型／应用UV对比" />
        {this.list.map(v =>
          <div className="dotted-panel flex1" key={v}>
            <LifeOSUVDotBg className={`dot-bg dot-bg-${v}`} />
            <LifeOSUVRoundBoard className="round-board" />
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
