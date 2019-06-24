const mysql = require('mysql');
var fs = require('fs');


let connection = mysql.createConnection({
  host: "35.202.5.248",
  user: "edd",
  database:"edd_db",
  password: "pass",

  ssl: {
    ca: fs.readFileSync(__dirname + '/server-ca.pem'),
    key: fs.readFileSync(__dirname + '/client-key.pem'),
    cert: fs.readFileSync(__dirname + '/client-cert.pem')
  }
});

connection.connect(function(err) {
  if (err) {
    console.error('Error connecting: ' + err.stack);
    return;
  }
  console.log('Connected as thread id: ' + connection.threadId);
});



module.exports = connection;
