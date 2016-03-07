'use strict';

var browserSync = require('browser-sync');
var gulp = require('gulp');

var paths = require('./../config').paths;
var reload = browserSync.reload;


class BuildHTMLTask {

	constructor() {
		this.name = 'build-html';
		this.watchName = 'build-html:watch';
	}

	buildHTML() {
		return gulp.src(paths.source.html + '**/*.html')
				   .pipe(reload({stream: true}));
	}

	watchHTML() {
		return gulp.watch(paths.source.html + '**/*.html', [this.name]);
	}

	createTasks() {
		gulp.task(this.name, () => this.buildHTML());
		gulp.task(this.watchName, () => this.watchHTML());
	}

}

module.exports = BuildHTMLTask;