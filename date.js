module.exports.date = function(callback) {
  const date = new Date;
  callback(`${date.toUTCString()}`);
}
