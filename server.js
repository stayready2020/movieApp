var sql_pass = "database";

var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');


//global variables
var username;
var password;
var email;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//initializes the login screen
app.get('/', function (req, res) {
  console.log("At login screen\n");
  res.render('login'{
    error: false
  });
});
app.listen(8000);


//creates the home page
app.post('/now-playing', function(req, res){
  console.log("Submitted!\n");
  username = req.body.username;
  password = req.body.password;
  console.log(username + " " + password);
  exists = login(username, password);
  if (exists == 1){
    console.log("Logging in\n");
    res.render('home');
  }
  else {
    res.render('login', {
      error: true
    });
  }
});

//creates registration page
app.post('/register', function(req, res){
  console.log("Registering!\n");
  res.render('register', {
    error: false
  });
});

//registration post command
app.post('/create', function(req, res){
  console.log("Registered!\n");
  username = req.body.username;
  email = req.body.email;
  pass = req.body.password;
  pass2 = req.body.password2;
  if (pass != pass2){
    res.render('register', {
      error: true
    });
  }
  else {
    res.redirect('/');
  }
});



/*
* My SQL stuff
*/
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: sql_pass
});

con.connect (function(err) {
  if (err) throw err;
  console.log("Connected!");
});

/*
* Queries
*/
function login(username, password){
  //SQL stuff
  return 1;
}
