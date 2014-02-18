var us = require('./postal_codes/us.json')
  , ca = require('./postal_codes/ca.json')

module.exports = function(postalCode,callback){
  // validate input
  if (!postalCode) { return callback(new Error("undefined postal code")) }

  if (typeof postalCode === 'string' && (postalCode.length < 5 || postalCode.length > 6)) {
    return callback(new Error('invalid postal code'))
  }

  if (typeof postalCode === 'number' && (postalCode <= 9999 || postalCode >= 100000)) {
    return callback(new Error('invalid postal code'))
  }

  // input is valid
  callback(null, us[postalCode] || ca[postalCode])
}