"use strict";
(function(W){

if(W.MT){
	if(W.define) W.define(W.MT);
	return;
}

if(!('findIndex' in Array.prototype)){
	console.log('findIndex')
	Array.prototype.findIndex = function(cb){
		var i = 0, len = this.length;
		for(; i < len; i++){
			if(cb(this[i], i, this)){
				return i;
			}
		}
		return -1;
	};
}

var ID = 0;
function fun(v){ return typeof(v)=='function' };
function str(v){ return typeof(v)=='string' };
function $(q, all, e){ return str(q)?(e||document)[all?'querySelectorAll':'querySelector'](q):q; };
function INT(v, d){ return isNaN(v = parseInt(v)) ? (d||0) : v; };
function FLT(v){ return isNaN(v = parseFloat(v)) ? 0 : v; };
function EPOS(e){ return { left: e.clientX, top: e.clientY }; };
function RECT(el){
	el = $(el);
	if(!el) return { left: 0, top: 0, width: 0, height: 0 };
	var rect = $(el).getClientRects();
	if(rect.length) rect = rect[0];
	return {
		left: rect.left,
		top: rect.top,
		width: rect.width,
		height: rect.height
	};
};
function CSS(el){ return window.getComputedStyle(el, null); }
function CSSRECT(el){
	var css = CSS(el);
	return {
		left: MT.INT(css.width, 0),
		top: MT.INT(css.top, 0),
		width: MT.INT(css.width, 0),
		height: MT.INT(css.height, 0)
	}
}
function EACH(arr, callback){
	var i = 0;
	while(i < arr.length){
		if(callback(arr[i], i, arr)) return i;
		i++;
	}
	return undefined;
};
function each(obj, callback){
	var p;
	for(p in obj){
		if(callback(obj[p], p, obj)) return p;
	}
	return undefined;
};
function Class(name, base, construct, prototype){
	var fn;
	eval('fn = function ' + name + '(){'
		+ (fun(base) ? 'base.apply(this,arguments);' : '')
		+ (fun(construct) ? 'construct.apply(this,arguments);' : '')
		+ 'this.NAME = name + "." + (base.NAME||base.name)'
		+ '};')
		;
	if(fun(base)) for(var p in base.prototype) fn.prototype[p] = base.prototype[p];
	if(fun(construct)) for(var p in construct.prototype) fn.prototype[p] = construct.prototype[p];
	if(prototype instanceof Object) for(var p in prototype) fn.prototype[p] = prototype[p];
	fn.PARENT = base;
	fn.CONSTRUCTOR = construct;
	fn.NAME = str(base.NAME) ? name + '.' + base.NAME : name;
	fn.CreateClass = function(name, construct, prototype){
		return MT.Class(name, fn, construct, prototype);
	};
	return fn;
};

var EVT = {
	add: function(el, name, callback, useCapture){
		$(el).addEventListener(name, callback, useCapture);
	},
	rm: function(el, name, callback){
		$(el).removeEventListener(name, callback, 0);
	},
	click: function(el, callback, useCapture){
		EVT.add(el, 'click', callback, useCapture);
	}
};

function EVENT(fn, name){ this.fn = fn; this.name = name || false; };
EVENT.prototype = {
	// add: function(el, name, useCapture){
	// 	$(el).addEventListener(name, this.fn, useCapture || 0);
	// },
	add: function(el, useCapture, name){
		EVT.add(el, name || this.name, this.fn, useCapture);
		// $(el).addEventListener(this.name, this.fn, useCapture || 0);
	},
	// rm: function(el, name){
	// 	$(el).removeEventListener(name, this.fn, 0);
	// },
	rm: function(el, name){
		EVT.rm(el, name || this.name, this.fn);
		// $(el).removeEventListener(this.name, this.fn, 0);
	},
	invoke: function(e, context){
		this.fn.call(context || window, e);
	}
};

function getId(){ return ++ID; };
function px(v){ return FLT(v) + 'px'; };
function range(v, min, max){return v>max?max:v<min?min:v;};

function getCssName(name){
	return name;
}
function css(obj){
	var arr = [], v;
	for(var p in obj){
		v = obj[p];
		if(typeof(v) == 'number'){
			if(!/^(opacity|z\-index|zIndex)$/.test(p)){
				v = px(v);
			}
		}
		arr.push(getCssName(p) + ':' + v);
	}
	return arr.join(';');
}
css.set = function(el, obj){
	$(el).style.cssText += ';' + css(obj);
	return css;
};

function InvokerGroup(){
	this.callbacks = {};
}
InvokerGroup.prototype = {
	on: function(name, callback, context){
		if(typeof(callback) != 'function') return;
		if(!this.has(name)){
			this.callbacks[name] = [];
		}
		this.callbacks[name].push([callback, context]);
		return this;
	},
	has: function(name){
		return name in this.callbacks;
	},
	findIndex: function(name, f){
		if(!this.has(name)) return -1;
		return this.callbacks[name].findIndex(function(cb){
			return cb[0] === f;
		});
	},
	no: function(name, cb){
		var idx = this.findIndex(name, cb);
		if(idx > -1){
			this.callbacks[name].splice(idx, 1);
			return true;
		}
	},
	fire: function(name, context){
		if(!this.has(name)){
			return;
		}
		var args = Array.prototype.slice.call(arguments, 2);
		EACH(this.callbacks[name], function(arr, i){
			var c = arr[0].apply(context || arr[1], args);
			if(c === 1){
				return true;
			}
		});
		return this;
	},
	dispose: function(){
		EACH(this.callbacks, function(cbs, n, C){
			cbs.splice(0, cbs.length);
			delete C[n];
		});
		delete this.callbacks;
	}
};

function LoadImage(src, callback){
	var image = new Image();
	image.addEventListener('load', function onload(e){
		this.removeEventListener('load', onload);
		callback(this);
	});
	image.src = src;
}

function DrawBackground(cvs, src){
	cvs = MT.$(cvs);
	var width = cvs.width, height = cvs.height;
	var ctx = cvs.getContext('2d');
	LoadImage(src, function(img){

		var W = img.width, H = img.height, h = width / W, v = height / H;
		for(var i = 0; i < h; i++){
			for(var j = 0; j < v; j++){
				ctx.drawImage(img, i * W, j * H);
			}
		}
		
	});
}

function using(src){
	document.write('<script type="text/javascript" src="'+src+'"><\/script>\n');
};


var REQ = W.requestAnimationFrame || W.webkitRequestAnimationFrame;
var CREQ = W.cancelAnimationFrame || W.webkitCancelAnimationFrame || W.webkitCancelRequestAnimationFrame;
function createAni(callback){

	var START, STATE, HANDLE, R, S, P0, P1;
	var run = function run(){
		P1 = Date.now()
		S = callback(P1 - START, P1 - P0);
		P0 = P1;

		if(STATE === 1 || S === 1){
			CREQ(HANDLE)
		} else {
			HANDLE = REQ(run);
		}
	};

	return R = {
		start: function(){
			START = Date.now();
			P0 = START;
			P1 = START;
			STATE = 0;
			HANDLE = REQ(run);
		},
		stop: function(){
			STATE = 1;
		}
	};

}

var animate = {
	create: createAni
};

function fmt(){
	var args = Array.prototype.slice.call(arguments, 0), s = args.shift() + '';
	return s.replace(/\{(\d+)\}/g, function(m, $1){
		return args[parseInt($1)] || '';
	});
}

var cookie = {
	expires: function(minute){
		minute = minute || (60 * 24);
		var e = new Date();
		e.setTime(e.getTime() + minute * 60 * 1000);
		return e.toGMTString();
	},
	set: function set_cookie(key, value, minute){
		var expires = cookie.expires(minute);
		if(!value){
			expires = cookie.expires(-1);
			value = 'nil';
		}
		document.cookie
			= key + '=' + encodeURIComponent(value) + '; '
			+ 'expires=' + expires
			;
	},
	get: function get_cookie(key){
		var reg = new RegExp('([^\w]|^)' + key + '\=([^\s\;\=]+)')
			, val = reg.test(document.cookie)
				? RegExp.$2
				: null
			;
		reg = null;
		return val;
	}
};

var I = {
	css: function(href, callback){
		//<link rel="stylesheet" type="text/css" href="../css/ui.css">

		if(typeof(href) == 'string'){
			var link = document.createElement('link');
			link.setAttribute('rel', 'stylesheet');
			link.setAttribute('type', 'text/css');
			link.setAttribute('href', href + '?t=' + Date.now());
			link.addEventListener('load', function onload(e){
				this.removeEventListener('load', onload);
				fun(callback) && callback(this);
			});
			document.head.appendChild(link);
		} else if(href instanceof Array){
			if(!href.length){
				fun(callback) && callback(ls);
				return;
			}
			var l = href.length;
			var ls = [];
			EACH(href, function(h){
				I.css(h, function(L){
					ls.push(L);
					l -= 1;
					if(l <= 0){
						fun(callback) && callback(ls);
					}
				});
			});
		}
	},
	text: function(url, callback){
		var flag = url.indexOf('?') < 0 ? '?' : '&';
		url += flag + '_ts_=' + Date.now();

		var xhr = new XMLHttpRequest();
		xhr.addEventListener('load', function onload(e){
			this.removeEventListener('load', onload);
			callback(this.responseText);
		});
		xhr.open('GET', url);
		xhr.send(null);
	},
	GroupRun: function(urls, method, callback, replace){
		var c = urls.length, r = [];
		EACH(urls, function(u, i){
			I[method](u, function(t){
				r[i] = t;
				if(--c < 1){
					callback(r);
				}
			}, replace);
		});
	},
	getHtml: function(text, replace){
		if(/(\<\!\-\-+\s*UI_HTML\s*\-\-+\>)([\s\S]+)(\1)/.test(text)){
			var t = RegExp.$2;
			if(replace instanceof Array){
				each(replace, function(v){
					t = t.replace(v[0], v[1]);
				});
			}
			return t;
		}
		return '';
	},
	html: function(url, callback, replace){
		if(str(url)){
			I.text(url, function(text){
				callback(I.getHtml(text, replace));
			});
		} else if(url instanceof Array){
			I.GroupRun(url, 'html', callback, replace);
		}
	},
	getJs: function(text, replace){
		if(/(\/\*\s*UI_SCRIPT(\#[^\s]+)?\s*\*\/)([\s\S]+)\/\*\s*UI_SCRIPT\s*\*\//.test(text)){
			var def = '';
			if(RegExp.$2 && RegExp.$2.length > 1){
				def = "window." + RegExp.$2.substr(1) + '=window.' + RegExp.$2.substr(1) + '||{};\n';
			}
			var t = RegExp.$3;
			if(replace instanceof Array){
				each(replace, function(v){
					t = t.replace(v[0], v[1]);
				});
			}
			return def + t;
		}
		return '';
	},
	js: function(url, callback, replace){
		if(str(url)){
			I.text(url, function(text){
				callback(I.getJs(text, replace));
			});
		} else if(url instanceof Array){
			I.GroupRun(url, 'js', callback, replace);
		}
	},
	getStyle: function(text, replace){
		if(/(\/\*\s*UI_STYLE\s*\*\/)([\s\S]+)\/\*\s*UI_STYLE\s*\*\//.test(text)){
			var t = RegExp.$2;
			if(replace instanceof Array){
				each(replace, function(v){
					t = t.replace(v[0], v[1]);
				});
			}
			return t;
		}
		return '';
	},
	style: function(url, callback, replace){
		if(str(url)){
			I.text(url, function(text){
				callback(I.getStyle(text, replace));
			});
		} else if(url instanceof Array){
			I.GroupRun(url, 'style', callback, replace);
		}
	},
	all: function(url, callback, replace){
		if(str(url)){
			I.text(url, function(text){
				callback({
					url: url,
					html: I.getHtml(text, replace),
					js: I.getJs(text, replace),
					style: I.getStyle(text, replace)
				});
			});
		} else if(url instanceof Array){
			I.GroupRun(url, 'all', callback, replace);
		}
	}
};

var EVENT_HELPER = new InvokerGroup();

W.MT = {
	$: $,
	INT: INT,
	FLT: FLT,
	EPOS: EPOS,
	RECT: RECT,
	EACH: EACH,
	each: each,
	EVT: EVT,
	EVENT: EVENT,
	px: px,
	getId: getId,
	CSS: CSS,
	CSSRECT: CSSRECT,
	css: css,
	fun: fun,
	str: str,
	fmt: fmt,
	using: using,
	range: range,
	animate: animate,
	InvokerGroup: InvokerGroup,
	LoadImage: LoadImage,
	Class: Class,
	cookie: cookie,
	I: I,
	on: function(name, cb){
		return EVENT_HELPER.on(name, cb);
	},
	fire: function(name, arg){
		EVENT_HELPER.fire(name, null, arg);
	}
};

if(W.define) W.define(W.MT);

})(window);