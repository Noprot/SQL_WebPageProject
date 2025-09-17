const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const bcrypt = require('bcrypt');
const saltRounds = 10;

bcrypt.genSalt(saltRounds, (err, salt) => {
if (err) throw err;
});


let app = express();


app.use(cors());
app.use(express.json());
//app.use(express.urlencoded({ extended: true })); // if data comes from form and not JSON from client / url

// Connect to MySQL (XAMPP) or just connection by manual MySQL manual start
let dbcon = mysql.createConnection({
  host: "localhost",
  user: "nooa",
  password: "dgj321kj4yu!kjqdhjadsddjakh!hjkdas",
  database: "game_activity_tracker"
});

//connection check
const starttime = Date.now();
dbcon.connect(function(err, res) {
  if (err) throw err;
  
  const ping = Date.now() - starttime
  console.log(`Connected to MySQL -db ${dbcon.config.database} - Connection_Time ${ping} ms` );
});

//submit call on form receive - bcrypt password hashing
app.post("/Register-form", (req, res) => {
    const { username, password } = req.body;

    bcrypt.hash(password, saltRounds, (err, hash) => {
      password = hash; // chance the password to a hashed one
    });

    console.log(`Received username: ${username}, password: ${password}`);
    res.send("Form received successfully!");

    //sql command
    let sql_user = "INSERT INTO users (username) VALUES (?)";
    let sql_password = "INSERT INTO passwords (userpassword) VALUES (?)";

    dbcon.query(sql_user, [username], function (err, result){
       if (err) throw err;
       console.log(`inserted into users | username: ${result.username}`, `id: ${result.insertId}`);
    
    
      dbcon.query(sql_password, [password], function (err, result){
        if (err) throw err;
        console.log(`inserted into passwords | password: ${result.password}`, `id: ${result.insertId}`);
      });

    });
})

app.post("/Login-form", (req, res) => {
  const { username, password } = req.body;
  
  let sql_user = "select userName FROM users WHERE userName = (username) values (?)" //users
  let sql_password = "SELECT userPassword FROM passwords WHERE userPassword = (password) values (?)" //normally i would hash this and compare the hash :)


  let out_password;
  let out_username;

  dbcon.query(sql_user, [username], function(result, err) {
    if (err) throw err;




  })
  
  dbcon.query(sql_password, [password], function(result, err){
    if (err) throw err;


  })

  
})


app.listen(3000, () => console.log("Server running on http://localhost:3000"));