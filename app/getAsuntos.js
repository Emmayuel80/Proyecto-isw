const connection = require('../config/database');

module.exports = function () {
  connection.query("select actividad,descripcion from asunto", function (_err, _rows) {
    return _rows;
  });
};