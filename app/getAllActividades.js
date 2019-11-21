const connection = require('../config/database');

module.exports = function (IdAsunto, callback) {
  connection.query('SELECT a.* from actividad a where a.IdAsunto =' + IdAsunto, function (_err, _rows) {
    callback(_rows);
  });
};
