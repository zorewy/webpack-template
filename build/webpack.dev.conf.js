const baseWebpackConfig = require('webpack.base.conf')
const merge = require('webpack-merge')
const packageConfig = require('../package.json')

exports.assetsPath = function (_path) {
	const assetsSubDirectory = process.env.NODE_ENV === 'production'
		? config.build.assetsSubDirectory
		: config.dev.assetsSubDirectory

	return path.posix.join(assetsSubDirectory, _path)
}

const devWebpackConfig = merge(baseWebpackConfig, {

})

module.exports = new Promise((resolve, reject) => {

})