const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./4-payment.js');
const Utils = require('./utils.js');

describe('sendPaymentRequestToApi', () => {
    let consoleLogStub;
    let calculateNumberStub;

    beforeEach(() => {
        calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
        consoleLogStub = sinon.spy(console, 'log');
    });

    afterEach(() => {
        calculateNumberStub.restore();
        consoleLogStub.restore();
    });

    it('should call Utils.calculateNumber with correct arguments', () => {
        sendPaymentRequestToApi(100, 20);
        expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    });

    it('should log the correct message to the console', () => {
        sendPaymentRequestToApi(100, 20);
        expect(consoleLogStub.calledOnceWithExactly('The total is: 10')).to.be.true;
    });
});
