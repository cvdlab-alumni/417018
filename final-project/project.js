var domain1 = INTERVALS(1)(30);
var domain2 = DOMAIN([ [ 0, 1 ], [ 0, 1 ] ])([ 15, 30 ]);
var p0 = [ [ 10, 23, 0 ], [ 9, 23, 2.5 ], [ 8, 23, 2 ], [ 7, 23, 1.5 ],
    [ 6, 23, 1 ], [ 5, 23, 0 ], [ 6, 23, -1 ], [ 7, 23, -1.5 ],
    [ 8, 23, -2 ], [ 9, 23, -2.5 ], [ 10, 23, 0 ] ];
var p1 = [ [ 10.5, 21, 0 ], [ 10, 21, 3 ], [ 9, 21, 2.5 ], [ 8, 21, 3.2 ],
    [ 7, 21, 2.5 ], [ 6, 21, 1.5 ], [ 5, 21, 1 ], [ 2, 21, 0 ],
    [ 5, 21, -1 ], [ 6, 21, -1.5 ], [ 7, 21, -2.5 ], [ 8, 21, -3.2 ],
    [ 9, 21, -2.5 ], [ 10, 21, -3 ], [ 10.5, 21, 0 ] ];
var p2 = [ [ 12, 19, 0 ], [ 10, 19, 4 ], [ 9, 19, 3.5 ], [ 8, 19, 4.2 ],
    [ 7, 19, 3.5 ], [ 6, 19, 2.5 ], [ 5, 19, 2 ], [ 4, 19, 1 ],
    [ -1, 19, 0 ], [ 4, 19, -1 ], [ 5, 19, -2 ], [ 6, 19, -2.5 ],
    [ 7, 19, -3.5 ], [ 8, 19, -4.2 ], [ 9, 19, -3.5 ], [ 10, 19, -4 ],
    [ 12, 19, 0 ] ];
var p3 = [ [ 11.5, 16.5, 0 ], [ 10, 16.5, 4.5 ], [ 9, 16.5, 4 ],
    [ 8, 16.5, 4.7 ], [ 7, 16.5, 4 ], [ 6, 16.5, 3 ], [ 5, 16.5, 2.5 ],
    [ 4, 16.5, 1.5 ], [ 3, 16.5, 0.5 ], [ 0, 16.5, 0 ], [ 3, 16.5, -0.5 ],
    [ 4, 16.5, -1.5 ], [ 5, 16.5, -2.5 ], [ 6, 16.5, -3 ], [ 7, 16.5, -4 ],
    [ 8, 16.5, -4.7 ], [ 9, 16.5, -4 ], [ 10, 16.5, -4.5 ],
    [ 11.5, 16.5, 0 ] ];
var p4 = [ [ 12, 14.5, 0 ], [ 10.5, 14.5, 5.5 ], [ 9.5, 14.5, 5 ],
    [ 8.5, 14.5, 5.7 ], [ 7.5, 14.5, 5 ], [ 6.5, 14.5, 4 ],
    [ 5.5, 14.5, 3.5 ], [ 4.5, 14.5, 2.5 ], [ 3.5, 14.5, 1.5 ],
    [ 2.5, 14.5, 1 ], [ -1, 14.5, 0 ], [ 2.5, 14.5, -1 ],
    [ 3.5, 14.5, -1.5 ], [ 4.5, 14.5, -2.5 ], [ 5.5, 14.5, -3.5 ],
    [ 6.5, 14.5, -4 ], [ 7.5, 14.5, -5 ], [ 8.5, 14.5, -5.7 ],
    [ 9.5, 14.5, -5 ], [ 10.5, 14.5, -5.5 ], [ 12, 14.5, 0 ] ];
var p5 = [ [ 12, 13.5, 0 ], [ 11, 13.5, 2.5 ], [ 10, 13.5, 4.5 ],
    [ 9, 13.5, 4 ], [ 8, 13.5, 4.7 ], [ 7, 13.5, 4 ], [ 6, 13.5, 3 ],
    [ 5, 13.5, 2.5 ], [ 4, 13.5, 1.5 ], [ 3, 13.5, 0.5 ], [ 0, 13.5, 0 ],
    [ 3, 13.5, -0.5 ], [ 4, 13.5, -1.5 ], [ 5, 13.5, -2.5 ],
    [ 6, 13.5, -3 ], [ 7, 13.5, -4 ], [ 8, 13.5, -4.7 ], [ 9, 13.5, -4 ],
    [ 10, 13.5, -4.5 ], [ 11, 13.5, -2.5 ], [ 12, 13.5, 0 ] ];
