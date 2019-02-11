import path from 'path';
import express from 'express';
import helmet from 'helmet';
import createHTTPError from 'http-errors';
import cookieParser from 'cookie-parser';
import sassMiddleware from 'node-sass-middleware';
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
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/stylesheets', sassMiddleware({
  src: path.resolve(__dirname, '../sass'),
  dest: path.resolve(__dirname, '../public/stylesheets'),
  indentedSyntax: false,
  sourceMap: true,
}));

// paths
app.use(siteRoutes);
app.use('/api', apiRoutes);
app.use(express.static(path.resolve(__dirname, '../public')));

// catch unknown paths
app.use((req, res, next) => {
  next(createHTTPError(404));
});

// handle unknown paths for api and website
app.use((error, req, res, next) => {
  const isAnAPIEndpoint = /^\/api\/v(\d+\.?)+/i.test(req.url);

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
