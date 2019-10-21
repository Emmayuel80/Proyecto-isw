/* eslint-disable no-undef */
//  Test para probar mocha framework
const assert = require('assert');
const div = require('../services/division');
const handleOperation = require('../services/handleOperation');
const mult = require('../services/multiplicacion');
const sum = require('../services/suma');
const res = require('../services/resta');
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

describe('sum tests ', function () {
  var _numberA;
  var _numberB;

  it('should the sum of 2 numbers', function () {
    _numberA = 6;
    _numberB = 2;
    var result = sum(_numberA, _numberB);

    assert.strictEqual(result, 8);
  });
});

describe('sub tests ', function () {
  var _numberA;
  var _numberB;

  it('should the sub of 2 numbers', function () {
    _numberA = 6;
    _numberB = 2;
    var result = res(_numberA, _numberB);

    assert.strictEqual(result, 4);
  });
});

describe('Operation handler test ', function () {
  var _numberA;
  var _numberB;
  var result;

  it('should return the div of 2 numbers', function () {
    _numberA = '6';
    _numberB = '2';
    result = handleOperation(_numberA, _numberB, '4');

    assert.strictEqual(result, 3);
  });

  it('should return the sum of 2 numbers', function () {
    _numberA = '4';
    _numberB = '5';
    result = handleOperation(_numberA, _numberB, '1');

    assert.strictEqual(result, 9);
  });

  it('should return the sub of 2 numbers', function () {
    _numberA = '7';
    _numberB = '6';
    result = handleOperation(_numberA, _numberB, '2');

    assert.strictEqual(result, 1);
  });
  it('should return 0', function () {
    _numberA = '2';
    _numberB = '0';
    result = handleOperation(_numberA, _numberB, '3');

    assert.strictEqual(result, 0);
  });
  it('should return undefined for operation equals 5', function () {
    _numberA = '2';
    _numberB = '0';
    result = handleOperation(_numberA, _numberB, '5');

    assert.strictEqual(result, undefined);
  });
});

describe('test de multiplicacion', () => {
  var _numberA = '2';
  var _numberB = '4';
  it('multiplica 2 numeros', () => {
    result = mult(_numberA, _numberB);

    assert.strictEqual(result, 8);
  });
});
