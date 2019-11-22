const connection = require('../config/database');

module.exports = function (asunto) {
  connection.query('Update asunto Set Estado="Suspendido." where idAsunto="' + asunto.asuntoid + '"', (_err) => {});
  connection.query('Update asunto Set DiasTermino= -1 where idAsunto="' + asunto.asuntoid + '"', (_err) => {});
};
