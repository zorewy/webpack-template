const path = require('path')
const webpackBase = require('./webpack.base.conf')
const merge = require('webpack-merge')
const utils = require('./utils')
const config = require('../config')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
module.exports = merge(webpackBase, {
	mode: "development",
	module: {
		rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
	},
	devServer: {
		host: 'localhost',
		port: 1314,
		// https: true,
		// noInfo: true,
		// after: function(app) {
		// 	app.listeners(function (aa){
		// 		console.log(aa)
		// 	})
		// 	console.log(app.host)
		// }
	},
	// 插件
	plugins: [
		new DashboardPlugin(),
		new webpack.DefinePlugin({
			'process.env': require('../config/dev.env')
		}),
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			title: 'awd'
		}),
		new ExtractTextPlugin("css/[name].css"),
		new CopyWebpackPlugin([
			{
				from: path.resolve(__dirname, '../static'),
				to: config.dev.assetsSubDirectory,
				ignore: ['.*']
			}
		])
	],
})
