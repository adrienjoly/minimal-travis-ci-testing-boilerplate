var vows = require('vows'),
    assert = require('assert');

var fs = require('fs');
var vm = require('vm');

var codeToTest = fs.readFileSync('code-to-test.js');
vm.runInThisContext(codeToTest);//(require);

// Create a Test Suite
vows.describe('Code to test').addBatch({
    'fctToTest': {
        topic: function() { return fctToTest },

        'is a function': function (topic) {
            assert.equal (typeof topic, 'function');
        }
    },
})
.export(module); // to be run by vows CLI
//.run(); // or to be run with the node command
