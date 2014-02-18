var jeocode = require('../lib/jeocoder')

/*
 * GET details.
 */

exports.details = function(req, res, next){
  var postal_code = req.param('code')
    , details = jeocode(postal_code, function(err, details) {
      if (err) { return next(err) }

      // verify existance
      if (!details) { return res.send(404) }

      // return details
      res.jsonp(details)
    })
}