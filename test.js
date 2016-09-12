var indexFile = './index.js';
var fsexists = require(indexFile);
var assert = require('assert');
fsexists.exists(indexFile, function (ok2) {
    assert.ok(ok2);
    var ok1 = fsexists.existsSync(indexFile);
    assert.ok(ok1);
    console.log('all tests passed');
});
