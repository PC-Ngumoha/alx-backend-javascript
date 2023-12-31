const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');


describe('getPaymentTokenFromAPI', function() {
  it('Should evaluate the return value of async function', function(done) {
    getPaymentTokenFromAPI(true).then((data) => {
      expect(data).to.deep.equal({data: 'Successful response from the API'});
      done();
    });
    
  });
});