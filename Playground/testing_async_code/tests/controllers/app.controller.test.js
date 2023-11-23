const chai = require('chai');
const sinon = require('sinon');
const indexPage = require('../../controllers/app.controller');

const expect = chai.expect;

// Creating a new method to see how we could spy on already existing methods
const user = {
  addUser: (name) => {
    this.name = name;
  }
}

describe('AppController', function () {
  describe('Test getIndexPage', function () {
    it('Should return index page when isLoggedIn returns true', function () {
      let user = {
        isLoggedIn: function (){}
      };

      const isLoggedInStub = sinon.stub(user, 'isLoggedIn').returns(true);

      let req = {
        user: user
      };
      // Replace the 'send' method with a spy from SinonJS
      let res = {
        send: function (){}
      };
      
      // mock res
      const mock = sinon.mock(res);

      mock.expects('send').once().withExactArgs('Uwa Kedu');
      
      indexPage.getIndexPage(req, res);
      // assert that stub function is called at least once.
      expect(isLoggedInStub.calledOnce).to.be.true;

      // Verify that the mock is used in the specified way
      mock.verify();
    });
  });
});

describe('User', function () {
  describe('Test addUser', function () {
    it('Should add a user', function () {
      sinon.spy(user, 'addUser');
      user.addUser('Chukwuemeka Ngumoha');

      console.log(user.addUser);
      expect(user.addUser.calledOnce).to.be.true;
    });
  });
});


