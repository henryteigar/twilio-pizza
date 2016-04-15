var pizzas = require('./list');



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

console.log(getResults(['cheese'], []))



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
			// it's okay
			// but not really
			return false;
		}
	}

	return true;
}

var arr1 = ['kõik, kes olid lollid', 'kõik, kes ei olnud lollid', 'kõik, kes olid targad', 'kõik, kes olid vahepealse tarkusega', 'kõik, kel polnud üldse mõistust'];
var arr2 = ['kõik, kel polnud üldse mõistust', 'kõik, kes käisid lõbustuspargis', 'kõik, kes ei käinud'];

//console.log(commonItems(arr1, arr2));
