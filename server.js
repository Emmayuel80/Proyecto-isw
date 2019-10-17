const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('<h1>k onda profe</h1>'))
app.listen(3000, () => console.log('Ejecutando en el puerto 3000'))

const value = 2

function test () {
  switch (value) {
    case 1:
      console.log(1)
      break
  }
}
