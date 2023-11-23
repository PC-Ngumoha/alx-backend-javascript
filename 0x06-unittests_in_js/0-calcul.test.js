const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  tests = [
    {a: 1, b: 3, expected: 4},
    {a: 3.14, b: 4.75, expected: 8},
    {a: 6.78, b: 2.31, expected: 9},
    {a: 10, b: 15, expected: 25},
    {a: 7.89, b: 1.23, expected: 9},
    {a: 2.5, b: 3.8, expected: 7},
    {a: 11.2, b: 9.6, expected: 21},
    {a: 14.7, b: 6.2, expected: 21},
    {a: 5, b: 5.5, expected: 11},
    {a: 8.33, b: 12.67, expected: 21},
    {a: 2.9, b: 1.1, expected: 4},
    {a: 13.4, b: 3.7, expected: 17},
    {a: 6, b: 6.49, expected: 12},
    {a: 9.75, b: 5.25, expected: 15},
    {a: 3.33, b: 7.66, expected: 11},
    {a: 16, b: 8.9, expected: 25},
    {a: 1.5, b: 2.5, expected: 5},
    {a: 4.25, b: 4.25, expected: 8},
    {a: 7.1, b: 3.4, expected: 10},
    {a: 14.8, b: 2.2, expected: 17},
    {a: 10.4, b: 6.6, expected: 17},
    {a: 12, b: 11.9, expected: 24},
    {a: 5.6, b: 4.1, expected: 10},
    {a: 9, b: 2.8, expected: 12},
    {a: 8.5, b: 1.5, expected: 11},
    {a: 3, b: 3, expected: 6},
    {a: 6.2, b: 7.8, expected: 14},
    {a: 11.5, b: 4.5, expected: 17},
    {a: 2.3, b: 9.7, expected: 12},
    {a: 7.4, b: 8.6, expected: 16},
    {a: 15.9, b: 3.2, expected: 19},
    {a: -0.49, b: 0.5, expected: 1},
    {a: 1.5, b: -0.49, expected: 2},
    {a: 0, b: -2.51, expected: -3},
    {a: -3.49, b: 1.51, expected: -1},
    {a: -4.499, b: 5.01, expected: 1},
    {a: 8.499, b: -6.499, expected: 2},
    {a: -7.499, b: 7.499, expected: 0},
    {a: 9.499, b: -4.499, expected: 5},
    {a: -10.499, b: 1.499, expected: -9},
    {a: 2.499, b: -2.5, expected: 0}
  ];

  tests.forEach(({a, b, expected}) => {
    it(`Should determine if ${a} + ${b} = ${expected}`, function() {
      assert.strictEqual(calculateNumber(a, b), expected);
    });
  });
});
