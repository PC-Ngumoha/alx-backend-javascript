/**
 * calculateNumber()
 * @abstract A simple function which sums the rounded-up versions
 * of the provided parameters
 * @author Prince C. Ngumoha
 * @param {*} a
 * @param {*} b  
 */
function calculateNumber(a, b) {
  return Math.round(a) + Math.round(b);
}

module.exports = calculateNumber;
