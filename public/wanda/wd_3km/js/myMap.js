
// 百度地图API功能
var map = new BMap.Map("map");
map.setMapStyle({style:'midnight'});
//var point = new BMap.Point(116.404, 39.915);
var point = new BMap.Point(121.520425, 31.307676);
map.centerAndZoom(point, 17);
var marker = new BMap.Marker(point);  // 创建标注
map.addOverlay(marker);               // 将标注添加到地图中
marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画

var circle = new BMap.Circle(point, 30, {
            strokeColor: "#0075C7",
            strokeWeight: 1,
            fillColor: "#11BAFF",
            fillOpacity: 1,
            strokeOpacity:0.5
            }); //创建圆
map.addOverlay(circle);

var circle1 = new BMap.Circle(point,
                             60,
                             {strokeColor:"#11BAFF",
                              strokeWeight:3, 
                              fillColor:"#11BAFF",
                              fillOpacity: 0.02,
                              strokeStyle:"solid", 
                              strokeOpacity:0.8});
map.addOverlay(circle1);

var circle1 = new BMap.Circle(point,
                             90,
                             {strokeColor:"#11BAFF",
                              strokeWeight:0.5, 
                              fillColor:"#11BAFF",
                              fillOpacity: 0.01,
                              strokeStyle:"solid", 
                              strokeOpacity:0.8});
map.addOverlay(circle1);

var circle1 = new BMap.Circle(point,
                             300,
                             {strokeColor:"#11BAFF",
                              strokeWeight:0.5, 
                              fillColor:"#11BAFF",
                              fillOpacity: 0.2,
                              strokeStyle:"solid", 
                              strokeOpacity:0});
map.addOverlay(circle1);


var circle1 = new BMap.Circle(point,
                             450,
                             {strokeColor:"#11BAFF",
                              strokeWeight: 3, 
                              fillColor:"#11BAFF",
                              fillOpacity: 0.08,
                              strokeStyle:"dashed", 
                              strokeOpacity:0});
map.addOverlay(circle1);


var maxRadius = 650;
var circle1 = new BMap.Circle(point,
                             maxRadius,
                             {strokeColor:"#11BAFF",
                              strokeWeight:0.5, 
                              fillColor:"#11BAFF",
                              fillOpacity: 0.08,
                              strokeStyle:"solid", 
                              strokeOpacity:0});
map.addOverlay(circle1);

// 打点
/*
var mOption = {
    poiRadius : 650,           //半径为maxRadius米内的POI,默认100米
    numPois : 12                //列举出50个POI,默认10个
}

var myGeo = new BMap.Geocoder();        //创建地址解析实例
myGeo.getLocation(point,
                  function mCallback(rs){
                      var allPois = rs.surroundingPois;       //获取全部POI
                      for(i=0;i<allPois.length;++i){
                          map.addOverlay(new BMap.Circle(allPois[i].point, 20, {fillColor: "yellow", fillOpacity:1}));                
                      }
                  }, mOption
                 );
*/
var queries = ["学校", "居民区", "写字楼", "商业广场"];
var rsColors=["#FF3AC9", "#FFEE33", "#11BAFF", "#21D3A7"]
//for(i=0;i<queries.length;i++) {
    var ls = new BMap.LocalSearch(map,   
                  { renderOptions:{map: map, autoViewport: false}});      
    ls.searchNearby(queries, point, 3000);
    ls.setSearchCompleteCallback(function(rs) {
        if(ls.getStatus() == BMAP_STATUS_SUCCESS) {
            for(i=0;i<rs.length;i++) {
            for(j=0;j<rs[i].getCurrentNumPois();j++)
            {
                var poi = rs[i].getPoi(j);
                var circle = new BMap.Circle(poi.point, 20, {fillColor: rsColors[i], fillOpacity:1});                
                circle.oncomplete = function(e){
                    e.stopPropagation();
                }
               // map.addOverlay(new BMap.Circle(poi.point, 20, {fillColor: rsColors[i], fillOpacity:1}));                
                map.addOverlay(circle);
            }
            }
        }
    });
//}
map.closeInfoWindow();            

