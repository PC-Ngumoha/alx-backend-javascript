const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'))

// Made up async function
function aMadeupAsyncFunction(boolValue) {
  return new Promise(function(resolve) {
    setTimeout(function (){
      resolve(boolValue ? 'You get to conquer the world': 'You die in obscurity');
    }, 0)
  });
}

// describe.only tells mocha to have only these sets of tests run
describe.only('AsyncTest', function (){
  it("Should return 'You get to conquer the world' if true is passed", function (){
    // aMadeupAsyncFunction(true, function (prophecy){
    //   expect(prophecy).to.equal('You get to conquer the world');
    //   done();
    // });
    expect(aMadeupAsyncFunction(true)).to.eventually.equal('You get to conquer the world');
  });

  it("Should return 'You die in obscurity' if false is passed", function (){
    // aMadeupAsyncFunction(false, function (prophecy){
    //   expect(prophecy).to.equal('You die in obscurity');
    //   done();
    // });
    expect(aMadeupAsyncFunction(false)).to.eventually.equal('You die in obscurity');
  });
});