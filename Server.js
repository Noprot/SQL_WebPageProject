const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

let app = express();

app.use(cors());
app.use(express.json());
//app.use(express.urlencoded({ extended: true })); // if data comes from form and not JSON from client / url

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

//submit call on form receive
app.post("/submit-form", (req, res) => {
    const { username, password } = req.body;

    console.log(`Received username: ${username}, password: ${password}`);
    res.send("Form received successfully!");
})


app.listen(3000, () => console.log("Server running on http://localhost:3000"));
