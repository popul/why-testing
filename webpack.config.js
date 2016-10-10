var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var NpmInstallPlugin = require('npm-install-webpack-plugin');

var path = require('path');
var pathToAngular = path.resolve(__dirname, "./node_modules/angular/angular.min.js");

var config = {
  entry: {
    vendors: [
      "script!jquery",
      "lodash",
      'angular-material/angular-material.css',
      "angular-material",
      "ng-redux",
      "redux",
      "redux-actions",
      "angular"
    ],
    app: [
      './src'
    ]
  },
  resolve: {
    alias: {
      'angular': pathToAngular
    }
  },
  output: {
    path: 'dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
       { test: /\.js$/, exclude: [/src\/lib/, /node_modules/], loader: 'ng-annotate!babel' },
       { test: /\.html$/, loader: 'raw' },
       { test: /\/components\/.*\.css$/, loader: 'style!css-loader?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'},
       { test: /\.css$/, loader: ExtractTextPlugin.extract('css'), exclude: /\/components\// },
       { test: /\.(ttf|otf|eot|svg|woff(2)?)$/, loader: 'url' }
    ],
    noParse: [
      pathToAngular
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body'
    }),
    new NpmInstallPlugin(),
    new ExtractTextPlugin("styles.css"),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.bundle.js')
  ]
};

if (process.env.NODE_ENV !== "production") {
  var componentHotLoader = require.resolve('angular-hot-reloader/loaders/component-loader');
  var htmlHotLoader = require.resolve('angular-hot-reloader/loaders/jade-loader');

  (config.module.preLoaders = config.module.preLoaders || []).push(
    { test: /\.component\.js$/, loader: componentHotLoader, exclude: [/\.test\.js/]}
  );

  (config.module.postLoaders = config.module.postLoaders || []).push(
    { test: /\.html$/, loader: htmlHotLoader, include: /\/src\//}
  );

  config.entry.app = [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server'
  ].concat(config.entry.app);

  config.devtool = 'eval';
}

module.exports = config;