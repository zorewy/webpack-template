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
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
module.exports = merge(webpackBase, {
	mode: "production",
	// module: {
	// 	rules: utils.styleLoaders({
	// 		sourceMap: config.build.productionSourceMap,
	// 		extract: true,
	// 		usePostCSS: true
	// 	})
	// },
	devtool: config.build.productionSourceMap ? config.build.devtool : false,
	output: {
		path: config.build.assetsRoot,
		filename: utils.assetsPath('js/[name].[hash].js'),
		chunkFilename: utils.assetsPath('js/[id].[hash].js')
	},
	// 插件
	plugins: [
		new CleanWebpackPlugin('../dist'),
		new webpack.DefinePlugin({
			'process.env': require('../config/prod.env')
		}),
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			title: 'awd',
			template: 'static/index.html',
			filename: config.build.assetsRoot + '/index.html' ,//指定输出路径和文件名
		}),
		// new CopyWebpackPlugin([
		// 	{
		// 		from: path.resolve(__dirname, '../static'),
		// 		to: config.dev.assetsSubDirectory,
		// 		ignore: ['.*']
		// 	}
		// ])
	],
})
