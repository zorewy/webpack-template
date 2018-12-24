const path = require('path')
const webpack = require('webpack')
const config = require('../config')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');

function resolve (dir) {
	return path.join(__dirname, '..', dir)
}


module.exports = {
	context: path.resolve(__dirname, '../'),
	// 模式
	mode: "development",
	// 入口
	entry: {
		app:'./src/index.js',
	},
	// 输出
	output: {
		path: path.resolve(__dirname,'../dist'),
		filename:'static/js/[name].main.[hash].js',
		publicPath: '/'
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json', '.md'],
		alias: {
			'@': resolve('src'),
		}
	},
	devServer: {
		host: 'localhost',
		port: 1314,
		compress: true
	},
	// loader模块
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				include: [resolve('src'), resolve('test')],
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader"
				}),
			},
			{
				test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: 'media/[name].[hash:7].[ext]'
				}
			},
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: 'fonts/[name].[hash:7].[ext]'
				}
			},
			{
				test:/\.(png|jpg|gif|jpeg)/,  //是匹配图片文件后缀名称
				use:[{
					loader:'url-loader', //是指定使用的loader和loader的配置参数
					options:{
						limit: 10000,  //是把小于500B的文件打成Base64的格式，写入JS
						publicPath: '../',
						name: 'images/[name].[hash:7].[ext]'
					}
				}]
			}
		]
	},
	// 插件
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			title: 'awd'
		}),
		new ExtractTextPlugin("css/[name].css")
	],
}