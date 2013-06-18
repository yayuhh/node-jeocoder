var jeocode = require('../lib/jeocoder')

/*
 * GET details.
 */

exports.details = function(req, res, next){
  var postalCode = req.param('code')
    , details = jeocode(postalCode, function(err, details) {
      if (err) { return next(err) }

      // verify existance
      if (!details) { return res.send(404) }

      details.country = postalCode.length === 5 ? 'US' : 'CA'

      // return details
      res.jsonp(details)
    })
}