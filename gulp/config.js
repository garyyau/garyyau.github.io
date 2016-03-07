var basePath = './';
var publicPath = './public/';

module.exports.paths = {
	source: {
		'base': basePath,
		'css': basePath + 'css/',
		'js': basePath + 'js/',
		'scss': basePath + 'scss/',
		'html': publicPath,
	},
	build: {
		'base': publicPath,
		'css': publicPath + 'css/',
		'js': publicPath + 'js/',
		'html': publicPath,
	},
};