const express = require('express');
const request = require('request');
const morgan = require('morgan');

let app = express();

// app.use(express.static('folderName'));

let INVOKE_ENDPOINT = process.env.INVOKE_ENDPOINT || 'place-holder';
let QUERY_ENDPOINT = process.env.QUERY_ENDPOINT || 'place-holder';
let port = process.env.PORT || 3000;

app.post('/invoke', (req, res)=> {
	request.post(INVOKE_ENDPOINT, )
});



app.listen(port, () => {
	console.log('chaincode listening on port ' + port);
});