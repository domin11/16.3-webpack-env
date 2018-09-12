const path = require('path');

module.exports = (env) => {
	const enviroment = env || 'production';
	return {
		mode: enviroment,
		entry: './src/app.js',
		output: {
		  path: path.resolve(__dirname, 'build'),
		  filename: 'app.' + enviroment + '.bundle.js'
		},
	};
};