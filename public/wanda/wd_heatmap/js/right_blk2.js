//data
//var data = [220, 182, 191, 234, 190, 330, 310, 50, 200];
var data = [87539, 43730, 44093, 44482, 47165, 53881, 89255];
var markLineData = [];
for (var i = 1; i < data.length; i++) {
    markLineData.push([{
        xAxis: i - 1,
        yAxis: data[i - 1],
        value: (data[i] + data[i - 1]).toFixed(2)
    }, {
        xAxis: i,
        yAxis: data[i]
    }]);
}

//option
option = {
    title: {
        text: '周客流量折线图',
        textStyle: {
            fontSize: 14,
            color: '#FFFFFF'
        },
        top: 22
    },
    tooltip: {
        trigger: 'axis'
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        nameTextStyle: {
            color: '#FFFFFF',
            fontSize: 6
        }
    },
    yAxis: {
        nameTextStyle: {
            color: '#FFFFFF',
            fontSize: 6
        }
    },
    textStyle: {
        color: '#FFFFFF',
        fontSize: 8
    },
    grid: {
        x: 50,
        y: 68,
        x2: 15,
        y2: 35
    },
    series: [{
        type: 'line',
        data: data,
        markPoint: {
            data: [{
                type: 'max',
                name: '最大值'
            }, {
                type: 'min',
                name: '最小值'
            }]
        },
        markLine: {
            smooth: true,
            effect: {
                show: true
            },
            distance: 10,
            label: {
                normal: {
                    position: 'middle'
                }
            },
            symbol: ['none', 'none'],
            data: markLineData
        },
        itemStyle : {  
            normal : {  
                lineStyle:{  
                    color:'#FFFF00'  
                }  
            }  
        }
    }],
};

var myChart = echarts.init(document.getElementById('right_blk2_ctn'));
myChart.setOption(option);
