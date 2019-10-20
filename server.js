const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
require('./app/routes.js')(app);

io.on('connection', function (socket) {
  //  Calculate service
  require('./services/calculate.js')(io, socket);
});

http.listen(port, () => console.log('Ejecutando en el puerto 3000..'));
