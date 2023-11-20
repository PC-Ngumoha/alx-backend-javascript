/**
 * displayMessage()
 * @abstract Displays a message on stdout
 * @author Prince C. Ngumoha
 * @param {*} message
 */
const displayMessage = (message) => {
  process.stdout.write(`${message}\n`);
};

module.exports = displayMessage;
