import path from 'path';
import express from 'express';
import helmet from 'helmet';
import createHTTPError from 'http-errors';
import cookieParser from 'cookie-parser';
import sass from 'node-sass-middleware';
import postCSS from 'postcss-middleware';
import options from './middlewareOptions';
// routes
import siteRoutes from './routes/main-site';
import apiRoutes from './routes/api';
// express app
const app = express();

// views
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'jade');

// configs/middleware
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// paths
app.use(siteRoutes);
app.use('/stylesheets', sass(options.sass), postCSS(options.postCSS));
app.use('/api', apiRoutes);
app.use(express.static(path.resolve(__dirname, '../public')));

// catch unknown paths
app.use((req, res, next) => {
  next(createHTTPError(404));
});

// handle unknown paths for api and website
app.use((error, req, res, next) => {
  const isAnAPIEndpoint = /^\/api\/v(\d+\.?)+/i.test(req.path);

  res.status(error.status || 500);

  if (isAnAPIEndpoint) {
    res.json({
      error: {
        status: error.status,
        message: `'${req.url}' is an unknown api endpoint. Please visit "/api/:versionNumber" for complete list of available endpoints`,
        availableVersionNumbers: ['v1'],
      },
    });
    next();
  } else {
    res.redirect('/404');
  }
});

export default app;
