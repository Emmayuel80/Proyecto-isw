const connection = require('../config/database');
const bcrypt = require('bcrypt');
const saltRounds = 10;

// =========================================================================
// LOCAL SIGNUP ============================================================
// =========================================================================
// we are using named strategies since we have one for login and one for signup
// by default, if there was no name, it would just be called 'local'
module.exports = function (req, RFCE) {
  connection.query("select * from subordinado where email = '" + req.body.email + "'", function (err, rows) {
    console.log(rows);
    console.log('above row object');
    if (err) { return err; }
    if (rows.length) {
      return req.flash('signupMessage', 'Esa dirección de correo electronico ya existe.');
    } else {
      bcrypt.hash(req.body.RFC, saltRounds, function (_err, hash) {
        // if there is no user with that email
        // create the user
        var newUserMysql = {
          RFC: req.body.RFC,
          Nombre: req.body.Nombre,
          ApPaterno: req.body.ApPaterno,
          ApMaterno: req.body.ApMaterno,
          Email: req.body.email,
          Contrasena: hash,
          RFCE: RFCE // use the generateHash function in our user model
        };
        console.log(newUserMysql);
        connection.query('INSERT INTO subordinado SET ?', newUserMysql, function (_err, _rows) {
        });
      });
    }
  });
};
