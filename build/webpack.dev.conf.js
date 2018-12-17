const path = require('path');
const WebpackBase = require('webpack.base.conf')
function resolve (dir) {
	return path.join(__dirname, '..', dir)
}
module.exports = merge(WebpackBase, );