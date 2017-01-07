const express = require('express');
const morgan = require('morgan');
const Winston = require('winston');
const IBC = require('ibm-blockchain-js');
const path = require('path');
const config = require('./config.js');

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
	chaincode.invoke.write([req.body.user, ...req.body.values], (err, body) => {
		res.send(body);
	});
});

app.get('/read', (req, res) => {
	chaincode.query.read([req.query.user], (err, body) => {
		res.send(body);
	});
});


app.listen(port, () => {
	console.log('chaincode listening on port ' + port);
});

// name nutrition housing healthcare debt
