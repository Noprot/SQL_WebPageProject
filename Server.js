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
  database: "game_activity_tracker"
});

//connection check
dbcon.connect(function(err, res) {
  if (err) throw err;
    console.log("Connected to MySQL! - $"{}");
});

//submit call on form receive
app.post("/Register-form", (req, res) => {
    const { username, password } = req.body;

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