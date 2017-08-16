import React, { Component } from 'react';
import anime from 'animejs';
import HeaderTitle from '../Layout/HeaderTitle';
import { getBaseFontSize } from '../../utils';
import './DistrictBrandTag.less';
import './DistrictBrandTagLong.less';
import DistrictBrandTagData from './DistrictBrandTagData';

export default class DistrictBrandTag extends Component {
  constructor(props) {
    super(props);
    this.data = DistrictBrandTagData;

    this.brandList = [[0, 1, 2], [3, 4, 5, 6], [7, 8, 9]];
    this.highlightInterval = null;

    this.state = {
      highlightBrand: 0
    };
  }

  generateRandomNumber(n) {
    return (Math.random() * n * 2 - n) / 192 * getBaseFontSize();
  }

  componentWillUnmount() {
    clearInterval(this.highlightInterval);
  }

  componentDidMount() {
    clearInterval(this.highlightInterval);
    // this.highlightInterval = setInterval(() => {
    //   this.setState({
    //     highlightBrand: (this.state.highlightBrand + 1) % Object.keys(this.data).length
    //   });
    //   anime({
    //     targets: '.tag-div',
    //     direction: 'reverse',
    //     easing: 'linear',
    //     duration: 1000,
    //     opacity: 0.5
    //   });
    // }, 6000);
    Object.keys(this.data).forEach((v) => {
      const tagAnime = anime({
        targets: `#RoundSquare${v}`,
        translateX: this.generateRandomNumber(15),
        translateY: this.generateRandomNumber(15),
        scale: this.generateRandomNumber(0.3) + 1,
        direction: 'alternate',
        easing: 'linear',
        duration: 3000,
        loop: true,
        delay: Math.random() * 2000
      });
      const lineAnime = anime({
        targets: `#JoinLine${v}`,
        opacity: 1 - Math.random() * 0.7,
        direction: 'alternate',
        easing: 'linear',
        duration: 3000,
        loop: true,
        delay: Math.random() * 2000
      });
    });
  }

  render() {
    const { highlightBrand } = this.state;
    return (
      <div className="district-brand-tag district-brand-tag-circle flex-row flex-center">
        <HeaderTitle title="广场品牌标签相关性" />
        <div className="brand-anime-container">
          <span className="type-title type-title-brand">品牌</span>

          {/* <img className="brand-div-bg" src="/img/brand-tag-bg.svg" />*/}
          <div className="brand-div">
            {this.brandList.map((line, i) =>
              <div className="brand-line" key={i}>
                {line.map((v, j) =>
                  <div className={`brand-block ${highlightBrand === v ? 'highlight' : ''}`} key={j}>
                    <span className="brand-title type-title-tag">
                      {this.data[v].name || ''}
                    </span>
                    <span className="brand-cube" />
                  </div>
                )}
              </div>
            )}
          </div>
          {[1, 2, 3, 4, 5, 6].map((v, i) =>
            <div className={`brand-hanabi brand-hanabi-${i + 1}`} key={i}>
              <div className="span-hanabi" />
            </div>
          )}
        </div>
        <div className="tag-div flex1 flex-col">
          <div><span className="type-title type-title-tag">标签</span></div>
          <div className="flex1 tag-gragh">
            {this.data[highlightBrand].tag.map((v, i) =>
              <div className={`join-line join-line-${i + 1}`} id={`JoinLine${i + 1}`} key={i} />
            )}

            {this.data[highlightBrand].tag.map((v, i) =>
              <div
                className={`round-square round-square-${i + 1}`}
                id={`RoundSquare${i + 1}`}
                key={i}
              >
                {v || ''}
              </div>
            )}

            <div className="center-round-out">
              <img className="center-circle" src="/img/home-circle.png" />
              <div className="center-round">{this.data[highlightBrand].name}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
