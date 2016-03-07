'use strict';

var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');

var paths = require('./../config').paths;
var reload = browserSync.reload;


class BuildSASSTask {

	constructor() {
		this.name = 'build-sass';
		this.watchName = 'build-sass:watch';
	}

	buildSASS() {
		return gulp.src(paths.source.scss + '**/*.scss')
					.on('error', (error) => {
						gutil.log("SASS Error");
						gutil.log(error.toString());
					})
				   .pipe(sass())
				   .pipe(autoprefixer('last 2 versions'))
				   .pipe(gulp.dest(paths.build.css))
				   .pipe(reload({stream: true}));
	}

	watchSASS() {
		return gulp.watch(paths.source.scss + '**/*.scss', [this.name]);
	}

	createTasks() {
		gulp.task(this.name, () => this.buildSASS());
		gulp.task(this.watchName, () => this.watchSASS());
	}

}

module.exports = BuildSASSTask;