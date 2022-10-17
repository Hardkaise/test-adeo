const assert = require("assert");
const { count, filter} = require('../src/commands')
const { data } = require('../data/data');

describe('count test', function () {
    it('should add 5 to the country named Dillauti.', function () {
        assert.deepStrictEqual(count(JSON.parse(JSON.stringify(data)))[0].name, 'Dillauti [5]');
    });


    it('should add 8 to person named Blanche Viciani. ', function () {
        assert.deepStrictEqual(count(JSON.parse(JSON.stringify(data)))[0].people[1].name, 'Blanche Viciani [8]');
    });


    it('should return empty Array when empty Array provided.', function () {
        assert.deepStrictEqual(filter([], 'ry'), []);
    });
});