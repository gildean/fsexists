'use strict';
var fs = require('fs');

function exists(path, callback) {
    fs.access(path, function (err) {
        if (err) return callback(false);
        return callback(true);
    });
}

function existsSync(path) {
    try {
        fs.accessSync(path);
        return true;
    } catch (e) {
        return false;
    }
}

module.exports = { exists: exists, existsSync: existsSync };
