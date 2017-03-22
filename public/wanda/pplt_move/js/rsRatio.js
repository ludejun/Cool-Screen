deemph_color = 'rgb(165,165,165)'
emph_color = 'rgb(79,129,189)'
height = 300
width = 500
bar_category_gap = '28%'
colors = ['#1790CF', '#1BB2D8', '#99D2DD', '#88B0BB', '#1C7099'];
data = [0.48, 0.13,0.16,0.11,0.06,0.22];
// {"服装":0.4766696969100068,"次主力店":0.12828724947411604,"生活精品":0.1558055122526157,"儿童业态":0.1091785354299635,"主力店":0.05934550287664849,"餐饮美食":0.21852029343730264
categories = ['服装', '次主力店','生活精品','儿童业态','主力店','餐饮美食'];
axisColor = '#B1B1B1';
labelColor = '#FFFFFF'

option1 = {
    title: {
        show: true,
        text: '租售比',
        link: '',
        textStyle: {
            color: '#FFFFFF',
            fontStyle: 'normal',
            fontFamily: 'sans-serif',
            fontSize: 14,
        }
    },
    grid: {
        //width: width,
        // height: height
        // left: '0',
        // containLabel: true,
        // height:height,
        top: 30,
        bottom: 25,
        left: 40
    },
    //legend: {
    //     show: true,
    //     bottom: '10',
    //     data: ['服装', '次主力店','生活精品','儿童业态','主力店','餐饮美食'],
    //     icon: 'square'
    //},
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
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
    series: [{
        name: '比值',
        type: 'bar',
        barCategoryGap: bar_category_gap,
        data: [0.48, 0.13,0.16,0.11,0.06,0.22],
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
        },
    }, ]
};


option = option1;

var myChart = echarts.init(document.getElementById('chart1_ctn'));
myChart.setOption(option);
