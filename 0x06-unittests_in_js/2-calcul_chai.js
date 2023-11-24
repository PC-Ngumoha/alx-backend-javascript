/**
 * calculateNumber()
 * @abstract Improved version of calculateNumber
 * @author Prince C. Ngumoha
 * 
 * @param {*} type
 * @param {*} a
 * @param {*} b
 */
function calculateNumber(type, a, b) {
  let output;
  if (type === 'SUM') {
    output = Math.round(a) + Math.round(b);
  } else if (type === 'SUBTRACT') {
    output = Math.round(a) - Math.round(b);
  } else if (type === 'DIVIDE') {
    if (Math.round(b) === 0) return 'Error';
    output = Math.round(a) / Math.round(b);
  }
  return output;
}

module.exports = calculateNumber;
