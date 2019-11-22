const connection = require('../config/database');

module.exports = function (idAsunto, rfc, callback) {
  connection.query('select s.* from subordinado s where not EXISTS( SELECT a.IdAsunto from asuntosubordinado a WHERE a.RFCS=s.RFC and a.IdAsunto=' + idAsunto + ') and s.RFCE="' + rfc + '"', function (_err, _rows) {
    callback(_rows);
  });
};
