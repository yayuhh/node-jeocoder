var zips = require('./zips/zips.json')

module.exports = function(zipCode,callback){
  // validate input
  if (!zipCode) { return callback(new Error("undefined zipcode")) }

  if (typeof zipCode === 'string' && zipCode.length !== 5) {
    return callback(new Error('invalid zipcode'))
  }

  if (typeof zipCode === 'number' && (zipCode <= 9999 || zipCode >= 100000)) {
    return callback(new Error('invalid zipcode'))
  }

  // input is valid
  callback(null,zips[zipCode])
}