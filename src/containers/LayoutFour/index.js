import React, { Component } from 'react';
import { WDLogoSvg} from '../../components';
import './layoutFour.less';
export default function (props) {
  return (
    <div className="layout-four">
      <WDLogoSvg className="header-logo" />
      <div className="main-container">
        {props.children}
      </div>
    </div>
  );
}
