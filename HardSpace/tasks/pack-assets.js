module.exports = (gulp, config) =>() => {
	const path = require('path');
	const gft = require('gulp-file-tree');

	return gulp.src([
			path.join(config.assetsDir, '**', '*.*'),
			'!' + path.join(config.assetsDir, '*.json')
	])
		.pipe(gft())
		.pipe(gulp.dest(path.join(config.assetsDir)));;
}