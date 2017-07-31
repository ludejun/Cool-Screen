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
          high: 7,
          middle: 28,
          low: 65
        },
        cars: {
          haveCar: 67,
          noCar: 33
        },
        sex: {
          male: 37,
          female: 63
        },
        marriage: {
          yes: 38,
          no: 62
        },
        age: {
          18: 0.04,
          24: 0.24,
          34: 0.41,
          44: 0.22,
          45: 0.09
        }
      }, {
        consume: {
          high: 7,
          middle: 26,
          low: 67
        },
        cars: {
          haveCar: 67,
          noCar: 33
        },
        sex: {
          male: 37,
          female: 63
        },
        marriage: {
          yes: 38,
          no: 62
        },
        age: {
          18: 0.04,
          24: 0.24,
          34: 0.41,
          44: 0.22,
          45: 0.09
        }
      }, {
        consume: {
          high: 7,
          middle: 29,
          low: 64
        },
        cars: {
          haveCar: 67,
          noCar: 33
        },
        sex: {
          male: 37,
          female: 63
        },
        marriage: {
          yes: 38,
          no: 62
        },
        age: {
          18: 0.04,
          24: 0.24,
          34: 0.41,
          44: 0.22,
          45: 0.09
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
        <HeaderTitle title="万达大数据-商圈分析"/>
        <div className="left-container">
          <WDFloor
            brandsName={this.brandsName[this.state.tab]}
            tab={this.state.tab}
            radioChange={this.radioChange}
          />
        </div>
        <div className="right-container">
          <WDAnalysis customerPic={this.customerPic[this.state.tab]} />
        </div>
      </div>
    );
  }
}