const connection = require('../config/database');

module.exports = function (RFCE, callback) {
  connection.query('select DISTINCT a.* from asunto a, asuntosubordinado x, subordinado s where a.IdAsunto= x.IdAsunto and a.Estado = "En progreso." and x.RFCS= s.RFC and s.RFCE="' + RFCE + '"', function (_err, rows) {
    callback(rows);
  });
};
