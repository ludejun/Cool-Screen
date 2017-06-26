/* eslint-disable */

import React, { Component, PropTypes } from 'react';
import anime from 'animejs';

window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
let start = null;

class AnimeParticule extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    const animec = this.animec;
    const animeCtx = this.animec.getContext('2d');
    const numberOfParticules = 24;
    const distance = 200;
    let x = 0;
    let y = 0;
    const animations = [];

    const getFontSize = () => {
      return parseFloat(getComputedStyle(document.documentElement).fontSize);
    };

    const setCanvasSize = () => {
      animec.width = window.innerWidth;
      animec.height = window.innerHeight;
    };

    // const updateCoords = function (e) {
    //   x = e.clientX || e.touches[0].clientX;
    //   y = e.clientY || e.touches[0].clientY;
    // };

    const colors = ['#FF324A', '#31FFA6', '#206EFF', '#FFFF99'];

    const createCircle = (xx, yy) => {
      const p = {};
      p.x = xx;
      p.y = yy;
      p.color = colors[anime.random(0, colors.length - 1)];
      p.color = '#FFF';
      p.radius = 0;
      p.alpha = 1;
      p.lineWidth = 6;
      p.draw = () => {
        animeCtx.globalAlpha = p.alpha;
        animeCtx.beginPath();
        animeCtx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
        animeCtx.lineWidth = p.lineWidth;
        animeCtx.strokeStyle = p.color;
        animeCtx.stroke();
        animeCtx.globalAlpha = 1;
      };
      return p;
    };

    const createParticule = (xx, yy) => {
      const p = {};
      p.x = xx;
      p.y = yy;
      p.color = colors[anime.random(0, colors.length - 1)];
      p.radius = anime.random(getFontSize(), getFontSize() * 2);
      p.draw = () => {
        animeCtx.beginPath();
        animeCtx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
        animeCtx.fillStyle = p.color;
        animeCtx.fill();
      };
      return p;
    };

    const createParticles = (xx, yy) => {
      const particules = [];
      for (let i = 0; i < numberOfParticules; i++) {
        const p = createParticule(xx, yy);
        particules.push(p);
      }
      return particules;
    };

    const removeAnimation = (animation) => {
      const index = animations.indexOf(animation);
      if (index > -1) animations.splice(index, 1);
    };

    const animateParticules = (xx, yy) => {
      setCanvasSize();
      const particules = createParticles(xx, yy);
      const circle = createCircle(xx, yy);
      const particulesAnimation = anime({
        targets: particules,
        x: (p) => {
          return p.x + anime.random(-distance, distance);
        },
        y: (p) => {
          return p.y + anime.random(-distance, distance);
        },
        radius: 0,
        duration: () => {
          return anime.random(1200, 1800);
        },
        easing: 'easeOutExpo',
        complete: removeAnimation
      });
      const circleAnimation = anime({
        targets: circle,
        radius: () => {
          return anime.random(getFontSize() * 8.75, getFontSize() * 11.25);
        },
        lineWidth: 0,
        alpha: {
          value: 0,
          easing: 'linear',
          duration: () => {
            return anime.random(400, 600);
          }
        },
        duration: () => {
          return anime.random(1200, 1800);
        },
        easing: 'easeOutExpo',
        complete: removeAnimation
      });
      animations.push(particulesAnimation);
      animations.push(circleAnimation);
    };

    const mainLoop = anime({
      duration: Infinity,
      update: () => {
        animeCtx.clearRect(0, 0, animec.width, animec.height);
        animations.forEach((anim) => {
          anim.animatables.forEach((animatable) => {
            animatable.target.draw();
          });
        });
      }
    });

    // let onClick = function(e) {
    //   if (e.type === 'touchstart') {
    //     document.removeEventListener('mousedown', onClick, false);
    //     document.addEventListener('mousedown', restoreMouse, false);
    //   }
    //   updateCoords(e);
    //   animateParticules(x, y);
    // }

    // let restoreMouse = function(e) {
    //   onClick(e);
    //   document.addEventListener('mousedown', onClick, false);
    // }

    // document.addEventListener('touchstart', onClick, false);
    // document.addEventListener('mousedown', onClick, false);

    // if (this.animeLoop) {
    //   clearInterval(this.animeLoop);
    // }
    const randomCoords = (middleWidth, middleHeight) => {
      x = anime.random(0, animec.width);
      y = anime.random(0, animec.height);
      const startX = (animec.width - middleWidth) / 2;
      const startY = (animec.height - middleHeight) / 2;
      if ((x > startX && x < startX + middleWidth) || (y > startY && y < startY + middleHeight)) {
        randomCoords();
      }
    };
    // if (this.animeLoop) {
    //   clearInterval(this.animeLoop);
    // }
    // this.animeLoop = setInterval(() => {
    //   randomCoords(this.props.middleWidth, this.props.middleHeight);
    //   animateParticules(x, y);
    // }, 3000);

    const step = (timestamp) => {
      if (start === null) start = timestamp;
      let progress = timestamp - start;
      if (progress > 3000) {
        randomCoords(this.props.middleWidth, this.props.middleHeight);
        animateParticules(x, y);
        start = null;
      }
      requestAnimationFrame(step);
    };
    requestAnimationFrame(step);

    window.addEventListener('resize', setCanvasSize, false);

    // return {
    //   boom: animateParticules
    // }
  }

  // componentWillUnmount() {
  //   clearInterval(this.animeLoop);
  // }

  render() {
    return (
      <div id="animeContainer" style={{height: '100vh', width: '100vw', background: '#282741'}}>
        <canvas ref={ref => this.animec = ref} />
      </div>
    );
  }
}

AnimeParticule.propTypes = {
  middleWidth: PropTypes.number,
  middleHeight: PropTypes.number
};

AnimeParticule.defaultProps = {
  middleWidth: 0,
  middleHeight: 0
};

export default AnimeParticule;

/* eslint-enable */
