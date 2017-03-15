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

	var data, chartOptions;
	
	data = [
		{ label: "iphone", data: 1556885 }, 
		{ label: "mi", data: 295662 }, 
		{ label: "vivo", data: 291779 }, 
		{ label: "samsung", data: 267901 },
		{ label: "huawei", data: 220120 },
		{ label: "oppo", data: 198610 }
	];

	chartOptions = {        
		series: {
			pie: {
				show: true,  
				radius: 500,
			}
		}, 
		shadowSize: 0,
		legend: {
			position: 'se'
		},
		
		tooltip: true,

		tooltipOpts: {
			content: '%s: %y'
		},
		
		grid:{
      hoverable: true,
      clickable: false,
      borderWidth: 1,
			tickColor: $border_color,
      borderColor: $grid_color,
    },
    shadowSize: 0,
		colors: [$green, $blue, $yellow, $teal, $yellow, $green],
	};


	var holder = $('#rectangular-pie');

	if (holder.length) {
		$.plot(holder, data, chartOptions );
	}		
		
});
