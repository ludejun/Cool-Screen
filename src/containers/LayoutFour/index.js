import React, { Component } from 'react';
import { WDLogoSvg} from '../../components';
import HeaderTitle from '../Layout/HeaderTitle';
import './layoutFour.less';
export default function (props) {
  return (
    <div className="layout-four">
			<p className="header-title">
	      <span className="title-pattern-1" />
	      <span className="title-pattern-2" />
	      <label className="title-name">111111</label>
	      <span className="title-pattern-2" />
	      <span className="title-pattern-1" />
	    </p>
      <WDLogoSvg className="header-logo" />
    </div>
  );
}
