var pizza = require('../pizza');

var assert = require('chai').assert;

describe('Pizza module', function() {
	it('should find some pizzas with cheese', function() {
		assert.notEqual(pizza(['cheese'], []).length, 0);
	});
	it('should not find any pizzas with Twilios', function() {
		assert.equal(pizza(['Twilios'], []).length, 0);
	});
});
