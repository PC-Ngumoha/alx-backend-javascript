const chai = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');

const expect = chai.expect;

describe('sendPaymentRequestToApi', function() {
  beforeEach(function() {
    sinon.spy(console, 'log');
  });

  afterEach(function() {
    console.log.restore();
  });

  it('Should ensure that sendPaymentRequestToApi(100, 20) returns 120', function() {
    sendPaymentRequestToApi(100, 20);

    expect(console.log.calledWith('The total is: 120')).to.be.true;
    expect(console.log.calledOnce).to.be.true;
  });

  it('Should ensure that sendPaymentRequestToApi(10, 10) returns 20', function() {
    sendPaymentRequestToApi(10, 10);

    expect(console.log.calledWith('The total is: 20')).to.be.true;
    expect(console.log.calledOnce).to.be.true;
  });
});
