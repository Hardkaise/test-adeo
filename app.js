const { data } = require('./data/data')
const { count, filter, filterCount } = require('./src/commands');
const { parseData } = require('./src/parse-data');
const { parseCommandLine } = require('./src/parse-command-line');


/**
 * Execute commands of the script and write result on the standard output.
 * @param { Array.<Country> } data - input array of countries to filter.
 * @param { number } commandId - bitwise number of the operation (returned after command line parsed).
 * @param { Array.<Object.<string, string>> } args - commands arguments.
 */
function executeCommand(data, commandId, args) {
    let result;

    switch (commandId) {
        case 1: {
            result = filter(data, args[0]['--filter']);
            break;
        }
        case 2: {
            result = count(data);
            break;
        }
        case 3: {
            result = filterCount(data, args[0]['--filter']);
            break;
        }
    }

    console.log(JSON.stringify(result, null, 2));
}



function main() {
    const argv = process.argv;
    if (argv.length < 3 && argv > 4) {
        throw new Error(`Invalid number of arguments: ${argv.length}`);
    }
    const { commandFunctionId, args } = parseCommandLine(argv);

    parseData(data);
    executeCommand(data, commandFunctionId, args);
    process.exit(0);
}


main();