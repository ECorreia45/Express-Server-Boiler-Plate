import path from 'path';
import express from 'express';
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'views')));

app.get('/', (req, res) => {
  res.render('index')
});

export default app;