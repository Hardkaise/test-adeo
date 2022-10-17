const assert = require('assert');
const { filterCount, filter} = require('../src/commands');
const { data } = require('../data/data');
const { expectedResultRyTestFilterCount } = require("../data/expected-results-unit-tests");

describe('filter-count test', function () {
    it('should return array empty if no match.', function () {
        assert.deepStrictEqual(filterCount(data, 'toto'), []);
    });


    it('should return 2 match animal results for \"ry\" with count [1].', function () {
        assert.deepStrictEqual(filterCount(data, 'ry'), expectedResultRyTestFilterCount);
    });


    it('should return empty Array when empty Array provided for \"ry\".', function () {
        assert.deepStrictEqual(filterCount([], 'ry'), []);
    });
});