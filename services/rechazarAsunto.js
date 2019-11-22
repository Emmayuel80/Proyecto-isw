const connection = require('../config/database');

module.exports = function (asunto) {
  require('../app/getSubordinadosAsignados')(asunto.asuntoid, (result) => {
    if (result.length === 1) {
      connection.query('Update asunto Set Estado="Rechazado." where idAsunto="' + asunto.asuntoid + '"', (_err) => {});
      connection.query('Update asunto Set DiasTermino= -1 where idAsunto="' + asunto.asuntoid + '"', (_err) => {});
    }
  });

  var newReason = {
    idAsunto: asunto.asuntoid,
    RFCS: asunto.rfc,
    Descripcion: asunto.reason
  };
  connection.query('insert into asuntorechazado set ?', newReason, (_error) => {});
};
