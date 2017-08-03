import React, {Component} from 'react';
import {BgGradualHeight, WDTextContainer, WDFeelingContainer} from '../../components';
import HeaderTitle from '../Layout/HeaderTitle';
import FeelingImageContainer from './FeelingImageContainer';
import './popularFeeling.less';




const cfg = [
  {
    'img': '/img/wealth.jpg',
    'name': '万达财富'
  },
  {
    'img': '/img/loan.jpg',
    'name': '万达小贷'
  },
  {
    'img': '/img/cost.jpg',
    'name': '快易花'
  },
  {
    'img': '/img/bill.jpg',
    'name': '快钱钱包'
  }
];
export default class PoluparFeeling extends Component {



  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <HeaderTitle title={'数字金融：万达金融产品舆情'}/>
        <BgGradualHeight className="feeling-bg"/>

        <div className="feeling-container" id="wrapdiv">
          <div className="feeling-star-center"></div>
          <div className="feeling-star-left" style={{top: 41, animationDelay: '2s'}}></div>
          <div className="feeling-star-left" style={{top: 279}}></div>
          <div className="feeling-star-right" style={{bottom: 124, animationDelay: '1.5s'}}></div>
          <div className="feeling-star-right" style={{bottom: 23}}></div>

          <div className="feeling-wealth">
            <FeelingImageContainer title={cfg[0].name} src={ cfg[0].img } className="transform-sm-1"/>
          </div>
          <div className="feeling-loan">
            <FeelingImageContainer title={cfg[1].name} src={ cfg[1].img } className="transform-big-1"/>
          </div>
          <div className="feeling-cost">
            <FeelingImageContainer title={cfg[2].name} src={ cfg[2].img } className="transform-big-2"/>
          </div>
          <div className="feeling-bill">
            <FeelingImageContainer title={cfg[3].name} src={ cfg[3].img } className="transform-sm-2"/>
          </div>
        </div>
      </div>
    );
  }
}