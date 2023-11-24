const chai = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

const expect = chai.expect;

describe('sendPaymentRequestToApi', function() {
  it('Should ensure that function makes use of Utils.calculateNumber()', function() {
    sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);

    expect(Utils.calculateNumber.calledOnce).to.be.true;
    expect(Utils.calculateNumber.calledOnceWith('SUM', 100, 20)).to.be.true;

    Utils.calculateNumber.restore();
  });
});
