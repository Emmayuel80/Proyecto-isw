const handleOperation = require('./handleOperation');
module.exports = function (io, socket) {
// =====================================
// CALCULATE SERVICE====================
// =====================================
  socket.on('calculate', (numA, numB, operation) => {
    const resultado = handleOperation(numA, numB, operation);
    io.emit('result', resultado);
  });
};
