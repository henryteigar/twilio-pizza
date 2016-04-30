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

// Require the Twilio module and create a REST client
var client = require('twilio')(accountSid, authToken);



app.post('/incoming', function(req, res, next) {
	// Handle incoming SMS messages at this route

	if (!req.body.Body) {
		// blatantly ignore incorrect requests
		next();
	}

	var input = req.body.Body;
	var inputData = nlp(input); // parses out data from input string

	console.log(input);
	console.log(inputData);

	if (inputData) {
		// successfully retrieved parsed information
		var results = findPizzas(inputData.required, inputData.banned);

		// generate the response sms
		var reply = 'Sorry, for one reason or another, no suitable pizzas were found.'; // default

		if (results && results.length > 0) {
			var index = Math.floor(Math.random() * results.length); // randomly generated index for array of criterion-matching pizzas
			reply = 'You should order: ' + results[index].name + '.';
		}

		sendSMS(req.body.from, reply);
		res.json({ message: 'Reply message successfully sent', reply: reply });
	}
	else {
		res.status(500).json({message: 'Something went wrong and the server didn\'t get around to sending the message'});
	}
});

function sendSMS(to, body, from) {
	// sends text message using Twilio

	from = from || process.env.TWILIO_FROM;

	if (to && body && from) {
		client.messages.create({
			to: to,
			from: from,
			body: body,
		}, function(err, message) {
			if (err) {
				console.log(err);
			}
			else {
				console.log('sms sent with sid of', message.sid);
			}
		});
	}
	else {
		console.log('Message was not sent');
	}
}



// be silent on tests
console.log('Listening on port', port);
app.listen(port);
