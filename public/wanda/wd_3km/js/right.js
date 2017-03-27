option = {
    backgroundColor: 'transparent',

    legend: {
        show: true,
        orient : 'horizontal',
        bottom : 20,
        data: ['居民区', '写字楼', '学校', '商业广场'],
        itemGap: 80,
        textStyle: {
            fontFamily: 'PingFangSC-Regular',
            fontSize: 20,
            color: '#FFFFFF'
        }
    },
    
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    
    grid: {
        left: 10,
        right: 10,
        top: 10,
        bottom: 10
    },

  //  visualMap: {
  //      show: false,
  //      min: 80,
  //      max: 600,
  //      inRange: {
  //          colorLightness: [0, 1]
  //      }
  //  },
    
    series : [
        {
            name:'广场3km分布',
            type:'pie',
            radius : '55%',
            center: ['50%', '50%'],
            color:['#FFEE33', '#4A90E2','#E24A66','#21D3A7'],
            data:[
                {value:399, name:'居民区'},
                {value:132, name:'写字楼'},
                {value:38, name:'学校'},
                {value:49, name:'商业广场'}
            ].sort(function (a, b) { return a.value - b.value}),
            //roseType: 'angle',
            //label: {
            //    normal: {
            //       formatter: "{b} : {c} ({d}%)"
            //    }
            //},
            label: {
                normal: {
                    formatter: '{b}: {d}%',
                    textStyle: {
                        fontFamily: 'PingFangSC-Regular',
                        fontSize: 20,
                        color: '#FFFFFF'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },
//            itemStyle: {
//                normal: {
//                    shadowBlur: 200,
//                    shadowColor: 'rgba(0, 0, 0, 0.5)'
//                }
//            },
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ],
    color:['#FFEE33', '#4A90E2','#E24A66','#21D3A7']
};
var myChart = echarts.init(document.getElementById('echart_right'));
myChart.setOption(option);
