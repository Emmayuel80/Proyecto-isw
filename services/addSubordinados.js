const connection = require('../config/database');

module.exports = function (req) {
  if (Array.isArray(req.body.RFCS)) {
    for (let i = 0; i < req.body.RFCS.length; i++) {
      var element = req.body.RFCS[i];
      var asignAsunto = {
        IdAsunto: req.params.IdAsunto,
        RFCS: element
      };
      console.log(asignAsunto);
      connection.query('INSERT INTO asuntosubordinado SET ?', asignAsunto, function (_err, _rows) {
      });
    }
  } else {
    var asignAsuntoSimple = {
      IdAsunto: req.params.IdAsunto,
      RFCS: req.body.RFCS
    };
    console.log(asignAsunto);
    connection.query('INSERT INTO asuntosubordinado SET ?', asignAsuntoSimple, function (_err, _rows) {
    });
  }
};
