const request = require('request');

module.exports.curl = function(link) {
  request(link, function(error, response, body) {
    process.stdout.write(body);
    process.stdout.write("\nprompt > ");
  })
}
