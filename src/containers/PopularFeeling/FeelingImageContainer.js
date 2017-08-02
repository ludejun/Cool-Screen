import React from 'react';
import { WDTextContainer, WDFeelingContainer } from '../../components';

export default function (props) {
  return(
    <div className={ `feeling-wealth ${props.className}` } >
    	<p className="feeling-title">{ props.title }</p>
    	<img src={props.src} style={{ width: '81%', height: '68%'}} />
      <WDTextContainer className="feeling-text-container feeling-text-weal th" />
      <WDFeelingContainer className="feeling-main-container" />
      <div className="feeling-circle feeling-circle1"></div>
      <div className="feeling-circle feeling-circle2"></div>
      <div className="feeling-circle feeling-circle3"></div>
      <div className="feeling-circle feeling-circle4"></div>
    </div>
  );
}