const connection = require('../config/database');

module.exports = function (req) {
  connection.query("select * from subordinado where RFCE = '" + req.RFC + "'", function (_err, _rows) {
    return _rows;
  });
};
