const db = require('../config/database');
const pool = db.getPool();

module.exports = function (req) {
  pool.getConnection(function (_err, connection) {
    connection.query('select idAsunto from asunto order by idAsunto DESC', function (_err, rows) {
      const newAsunto = {
        IdAsunto: (Number(rows[0].idAsunto) + 1),
        Actividad: req.body.Actividad,
        Descripcion: req.body.Descripcion,
        FechaCreacion: new Date(),
        DiasTermino: ((parseInt(req.body.DiasTermino) === 0) ? -1 : req.body.DiasTermino),
        RFCS: req.body.RFCS,
        Estado: 'En progreso.'
      };
      connection.query('INSERT INTO asunto SET ?', newAsunto, function (_err, _rows) {
      });
    });
  });
};
