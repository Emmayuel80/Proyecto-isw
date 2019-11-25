const connection = require('../config/database');

module.exports = function (idAsunto) {
  connection.query('UPDATE asunto Set Estado = "En progreso." WHERE idAsunto = ' + parseInt(idAsunto) + '', function (_err, _rows) {
  });
};
