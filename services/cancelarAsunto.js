const connection = require('../config/database');

module.exports = function (idAsunto) {
  connection.query('DELETE FROM actividad WHERE IdAsunto =' + parseInt(idAsunto), function (_err, _rows) {
  });
  connection.query('DELETE FROM asuntoencargado WHERE IdAsunto =' + parseInt(idAsunto), function (_err, _rows) {
  });
  connection.query('DELETE FROM asuntosubordinado WHERE IdAsunto =' + parseInt(idAsunto), function (_err, _rows) {
  });
  connection.query('DELETE FROM asuntorechazado WHERE IdAsunto =' + parseInt(idAsunto), function (_err, _rows) {
  });
  connection.query('DELETE FROM documento WHERE IdAsunto =' + parseInt(idAsunto), function (_err, _rows) {
  });
  connection.query('DELETE FROM asunto WHERE IdAsunto =' + parseInt(idAsunto), function (_err, _rows) {
  });
};
