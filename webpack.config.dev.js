var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    './app/app'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
    {
      test: /\.(js|jsx)$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'app')
    },
    {
      test: /\.scss$/,
      include: path.join(__dirname, 'app'),
      loader: 'style-loader!css-loader!sass-loader'
    }
    ]
  }
};
