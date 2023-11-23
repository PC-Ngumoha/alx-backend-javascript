const assert = require('assert');
const calculateNumber = require('./1-calcul');

const symbols = {SUM: '+', SUBTRACT: '-', DIVIDE: '/'};

describe('calculateNumber', function() {
  tests = [
    {type: 'SUM', a: 1.4, b: 4.5, expected: 6},
    {type: 'SUBTRACT', a: 1.4, b: 4.5, expected: -4},
    {type: 'DIVIDE', a: 1.4, b: 4.5, expected: 0.2},
    {type: 'DIVIDE', a: 1.4, b: 0.2, expected: 'Error'},
    {type: 'MULTIPLY', a: 1.4, b: 4.5, expected: undefined},
  ];

  tests.forEach(({type, a, b, expected}) => {
    it(`Should test that ${a} ${symbols[type]} ${b} will give ${expected}`, function() {
      assert.strictEqual(calculateNumber(type, a, b), expected);
    });
  });
});
