//const http = require('node:http');

let express = require('express');
const bodyParser = require("body-parser");
let mysql = require('mysql2');

let app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MySQL (XAMPP)
let dbcon = mysql.createConnection({
  host: "localhost",
  user: "nooa",
  password: "dgj321kj4yu!kjqdhjadsddjakh!hjkdas",
  database: "omaDatabase"
});

//connection check
dbcon.connect(function(err) {
    if (err) throw err;
    console.log("Connected to MySQL!");
});

app.post("/submit", (req, res) => {
    const { username, password } = req.body;

  console.log('Form submitted:', req.body);
  res.send('Form received!');
})

const path = require('path');
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));

/*app.post('/login', (req, res) => {
  const { nimi, password } = req.body;

  if (!nimi || !password) {
    return res.json({ message: "Both fields are required!" });
  });*/