let Config = {
	//版本号
	version : '0.0.1',
	apiVersion:'v1',
	url : {
		// 如果指定，则优先使用 ； 如果不指定： 在 模拟器 用本地环境，在 真机中 用 线上 idc 环境
		// 如果制定了，但 不存在对应 api url， 相当于没指定
		multipleEntry: false, // 是否开启多入口
		currentEnv : 'pro', // Tool.env( 'apiEnv', 'idc' ),
		api : {
			local 	: 'http://local.demo.com/api/', // 模拟器环境
			dev 	: 'http://local.demo.com/api/', // 开发环境
			pre		: 'http://api.demo.com/api/', // 预发环境
			pro		: 'https://api.demo.com/api/' // 线上环境
		},
		//工具和环境对应关系
		envLists : {
			devtools : 'local'
		}
	}
};



if( typeof module !== 'undefined' ){
	module.exports =  Config;
	module.export =  Config;
}else{
	window.Config = Config;
}