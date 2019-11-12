const db = require('../config/database');
const pool = db.getPool();

module.exports = function (req) {
  pool.getConnection(function (_err, connection) {
    connection.query('select idAsunto from asunto order by idAsunto DESC', function (_err, rows) {
      var lastId = Number(rows[0].idAsunto);
      var newAsunto = {
        IdAsunto: (lastId + 1),
        Actividad: req.body.Actividad,
        Descripcion: req.body.Descripcion,
        FechaCreacion: new Date(),
        DiasTermino: req.body.DiasTermino,
        RFCS: req.body.RFCS
      };
      var insertQuery = 'INSERT INTO asunto SET ?';
      console.log(newAsunto);
      connection.query(insertQuery, newAsunto, function (_err, _rows) {
      });
    });
  });
};
