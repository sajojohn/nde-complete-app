const url = 'http::/mylogger.io/log';
console.log(exports);
console.log(__dirname);
console.log(__filename);
function log(message) {
  console.log(message);
}

// module.exports.log = log; this works as object where the object may have more than one functions
module.exports = log; // exporting a single function
