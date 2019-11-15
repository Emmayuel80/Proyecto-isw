const connection = require('../config/database');

module.exports = function (idAsunto) {
  connection.query('UPDATE Asunto Set Estado = "Concluido." WHERE idAsunto = "' + idAsunto + '"', function (_err, _rows) {
  });
};
