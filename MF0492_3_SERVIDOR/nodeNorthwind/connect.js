let mysql = require('mysql');
let config = require('./config.js')
let connection = mysql.createConnection(config);

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: 'northwind'
});


connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the northwind database.');
  });

  connection.end(function(err) {
      if (err) {
      return console.log('error: ' + err.message);
      }
    console.log('Close the database connection');
  });