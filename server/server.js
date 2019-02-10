import app from './app';

const PORT = process.env.PORT || 4500;

app.listen(PORT, () => {
  console.log(`server: running on port ${PORT}`);
});
