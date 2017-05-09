module.exports = (gulp, sourceDir, distDir) =>() => {
	const path = require('path');
	const watch = require('gulp-watch');

	return watch(path.join(sourceDir, '**', '*.ts'),
			{
				ignoreInitial: false
			}, () =>gulp.start('compile'));
}