var p6 = [ [ 8.5, 23.2, 0 ] ];
var c0 = BEZIER(S0)(p0);
var c1 = BEZIER(S0)(p1);
var c2 = BEZIER(S0)(p2);
var c3 = BEZIER(S0)(p3);
var c4 = BEZIER(S0)(p4);
var c5 = BEZIER(S0)(p5);
var c6 = BEZIER(S0)(p6);
var parteSuperiore = BEZIER(S1)([ c6, c0, c1, c2, c3, c4, c5 ]);
var point0 = [ [ 12.2, 12.5, 0 ], [ 11.5, 12.5, 3.5 ], [ 10.5, 12.5, 5.5 ],
    [ 9.5, 12.5, 5 ], [ 8.5, 12.5, 5.9 ], [ 7.5, 12.5, 5 ],
    [ 6.5, 12.5, 4 ], [ 5.5, 12.5, 3.5 ], [ 4.5, 12.5, 3 ],
    [ 3.5, 12.5, 7 ], [ 2.5, 12.5, 6 ], [ 0, 12.5, 0 ], [ 2.5, 12.5, -6 ],
    [ 3.5, 12.5, -1 ], [ 4.5, 12.5, -3 ], [ 5.5, 12.5, -3.5 ],
    [ 6.5, 12.5, -4 ], [ 7.5, 12.5, -5 ], [ 8.5, 12.5, -5.7 ],
    [ 9.5, 12.5, -5 ], [ 10.5, 12.5, -5.5 ], [ 11.5, 12.5, -3.5 ],
    [ 12.2, 12.5, 0 ] ];
var point1 = [ [ 12.7, 11.5, 0 ], [ 11.5, 11.5, 3.5 ], [ 10.5, 11.5, 5.5 ],
    [ 9.5, 11.5, 5 ], [ 8.5, 11.5, 5.9 ], [ 7.5, 11.5, 5 ],
    [ 6.5, 11.5, 4 ], [ 5.5, 11.5, 3.5 ], [ 4.5, 11.5, 3 ],
    [ 3.5, 11.5, 7 ], [ 2.5, 11.5, 6 ], [ -7, 11.5, 0 ], [ 2.5, 11.5, -6 ],
    [ 3.5, 11.5, -5 ], [ 4.5, 11.5, -3 ], [ 5.5, 11.5, -3.5 ],
    [ 6.5, 11.5, -4 ], [ 7.5, 11.5, -5 ], [ 8.5, 11.5, -5.7 ],
    [ 9.5, 11.5, -5 ], [ 10.5, 11.5, -5.5 ], [ 11.5, 11.5, -3.5 ],
    [ 12.7, 11.5, 0 ] ];
var point2 = [ [ 13, 9.5, 0 ], [ 11.8, 9.5, 2 ], [ 11, 9.5, 5.5 ],
    [ 10, 9.5, 5 ], [ 9, 9.5, 5.9 ], [ 8, 9.5, 6.1 ], [ 7, 9.5, 5 ],
    [ 6, 9.5, 4 ], [ 5, 9.5, 3.5 ], [ 4, 9.5, 8 ], [ 3, 9.5, 7 ],
    [ -9, 9.5, 0 ], [ 3, 9.5, -7 ], [ 4, 9.5, -8 ], [ 5, 9.5, -3.5 ],
    [ 6, 9.5, -4 ], [ 7, 9.5, -5 ], [ 8, 9.5, -6.1 ], [ 9, 9.5, -5.5 ],
    [ 10, 9.5, -5 ], [ 11, 9.5, -5.5 ], [ 11.8, 9.5, -3.5 ], [ 13, 9.5, 0 ] ];
var point3 = [ [ 13, 7.5, 0 ], [ 11.8, 7.5, 6 ], [ 11, 7.5, 5.5 ],
    [ 10, 7.5, 5 ], [ 9, 7.5, 5.9 ], [ 8, 7.5, 6.5 ], [ 7, 7.5, 5 ],
    [ 6, 7.5, 4 ], [ 5, 7.5, 3.5 ], [ 4, 7.5, 8 ], [ 3, 7.5, 7 ],
    [ -14.5, 7.5, 0 ], [ 3, 7.5, -7 ], [ 4, 7.5, -8 ], [ 5, 7.5, -3.5 ],
    [ 6, 7.5, -4 ], [ 7, 7.5, -5 ], [ 8, 7.5, -6.5 ], [ 9, 7.5, -5.9 ],
    [ 10, 7.5, -5 ], [ 11, 7.5, -5.5 ], [ 11.8, 7.5, -6 ], [ 13, 7.5, 0 ] ];
