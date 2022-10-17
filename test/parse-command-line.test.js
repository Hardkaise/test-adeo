const { parseCommandLine } = require('../src/parse-command-line');
const assert = require('assert');

describe('parse-command-line test', function () {
    it('should throw an error when command passed more than one time.', function () {
        assert.throws(
            () => {  parseCommandLine(['node', 'script', '--filter', '--filter']); },
            Error,
            'You cannot specify a command more than one time: --filter.'
        );
    });


    it('should thrown an error when command is unknown.', function () {
        assert.throws(
            () => { parseCommandLine(['node', 'script', 'toto']); },
            Error,
            'Invalid command: toto'
        )
    });


    it('should throw an error when argument is mandatory', function () {
        assert.throws(
            () => { parseCommandLine(['node', 'script', '--filter']); },
            Error,
            'Missing argument for --filter command.'
        )
    });


    it('should throw an error when argument is mandatory with only =', function () {
        assert.throws(
            () => { parseCommandLine(['node', 'script', '--filter=']); },
            Error,
            'Missing argument for --filter command.'
        )
    });


    it('should return commandFunctionId 1 (filter) and args array with ry', function () {
        const result = parseCommandLine([ 'node', 'script', '--filter=ry']);

        assert.deepStrictEqual(result.commandFunctionId, 1);
        assert.deepStrictEqual(result.args, [ { '--filter': 'ry' } ]);
    });

    it('should return commandFunctionId 2 (count) and args array empty', function () {
        const result = parseCommandLine(['node', 'script', '--count']);

        assert.deepStrictEqual(result.commandFunctionId, 2);
        assert.deepStrictEqual(result.args, []);
    });


    it('should return commandFunctionId 3 (filter + count) with array with ry', function () {
        const result = parseCommandLine(['node', 'script', '--filter=ry', '--count']);

        assert.deepStrictEqual(result.commandFunctionId, 3);
        assert.deepStrictEqual(result.args, [ { '--filter': 'ry' } ]);
    });


    it('should return commandFunctionId 3 (count + filter) with array with ry', function () {
        const result = parseCommandLine(['node', 'script', '--count', '--filter=ry']);

        assert.deepStrictEqual(result.commandFunctionId, 3);
        assert.deepStrictEqual(result.args, [ { '--filter': 'ry' } ]);
    });

});