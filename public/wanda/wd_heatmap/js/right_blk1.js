deemph_color = 'rgb(165,165,165)'
emph_color = 'rgb(79,129,189)'
height = 300
width = 500
bar_category_gap = '18%'
colors = ['#1790CF', '#1BB2D8', '#99D2DD', '#88B0BB', '#1C7099'];
//2016:391273   2017:331365
//data = [1004734, 1121936];
data = [1, 1.040];
categories = ['2016', '2017'];
axisColor = '#B1B1B1';
labelColor = '#FFFFFF'

option1 = {
    title: {
        show: true,
        text: '广场月客流量同比(1月份)',
        link: '',
        textStyle: {
            color: '#FFFFFF',
            fontStyle: 'normal',
            fontFamily: 'sans-serif',
            fontSize: 14,
        },
        top: 22
    },
    grid: {
        //width: width,
        // height: height
        // left: '0',
        // containLabel: true,
        // height:height,
        top: 102,
        left: 52
    },
    legend: {
        // bottom: '10',
        // data: ['价格相关差评/该品牌总评论数'],
        // icon: 'square'
    },
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
        name: '人数',
        nameLocation: 'end',
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
        name: '人数',
        type: 'bar',
        barCategoryGap: bar_category_gap,
        data: data,
        itemStyle: {
            normal: {
                color: function(params) {
                            // build a color map as your need.
                            var colorList = [
                              '#00CCFF','#FF66FF',
                            ];
                            return colorList[params.dataIndex]
                        },
            }
        },
    }, ]
};


option = option1;

var myChart = echarts.init(document.getElementById('right_blk1_ctn'));
myChart.setOption(option);
