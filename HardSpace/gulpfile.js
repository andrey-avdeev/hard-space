/// <binding ProjectOpened='watch' />
const gulp = require('gulp');
const concat = require('gulp-concat');
const path = require('path');

require('events').EventEmitter.prototype._maxListeners = 10;

const config = {
	projectDir: __dirname,

	srcDir: path.join(__dirname, 'src'),
	buildDir: path.join(__dirname, 'build'),
	bundleDir: '',

	systemjsDebugConf: 'systemjs.debug.conf.js',
	systemjsDistConf: 'systemjs.dist.conf.js'
}

gulp.task('clean', require('./tasks/clean')(gulp, config));

gulp.task('compile', ['clean'], require('./tasks/compile')(gulp, config.srcDir, config.buildDir));

gulp.task('watch', require('./tasks/watch')(gulp, config.srcDir, config.distDir));

gulp.task('build-debug', ['compile'], require('./tasks/build-debug')(gulp, config));

gulp.task('build-dist', ['compile'], require('./tasks/build-dist')(gulp, config));