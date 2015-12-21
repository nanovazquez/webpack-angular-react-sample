var path = require('path');
var webpack = require('webpack');

var config = {
  entry: {
    component1: './component1/app.js',
    component2: './component2/app.js',
    vendors: ['angular', 'angular-ui-router']
  },
  output: {
    path: __dirname + '/static',

    // Make sure to use [name] or [id] in output.filename
    //  when using multiple entry points
    filename: '[name].bundle.js',
    chunkFilename: '[id].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
          cacheDirectory: true
        }
      },
    ],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.bundle.js')
  ]
};

module.exports = config;