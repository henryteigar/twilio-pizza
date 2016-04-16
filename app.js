var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


var port = process.env.PORT || 4000;

var nlp = require('./nlp');
var findPizzas = require('./pizza');


// Twilio Credentials
var accountSid = 'ACa14ebe13d280212fd912116878c1d8ce';
var authToken = '1707c4a33aa42574326e75144a70c952';

//require the Twilio module and create a REST client
var client = require('twilio')(accountSid, authToken);



app.post('/incoming', function(req, res, next) {
	console.log(req.body)
	var input = req.body.Body;
	var inputData = nlp(input.toLowerCase());
	
	if (inputData) {
		results = findPizzas(inputData.required, inputData.banned);
	}
	
	if (results[0]) {
		reply = 'You should order: ' + results[0].name + '.';
	}
	else {
		reply = 'Sorry, for one reason or another, no suitable pizzas were found.';
	}
	
	console.log(inputData)
	if (results) {
		client.messages.create({
			to: "+37253825119",
			from: "+37259120103",
			body: reply,
		}, function(err, message) {
			console.log(message.sid);
		});
	}
	res.json({message: 'yay'})
});



app.listen(port);
