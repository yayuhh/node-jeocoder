
/**
 * Module dependencies.
 */

var express    = require('express')
  , clustrap   = require('clustrap')
  , zip        = require('./routes/zip')
  , middleware = require('./lib/middleware')
  , pkg        = require('./package.json');

var app = express();

app.configure(function(){
  app.set('name', pkg.name);
  app.set('port', process.env.PORT || 3000);
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(app.router);
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/zips/:zip', middleware.makeCacheable, middleware.allowCrossDomain, zip.details);

clustrap(app);