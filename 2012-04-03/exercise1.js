var points = [[0,0],[0,2],[1,2],[1,22],[9,22],[9,17],[39,17],[39,16],[51,16],[51,6],[52,6],[52,4],[36,4],[36,1],[39,1],[39,0],[39,0],[0,0]];
var polyline = POLYLINE(points);
var points1 = [[1,1],[1,10],[21,10],[21,1],[1,1]];
var points2 = [[47,5],[47,16],[51,16],[51,5],[47,5]];
var polyline1 = POLYLINE(points1);
var polyline2 = POLYLINE(points2);
var drawSquare= function (point,point1,point2,point3){
	var squares=STRUCT([]);
	for(i=point[1];i<=point1[1];i++){
		var square=POLYLINE([[point[0],i],[point3[0],i]]);
		squares=STRUCT([squares,square]);
	}
	var squares1=STRUCT([]);
	for(i=point[0];i<=point3[0];i++){
		var square1=POLYLINE([[i,point[1]],[i,point1[1]]]);
		squares1=STRUCT([squares1,square1]);
	}
	var grid=STRUCT([squares,squares1]);
	return grid;
}
var rectangles= function (point,point1,point2,point3,n){
	var rectangles=STRUCT([]);
	for(i=point[0];i<point3[0];i=i+n){
		var rectangle=POLYLINE([[i,point[1]],[i,point1[1]]]);
		rectangles=STRUCT([rectangles,rectangle]);
	}
	return rectangles;
}
var rectangles1= function (point,point1,point2,point3,n){
	var rectangles=STRUCT([]);
	for(i=point[0];i<=point3[0];i=i+n){
		var rectangle=POLYLINE([[i,point[1]],[i,point1[1]]]);
		rectangles=STRUCT([rectangles,rectangle]);
	}
	return rectangles;
}
var grid=drawSquare([1,10],[1,22],[9,22],[9,10]);
var grid1=drawSquare([9,10],[9,17],[39,17],[39,10]);
var grid2=drawSquare([21,4],[21,16],[47,16],[47,4]);
var grid3=drawSquare([21,0],[21,4],[36,4],[36,0]);
var grid4=drawSquare([36,0],[36,1],[39,1],[39,0]);
var grid5=drawSquare([0,0],[0,1],[21,1],[21,0]);
var grid6=drawSquare([39,4],[39,5],[52,5],[52,4]);
var rectangles=rectangles([36.4,1],[36.4,4],[39,4],[39,1],0.4);
var wall=POLYLINE([[8,1],[8,0.8],[0.8,0.8],[0.8,22.2],[9.2,22.2],[9.2,16.8],[9,16.8],[9,17]]);
var wall1=POLYLINE([[7.5,15],[7.5,15.2],[26.5,15.2],[26.5,15]]);
var wall2=POLYLINE([[41.5,5],[41.5,4.8],[51.2,4.8],[51.2,16.2],[37.5,16.2],[37.5,16],[40,16],[40,13.6],[30,13.6]]);
var wall3=POLYLINE([[25.2,8.2],[25.2,8.4],[33.8,8.4],[33.8,8.2],[25.2,8.2]]);
var wall4=POLYLINE([[42.5,5],[42.5,11.5],[37.2,11.5],[37.2,11.3],[42.5,11.3]]);
var wall5=POLYLINE([[38.5,5],[38.5,11.3]]);
var wall6=POLYLINE([[44.8,7.8],[44.8,14.2]]);
var walls=STRUCT([wall,wall1,wall2,wall3,wall4,wall5,wall6]);
var panchina=POLYLINE([[7.8,14.2],[7.8,14.8],[23.2,14.8],[23.2,14.2],[7.8,14.2]]);
var lines=rectangles1([7.8,14.2],[7.8,14.8],[23.2,14.8],[23.2,14.2],2.2);
var boundary = STRUCT([polyline,polyline1,polyline2,grid,grid1,grid2,grid3,grid4,grid5,grid6,rectangles,walls,panchina,lines]);
DRAW(boundary);