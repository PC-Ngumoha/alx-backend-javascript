const request = require('request');
const { expect } = require('chai');

describe('Index page', function() {
  const requestUrl = 'http://localhost:7865/';

  describe('GET /', function() {
    it('Should return correct status code', function(done) {
      request(requestUrl, (error, response, body) => {
        expect(response.statusCode === 200).to.be.true;
        done();
      });
    });

    it('Should return the correct message', function(done) {
      const expectedMessage = 'Welcome to the payment system';
      request(requestUrl, (error, response, body) => {
        expect(response.body === expectedMessage).to.be.true;
        done();
      });
    });
  });
  
  describe('GET /cart/:id - id is a number', function() {
    it('Should return a status code of 200', function(done) {
      request(`${requestUrl}cart/12`, (error, response, body) => {
        expect(response.statusCode === 200).to.be.true;
        done();
      });
    });
  });
  
  describe('GET /cart/:id - id is not a number', function() {
    it('Should test that the GET /cart/:id route returns a 404 status code when id is not a number', function(done) {
      request(`${requestUrl}/cart/hello`, (error, response, body) => {
        expect(response.statusCode === 404).to.be.true;
        done();
      });
    });
  });
});