let express = require('express');
const bodyParser = require("body-parser");
let mysql = require('mysql2');
const cors = require('cors');

let app = express();

app.use(cors());
app.use(express.json());
//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.urlencoded({ extended: true }));

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
  res.send(`Form received! ${req.body.username} ${req.body.password}`);
})

/*const path = require('path');
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});*/

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
