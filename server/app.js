import path from 'path';
import createHTTPError from 'http-errors';
import express from 'express';
const app = express();

// routes
import siteRoutes from './routes/main-site';
import apiRoutes from './routes/api';

// views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// configs
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'views')));

// paths
app.use('/', siteRoutes);
app.use('/api', apiRoutes);

// catch unknown path and throw a 404
app.use((req, res, next) => {
  next(createHTTPError(404));
});

// handle error for api and website
app.use((error, req, res, next) => {
  const isAnAPIEndpoint = /^\/api\/v(\d+\.?)+\//i.test(req.url);
  
  res.status(error.status || 500);
  
  if (isAnAPIEndpoint) {
    res.json({
      error: {
        status: error.status,
        message: `'${req.url}' is an unknown api endpoint. Please visit "/api/:versionNumber" for complete list of available endpoints`,
        availableVersionNumbers: ['v1']
      }
    })
  } else {
    res.redirect('/404');
  }
});

export default app;