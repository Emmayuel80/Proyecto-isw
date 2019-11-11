const connection = require('../config/database');

module.exports = function (req, callback) {
  connection.query('select Actividad, Descripcion from asunto where RFCS= "' + req.RFC + '"', function (_err, _rows) {
    return callback(_rows);
  });
};
