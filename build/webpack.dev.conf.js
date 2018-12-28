const path = require('path')
const webpackBase = require('./webpack.base.conf')
const merge = require('webpack-merge')
const utils = require('./utils')
const config = require('../config')
const webpack = require('webpack')
const portfinder = require('portfinder')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

const devWebpackConfig = merge(webpackBase, {
	mode: "development",
	// module: {
	// 	rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
	// },
	devServer: {
		clientLogLevel: 'warning',
		host: 'localhost',
		port: 1314,
		progress: true,
		compress: true,
		hot: true,
		inline: true,
		open: config.dev.autoOpenBrowser,
		historyApiFallback: {
			rewrites: [
				{ from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
			],
		},
		overlay: config.dev.errorOverlay
			? { warnings: false, errors: true }
			: false,
		quiet: true,
		// stats: "errors-only"
		// https: true,
		// noInfo: true,
	},
	// 插件
	plugins: [
		new DashboardPlugin(),
		new webpack.DefinePlugin({
			'process.env': require('../config/dev.env')
		}),
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			title: 'awd',
			template: 'static/index.html'
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

module.exports = new Promise((resolve, reject) => {
	portfinder.basePort = process.env.PORT || config.dev.port
	portfinder.getPort((err, port) => {
		if (err) {
			reject(err)
		} else {
			process.env.PORT = port
			// add port to devServer config
			devWebpackConfig.devServer.port = port
			devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
				compilationSuccessInfo: {
					messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
				},
				onErrors: config.dev.notifyOnErrors
					? utils.createNotifierCallback()
					: undefined
			}))
			resolve(devWebpackConfig)
		}
	})
})
