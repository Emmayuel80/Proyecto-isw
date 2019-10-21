const div = require('./division');
const mult = require('./multiplicacion');
const sum = require('./suma');
const res = require('./resta');
module.exports = function (numA, numB, operation) {
  numA = Number(numA);
  numB = Number(numB);
  operation = Number(operation);
  let result;
  if (operation === 1) {
    result = sum(numA, numB);
  }
  if (operation === 2) {
    result = res(numA, numB);
  }
  if (operation === 3) {
    result = mult(numA, numB);
  }
  if (operation === 4) {
    result = div(numA, numB);
  }
  return checkOperation(operation, result);
};

function checkOperation (operation, result) {
  if (operation > 4 || operation < 1) {
    return undefined;
  } else return result;
}
