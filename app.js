
/**
 * Module dependencies.
 */

var express     = require('express')
  , clustrap    = require('clustrap')
  , postal_code = require('./routes/postal_code')
  , middleware  = require('./lib/middleware')
  , pkg         = require('./package.json');

var app = express();

app.configure('development', function(){
  app.use(express.logger('dev'));
  app.use(express.errorHandler());
});

app.configure(function(){
  app.set('name', pkg.name);
  app.set('port', process.env.PORT || 3000);
  app.use(express.bodyParser());
  app.use(app.router);
});

app.get('/zips/:code', middleware.makeCacheable, middleware.allowCrossDomain, postal_code.details);
app.get('/postal_codes/:code', middleware.makeCacheable, middleware.allowCrossDomain, postal_code.details);

clustrap(app);