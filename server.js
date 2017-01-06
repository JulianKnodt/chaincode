var express = require('express')
var fs = require('fs');
var app = express();
var firebase = require('firebase');


app.set('view engine', 'ejs');

app.use(express.static(__dirname));

app.get('/', function (req, res) {
	res.render('index');
});

app.get('/login', function(req, res) {
	res.render('login');
});

app.get('/signup', function(req, res) {
	res.render('signup');
});

app.get('/account', function(req,res){
	console.log("account got called");
	res.render('profile');
});




app.listen(3141)
console.log('3141');
