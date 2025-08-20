//const http = require('node:http');

let express = require('express');
let mysql = require('mysql2');

let app = express();

// Connect to MySQL (XAMPP)
let con = mysql.createConnection({
  host: "localhost",
  user: "nooa",
  password: "dgj321kj4yu!kjqdhjadsddjakh!hjkdas",
  database: "omaDatabase"
});

//connection check
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});


function send(username, password) {
    const sql = `SELECT * FROM users WHERE username = ? AND password = ?`;
    con.query(sq, [username, password], function(err, result) {
        if (err) throw err;
        if (result.lenght > 0) {
            console.log("Login successful for user:", username);
        } else {
            console.log("Login failed for user:", username);
        }
    });
}