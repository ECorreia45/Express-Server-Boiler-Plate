import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home')
});

router.get('/login', (req, res) => {
  res.render('login')
});

router.get('/register', (req, res) => {
  res.render('register')
});

router.get('/signup', (req, res) => {
  res.render('signup')
});

router.get('/404', (req, res) => {
  res.render('404');
});

export default router;