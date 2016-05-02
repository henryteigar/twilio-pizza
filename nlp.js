/*
 * The NLP (natural language processing) function takes a string as an input and then attempts to parse out the user's
 * requirements related to pizza ingredients. It returns the results as an object with the keys 'required' and 'banned'
 * being arrays.
 */
function nlp(input) {
	
	if (validateInput(input) == false) {
		return { required: [], banned: [] };
	}
	input = prepareInput(input);

	var entities = input.split(/[\.,;\&]| and | but | or /);

	// trim all input entities
	entities = entities.map(function(x) {
		return x.trim();
	});

	// initialize as empty
	// filled in iteratively
	var required = [],
		banned = [];

	// context state
	var currentlyAdding = 'required';

	for (var i in entities) {
		var entity = entities[i];

		// switch addition context
		if (entity.indexOf('with ') == 0) {
			currentlyAdding = 'required';
		}
		else if (entity.indexOf('without ') == 0) {
			currentlyAdding = 'banned';
		}


		// store entity in correct context
		if (currentlyAdding == 'required') {
			if (entity.indexOf('with ') == 0) {
				// get rid of possible 'with' string
				entity = entity.substring('with'.length);
			}
			required.push(entity);
		}
		else {
			if (entity.indexOf('without ') == 0) {
				// get rid of possible 'without' string
				entity = entity.substring('without '.length);
			}
			banned.push(entity);
		}
	}


	// tidy it up again by removing unnecessary whitespace

	required = required.map(function(x) {
		return x.trim();
	});
	banned = banned.map(function(x) {
		return x.trim();
	});

	return {
		required: required,
		banned: banned
	};
}
module.exports = nlp;

if (process.argv[2]) {
	// commandline usage
	console.log(nlp(process.argv[2]));
}

function prepareInput(input) {
	input = input.toLowerCase(); // all ingredients in the database of pizzas are lowercase, too
	input = input.substring(input.indexOf('pizza') + 'pizza'.length); // ironically get rid of pizza
	input = input.replace(/[\!]/g, ''); // we don't want users' excitement in the output
	return input;
}

function validateInput(input) {
	// all input must include the word 'pizza', which may be preceded by a string of arbitrary length
	if (input.indexOf('pizza') == -1) {
		return false;
	}
	// stuff must come after the word 'pizza'
	if (input.length == input.indexOf('pizza') + 'pizza'.length) {
		return false;
	}
	return true;
}
