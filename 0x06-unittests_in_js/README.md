# Unittests In JS
## Useful Points

- _Mocha_ is a **test runner**. In essence, this means that it is a tool which helps us run and execute our tests.

- _Chai_ is an **Assertion Library** which allows for greater readability. An **Assertion Library** is a tool which is used to help us make tests about the nature or state of code in the program. i.e They help us test our assertions about the state of our program.

- _SinonJS_ helps us to create **spies**, **stubs** and **mocks** in order to effciently test our code. Where:
  + **Spies** are a mechanism which helps us to create fake functions in order to track execution.
  + **Stubs** are mechanisms which help us to replace functions. In this process, we can set the replaced function to return anything we want it to so that we can test a plethora of scenarios. The major difference between a stub and a spy is that with a spy you're simply tracking the way said function is executed but with a stub you're the whole of said function. This is mostly used when we:
    - want to test external calls (e.g HTTP requests or DB transactions)
    - want to trigger different outcomes for a piece of code.
  + **Mocks** are fake methods with preprogrammed behaviour and preprogrammed expectations.

## Useful Links

- [How to test Node.js Apps using Mocha.js, SinonJS and Chai](https://www.digitalocean.com/community/tutorials/how-to-test-nodejs-apps-using-mocha-chai-and-sinonjs)

- [Routing in express.js](https://expressjs.com/en/guide/routing.html)

- [SinonJS Documentation](https://sinonjs.org/releases/v7/)

- [ChaiJS Documentation](https://www.chaijs.com/api/)

- [MochaJS Documentation](https://mochajs.org/)

- [chai-as-promised: Chai assertions for promises](https://github.com/domenic/chai-as-promised)

- [Assert - Node.js default assertion library documentation](https://nodejs.org/api/assert.html#assertequalactual-expected-message)
