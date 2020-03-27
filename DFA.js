class State {
    constructor(name, transitions, isAcceptState) {
      this.name          = name;
      this.transitions   = transitions
      this.isAcceptState = isAcceptState
    }
  }
  
  const q0 = new State();
  {
    q0.name = 'q0';
    q0.isAcceptState = false;
    q0.transitions = {
      0: 'q1',
      1: 'q0'
    }
  }
  
  const q1 = new State();
  {
    q1.name = 'q1';
    q1.isAcceptState = false;
    q1.transitions = {
      0: 'q1',
      1: 'q2'
    }
  }
  
  
  const q2 = new State();
  {
    q2.name = 'q2';
    q2.isAcceptState = false;
    q2.transitions = {
      0: 'q3',
      1: 'q0'
    }
  }
  
  const q3 = new State();
  {
    q3.name = 'q3';
    q3.isAcceptState = false;
    q3.transitions = {
      0: 'q1',
      1: 'q4'
    }
  }
  const q4 = new State();
  {
    q4.name = 'q4';
    q4.isAcceptState = true;
    q4.transitions = {
      0: 'q4',
      1: 'q4'
    }
  }
  
  const transitionsTable = {
    q0: q0,
    q1: q1,
    q2: q2,
    q3: q3,
    q4: q4,
  }
  
  
  // const testingString = '11011100013131313010100110110102';
  
  
  function goNextState(string) {
    let current = q0, log = [];
    
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
  