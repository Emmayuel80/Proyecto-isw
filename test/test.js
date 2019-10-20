/* eslint-disable no-undef */
//  Test para probar mocha framework
const assert = require('assert');
const div = require('../services/division');
const handleOperation = require('../services/handleOperation');
describe('divider tests ', function () {
  var _numberA;
  var _numberB;

  it('should return numberA divided by numberB', function () {
    _numberA = 6;
    _numberB = 2;
    var result = div(_numberA, _numberB);

    assert.strictEqual(result, 3);
  });

  it('should return 0 for numberB equals 0', function () {
    _numberA = 2;
    _numberB = 0;
    var result = div(_numberA, _numberB);

    assert.strictEqual(result, 0);
  });
});

describe('Operation handler test ', function () {
  var _numberA;
  var _numberB;

  it('should return the div of 2 numbers', function () {
    _numberA = 6;
    _numberB = 2;
    var result = handleOperation(_numberA, _numberB, '4');

    assert.strictEqual(result, 3);
  });

  it('should return undefined for operation equals 5', function () {
    _numberA = 2;
    _numberB = 0;
    var result = handleOperation(_numberA, _numberB, '5');

    assert.strictEqual(result, undefined);
  });
});
