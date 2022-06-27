"use strict";

var _require = require('rxjs'),
    of = _require.of;

var _require2 = require('rxjs/operators'),
    max = _require2.max,
    map = _require2.map; // Liste de points


var source = of({
  x: 10.5,
  y: -10.6
}, {
  x: 5.5,
  y: 8.3
}, {
  x: -7.3,
  y: 3.3
}, {
  x: 8.9,
  y: -2.6
}); // source.subscribe({
//     next: value => console.log('next:', value),
//     error: err => console.log('error:', err),
//     complete: () => console.log('the end'),
// });
// const mappingData = source.pipe(
//     map( ({x, y}) => Math.sqrt(x**2 + y**2))
// )
// mappingData.subscribe(console.log)

var mappingData = source.pipe(max(function (p1, p2) {
  return Math.sqrt(Math.pow(p1.x, 2) + Math.pow(p1.y, 2) > Math.sqrt(Math.pow(p2.x, 2) + Math.pow(p2.y, 2)));
}));
mappingData.subscribe(console.log);