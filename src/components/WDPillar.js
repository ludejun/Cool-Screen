import React, { Component } from 'react';
import { getBaseFontSize } from '../utils';
import './WDPillar.less';

const cube = { height: [150, 380, 230], color: ['#00D1C6', '#29AAFF', '#0DF29E'] };

export default class WDPillar extends Component {
  constructor(props) {
    super(props);
    // this.real = [{'sm':[8045,0.13787],'md':[16157,0.276889],'lg':[34150,0.585241]}];
    this.data = [
      {
        name: '高端消费',
        percentage: '13.79%',
        top: '#0DF29E'
      },
      {
        name: '低端消费',
        percentage: '58.52%',
        top: '#00D1C6'
      },
      {
        name: '中端消费',
        percentage: '27.69%',
        top: '#29AAFF'
      }
    ];
  }

  getProperSize(x) {
    return x / 192 * getBaseFontSize();
  }

  componentDidMount() {
    // Set up our canvas
    const canvas = document.createElement('canvas');
    const oDiv = document.getElementById('canvasContainer');
    canvas.width = oDiv.offsetWidth;
    canvas.height = oDiv.offsetHeight;
    oDiv.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    const y = 80;
    const x = 40;
    const color = '#ff8d4b';

    // Colour adjustment
    const shadeColor = (color, percent) => {
      color = color.substr(1);
      let num = parseInt(color, 16),
        amt = Math.round(2.55 * percent),
        R = (num >> 16) + amt,
        G = ((num >> 8) & 0x00ff) + amt,
        B = (num & 0x0000ff) + amt;
      return `#${(0x1000000 +
        (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
        (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
        (B < 255 ? (B < 1 ? 0 : B) : 255))
        .toString(16)
        .slice(1)}`;
    };

    const drawEllipse = (ctx, x1, y1, w1, h1) => {
      let x = this.getProperSize(x1),
        y = this.getProperSize(y1),
        w = this.getProperSize(w1),
        h = this.getProperSize(h1);

      let kappa = 0.5522848,
        ox = w / 2 * kappa, // control point offset horizontal
        oy = h / 2 * kappa, // control point offset vertical
        xe = x + w, // x-end
        ye = y + h, // y-end
        xm = x + w / 2, // x-middle
        ym = y + h / 2; // y-middle

      ctx.beginPath();
      ctx.moveTo(x, ym);
      ctx.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
      ctx.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
      ctx.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
      ctx.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
      // ctx.closePath(); // not used correctly, see comments (use to close off open path)
      ctx.strokeStyle = '#06F0FB';
      ctx.stroke();
    };
    // Draw a cube to the specified specs
    const drawCube = (x1, y1, wx1, wy1, h1, color) => {
      let x = this.getProperSize(x1),
        y = this.getProperSize(y1),
        wx = this.getProperSize(wx1),
        wy = this.getProperSize(wy1),
        h = this.getProperSize(h1);

      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x - wx, y - wx * 0.5);
      ctx.lineTo(x - wx, y - h - wx * 0.5);
      ctx.lineTo(x, y - h * 1);
      ctx.closePath();
      ctx.fillStyle = shadeColor(color, -10);
      ctx.strokeStyle = color;
      ctx.stroke();
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + wy, y - wy * 0.5);
      ctx.lineTo(x + wy, y - h - wy * 0.5);
      ctx.lineTo(x, y - h * 1);
      ctx.closePath();
      ctx.fillStyle = shadeColor(color, 10);
      ctx.strokeStyle = shadeColor(color, 50);
      ctx.stroke();
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(x, y - h);
      ctx.lineTo(x - wx, y - h - wx * 0.5);
      ctx.lineTo(x - wx + wy, y - h - (wx * 0.5 + wy * 0.5));
      ctx.lineTo(x + wy, y - h - wy * 0.5);
      ctx.closePath();
      ctx.fillStyle = shadeColor(color, 20);
      ctx.strokeStyle = shadeColor(color, 60);
      ctx.stroke();
      ctx.fill();
    };

    // Animation
    const draw = () => {
      // clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Wobble the cube using a sine wave
      const wobble = Math.sin(Date.now() / 250) * canvas.height / 10;

      // draw oval
      drawEllipse(ctx, 450, 190 + wobble, 280 + wobble / 4, 60);
      // draw the cube
      drawCube(100, 470 + wobble + y / 2, x, x, cube.height[0], cube.color[0]);
      drawCube(180, 460 + wobble + y / 2, x, x, cube.height[1], cube.color[1]);
      drawCube(260, 470 + wobble + y / 2, x, x, cube.height[2], cube.color[2]);

      requestAnimationFrame(draw);
    };
    draw();
  }

  render() {
    return (
      <div className="three-pillar">
        <div id="canvasContainer" className="canvas-container" />
        {this.data.map((item, i) =>
          <div className={`title title-${i}`} key={i}>
            <p className={`percentage ${i !== 0 ? 'word-r' : ''}`} style={{ color: `${item.top}` }}>
              {item.percentage}
            </p>
            <p className={`name ${i !== 0 ? 'word-r' : ''}`}>
              {item.name}
            </p>
          </div>
        )}
      </div>
    );
  }
}