var point4 = [ [ 13.5, 5.5, 0 ], [ 11.8, 5.5, 6 ], [ 11, 5.5, 5.5 ],
    [ 10, 5.5, 5 ], [ 9, 5.5, 5.9 ], [ 8, 5.5, 6.5 ], [ 7, 5.5, 5 ],
    [ 6, 5.5, 4 ], [ 5, 5.5, 3.5 ], [ 4, 5.5, 8 ], [ 3, 5.5, 7 ],
    [ -14, 5.5, 0 ], [ 3, 5.5, -7 ], [ 4, 5.5, -8 ], [ 5, 5.5, -3.5 ],
    [ 6, 5.5, -4 ], [ 7, 5.5, -5 ], [ 8, 5.5, -6.5 ], [ 9, 5.5, -5.9 ],
    [ 10, 5.5, -5 ], [ 11, 5.5, -5.5 ], [ 11.8, 5.5, -6 ], [ 13.5, 5.5, 0 ] ];
var point5 = [ [ 12.8, 3.5, 0 ], [ 11.8, 3.5, 6 ], [ 11, 3.5, 5.5 ],
    [ 10, 3.5, 5 ], [ 9, 3.5, 5.9 ], [ 8, 3.5, 6.5 ], [ 7, 3.5, 5 ],
    [ 6, 3.5, 4 ], [ 5, 3.5, 3.5 ], [ 4, 3.5, 8 ], [ 3, 3.5, 7 ],
    [ -12, 3.5, 0 ], [ 3, 3.5, -7 ], [ 4, 3.5, -8 ], [ 5, 3.5, -3.5 ],
    [ 6, 3.5, -4 ], [ 7, 3.5, -5 ], [ 8, 3.5, -6.5 ], [ 9, 3.5, -5.9 ],
    [ 10, 3.5, -5 ], [ 11, 3.5, -5.5 ], [ 11.8, 3.5, -6 ], [ 12.8, 3.5, 0 ] ];
var point6 = [ [ 12, 3, 0 ], [ 9, 2, 4 ], [ 6, 1, 8 ], [ -7, -3, 0 ],
    [ 6, 1, -8 ], [ 9, 2, -4 ], [ 12, 3, 0 ] ];
var point7 = [ [ 8, 3, 0 ] ];
var curva0 = BEZIER(S0)(point0);
var curva1 = BEZIER(S0)(point1);
var curva2 = BEZIER(S0)(point2);
var curva3 = BEZIER(S0)(point3);
var curva4 = BEZIER(S0)(point4);
var curva5 = BEZIER(S0)(point5);
var curva6 = BEZIER(S0)(point6);
var curva7 = BEZIER(S0)(point7);
var s = CUBIC_HERMITE(S1)([ curva6, curva7, [ 0, 10, 0 ], [ 0, -10, 0 ] ]);
var parteSuperiore = BEZIER(S1)([ c6, c0, c1, c2, c3, c4, c5 ]);
var parteInferiore = BEZIER(S1)([ c5, curva0, curva1, curva2, curva3, curva4, curva5, curva6, s ]);
var pSopra = MAP(parteSuperiore)(domain2);
var pSotto = MAP(parteInferiore)(domain2);
var polmone = COLOR([ 250 / 255, 128 / 255, 114 / 255, 0.75 ])(STRUCT([ pSopra, pSotto ]));
polmone = ROTATE([ 0, 1 ])(-PI / 56)(polmone);
var polmone2 = ROTATE([ 0, 2 ])(PI)(polmone);
polmone2 = T([ 0 ])([ 27.5 ])(polmone2);
var trachea1 = COLOR([ 1, 228 / 255, 181 / 255 ])(CYL_SURFACE([ 0.75, 12 ])());
trachea1 = ROTATE([ 1, 2 ])([ PI / 2 ])(trachea1);
trachea1 = T([ 0, 1 ])([ 13.7, 26 ])(trachea1);
var anello = DISK([ 0.9 ])();
anello = EXTRUDE(
    [ 0.8, -0.2, 0.8, -0.2, 0.8, -0.2, 0.8, -0.2, 0.8, -0.2, 0.8, -0.2,
        0.8, -0.2, 0.8, -0.2, 0.8, -0.2, 0.8, -0.2, 0.8, -0.2, ])(
    anello);
