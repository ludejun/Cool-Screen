import React, { Component } from 'react';
import './WDPillar.less';
import { getBaseFontSize } from '../utils';

const cube = {height:[110, 160, 60],color:['#00D1C6', '#29AAFF', '#0DF29E']};
export default class WDPillar extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    // Set up our canvas
  	var canvas = document.createElement('canvas');
  	var oDiv = document.getElementById('div1');
  	canvas.width = oDiv.offsetWidth;
  	canvas.height = oDiv.offsetHeight;
  	oDiv.appendChild(canvas);
  	var ctx = canvas.getContext('2d');
  	var y = 80;
    var x = 40;
  	var color = '#ff8d4b';

  	// Animation function
  	function draw() {
  		// clear the canvas
  		ctx.clearRect(0, 0, canvas.width, canvas.height);

  		// Wobble the cube using a sine wave
  		var wobble = Math.sin(Date.now() / 250) * canvas.height / 50;

      //draw oval
      drawEllipse(ctx, 50, 190 + wobble, 280, 60);
  		// draw the cube
  		drawCube(100,190 + wobble + y / 2,x,x,cube['height'][0],cube['color'][0]);
  		drawCube(180,180 + wobble + y / 2,x,x,cube['height'][1],cube['color'][1]);
  		drawCube(260,190 + wobble + y / 2,x,x,cube['height'][2],cube['color'][2]);

		  requestAnimationFrame(draw);
  	}
  	draw();

  	// Colour adjustment function
  	function shadeColor(color, percent) {
  		color = color.substr(1);
  		var num = parseInt(color, 16),
  			amt = Math.round(2.55 * percent),
  			R = (num >> 16) + amt,
  			G = (num >> 8 & 0x00FF) + amt,
  			B = (num & 0x0000FF) + amt;
  		return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 + (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 + (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
  	}

    function drawEllipse(ctx, x1, y1, w1, h1) {

      let x = x1/192*getBaseFontSize(),
          y = y1/192*getBaseFontSize(),
          w = w1/192*getBaseFontSize(),
          h = h1/192*getBaseFontSize();

  		let kappa = .5522848,
  			ox = (w / 2) * kappa, // control point offset horizontal
  			oy = (h / 2) * kappa, // control point offset vertical
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
  		//ctx.closePath(); // not used correctly, see comments (use to close off open path)
      ctx.strokeStyle = '#06F0FB';
  		ctx.stroke();
  	}
  	// Draw a cube to the specified specs
  	function drawCube(x1, y1, wx1, wy1, h1, color) {

      let x = x1/192*getBaseFontSize();
      let y = y1/192*getBaseFontSize();
      let wx = wx1/192*getBaseFontSize();
      let wy = wy1/192*getBaseFontSize();
      let h = h1/192*getBaseFontSize();
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
  	}
  }


  render() {
    const data = {name:['低端消费', '中端消费', '高端消费'],percentage:['50%','83%','26%'],
      top:['#00D1C6', '#29AAFF', '#0DF29E'],
      color: ['linear-gradient(-187deg, #00D1C6 1%, #040937 88%)',
      'linear-gradient(-180deg, #29AAFF 0%, #040937 86%)',
      ' linear-gradient(-157deg, #0DF29E 4%, #040937 81%)']
    };
    return (
      <div className="three-pillar">
        <div id="div1" className="canvas-container"></div>
        {[0,1,2].map((item,i)=>
          <div className={`title title-${i}`} key={i}>
            <p className={i!=0 ? "percentage word-r": "percentage"} style={{ color: `${data['top'][i]}` }}>{data['percentage'][i]}</p>
            <p className={i!=0 ? "name word-r": "name"}>{data['name'][i]}</p>
          </div>
        )}
      </div>
    );
  }
}
