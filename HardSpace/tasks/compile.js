module.exports = (gulp, sourceDir, distDir) =>() => {
	const path = require('path');
	const ts = require('gulp-typescript');

	let tsProject = ts.createProject(path.join(sourceDir, 'tsconfig.json'));
	let tsResult = gulp.src(path.join(sourceDir, '**', '*.ts'))
		.pipe(tsProject());

	return tsResult.js.pipe(gulp.dest(distDir));
}