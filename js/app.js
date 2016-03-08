var _ = require('lodash');
var angular = require('angular');
var data = require('./../public/resources/user-data/sample-data.json');


var app = angular.module('ResumeTemplateApp', []);

LayoutController.$inject = ['$scope'];
function LayoutController($scope) {
	$scope.data = data;
	$scope.getProfileElementsDisplay = getProfileElementsDisplay;

	function getProfileElementsDisplay(profile) {
		return _.join(profile.items, ', ');
	}
}

app.controller('LayoutController', LayoutController);

document.addEventListener("DOMContentLoaded", function(event) {
	angular.bootstrap(document, ['ResumeTemplateApp']);
});

