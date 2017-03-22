deemph_color = 'rgb(165,165,165)'
emph_color = 'rgb(79,129,189)'
height = 300
width = 500
bar_category_gap = '28%'
colors = ['#1790CF', '#1BB2D8', '#99D2DD', '#88B0BB', '#1C7099'];
data = [1.092, 2.200, 1.751, 1.000, 3.068, 1.014];
// {"服装":1.0920782790216665,"次主力店":2.199632714455277,"生活精品":1.751201303740961,"儿童业态":1.0,"主力店":3.0678456559512024,"餐饮美食":1.0148122430758026}
categories = ['服装', '次主力店','生活精品','儿童业态','主力店','餐饮美食'];
axisColor = '#B1B1B1';
labelColor = '#FFFFFF'

option1 = {
    title: {
        show: true,
        text: '租金指数',
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
    // legend: {
    //     show: true,
    //     bottom: '10',
    //     data: ['服装', '次主力店','生活精品','儿童业态','主力店','餐饮美食'],
    //     icon: 'square'
    // },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    xAxis: [{
        type: 'category',
        data: categories,
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
        data: data,
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

var myChart = echarts.init(document.getElementById('chart2_ctn'));
myChart.setOption(option);
