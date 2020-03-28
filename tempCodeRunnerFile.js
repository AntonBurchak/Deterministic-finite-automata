const q0 = 
{
  name: 'q0',
  isAcceptState: false,
  transitions: {
    0: 'q1',
    1: 'q0'
  }
}

const q1 =
{
  name: 'q1',
  isAcceptState: false,
  transitions: {
    0: 'q1',
    1: 'q2'
  }
}


const q2 = 
{
  name: 'q2',
  isAcceptState: false,
  transitions: {
    0: 'q3',
    1: 'q0'
  }
}

const q3 =
{
  name: 'q3',
  isAcceptState: false,
  transitions: {
    0: 'q1',
    1: 'q4'
  }
}
const q4 =
{
  name: 'q4',
  isAcceptState: true,
  transitions: {
    0: 'q4',
    1: 'q4'
  }
}



const aplhabet = [0, 1];

const OPTIONS = {
  q0: {
    transitions: {
      0: 'q1',
      1: 'q0'
    },
    isAcceptState: false
  },
  q1: {
    transitions: {
      0: 'q1',
      1: 'q2'
    },
    isAcceptState: false
  },
  q2: {
    transitions: {
      0: 'q3',
      1: 'q0'
    },
    isAcceptState: false
  },
  q3: {
    transitions: {
      0: 'q1',
      1: 'q4'
    },
    isAcceptState: false
  },
  q4: {
    transitions: {
      0: 'q5',
      1: 'q5'
    },
    isAcceptState: true
  }
}

const transitionsTable = {
  q0: q0,
  q1: q1,
  q2: q2,
  q3: q3,
  q4: q4,
}
console.log(Object.keys(OPTIONS))
Object.keys(OPTIONS).forEach(key => {
  transitionsTable[key] = OPTIONS[key]
});

console.log(transitionsTable);
function goNextState(string) {
  let current = transitionsTable.q0, log = [];
  
  for (let c in string) {
    for (let char in Object.entries(current.transitions)) {
        if (string[c] == char) {
            current = transitionsTable[current.transitions[char]];
            log.push(current);
        }
    }
    if (current.isAcceptState === true) break;
  }
  return {
    state: current.isAcceptState,
    log: log
  };
}
console.log(goNextState('01101'))