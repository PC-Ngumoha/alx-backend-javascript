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
});

describe('Cart Page', function() {
  const requestUrl = 'http://localhost:7865/cart';
  describe('GET /:id - id is a number', function() {
    it('Should return a status code of 200', function(done) {
      request(`${requestUrl}/12`, (error, response, body) => {
        expect(response.statusCode === 200).to.be.true;
        done();
      });
    });

    it('Should return the correct message', function(done) {
      const expectedMessage = 'Payment methods for cart 12';
      request(`${requestUrl}/12`, (error, response, body) => {
        expect(response.body === expectedMessage).to.be.true;
        done();
      });
    })
  });
  
  describe('GET /cart/:id - id is not a number', function() {
    it('Should return a status code of 404', function(done) {
      request(`${requestUrl}/hello`, (error, response, body) => {
        expect(response.statusCode === 404).to.be.true;
        done();
      });
    });

    it('Should not permit floating point numbers', function(done) {
      request(`${requestUrl}/12.34`, (error, response, body) => {
        expect(response.statusCode === 404).to.be.true;
        done();
      });
    });
  });
});