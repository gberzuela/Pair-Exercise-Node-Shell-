const fs = require('fs');

module.exports.tail = function(callback, path) {
  fs.readFile(path, (err, data) => {
    if (err) {
      callback(err);
    } else {
        callback( data.toString().split('\n').slice(-10).join('\n') );
    }
  });
}