//  Declaraciones de modulos de cambio de estado

module.exports = function (usr, op) {
  if (op === 1) {
    //  Cambiar a rechazado
    return 'Rechazado';
  }
  if (op === 2) {
    //  Cambiar a cancelado
    return 'Cancelado';
  }
  if (op === 3) {
    //  Cambiar a suspender
    return 'Suspendido';
  }
  if (op === 4) {
    // Cambiar a en progreso
    return 'Reanudado';
  }
  if (op === 5) {
    // Cambiar a concluido
    return 'Concluido';
  }
};
