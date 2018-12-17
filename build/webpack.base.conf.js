const path = require('path')
const webpack = require('webpack')
const config = require('../config')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const utils = require('./utils');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

function resolve (dir) {
	return path.join(__dirname, '..', dir)
}

module.exports = {
	context: path.resolve(__dirname, '../'),
	mode: 'development', // development || production
	entry: {
		app: './src/index.js'
	},
	output: {
		path: config.build.assetsRoot,
		filename: '[name].js',
		// chunkFilename: '[name].js',
		publicPath: process.env.NODE_ENV === 'production'
			? config.build.assetsPublicPath
			: config.dev.assetsPublicPath
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json', '.md'],
		alias: {
			'@': resolve('src'),
		}
	},
	module: {
		rules: [
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: utils.assetsPath('image/[name].[hash:7].[ext]')
				}
			},
			{
				test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: utils.assetsPath('media/[name].[hash:7].[ext]')
				}
			},
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
				}
			},
		]
	},
	// optimization: {
	// 	splitChunks: {
	// 		chunks: 'initial', // 只对入口文件处理
	// 		cacheGroups: {
	// 			vendor: { // split `node_modules`目录下被打包的代码到 `page/vendor.js && .css` 没找到可打包文件的话，则没有。css需要依赖 `ExtractTextPlugin`
	// 				test: /node_modules\//,
	// 				name: 'js/vendor',
	// 				priority: 10,
	// 				enforce: true
	// 			},
	// 			commons: { // split `common`和`components`目录下被打包的代码到`page/commons.js && .css`
	// 				test: /common\/|components\//,
	// 				name: 'js/commons',
	// 				priority: 10,
	// 				enforce: true
	// 			}
	// 		}
	// 	},
	// 	runtimeChunk: {
	// 		name: 'page/manifest'
	// 	}
	// },
	plugins: [
		new CleanWebpackPlugin(['../dist']),
		// new webpack.ProvidePlugin({
		// 	React:'react',
		// 	ReactDOM:'react-dom',
		// 	Component:['react','Component']
		// }),
		// new ExtractTextPlugin({
		// 	filename: '[name].css',
		// 	ignoreOrder: true
		// }),
		new HtmlWebpackPlugin(),
		// new ImageminPlugin({
		// 	disable: process.env.NODE_ENV !== 'production', // 开发时不启用
		// 	pngquant: { // 图片质量
		// 		quality: '95-100'
		// 	}
		// })
	]
}