const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 4 when inputs are 1.4 and 2.6', () => {
      expect(calculateNumber('SUM', 1.4, 2.6)).to.equal(4);
    });
  });

  describe('SUBTRACT', () => {
    it('should return 4 when inputs are 5.5 and 2.1 (rounded first before subtracting)', () => {
      expect(calculateNumber('SUBTRACT', 5.5, 2.1)).to.equal(4);
    });
  });

  describe('DIVIDE', () => {
    it('should return rounded decimal of quotient', () => {
      expect(calculateNumber('DIVIDE', 8.4, 2)).to.equal(4);
    });

    it('should return "Error" when divisor is 0', () => {
      expect(calculateNumber('DIVIDE', 5, 0)).to.equal('Error');
    });
  });

  describe('Invalid operation', () => {
    it('should return "Invalid type" when type is not an operation', () => {
      expect(calculateNumber('INVALID', 10, 5)).to.equal('Invalid type');
    });
  });
});
