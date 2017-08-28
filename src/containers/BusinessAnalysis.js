import React, {Component} from 'react';
import {WDAnalysis, WDFloor} from '../components';
import HeaderTitle from './Layout/HeaderTitle';
import './businessAnalysis.less';

export default class BusinessAnalysis extends Component {
  constructor(props) {
    super(props);
    this.timer = null;
    this.state = {
      tab: 0
    };
    this.customerPic = [
      {
        consume: {
          high: 7.5,
          middle: 40,
          low: 52.5
        },
        cars: {
          haveCar: 34,
          noCar: 66
        },
        sex: {
          male: 45,
          female: 55
        },
        marriage: {
          yes: 40,
          no: 60
        },
        age: {
          18: 0.07,
          24: 0.17,
          34: 0.38,
          44: 0.27,
          45: 0.01
        }
      }, {
        consume: {
          high: 7.5,
          middle: 40,
          low: 52.5
        },
        cars: {
          haveCar: 34,
          noCar: 66
        },
        sex: {
          male: 44,
          female: 56
        },
        marriage: {
          yes: 40,
          no: 60
        },
        age: {
          18: 0.07,
          24: 0.17,
          34: 0.38,
          44: 0.27,
          45: 0.01
        }
      }, {
        consume: {
          high: 7.5,
          middle: 40,
          low: 52.5
        },
        cars: {
          haveCar: 34,
          noCar: 66
        },
        sex: {
          male: 44,
          female: 56
        },
        marriage: {
          yes: 38,
          no: 62
        },
        age: {
          18: 0.07,
          24: 0.17,
          34: 0.38,
          44: 0.27,
          45: 0.01
        }
      }
    ];
    this.brandsName = [
      [
        'CROCS', 'GUESS 时尚表', '1001牛肉面'
      ],
      [
        '中国黄金', '海澜之家', '吴良材眼镜'
      ],
      ['上海书城', '沃尔玛', 'DISSONA']
    ];

  }
  componentDidMount() {
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      if (this.state.tab < 2) {
        this.setState({
          tab: this.state.tab + 1
        });
      } else {
        this.setState({tab: 0});
      }
    }, 3000);
  }
  radioChange = (e) => {
    clearInterval(this.timer);
    this.setState({tab: e.target.value});
  }
  render() {
    return (
      <div className="analysis-container flex-center flex-row">
        <HeaderTitle title="商圈客群画像"/>
        <div className="left-container">
          <WDFloor
            brandsName={this.brandsName[this.state.tab]}
            tab={this.state.tab}
            radioChange={this.radioChange}
          />
        </div>
        <WDAnalysis customerPic={this.customerPic[this.state.tab]} />
      </div>
    );
  }
}