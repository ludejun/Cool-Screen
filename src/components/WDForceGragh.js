import React, { Component, PropTypes } from 'react';
import REcharts from 'echarts-for-react';

export default class WDForceGragh extends Component {
  constructor(props) {
    super(props);
  }

  createEdges(nodes) {
    const edges = [];
    console.log(444, nodes);
    nodes &&
      nodes.forEach((v) => {
        if (v.id !== 0) {
          edges.push({
            source: 0,
            target: v.id
          });
        }
      });
    console.log(888, edges);
    return edges;
  }

  getOption() {
    const { config } = this.props;

    console.log(111, config);
    const option = {
      series: {
        type: 'graph',
        animation: true,
        // hoverAnimation: true,
        layout: 'force',
        force: {
          // initLayout: 'circular',
          // repulsion:30,
          // gravity: .1,
          edgeLength: [100, 150],
          // edgeLength: 50,
          repulsion: 200,
          gravity: 0.1
        },
        draggable: true,
        // symbol: 'path://',
        symbolSize: (val, params) => {
          console.log(555, params);
          if (params.data.id === 0) {
            return val;
          }
          return [88, 41];
        },
        itemStyle: {
          normal: {
            color: '#fff'
          }
        },
        lineStyle: {
          normal: {
            color: '#108EE9',
            opacity: 0.6
          }
        },
        label: {
          show: true,
          normal: {
            formatter: '{b}',
            textStyle: {
              color: '#108EE9',
              fontSize: 18
            }
          }
        },
        width: '100%',
        height: '100%',
        data: config.nodes || [],
        categories: config.categories || null,
        edges: config.edges || this.createEdges(config.nodes)
      }
    };
    console.log(222, option);

    return option;
  }

  render() {
    return <REcharts {...this.props} option={this.getOption()} />;
  }
}

WDForceGragh.PropTypes = {
  config: PropTypes.object
};
