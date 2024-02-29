const request = require('request');
const { expect } = require('chai');

describe('Cart page', () => {
  it('should return correct status code when :id is a number', (done) => {
    request.get('http://localhost:7865/cart/123', (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return 404 status code when :id is NOT a number', (done) => {
    request.get('http://localhost:7865/cart/abc', (error, response) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});
