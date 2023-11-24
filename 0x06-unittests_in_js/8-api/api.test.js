const request = require('request');
const { expect } = require('chai');

describe('Index page', function() {
  const requestUrl = 'http://localhost:7865/';

  it('Should test that the server returns the correct status code on request', function(done) {
    request(requestUrl, (error, response, body) => {
      expect(response.statusCode === 200).to.be.true;
      done();
    });
  });

  it('Should test that the server returns the correct message on request', function(done) {
    const expectedMessage = 'Welcome to the payment system';
    request(requestUrl, (error, response, body) => {
      expect(response.body === expectedMessage).to.be.true;
      done();
    });
  });
});