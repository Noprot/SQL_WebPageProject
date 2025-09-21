const express = require('express');
const session = require('express-session')

let keys = [
  "sjhdsadasjhksdajkhsdhkjdhjksajdkhsaweadsadasdvfnvnv",
  "sdjopjdsahduahcsbhrbsugbrgvfpchauicbfefesvsf3424235",
  "dopahciughavceuapso+zokp mx x zhdvuydgacpafdfsdfsfs",
  "apoåcaiuohiarbjhbvdfcyrzf zhbdxivpåuviuxbchsbcugczusgcjhgz",
  "sdjopjdsahduahcsbhrbsugbrgvfpchauicbfefesvsf3424235",
  "dopahciughavceuapso+zokp mx x zhdvuydgacpafdfsdfsfs",
  "apoåcaiuohiarbjhbvdfcyrzf zhbdxivpåuviuxbchsbcugczusgcjhgz"
]

function GenerateNewKeys()
{
  keys = keys.map(() => crypto.randomUUID().toString())
}

const sessionOptions = session({
  secret: keys[Math.floor(Math.random() * keys.length)],
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false, // should be false whene in local if published change to true
    maxAge: 1000 * 60 * 60, // 1 tunti
    //httpOnly: true
    sameSite: 'lax'
  }
});

const mysql = require('mysql2');
const cors = require('cors');

const bcrypt = require('bcrypt');
const saltRounds = 10;

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
dbcon.connect(function(err) {
  if (err) throw err;
  
  const ping = Date.now() - starttime
  console.log(`Connected to MySQL -db ${dbcon.config.database} - Connection_Time ${ping} ms` );
});

//submit call on form receive - bcrypt password hashing
app.post("/Register-form", (req, res) => {
  const { username, password } = req.body;

  const sql_get_username = "select username from users where username = (?)";

  dbcon.query(sql_get_username, [username], (err, result) => {
    if (err) throw err;
    
    if (result.length > 0) {
      return res.status(409).send("Username already exists");
    }
    
    bcrypt.hash(password, saltRounds, (err, hash) => {
      if (err) throw err;

      //sql command
      let sql_register = "INSERT INTO users (username, password) VALUES (?, ?)";

      dbcon.query(sql_register, [username, hash], function (err, result){
        if (err) throw err;
        console.log(`new user created - id: ${result.insertId}`);
      });
    });
  });
});

app.post("/Login-form", (req, res) => {
  const { username, password } = req.body;
  
  const sql_login_details = "select userID, username, password FROM users WHERE username = (?)";

  dbcon.query(sql_login_details, [username], function(err, result) {
    if (err) throw err;
    //console.log(result)
    if (result.length === 0)
    {
      console.log(`incorrect Login information`);
      res.send("incorrect Login Information!!")
      return;
    }
  
    bcrypt.compare(password, result[0].password, (err, bresult) => {
      if (err) throw err;
      if (bresult)
      {
        console.log(`user [${result[0].username}] succesfully logged in`);
        LogLoginDateToHistory(result[0].userID)
      }
      else
      {
        return console.log(`login attempt on user ${result[0].username}`);
      }
    });  
  })
})

app.listen(3000, () => console.log("Server running on http://localhost:3000"));

function LogLoginDateToHistory(userID)
{
  const sql_login = "INSERT INTO loginhistory (userID) values (?)";
  dbcon.query(sql_login, [userID], (err) => {
    if (err) throw err;
  })
}