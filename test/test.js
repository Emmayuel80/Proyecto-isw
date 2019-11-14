/* eslint-disable no-undef */
//  Test para probar mocha framework
const assert = require('assert');
const createAsunto = require('../services/createAsunto');
const connection = require('../config/database');
const getAsuntos = require('../app/getAsuntos');
const getSubordinados = require('../app/getSubordinados');

describe('Tests de creacion de asunto', () => {
  it('Debe crear un asunto con el titulo Test y descripcion Test unitario con 0 dias de termino', () => {
    createAsunto({
      body: {
        Actividad: 'Test',
        Descripcion: 'Test unitario',
        DiasTermino: 0,
        RFCS: 'null'
      }
    });
    connection.query('select Actividad from asunto where Actividad = "Test"', function (_err, _rows) {
      assert.strictEqual(_rows[0], 'Test');
    });
  });
});

describe('Test de obtencion de asuntos', () => {
  it('Debe obtener los asuntos del subordinado de ejemplo', () => {
    getAsuntos({
      RFC: 'SUBOR1'
    }, (result) => {
      connection.query('select Actividad from asunto where RFCS= "SUBOR1"', (_err, _rows) => {
        assert.deepStrictEqual(result, _rows);
      });
    });
  });
});

describe('Test de obtencion de subordinados', () => {
  it('Debe obtener los subordinados del encargado de ejemplo', () => {
    getSubordinados({
      RFC: 'FDSK45385'
    }, (result) => {
      connection.query("select * from subordinado where RFCE = 'FDSK45385'", (_err, _rows) => {
        assert.deepStrictEqual(result, _rows);
      });
    });
  });
});
