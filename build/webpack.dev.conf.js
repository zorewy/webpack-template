const baseWebpackConfig = require('./webpack.base.conf')
const merge = require('webpack-merge')
const webpack = require('webpack')
const config = require('../config')
const packageConfig = require('../package.json')
const FriendlyErrorsPlugin  = require('Friendly-errors-webpack-plugin')
const portfinder = require('portfinder')
const utils = require('./utils')
const path = require('path')
const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const WriteFilePlugin = require('write-file-webpack-plugin');

console.log()
exports.assetsPath = function (_path) {
	const assetsSubDirectory = process.env.NODE_ENV === 'production'
		? config.build.assetsSubDirectory
		: config.dev.assetsSubDirectory

	return path.posix.join(assetsSubDirectory, _path)
}


module.exports = merge(baseWebpackConfig, {

	devServer: {
		host: 'localhost',
		compress: true,
		port: PORT,
		inline: true,//启动inline
		hot: true
	}
})

// module.exports = new Promise((resolve, reject) => {
// 	portfinder.basePort = process.env.PORT || config.dev.port
// 	portfinder.getPort((err, port) => {
// 		if (err) {
// 			reject(err)
// 		} else {
// 			// publish the new Port, necessary for e2e tests
// 			process.env.PORT = port
// 			// add port to devServer config
// 			devWebpackConfig.devServer.port = port
//
// 			// Add FriendlyErrorsPlugin
// 			devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
// 				compilationSuccessInfo: {
// 					messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`, `${path.posix.join(config.dev.assetsPublicPath, 'index.html')}`],
// 				},
// 				onErrors: config.dev.notifyOnErrors
// 					? utils.createNotifierCallback()
// 					: undefined
// 			}))
//
// 			resolve(devWebpackConfig)
// 		}
// 	})
// })
