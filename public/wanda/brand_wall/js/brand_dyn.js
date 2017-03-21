var i = 0;
//网页加载完成
window.onload=function(){
	//更改网页背景色
	document.body.bgColor="#371756";
	//定时器:2秒出现一个笑脸
	window.setInterval("star()",2000);
}
//动画主函数
function star(){
		
		if (i>=10){
			i = 1
		}else {
			i++;
		}
		var num = i-5<=0 ? i+5 : i-5;
		removeImg(num);
	for (var k = 1; k<=8; k++) {
                if(i==10 && k>4) {
                   break; 
                }
		//创建img节点
		var imgObj=document.createElement("img");
		//添加节点属性
		imgObj.setAttribute("src","assets/brand_wall/images/"+(8*(i-1)+k)+".png");
		imgObj.setAttribute("title","brand");
		imgObj.setAttribute("id",(8*(i-1)+k));
		
		// //添加width属性。getRandom()随机数函数
		imgObj.setAttribute("width",100);
		//创建style属性（行内样式)
		var x=getRandom(0,window.innerWidth-100);
		var y=getRandom(120,window.innerHeight-100);
		imgObj.setAttribute("style","position:absolute;left:"+x+"px;top:"+y+"px");
		addClass(imgObj, 'brand-logo');
		//添加onclick事件属性,点击图片消失
		imgObj.setAttribute("onclick","removeImg(this)");
		
		document.body.appendChild(imgObj);
	}

	
     
}
//函数：求函数随机数
function getRandom(min,max){
	var random=Math.random()*(max-min)+min;
	random=Math.floor(random);
	return random;
}
//函数：删除节点
function removeImg(i){
		for (var k = 1; k<=8; k++) {
                        if(i==10 && k>4) {
                                break; 
                        }
			var obj = document.getElementById(8*(i-1)+k);
			if(obj){
				document.body.removeChild(obj);
			}
		}	
}
//函数  添加class
function addClass(obj, cls){
  var obj_class = obj.className,//获取 class 内容.
  blank = (obj_class != '') ? ' ' : '';//判断获取到的 class 是否为空, 如果不为空在前面加个'空格'.
  added = obj_class + blank + cls;//组合原来的 class 和需要添加的 class.
  obj.className = added;//替换原来的 class.
}

