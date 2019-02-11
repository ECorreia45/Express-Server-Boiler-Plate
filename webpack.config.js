const path = require('path');

const mode = process.env.NODE_ENV || 'development';

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'public/javascript'),
  },
  mode,
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js)$/,
        include: path.join(__dirname, './src'),
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
    ],
  },
};
