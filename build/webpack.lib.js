var path = require('path');
var base = require('./webpack.base');

module.exports = Object.assign(base, {
	entry: path.resolve(__dirname, '../src/js/lib.js'),
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'saas-billing.js',
		library: 'saas-billing',
		libraryTarget: 'umd'
	},
	externals: ['vue', 'lodash']
});
