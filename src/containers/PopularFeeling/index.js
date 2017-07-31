import React, {Component} from 'react';
import { BgGradualHeight } from '../../components';
import HeaderTitle from '../Layout/HeaderTitle';
import './popularFeeling.less';

export default class PoluparFeeling extends Component {

  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <HeaderTitle title={'数字金融：万达金融产品舆情'} />
        <BgGradualHeight className="feeling-bg" />
        <div className="feeling-container">
          <div className="feeling-star-center"></div>
          <div className="feeling-star-left" style={{top: 41, animationDelay: '2s'}}></div>
          <div className="feeling-star-left" style={{top: 279}}></div>
          <div className="feeling-star-right" style={{bottom: 124, animationDelay: '1.5s'}}></div>
          <div className="feeling-star-right" style={{bottom: 23}}></div>

          <div className="feeling-wealth"></div>
          <div className="feeling-loan"></div>
          <div className="feeling-cost"></div>
          <div className="feeling-bill"></div>
        </div>
      </div>
    );
  }
}