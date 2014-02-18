var csv = require('csv')
  , Q = require('q')
  , fs = require('fs')
  , path = require('path')


function parsePostalCodesFromCSV() {
  var deferred = Q.defer()
    , postalCodes = {}
    , previous

  csv()
  .from.stream(fs.createReadStream(path.join(__dirname,'../postal_codes/ca.csv'), {encoding:'utf8'}))
  .on('record', function(data, index) {
    console.log(data);
    if (data[3] && data[3] !== '') {
      postalCodes[data[0]] = {
        province: data[4],
        city: data[3].toUpperCase()
      }
      previous = data[0];
    } else {
      postalCodes[data[0]] = postalCodes[previous];
    }
  })
  .on('error', function(error){
    console.log(error);
  })
  .on('end',function(count){
    console.log('count: '+count)
    deferred.resolve(postalCodes);
  })

  return deferred.promise
}

/* return json */
module.exports = (function() {
  parsePostalCodesFromCSV()
  .then(function(postalCodes) {
    fs.writeFileSync(path.resolve(__dirname,'../postal_codes/ca.json'),JSON.stringify(postalCodes))
  }).fail(function(err) {
    console.log(err)
  })
})();