import React, { Component } from 'react';
import echarts from 'echarts';
import 'echarts-gl';
import './home.less';

export default class Home extends Component {

  componentDidMount() {
    const chart = echarts.init(document.getElementById('home-earth'));
    chart.setOption({
      backgroundColor: 'transparent',
      globe: {
        baseTexture: '/img/echarts/data-1491890179041-Hkj-elqpe.jpg',
        displacementScale: 0.1,
        shading: 'lambert',

        light: {
          ambient: {
            intensity: 0.1
          },
          main: {
            intensity: 1.5
          }
        },

        layers: [{
          type: 'blend',
          blendTo: 'emission',
          texture: '/img/echarts/data-1491890291849-rJ2uee5ag.jpg'
        }, {
          type: 'overlay',
          texture: '/img/echarts/data-1491890092270-BJEhJg96l.png',
          shading: 'lambert',
          distance: 5
        }]
      },
      series: [{
        type: 'lines3D',
        coordinateSystem: 'globe',
        blendMode: 'lighter',
        effect: {
          show: true,
        },
        lineStyle: {
          color: 'rgb(50, 50, 150)',
          width: 3,
          opacity: 0.8,
        },
        data: [[
          [120, 66, 1], // 起点的经纬度和海拔坐标
          [122, 32, 2]  // 终点的经纬度和海拔坐标
        ], [
          [120, 66, 1], [-80, 30, 1]
        ],]
      }]
    })

  }

  render() {
    return (
      <div className="super-home">
        <img src="/img/home-title.png" className="home-title" />
        <div className="home-slogan-container">
          <div className="home-slogan-container-sub">
            <p>万 达 大 数 据 助 力 商 业 模 式 创 新</p>
          </div>
        </div>
        <div className="home-earth-container">
          <img src="/img/home-earth-oval-1.png" className="home-earth-oval-1" />
          <img src="/img/home-earth-oval-2.png" className="home-earth-oval-2" />
          <div id="home-earth" className="home-earth"></div>
        </div>
        <p className="home-chart-title">万达全球版图</p>
      </div>
    );
  }
}