const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 4 when inputs are 1.4 and 2.6', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 2.6), 4);
    });
  });

  describe('SUBTRACT', () => {
    it('should return 4 when inputs are 5.5 and 2.1 (rounded first before subtracting)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 5.5, 2.1), 4);
    });
  });

  describe('DIVIDE', () => {
    it('should return rounded decimal of quotient', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 8.4, 2), 4);
    });

    it('should return "Error" when divisor is 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5, 0), 'Error');
    });
  });

  describe('Invalid operation', () => {
    it('should return "Invalid type" when type is not an operation', () => {
      assert.strictEqual(calculateNumber('INVALID', 10, 5), 'Invalid type');
    });
  });
});
