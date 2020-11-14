const fs = require('fs');

module.exports.head = function(callback, path) {
  fs.readFile(path, (err, data) => {
    if (err) {
      callback(err);
    } else {
        callback( data.toString().split('\n').slice(0, 10).join('\n') );
    }
  });
}