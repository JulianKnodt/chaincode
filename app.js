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
	console.log("body is");

	var same = Object.keys(req.body);
	console.log(same[0]);
	let sketchbody = same[0];
	let test = JSON.parse(sketchbody);
	var string = String(test);

	chaincode.invoke.write([string, ... test.values], (err, body) => {
		test.values.map(String)
		// ibc.register(1, 'john doe', enrollSecret, maxRetry, [callback]);
		
		res.send(body);

	});
});

app.get('/read', (req, res) => {
	var data=req.query
	console.log(data.user);
	chaincode.query.read([data.user], "1483911380814", (err, body) => {
		console.log(body);
		res.send(body);
	});
});


app.listen(port, () => {
	setTimeout(() => chaincode.invoke.init(), 3000);

	ibc.get_transaction('a1f48847-8d61-494e-b714-ca3958ca4aac', function(err, data){
        console.log('found trans', err, data);
    });

	console.log('chaincode listening on port ' + port);
});

// name nutrition housing healthcare debt
