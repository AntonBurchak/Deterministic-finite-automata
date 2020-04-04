const aplhabet = ['a', 'b'];

const OPTIONS = {
  '0': {
    name: '0',
    transitions: {
      a: '0b1a',
      b: '1b0a'
    },
    isAcceptState: false
  },
  '0b1a': {
    name: '0b1a',
    transitions: {
      a: '0b2a',
      b: '1b1a'
    },
    isAcceptState: false
  },
  '1b0a': {
    name: '1b0a',
    transitions: {
      a: '1b1a',
      b: '2b0a'
    },
    isAcceptState: false
  },
  '0b2a': {
    name: '0b2a',
    transitions: {
      a: '0b2a',
      b: '1b2a'
    },
    isAcceptState: false
  },
  '1b1a': {
    name: '1b1a',
    transitions: {
      a: '1b2a',
      b: '2b1a'
    },
    isAcceptState: false
  },
  '2b0a': {
    name: '2b0a',
    transitions: {
      a: '2b1a',
      b: '3b0a'
    },
    isAcceptState: false
  },
  '1b2a': {
    name: '1b2a',
    transitions: {
      a: '1b2a',
      b: '2b2a'
    },
    isAcceptState: false
  },
  '2b1a': {
    name: '2b1a',
    transitions: {
      a: '2b2a',
      b: '3b1a'
    },
    isAcceptState: false
  },
  '3b0a': {
    name: '3b0a',
    transitions: {
      a: '3b1a',
      b: 'er'
    },
    isAcceptState: false
  },
  '2b2a': {
    name: '2b2a',
    transitions: {
      a: '2b2a',
      b: '3b2a'
    },
    isAcceptState: false
  },
  '3b1a': {
    name: '3b1a',
    transitions: {
      a: '3b2a',
      b: 'er'
    },
    isAcceptState: false
  },
  '3b2a': {
    name: '3b2a',
    transitions: {
      a: '3b2a',
      b: 'er'
    },
    isAcceptState: true
  },
  'er': {
    name: 'er',
    transitions: {
      a: 'er',
      b: 'er'
    },
    isAcceptState: false
  }
}

