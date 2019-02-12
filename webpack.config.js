const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  module: {
    rules: [{
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader', 'postcss-loader'],
      }, {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader', 'postcss-loader'],
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      }, {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.js',
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['*', '.js', '.json', '.vue'],
  },
}