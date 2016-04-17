var nlp = require('../nlp');

var assert = require('chai').assert;

describe('NLP module', function() {
	var testStr1 = 'pizza with bacon & cheese but without blue cheese';
	var testStr2 = 'pizza without shrimp';
	it("should return ['bacon', 'cheese'] & ['blue cheese'] for input 'pizza with bacon & cheese but without blue cheese'", function() {
		assert.deepEqual({ required: ['bacon', 'cheese'], banned: ['blue cheese'] }, nlp(testStr1));
	});
	it("should return empty required & banned arrays for input 'pizza without pizza'", function() {
		assert.deepEqual({ required: [], banned: ['shrimp'] }, nlp(testStr2));
	});
});
