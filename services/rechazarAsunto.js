const connection = require('../config/database');

module.exports = function (dataSubject) {
  connection.query('Update asunto Set Estado="Rechazado" where idAsunto="' + dataSubject.idAsunto + '"', (_err) => {});
  connection.query('insert into error(idAsunto, descripcion) values ("' + dataSubject.idAsunto + '"descripcion', (_error) => {});
};
