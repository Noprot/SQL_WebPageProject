//const http = require('node:http');

let mysql = require('mysql2');

let con = mysql.createConnection({
  host: "localhost",
  user: "nooa",
  password: "dgj321kj4yu!kjqdhjadsddjakh!hjkdas",
  database: "omaDatabase"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  con.query("select * from users", function (err, result) {
    if (err) throw err;
    console.log("result: " + result);
  });
});