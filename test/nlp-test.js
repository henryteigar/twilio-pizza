var nlp = require('../nlp');

var assert = require('chai').assert;

// extend chai's assert functionality with function to test if nlp
// module returns an object with empty arrays for a given input
assert.emptyResponse = function(testStr) {
	return assert.deepEqual({ required: [], banned: [] }, nlp(testStr));
}

describe('NLP module', function() {
	it("should return ['bacon', 'cheese'] & ['blue cheese'] for input 'pizza with bacon & cheese but without blue cheese'", function() {
		var testStr = 'pizza with bacon & cheese but without blue cheese';
		assert.deepEqual({ required: ['bacon', 'cheese'], banned: ['blue cheese'] }, nlp(testStr));
	});
	it("should return empty 'required' array and 'shrimp' in 'banned' array for input 'pizza without shrimp'", function() {
		var testStr = 'pizza without shrimp';
		assert.deepEqual({ required: [], banned: ['shrimp'] }, nlp(testStr));
	});
	it("should return object with empty arrays when given input without the word 'pizza'", function() {
		var testStr = 'cheese and blackjack';
		assert.emptyResponse(testStr);
	});
	it("should return object with empty arrays when given input 'pizza'", function() {
		var testStr = 'pizza';
		assert.emptyResponse(testStr);
	});
});
