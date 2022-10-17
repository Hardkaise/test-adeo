const assert = require('assert');
const { parseData } = require("../src/parse-data");
const {
    inputTooMuchKeysInCountry, inputMissingKeyCountry,
    inputNameIsNotStringCountry, inputPeopleIsNotArrayCountry,
    inputPeopleElementNotObject, inputTooMuchKeysInPeople,
    inputMissingKeyPeople, inputNameIsNotStringPeople,
    inputAnimalsIsNotArrayPeople, inputAnimalsNotObject,
    inputAnimalsTooMuchKeys, inputAnimalsMissingNameKey,
    inputAnimalsNameKeyNotString
} = require('../data/input-parse-data-unit-test');

describe('parse-data test', function () {
    it('should throw an error when data is undefined.', function () {
        assert.throws(() => { parseData(undefined); }, Error, 'data must be an array.');
    });


    it('should throw an error when data is Object.', function () {
        assert.throws(() => { parseData({}); }, Error, 'data must be an array.');
    });


    it('should throw an error when country elements are not Object.', function () {
        assert.throws(() => {  parseData([ 'toto' ]); }, Error, 'element must be object.');
    });


    it('should throw an error when too much keys in country elements.', function () {
        assert.throws(
            () =>  { parseData(inputTooMuchKeysInCountry); },
            Error,
            'element must only contains those keys: name, people.'
        );
    });


    it('should throw an error when missing key in country elements.', function () {
        assert.throws(
            () =>  { parseData(inputMissingKeyCountry); },
            Error,
            'You have to provide those keys: name, people.'
        );
    });


    it('should throw an error when "name" is not a string in country.', function () {
        assert.throws(
            () => { parseData(inputNameIsNotStringCountry); },
            Error,
            `You have to provide a valid string for element "name": ${ inputNameIsNotStringCountry[0].name }.`)
    });


    it('should throw an error when "people" is not an Array in country.', function () {
        assert.throws(
            () => { parseData(inputPeopleIsNotArrayCountry); },
            Error,
            `You have to provide a valid Array for element "people": ${ inputPeopleIsNotArrayCountry[0].people }.`
        )
    });





    it('should throw an error when people elements are not Object.', function () {
        assert.throws(() => {  parseData(inputPeopleElementNotObject); }, Error, 'element must be object.');
    });


    it('should throw an error when too much keys in people elements.', function () {
        assert.throws(
            () =>  { parseData(inputTooMuchKeysInPeople); },
            Error,
            'element must only contains those keys: name, animals.'
        );
    });


    it('should throw an error when missing key in people elements.', function () {
        assert.throws(
            () =>  { parseData(inputMissingKeyPeople); },
            Error,
            'You have to provide those keys: name, animals.'
        );
    });


    it('should throw an error when "name" is not a string in people.', function () {
        assert.throws(
            () => { parseData(inputNameIsNotStringPeople); },
            Error,
            `You have to provide a valid string for element "name": ${ inputNameIsNotStringPeople[0].people[0].name }.`)
    });


    it('should throw an error when "animals" is not an Array in people.', function () {
        assert.throws(
            () => { parseData(inputAnimalsIsNotArrayPeople); },
            Error,
            `You have to provide a valid Array for element "animals": ${ inputAnimalsIsNotArrayPeople[0].people[0].animals }.`
        )
    });


    it('should throw an error when animals elements are not object', function () {
        assert.throws(
            () => { parseData(inputAnimalsNotObject); },
            Error,
            'element must be object.');
    });


    it('should throw an error when too much keys in animals', function () {
        assert.throws(
            () => { parseData(inputAnimalsTooMuchKeys) },
            Error,
            'element must only contains those keys: name.'
        )
    });


    it('should throw an error when key name is missing', function () {
        assert.throws(
            () => { parseData(inputAnimalsMissingNameKey); },
            Error,
            'You have to provide those keys: name.'
        )
    });


    it('should throw an error when key name is not a string', function () {
        assert.throws(
            () => { parseData(inputAnimalsNameKeyNotString); },
            Error,
            'You have to provide a valid string for element "name": '
           + inputAnimalsNameKeyNotString[0].people[0].animals[0].name + '.'
        )
    });
})