const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
    let consoleLogStub;

    beforeEach(() => {
        consoleLogStub = sinon.stub(console, 'log');
    });

    afterEach(() => {
        consoleLogStub.restore();
    });

    it('should log the correct message for totalAmount=100 and totalShipping=20', () => {
        sendPaymentRequestToApi(100, 20);
        expect(consoleLogStub.calledOnceWithExactly('The total is: 120')).to.be.true;
    });

    it('should log the correct message for totalAmount=10 and totalShipping=10', () => {
        sendPaymentRequestToApi(10, 10);
        expect(consoleLogStub.calledOnceWithExactly('The total is: 20')).to.be.true;
    });
});
