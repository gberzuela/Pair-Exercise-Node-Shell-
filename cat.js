const fs = require('fs');

module.exports.cat = function(callback, path) {
  fs.readFile(path, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(data);
    }
  });
}
