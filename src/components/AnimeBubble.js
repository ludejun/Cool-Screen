/* eslint-disable */
import React, { Component, PropTypes } from 'react';
import anime from 'animejs';

class AnimeBubble extends Component {
  constructor(props) {
    super(props);
    this.animec = null;  // canvas ref
  }

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
      // p.color = colors[anime.random(0, colors.length - 1)];
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
      // const particulesAnimation = anime({
      //   targets: particules,
      //   x: (p) => {
      //     return p.x + anime.random(-distance, distance);
      //   },
      //   y: (p) => {
      //     return p.y + anime.random(-distance, distance);
      //   },
      //   radius: 0,
      //   duration: () => {
      //     return anime.random(1200, 1800);
      //   },
      //   easing: 'easeOutExpo',
      //   complete: removeAnimation
      // });

      const relativeValues = anime({
        targets: particules,
        width: {
          value: '-=10',
          // duration: 1800,
          easing: 'easeInOutSine'
        },
        height: {
          value: '*=4',
          // duration: 1800,
          easing: 'easeInOutSine'
        },
        duration: () => {
          return anime.random(1200, 1800);
        }
      });
      animations.push(relativeValues);
    };

    const randomCoords = () => {
      // x = anime.random(0, animec.width);
      // y = anime.random(0, animec.height);
      x = 10;
      y = 10;
    };


    // const mainLoop =
    anime({
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

    // var relativeValues =
    // anime({
    //   targets: '#relativeValues .el',
    //   width: {
    //     value: '-=10',
    //     duration: 1800,
    //     easing: 'easeInOutSine'
    //   },
    //   height: {
    //     value: '*=4',
    //     duration: 1800,
    //     easing: 'easeInOutSine'
    //   }
    // });

    if (this.animeLoop) {
      clearInterval(this.animeLoop);
    }
    this.animeLoop = setInterval(() => {
      randomCoords(this.props.count);
      animateParticules(x, y);
    }, 3000);

    window.addEventListener('resize', setCanvasSize, false);

    // return {
    //   boom: animateParticules
    // }
  }

  componentWillUnmount() {
    clearInterval(this.animeLoop);
  }

  render() {
    return (
      <div id="animeContainer" style={{height: '100%', width: '100%', position: 'absolute'}}>
        <canvas ref={ref => this.animec = ref} />
      </div>
    );
  }
}

AnimeBubble.propTypes = {
  count: PropTypes.number
};

AnimeBubble.defaultProps = {
  count: 0
};

export default AnimeBubble;
