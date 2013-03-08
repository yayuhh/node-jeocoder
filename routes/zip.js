var zips = require('../lib/zips/zips.json')

/*
 * GET details.
 */

exports.details = function(req, res){
  var zipCode = req.param('zip')

  // validate input
  if (!zipCode) { return res.send(400,'undefined zipcode') }
  if (zipCode.length !== 5) { return res.send(400, 'invalid zipcode') }

  var details = zips[zipCode]

  // verify existance
  if (!details) { return res.send(404) }

  // success
  res.jsonp(details)
};