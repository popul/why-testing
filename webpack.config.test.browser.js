var config = require('./webpack.config.js');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

config.devServer = {
	host: 'localhost',
	port: '8081'
};

var index = path.resolve(__dirname, './testsInBrowser.js');

config.entry = {
	test: [
		'mocha!' + index
	]
};

config.plugins.splice(1,1);
config.plugins.push(new HtmlWebpackPlugin());
config.output.publicPath = 'http://localhost:8081/'

module.exports = config;