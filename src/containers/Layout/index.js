import React from 'react';
import { WDLogoSvg, WDLayout } from '../../components';
import './layout.less';

export default function (props) {
  return (
    <div className="main">
      <div className="main-header-left">
       <WDLayout />
      </div>

      {/*<WDLogoSvg className="main-header-logo" />*/}
      <div className="main-header-right">
        <WDLayout />
      </div>
      {/* 这以上 147px */}
      <div className="main-container">
        {props.children}
      </div>
      {/* 这以下 73px */}
      <div className="main-footer-left">
        <WDLayout />
      </div>
      <div className="main-footer-right">
       <WDLayout />
      </div>
    </div>
  );
}
