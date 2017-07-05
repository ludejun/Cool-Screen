import React from 'react';
import './layout.less';

export default function (props) {
  return (
    <div className="main">
      <div className="main-header-left">
        <div className="circle  circle1"></div>
        <div className="circle  circle2"></div>
        <div className="circle  circle3"></div>
        <div className="circle  circle4"></div>
        <div className="circle  circle5"></div>
        <img src="/img/main-header-left.png" className="main-image-base" />
      </div>
      <div className="main-header-logo">
        <img src="/img/wanda-logo.png" />
      </div>
      <div className="main-header-right">
         <div className="circle  circle1"></div>
        <div className="circle  circle2"></div>
        <div className="circle  circle3"></div>
        <div className="circle  circle4"></div>
        <div className="circle  circle5"></div>
        <img src="/img/main-header-right.png" className="main-image-base" />
      </div>
      {/* 这以上 147px */}
      <div className="main-container">
        {props.children}
      </div>
      {/* 这以下 73px */}
      <div className="main-footer-left">
        <div className="circle  circle1"></div>
        <div className="circle  circle2"></div>
        <div className="circle  circle3"></div>
        <div className="circle  circle4"></div>
        <div className="circle  circle5"></div>
        <img src="/img/main-footer-left.png" className="main-image-base" />
      </div>
      <div className="main-footer-right">
        <div className="circle  circle1"></div>
        <div className="circle  circle2"></div>
        <div className="circle  circle3"></div>
        <div className="circle  circle4"></div>
        <div className="circle  circle5"></div>
        <img src="/img/main-footer-right.png" className="main-image-base" />
      </div>
    </div>
  );
}
