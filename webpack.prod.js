const config = require('./webpack.config');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

module.exports = merge(config, {
  mode: 'production',
  entry: path.resolve(__dirname, 'src', 'imgViewer.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'imgViewer.js',
    libraryTarget: 'umd',
  },
  plugins: [
    new CleanWebpackPlugin(['dist/'], {
      root: path.resolve(__dirname),
      dry: true,
      verbose: true,
    }),
  ],
  externals: {
    'vue': 'vue',
  }
});