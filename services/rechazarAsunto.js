const db = require('../config/database');
const pool = db.getPool();

module.exports = function (dataSubject) {
  pool.getConnection(function (_err, conection) {
    conection.query('Update asunto Set Estado="Rechazado" where idAsunto="' + dataSubject.idAsunto + '"', (_err) => {});
    conection.query('insert into error(idAsunto, descripcion) values ("' + dataSubject.idAsunto + '"descripcion', (_error) => {});
  });
};
