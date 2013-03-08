var one_day_in_seconds = 86400

exports.makeCacheable = function(req, res, next) {
  if (!res.getHeader('Cache-Control')) {
    res.setHeader('Cache-Control', 'public, max-age=' + one_day_in_seconds)
  }

  next()
}

// Middleware enables cross origin resource sharing (CORS) for any
// domain. This enables us to use this service without JSONP
exports.allowCrossDomain = function(req, res, next) {
  if (!res.getHeader('Access-Control-Allow-Origin')) {
    res.header('Access-Control-Allow-Origin', '*')
  }

  next()
}