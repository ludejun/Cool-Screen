	var $border_color = "#efefef";
	var $grid_color = "#ddd";
	var $default_black = "#666";
	var $green = "#8ecf67";
	var $yellow = "#fac567";
	var $orange = "#F08C56";
	var $blue = "#1e91cf";
	var $red = "#f74e4d";
	var $teal = "#28D8CA";
	var $grey = "#999999";
	var $dark_blue = "#0D4F8B";
$(function () {

	var d1, d2, d3, data, chartOptions;

        $.get('/query/cust_data', {id: 'high_cust_ratio_h'},  function(d1){
                $.get('/query/cust_data', {id: 'medium_cust_ratio_h'},  function(d2){
                        $.get('/query/cust_data', {id: 'low_cust_ratio_h'},  function(d3){

                            d1 = eval(d1);
                            d2 = eval(d2);
                            d3 = eval(d3);
		            data = [{
			            label: '高',
			            data: d1
		                }, {
			            label: '中',
			            data: d2
		                }, {
			            label: '普通',
			            data: d3
		                }];

                            var xTicks = [[9,9],[10,10],[11,11],[12,12],[13,13],[14,14],[15,15],[16,16],[17,17],[18,18],[19,19],[20,20],[21,21],[22,22],[23,23]];
		            chartOptions = {
			        xaxis: {
                                    color: $yellow,
                                    mode: null,
                                    ticks: xTicks 
			        },
                                yaxis: {
                                    color: $yellow
                                },
			        grid:{
                                    hoverable: true,
                                    clickable: false,
                                    borderWidth: 1,
                                    tickColor: $border_color,
                                    borderColor: $grid_color,
                                    backgroundColor: null
                                }, 
                                legend: {
                                    backgroundOpacity: 0.4
                                },
			        series: {
				    stack: true,
			        },
			        bars: {
		   	            show: true,
			            barWidth: 0.8,
			            /* barWidth: 36*24*60*60*300, */
				    fill: true,
				    align: 'center',
				    lineWidth: 1,
				    fillColor: { colors: [ { opacity: 0.4 }, { opacity: 0.4 } ] }
			        },
			        shadowSize: 0,
			        tooltip: true,
			        tooltipOpts: {
				    content: '%s: %y'
			        },
			        colors: [$green, $blue, $yellow, $teal, $yellow, $green],
		            }

		            var holder = $('#stacked-vertical-chart_weekend');

		            if (holder.length) {
				$.plot(holder, data, chartOptions );
		            }

                        })
                })
        })

});
