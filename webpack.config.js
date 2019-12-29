const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, 'views/src/app.js'),
	output: {
		path: path.resolve(__dirname, 'views/public'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: path.resolve(__dirname, 'views/src'),
				use: ['babel-loader']
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		port: 9000
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './views/index.html' //source html
		})
	]
};
