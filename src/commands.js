/**
 * @typedef { Object } Animal
 * @property { String } name - string defining the type of the animal.
 */


/**
 * @typedef { Object } People
 * @property { String } name - string defining the name of the person.
 * @property { Array.<Animal> } animals - array containing the animals owned by the person.
 */


/**
 * @typedef { Object } Country
 * @property { String } name - string defining the name of the country.
 * @property { Array.<People> } people - array containing the people of the country.
 */


/**
 * Loop on the data and remove the element who do not match with the filter value.
 * It will remove empty people and empty country if no match with animals names.
 * @param { Array.<Country> } data - input array of countries to filter.
 * @param { String } filter - filter to apply from command arguments.
 * @returns { Array.<Country> } - element filtered by the function with the given filter.
 */
function filter(data, filter) {
    return data.reduce((accCountry, country) => {
        const peopleResult = country.people.reduce((accPeople, people) => {
            const animals = people.animals.filter((el) => el.name.includes(filter));

            if (animals.length > 0) {
                accPeople.push({ ...people, animals });
            }
            return accPeople;
        }, []);

        if (peopleResult.length > 0) {
            accCountry.push({ ...country, people: peopleResult});
        }
        return accCountry;
    }, []);
}


/**
 * Loop on the data and appends in the name, the number of people and animals contained in
 * countries and people.
 * @param { Array.<Country> } data - input array of countries to count.
 * @returns { Array.<Country> } - array of countries with the country name appended
 * with the number of people and with the number of animals appended in the people name var
 */
function count(data) {
    const dataDeepCloned = JSON.parse(JSON.stringify(data));

    dataDeepCloned.forEach((country) => {
        country.name = country.name + ` [${country.people.length}]`;

        country.people.forEach((people) => {
            people.name = people.name + ` [${people.animals.length}]`;
        });
    });
    return dataDeepCloned;
}


/**
 * Loop on the data and remove the element who do not match with the filter value.
 * It will remove empty people and empty country if no match with animals names.
 * It also appends in the name the number of people and animals remaining in countries and peoples.
 * @param { Array.<Country> } data - input array of countries to count.
 * @param { String } filterValue - filter to apply from command arguments.
 * @return { Array.<Country> } - array of countries remaining with the country name appended
 * with the number of people and with the number of animals appended in the people name var
 */
function filterCount(data, filterValue) {
    let result = filter(data, filterValue);
    result = count(result);

    return result;
}


module.exports = {
    count,
    filter,
    filterCount
}