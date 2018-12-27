module.exports = {
	before(app){
		apiMocker(app, path.resolve('./mocker/index.js'), {
			proxy: {
				'/repos/*': 'https://api.github.com/',
			},
			changeHost: true,
		})
	}
}
