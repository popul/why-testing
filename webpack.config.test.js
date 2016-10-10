var webpack = require('webpack');
var fs = require('fs');
var nodeExternals = require('webpack-node-externals');
var path = require('path');
var pathToAngular = path.resolve(__dirname, "./node_modules/angular/angular.min.js");

var config = {
  entry: [
    './src'
  ],
  resolve: {
    alias: {
      'angular': pathToAngular
    }
  },
  target: 'node',
  output: {
    filename: 'bundle.js'
  },
  externals: [nodeExternals({
    whitelist: []
  })],
  module: {
    loaders: [
       { test: /\.js$/, exclude: [/src\/lib/, /node_modules/], loader: 'ng-annotate!babel' },
       { test: /\.json$/, loader: 'raw' },
       { test: /\.html$/, loader: 'raw' },
       { test: /\/components\/.*\.css$/, loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'},
       { test: /\.css$/, loader: 'css', exclude: /\/components\// },
       { test: /\.(ttf|otf|eot|svg|woff(2)?)$/, loader: 'url' }
    ],
    noParse: [
      pathToAngular
    ]
  }
};

module.exports = config;