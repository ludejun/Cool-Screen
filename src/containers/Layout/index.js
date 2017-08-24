import React from 'react';
import { WDLogoSvg, WDLayout } from '../../components';
import './layout.less';

export default function (props) {
  return (
    <div className="main">

      <WDLogoSvg className="main-header-logo" />

      <WDLayout className="layout-svg main-header-left" />
      <WDLayout className="layout-svg main-header-right" />

      {/* 这以上 147px */}
      <div className="main-container">
        {props.children}
      </div>
      {/* 这以下 73px */}

      <WDLayout className="layout-svg main-footer-left" />
      <WDLayout className="layout-svg main-footer-right" />

    </div>
  );
}
