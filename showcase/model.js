/**
 * @author Alessio De Angelis
 * 
 * SUPER MARIO PIXEL ART FUN
 * Inspired by this render: http://art.ngfiles.com/images/130/petelavadigger_super-mario-pixel.png
 */
var red = [209/255, 35/255, 26/255, 1];
var pink = [238/255, 191/255, 139/255, 1];
var black = [0, 0, 0, 1];
var blue = [71/255, 78/255, 208/255, 1];
var yellow = [1, 237/255, 31/255, 1];
var brown = [130/255, 66/255, 38/255, 1];

var face = [];
face.push(COLOR(pink)(SIMPLEX_GRID([[-5, 7], [-7, 1], [1]]))); //row7
face.push(COLOR(red)(SIMPLEX_GRID([[-12, 2], [-7, 1], [1]])));
face.push(COLOR(brown)(SIMPLEX_GRID([[-3, 2], [-8, 1], [1]])));//row8
face.push(COLOR(pink)(SIMPLEX_GRID([[-5, 4], [-8, 1], [1]])));
face.push(COLOR(black)(SIMPLEX_GRID([[-9, 4], [-8, 1], [1]])));
face.push(COLOR(red)(SIMPLEX_GRID([[-13, 1], [-8, 1], [1]])));
face.push(COLOR(brown)(SIMPLEX_GRID([[-3, 1, -1, 2], [-9, 1], [1]])));//row9
face.push(COLOR(pink)(SIMPLEX_GRID([[-4, 1, -2, 3, -1, 3], [-9, 1], [1]])));
face.push(COLOR(black)(SIMPLEX_GRID([[-10, 1], [-9, 1], [1]])));
face.push(COLOR(red)(SIMPLEX_GRID([[-14, 1], [-9, 1], [1]])));
face.push(COLOR(brown)(SIMPLEX_GRID([[-3, 1, -1, 1], [-10, 1], [1]])));//row10
face.push(COLOR(pink)(SIMPLEX_GRID([[-4, 1, -1, 3, -1, 3], [-10, 1], [1]])));
face.push(COLOR(red)(SIMPLEX_GRID([[-13, 2], [-10, 1], [1]])));
face.push(COLOR(black)(SIMPLEX_GRID([[-9, 1], [-10, 2], [1]])));
face.push(COLOR(brown)(SIMPLEX_GRID([[-4, 3], [-11, 1], [1]])));//row11
face.push(COLOR(pink)(SIMPLEX_GRID([[-7, 2, -1, 1], [-11, 1], [1]])));
face.push(COLOR(red)(SIMPLEX_GRID([[-12, 3], [-11, 1], [1]])));
face.push(COLOR(red)(SIMPLEX_GRID([[-4, 9], [-12, 1], [1]])));//row12
face.push(COLOR(pink)(SIMPLEX_GRID([[-13, 2], [-12, 1], [1]])));
face.push(COLOR(red)(SIMPLEX_GRID([[-5, 5], [-13, 1], [1]])));//row13
face.push(COLOR(pink)(SIMPLEX_GRID([[-12, 3], [-13, 1], [1]])));

var body = [];
body.push(COLOR(brown)(SIMPLEX_GRID([[-1, 2], [1], [1]]))); //row0
body.push(COLOR(brown)(SIMPLEX_GRID([[-1, 3], [-1, 1], [1]]))); //row1
body.push(COLOR(blue)(SIMPLEX_GRID([[-4, 6], [-1, 1], [1]]))); 
body.push(COLOR(brown)(SIMPLEX_GRID([[-2, 3], [-2, 1], [1]]))); //row2
body.push(COLOR(brown)(SIMPLEX_GRID([[-14, 2], [-2, 4], [1]]))); 
body.push(COLOR(blue)(SIMPLEX_GRID([[-5, 9], [-2, 1], [1]]))); 
body.push(COLOR(blue)(SIMPLEX_GRID([[-4, 1, -1, 2, -1, 5], [-3, 1], [1]]))); //row3
body.push(COLOR(pink)(SIMPLEX_GRID([[-1, 1], [-3, 1], [1]])));
body.push(COLOR(yellow)(SIMPLEX_GRID([[-8, 1], [-3, 1], [1]])));
body.push(COLOR(red)(SIMPLEX_GRID([[-5, 1], [-3, 1], [1]])));
body.push(COLOR(pink)(SIMPLEX_GRID([[3], [-4, 1], [1]])));//row4
body.push(COLOR(red)(SIMPLEX_GRID([[-3, 4], [-4, 1], [1]])));
body.push(COLOR(blue)(SIMPLEX_GRID([[-7, 4, -1, 2], [-4, 1], [1]])));
body.push(COLOR(yellow)(SIMPLEX_GRID([[-11, 1], [-4, 1], [1]])));
body.push(COLOR(pink)(SIMPLEX_GRID([[2], [-5, 1], [1]])));//row5
body.push(COLOR(red)(SIMPLEX_GRID([[-2, 5, -1 , 3], [-5, 1], [1]])));
body.push(COLOR(blue)(SIMPLEX_GRID([[-7, 1, -3, 1], [-5, 1], [1]])));
body.push(COLOR(red)(SIMPLEX_GRID([[-2, 4, -1 , 3, -1, 2], [-6, 1], [1]])));//row6
body.push(COLOR(blue)(SIMPLEX_GRID([[-6, 1, -3, 1], [-6, 1], [1]])));
body.push(COLOR(brown)(SIMPLEX_GRID([[-15, 1], [-6, 1], [1]])));

