const fs = require('fs');

module.exports.sort = function(callback, path) {
  fs.readFile(path, (err, data) => {
    if (err) {
      callback(err);
    } else {
        callback( data.toString().split('\n').sort().join('\n') );
    }
  });
}