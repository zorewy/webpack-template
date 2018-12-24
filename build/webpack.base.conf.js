const path = require('path')
const utils = require('./utils')
const config = require('../config')

function resolve (dir) {
	return path.join(__dirname, '..', dir)
}

const createLintingRule = () => ({
	test: /\.(js|vue|jsx)$/,
	loader: 'eslint-loader',
	enforce: 'pre',
	include: [resolve('src'), resolve('test')],
	options: {
		formatter: require('eslint-friendly-formatter'),
		emitWarning: !config.dev.showEslintErrorsInOverlay
	}
})
module.exports = {
	mode: process.env.NODE_ENV === 'production' ?
		'production': 'development',
	// 入口
	entry: {
		app:'./src/index.js',
	},
	// 输出
	output: {
		path: path.resolve(__dirname,'../dist'),
		filename:'static/js/[name].main.[hash].js',
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
	// loader模块
	module: {
		rules: [
			// ...(config.dev.useEslint ? [createLintingRule()] : []),
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')],
				use: {
					loader: 'babel-loader'
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
			{
				test:/\.(png|jpg|gif|jpeg)/,  //是匹配图片文件后缀名称
				use:[{
					loader:'url-loader', //是指定使用的loader和loader的配置参数
					options:{
						limit: 10000,  //是把小于500B的文件打成Base64的格式，写入JS
						publicPath: '../',
						name: utils.assetsPath('images/[name].[hash:7].[ext]')
					}
				}]
			}
		]
	},
	node: {
		setImmediate: false,
		dgram: 'empty',
		fs: 'empty',
		net: 'empty',
		tls: 'empty',
		child_process: 'empty'
	}
}