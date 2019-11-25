const connection = require('../config/database');

module.exports = function (idAsunto, ruta) {
  const asignDoc = {
    IdAsunto: idAsunto,
    ruta: ruta
  };
  connection.query('INSERT INTO documento SET ?', asignDoc, function (_err, _rows) {
  });
};
