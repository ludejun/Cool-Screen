option = {
    title: {
        text: "广场周边居民分布Top 5(3KM内)",
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
    //legend: {
    //    data: ["2011年"]
    //},
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
             data: ["江湾", "延吉", "五角场", "中原", "曲阳"],
             axisLine: {
                 show: false
             },
             splitLine: {
                 show: false
             },
             axisTick: {
                 show: false
             }
         },
         {
             type: "category",
             data: [236552, 219200, 152166, 145790, 174069],
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
             data: [177340, 164400, 114125, 109343, 130552],
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
