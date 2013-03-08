var csv = require('csv')
  , Q = require('q')
  , fs = require('fs')
  , path = require('path')


function parseZipsFromCSV() {
  var deferred = Q.defer()
    , zips = {}

  csv()
  .from.stream(fs.createReadStream(path.join(__dirname,'/zips.csv')))
  .transform(function(data,index){
    if (index == 0) { return /* skip first line */ }

    zips[data[0]] = {
      state: data[3],
      city: data[2]
    }

    return data;
  })
  .on('end',function(count){
    console.log('count: '+count)
    deferred.resolve(zips);
  })

  return deferred.promise
}

/* return json */
module.exports = (function() {
  parseZipsFromCSV()
  .then(function(zips) {
    fs.writeFileSync(path.resolve(__dirname,'zips.json'),JSON.stringify(zips))
  }).fail(function(err) {
    console.log(err)
  })
})();