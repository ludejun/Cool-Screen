import React, {Component} from 'react';
import {BgGradualHeight, WDTextContainer, WDFeelingContainer} from '../../components';
import HeaderTitle from '../Layout/HeaderTitle';
import FeelingImageContainer from './FeelingImageContainer';
import './popularFeeling.less';

export default class PoluparFeeling extends Component {

  constructor(props) {
    super(props);
    this.state = {
      'small':true,
      'big':true
    };
    this.timer = null;
  }

  componentDidMount (){
    let now = true;
    this.timer = setInterval(() => {
      this.setState({
        'small':!now,
        'big':!now
      })
    },5000)
  }

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
            <div className="transform-sm-1"></div>
          </div>
          <div className="feeling-loan">
            <div className="transform-big-1"></div>
          </div>
          <div className="feeling-cost">
            <div className="transform-big-2"></div>
          </div>
          <div className="feeling-bill">
            <div className="transform-sm-2"></div>
          </div>
        </div>
      </div>
    );
  }
}