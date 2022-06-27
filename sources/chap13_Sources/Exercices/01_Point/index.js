const { of } = require('rxjs');
const { max, map } = require('rxjs/operators');

// Liste de points
const source = of(
    { x: 10.5, y: -10.6 },
    { x: 5.5, y: 8.3 },
    { x: -7.3, y: 3.3 },
    { x: 8.9, y: -2.6 }
);

// source.subscribe({
//     next: value => console.log('next:', value),
//     error: err => console.log('error:', err),
//     complete: () => console.log('the end'),
// });

// const mappingData = source.pipe(
//     map( ({x, y}) => Math.sqrt(x**2 + y**2))
// )

// mappingData.subscribe(console.log)

const mappingData = source.pipe(
    max((p1, p2)=> Math.sqrt( (p1.x**2 + p1.y**2) > Math.sqrt(p2.x**2 + p2.y**2) )  )
)

mappingData.subscribe(console.log)