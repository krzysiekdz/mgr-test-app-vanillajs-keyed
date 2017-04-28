// var webpack = require('webpack');

module.exports = {
	entry:   __dirname + '/src/main.js',
	output: {
		path:  __dirname + '/public',
		filename: 'main.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: ['./node_modules/', './public/'],
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			}
		]
	}
};

