const connection = require('../config/database');

module.exports = function (idAsunto, rfc) {
  connection.query('DELETE FROM asuntosubordinado WHERE IdAsunto =' + parseInt(idAsunto) + ' AND RFCS ="' + rfc + '"', function (_err, _rows) {
  });
};
