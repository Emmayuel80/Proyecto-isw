const connection = require('../config/database');

module.exports = function (req, callback) {
  connection.query('select DISTINCT a.* from asunto a, asuntosubordinado x, subordinado s where a.IdAsunto= x.IdAsunto and x.RFCS= s.RFC and s.RFCE="' + req.RFC + '"', function (_err, _rows) {
    callback(_rows);
  });
};
