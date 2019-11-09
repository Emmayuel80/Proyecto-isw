var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'remotemysql.com',
  user: 'Jr1WfAbUKD',
  password: 'MPg3ZYIIWE'
});

connection.query('USE Jr1WfAbUKD');
console.log('connected to the database');

module.exports = connection;
