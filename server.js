const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/', (req, res) => res.send('<h1>k onda profe</h1>'));
app.listen(port, () => console.log('Ejecutando en el puerto 3000.'));
