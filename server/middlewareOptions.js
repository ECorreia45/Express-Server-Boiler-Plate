import path from 'path';
import autoPreFixer from 'autoprefixer';
import postCSSPresetEnv from 'postcss-preset-env';

export default {
  sass: {
    src: path.resolve(__dirname, '../sass'),
    dest: path.resolve(__dirname, '../public/stylesheets'),
    indentedSyntax: false,
    siteMap: true,
  },
  postCSS: {
    src: req => path.join(__dirname, '../public/stylesheets', req.path),
    plugins: [
      autoPreFixer({ browsers: ['> 1%', 'IE 7'], cascade: false }),
      postCSSPresetEnv({
        stage: 2,
        browsers: [
          'last 2 versions',
          '> 1%',
          'maintained node versions',
          'not dead',
        ],
      }),
    ],
  },
};
