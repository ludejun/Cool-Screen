import React from 'react';
import { WDTextContainer, WDFeelingContainer } from '../../components';

export default function (props) {
  return(
    <div>
      <WDTextContainer className="feeling-text-container feeling-text-wealth" />
      <WDFeelingContainer className="feeling-main-container" style={{...props.style}}/>


    </div>
  );
}