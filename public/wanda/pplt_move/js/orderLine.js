//data
var data = [1.427, 1.000, 3.830, 1.866, 2.748, 1.494];
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
        text: '坪效比',
        textStyle: {
            fontSize: 14,
            color: '#FFFFFF'
        }
        
    },
    tooltip: {
        trigger: 'axis'
    },
    xAxis: [{
        type: 'category',
        data: ['服装', '次主力店','生活精品','儿童业态','主力店','餐饮美食'],
        axisLine: {
            lineStyle: {
                color: axisColor,
                width: 2,
            },
        },
        axisLabel: {
            textStyle: {
                color: labelColor,
            }
        },
    }],
    yAxis: [{
        //name: '百分比',
        nameLocation: 'middle',
        nameGap: 35,
        nameTextStyle: {
            color: labelColor,
        },
        type: 'value',
        splitLine: {
            show: false
        },
        axisLabel: {
            formatter: '{value}',
            textStyle: {
                color: labelColor,
            }
        },
        axisLine: {
            lineStyle: {
                color: axisColor,
            },
        },
    }, ],

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
        type: 'bar',
        data: data,
        type: 'bar',
        barCategoryGap: bar_category_gap,
        itemStyle: {
            normal: {
                color: function(params) {
                            // build a color map as your need.
                            var colorList = [
                              '#00CCFF','#FF66FF',
                              '#1BB2D8', '#99D2DD', '#88B0BB', '#1C7099'
                            ];
                            return colorList[params.dataIndex]
                        },
            }
        }
    }],
};

var myChart = echarts.init(document.getElementById('chart3_ctn'));
myChart.setOption(option);
