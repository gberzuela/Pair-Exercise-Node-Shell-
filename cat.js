const fs = require('fs');

module.exports.cat = function(path) {
  fs.readFile(path, (err, data) => {
    if (err) throw err;
    process.stdout.write(data);
    process.stdout.write("\nprompt > ");
  });
}
