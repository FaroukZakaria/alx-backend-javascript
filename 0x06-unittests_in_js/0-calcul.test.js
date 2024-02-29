const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
    it('should return the sum of two rounded numbers', function() {
        assert.strictEqual(calculateNumber(1.4, 2.6), 4);
        assert.strictEqual(calculateNumber(0, 0), 0);
        assert.strictEqual(calculateNumber(-1.4, -2.6), -4);
        assert.strictEqual(calculateNumber(-1.4, 2.6), 2);
        assert.strictEqual(calculateNumber(1.4, -2.6), -2);
    });
});
