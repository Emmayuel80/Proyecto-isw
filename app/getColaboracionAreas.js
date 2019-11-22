const connection = require('../config/database');
const async = require('async');
var collab = [];

module.exports = function (actividades, callback) {
  async.forEachOf(actividades, function (dataElement, i, innerCallback) {
    connection.query('Select a.nombre, x.IdActividad from area a, asuntoinfo x where exists (select s.idasunto from asunto s  where a.idarea=x.idarea and x.IdActividad=' + dataElement.IdActividad + ' and s.idasunto=' + dataElement.IdAsunto + ')', function (_err, _rows) {
      if (!_err || _rows.length !== 0) {
        collab[i] = _rows;
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
      callback(collab);
    }
  });
};
