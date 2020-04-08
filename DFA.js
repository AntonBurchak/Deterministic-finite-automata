const transitionsTable = {};

Object.keys(OPTIONS).forEach(key => {
  transitionsTable[key] = OPTIONS[key]
});



function goNextState(string) {
  let current = transitionsTable['A'] || neww(NFA_TABLE)[0], log = [];
  console.log(Object.keys(current.transitions));
  for (let c in string) {
    for (let char in Object.keys(current.transitions)) {
      console.log(string[c], Object.keys(current.transitions)[char])
        if (string[c] == Object.keys(current.transitions)[char]) {
            current = transitionsTable[current.transitions[Object.keys(current.transitions)[char]]];
            log.push(current);
        }
    }
    // if (current.isAcceptState === true) break;
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

