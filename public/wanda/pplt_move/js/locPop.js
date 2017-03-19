option = {
    title: {
        text: "地理位置所在",
        left: 12,
        top: 20,
        textStyle: {
            color: '#FFFFFF'
        }
    },
    tooltip: {
        trigger: "axis",
        show:false
    },
    legend: {
        data: ["2011年"]
    },
    calculable: true,
    xAxis: [{
        type: "value",
        boundaryGap: [0, 0],

        show: false,
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        }

    }],
    yAxis: [   
                {
                    type: "category",
                    data: ["康馨苑", "泰苑公寓", "金源别墅区", "周浦镇", "惠南镇"],
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    }
                }, {
                    type: "category",
                    data: [18203, 29034, 104970, 131744, 630230],
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    }
                }
            ],
        grid: {
            bottom: 18,
            left: 80
        },
        textStyle: {
            color: '#FFFFFF',
            fontSize: 18
        },
        series: [
                 {
                      type: "bar",
                      z: 10,
                      tooltip:{
                          show:false
                      },
                      data: [18203, 29034, 104970, 131744, 630230],
                      itemStyle: {
                          normal: {
                              color: function(params) {
                                  // build a color map as your need.
                                  var colorList = [
                                      '#C740F9','#FF81ED','#F9C840','#FFC3C3','#F99F40'
                                  ];
                                  return colorList[params.dataIndex]
                              },
                          }
                      }
                  },
                  {
                      type: "bar",
                      silent: true,
                      itemStyle: {
                          normal: {
                              color: 'rgba(255,255,255,0.39)',
                          },
                      },
                      tooltip:{
                          show:false
                      },
                      barGap: '-100%',
                      data: [700000, 700000, 700000, 700000, 700000],
                 }
                ]
};

var myChart = echarts.init(document.getElementById('chart5_ctn'));
myChart.setOption(option);
