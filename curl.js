const request = require('request');

module.exports.curl = function(callback, link) {
  request(link, function(error, response, body) {
    callback(body);
  })
}
