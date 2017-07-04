// /* eslint-disable */

import React, { Component, PropTypes } from 'react';
import anime from 'animejs';

window.requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame;
const start = null;

export default class AnimeBrandTag extends Component {
  constructor(props) {
    super(props);
    this.animec = null;
  }

  componentDidMount() {
    const animec = this.animec;
    const animeCtx = this.animec.getContext('2d');
    const numberOfParticules = 24;
    const distance = 200;
    let x = animec.width / 2;
    let y = animec.height / 2;

    const animations = [];

    const getFontSize = () => {
      return parseFloat(getComputedStyle(document.documentElement).fontSize);
    };

    // adjust canvas width and height according to parent container because 100% dose not work
    const setCanvasSize = () => {
      animec.width = parseFloat(
        getComputedStyle(document.getElementById('AnimeBrandTagContainer')).width
      );
      animec.height = parseFloat(
        getComputedStyle(document.getElementById('AnimeBrandTagContainer')).height
      );
      console.log(111);
      // step();
      // requestAnimationFrame(step);
    };

    // const updateCoords = function (e) {
    //   x = e.clientX || e.touches[0].clientX;
    //   y = e.clientY || e.touches[0].clientY;
    // };

    const colors = ['#FF324A', '#31FFA6', '#206EFF', '#FFFF99'];

    const createCenterCircle = (xx, yy) => {
      const c = {};
      c.x = xx;
      c.y = yy;
      // c.color = colors[anime.random(0, colors.length - 1)];
      c.radius = 190;
      c.rotate = 0;

      const grdTop = animeCtx.createLinearGradient(
        c.radius * 0.93 / Math.sqrt(2),
        0,
        0,
        c.radius * 0.93 / Math.sqrt(2)
      );
      const grdBottom = animeCtx.createLinearGradient(
        c.radius * 0.93 / Math.sqrt(2),
        0,
        0,
        c.radius * 0.93 / Math.sqrt(2)
      );
      grdTop.addColorStop(0, 'rgba(109,131,241,.15)');
      grdTop.addColorStop(1, '#1D6A5C');
      grdBottom.addColorStop(1, 'rgba(109,131,241,.15)');
      grdBottom.addColorStop(0, '#1D6A5C');

      c.draw = () => {
        animeCtx.save();
        animeCtx.beginPath();
        animeCtx.arc(c.x, c.y, c.radius * 1.12, 0, 2 * Math.PI, true);
        animeCtx.shadowBlur = 20;
        animeCtx.shadowColor = '#007FD3';
        animeCtx.globalAlpha = 0.3;
        animeCtx.fillStyle = '#09CDC6';
        animeCtx.fill();
        animeCtx.restore();

        animeCtx.beginPath();
        animeCtx.arc(c.x, c.y, c.radius, 0, 2 * Math.PI, true);
        animeCtx.fillStyle = '#09CDC6';
        animeCtx.fill();

        animeCtx.beginPath();
        animeCtx.arc(c.x, c.y, c.radius * 0.93, 0, 2 * Math.PI, true);
        animeCtx.lineWidth = 1;
        animeCtx.strokeStyle = '#80ECFE';
        animeCtx.stroke();

        animeCtx.beginPath();
        animeCtx.arc(c.x, c.y, c.radius * 0.93, 0, Math.PI / 2, false);
        animeCtx.lineWidth = 4;
        animeCtx.lineCap = 'round';
        animeCtx.strokeStyle = grdTop;
        animeCtx.stroke();

        animeCtx.beginPath();
        animeCtx.arc(c.x, c.y, c.radius * 0.93, Math.PI, Math.PI * 1.5, false);
        animeCtx.lineWidth = 4;
        animeCtx.lineCap = 'round';
        animeCtx.strokeStyle = grdBottom;
        animeCtx.stroke();
      };
      return c;
    };

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

      // const particules = createParticles(xx, yy);
      // const circle = createCircle(xx, yy);
      // const particulesAnimation = anime({
      //   targets: particules,
      //   x: p => {
      //     return p.x + anime.random(-distance, distance);
      //   },
      //   y: p => {
      //     return p.y + anime.random(-distance, distance);
      //   },
      //   radius: 0,
      //   duration: () => {
      //     return anime.random(1200, 1800);
      //   },
      //   easing: 'easeOutExpo',
      //   complete: removeAnimation
      // });
      // const circleAnimation = anime({
      //   targets: circle,
      //   radius: () => {
      //     return anime.random(getFontSize() * 8.75, getFontSize() * 11.25);
      //   },
      //   lineWidth: 0,
      //   alpha: {
      //     value: 0,
      //     easing: 'linear',
      //     duration: () => {
      //       return anime.random(400, 600);
      //     }
      //   },
      //   duration: () => {
      //     return anime.random(1200, 1800);
      //   },
      //   easing: 'easeOutExpo',
      //   complete: removeAnimation
      // });
      // animations.push(particulesAnimation);
      // animations.push(circleAnimation);

      const circle = createCenterCircle(xx, yy);
      const circleAnimation = anime({
        targets: circle,
        // x: (p) => {
        //   return p.x + anime.random(-distance, distance);
        // },
        // y: (p) => {
        //   return p.y + anime.random(-distance, distance);
        // },
        // radius: 0,
        // duration: Infinity,
        loop: true,
        // rotate: {
        //   value: 360,
        //   duration: 3000,
        //   easing: 'easeInOutSine'
        // },
        // rotate: 540,
        rotate: '1turn',
        easing: 'linear',
        // complete: removeAnimation
        update: () => {
          animeCtx.clearRect(0, 0, animec.width, animec.height);
          animations.forEach((anim) => {
            anim.animatables.forEach((animatable) => {
              animatable.target.draw();
            });
          });
        }
      });

      animations.push(circleAnimation);
    };

