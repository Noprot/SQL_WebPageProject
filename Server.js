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
    console.log("Connected to MySQL!");
});

app.post('/login', (req, res) => {
  const { nimi, password } = req.body;

  if (!nimi || !password) {
    return res.json({ message: "Both fields are required!" });
  })