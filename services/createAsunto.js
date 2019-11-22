const connection = require('../config/database');

module.exports = function (req) {
  connection.query('select idAsunto from asunto order by idAsunto DESC', function (_err, rows) {
    const lastId = Number(rows[0].idAsunto);
    const newAsunto = {
      IdAsunto: (lastId + 1),
      Actividad: req.body.Actividad,
      Descripcion: req.body.Descripcion,
      FechaCreacion: new Date(),
      DiasTermino: ((parseInt(req.body.DiasTermino) === 0) ? -1 : req.body.DiasTermino),
      Estado: 'En progreso.'
    };
    connection.query('INSERT INTO asunto SET ?', newAsunto, function (_err, _rows) {
    });
    if (req.body.asignar === 'on') {
      for (let i = 0; i < req.body.RFCS.length; i++) {
        var element = req.body.RFCS[i];
        var asignAsunto = {
          IdAsunto: (lastId + 1),
          RFCS: element
        };
        connection.query('INSERT INTO asuntosubordinado SET ?', asignAsunto, function (_err, _rows) {
        });
      }
    }
    if (!req.body.asignar) {
      var asignAsuntoE = {
        IdAsunto: (lastId + 1),
        RFCE: req.user.RFC
      };
      connection.query('INSERT INTO asuntoencargado SET ?', asignAsuntoE, function (_err, _rows) {
      });
    }
  });
};
