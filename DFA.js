const transitionsTable = {};

Object.keys(OPTIONS).forEach(key => {
  transitionsTable[key] = OPTIONS[key]
});



function goNextState(string) {
  let current = transitionsTable['A'] || neww(NFA_TABLE)[0], log = [];
  console.log(Object.keys(current.transitions));
  for (let c in string) {
<<<<<<< HEAD
    for (let char in Object.keys(current.transitions)) {
      console.log(string[c], Object.keys(current.transitions)[char])
        if (string[c] == Object.keys(current.transitions)[char]) {
=======
    
    for (let char in Object.keys(current.transitions)) {
      console.log(current.transitions[Object.keys(current.transitions)[char]]);
        if (string[c] == Object.keys(current.transitions)[char] && current.transitions[Object.keys(current.transitions)[char]] !== ' ') {
>>>>>>> 8b08c833f2ef019dff1d34f73909eb02edf7eadd
            current = transitionsTable[current.transitions[Object.keys(current.transitions)[char]]];
            log.push(current);
        }
    }
<<<<<<< HEAD
    // if (current.isAcceptState === true) break;
=======
    // break;
    // if (current.isAcceptState === true) break;
    
>>>>>>> 8b08c833f2ef019dff1d34f73909eb02edf7eadd
  }
  return {
    state: current.isAcceptState,
    log: log
  };
}

function DFAValidate (string) {
  let bool
  string.split('').forEach(strElement => {
   bool = false;
    aplhabet.forEach(alpElement => {
      if (strElement == alpElement) {
        bool = true; 
        return true;
      }
    });
   if (bool == false){ 
     return false;
    }
  });
  return true
} 

