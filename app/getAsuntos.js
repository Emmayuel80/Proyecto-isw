const connection = require('../config/database');

module.exports = function (req, callback) {
  connection.query('select a.* from asunto a, subordinado s where a.IdAsunto in ( SELECT h.IdAsunto from asuntosubordinado h WHERE h.RFCS = s.RFC and NOT EXISTS ( SELECT x.IdAsunto from asuntorechazado x WHERE x.RFCS=s.RFC and x.IdAsunto=h.IdAsunto)) and s.RFC="' + req.RFC + '" and a.Estado="En progreso."', function (_err, _rows) {
    callback(_rows);
  });
};
