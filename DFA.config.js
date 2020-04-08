<<<<<<< HEAD
const aplhabet = ['a', 'b'];
=======
const aplhabet = [0, 1];
>>>>>>> 8b08c833f2ef019dff1d34f73909eb02edf7eadd

const OPTIONS = {
   A:
    { name: 'A',
      transitions: { a: 'AB', b: 'AF' },
      isAcceptState: false },
   AB:
    { name: 'AB',
      transitions: { a: 'AB', b: 'ACF' },
      isAcceptState: false },
   AF:
    { name: 'AF',
      transitions: { a: 'ABG', b: 'AEF' },
      isAcceptState: false },
   ACF:
    { name: 'ACF',
      transitions: { a: 'ABG', b: 'ADEF' },
      isAcceptState: false },
   ABG:
    { name: 'ABG',
      transitions: { a: 'AB', b: 'ACEF' },
      isAcceptState: false },
   AEF:
    { name: 'AEF',
      transitions: { a: 'ABG', b: 'AEF' },
      isAcceptState: true },
   ADEF:
    { name: 'ADEF',
      transitions: { a: 'ABEG', b: 'AEF' },
      isAcceptState: true },
   ACEF:
    { name: 'ACEF',
      transitions: { a: 'ABG', b: 'ADEF' },
      isAcceptState: true },
   ABEG:
    { name: 'ABEG',
      transitions: { a: 'AB', b: 'ACEF' },
      isAcceptState: true } 
}
// OPTIONS = JSON.parse(OPTIONS);
