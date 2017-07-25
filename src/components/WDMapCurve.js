import React, {Component} from 'react';
import echarts from 'echarts';
import 'echarts/extension/bmap/bmap';

class WDBaiduMapCurve extends Component {
  constructor(props) {
    super(props);
    this.color = props.colors || [
      '#FDB933',
      '#D64F44',
      '#00A6AC',
      '#1D953F',
      '#E0861A',
      '#45B97C',
      '#F3715C',
      '#F26522',
      '#7FB80E',
      '#63C5FA',
    ];
    this.symbol = [
      'circle',
      'rect',
      'roundRect',
      'triangle',
      'diamond',
      'pin',
      'arrow',
      'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z',
    ];
  }

  componentDidMount() {
    window.mapLoad = this.mapLoad.bind(this);
    if (typeof BMap === 'undefined') {
      this.loadScript();
    } else {
      this.mapLoad();
    }
  }

  loadScript() {
    let script = document.createElement('script');
    script.src =
      'http://api.map.baidu.com/api?v=2.0&ak=C4f54f1b740bc62107184968edbb64fb&callback=mapLoad';
    document.body.appendChild(script);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.curveObj.plaza.name !== this.props.curveObj.plaza.name || nextProps.direction !== this.props.direction) {
      this.mapLoad(nextProps);
    }
  }

  mapLoad(nextProps) {
    // let dataList = this.curveList;
    let direction = this.props.direction;
    let dataList = this.props.curveObj;
    nextProps && (dataList = nextProps.curveObj) && (direction = nextProps.direction);
    let fromPoint = dataList.plaza;
    let toPoint = direction === 'out' ? dataList.toPlazas : dataList.inPlazas;
    let nothPoint = toPoint[0];
    let southPoint = toPoint[0];
    toPoint.forEach((item) => {
      if (item.baidu_lat > nothPoint.baidu_lat) nothPoint = item;
      if (item.baidu_lat < nothPoint.baidu_lat) southPoint = item;
    });
    let planePath = this.symbol[this.props.symbol] || this.symbol[6];
    let color = this.color;
    let myChart = echarts.init(document.getElementById('WMapContainer'));
    let startPoint = {
      x: fromPoint.baidu_lng,
      y: fromPoint.baidu_lat,
    };
    let bmap = {
      center: [startPoint.x, startPoint.y],
      zoom: 12,
      roam: false,
      mapStyle: { style: 'dark' },
    };
    let arrayCenter = [];
    arrayCenter.push(fromPoint.baidu_lng, fromPoint.baidu_lat, 100);
    let centerPoint = {
      name: fromPoint.name,
      type: 'effectScatter',
      coordinateSystem: 'bmap',
      zlevel: 2,
      tooltip: {
        position: 'right',
        formatter: '{b}',
      },
      rippleEffect: {
        brushType: 'stroke',
        scale: 3,
      },
      symbolSize: 15,
      showEffectOn: 'render',
      data: [
        {
          name: fromPoint.name,
          value: arrayCenter,
        },
      ],
    };
    let toPoints = {
      name: fromPoint.name,
      type: 'effectScatter',
      coordinateSystem: 'bmap',
      zlevel: 2,
      rippleEffect: {
        brushType: 'stroke',
        scale: 3,
      },
      tooltip: {
        position: 'right',
        formatter: this.props.tooltipFormatter || null,
      },
      label: {
        normal: {
          show: true,
          position: 'right',
          formatter: this.props.labelFormatter || null,
        },
      },
      symbolSize: val => val[2] / 4,
      showEffectOn: 'render',
      itemStyle: {
        normal: {},
      },
      data: toPoint.map((dataItem, index) => {
        let valeArray = [];
        valeArray.push(
          dataItem.baidu_lng,
          dataItem.baidu_lat,
          dataItem.ratio * 100,
        );
        return {
          name: dataItem.name,
          value: valeArray,
          itemStyle: {
            normal: {
              color: color[index],
            },
          },
        };
      }),
    };
    let arrayFrom = [];
    let data = [];
    arrayFrom.push(fromPoint.baidu_lng, fromPoint.baidu_lat);
    if(direction === 'out'){
      data = toPoint.map((item, i) => {
        let itemArray = [];
        itemArray.push(item.baidu_lng, item.baidu_lat);
        return {
          fromName: fromPoint.name,
          toName: item.name,
          name: item.name,
          coords: [arrayFrom, itemArray],
          lineStyle: {
            normal: {
              color: color[i],
            },
          },
        };
      });
    } else {
      data = toPoint.map((item, i) => {
        let itemArray = [];
        itemArray.push(item.baidu_lng, item.baidu_lat);
        return {
          fromName: fromPoint.name,
          toName: item.name,
          name: item.name,
          coords: [itemArray, arrayFrom],
          lineStyle: {
            normal: {
              color: color[i],
            },
          },
        };
      });
    }
    let lines = {
      type: 'lines',
      coordinateSystem: 'bmap',
      zlevel: 2,
      effect: {
        show: true,
        period: 2,
        trailLength: 0,
        symbol: planePath,
        symbolSize: 8,
      },
      lineStyle: {
        normal: {
          width: 3,
          opacity: 0.7,
          curveness: 0.2,
        },
      },
      data,
    };

    let series = [];
    series.push(centerPoint, toPoints, lines);

    let option = {
      bmap,
      tooltip: {
        trigger: 'item',
      },
      series,
      color: ['#108EE9'],
    };
    myChart.setOption(option);
    let EMap = myChart.getModel().getComponent('bmap').getBMap();
    const top_left_navigation = new BMap.NavigationControl();
    EMap.enableDragging();
    EMap.addControl(top_left_navigation);
    let point = new BMap.Point(fromPoint.baidu_lng, fromPoint.baidu_lat);
    let circle = this.props.radius || [];
    let span = (nothPoint.baidu_lat - southPoint.baidu_lat) * 111;
    const labels = circle.map((it) => {
      return { span: it / 111000 - 0.01, miter: it / 1000 };
    });
    labels.forEach((it) => {
      const lpoint = new BMap.Point(
        fromPoint.baidu_lng,
        fromPoint.baidu_lat + it.span,
      );
      const label = new BMap.Label(`${it.miter}km`, {
        position: lpoint,
        offset: new BMap.Size(0, 0),
      });
      label.setStyle({
        color: '#fff',
        fontSize: '8px',
        border: 'none',
        backgroundColor: 'transparent',
      });
      EMap.addOverlay(label);
    });
    circle.forEach((item) => {
      let circle = new BMap.Circle(point, item, {
        fillColor: '#4990E2',
        fillOpacity: 0.3,
        strokeOpacity: 0.3,
        strokeColor: '#4990E2',
        strokeWeight: 1,
      });
      EMap.addOverlay(circle);
    });
    EMap.setZoom(this.scaleLevel(Math.ceil(span / 2)));
    setTimeout(() => {
      document.querySelector('.BMap_cpyCtrl.BMap_noprint.anchorBL') && (document.querySelector('.BMap_cpyCtrl.BMap_noprint.anchorBL').innerHTML = '');
      document.querySelector('div.anchorBL') && (document.querySelector('div.anchorBL').innerHTML = '');
    }, 100);
  }

  scaleLevel(dis) {
    if (dis > 5 && dis < 20) {
      return 12;
    }
    if (dis > 300 && dis < 800) {
      return 6;
    }
    if (dis > 60 && dis < 90) {
      return 8;
    }
  }

  render() {
    const { style, curveObj } = this.props;
    return <div id="WMapContainer" style={{ ...style }} />;
  }
}

export default WDBaiduMapCurve;
