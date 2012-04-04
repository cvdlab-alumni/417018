var depthFloor=1.75;
var floor0=SIMPLEX_GRID([[39],[1],[depthFloor]]);
var floor1=SIMPLEX_GRID([[1],[2],[depthFloor]]);
var floor2=SIMPLEX_GRID([[-1,8],[-10,12],[depthFloor]]);
var floor3=SIMPLEX_GRID([[-21,18],[-4,13],[depthFloor]]);
var floor4=SIMPLEX_GRID([[-9,12],[-10,7],[depthFloor]]);
var floor5=SIMPLEX_GRID([[-21,26],[-4,12],[depthFloor]]);
var floor6=SIMPLEX_GRID([[-21,15.2],[-1,3],[depthFloor]]);
var floor7=SIMPLEX_GRID([[-47,5],[-4,1],[depthFloor]]);
var floor8=SIMPLEX_GRID([[-51,1],[-5,1],[depthFloor]]);
var floor9=SIMPLEX_GRID([[-1,20],[-1,9],[depthFloor-0.25]]);
var floor10=SIMPLEX_GRID([[-47,4],[-5,11],[depthFloor-0.25]]);
var stairs= function (x,y,z){
	var stair=STRUCT([]);
	var s=x;
	var cont=1;
	for(i=z[0];i>0&&cont<8;i=i-0.25){
		var step=SIMPLEX_GRID([s,y,[i]]);
		stair=STRUCT([stair,step]);
		s=[x[0]-(0.4*cont),0.4];
		cont++;
	}

	return stair;
}
var heightWall=3;
var wall=SIMPLEX_GRID([[-0.8,7.2],[-0.8,0.2],[depthFloor+heightWall]]);
var wall1=SIMPLEX_GRID([[-0.8,0.2],[-1,21.2],[depthFloor+heightWall]]);
var wall2=SIMPLEX_GRID([[-9,0.2],[-16.8,5.4],[depthFloor+heightWall]]);
var wall3=SIMPLEX_GRID([[-0.8,8.4],[-22,0.2],[depthFloor+heightWall]]);
var wall4=SIMPLEX_GRID([[-41.6,9.7],[-4.8,0.2],[depthFloor+heightWall]]);
var wall5=SIMPLEX_GRID([[-51,0.2],[-5,11.2],[depthFloor+heightWall]]);
var wall6=SIMPLEX_GRID([[-37.8,13.2],[-16,0.2],[depthFloor+heightWall]]);
var wall7=SIMPLEX_GRID([[-7.5,19],[-15,0.2],[depthFloor+heightWall]]);
var wall8=SIMPLEX_GRID([[-25.2,8.5],[-7.2,0.2],[depthFloor+heightWall]]);
var wall9=SIMPLEX_GRID([[-37.2,4.3],[-11.2,0.2],[depthFloor+heightWall]]);
var pool=SIMPLEX_GRID([[-1,20],[-1,9],[-1.5,0.2]]);
var pool1=SIMPLEX_GRID([[-47,4],[-5,11],[-1.5,0.2]]);
var column=SIMPLEX_GRID([[0.2],[0.2],[depthFloor+heightWall]]);
var column0=T([0,1])([25.9,6.9])(column);
var column1=T([0,1])([25.9,13.9])(column);
var column2=T([0,1])([31.2,13.9])(column);
var column3=T([0,1])([31.2,6.9])(column);
var column4=T([0,1])([38.5,13.9])(column);
var column5=T([0,1])([38.5,6.9])(column);
var column6=T([0,1])([44.9,6.9])(column);
var column7=T([0,1])([44.9,13.9])(column);
var glassWindow0=SIMPLEX_GRID([[-39.9,0.1],[-13.7,2.3],[depthFloor+heightWall]]);
var glassWindow1=SIMPLEX_GRID([[-30,9.9],[-13.7,0.1],[depthFloor+heightWall]]);
var glassWindow2=SIMPLEX_GRID([[-30,0.1],[-4.9,2.3],[depthFloor+heightWall]]);
var glassWindow3=SIMPLEX_GRID([[-30.1,11.5],[-4.9,0.1],[depthFloor+heightWall]]);
var glassWindow4=SIMPLEX_GRID([[-31,0.1],[-7.5,6.3],[depthFloor+heightWall]]);
var glassWindow5=T([0])([1])(glassWindow4);
var glassWindow6=SIMPLEX_GRID([[-38.8,0.1],[-5,6.2],[depthFloor+heightWall]]);
var glassWindow7=T([0])([2.6])(glassWindow6);
var glassWindow8=SIMPLEX_GRID([[-44.7,0.1],[-6.7,7.6],[depthFloor+heightWall]]);
var glassWindow9=SIMPLEX_GRID([[-1,6],[-17,0.1],[depthFloor+heightWall]]);
var glassWindow10=SIMPLEX_GRID([[-8,1],[-17,0.1],[depthFloor+heightWall]]);
var glassWindow=COLOR([0.59,0.62,0.63])(STRUCT([glassWindow0,glassWindow1,glassWindow2,glassWindow3,glassWindow4,glassWindow5,glassWindow6,glassWindow7,glassWindow8,glassWindow9,glassWindow10]));
var roofHeight=0.5;
var roof0=SIMPLEX_GRID([[-0.2,9],[-13.2,9.8],[[-depthFloor-heightWall],[roofHeight]]]);
var roof1=SIMPLEX_GRID([[-24,23],[-4,13],[[-depthFloor-heightWall],[roofHeight]]]);
var roof=COLOR([0.41,0.41,0.41])(STRUCT([roof0,roof1]));
var columns=STRUCT([column0,column1,column2,column3,column4,column5,column6,column7]);
var pools=COLOR([0,0,1])(STRUCT([pool,pool1]));
var walls=COLOR([1,0.94,0.96])(STRUCT([wall,wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9]));
var stair=COLOR([1,0.94,0.96])(stairs([-36,0.4],[-1,3],[depthFloor]));
var panchina=SIMPLEX_GRID([[-7.8,15.4],[-14.2,0.7],[-depthFloor-0.5,0.15]]);
var leg0=SIMPLEX_GRID([[-10,0.4],[-14.2,0.7],[-depthFloor,0.5]]);
var leg1=SIMPLEX_GRID([[-12.2,0.4],[-14.2,0.7],[-depthFloor,0.5]]);
var leg2=SIMPLEX_GRID([[-14.4,0.4],[-14.2,0.7],[-depthFloor,0.5]]);
var leg3=SIMPLEX_GRID([[-16.6,0.4],[-14.2,0.7],[-depthFloor,0.5]]);
var leg4=SIMPLEX_GRID([[-18.8,0.4],[-14.2,0.7],[-depthFloor,0.5]]);
var leg5=SIMPLEX_GRID([[-21,0.4],[-14.2,0.7],[-depthFloor,0.5]]);
var bench=COLOR([0.94,0.90,0.55])(STRUCT([panchina,leg0,leg1,leg2,leg3,leg4,leg5]));
var floor=COLOR([0.94,0.90,0.55])(STRUCT([floor0,floor1,floor2,floor3,floor4,floor5,floor6,floor7,floor8,floor9,floor10]));
var construction=STRUCT([floor,stair,walls,pools,columns,glassWindow,roof,bench]);
DRAW(construction);
