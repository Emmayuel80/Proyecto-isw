const db = require('../config/database');
const pool = db.getPool();

module.exports = function (req, callback) {
  pool.getConnection(function (_err, connection) {
    connection.query('select Actividad, Descripcion from asunto where RFCS= "' + req.RFC + '"', function (_err, _rows) {
      callback(_rows);
    });
  });
};
