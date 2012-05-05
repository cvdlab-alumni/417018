  var domain1 = INTERVALS(1)(30);
  var domain2 = DOMAIN([[0,1],[0,1]])([20,30]);

 // var p0 = [[0,0,0],[2,0.1,0],[1.9,0.2,0],[1.7,0.3,0],[1.4,0.5,0],[0,0,0]];
 var p0 = [[0,0,0],[2,0.1,0],[1.9,0.2,0],[1.7,0.3,0],[1.4,0.3,0],[0.8,0.2,0],[0.4,0.1,0],[0,0,0]];
  var p1 = p0.map(function(p) {return [p[0]+0.2,p[1],p[2]+1]});
  var p2 = p0.map(function(p) {return [p[0]+0.4,p[1],p[2]+2]});
  var p3 = p0.map(function(p) {return [p[0]+0.6,p[1],p[2]+3]});
  var p4 = p0.map(function(p) {return [p[0]+0.8,p[1],p[2]+4]}); 
 // var p5 = [[1.2,0,6],[2,0.2,6]];

  var c0 = BEZIER(S0)(p0);
  var c1 = BEZIER(S0)(p1);
  var c2 = BEZIER(S0)(p2);
  var c3 = BEZIER(S0)(p3);
  var c4 = BEZIER(S0)(p4);
 // var c5 = BEZIER(S0)(p5);

  //var curves = STRUCT(CONS(AA(MAP)([c0,c1,c2,c3,c4]))(domain1));
  //DRAW(curves);

  var wing = BEZIER(S1)([c0,c1,c2,c3,c4]);
  var surf = MAP(wing)(domain2);
  var wing2 = T([0,1])([0.5,1])(surf);
  var wing3 = T([0,1])([0.5,1])(wing2);
  var point = [[1.4,0.15,3],[1.5,0.15,3.2],[1.7,0.15,3.5],[1.3,0.15,3.3],[1.4,0.15,3]]
  var point1 = point.map(function(p) {return [p[0]+0.1,p[1]+0.2,p[2]]});
  var point2 = point.map(function(p) {return [p[0]+0.2,p[1]+0.5,p[2]]});
  var point3 = point.map(function(p) {return [p[0]+0.4,p[1]+0.7,p[2]]});
  var point4 = point.map(function(p) {return [p[0]+0.5,p[1]+1,p[2]]});
  var co0 = BEZIER(S0)(point);
  var co1 = BEZIER(S0)(point1);
  var co2 = BEZIER(S0)(point2);
  var co3 = BEZIER(S0)(point3);
  var co4 = BEZIER(S0)(point4);
  var pillar = BEZIER(S1)([co0,co1,co2,co3,co4]);
  var pillarMapped = MAP(pillar)(domain2);
  var pillar1= T([0,1,2])([0.2,1,-2])(pillarMapped);
  var pillar2= T([0,1])([0.5,1])(pillarMapped);
  pillars=COLOR([139/255,69/255,19/255])(STRUCT([pillarMapped,pillar1,pillar2]));
  //pillars1=T([0,1])([0.5,1])(pillars);
  surf1=COLOR([0,128/255,0])(STRUCT([surf,wing2,wing3]));
  wing0=STRUCT([pillars,surf1]);
  DRAW(wing0);