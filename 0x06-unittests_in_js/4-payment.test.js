const chai = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

const expect = chai.expect;

describe('sendPaymentRequestToApi', function() {
  it('Should ensure that function is called with correct arguments and logs result to console', function() {
    const returnValue = 10;
    sinon.spy(console, 'log');
    sinon.stub(Utils, 'calculateNumber').returns(returnValue);

    sendPaymentRequestToApi(100, 20);

    expect(Utils.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(console.log.calledWith(`The total is: ${returnValue}`)).to.be.true;

    Utils.calculateNumber.restore();
    console.log.restore();
  });
});