anello = ROTATE([ 1, 2 ])([ PI / 2 ])(anello);
anello = T([ 0, 1 ])([ 13.7, 26 ])(anello);
anello = COLOR([ 1, 1, 224 / 255 ])(anello);
var trachea = STRUCT([ trachea1, anello ]);
var biforcazione = function(raggio, altezza) {
  var biF = COLOR([ 1, 228 / 255, 181 / 255 ])(CYL_SURFACE([ raggio, altezza ])());
  biF = ROTATE([ 1, 2 ])([ PI / 2 ])(biF);
  var ring = DISK([ raggio + 0.1 ])();
  var cont = altezza / 7.5;
  var s = [];
  for ( var i = altezza; i > 0; i = i - (cont)) {
    s.push(altezza / 15);
    s.push(-(altezza / 15));
  }
  ring = COLOR([ 1, 1, 224 / 255 ])(EXTRUDE(s)(ring));
  ring = ROTATE([ 1, 2 ])([ PI / 2 ])(ring);
  biF = STRUCT([ biF, ring ]);
  var biF1 = ROTATE([ 0, 1 ])([ PI / 4 ])(biF);
  var biF2 = ROTATE([ 0, 1 ])([ -PI / 4 ])(biF);
  var biF3 = STRUCT([ biF1, biF2 ]);
  return biF3;
}
var biforcazione1 = function(raggio, altezza, traslazione, rotazione) {// rotazione è un array in cui i primi due elementi sono gli assi su cui rotare ed il terzo
  // è l'angolo di rotazione
  var biF = COLOR([ 1, 228 / 255, 181 / 255 ])(CYL_SURFACE([ raggio, altezza ])());
  biF = ROTATE([ 1, 2 ])([ PI / 2 ])(biF);
  var ring = DISK([ raggio + 0.1 ])();
  var cont = altezza / 7.5;
  var s = [];
  for ( var i = altezza; i > 0; i = i - (cont)) {
    s.push(altezza / 15);
    s.push(-(altezza / 15));
  }
  ring = COLOR([ 1, 1, 224 / 255 ])(EXTRUDE(s)(ring));
  ring = ROTATE([ 1, 2 ])([ PI / 2 ])(ring);

  biF = STRUCT([ biF, ring ]);
  var biF1 = ROTATE([ 0, 1 ])([ PI / 4 ])(biF);
  var biF2 = ROTATE([ 0, 1 ])([ -PI / 4 ])(biF);
  biF = T([ 1 ])([ altezza ])(biF);
  var biF3 = STRUCT([ biF, biF1, biF2 ]);
  biF3 = ROTATE([ rotazione[0], rotazione[1] ])([ rotazione[2] ])(biF3);
  biF3 = T([ 0, 1 ])(traslazione)(biF3);
  return biF3;
}
var biforcazione2 = function(raggio, altezza, traslazione, rotazione) {
  var biF = COLOR([ 1, 228 / 255, 181 / 255 ])(CYL_SURFACE([ raggio, altezza ])());
  biF = ROTATE([ 1, 2 ])([ PI / 2 ])(biF);
  var biF1 = ROTATE([ 0, 1 ])([ PI / 4 ])(biF);
  var biF2 = ROTATE([ 0, 1 ])([ -PI / 4 ])(biF);
  biF = T([ 1 ])([ altezza ])(biF);
  var biF3 = STRUCT([ biF, biF1, biF2 ]);
  biF3 = ROTATE([ rotazione[0], rotazione[1] ])([ rotazione[2] ])(biF3);
  biF3 = T([ 0, 1 ])(traslazione)(biF3);
  return biF3;
}
var bifo = biforcazione(0.65, 5);
bifo = T([ 0, 1 ])([ 13.7, 14 ])(bifo);
var bifo1 = biforcazione1(0.4, 3, [ 9.1, 13.5 ], [ 0, 1, -(PI / 1.2) ]);
var bifo2 = biforcazione2(0.1, 1, [ 8.7, 11.7 ], [ 0, 1, -(PI / 4) ]);
var bifo3 = biforcazione2(0.3, 2, [ 9, 9 ], [ 0, 1, -(PI / 5) ]);
var bifo4 = biforcazione2(0.1, 1, [ 7.5, 10 ], [ 0, 1, -(PI) ]);
var bifo5 = biforcazione1(0.2, 1.3, [ 7.5, 15 ], [ 0, 1, -(PI) ]);
var bifo6 = biforcazione1(0.2, 0.7, [ 10.5, 15 ], [ 0, 1, -3 / 2 * (PI) ]);
var bifo7 = biforcazione2(0.3, 3, [ 6.5, 5.8 ], [ 0, 1, -(PI / 7) ]);
var bronchi1 = STRUCT([ bifo1, bifo2, bifo3, bifo4, bifo5, bifo6, bifo7 ]);
var bronchi2 = ROTATE([ 0, 2 ])([ PI ])(bronchi1);
bronchi2 = T([ 0, 1 ])([ 27.5, 0.5 ])(bronchi2);
var bronchi = STRUCT([ bifo, bronchi1, bronchi2 ]);
var controls1 = [ [ 2.8, 0, 3 ], [ 24.8, 0, 3 ], [ 0, 8, 0 ], [ 0, -8, 0 ] ];
var controls2 = [ [ 2.8, 0, -3 ], [ 24.8, 0, -3 ], [ 0, 8, 0 ], [ 0, -8, 0 ] ];
var controls3 = [ [ 2.8, -0.5, 3 ], [ 24.8, -0.5, 3 ], [ 0, 8, 0 ],[ 0, -8, 0 ] ];
var controls4 = [ [ 2.8, -0.5, -3 ], [ 24.8, -0.5, -3 ], [ 0, 8, 0 ],[ 0, -8, 0 ] ];
var controls5 = [ [ 2.8, 0, -3 ], [ 2.8, -0.5, -3 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ];
var controls6 = [ [ 24.8, 0, -3 ], [ 24.8, -0.5, -3 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ];
var controls7 = [ [ 2.8, 0, 3 ], [ 2.8, -0.5, 3 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ];
var controls8 = [ [ 24.8, 0, 3 ], [ 24.8, -0.5, 3 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ];
var s1 = CUBIC_HERMITE(S0)(controls1);
var s2 = CUBIC_HERMITE(S0)(controls2);
var s3 = CUBIC_HERMITE(S0)(controls3);
var s4 = CUBIC_HERMITE(S0)(controls4);
var s5 = CUBIC_HERMITE(S0)(controls5);
var s6 = CUBIC_HERMITE(S0)(controls6);
var s7 = CUBIC_HERMITE(S0)(controls7);
var s8 = CUBIC_HERMITE(S0)(controls8);
var diaframma1 = BEZIER(S1)([ s1, s2 ]);
var diaframma2 = BEZIER(S1)([ s3, s4 ]);
var diaframma3 = BEZIER(S1)([ s1, s3 ]);
var diaframma4 = BEZIER(S1)([ s2, s4 ]);
var diaframma5 = BEZIER(S1)([ s5, s7 ]);
var diaframma6 = BEZIER(S1)([ s6, s8 ]);
diaframma1 = MAP(diaframma1)(domain2);
diaframma2 = MAP(diaframma2)(domain2);
diaframma3 = MAP(diaframma3)(domain2);
diaframma4 = MAP(diaframma4)(domain2);
diaframma5 = MAP(diaframma5)(domain2);
diaframma6 = MAP(diaframma6)(domain2);
/*
 * var controls =
 * [[0,0],[-1,2],[1,4],[2,3],[1,1],[1,2],[2.5,1],[2.5,3],[4,4],[5,0]]; var knots =
 * [0,0,0,0,1,2,3,4,5,6,7,7,7,7]; var nubspline = NUBSPLINE(3)(knots)(controls);
 */
var diaframma = COLOR([ 250 / 255, 128 / 255, 114 / 255 ])(
    STRUCT([ diaframma1, diaframma2, diaframma3, diaframma4, diaframma5,diaframma6 ]));
diaframma = T([ 1 ])([ 0.4 ])(diaframma);
var apparatoRespiratorio = STRUCT([ polmone, polmone2, trachea, bronchi,diaframma ]);
DRAW(apparatoRespiratorio);