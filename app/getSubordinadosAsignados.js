const connection = require('../config/database');

module.exports = function (idAsunto, rfc, callback) {
  connection.query('Select s.nombre from subordinado s where not exists( select a.idasunto from asuntorechazado a where a.rfcs=s.rfc and a.idAsunto=' + idAsunto + ') and exists (select x.idasunto from asuntosubordinado x where x.rfcs=s.rfc and x.idasunto=' + idAsunto + ') and s.rfce="' + rfc + '"', function (_err, _rows) {
    callback(_rows);
  });
};
