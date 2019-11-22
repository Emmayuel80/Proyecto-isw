const connection = require('../config/database');

module.exports = function (req, idAsunto, rfcs) {
  connection.query('select idActividad from actividad order by idActividad DESC', function (_err, rows) {
    const lastId = Number(rows[0].idActividad);
    const newActividad = {
      IdActividad: (lastId + 1),
      Nombre: req.body.Nombre,
      Descripcion: req.body.DescripcionActividad,
      IdAsunto: parseInt(idAsunto),
      RFCS: rfcs,
      ruta: null
    };
    connection.query('INSERT INTO actividad SET ?', newActividad, function (_err, _rows) {
    });
    if (req.body.asignar === 'on') {
      var element = req.body.area;
      var asignAsunto = {
        IdActividad: (lastId + 1),
        IdArea: element
      };
      connection.query('INSERT INTO asuntoinfo SET ?', asignAsunto, function (_err, _rows) {
      });
    }
  });
};
