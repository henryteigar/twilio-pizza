module.exports = input => {

	input = input.replace(/pizza ?/g, '').toLowerCase();
	
	if (input.length < 3) {
		return false;
	}

	var entities = input.split(/[,;\&]| and | or /);
	entities = entities.filter(function(x) {
		if (x.length == 0) {
			return false;
		}
		return true;
	});

	// trim all input entities
	entities = entities.map(function(x) {
		return x.trim();
	});

	// initialize as empty
	// fill in iteratively below
	var required = [];
	var banned = [];

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


		// add with correct context
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


	// tidy it up again

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
