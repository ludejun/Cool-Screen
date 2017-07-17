import React, { Component, PropTypes } from 'react';
import anime from 'animejs';
import { comdify } from '../utils';

// usage
// <AnimeNumber num={100} fromNum={100-10} duration={10} delay={10}/>

export default class AnimeNumber extends Component {
  constructor(props) {
    super(props);
    this.timestamp = new Date().getTime() + Math.random().toString().substr(2);
  }

  componentDidMount() {
    const { num, fromNum, duration, delay } = this.props;
    const obj = { num };
    console.log(444, this.props);
    const domAttributes = anime({
      targets: obj,
      num: fromNum || 0, // num - 100,
      easing: 'easeInQuad',
      direction: 'reverse',
      loop: true,
      round: 1,
      duration: duration || 10000,
      delay: delay || 10000,
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
