import React, { Component } from 'react';
import './WDPillar.less';
import { getProperSize } from '../utils';
export default class WDPillar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = {name:['低端消费', '中端消费', '高端消费'],percentage:['50%','83%','26%'],
      top:['#00D1C6', '#29AAFF', '#0DF29E'],
      color: ['linear-gradient(-187deg, #00D1C6 1%, #040937 88%)',
      'linear-gradient(-180deg, #29AAFF 0%, #040937 86%)',
      ' linear-gradient(-157deg, #0DF29E 4%, #040937 81%)']
    };
    return (
      <div style={{width:160}}>
        {['50%','83%','26%'].map((item,i)=>
          <div className="item-pillar" key={i}>
            <style>
              .top {'{bottom: calc(100% - 9px)}'}
            </style>
            <div
              className="cube"
              style={{ height: `${item}` }}
            >
              <div className={`title title-${i}`}>
                <p className={i!=0 ? "percentage word-r": "percentage"} style={{ color: `${data['top'][i]}` }}>{data['percentage'][i]}</p>
                <p className={i!=0 ? "name word-r": "name"}>{data['name'][i]}</p>
              </div>
              <span className="block top" style={{ background: `${data['top'][i]}` }} />
              <span
                className="block left"
                style={{ background: `${data['color'][i]}` }}
              />
              <span
                className="block right"
                style={{ background: `${data['color'][i]}` }}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}
