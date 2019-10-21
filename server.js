const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('<h1>k onda profe</h1>'));
app.listen(port, () => console.log('Ejecutando en el puerto 3000.'));

function funcion () {
  var par = 1;
  switch (par) {
    case 1: return 1;
    case 2: return 2;
    case 3: return 3;
    case 4: return 4;
    case 5: return 5;
    case 6: return 6;
  }
}

console.log(funcion());
