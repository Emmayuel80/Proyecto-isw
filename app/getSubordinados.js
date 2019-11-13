const db = require('../config/database');
const pool = db.getPool();

module.exports = function (req, callback) {
  pool.getConnection(function (_err, connection) {
    connection.query("select * from subordinado where RFCE = '" + req.RFC + "'", function (_err, _rows) {
      return callback(_rows);
    });
  });
};
