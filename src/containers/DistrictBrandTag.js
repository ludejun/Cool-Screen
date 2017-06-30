import React, { Component } from 'react';
import { WDForceGragh } from '../components';
import './DistrictBrandTag.less';

export default class DistrictBrandTag extends Component {
  createNodes(count) {
    const names = ['万达影城', '文职', '<44岁', '医药 ', '本科以上', '啦啦啦', '嘤嘤嘤'];
    const labelShow = {
      label: {
        normal: {
          show: true
        }
      }
    };
    const center = {
      // fixed: true,
      category: 0,
      symbol: 'circle',
      value: 100,
      itemStyle: {
        normal: {
          color: '#09CDC6'
        }
      }
      // label: {
      //   show: true,
      //   normal: {
      //     formatter: '{b}',
      //     textStyle: {
      //       color: '#fff',
      //       fontSize: 18
      //     }
      //   }
      // }
      // x: 100,
      // y: 100
    };
    const nodes = names.map((v, i) => {
      const n = {
        id: i,
        value: Math.random() * 50,
        name: v,
        category: 1,
        symbol:
          'path://M9.21727615,2.5 L84.5,2.5 L84.5,31.8036549 L78.2819652,38.5 L2.5,38.5 L2.5,9.69708159 L9.21727615,2.5 Z',
        ...labelShow
      };
      return i == 0 ? { ...n, ...center } : n;
    });
    return nodes;
  }

  render() {
    return (
      <div>
        <div className="page-title-div">
          <span className="page-title">
            数字商业：品牌与标签相关性
          </span>
        </div>
        <div className="flex-row district-brand-tag">
          <div>
            <span className="type-title type-title-brand">品牌</span>
            <div className="brand-div">
              {[[1, 2, 3], [4, 5, 6, 7], [8, 9, 10]].map((line, i) =>
                <div className="brand-line" key={i}>
                  {line.map((v, j) =>
                    <div className="brand-block" key={j}>
                      <span className="brand-title type-title-tag">必胜客{v}</span>
                      <img className="brand-cube" src="/img/brand-blue.png" />
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="tag-div">
            <span className="type-title type-title-tag">标签</span>
            <WDForceGragh
              config={{
                nodes: this.createNodes(),
                categories: [{ name: 'circle' }, { name: 'square' }]
              }}
              className="tag-gragh"
            />
          </div>
        </div>
      </div>
    );
  }
}
