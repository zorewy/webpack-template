/*
	0或’off’：关闭规则。
	1或’warn’：打开规则，并且作为一个警告（并不会导致检查不通过）。
	2或’error’：打开规则，并且作为一个错误 (退出码为1，检查不通过)。

	参数说明：
	参数1 ： 错误等级
	参数2 ： 处理方式
*/
module.exports = {
	"root": true,
	"parser": "babel-eslint",
	"plugins": [
		"html",
		"flow-vars",
		"react"
	],
	"env": {
		"browser": true,
		"node": true,
		"commonjs": true,
		"es6": true,
		"amd": true
	},
	"rules": {
		"no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
		"camelcase": 2,// 强制驼峰法命名
	},
	"settings": {
		// 使用webpack中配置的resolve路径
		"import/resolver": "webpack"
	}
}