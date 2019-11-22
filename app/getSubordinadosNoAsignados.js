const connection = require('../config/database');

module.exports = function (idAsunto, rfc, callback) {
  connection.query(' Select DISTINCT s.* from subordinado s, asunto a, asuntosubordinado x, encargado e where e.rfc=s.rfce and s.rfc!=x.rfcs and x.idasunto=a.idasunto and a.idasunto=' + idAsunto + ' and e.rfc="' + rfc + '"', function (_err, _rows) {
    callback(_rows);
  });
};
