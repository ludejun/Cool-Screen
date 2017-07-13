import React, { Component, PropTypes } from 'react';
import { WDLogoSvg} from './';
import './BgAnimation.less';

export default class BgAnimation extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <div className="bg-animation">
        <WDLogoSvg className="main-header-logo" />
        <div className="bg-animation-container">
          <img className="bg-pic"  src="/img/bgAnimation.png"/>
          <div className="top-left area">
            <div className="circle  circle1" />
            <div className="circle  circle2" />
            <div className="circle  circle3" />
            <div className="circle  circle4" />
            <div className="circle  circle5" />
            <div className="circle  circle6" />
            <div className="circle  circle7" />
            <div className="circle  circle8" />
            <div className="circle  circle9" />
          </div>

          <div className="top-right  area">
            <div className="circle  circle1" />
            <div className="circle  circle2" />
            <div className="circle  circle3" />
            <div className="circle  circle4" />
            <div className="circle  circle5" />
            <div className="circle  circle6" />
            <div className="circle  circle7" />
            <div className="circle  circle8" />
            <div className="circle  circle9" />
          </div>

          <div className="bottom-left  area">
            <div className="circle  circle1" />
            <div className="circle  circle2" />
            <div className="circle  circle3" />
            <div className="circle  circle4" />
            <div className="circle  circle5" />
            <div className="circle  circle6" />
            <div className="circle  circle7" />
            <div className="circle  circle8" />
            <div className="circle  circle9" />
          </div>

          <div className="bottom-right area">
            <div className="circle  circle1" />
            <div className="circle  circle2" />
            <div className="circle  circle3" />
            <div className="circle  circle4" />
            <div className="circle  circle5" />
            <div className="circle  circle6" />
            <div className="circle  circle7" />
            <div className="circle  circle8" />
            <div className="circle  circle9" />
          </div>

          <div className="hanabi-pointer center-top">
            <div className="hanabi left" />
            <div className="circle" />
            <div className="hanabi right" />
          </div>

          <div className="hanabi-pointer center-bottom">
            <div className="hanabi left" />
            <div className="circle" />
            <div className="hanabi right" />
          </div>
        </div>
      </div>
    );
  }
}
