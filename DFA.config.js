const aplhabet = ['0', '1'];

const OPTIONS = {
  q0: {
    name: 'q0',
    transitions: {
      0: 'q1',
      1: 'q0'
    },
    isAcceptState: false
  },
  q1: {
    name: 'q1',
    transitions: {
      0: 'q1',
      1: 'q2'
    },
    isAcceptState: false
  },
  q2: {
    name: 'q2',
    transitions: {
      0: 'q3',
      1: 'q0'
    },
    isAcceptState: false
  },
  q3: {
    name: 'q3',
    transitions: {
      0: 'q1',
      1: 'q4'
    },
    isAcceptState: false
  },
  q4: {
    name: 'q4',
    transitions: {
      0: 'q4',
      1: 'q4'
    },
    isAcceptState: true
  }
}

