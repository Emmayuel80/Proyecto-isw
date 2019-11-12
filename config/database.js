var mysql = require('mysql');
var pool;
module.exports = {
  getPool: function () {
    if (pool) return pool;
    pool = mysql.createPool({
      host: 'remotemysql.com',
      user: 'Jr1WfAbUKD',
      password: 'MPg3ZYIIWE',
      database: 'Jr1WfAbUKD'
    });
    return pool;
  }
};
