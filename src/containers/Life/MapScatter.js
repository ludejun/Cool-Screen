import React, {Component} from 'react';
import {BgAnimation, WDAreaMap} from '../../components';
import HeaderTitle from '../Layout/HeaderTitle';
import './mapScatter.less';
import beijing from '../../assets/map/feifanBeijing.json';
import shanghai from '../../assets/map/feifanShanghai.json';
import beijingMap from '../../assets/map/beijing.json';
import shanghaiMap from '../../assets/map/shanghai.json';
import guangzhouMap from '../../assets/map/guangzhou.json';
import guangzhou from '../../assets/map/feifanguangzhou.json';

const mapList = [
  {
    img: '/img/beijing-tab.png',
    city: '北京市',
    name: 'beijing',
    data: '',
    position1: 'top-left',
    position: 'left'
  },
  {
    img: '/img/shanghai-tab.png',
    city: '上海市',
    name: 'shanghai',
    data: '',
    position1: 'top-right',
    position: 'right'
  },
  {
    img: '/img/guangzhou-tab.png',
    city: '广州市',
    name: 'guangzhou',
    data: '',
    position1: 'bottom-right',
    position: 'right'
  }
];
const SkyAnimate = React.createClass({
  render(){
    return (
      <div>
        <div className="month-container">
          <div className="dot"></div>
          <div className="pulse"></div>
          <div className="pulse1"></div>
        </div>
        <div className="line-container">
          <div className="hover-line"></div>
          <div className="hover-line"></div>
          <div className="hover-line"></div>
          <div className="hover-line"></div>
        </div>
      </div>
    )
  }
})
export default class MapScatter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
  }

  componentDidMount() {
    let timer = null;
    clearInterval(timer);
    timer = setInterval(() => {
      if (this.state.index === 2) {
        this.setState({index: 0});
      } else {
        this.setState({index: this.state.index + 1});
      }
    }, 6000);
  }

  render() {
    const data = [beijing, shanghai, guangzhou];
    const map = [beijingMap, shanghaiMap, guangzhouMap];
    return (
      <div>
        <HeaderTitle title="智慧生活：飞凡会员分布地图" className="sum-title"/>
        <BgAnimation />
        <div className="map-scatter">
          <img className="map-scatter-img" src="/img/map-scatter.png"/>
          <div key={this.state.index} className="area-map-tag">
            <div className={`area-map ${mapList[this.state.index].position1}`}>
              <div className="animate-wrap">
                <SkyAnimate/>
              </div>
              <img src={mapList[this.state.index].img} className="small-area-img"/>
              <div className="map-container">
                <WDAreaMap
                  className={`map map-${this.state.index}`}
                  name={mapList[this.state.index].name}
                  data={data[this.state.index]}
                  map={map[this.state.index]}
                />
              </div>
              <p className={`name ${mapList[this.state.index].position}`}>
                {mapList[this.state.index].city}
              </p>
            </div>
            <span className={`line line-${this.state.index}-0`}/>
            <span className={`line line-${this.state.index}-1`}/>
            <span className={`circle circle-${this.state.index}`}/>
          </div>
        </div>
      </div>
    );
  }
}
