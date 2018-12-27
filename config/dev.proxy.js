module.exports = {
	proxy: {
		'/api': {    //将blog.demo.com印射为/api
			target: 'http://blog.demo.com/',  // 接口域名
			changeOrigin: true,  //是否跨域
			pathRewrite: {
				'^/api': 'api'   //需要rewrite的,
			}
		}
	}
}
