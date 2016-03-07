'use strict';

var _ = require('lodash');
var browserify = require('browserify');
var browserSync = require('browser-sync');
var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');

var paths = require('./../config').paths;
var pkg = require('./../../package.json');
var reload = browserSync.reload;


class BundleLibrariesTask {

	constructor() {
		this.name = 'bundle-libs';

		var libs = _.keys(pkg.dependencies);

		var config = {
			debug: true,
			require: libs,
		};
		this.bundle = browserify(config);
		this.output = {
			file: 'libs.js',
			path: paths.build.js,
		};
	}

	buildBundle() {
		var libsBundle = this.bundle;
		return libsBundle
				.bundle()
				.on('error', (error) => {
					gutil.log("Browserify Error");
					gutil.log(error.toString());
				})
				.pipe(source(this.output.file))
				.pipe(gulp.dest(this.output.path))
				.pipe(reload({stream: true}));
	}

	createTasks() {
		gulp.task(this.name, () => this.buildBundle());
	}

}

module.exports = BundleLibrariesTask;