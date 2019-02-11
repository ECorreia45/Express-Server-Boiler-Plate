import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('home', { title: 'Express' });
});

router.get('/login', (req, res) => {
  res.render('login', { title: 'Express - Login' });
});

router.get('/register', (req, res) => {
  res.render('register', { title: 'Express - Api Register' });
});

router.get('/signup', (req, res) => {
  res.render('signup', { title: 'Express - Signup' });
});

router.get('/404', (req, res) => {
  res.render('404', { title: '404 - Page not found!' });
});

export default router;
