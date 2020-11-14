const request = require('request');

module.exports.curl = function(callback, link) {
  request(link, function(error, response, body) {
    if (error) callback(error);
    callback(body);
  })
}
