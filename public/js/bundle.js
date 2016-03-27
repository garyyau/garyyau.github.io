(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var _ = require('lodash');
var angular = require('angular');
var data = require('./../public/resources/data.json');


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


},{"./../public/resources/data.json":2,"angular":undefined,"lodash":undefined}],2:[function(require,module,exports){
module.exports={
	"profileImage": "./public/resources/profile-picture.png",
	"firstName": "Gary K.",
	"lastName": "Yau",
	"occupation": "Developer. Designer. Quality Assurance.",
	"contact": {
		"phone": "+1 (778) 882 0524",
		"email": "gyau88@gmail.com",
		"location": "Vancouver, BC, CA",
		"socials":
		[
			{
				"name": "GitHub",
				"link": "https://github.com/garyyau",
				"linkText": "github.com/garyyau",
				"iconClasses": "zmdi zmdi-github-alt",
			},
			{
				"name": "LinkedIn",
				"link": "https://www.linkedin.com/in/garyyau",
				"linkText": "linkedin.com/in/garyyau",
				"iconClasses": "zmdi zmdi-linkedin",
			},
		]
	},
	"overview": "Front-end developer with a strong passion for developing inspirational web applications. Experience in different types of languages and frameworks with quick learning capabilities to adapt in different project requirements. Flexible in different working environments, having worked effectively both independently and as a team in an agile development process. Uses skillsets in user experience design, quality assurance, and software development onto each project with the objective of delivering high quality products.",
	"technicalProfile":
	[
		{
			"name": "Languages",
			"items":
			[
				"Python",
				"PHP",
				"JavaScript",
				"JSON",
				"HTML5",
				"CSS3",
				"SCSS",
				"SQL",
			],
		},
		{
			"name": "Frameworks",
			"items":
			[
				"Django",
				"Laravel",
				"AngularJS",
				"React",
				"Knockout",
				"jQuery",
				"Bootstrap",
				"Gulp",
				"NodeJS",
				"UDK",
			],
		},
		{
			"name": "Version Control",
			"items":
			[
				"Git (GitLab, GitHub)",
				"Subversion (TortoiseSVN)",
			],
		},
		{
			"name": "Project Tools",
			"items":
			[
				"Confluence",
				"JIRA",
				"GitLab",
				"Mantis",
				"Review Board",
			],
		},
		{
			"name": "Design Tools",
			"items":
			[
				"Adobe Photoshop",
				"Illustrator",
				"Dreamweaver",
				"Premiere Pro",
				"myBalsamiq",
			],
		},
		{
			"name": "Methodologies",
			"items":
			[
				"Agile",
				"Waterfall",
				"Scrum",
				"Unit Test",
				"Responsive Design",
			],
		},
	],
	"workExperience":
	[
		{
			"position": "Junior Software Developer",
			"company": "DHX Media",
			"location": "Vancouver, BC, Canada",
			"time": "Mar 2014 - Current",
			"description": "Develop new web applications from requirements gathering, sprint planning, agile development, rollout to system maintenance to provide the studio with uniquely built systems to suit the needs of marketing, interactive and pipeline. Collaborate with a team of 4 - 7 developers to design and architect the structure of the projects to determine the optimal development approach and best technologies to use. Research on external studio management system, Shotgun, to assess the compatibility of Shotgun with daily workflow of the studio. Design custom system, Artemis, to be used on top of Shotgun in order to enhance the features provided and tailor it to the needs of the users. Develop and implement different APIs to upgrade legacy systems to use a unified database while planning for future systems to provide backwards compatibility with the past systems.",
			"points":
			[
				"Develop new web applications from requirements gathering, sprint planning, agile development, rollout to system maintenance to provide the studio with uniquely built systems to suit the needs of marketing, interactive and pipeline.",
				"Collaborate with a team of 4 - 7 developers to design and architect the structure of the projects to determine the optimal development approach and best technologies to use.",
				"Research on external studio management system, Shotgun, to assess the compatibility of Shotgun with daily workflow of the studio. Design custom system, Artemis, to be used on top of Shotgun in order to enhance the features provided and tailor it to the needs of the users.",
				"Develop and implement different APIs to upgrade legacy systems to use a unified database while planning for future systems to provide backwards compatibility with the past systems.",
			]
		},
		{
			"position": "Junior Application Developer Co-op",
			"company": "ZE PowerGroup Inc.",
			"location": "Richmond, BC, Canada",
			"time": "Jan 2013 - May 2013",
			"description": "Developed a JavaScript plugin for Selenium IDE to provide QA team with a better understanding of how to create and manage Selenium automation scripts. Developed over 300 automation test scripts using Selenium IDE and XPATH, allowing QA to run scripts during daily implementations to ensure quality over added or modified functionality of the project.",
			"points":
			[
				"Developed a JavaScript plugin for Selenium IDE to provide QA team with a better understanding of how to create and manage Selenium automation scripts.",
				"Developed over 300 automation test scripts using Selenium IDE and XPATH, allowing QA to run scripts during daily implementations to ensure quality over added or modified functionality of the project.",
			]
		},
		{
			"position": "Quality Assurance Tester",
			"company": "Electronic Arts Canada",
			"location": "Burnaby, BC, Canada",
			"time": "Jun 2008 - Sep 2011",
			"description": "Tested gaming software for Nintendo Wii, Xbox 360 and PlayStation 3 to ensure the quality of the company’s product, allowing successful first-time passes on several first-party certifications. Specialized in Nintendo compliance and created compliance test cases for EA SPORTS Active and EA SPORTS Active More Workouts using DevTest to guide compliance testers during development process. Collaborated with project managers, team leads and other testers to analyze the coverage and risks of each test suite, ensuring that the requirements of the software was met while validating the stability of each build as the project progressed.",
			"points":
			[
				"Tested gaming software for Nintendo Wii, Xbox 360 and PlayStation 3 to ensure the quality of the company’s product, allowing successful first-time passes on several first-party certifications.",
				"Specialized in Nintendo compliance and created compliance test cases for EA SPORTS Active and EA SPORTS Active More Workouts using DevTest to guide compliance testers during development process.",
				"Collaborated with project managers, team leads and other testers to analyze the coverage and risks of each test suite, ensuring that the requirements of the software was met while validating the stability of each build as the project progressed.",
			]
		},
	],
	"education":
	[
		{
			"school": "Simon Fraser University",
			"program": "Major in Computing Science",
			"faculty": "Bachelor of Science",
			"time": "Dec 2013",
			"description": "Focused on Object-Oriented Programming and other software development concepts such as database design, networking and software engineering.",
		}
	],
	"projects":
	[
		{
			"name": "Production Management System",
			"location": "DHX Studios",
			"roles": ["Scrum Master", "Software Developer", "UX Designer"],
			"stack": ["Django, AngularJS, HTML, SCSS, MySQL"],
			"description": "Designed and developed task management system and show breakdown system alongside external system, Shotgun, to integrate Shotgun into studio pipeline while maintaining legacy system features. Developed an API to provide communication between Shotgun and legacy system, allowing corporate departments to continue using legacy system to enter user information while ensure information is passed to Shotgun. Led a team of five developers in an Agile scrum environment, allowing tasks to be completed within deadlines while reporting to Head of Software Department on schedule adjustments.",
		},
		{
			"name": "Muse Client Review",
			"location": "DHX Studios",
			"roles": ["Software Developer"],
			"stack": ["Django, AngularJS, HTML, SCSS, MySQL"],
			"description": "Developed an external client review system connected to studio task management system through an API, allowing coordinators to send completed assets and shots for client review. Worked in a team of five developers and a designer in a sprint environment to plan and design the development architecture for the application ensure all requirements were considered in the design.",
		},
		{
			"name": "Nerd Corps Production Sites",
			"location": "DHX Studios",
			"roles": ["Software Developer"],
			"stack": ["Laravel", "jQuery", "HTML", "SCSS", "MySQL"],
			"description": "Design and  developed custom Content Management System for studio production sites, providing a way to perform efficient updates to website contents in the future. Developed multiple production websites such as kateandmimmim.ca with multi-browser support and responsive design to provide kids with a fun and interactive location to learn more about the show and receive updates.",
		}
	]
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9hcHAuanMiLCJwdWJsaWMvcmVzb3VyY2VzL2RhdGEuanNvbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBfID0gcmVxdWlyZSgnbG9kYXNoJyk7XHJcbnZhciBhbmd1bGFyID0gcmVxdWlyZSgnYW5ndWxhcicpO1xyXG52YXIgZGF0YSA9IHJlcXVpcmUoJy4vLi4vcHVibGljL3Jlc291cmNlcy9kYXRhLmpzb24nKTtcclxuXHJcblxyXG52YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ1Jlc3VtZVRlbXBsYXRlQXBwJywgW10pO1xyXG5cclxuTGF5b3V0Q29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnXTtcclxuZnVuY3Rpb24gTGF5b3V0Q29udHJvbGxlcigkc2NvcGUpIHtcclxuXHQkc2NvcGUuZGF0YSA9IGRhdGE7XHJcblx0JHNjb3BlLmdldFByb2ZpbGVFbGVtZW50c0Rpc3BsYXkgPSBnZXRQcm9maWxlRWxlbWVudHNEaXNwbGF5O1xyXG5cdCRzY29wZS5nZXRQcm9qZWN0Um9sZXNEaXNwbGF5ID0gZ2V0UHJvamVjdFJvbGVzRGlzcGxheTtcclxuXHQkc2NvcGUuZ2V0UHJvamVjdFN0YWNrRGlzcGxheSA9IGdldFByb2plY3RTdGFja0Rpc3BsYXk7XHJcblxyXG5cclxuXHRmdW5jdGlvbiBnZXRQcm9maWxlRWxlbWVudHNEaXNwbGF5KHByb2ZpbGUpIHtcclxuXHRcdHJldHVybiBfLmpvaW4ocHJvZmlsZS5pdGVtcywgJywgJyk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBnZXRQcm9qZWN0Um9sZXNEaXNwbGF5KHByb2plY3QpIHtcclxuXHRcdHJldHVybiBfLmpvaW4ocHJvamVjdC5yb2xlcywgJywgJyk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBnZXRQcm9qZWN0U3RhY2tEaXNwbGF5KHByb2plY3QpIHtcclxuXHRcdHJldHVybiBfLmpvaW4ocHJvamVjdC5zdGFjaywgJywgJyk7XHJcblx0fVxyXG59XHJcblxyXG5hcHAuY29udHJvbGxlcignTGF5b3V0Q29udHJvbGxlcicsIExheW91dENvbnRyb2xsZXIpO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRhbmd1bGFyLmJvb3RzdHJhcChkb2N1bWVudCwgWydSZXN1bWVUZW1wbGF0ZUFwcCddKTtcclxufSk7XHJcblxyXG4iLCJtb2R1bGUuZXhwb3J0cz17XHJcblx0XCJwcm9maWxlSW1hZ2VcIjogXCIuL3B1YmxpYy9yZXNvdXJjZXMvcHJvZmlsZS1waWN0dXJlLnBuZ1wiLFxyXG5cdFwiZmlyc3ROYW1lXCI6IFwiR2FyeSBLLlwiLFxyXG5cdFwibGFzdE5hbWVcIjogXCJZYXVcIixcclxuXHRcIm9jY3VwYXRpb25cIjogXCJEZXZlbG9wZXIuIERlc2lnbmVyLiBRdWFsaXR5IEFzc3VyYW5jZS5cIixcclxuXHRcImNvbnRhY3RcIjoge1xyXG5cdFx0XCJwaG9uZVwiOiBcIisxICg3NzgpIDg4MiAwNTI0XCIsXHJcblx0XHRcImVtYWlsXCI6IFwiZ3lhdTg4QGdtYWlsLmNvbVwiLFxyXG5cdFx0XCJsb2NhdGlvblwiOiBcIlZhbmNvdXZlciwgQkMsIENBXCIsXHJcblx0XHRcInNvY2lhbHNcIjpcclxuXHRcdFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwibmFtZVwiOiBcIkdpdEh1YlwiLFxyXG5cdFx0XHRcdFwibGlua1wiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9nYXJ5eWF1XCIsXHJcblx0XHRcdFx0XCJsaW5rVGV4dFwiOiBcImdpdGh1Yi5jb20vZ2FyeXlhdVwiLFxyXG5cdFx0XHRcdFwiaWNvbkNsYXNzZXNcIjogXCJ6bWRpIHptZGktZ2l0aHViLWFsdFwiLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJuYW1lXCI6IFwiTGlua2VkSW5cIixcclxuXHRcdFx0XHRcImxpbmtcIjogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vZ2FyeXlhdVwiLFxyXG5cdFx0XHRcdFwibGlua1RleHRcIjogXCJsaW5rZWRpbi5jb20vaW4vZ2FyeXlhdVwiLFxyXG5cdFx0XHRcdFwiaWNvbkNsYXNzZXNcIjogXCJ6bWRpIHptZGktbGlua2VkaW5cIixcclxuXHRcdFx0fSxcclxuXHRcdF1cclxuXHR9LFxyXG5cdFwib3ZlcnZpZXdcIjogXCJGcm9udC1lbmQgZGV2ZWxvcGVyIHdpdGggYSBzdHJvbmcgcGFzc2lvbiBmb3IgZGV2ZWxvcGluZyBpbnNwaXJhdGlvbmFsIHdlYiBhcHBsaWNhdGlvbnMuIEV4cGVyaWVuY2UgaW4gZGlmZmVyZW50IHR5cGVzIG9mIGxhbmd1YWdlcyBhbmQgZnJhbWV3b3JrcyB3aXRoIHF1aWNrIGxlYXJuaW5nIGNhcGFiaWxpdGllcyB0byBhZGFwdCBpbiBkaWZmZXJlbnQgcHJvamVjdCByZXF1aXJlbWVudHMuIEZsZXhpYmxlIGluIGRpZmZlcmVudCB3b3JraW5nIGVudmlyb25tZW50cywgaGF2aW5nIHdvcmtlZCBlZmZlY3RpdmVseSBib3RoIGluZGVwZW5kZW50bHkgYW5kIGFzIGEgdGVhbSBpbiBhbiBhZ2lsZSBkZXZlbG9wbWVudCBwcm9jZXNzLiBVc2VzIHNraWxsc2V0cyBpbiB1c2VyIGV4cGVyaWVuY2UgZGVzaWduLCBxdWFsaXR5IGFzc3VyYW5jZSwgYW5kIHNvZnR3YXJlIGRldmVsb3BtZW50IG9udG8gZWFjaCBwcm9qZWN0IHdpdGggdGhlIG9iamVjdGl2ZSBvZiBkZWxpdmVyaW5nIGhpZ2ggcXVhbGl0eSBwcm9kdWN0cy5cIixcclxuXHRcInRlY2huaWNhbFByb2ZpbGVcIjpcclxuXHRbXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcIkxhbmd1YWdlc1wiLFxyXG5cdFx0XHRcIml0ZW1zXCI6XHJcblx0XHRcdFtcclxuXHRcdFx0XHRcIlB5dGhvblwiLFxyXG5cdFx0XHRcdFwiUEhQXCIsXHJcblx0XHRcdFx0XCJKYXZhU2NyaXB0XCIsXHJcblx0XHRcdFx0XCJKU09OXCIsXHJcblx0XHRcdFx0XCJIVE1MNVwiLFxyXG5cdFx0XHRcdFwiQ1NTM1wiLFxyXG5cdFx0XHRcdFwiU0NTU1wiLFxyXG5cdFx0XHRcdFwiU1FMXCIsXHJcblx0XHRcdF0sXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJGcmFtZXdvcmtzXCIsXHJcblx0XHRcdFwiaXRlbXNcIjpcclxuXHRcdFx0W1xyXG5cdFx0XHRcdFwiRGphbmdvXCIsXHJcblx0XHRcdFx0XCJMYXJhdmVsXCIsXHJcblx0XHRcdFx0XCJBbmd1bGFySlNcIixcclxuXHRcdFx0XHRcIlJlYWN0XCIsXHJcblx0XHRcdFx0XCJLbm9ja291dFwiLFxyXG5cdFx0XHRcdFwialF1ZXJ5XCIsXHJcblx0XHRcdFx0XCJCb290c3RyYXBcIixcclxuXHRcdFx0XHRcIkd1bHBcIixcclxuXHRcdFx0XHRcIk5vZGVKU1wiLFxyXG5cdFx0XHRcdFwiVURLXCIsXHJcblx0XHRcdF0sXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJWZXJzaW9uIENvbnRyb2xcIixcclxuXHRcdFx0XCJpdGVtc1wiOlxyXG5cdFx0XHRbXHJcblx0XHRcdFx0XCJHaXQgKEdpdExhYiwgR2l0SHViKVwiLFxyXG5cdFx0XHRcdFwiU3VidmVyc2lvbiAoVG9ydG9pc2VTVk4pXCIsXHJcblx0XHRcdF0sXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJQcm9qZWN0IFRvb2xzXCIsXHJcblx0XHRcdFwiaXRlbXNcIjpcclxuXHRcdFx0W1xyXG5cdFx0XHRcdFwiQ29uZmx1ZW5jZVwiLFxyXG5cdFx0XHRcdFwiSklSQVwiLFxyXG5cdFx0XHRcdFwiR2l0TGFiXCIsXHJcblx0XHRcdFx0XCJNYW50aXNcIixcclxuXHRcdFx0XHRcIlJldmlldyBCb2FyZFwiLFxyXG5cdFx0XHRdLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiRGVzaWduIFRvb2xzXCIsXHJcblx0XHRcdFwiaXRlbXNcIjpcclxuXHRcdFx0W1xyXG5cdFx0XHRcdFwiQWRvYmUgUGhvdG9zaG9wXCIsXHJcblx0XHRcdFx0XCJJbGx1c3RyYXRvclwiLFxyXG5cdFx0XHRcdFwiRHJlYW13ZWF2ZXJcIixcclxuXHRcdFx0XHRcIlByZW1pZXJlIFByb1wiLFxyXG5cdFx0XHRcdFwibXlCYWxzYW1pcVwiLFxyXG5cdFx0XHRdLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiTWV0aG9kb2xvZ2llc1wiLFxyXG5cdFx0XHRcIml0ZW1zXCI6XHJcblx0XHRcdFtcclxuXHRcdFx0XHRcIkFnaWxlXCIsXHJcblx0XHRcdFx0XCJXYXRlcmZhbGxcIixcclxuXHRcdFx0XHRcIlNjcnVtXCIsXHJcblx0XHRcdFx0XCJVbml0IFRlc3RcIixcclxuXHRcdFx0XHRcIlJlc3BvbnNpdmUgRGVzaWduXCIsXHJcblx0XHRcdF0sXHJcblx0XHR9LFxyXG5cdF0sXHJcblx0XCJ3b3JrRXhwZXJpZW5jZVwiOlxyXG5cdFtcclxuXHRcdHtcclxuXHRcdFx0XCJwb3NpdGlvblwiOiBcIkp1bmlvciBTb2Z0d2FyZSBEZXZlbG9wZXJcIixcclxuXHRcdFx0XCJjb21wYW55XCI6IFwiREhYIE1lZGlhXCIsXHJcblx0XHRcdFwibG9jYXRpb25cIjogXCJWYW5jb3V2ZXIsIEJDLCBDYW5hZGFcIixcclxuXHRcdFx0XCJ0aW1lXCI6IFwiTWFyIDIwMTQgLSBDdXJyZW50XCIsXHJcblx0XHRcdFwiZGVzY3JpcHRpb25cIjogXCJEZXZlbG9wIG5ldyB3ZWIgYXBwbGljYXRpb25zIGZyb20gcmVxdWlyZW1lbnRzIGdhdGhlcmluZywgc3ByaW50IHBsYW5uaW5nLCBhZ2lsZSBkZXZlbG9wbWVudCwgcm9sbG91dCB0byBzeXN0ZW0gbWFpbnRlbmFuY2UgdG8gcHJvdmlkZSB0aGUgc3R1ZGlvIHdpdGggdW5pcXVlbHkgYnVpbHQgc3lzdGVtcyB0byBzdWl0IHRoZSBuZWVkcyBvZiBtYXJrZXRpbmcsIGludGVyYWN0aXZlIGFuZCBwaXBlbGluZS4gQ29sbGFib3JhdGUgd2l0aCBhIHRlYW0gb2YgNCAtIDcgZGV2ZWxvcGVycyB0byBkZXNpZ24gYW5kIGFyY2hpdGVjdCB0aGUgc3RydWN0dXJlIG9mIHRoZSBwcm9qZWN0cyB0byBkZXRlcm1pbmUgdGhlIG9wdGltYWwgZGV2ZWxvcG1lbnQgYXBwcm9hY2ggYW5kIGJlc3QgdGVjaG5vbG9naWVzIHRvIHVzZS4gUmVzZWFyY2ggb24gZXh0ZXJuYWwgc3R1ZGlvIG1hbmFnZW1lbnQgc3lzdGVtLCBTaG90Z3VuLCB0byBhc3Nlc3MgdGhlIGNvbXBhdGliaWxpdHkgb2YgU2hvdGd1biB3aXRoIGRhaWx5IHdvcmtmbG93IG9mIHRoZSBzdHVkaW8uIERlc2lnbiBjdXN0b20gc3lzdGVtLCBBcnRlbWlzLCB0byBiZSB1c2VkIG9uIHRvcCBvZiBTaG90Z3VuIGluIG9yZGVyIHRvIGVuaGFuY2UgdGhlIGZlYXR1cmVzIHByb3ZpZGVkIGFuZCB0YWlsb3IgaXQgdG8gdGhlIG5lZWRzIG9mIHRoZSB1c2Vycy4gRGV2ZWxvcCBhbmQgaW1wbGVtZW50IGRpZmZlcmVudCBBUElzIHRvIHVwZ3JhZGUgbGVnYWN5IHN5c3RlbXMgdG8gdXNlIGEgdW5pZmllZCBkYXRhYmFzZSB3aGlsZSBwbGFubmluZyBmb3IgZnV0dXJlIHN5c3RlbXMgdG8gcHJvdmlkZSBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSB3aXRoIHRoZSBwYXN0IHN5c3RlbXMuXCIsXHJcblx0XHRcdFwicG9pbnRzXCI6XHJcblx0XHRcdFtcclxuXHRcdFx0XHRcIkRldmVsb3AgbmV3IHdlYiBhcHBsaWNhdGlvbnMgZnJvbSByZXF1aXJlbWVudHMgZ2F0aGVyaW5nLCBzcHJpbnQgcGxhbm5pbmcsIGFnaWxlIGRldmVsb3BtZW50LCByb2xsb3V0IHRvIHN5c3RlbSBtYWludGVuYW5jZSB0byBwcm92aWRlIHRoZSBzdHVkaW8gd2l0aCB1bmlxdWVseSBidWlsdCBzeXN0ZW1zIHRvIHN1aXQgdGhlIG5lZWRzIG9mIG1hcmtldGluZywgaW50ZXJhY3RpdmUgYW5kIHBpcGVsaW5lLlwiLFxyXG5cdFx0XHRcdFwiQ29sbGFib3JhdGUgd2l0aCBhIHRlYW0gb2YgNCAtIDcgZGV2ZWxvcGVycyB0byBkZXNpZ24gYW5kIGFyY2hpdGVjdCB0aGUgc3RydWN0dXJlIG9mIHRoZSBwcm9qZWN0cyB0byBkZXRlcm1pbmUgdGhlIG9wdGltYWwgZGV2ZWxvcG1lbnQgYXBwcm9hY2ggYW5kIGJlc3QgdGVjaG5vbG9naWVzIHRvIHVzZS5cIixcclxuXHRcdFx0XHRcIlJlc2VhcmNoIG9uIGV4dGVybmFsIHN0dWRpbyBtYW5hZ2VtZW50IHN5c3RlbSwgU2hvdGd1biwgdG8gYXNzZXNzIHRoZSBjb21wYXRpYmlsaXR5IG9mIFNob3RndW4gd2l0aCBkYWlseSB3b3JrZmxvdyBvZiB0aGUgc3R1ZGlvLiBEZXNpZ24gY3VzdG9tIHN5c3RlbSwgQXJ0ZW1pcywgdG8gYmUgdXNlZCBvbiB0b3Agb2YgU2hvdGd1biBpbiBvcmRlciB0byBlbmhhbmNlIHRoZSBmZWF0dXJlcyBwcm92aWRlZCBhbmQgdGFpbG9yIGl0IHRvIHRoZSBuZWVkcyBvZiB0aGUgdXNlcnMuXCIsXHJcblx0XHRcdFx0XCJEZXZlbG9wIGFuZCBpbXBsZW1lbnQgZGlmZmVyZW50IEFQSXMgdG8gdXBncmFkZSBsZWdhY3kgc3lzdGVtcyB0byB1c2UgYSB1bmlmaWVkIGRhdGFiYXNlIHdoaWxlIHBsYW5uaW5nIGZvciBmdXR1cmUgc3lzdGVtcyB0byBwcm92aWRlIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IHdpdGggdGhlIHBhc3Qgc3lzdGVtcy5cIixcclxuXHRcdFx0XVxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJwb3NpdGlvblwiOiBcIkp1bmlvciBBcHBsaWNhdGlvbiBEZXZlbG9wZXIgQ28tb3BcIixcclxuXHRcdFx0XCJjb21wYW55XCI6IFwiWkUgUG93ZXJHcm91cCBJbmMuXCIsXHJcblx0XHRcdFwibG9jYXRpb25cIjogXCJSaWNobW9uZCwgQkMsIENhbmFkYVwiLFxyXG5cdFx0XHRcInRpbWVcIjogXCJKYW4gMjAxMyAtIE1heSAyMDEzXCIsXHJcblx0XHRcdFwiZGVzY3JpcHRpb25cIjogXCJEZXZlbG9wZWQgYSBKYXZhU2NyaXB0IHBsdWdpbiBmb3IgU2VsZW5pdW0gSURFIHRvIHByb3ZpZGUgUUEgdGVhbSB3aXRoIGEgYmV0dGVyIHVuZGVyc3RhbmRpbmcgb2YgaG93IHRvIGNyZWF0ZSBhbmQgbWFuYWdlIFNlbGVuaXVtIGF1dG9tYXRpb24gc2NyaXB0cy4gRGV2ZWxvcGVkIG92ZXIgMzAwIGF1dG9tYXRpb24gdGVzdCBzY3JpcHRzIHVzaW5nIFNlbGVuaXVtIElERSBhbmQgWFBBVEgsIGFsbG93aW5nIFFBIHRvIHJ1biBzY3JpcHRzIGR1cmluZyBkYWlseSBpbXBsZW1lbnRhdGlvbnMgdG8gZW5zdXJlIHF1YWxpdHkgb3ZlciBhZGRlZCBvciBtb2RpZmllZCBmdW5jdGlvbmFsaXR5IG9mIHRoZSBwcm9qZWN0LlwiLFxyXG5cdFx0XHRcInBvaW50c1wiOlxyXG5cdFx0XHRbXHJcblx0XHRcdFx0XCJEZXZlbG9wZWQgYSBKYXZhU2NyaXB0IHBsdWdpbiBmb3IgU2VsZW5pdW0gSURFIHRvIHByb3ZpZGUgUUEgdGVhbSB3aXRoIGEgYmV0dGVyIHVuZGVyc3RhbmRpbmcgb2YgaG93IHRvIGNyZWF0ZSBhbmQgbWFuYWdlIFNlbGVuaXVtIGF1dG9tYXRpb24gc2NyaXB0cy5cIixcclxuXHRcdFx0XHRcIkRldmVsb3BlZCBvdmVyIDMwMCBhdXRvbWF0aW9uIHRlc3Qgc2NyaXB0cyB1c2luZyBTZWxlbml1bSBJREUgYW5kIFhQQVRILCBhbGxvd2luZyBRQSB0byBydW4gc2NyaXB0cyBkdXJpbmcgZGFpbHkgaW1wbGVtZW50YXRpb25zIHRvIGVuc3VyZSBxdWFsaXR5IG92ZXIgYWRkZWQgb3IgbW9kaWZpZWQgZnVuY3Rpb25hbGl0eSBvZiB0aGUgcHJvamVjdC5cIixcclxuXHRcdFx0XVxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJwb3NpdGlvblwiOiBcIlF1YWxpdHkgQXNzdXJhbmNlIFRlc3RlclwiLFxyXG5cdFx0XHRcImNvbXBhbnlcIjogXCJFbGVjdHJvbmljIEFydHMgQ2FuYWRhXCIsXHJcblx0XHRcdFwibG9jYXRpb25cIjogXCJCdXJuYWJ5LCBCQywgQ2FuYWRhXCIsXHJcblx0XHRcdFwidGltZVwiOiBcIkp1biAyMDA4IC0gU2VwIDIwMTFcIixcclxuXHRcdFx0XCJkZXNjcmlwdGlvblwiOiBcIlRlc3RlZCBnYW1pbmcgc29mdHdhcmUgZm9yIE5pbnRlbmRvIFdpaSwgWGJveCAzNjAgYW5kIFBsYXlTdGF0aW9uIDMgdG8gZW5zdXJlIHRoZSBxdWFsaXR5IG9mIHRoZSBjb21wYW554oCZcyBwcm9kdWN0LCBhbGxvd2luZyBzdWNjZXNzZnVsIGZpcnN0LXRpbWUgcGFzc2VzIG9uIHNldmVyYWwgZmlyc3QtcGFydHkgY2VydGlmaWNhdGlvbnMuIFNwZWNpYWxpemVkIGluIE5pbnRlbmRvIGNvbXBsaWFuY2UgYW5kIGNyZWF0ZWQgY29tcGxpYW5jZSB0ZXN0IGNhc2VzIGZvciBFQSBTUE9SVFMgQWN0aXZlIGFuZCBFQSBTUE9SVFMgQWN0aXZlIE1vcmUgV29ya291dHMgdXNpbmcgRGV2VGVzdCB0byBndWlkZSBjb21wbGlhbmNlIHRlc3RlcnMgZHVyaW5nIGRldmVsb3BtZW50IHByb2Nlc3MuIENvbGxhYm9yYXRlZCB3aXRoIHByb2plY3QgbWFuYWdlcnMsIHRlYW0gbGVhZHMgYW5kIG90aGVyIHRlc3RlcnMgdG8gYW5hbHl6ZSB0aGUgY292ZXJhZ2UgYW5kIHJpc2tzIG9mIGVhY2ggdGVzdCBzdWl0ZSwgZW5zdXJpbmcgdGhhdCB0aGUgcmVxdWlyZW1lbnRzIG9mIHRoZSBzb2Z0d2FyZSB3YXMgbWV0IHdoaWxlIHZhbGlkYXRpbmcgdGhlIHN0YWJpbGl0eSBvZiBlYWNoIGJ1aWxkIGFzIHRoZSBwcm9qZWN0IHByb2dyZXNzZWQuXCIsXHJcblx0XHRcdFwicG9pbnRzXCI6XHJcblx0XHRcdFtcclxuXHRcdFx0XHRcIlRlc3RlZCBnYW1pbmcgc29mdHdhcmUgZm9yIE5pbnRlbmRvIFdpaSwgWGJveCAzNjAgYW5kIFBsYXlTdGF0aW9uIDMgdG8gZW5zdXJlIHRoZSBxdWFsaXR5IG9mIHRoZSBjb21wYW554oCZcyBwcm9kdWN0LCBhbGxvd2luZyBzdWNjZXNzZnVsIGZpcnN0LXRpbWUgcGFzc2VzIG9uIHNldmVyYWwgZmlyc3QtcGFydHkgY2VydGlmaWNhdGlvbnMuXCIsXHJcblx0XHRcdFx0XCJTcGVjaWFsaXplZCBpbiBOaW50ZW5kbyBjb21wbGlhbmNlIGFuZCBjcmVhdGVkIGNvbXBsaWFuY2UgdGVzdCBjYXNlcyBmb3IgRUEgU1BPUlRTIEFjdGl2ZSBhbmQgRUEgU1BPUlRTIEFjdGl2ZSBNb3JlIFdvcmtvdXRzIHVzaW5nIERldlRlc3QgdG8gZ3VpZGUgY29tcGxpYW5jZSB0ZXN0ZXJzIGR1cmluZyBkZXZlbG9wbWVudCBwcm9jZXNzLlwiLFxyXG5cdFx0XHRcdFwiQ29sbGFib3JhdGVkIHdpdGggcHJvamVjdCBtYW5hZ2VycywgdGVhbSBsZWFkcyBhbmQgb3RoZXIgdGVzdGVycyB0byBhbmFseXplIHRoZSBjb3ZlcmFnZSBhbmQgcmlza3Mgb2YgZWFjaCB0ZXN0IHN1aXRlLCBlbnN1cmluZyB0aGF0IHRoZSByZXF1aXJlbWVudHMgb2YgdGhlIHNvZnR3YXJlIHdhcyBtZXQgd2hpbGUgdmFsaWRhdGluZyB0aGUgc3RhYmlsaXR5IG9mIGVhY2ggYnVpbGQgYXMgdGhlIHByb2plY3QgcHJvZ3Jlc3NlZC5cIixcclxuXHRcdFx0XVxyXG5cdFx0fSxcclxuXHRdLFxyXG5cdFwiZWR1Y2F0aW9uXCI6XHJcblx0W1xyXG5cdFx0e1xyXG5cdFx0XHRcInNjaG9vbFwiOiBcIlNpbW9uIEZyYXNlciBVbml2ZXJzaXR5XCIsXHJcblx0XHRcdFwicHJvZ3JhbVwiOiBcIk1ham9yIGluIENvbXB1dGluZyBTY2llbmNlXCIsXHJcblx0XHRcdFwiZmFjdWx0eVwiOiBcIkJhY2hlbG9yIG9mIFNjaWVuY2VcIixcclxuXHRcdFx0XCJ0aW1lXCI6IFwiRGVjIDIwMTNcIixcclxuXHRcdFx0XCJkZXNjcmlwdGlvblwiOiBcIkZvY3VzZWQgb24gT2JqZWN0LU9yaWVudGVkIFByb2dyYW1taW5nIGFuZCBvdGhlciBzb2Z0d2FyZSBkZXZlbG9wbWVudCBjb25jZXB0cyBzdWNoIGFzIGRhdGFiYXNlIGRlc2lnbiwgbmV0d29ya2luZyBhbmQgc29mdHdhcmUgZW5naW5lZXJpbmcuXCIsXHJcblx0XHR9XHJcblx0XSxcclxuXHRcInByb2plY3RzXCI6XHJcblx0W1xyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJQcm9kdWN0aW9uIE1hbmFnZW1lbnQgU3lzdGVtXCIsXHJcblx0XHRcdFwibG9jYXRpb25cIjogXCJESFggU3R1ZGlvc1wiLFxyXG5cdFx0XHRcInJvbGVzXCI6IFtcIlNjcnVtIE1hc3RlclwiLCBcIlNvZnR3YXJlIERldmVsb3BlclwiLCBcIlVYIERlc2lnbmVyXCJdLFxyXG5cdFx0XHRcInN0YWNrXCI6IFtcIkRqYW5nbywgQW5ndWxhckpTLCBIVE1MLCBTQ1NTLCBNeVNRTFwiXSxcclxuXHRcdFx0XCJkZXNjcmlwdGlvblwiOiBcIkRlc2lnbmVkIGFuZCBkZXZlbG9wZWQgdGFzayBtYW5hZ2VtZW50IHN5c3RlbSBhbmQgc2hvdyBicmVha2Rvd24gc3lzdGVtIGFsb25nc2lkZSBleHRlcm5hbCBzeXN0ZW0sIFNob3RndW4sIHRvIGludGVncmF0ZSBTaG90Z3VuIGludG8gc3R1ZGlvIHBpcGVsaW5lIHdoaWxlIG1haW50YWluaW5nIGxlZ2FjeSBzeXN0ZW0gZmVhdHVyZXMuIERldmVsb3BlZCBhbiBBUEkgdG8gcHJvdmlkZSBjb21tdW5pY2F0aW9uIGJldHdlZW4gU2hvdGd1biBhbmQgbGVnYWN5IHN5c3RlbSwgYWxsb3dpbmcgY29ycG9yYXRlIGRlcGFydG1lbnRzIHRvIGNvbnRpbnVlIHVzaW5nIGxlZ2FjeSBzeXN0ZW0gdG8gZW50ZXIgdXNlciBpbmZvcm1hdGlvbiB3aGlsZSBlbnN1cmUgaW5mb3JtYXRpb24gaXMgcGFzc2VkIHRvIFNob3RndW4uIExlZCBhIHRlYW0gb2YgZml2ZSBkZXZlbG9wZXJzIGluIGFuIEFnaWxlIHNjcnVtIGVudmlyb25tZW50LCBhbGxvd2luZyB0YXNrcyB0byBiZSBjb21wbGV0ZWQgd2l0aGluIGRlYWRsaW5lcyB3aGlsZSByZXBvcnRpbmcgdG8gSGVhZCBvZiBTb2Z0d2FyZSBEZXBhcnRtZW50IG9uIHNjaGVkdWxlIGFkanVzdG1lbnRzLlwiLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiTXVzZSBDbGllbnQgUmV2aWV3XCIsXHJcblx0XHRcdFwibG9jYXRpb25cIjogXCJESFggU3R1ZGlvc1wiLFxyXG5cdFx0XHRcInJvbGVzXCI6IFtcIlNvZnR3YXJlIERldmVsb3BlclwiXSxcclxuXHRcdFx0XCJzdGFja1wiOiBbXCJEamFuZ28sIEFuZ3VsYXJKUywgSFRNTCwgU0NTUywgTXlTUUxcIl0sXHJcblx0XHRcdFwiZGVzY3JpcHRpb25cIjogXCJEZXZlbG9wZWQgYW4gZXh0ZXJuYWwgY2xpZW50IHJldmlldyBzeXN0ZW0gY29ubmVjdGVkIHRvIHN0dWRpbyB0YXNrIG1hbmFnZW1lbnQgc3lzdGVtIHRocm91Z2ggYW4gQVBJLCBhbGxvd2luZyBjb29yZGluYXRvcnMgdG8gc2VuZCBjb21wbGV0ZWQgYXNzZXRzIGFuZCBzaG90cyBmb3IgY2xpZW50IHJldmlldy4gV29ya2VkIGluIGEgdGVhbSBvZiBmaXZlIGRldmVsb3BlcnMgYW5kIGEgZGVzaWduZXIgaW4gYSBzcHJpbnQgZW52aXJvbm1lbnQgdG8gcGxhbiBhbmQgZGVzaWduIHRoZSBkZXZlbG9wbWVudCBhcmNoaXRlY3R1cmUgZm9yIHRoZSBhcHBsaWNhdGlvbiBlbnN1cmUgYWxsIHJlcXVpcmVtZW50cyB3ZXJlIGNvbnNpZGVyZWQgaW4gdGhlIGRlc2lnbi5cIixcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcIk5lcmQgQ29ycHMgUHJvZHVjdGlvbiBTaXRlc1wiLFxyXG5cdFx0XHRcImxvY2F0aW9uXCI6IFwiREhYIFN0dWRpb3NcIixcclxuXHRcdFx0XCJyb2xlc1wiOiBbXCJTb2Z0d2FyZSBEZXZlbG9wZXJcIl0sXHJcblx0XHRcdFwic3RhY2tcIjogW1wiTGFyYXZlbFwiLCBcImpRdWVyeVwiLCBcIkhUTUxcIiwgXCJTQ1NTXCIsIFwiTXlTUUxcIl0sXHJcblx0XHRcdFwiZGVzY3JpcHRpb25cIjogXCJEZXNpZ24gYW5kICBkZXZlbG9wZWQgY3VzdG9tIENvbnRlbnQgTWFuYWdlbWVudCBTeXN0ZW0gZm9yIHN0dWRpbyBwcm9kdWN0aW9uIHNpdGVzLCBwcm92aWRpbmcgYSB3YXkgdG8gcGVyZm9ybSBlZmZpY2llbnQgdXBkYXRlcyB0byB3ZWJzaXRlIGNvbnRlbnRzIGluIHRoZSBmdXR1cmUuIERldmVsb3BlZCBtdWx0aXBsZSBwcm9kdWN0aW9uIHdlYnNpdGVzIHN1Y2ggYXMga2F0ZWFuZG1pbW1pbS5jYSB3aXRoIG11bHRpLWJyb3dzZXIgc3VwcG9ydCBhbmQgcmVzcG9uc2l2ZSBkZXNpZ24gdG8gcHJvdmlkZSBraWRzIHdpdGggYSBmdW4gYW5kIGludGVyYWN0aXZlIGxvY2F0aW9uIHRvIGxlYXJuIG1vcmUgYWJvdXQgdGhlIHNob3cgYW5kIHJlY2VpdmUgdXBkYXRlcy5cIixcclxuXHRcdH1cclxuXHRdXHJcbn1cclxuIl19
