function cleanData(s){
	s = s.replace(/(^|[\r\n])[A-Z].+/g, '');
	s = s.replace(/^\s+|\s+$/g, '');
	s = '[' + s.split(/[\r\n]+/).join(',') + ']';
	return s;
}

function drawLinePath(ctx, arr, zoom){
	zoom = zoom || 1;
	ctx.beginPath();
	MT.EACH(arr, function(coord, i){
		var x = (coord.x) * zoom, y = (coord.y) * zoom;
		if(i === 0){
			ctx.moveTo(x, y);
		} else {
			ctx.lineTo(x, y);
		}
	});
}
function drawLine(ctx, arr, zoom, color){
	ctx.strokeStyle = color || 'rgba(0,0,0,0.5)';
	ctx.lineWidth = 0.1;
	drawLinePath(ctx, arr, zoom);
	ctx.stroke();
}
function drawTrack(ctx, p0, p1, per, zoom, color){
	var x = (p0.x + (p1.x - p0.x) * per) * zoom;
	var y = (p0.y + (p1.y - p0.y) * per) * zoom;
	ctx.beginPath();
	ctx.rect(x, y, 1, 1);
	ctx.fillStyle = color;
	ctx.fill();
}

function distance(p0, p1){
	var x = p1.x - p0.x;
	var y = p1.y - p0.y;
	return Math.sqrt(x * x + y * y);
}

function Distance(arr){
	if(arr.length < 1) return -1;
	else if(arr.length < 2) return 0;
	else if(arr.length < 3){
		return distance(arr[0], arr[1]);
	} else {
		var p = arr[0], d = 0;
		for(var i = 1; i < arr.length; i++){
			d += distance(p, arr[i]);
			p = arr[i];
		}
		p = null;
		return d;
	}
}

function getCenterPoint(p0, p1){
	return {
		x: p0.x + (p1.x - p0.x) * .5,
		y: p0.y + (p1.y - p0.y) * .5
	}
}
function getCenterPoints(points){
	var ps = [];
	for(var i = 1; i < points.length; i++){
		ps.push(getCenterPoint(points[i - 1], points[i]));
	}
	ps.push(getCenterPoint(points[points.length - 1], points[0]));
	return ps;
}
function getCvPoint(points){
	var cps = getCenterPoints(points);
	var cs = [];
	for(var i = 1; i < points.length; i++){
		var cp = getCenterPoint(cps[i - 1], cps[i]);
		var x = points[i].x - cp.x;
		var y = points[i].y - cp.y;
		cs.push([
			{ x: cps[i - 1].x + x, y: cps[i - 1].y + y },
			{ x: cps[i].x + x, y: cps[i].y + y }
		]);
	}
	var cp = getCenterPoint(cps[cps.length - 1], cps[0]);
	var x = points[0].x - cp.x;
	var y = points[0].y - cp.y;
	cs.push([
		{ x: cps[cps.length - 1].x + x, y: cps[cps.length - 1].y + y },
		{ x: cps[0].x + x, y: cps[0].y + y }
	]);

	var cvs = [
		[points[0], points[0], cs[0][0], points[1]]
		// [points[0], cs[cs.length - 1][1], cs[0][0], points[1]]
	];
	for(var i = 1; i < points.length - 1; i++){
		cvs.push([points[i], cs[i - 1][1], cs[i][0], points[i + 1]])
	}
	cvs[cvs.length - 1][2] = points[points.length - 1];


	// drawLines3(ctx, points);

	return cvs;
}

function drawCurve(ctx, cvs, color){

	MT.EACH(cvs, function(cv){
		ctx.beginPath();
		ctx.moveTo(cv[0].x * ZOOM, cv[0].y * ZOOM);
		ctx.bezierCurveTo(cv[1].x * ZOOM, cv[1].y * ZOOM, cv[2].x * ZOOM, cv[2].y * ZOOM, cv[3].x * ZOOM, cv[3].y * ZOOM);
		ctx.strokeStyle = color;
		ctx.lineWidth = 1;
		ctx.stroke();
	});
}


function drawLine2(ctx, arr, zoom, fn){

	zoom = zoom || 1;
	CIDX = (CIDX + 1) % COLORS.length;
	var color = COLORS[CIDX] || 'rgba(0,0,255,0.9)';
	// color = 'rgba(255,174,0,0.5)';
	var d = arr.distance * timeArg;

	var a = Ani.add(function(t, arg){
		drawTrack2(ctx, arr, t / d, zoom, color);
		// return -1;
	}, d, fn);

	ctx.stroke();
}
function drawTrack2(ctx, arr, per, zoom, color, index){

	if(!arr.buffer){
		arr.buffer = [];
	}

	if(per > 0){
		var i = 0, path = [];
		if(per < 1){
			var D = arr.distance, d = D * per, _d, PER;
			for(; i < arr.length - 1; i++){
				path.push(arr[i]);
				_d = distance(arr[i], arr[i + 1]);
				PER = _d / D;
				if(d - _d < 0){
					per /= PER;
					break;
				} else {
					d -= _d;
					per -= _d / D;
				}
			}
			var p0 = arr[i], p1 = arr[i + 1], p = {
				x: (p0.x + (p1.x - p0.x) * per),
				y: (p0.y + (p1.y - p0.y) * per)
			};
			path.push(p);
			arr.buffer.unshift(p);
			while(arr.buffer.length > trackBuffer){
				arr.buffer.pop();
			}
		} else {
			path = arr.slice(0);
			// arr.done = true;
		}
		if(arr.done){
			path = arr.slice(0);
		}

		var radio = pointSize;
		MT.EACH(arr.buffer, function(p, i, a){
			ctx.beginPath();
			ctx.arc(p.x * zoom, p.y * zoom, radio * Math.pow((a.length - i) / a.length, 1.5), 0, Math.PI * 2);
			ctx.fillStyle = color;
			ctx.fill();
		})

		ctx.beginPath();
		ctx.moveTo(path[0].x * zoom, path[0].y * zoom);
		for(var c = 1; c < path.length; c++){
			ctx.lineTo(path[c].x * zoom, path[c].y * zoom);
		}
		ctx.strokeStyle = color;
		ctx.lineWidth = 0.5;
		ctx.stroke();

		// var cvs = getCvPoint(arr);
		// drawCurve(ctx, cvs, color);
	}
}

function Draw(data){
	if(data.length <= pageSize){
		var delay = 0;
		MT.EACH(data, function(v, i){
			// setTimeout(function(){
				drawLine2(ctx, v.coordinates, ZOOM, i);
			// }, delay += 60);
		});
	} else {
		var d = data.slice(0, pageSize);
		pageIndex = pageSize - 1;
		MT.EACH(d, function(v, i){
			// setTimeout(function(){
				drawLine2(ctx, v.coordinates, ZOOM, function onend(){
					pageIndex = (pageIndex + 1) % data.length;
					var arr = data[pageIndex].coordinates;
					drawLine2(ctx, arr, ZOOM, onend);
				});
			// }, delay += 60);
		});
	}
}

function drawLines3(ctx, arr){
	ctx.beginPath();
	ctx.moveTo(arr[0].x, arr[0].y);
	for(var i = 1; i < arr.length; i++){
		ctx.lineTo(arr[i].x, arr[i].y);
	}
	// ctx.closePath();
	ctx.lineWidth = 2;
	ctx.strokeStyle = '#fff';
	ctx.stroke();
}
