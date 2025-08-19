//const http = require('node:http');

let mysql = require('mysql2');

let con = mysql.createConnection({
  host: "localhost",
  user: "nooa",
  password: "1234"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});