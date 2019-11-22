const connection = require('../config/database');
const async = require('async');
var rechazo = [];
module.exports = function (RFCE, callback) {
  require('./getAsuntosEnProgreso')(RFCE, (asuntos) => {
    async.forEachOf(asuntos, function (dataElement, i, innerCallback) {
      connection.query('Select x.descripcion, s.nombre, a.* from asunto a, asuntorechazado x, subordinado s where x.rfcs=s.rfc and x.idasunto=a.idasunto and a.idasunto="' + dataElement.IdAsunto + '"', function (_err, _rows) {
        if (!_err || _rows.length !== 0) {
          rechazo[i] = _rows;
          innerCallback(null);
        } else {
          console.log('Error while performing Query');
          innerCallback(_err);
        };
      });
    }, function (err) {
      if (err) {
        // handle the error if the query throws an error
      } else {
        callback(rechazo);
      }
    });
  });
};
