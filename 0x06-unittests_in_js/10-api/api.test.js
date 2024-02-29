const request = require('request');
const { expect } = require('chai');

describe('Login endpoint', () => {
  it('should return the message Welcome :username', (done) => {
    const userData = { userName: 'John' };
    request.post({
      url: 'http://localhost:7865/login',
      body: userData,
      json: true
    }, (error, response, body) => {
      expect(body).to.equal('Welcome John');
      done();
    });
  });
});

describe('Available payments endpoint', () => {
  it('should return an object with correct payment methods', (done) => {
    request.get('http://localhost:7865/available_payments', (error, response, body) => {
      const expectedPaymentMethods = {
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      };
      expect(JSON.parse(body)).to.deep.equal(expectedPaymentMethods);
      done();
    });
  });
});
