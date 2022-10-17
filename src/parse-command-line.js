const commands = {
    '--filter': {
        commandId: 1, // bitwise
        arguments: 1 // number of argument who should be provided
    },
    '--count': {
        commandId: 2,
        arguments: 0
    }
}


/**
 * Loop on argv who represent the command line, check if the commands are valid,
 * return the bitwise number of the operation to execute and the arguments in an array of objects.
 * @param { Array.<string> } argv - argument of the program (process.argv).
 * @return {{args: *[], commandFunctionId: number}} - return an object with the commandFunctionId
 * and an array of objects containing the argument of the command
 */
function parseCommandLine(argv) {
    let commandFunctionId = 0; // var used to combine id to have to operation to execute
    const args = []; // arg of future command parsed
    const commandKeys = Object.keys(commands); // array got from the commands object
    const commandsAlreadyAdded = []; // array to check if the command is in double

    for (let i = 2; i < argv.length; i++) {
        const indexFirstEqual = argv[i].indexOf('=');
        const commandName = indexFirstEqual !== -1 ? argv[i].substring(0, indexFirstEqual) : argv[i];

        if (commandsAlreadyAdded.includes(commandName)) {
            throw new Error(`You cannot specify a command more than one time: ${commandName}.`);
        }

        if (commandKeys.includes(commandName)) {

            if (commands[commandName].arguments > 0) {
                const arg = argv[i].substring(indexFirstEqual + 1, argv[i].length);

                if (indexFirstEqual === -1 || !arg) { // checking if we have an argument
                    throw new Error(`Missing argument for ${commandName} command.`);
                } else {
                    args.push({
                        [commandName]: arg
                    })
                }
            }

            commandFunctionId += commands[commandName].commandId;
            commandsAlreadyAdded.push(commandName);
        } else {
            throw new Error(`Invalid command: ${commandName}`);
        }
    }

    return  { commandFunctionId, args };
}

module.exports = {
    parseCommandLine
}