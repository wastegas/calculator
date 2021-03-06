const webpack = require('webpack');
const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const UglyfiJsPlugin = require('uglifyjs-webpack-plugin');

let config = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, './public'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,	// files ending with js and jsx
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.scss$/,
				use: ExtractTextWebpackPlugin.extract({
					use: ['css-loader','sass-loader'],
					fallback: 'style-loader'
				}) //end extract
			},
		]
	},
	plugins: [
		new ExtractTextWebpackPlugin('style.css'),
	],
	devServer: {
		contentBase: path.resolve(__dirname, './public'),
		historyApiFallback: true,
		inline: true,	// not using livereload
		open: true		// launch the browser
	},
	devtool: 'eval-source-map'	// better debugging
}

module.exports = config;

if (process.env.NODE_ENV === 'production') {
	module.exports.plugins.push(
		new webpack.optimize.UglifyJsPlugin()
	);
}
