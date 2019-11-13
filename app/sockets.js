module.exports = function (io) {
  io.on('connection', function (socket) {
    socket.on('rechazar', (usr, asunto) => {
      require('../services/changeEstado')(asunto, 1);
      io.emit('rechazado', asunto);
    });
  });
};
