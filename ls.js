const fs = require('fs');

module.exports.ls = function(callback) {
    fs.readdir('./', 'utf8', (err, files) => {
        if (err) {
            callback(err);
        } else {
            callback(`\n${files.join('\n')}`);
        }
    })
}
