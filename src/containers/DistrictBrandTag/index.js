import React, { Component } from 'react';
import anime from 'animejs';
// import { WDForceGragh, AnimeBrandTag } from '../components';
import HeaderTitle from '../Layout/HeaderTitle';
import { getBaseFontSize } from '../../utils';
import './DistrictBrandTag.less';

export default class DistrictBrandTag extends Component {
  constructor(props) {
    super(props);
    this.data = {
      0: { id: 0, name: '必胜客', tag: [1, 2, 3, 4, 5, 6, 7, 8] },
      1: { id: 1, name: '屈臣氏', tag: [10, 20, 30, 40, 50, 60, 70, 80] },
      2: { id: 2, name: '汉拿山', tag: [1, 2, 3, 4, 5, 6, 7, 8] },
      3: { id: 3, name: 'ZARA', tag: [10, 20, 30, 40, 50, 60, 70, 80] },
      4: { id: 4, name: '避风塘', tag: [1, 2, 3, 4, 5, 6, 7, 8] },
      5: { id: 5, name: '万达影城', tag: [10, 20, 30, 40, 50, 60, 70, 80] },
      6: { id: 6, name: '汤姆熊', tag: [1, 2, 3, 4, 5, 6, 7, 8] },
      7: { id: 7, name: '宝大祥', tag: [1, 2, 3, 4, 5, 6, 7, 8] },
      8: { id: 8, name: '一茶一座', tag: [1, 2, 3, 4, 5, 6, 7, 8] },
      9: { id: 9, name: '海澜之家', tag: [1, 2, 3, 4, 5, 6, 7, 8] }
    };
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
    this.highlightInterval = setInterval(() => {
      this.setState({
        highlightBrand: (this.state.highlightBrand + 1) % Object.keys(this.data).length
      });
      anime({
        targets: '.tag-div',
        direction: 'reverse',
        easing: 'easeInOutQuart',
        duration: 500,
        scaleX: 0
      });
    }, 10000);

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
      <div className="district-brand-tag flex-row flex-center">
        <HeaderTitle title="数字商业：品牌与标签相关性" />
        <div>
          <span className="type-title type-title-brand">品牌</span>
          <div className="brand-anime-container">
            <div className="brand-div">
              {this.brandList.map((line, i) =>
                <div className="brand-line" key={i}>
                  {line.map((v, j) =>
                    <div
                      className={`brand-block ${highlightBrand === v ? 'highlight' : ''}`}
                      key={j}
                    >
                      <span className="brand-title type-title-tag">
                        {this.data[v].name || ''}
                      </span>
                      <span className="brand-cube" />
                    </div>
                  )}
                </div>
              )}
            </div>
            {this.data[highlightBrand].tag.map((v, i) =>
              <div className={`brand-hanabi brand-hanabi-${i + 1}`} key={i}>
                <div className="span-hanabi" />
              </div>
            )}
          </div>
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
                <img className="round-square-img" src="/img/tag-node.png" />
                <div className="round-square-content">{`主力店${v}`}</div>
              </div>
            )}

            <div className="center-round-out">
              <img className="center-circle" src="/img/home-circle.png" />
              <div className="center-round">{this.data[highlightBrand].name}</div>
            </div>
          </div>
        </div>
        {/*  </div>*/}
      </div>
    );
  }
}
