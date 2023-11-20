const displayMessage = require('../0-console');

test('displayMessage() function actually prints to the console', () => {
  const writeSpy = jest.spyOn(process.stdout, 'write');
  const message = 'Hello World';

  displayMessage(message);

  expect(writeSpy).toHaveBeenCalled();
  expect(writeSpy).toHaveBeenCalledWith(message + '\n');
  expect(writeSpy).toHaveBeenCalledTimes(1);
});
