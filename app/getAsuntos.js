const connection = require('../config/database');

module.exports = function (req, callback) {
  connection.query('select Actividad, Descripcion, IdAsunto from asunto where RFCS= "' + req.RFC + '"', function (_err, _rows) {
    callback(_rows);
  });
};
