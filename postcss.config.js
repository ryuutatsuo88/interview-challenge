const configUtils = require('./configuration/configUtils');

module.exports = {
  ident: 'postcss',
  plugins: {
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009'
      }
    }
  },
  sourceMap: configUtils.isProdBuild
}
