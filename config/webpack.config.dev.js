var merge = require('webpack-merge');
var base = require('./webpack.config.base');
var path = require('path');

var outputFile = 'compass-ui';
var globalName = 'CompassUi';

module.exports = merge(base, {
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: outputFile + '.common.js',
    library: globalName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  devtool: 'eval-source-map',
});
