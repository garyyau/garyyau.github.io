'use strict';

var _ = require('lodash');
var browserify = require('browserify');
var browserSync = require('browser-sync');
var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var watchify = require('watchify');

var paths = require('./../config').paths;
var pkg = require('./../../package.json');
var reload = browserSync.reload;


class BundleScriptsTask {

	constructor() {
		this.name = 'bundle-scripts';
		this.watchName = this.name + ':watch';

		var args = watchify.args;
		var config = _.assign({}, watchify.args, {
			entries: [paths.source.js + '/app.js'],
			debug: true,
			bundleExternal: false,
		});
		this.bundle = browserify(config);
		this.output = {
			file: 'bundle.js',
			path: paths.build.js,
		};
	}

	buildBundle() {
		var libsBundle = this.bundle;
		return libsBundle.bundle()
						 .on('error', (error) => {
						 	gutil.log("Browserify Error");
						 	gutil.log(error.toString());
						 })
						 .pipe(source(this.output.file))
						 .pipe(gulp.dest(this.output.path))
						 .pipe(reload({stream: true}));
	}

	watchBundle() {
		var watcher = watchify(this.bundle);
		watcher.on('update', () => this.buildBundle(watcher));
		watcher.on('log', gutil.log);
		return this.buildBundle(watcher);
	}

	createTasks() {
		gulp.task(this.name, () => this.buildBundle());
		gulp.task(this.watchName, () => this.watchBundle());
	}

}

module.exports = BundleScriptsTask;