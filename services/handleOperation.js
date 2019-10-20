const div = require('./division');
const mult = require('./multiplicacion');
const sum = require('./suma');
const res = require('./resta');
module.exports = function (numA, numB, operation) {
  let result;
  if (operation === 1) {
    result = sum(numA, numB);
  }
  if (operation === 2) {
    result = res(numA, numB);
  }
  if (operation === 3) {
    result = mult(numA, numB);
  } else {
    result = div(numA, numB);
  }
  return result;
};
