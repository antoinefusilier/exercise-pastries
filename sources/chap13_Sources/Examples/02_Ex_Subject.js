const { Subject } = require('rxjs');
 
const subject = new Subject();
 
subject.subscribe({
  next: (v) => console.log(`observerA: ${v}`),
});
subject.subscribe({
  next: (v) => console.log(`observerB: ${v}`),
});
 
// observers 
subject.next(1);
subject.next(2);