var piece= SIMPLEX_GRID([[3.2],[1],[1.5]]);
var piece1=SIMPLEX_GRID([[3.5],[0.4],[1.5]]);
piece1=T([0,1])([-3.5,0.6])(piece1);
var point = [[0,0.6,0],[1,0.4,0],[2,0.2,0],[3.5,0,0]];
 var point1 = point.map(function(p) {return [p[0],p[1],p[2]+1.5]});
  var point2 = point.map(function(p) {return [p[0],p[1],p[2]+1.5]});
  var point3 = point.map(function(p) {return [p[0],p[1],p[2]+1.5]});
  var point4 = point.map(function(p) {return [p[0],p[1],p[2]+1.5]});
    var co0 = BEZIER(S0)(point);
  var co1 = BEZIER(S0)(point1);
  var co2 = BEZIER(S0)(point2);
  var co3 = BEZIER(S0)(point3);
  var co4 = BEZIER(S0)(point4);
  var retro = BEZIER(S1)([co0,co1,co2,co3,co4]);
var dominio = INTERVALS(1)(30);
var domain2 = DOMAIN([[0,1],[0,1]])([20,30]);
var co0 = BEZIER(S0)(point);
var out=MAP(co0)(dominio);
var co1=T([2])([1.5])(out);
 var retroMapped = MAP(retro)(domain2);
 retroMapped=T([0])([-3.5])(retroMapped);
 var points = [[0,0.6],[3.5,0.6],[3.5,0]];
var cells = [[0,1,2]];
var simpli = SIMPLICIAL_COMPLEX(points)(cells);
var points1 = [[0,0.6,1.5],[3.5,0.6,1.5],[3.5,0,1.5]];
var cells = [[0,1,2]];
var simpli1 = SIMPLICIAL_COMPLEX(points1)(cells);
simpli=T([0])([-3.5])(simpli);
simpli1=T([0])([-3.5])(simpli1);
var control = [[0,0,0],[0.2,0,0.2],[0.4,0,0],[0.2,0,-0.2],[0,0,0]];
var control1 = control.map(function(p) {return [p[0]-0.2,p[1]-0.3,p[2]]});
  var control2 = control.map(function(p) {return [p[0]-0.3,p[1]-0.6,p[2]]});
  var control3 = control.map(function(p) {return [p[0]-0.5,p[1]-0.8,p[2]]});
  var control4 = control.map(function(p) {return [p[0]-0.6,p[1]-1.2,p[2]]});
  var curve0 = BEZIER(S0)(control);
  var curve1 = BEZIER(S0)(control1);
  var curve2 = BEZIER(S0)(control2);
  var curve3 = BEZIER(S0)(control3);
  var curve4 = BEZIER(S0)(control4);
   var sostegno = BEZIER(S1)([curve0,curve1,curve2,curve3,curve4]);
   var sostegnoMapped = MAP(sostegno)(domain2);
   var sostegno1 = T([0,2])([2.7,1.1])(sostegnoMapped);
   var sostegno2 = T([0,2])([2.7,0.4])(sostegnoMapped);
   var sostegno3 =ROTATE([0,2])(PI)(sostegnoMapped);
      var sostegno4 = T([0,2])([1.75,0.4])(sostegno3);
   sostegno3 = T([0,2])([1.75,1.1])(sostegno3);
   var sostegni= STRUCT([sostegno2,sostegno1,sostegno3,sostegno4]);
   var ruota = TORUS_SURFACE([0.1, 0.2])([12,8]);
var ruota1=T([0,1,2])([2.2,-1.2,0.3])(ruota);
var ruota2=T([0,1,2])([2.2,-1.2,1.2])(ruota);
var fusoliera=STRUCT([simpli,simpli1,piece1,piece,retroMapped,sostegni,ruota1,ruota2])
DRAW(fusoliera);