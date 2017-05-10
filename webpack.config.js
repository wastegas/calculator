const webpack = require('webpack');
const path = require('path');

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
		]
	},
	devServer: {
		contentBase: path.resolve(__dirname, './public'),
		historyApiFallback: true,
		inline: true,	// not using livereload
		open: true		// launch the browser
	},
	devtool: 'eval-source-map'	// better debugging
}

module.exports = config;
