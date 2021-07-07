let mysql = require('mysql');
let config = require('./config.js');
let connection = mysql.createConnection(config);

let sql = "SELECT * FROM customers WHERE country = 'UK'";
 connection.query(sql,(error, results, fields) => {
     if (error) {
         return console.log(results);
     }
    console.log(results);
 });

  connection.end();