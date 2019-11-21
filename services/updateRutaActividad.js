const connection = require('../config/database');

module.exports = function (idActividad, ruta) {
  connection.query('UPDATE actividad Set ruta = "' + ruta + '" WHERE IdActividad = ' + parseInt(idActividad) + '', function (_err, _rows) {
  });
};
