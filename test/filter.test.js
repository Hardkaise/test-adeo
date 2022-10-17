const { filter } = require('../src/commands');
const { data } = require('../data/data');
const { expectedResultRyTestFilter } = require('../data/expected-results-unit-tests');
const assert = require('assert');


describe('filter test', function () {
    it('should return array empty if no match.', function () {
        assert.deepStrictEqual(filter(data, 'toto'), []);
    });


    it('should return 2 match animal results for \"ry\".', function () {
        assert.deepStrictEqual(filter(data, 'ry'), expectedResultRyTestFilter);
    });


    it('should return empty Array when empty Array provided for \"ry\".', function () {
        assert.deepStrictEqual(filter([], 'ry'), []);
    });
})