var _ = require('lodash');
var angular = require('angular');
var data = require('./../public/resources/user-data/sample-data.json');


var app = angular.module('ResumeTemplateApp', []);

LayoutController.$inject = ['$scope'];
function LayoutController($scope) {
	$scope.data = data;
	$scope.getProfileElementsDisplay = getProfileElementsDisplay;
	$scope.getProjectRolesDisplay = getProjectRolesDisplay;
	$scope.getProjectStackDisplay = getProjectStackDisplay;


	function getProfileElementsDisplay(profile) {
		return _.join(profile.items, ', ');
	}

	function getProjectRolesDisplay(project) {
		return _.join(project.roles, ', ');
	}

	function getProjectStackDisplay(project) {
		return _.join(project.stack, ', ');
	}
}

app.controller('LayoutController', LayoutController);

document.addEventListener("DOMContentLoaded", function(event) {
	angular.bootstrap(document, ['ResumeTemplateApp']);
});

