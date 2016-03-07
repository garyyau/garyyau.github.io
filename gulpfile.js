'use strict';

/* Required */
var gulp = require('gulp');
var BundleLibrariesTask = require('./gulp/tasks/bundle-libraries-task');
var BundleScriptsTask = require('./gulp/tasks/bundle-scripts-task');
var InitBrowserSyncTask = require('./gulp/tasks/init-browser-sync-task');
var BuildHTMLTask = require('./gulp/tasks/build-html-task');
var BuildSASSTask = require('./gulp/tasks/build-sass-task');


/* Tasks */
var bundleLibrariesTask = new BundleLibrariesTask();
bundleLibrariesTask.createTasks();

var bundleScriptsTask = new BundleScriptsTask();
bundleScriptsTask.createTasks();

var initBrowserSyncTask = new InitBrowserSyncTask();
initBrowserSyncTask.createTasks();

var buildHTMLTask = new BuildHTMLTask();
buildHTMLTask.createTasks();

var buildSASSTask = new BuildSASSTask();
buildSASSTask.createTasks();


/* Watch Task */
gulp.task('watch', [
	initBrowserSyncTask.name,
	bundleScriptsTask.watchName,
	buildHTMLTask.watchName,
	buildSASSTask.watchName,
]);

/* Default Task */
gulp.task('default', [
	bundleLibrariesTask.name,
	bundleScriptsTask.name,
	buildHTMLTask.name,
	buildSASSTask.name,
]);