scmodel = STRUCT(face.concat(body));

DRAW(scmodel);
/**
 * @author Giuseppe Zappavigna
 * 
 * Wall and money
 */
var gold= [1,215/255,0,1];
var cuboid3=SIMPLEX_GRID([[3], [3], [1]]);
var cuboid7=SIMPLEX_GRID([[7], [3], [1]]);
var shortLine=SIMPLEX_GRID([[1], [4], [1]]);
var longLine=SIMPLEX_GRID([[15], [1], [1]]);
var cuboid31=T([1])([4])(cuboid3);
var cuboid32=T([1])([8])(cuboid3);
var cuboid33=T([1])([12])(cuboid3);
var cuboid34=T([0,1])([12,4])(cuboid3);
var cuboid35=T([0])([12])(cuboid3);
var cuboid36=T([0,1])([12,8])(cuboid3);
var cuboid37=T([0,1])([12,12])(cuboid3);
var cuboid71=T([0])([4])(cuboid7);
var cuboid72=T([1])([4])(cuboid7);
var cuboid73=T([0,1])([8,4])(cuboid7);
var cuboid74=T([0,1])([4,8])(cuboid7);
var cuboid75=T([1])([12])(cuboid7);
var cuboid76=T([0,1])([8,12])(cuboid7);
var shortLine1=T([0])([3])(shortLine);
var shortLine2=T([0])([11])(shortLine);
var shortLine3=T([0,1])([3,7])(shortLine);
var shortLine4=T([0,1])([11,7])(shortLine);
var shortLine5=T([0,1])([7,3])(shortLine);
var shortLine6=T([0,1])([7,11])(shortLine);
var longLine1=T([1])([3])(longLine);
var longLine2=T([1])([7])(longLine);
var longLine3=T([1])([11])(longLine);
var lines=COLOR(black)(STRUCT([shortLine1,shortLine2,shortLine3,shortLine4,shortLine5,shortLine6,longLine1,longLine2,longLine3]));
var cuboids=COLOR(brown)(STRUCT([cuboid3,cuboid31,cuboid32,cuboid33,cuboid34,cuboid35,cuboid36,cuboid37,cuboid71,cuboid72,cuboid73,cuboid74,cuboid75,cuboid76]));
var wall=STRUCT([lines,cuboids]);
var moneyCyl=CYL_SURFACE([7.5,0.7])([16,2]);
var moneyCyl1=CYL_SURFACE([6.5,0.3])([16,2]);
moneyCyl1=T([2])([0.7])(moneyCyl1);
var disk = DISK(7.5)([16,2]);
var disk1 = DISK(6.5)([16,2]);
var disk2 =T([0,1,2])([7.5,37.5,0.7])(disk);
var disk3 =T([0,1,2])([7.5,7.5+15+15,1])(disk1);
var d=STRUCT([disk,disk2,disk3]);
var disks=STRUCT([moneyCyl,moneyCyl1,disk]);
disks=T([0,1])([7.5,7.5+15+15])(disks);
wall=T([1])([15])(wall);
DRAW(wall);
DRAW(COLOR(gold)(disks));

var base1 = EXTRUDE([0.3])(COLOR(gold)(STRUCT([disk2,disk3])));
var base2 = T([2])([0.015])(EXTRUDE([0.03])(DISK(0.1)(50)));
DRAW(base1);

//dà problemi a colorare i dischi traslati