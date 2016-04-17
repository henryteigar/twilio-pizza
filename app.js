var express = require('express');
var app = express();
var env = require('node-env-file');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// Load env variables from .env file
env('./.env', { raise: false });


var port = process.env.PORT || 4000;

var nlp = require('./nlp');
var findPizzas = require('./pizza');


// Twilio Credentials
var accountSid = process.env.TWILIOSID;
var authToken = process.env.TWILIOTOKEN;

//require the Twilio module and create a REST client
var client = require('twilio')(accountSid, authToken);



app.post('/incoming', function(req, res, next) {
	// Handle incoming SMS messages
	
	if (!req.body.Body) {
		next();
	}
	
	res.json({message: 'The server successfully read the message and is now working on it'})

	var input = req.body.Body;
	var inputData = nlp(input.toLowerCase());
	
	var results = []; // initialize as empty array
	
	console.log(input)
	console.log(inputData)
	
	if (inputData) {
		results = findPizzas(inputData.required, inputData.banned);
	}
	
	if (results && results.length > 0) {
		var index = Math.floor(Math.random() * results.length);
		reply = 'You should order: ' + results[index].name + '.';
	}
	else {
		reply = 'Sorry, for one reason or another, no suitable pizzas were found.';
	}
	
	if (results) {
		client.messages.create({
			to: "+37253825119",
			from: "+37259120103",
			body: reply,
		}, function(err, message) {
			if (err) {
				console.log(err);
			}
			else {
				console.log('SMS sent with sid of', message.sid);
			}
		});
	}
});



console.log('Listening on port', port)
app.listen(port);
