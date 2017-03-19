//data
var data = [180, 200, 330, 380, 430, 510];
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
        text: '消费客单价',
        textStyle: {
            fontSize: 14,
            color: '#FFFFFF'
        }
        
    },
    tooltip: {
        trigger: 'axis'
    },
    xAxis: {
        data: ['2011', '2012', '2013', '2014', '2015', '2016'],
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
        x: 30,
        y: 30,
        x2: 0,
        y2: 25
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

var myChart = echarts.init(document.getElementById('chart3_ctn'));
myChart.setOption(option);
