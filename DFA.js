const transitionsTable = {};

Object.keys(OPTIONS).forEach(key => {
  transitionsTable[key] = OPTIONS[key]
});



function goNextState(string) {
  let current = transitionsTable['0'], log = [];
  
  for (let c in string) {
    
    for (let char in Object.keys(current.transitions)) {
      console.log(current.transitions[Object.keys(current.transitions)[char]]);
        if (string[c] == Object.keys(current.transitions)[char] && current.transitions[Object.keys(current.transitions)[char]] !== ' ') {
            current = transitionsTable[current.transitions[Object.keys(current.transitions)[char]]];
            log.push(current);
        }
    }
    // break;
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

