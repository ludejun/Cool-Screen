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
		
		var d1,  data, chartOptions;
                $.get('/query/cust_data', {id: 'zfb_by_hour'},  function(d1){
                        d1 = eval(d1);
		        data = [{ 
			        label: "支付宝", 
			        data: d1
		        }];
 
                        var xTicks = [[9,9],[10,10],[11,11],[12,12],[13,13],[14,14],[15,15],[16,16],[17,17],[18,18],[19,19],[20,20],[21,21],[22,22],[23,23]];
		        chartOptions = {
			        xaxis: {
                                    color: $yellow,
                                    mode: null,
                                    ticks: xTicks,
                                    min: 9
			        },
				yaxis: {
                                    color: $yellow,
				},
				series: {
					lines: {
						show: true, 
						// fill: false,
						// lineWidth: 2
					},
					points: {
						show: true,
						// radius: 4.5,
						fill: true,
						fillColor: "#ffffff",
						lineWidth: 2
					}
				},
			        grid:{
	                                hoverable: true,
	                                clickable: true,
	                                borderWidth: 1,
	                                tickColor: $border_color,
        	                        borderColor: $grid_color,
	                        },
	                        shadowSize: 0,
				legend: {
					show: true,
					position: 'nw',
                                        backgroundOpacity: 0,
                                        backgroundColor: null
				},
				
				tooltip: true,
				tooltipOpts: {
					content: '%s: %y'
				},
				colors: [$green, $blue, $yellow, $teal, $yellow, $green],
		        };
		        var holder = $('#line-chart');

		        if (holder.length) {
			        $.plot(holder, data, chartOptions );
		        }
                })
});
