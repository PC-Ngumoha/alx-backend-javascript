/**
 * @module 3-payment.js
 */
const Utils = require('./utils');

/**
 * @function sendPaymentRequestToApi
 * 
 * @author Prince C. Ngumoha
 * 
 * @param {*} totalAmount
 * @param {*} totalShipping
 * 
 * @returns totalAmount + totalShipping
 */
function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const sum = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${sum}`);
}

module.exports = sendPaymentRequestToApi;
