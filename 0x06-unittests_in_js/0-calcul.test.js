const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('should return 4 when inputting 1.4 and 2.6', () => {
    assert.strictEqual(calculateNumber(1.4, 2.6), 4);
  });
  
  it('should return 0 when inputting 0 and 0', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it('should return -4 when inputting -1.4 and -2.6', () => {
  assert.strictEqual(calculateNumber(-1.4, -2.6), -4);
  });

  it('should return 2 when inputting -1.4 and 2.6', () => {
    assert.strictEqual(calculateNumber(-1.4, 2.6), 2);
  });

  it('should return -2 when inputting 1.4 and -2.6', () => {
    assert.strictEqual(calculateNumber(1.4, -2.6), -2);
  });
});
