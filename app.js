const express = require('express');
const request = require('request');
const morgan = require('morgan');
const path = require('path');

let app = express();

app.set('view engine', ejs);

app.use(express.static(path.resolve(__dirname, 'views')));

console.log(path.resolve(__dirname, 'views'));

let INVOKE_ENDPOINT = process.env.INVOKE_ENDPOINT || 'place-holder';
let QUERY_ENDPOINT = process.env.QUERY_ENDPOINT || 'place-holder';
let port = process.env.PORT || 3000;

app.post('/invoke', (req, res)=> {
	// request.post(INVOKE_ENDPOINT, )
});

app.get('/query', (req, res) => {
	
});


app.listen(port, () => {
	console.log('chaincode listening on port ' + port);
});

/*
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
*/