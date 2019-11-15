const db = require('../config/database');
const pool = db.getPool();

module.exports = function (dataSubject, dataSubordinado) {
  pool.getConnection(function (_err, conection) {
    conection.query('Update asunto Set Estado="Rechazado" where IdAsunto="' + dataSubject.idAsunto + '"', (_err) => {});
    conection.query('insert into AsuntoRechazado(IdAsunto, RFCS, Descripcion) values ("' + dataSubject.idAsunto + '",' + dataSubordinado.RFCS + '",' + 'descripcion', (_error) => {});
  });
};
