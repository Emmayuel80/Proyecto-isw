/* eslint-disable no-undef */
//  Test para probar mocha framework
const assert = require('assert');
const div = require('../services/division');

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
