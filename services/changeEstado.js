//  Declaraciones de modulos de cambio de estado
const rechazarAsunto = require('./rechazarAsunto');
const concluirAsunto = require('./concluirAsunto');
const cancelarAsunto = require('./cancelarAsunto.js');
const suspenderAsunto = require('./suspenderAsunto');

module.exports = function (asunto, op) {
  if (op === 1) {
    //  Cambiar a rechazado
    rechazarAsunto(asunto);
    return 'Rechazado';
  }
  if (op === 2) {
    cancelarAsunto(asunto);
    //  Cambiar a cancelado
    return 'Cancelado';
  }
  if (op === 3) {
    //  Cambiar a suspender
    suspenderAsunto(asunto);
    return 'Suspendido';
  }
  if (op === 4) {
    // Cambiar a en progreso
    return 'Reanudado';
  }
  if (op === 5) {
    // Cambiar a concluido
    concluirAsunto(asunto);
    return 'Concluido';
  }
};
