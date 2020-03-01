var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : '127.0.0.1',
  database : 'sales_system',
  user     : 'root',
  password : 'root',
  port     : "8889"
});


connection.connect(function(err) {
  if (err) {
    console.error('error: ' + err.message);
  }
  else{
    console.log('Connected to the MySQL server.');
  }
});

module.exports = {connection};