'use strict';

var browserSync = require('browser-sync');
var gulp = require('gulp');

var paths = require('./../config').paths;


class InitBrowserSyncTask {

	constructor() {
		this.name = 'init-browser-sync';
		this.config = {
			server:  {
				baseDir: paths.build.base,
			}
		};
	}

	initBrowserSync() {
		return browserSync(this.config);
	}

	createTasks() {
		gulp.task(this.name, () => this.initBrowserSync());
	}
}

module.exports = InitBrowserSyncTask;