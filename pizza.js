var pizzas = require('./list'); // array of objects, describing pizzas from Pappa Pizza

/*
 * The function getResults analyzes an array of pizzas, based on requiredIngredients and bannedIngredients, to find a
 * list of pizzas matching the criterion.
 */
function getResults(requiredIngredients, bannedIngredients) {
	return pizzas.filter(function(pizza) {
		var matchesCriterion = true;

		// check for banned ingredients
		if (commonItems(pizza.ingredients, bannedIngredients)) {
			matchesCriterion = false;
		}

		// check if all required ingreds are there, too
		if (!hasAll(requiredIngredients, pizza.ingredients)) {
			matchesCriterion = false;
		};


		return matchesCriterion;
	});
}
module.exports = getResults;


/*
 * Some nifty helper functions below
 */

function commonItems(arr1, arr2) {
	// returns true if the two arrays have
	//  at least one common element
	for (var el in arr1) {
		if (arr2.indexOf(arr1[el]) !== -1) {
			return true;
		}
	}

	return false;
}

function hasAll(required, haystack) {
	// returns true if all of required's elements are present in haystack
	// else returns false
	for (var i in required) {
		var el = required[i];

		if (haystack.indexOf(el) === -1) {
			// a required element is not present in the haystack array
			// it's okay
			// but not really
			return false;
		}
	}

	return true;
}
