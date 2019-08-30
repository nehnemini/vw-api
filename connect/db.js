var mysql      = require('mysql');
module.exports = () => {
  return mysql.createConnection({
    host     : 'localhost',
    user     : 'cursodos',
    password : 'curso',
    database : 'visibilidad'
  });
}

