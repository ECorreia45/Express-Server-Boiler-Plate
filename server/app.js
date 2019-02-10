import path from 'path';
import express from 'express';
const app = express();

// routes
import homeRoutes from './routes/home';
import apiRoutes from './routes/api';

// views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// configs
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'views')));

// paths
app.use('/', homeRoutes);
app.use('/api', apiRoutes);

export default app;