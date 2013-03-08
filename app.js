
/**
 * Module dependencies.
 */

var express  = require('express')
  , clustrap = require('clustrap')
  , zip  = require('./routes/zip')
  , middleware = require('./lib/middleware');

var app = express();

app.configure(function(){
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