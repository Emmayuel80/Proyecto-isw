module.exports = function (io) {
  io.on('connection', function (socket) {
    socket.on('rechazar', (usr, asunto) => {
      require('../services/changeEstado')(asunto, 1);
      io.emit('rechazado', asunto);
    });
    socket.on('concluir', (asuntoId) => {
      require('../services/changeEstado')(asuntoId, 5);
      io.emit('concluido', asuntoId);
    });
    socket.on('obtener subordinados', (idAsunto) => {
      require('./getSubordinadosAsignados')(idAsunto, (result) => {
        io.emit('subordinados asignados', result, idAsunto);
      });
    });
  });
};
