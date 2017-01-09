const express = require('express');
const morgan = require('morgan');
const Winston = require('winston');
const IBC = require('ibm-blockchain-js');
const path = require('path');
const config = require('./config.js');
var bodyParser = require('body-parser')


let chaincode;
let app = express();
let ibc = new IBC(new Winston.Logger({transports: [new Winston.transports.Console]}));

const chaincodeDeploy = (err) => {
	if (err) {
		throw err;
	}
}

const chaincodeReady = (err, cc) => {
	if (err) {
		throw err;
	} else if (cc.details.deployed_name === '') {
		cc.deploy('init', ['99'], null, chaincodeDeploy);
		chaincode = cc;
	} else {
		cc.deploy('init', ['99'], null, chaincodeDeploy);
		chaincode = cc;
		chaincodeDeploy();
	}
}


ibc.load(config, chaincodeReady);

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.resolve(__dirname)));

let port = process.env.PORT || 3000;

app.get('/', (req, res) => {
	res.render(path.resolve(__dirname, 'views', 'index'));
});

app.get('/signup', (req, res) => {
	res.render(path.resolve(__dirname, 'views', 'signup'));
});

app.get('/login', (req, res) => {
	res.render(path.resolve(__dirname, 'views', 'login'));
});

app.get('/profile', (req, res) => {
	res.render(path.resolve(__dirname, 'views', 'profile'));
});


app.post('/update', (req, res)=> {
	var same = Object.keys(req.body);
	console.log(req.body["user"]);
	
	console.log(same[0]);
	let sketchbody = same[0];
	console.log(sketchbody);
	let test = JSON.parse(sketchbody);
	console.log(Object.keys(test));
	console.log(test.user);
	console.log(test.values);

	chaincode.invoke.write([test.user, ... test.values], (err, body) => {
		test.values.map(String)
		console.log(body);
		res.send(body);
	});
});


app.get('/read', (req, res) => {
	var same=req.query
	console.log(same.user);

	chaincode.invoke.write([same.user, ... [0,0,0,0]], (err, body) => {
		test.values.map(String)
		console.log(body);
		res.send(body);
	});

	chaincode.query.read([String(same.user)], function(err, data){
    	console.log('read abc:', data, err);
    	res.send(data);
	});

	

	// chaincode.query.read([data.user], (err, data) => {
	// 	console.log(data);
	// 	console.log(err);
	// });

	// chaincode.invoke.write(['a', 'test'], (err, data) => {
	// 	console.log(err, data);
	// });

	// chaincode.query.read([data.user], (err, body) => {
	// 	console.log(body);
	// 	console.log(err);
	// 	res.send(body);
	// });
});


app.listen(port, () => {
	setTimeout(() => chaincode.invoke.init(), 5000);

	ibc.register(0, 'admin', "5934d168a8", 3, (err,body) =>{
		console.log(err)
		console.log(body);
	});

	console.log('chaincode listening on port ' + port);
});

// name nutrition housing healthcare debt