    // const mainLoop = anime({
    //   duration: Infinity,
    //   update: () => {
    //     animeCtx.clearRect(0, 0, animec.width, animec.height);
    //     animations.forEach((anim) => {
    //       anim.animatables.forEach((animatable) => {
    //         animatable.target.draw();
    //       });
    //     });
    //   }
    // });

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
      // x = anime.random(0, animec.width);
      // y = anime.random(0, animec.height);
      // const startX = (animec.width - middleWidth) / 2;
      // const startY = (animec.height - middleHeight) / 2;
      // if ((x > startX && x < startX + middleWidth) || (y > startY && y < startY + middleHeight)) {
      //   randomCoords();
      // }
      x = animec.width / 2;
      y = animec.height / 2;
      // console.log(444, x, y);
    };
    // if (this.animeLoop) {
    //   clearInterval(this.animeLoop);
    // }
    // this.animeLoop = setInterval(() => {
    //   randomCoords(this.props.middleWidth, this.props.middleHeight);
    //   animateParticules(x, y);
    // }, 3000);
    const step = (timestamp) => {
      // if (start === null) start = timestamp;
      // const progress = timestamp - start;
      // if (progress > 3000) {
      // if (animec.width != x * 2 || animec.height != y * 2) {
      randomCoords();
      // console.log(444, animec, x, y);
      animateParticules(x, y);
      // start = null;
      // } else {
      //   return;
      // }
      // }
      // randomCoords(this.props.middleWidth, this.props.middleHeight);
      // requestAnimationFrame(step);
      // requestAnimationFrame(step);
    };

    // randomCoords(this.props.middleWidth, this.props.middleHeight);
    // setCanvasSize();
    // requestAnimationFrame(step);
    setCanvasSize();
    step();
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
      <div id="AnimeBrandTagContainer" {...this.props}>
        <canvas ref={ref => (this.animec = ref)} />
      </div>
    );
  }
}

// AnimeParticule.propTypes = {
//   middleWidth: PropTypes.number,
//   middleHeight: PropTypes.number
// };
//
// AnimeParticule.defaultProps = {
//   middleWidth: 0,
//   middleHeight: 0
// };
