const connection = require('../config/database');

module.exports = function (callback) {
  connection.query('select * from area', function (_err, _rows) {
    callback(_rows);
  });
};
