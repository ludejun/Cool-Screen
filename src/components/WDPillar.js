import { Component } from 'react';
import './WDPillar.less';
import { getProperSize } from '../utils';
export default class WDPillar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const color = [];
    return (
      <div className="item-pillar">
        <style>
          .top {'{bottom: calc(100% - 9px)}'}
        </style>
        <div
          className="cube"
          style={{ height: `40%` }}
        >
          <span className="block top" style={{ background: `pink` }} />
          <span
            className="block left"
            style={{ background: `pink` }}
          />
          <span
            className="block right"
            style={{ background: `linear-gradient( -135deg, ${startColor}, ${endColor})` }}
          />
        </div>
      </div>
    );
  }
}
