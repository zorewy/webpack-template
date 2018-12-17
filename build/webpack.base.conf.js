const path = require('path')
const webpack = require('webpack')
const config = require('../config')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	context: path.resolve(__dirname, '../'),
	mode: 'development', // development || production
	entry: {
		app: './src/index.js'
	},
	output: {
		path: config.build.assetsRoot,
		filename: '[name].js',
		chunkFilename: '[name].js',
		publicPath: process.env.NODE_ENV === 'production'
			? config.build.assetsPublicPath
			: config.dev.assetsPublicPath
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json', '.md'],
		alias: {
			'@': path.resolve('src'),
		}
	},
	optimization: {
		splitChunks: {
			chunks: 'initial', // 只对入口文件处理
			cacheGroups: {
				vendor: { // split `node_modules`目录下被打包的代码到 `page/vendor.js && .css` 没找到可打包文件的话，则没有。css需要依赖 `ExtractTextPlugin`
					test: /node_modules\//,
					name: 'page/vendor',
					priority: 10,
					enforce: true
				},
				commons: { // split `common`和`components`目录下被打包的代码到`page/commons.js && .css`
					test: /common\/|components\//,
					name: 'page/commons',
					priority: 10,
					enforce: true
				}
			}
		},
		runtimeChunk: {
			name: 'page/manifest'
		}
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new webpack.ProvidePlugin({
			React:'react',
			ReactDOM:'react-dom',
			Component:['react','Component']
		}),
		new ExtractTextPlugin({
			filename: '[name].css',
			ignoreOrder: true
		}),
		new HtmlWebpackPlugin(),
		new ImageminPlugin({
			disable: process.env.NODE_ENV !== 'production', // 开发时不启用
			pngquant: { // 图片质量
				quality: '95-100'
			}
		})
	]
}