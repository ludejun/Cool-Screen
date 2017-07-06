import React, { Component, PropTypes } from 'react';
import anime from 'animejs';
import { comdify } from '../utils';

export default class AnimeNumber extends Component {
  constructor(props) {
    super(props);
    this.timestamp = new Date().getTime();
  }

  componentDidMount() {
    const { num } = this.props;
    const obj = { num };

    const domAttributes = anime({
      targets: obj,
      num: num - 100,
      easing: 'easeInQuad',
      direction: 'reverse',
      loop: true,
      round: 1,
      duration: 10000,
      delay: 10000,
      update: () => {
        const el = document.querySelector(`.anime-number-${this.timestamp}`);
        el.innerHTML = comdify(obj.num);
      }
    });
  }

  render() {
    const { num } = this.props;
    return <span className={`anime-number-${this.timestamp}`} data-num={num}>{num}</span>;
  }
}

AnimeNumber.PropTypes = {
  num: PropTypes.number
};
