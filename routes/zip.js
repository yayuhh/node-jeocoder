var jeocode = require('../lib/jeocoder')

/*
 * GET details.
 */

exports.details = function(req, res, next){
  var zipCode = req.param('zip')
    , details = jeocode(zipCode, function(err, details) {
      if (err) { return next(err) }

      // verify existance
      if (!details) { return res.send(404) }

      // return details
      res.jsonp(details)
    })
}