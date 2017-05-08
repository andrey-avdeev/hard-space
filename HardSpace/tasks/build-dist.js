module.exports = (gulp, config) =>() => {
	const path = require('path');
	const htmlreplace = require('gulp-html-replace');
	const Builder = require('systemjs-builder');
	const builder = new Builder();
	const packageJson = require(path.join(config.projectDir, 'package.json'));

	let appName = packageJson.name;
	let bundleName = `${appName}.min.js`;
	let outFile = path.join(config.bundleDir, bundleName);
	let moduleName = 'src/app.js';
	let buildConfig = {
		moduleName: false,
		minify: false,
		sourceMaps: true
	}

	let build = () => {
		builder.reset();
		return builder.loadConfig(path.join(config.projectDir, config.systemjsDistConf));
	}

	let bundle = () => {
		return builder.bundle(moduleName, outFile, buildConfig);
	}

	return build()
		.then(bundle)
		.then(() => {
			gulp.src('index.html')
				.pipe(htmlreplace({
					'js': [
						'node_modules/es6-promise/dist/es6-promise.auto.js',
						'node_modules/systemjs/dist/system-production.js',
						config.systemjsDistConf,
						path.join(config.bundleDir, bundleName)
					]
				},
					{
						keepBlockTags: true
					}))
				.pipe(gulp.dest(config.bundleDir));
		})
		.catch((error) => {
			console.log('\n\tBuild Failed\n', error);
			process.exit(1);
		});
}