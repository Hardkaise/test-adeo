/**
 * verify if element is an object with only the authorized keys and a name key with type of string.
 * @param element - value of type unknown to test.
 * @param { Array.<String> } elementAuthorizedKeys - keys authorized into the element object.
 */
function verifyObjectAndNameKey(element, elementAuthorizedKeys) {
    if (typeof element !== 'object') {
        throw new Error('element must be object.');
    }

    const elementKey = Object.keys(element);

    if (elementKey.some((k) => !elementAuthorizedKeys.includes(k))) {
        throw new Error(`element must only contains those keys: ${ elementAuthorizedKeys.join(', ') }.`)
    }


    if (elementAuthorizedKeys.some((k) => !elementKey.includes(k))) {
        throw new Error(`You have to provide those keys: ${elementAuthorizedKeys.join(', ')}.`);
    }


    if (typeof element['name'] !== 'string') {
        throw new Error(`You have to provide a valid string for element "name": ${ element['name'] }.`);
    }
}


/**
 * verify if element is an object with the right keys and if the array key exists.
 * @param element - value of type unknown to test.
 * @param { Array.<String> } elementAuthorizedKeys - keys authorized into the element object.
 * @param { String } keyArray - key of the array.
 */
function verifyElement(element, elementAuthorizedKeys, keyArray) {
    verifyObjectAndNameKey(element, elementAuthorizedKeys)

    if (!Array.isArray(element[keyArray])) {
        throw new Error(`You have to provide a valid Array for element "${keyArray}": ${ element[keyArray] }.`);
    }
}


/**
 * Verify if the data provided to the CLI is matching the expectations.
 * @param data - value of type unknown to test.
 */
function parseData(data) {
    const dataElementAuthorizedKeys = ['name', 'people'];
    const peopleElementAuthorizedKeys = ['name', 'animals'];
    const animalElementAuthorizedKeys = ['name'];

    if (!Array.isArray(data)) {
        throw new Error('data must be an array.');
    }

    data.forEach((d) => {
        verifyElement(d, dataElementAuthorizedKeys, 'people');

        d.people.forEach((p) => {
            verifyElement(p, peopleElementAuthorizedKeys, 'animals');

            p.animals.forEach((animal) => {
                verifyObjectAndNameKey(animal, animalElementAuthorizedKeys);
            });
        });
    });
}


module.exports = {
    parseData,
}