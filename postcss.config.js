module.exports = ({ file }) => ({
  parser: file.extname === '.scss' ? 'postcss-scss' : false,
  ident: 'postcss',
  plugins: {
    'postcss-preset-env': {
      stage: 0,
    },
    autoprefixer: {},
  },
});
