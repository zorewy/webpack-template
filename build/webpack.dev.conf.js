const path = require('path')
const webpackBase = require('./webpack.base.conf')
const merge = require('webpack-merge')
const config = require('../config')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(webpackBase, {
	devServer: {
		host: 'localhost',
		port: 1314,
		compress: true
	},
	// 插件
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			title: 'awd'
		}),
		new ExtractTextPlugin("css/[name].css")
	],
})
