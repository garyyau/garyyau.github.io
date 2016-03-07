(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var angular = require('angular');
var data = require('./../public/resources/user-data/data.json');


var app = angular.module('ResumeTemplateApp', []);

LayoutController.$inject = ['$scope'];
function LayoutController($scope) {
	$scope.data = data;
}

app.controller('LayoutController', LayoutController);

document.addEventListener("DOMContentLoaded", function(event) {
	angular.bootstrap(document, ['ResumeTemplateApp']);
});


},{"./../public/resources/user-data/data.json":2,"angular":undefined}],2:[function(require,module,exports){
module.exports={
	"firstName": "Gary K.",
	"lastName": "Yau",
	"occupation": "Developer. Designer. Quality Assurance.",
	"contact": {
		"phone": "+1 (778) 882 0524",
		"email": "gyau88@gmail.com",
		"social":
		[
			{
				"name": "LinkedIn",
				"link": "",
				"icon": "",
			},
			{
				"name": "Facebook",
				"link": "",
				"icon": "",
			}
		]
	},
	"overview": "I am a dedicated software developer with experience in development, user experience design and quality assurance. Using my Triforce of knowledge, I aim to become a part of the development process on software applications which will affect people in a positive way.",
	"skills": {
		"professional":
		[
			{
				"name": "Development",
				"rating": 1.0,
			},
			{
				"name": "Quality Assurance",
				"rating": 0.8,
			}
		],
		"personal":
		[
		],
	}

}
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9hcHAuanMiLCJwdWJsaWMvcmVzb3VyY2VzL3VzZXItZGF0YS9kYXRhLmpzb24iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBhbmd1bGFyID0gcmVxdWlyZSgnYW5ndWxhcicpO1xyXG52YXIgZGF0YSA9IHJlcXVpcmUoJy4vLi4vcHVibGljL3Jlc291cmNlcy91c2VyLWRhdGEvZGF0YS5qc29uJyk7XHJcblxyXG5cclxudmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdSZXN1bWVUZW1wbGF0ZUFwcCcsIFtdKTtcclxuXHJcbkxheW91dENvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJ107XHJcbmZ1bmN0aW9uIExheW91dENvbnRyb2xsZXIoJHNjb3BlKSB7XHJcblx0JHNjb3BlLmRhdGEgPSBkYXRhO1xyXG59XHJcblxyXG5hcHAuY29udHJvbGxlcignTGF5b3V0Q29udHJvbGxlcicsIExheW91dENvbnRyb2xsZXIpO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRhbmd1bGFyLmJvb3RzdHJhcChkb2N1bWVudCwgWydSZXN1bWVUZW1wbGF0ZUFwcCddKTtcclxufSk7XHJcblxyXG4iLCJtb2R1bGUuZXhwb3J0cz17XHJcblx0XCJmaXJzdE5hbWVcIjogXCJHYXJ5IEsuXCIsXHJcblx0XCJsYXN0TmFtZVwiOiBcIllhdVwiLFxyXG5cdFwib2NjdXBhdGlvblwiOiBcIkRldmVsb3Blci4gRGVzaWduZXIuIFF1YWxpdHkgQXNzdXJhbmNlLlwiLFxyXG5cdFwiY29udGFjdFwiOiB7XHJcblx0XHRcInBob25lXCI6IFwiKzEgKDc3OCkgODgyIDA1MjRcIixcclxuXHRcdFwiZW1haWxcIjogXCJneWF1ODhAZ21haWwuY29tXCIsXHJcblx0XHRcInNvY2lhbFwiOlxyXG5cdFx0W1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJuYW1lXCI6IFwiTGlua2VkSW5cIixcclxuXHRcdFx0XHRcImxpbmtcIjogXCJcIixcclxuXHRcdFx0XHRcImljb25cIjogXCJcIixcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwibmFtZVwiOiBcIkZhY2Vib29rXCIsXHJcblx0XHRcdFx0XCJsaW5rXCI6IFwiXCIsXHJcblx0XHRcdFx0XCJpY29uXCI6IFwiXCIsXHJcblx0XHRcdH1cclxuXHRcdF1cclxuXHR9LFxyXG5cdFwib3ZlcnZpZXdcIjogXCJJIGFtIGEgZGVkaWNhdGVkIHNvZnR3YXJlIGRldmVsb3BlciB3aXRoIGV4cGVyaWVuY2UgaW4gZGV2ZWxvcG1lbnQsIHVzZXIgZXhwZXJpZW5jZSBkZXNpZ24gYW5kIHF1YWxpdHkgYXNzdXJhbmNlLiBVc2luZyBteSBUcmlmb3JjZSBvZiBrbm93bGVkZ2UsIEkgYWltIHRvIGJlY29tZSBhIHBhcnQgb2YgdGhlIGRldmVsb3BtZW50IHByb2Nlc3Mgb24gc29mdHdhcmUgYXBwbGljYXRpb25zIHdoaWNoIHdpbGwgYWZmZWN0IHBlb3BsZSBpbiBhIHBvc2l0aXZlIHdheS5cIixcclxuXHRcInNraWxsc1wiOiB7XHJcblx0XHRcInByb2Zlc3Npb25hbFwiOlxyXG5cdFx0W1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJuYW1lXCI6IFwiRGV2ZWxvcG1lbnRcIixcclxuXHRcdFx0XHRcInJhdGluZ1wiOiAxLjAsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcIm5hbWVcIjogXCJRdWFsaXR5IEFzc3VyYW5jZVwiLFxyXG5cdFx0XHRcdFwicmF0aW5nXCI6IDAuOCxcclxuXHRcdFx0fVxyXG5cdFx0XSxcclxuXHRcdFwicGVyc29uYWxcIjpcclxuXHRcdFtcclxuXHRcdF0sXHJcblx0fVxyXG5cclxufSJdfQ==
