const fs = require('fs');
module.exports = function (io, Siofu) {
  io.on('connection', function (socket) {
    socket.on('rechazar', (asunto) => {
      require('../services/changeEstado')(asunto, 1);
      io.emit('rechazado', asunto.asuntoid);
    });
    socket.on('concluir', (asuntoId) => {
      require('../services/changeEstado')(asuntoId, 5);
      io.emit('concluido', asuntoId);
    });
    socket.on('obtener subordinados', (idAsunto, rfc) => {
      require('./getSubordinadosAsignados')(idAsunto, rfc, (result) => {
        io.emit('subordinados asignados', result, idAsunto);
      });
    });
    socket.on('desasignar subordinado', (idAsunto, rfc) => {
      require('../services/unassignSubordinado')(idAsunto, rfc);
      io.emit('subordinado eliminado', rfc);
    });
    socket.on('obtener rechazo', (idAsunto) => {
      require('./getInfoRechazo')(idAsunto, (result) => {
        io.emit('info rechazo', result, idAsunto);
      });
    });
    var uploader = new Siofu();
    uploader.listen(socket);
    uploader.on('start', function (event) {
      if (event.file.meta.idActividad) {
        fs.mkdir('./uploads/actividad/' + event.file.meta.idActividad, { recursive: true }, (err) => {
          if (err) throw err;
        });
        uploader.dir = './uploads/actividad/' + event.file.meta.idActividad;
      }
      if (event.file.meta.idAsunto) {
        fs.mkdir('./uploads/asunto/' + event.file.meta.idAsunto, { recursive: true }, (err) => {
          if (err) throw err;
        });
        uploader.dir = './uploads/asunto/' + event.file.meta.idAsunto;
      }
    });
    uploader.on('complete', function (event) {
      var saveDir = event.file.writeStream.path.replace(/\\/g, '/') + '/';
      if (event.file.meta.idActividad) {
        require('../services/updateRutaActividad')(event.file.meta.idActividad, saveDir);
      }
      if (event.file.meta.idAsunto) {
        require('../services/updateRutaAsunto')(event.file.meta.idAsunto, saveDir);
      }
    });
  });
};
