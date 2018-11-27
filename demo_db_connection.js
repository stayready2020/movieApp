var pass = "database";
var mysql = require('mysql');
var http = require('http');
var url = require('url');
var querystring = require('querystring');
var express = require('express');

var app = express();

var server = http.createServer(function (req, res){
  res.writeHead(200, {'Content-Type': 'text/HTML'});
  res.write('<!DOCTYPE html>'+
'<html>'+
' <head>'+
' <meta charset="utf-8" />'+
' <title>UA Movie</title>'+
' </head>'+
' <body>'+
' <p><center>Login</center></p>'+
'<form action= "changeForm" method = "get">' +
'First Name: ' +
'<input type="text" name="first_name" value="" maxlength="100" />' +
'<br><br>' +
'Last Name ' +
'<input type="text" name="last_name" value="" maxlength="100" />' +
'<br><br>' +
'<input type = "submit" value = "Login">' +
'&nbsp;&nbsp;&nbsp;&nbsp;' +
'<input type = "submit" value = "Register">' +
'</form>' +
'</body>'+
'</html>');
  res.end();
  var page = url.parse(req.url).pathname;
  params = querystring.parse(url.parse(req.url).query);
  if ('first_name' in params && 'last_name' in params){
    var first = params['first_name'];
    var last = params['last_name'];
    console.log("First name is " + first + " and the last name is " + last);
  }
});
server.listen(8080);

/*app.get('/', function(req, res){
  res.setHeader('Content-Type', 'text/plain');
  res.end("We made it");
});
app.listen(8080);
*/
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: pass
});

con.connect (function(err) {
  if (err) throw err;
  console.log("Connected!");
});
