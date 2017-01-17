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
	$scope.getCoverLetterPieces = getCoverLetterPieces;


	function getProfileElementsDisplay(profile) {
		return _.join(profile.items, ', ');
	}

	function getProjectRolesDisplay(project) {
		return _.join(project.roles, ', ');
	}

	function getProjectStackDisplay(project) {
		return _.join(project.stack, ', ');
	}

	function getCoverLetterPieces() {
		var letter = data.coverLetter.content;
		var pieces = _.split(letter, '\n');
		return pieces;
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
	"overview": "Frontend developer with a strong passion for developing inspirational web applications. Experience in different types of languages and frameworks with quick learning capabilities to adapt in different project requirements. Flexible in different working environments, having worked effectively both independently and as a team in an agile development process. Uses skillsets in user experience design, quality assurance, and software development onto each project with the objective of delivering high quality products.",
	"technicalProfile":
	[
		{
			"name": "Languages",
			"items":
			[
				"JavaScript",
				"HTML5",
				"CSS3",
				"AJAX",
				"SASS",
				"Python",
				"PHP",
				"SQL",
				"JSON",
			],
		},
		{
			"name": "Frameworks",
			"items":
			[
				"AngularJS",
				"jQuery",
				"Django",
				"Laravel",
				"Bootstrap",
				"Gulp",
				"NodeJS",
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
				"Sketch",
				"Adobe Photoshop",
				"Illustrator",
				"InVision",
				"myBalsamiq",
			],
		},
		{
			"name": "Methodologies",
			"items":
			[
				"Agile",
				"Scrum",
				"Unit Test",
				"Responsive Design",
			],
		},
	],
	"workExperience":
	[
		{
			"position": "Intermediate Frontend Developer",
			"company": "Appnovation Technologies",
			"location": "Vancouver, BC, Canada",
			"time": "May 2016 - Current",
			"description": "Develop new PaaS web application to provide internal services and large clients an easy workflow for web site development and deployment. Built front end web pages in AngularJS, SASS and HTML based on designer mockups, consuming a REST API for communication with backend servers. Integrate a custom support portal web application with external ConnectWise ticketing service for an user friendly client facing portal. Designed wireframes and mockups through requirement meetings and design review meetings with clients to provide an intuitive user interface design for client's safety web application.",
			"points":
			[
				"Develop new PaaS web application to provide internal services and large clients an easy workflow for website development and deployment.",
				"Built front end web pages in AngularJS, SASS and HTML based on designer mockups, consuming a REST API for communication with backend servers.",
				"Integrate a custom support portal web application with external ConnectWise ticketing service for an user friendly client facing portal.",
				"Designed wireframes and mockups through requirement meetings and design review meetings with clients to provide an intuitive user interface design for client's safety web application.",
			]
		},
		{
			"position": "Junior Software Developer",
			"company": "DHX Media",
			"location": "Vancouver, BC, Canada",
			"time": "Mar 2014 - Apr 2016",
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
			"position": "Quality Assurance Tester",
			"company": "Electronic Arts Canada",
			"location": "Burnaby, BC, Canada",
			"time": "Jun 2008 - Sep 2011",
			"description": "Tested gaming software for Nintendo Wii, Xbox 360 and PlayStation 3 to ensure the quality of the company's product, allowing successful first-time passes on several first-party certifications. Specialized in Nintendo compliance and created compliance test cases for EA SPORTS Active and EA SPORTS Active More Workouts using DevTest to guide compliance testers during development process. Collaborated with project managers, team leads and other testers to analyze the coverage and risks of each test suite, ensuring that the requirements of the software was met while validating the stability of each build as the project progressed.",
			"points":
			[
				"Tested gaming software for Nintendo Wii, Xbox 360 and PlayStation 3 to ensure the quality of the company's product, allowing successful first-time passes on several first-party certifications.",
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
			"location": "DHX Media",
			"roles": ["Scrum Master", "Software Developer", "UX Designer"],
			"stack": ["Django, AngularJS, HTML, SCSS, MySQL"],
			"description": "Designed and developed task management system and show breakdown system alongside external system, Shotgun, to integrate Shotgun into studio pipeline while maintaining legacy system features. Developed an API to provide communication between Shotgun and legacy system, allowing corporate departments to continue using legacy system to enter user information while ensure information is passed to Shotgun. Led a team of five developers in an Agile scrum environment, allowing tasks to be completed within deadlines while reporting to Head of Software Department on schedule adjustments.",
		},
		{
			"name": "Muse Client Review",
			"location": "DHX Media",
			"roles": ["Software Developer"],
			"stack": ["Django, AngularJS, HTML, SCSS, MySQL"],
			"description": "Developed an external client review system connected to studio task management system through an API, allowing coordinators to send completed assets and shots for client review. Worked in a team of five developers and a designer in a sprint environment to plan and design the development architecture for the application ensure all requirements were considered in the design.",
		},
		{
			"name": "Nerd Corps Production Sites",
			"location": "DHX Media",
			"roles": ["Software Developer"],
			"stack": ["Laravel", "jQuery", "HTML", "SCSS", "MySQL"],
			"description": "Design and  developed custom Content Management System for studio production sites, providing a way to perform efficient updates to website contents in the future. Developed multiple production websites such as kateandmimmim.ca with multi-browser support and responsive design to provide kids with a fun and interactive location to learn more about the show and receive updates.",
		}
	],
	"coverLetter": {
		"content": ""
	}
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9hcHAuanMiLCJwdWJsaWMvcmVzb3VyY2VzL2RhdGEuanNvbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBfID0gcmVxdWlyZSgnbG9kYXNoJyk7XHJcbnZhciBhbmd1bGFyID0gcmVxdWlyZSgnYW5ndWxhcicpO1xyXG52YXIgZGF0YSA9IHJlcXVpcmUoJy4vLi4vcHVibGljL3Jlc291cmNlcy9kYXRhLmpzb24nKTtcclxuXHJcblxyXG52YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ1Jlc3VtZVRlbXBsYXRlQXBwJywgW10pO1xyXG5cclxuTGF5b3V0Q29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnXTtcclxuZnVuY3Rpb24gTGF5b3V0Q29udHJvbGxlcigkc2NvcGUpIHtcclxuXHQkc2NvcGUuZGF0YSA9IGRhdGE7XHJcblx0JHNjb3BlLmdldFByb2ZpbGVFbGVtZW50c0Rpc3BsYXkgPSBnZXRQcm9maWxlRWxlbWVudHNEaXNwbGF5O1xyXG5cdCRzY29wZS5nZXRQcm9qZWN0Um9sZXNEaXNwbGF5ID0gZ2V0UHJvamVjdFJvbGVzRGlzcGxheTtcclxuXHQkc2NvcGUuZ2V0UHJvamVjdFN0YWNrRGlzcGxheSA9IGdldFByb2plY3RTdGFja0Rpc3BsYXk7XHJcblx0JHNjb3BlLmdldENvdmVyTGV0dGVyUGllY2VzID0gZ2V0Q292ZXJMZXR0ZXJQaWVjZXM7XHJcblxyXG5cclxuXHRmdW5jdGlvbiBnZXRQcm9maWxlRWxlbWVudHNEaXNwbGF5KHByb2ZpbGUpIHtcclxuXHRcdHJldHVybiBfLmpvaW4ocHJvZmlsZS5pdGVtcywgJywgJyk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBnZXRQcm9qZWN0Um9sZXNEaXNwbGF5KHByb2plY3QpIHtcclxuXHRcdHJldHVybiBfLmpvaW4ocHJvamVjdC5yb2xlcywgJywgJyk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBnZXRQcm9qZWN0U3RhY2tEaXNwbGF5KHByb2plY3QpIHtcclxuXHRcdHJldHVybiBfLmpvaW4ocHJvamVjdC5zdGFjaywgJywgJyk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBnZXRDb3ZlckxldHRlclBpZWNlcygpIHtcclxuXHRcdHZhciBsZXR0ZXIgPSBkYXRhLmNvdmVyTGV0dGVyLmNvbnRlbnQ7XHJcblx0XHR2YXIgcGllY2VzID0gXy5zcGxpdChsZXR0ZXIsICdcXG4nKTtcclxuXHRcdHJldHVybiBwaWVjZXM7XHJcblx0fVxyXG59XHJcblxyXG5hcHAuY29udHJvbGxlcignTGF5b3V0Q29udHJvbGxlcicsIExheW91dENvbnRyb2xsZXIpO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRhbmd1bGFyLmJvb3RzdHJhcChkb2N1bWVudCwgWydSZXN1bWVUZW1wbGF0ZUFwcCddKTtcclxufSk7XHJcblxyXG4iLCJtb2R1bGUuZXhwb3J0cz17XHJcblx0XCJwcm9maWxlSW1hZ2VcIjogXCIuL3B1YmxpYy9yZXNvdXJjZXMvcHJvZmlsZS1waWN0dXJlLnBuZ1wiLFxyXG5cdFwiZmlyc3ROYW1lXCI6IFwiR2FyeSBLLlwiLFxyXG5cdFwibGFzdE5hbWVcIjogXCJZYXVcIixcclxuXHRcIm9jY3VwYXRpb25cIjogXCJEZXZlbG9wZXIuIERlc2lnbmVyLiBRdWFsaXR5IEFzc3VyYW5jZS5cIixcclxuXHRcImNvbnRhY3RcIjoge1xyXG5cdFx0XCJwaG9uZVwiOiBcIisxICg3NzgpIDg4MiAwNTI0XCIsXHJcblx0XHRcImVtYWlsXCI6IFwiZ3lhdTg4QGdtYWlsLmNvbVwiLFxyXG5cdFx0XCJsb2NhdGlvblwiOiBcIlZhbmNvdXZlciwgQkMsIENBXCIsXHJcblx0XHRcInNvY2lhbHNcIjpcclxuXHRcdFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwibmFtZVwiOiBcIkdpdEh1YlwiLFxyXG5cdFx0XHRcdFwibGlua1wiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9nYXJ5eWF1XCIsXHJcblx0XHRcdFx0XCJsaW5rVGV4dFwiOiBcImdpdGh1Yi5jb20vZ2FyeXlhdVwiLFxyXG5cdFx0XHRcdFwiaWNvbkNsYXNzZXNcIjogXCJ6bWRpIHptZGktZ2l0aHViLWFsdFwiLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJuYW1lXCI6IFwiTGlua2VkSW5cIixcclxuXHRcdFx0XHRcImxpbmtcIjogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vZ2FyeXlhdVwiLFxyXG5cdFx0XHRcdFwibGlua1RleHRcIjogXCJsaW5rZWRpbi5jb20vaW4vZ2FyeXlhdVwiLFxyXG5cdFx0XHRcdFwiaWNvbkNsYXNzZXNcIjogXCJ6bWRpIHptZGktbGlua2VkaW5cIixcclxuXHRcdFx0fSxcclxuXHRcdF1cclxuXHR9LFxyXG5cdFwib3ZlcnZpZXdcIjogXCJGcm9udGVuZCBkZXZlbG9wZXIgd2l0aCBhIHN0cm9uZyBwYXNzaW9uIGZvciBkZXZlbG9waW5nIGluc3BpcmF0aW9uYWwgd2ViIGFwcGxpY2F0aW9ucy4gRXhwZXJpZW5jZSBpbiBkaWZmZXJlbnQgdHlwZXMgb2YgbGFuZ3VhZ2VzIGFuZCBmcmFtZXdvcmtzIHdpdGggcXVpY2sgbGVhcm5pbmcgY2FwYWJpbGl0aWVzIHRvIGFkYXB0IGluIGRpZmZlcmVudCBwcm9qZWN0IHJlcXVpcmVtZW50cy4gRmxleGlibGUgaW4gZGlmZmVyZW50IHdvcmtpbmcgZW52aXJvbm1lbnRzLCBoYXZpbmcgd29ya2VkIGVmZmVjdGl2ZWx5IGJvdGggaW5kZXBlbmRlbnRseSBhbmQgYXMgYSB0ZWFtIGluIGFuIGFnaWxlIGRldmVsb3BtZW50IHByb2Nlc3MuIFVzZXMgc2tpbGxzZXRzIGluIHVzZXIgZXhwZXJpZW5jZSBkZXNpZ24sIHF1YWxpdHkgYXNzdXJhbmNlLCBhbmQgc29mdHdhcmUgZGV2ZWxvcG1lbnQgb250byBlYWNoIHByb2plY3Qgd2l0aCB0aGUgb2JqZWN0aXZlIG9mIGRlbGl2ZXJpbmcgaGlnaCBxdWFsaXR5IHByb2R1Y3RzLlwiLFxyXG5cdFwidGVjaG5pY2FsUHJvZmlsZVwiOlxyXG5cdFtcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiTGFuZ3VhZ2VzXCIsXHJcblx0XHRcdFwiaXRlbXNcIjpcclxuXHRcdFx0W1xyXG5cdFx0XHRcdFwiSmF2YVNjcmlwdFwiLFxyXG5cdFx0XHRcdFwiSFRNTDVcIixcclxuXHRcdFx0XHRcIkNTUzNcIixcclxuXHRcdFx0XHRcIkFKQVhcIixcclxuXHRcdFx0XHRcIlNBU1NcIixcclxuXHRcdFx0XHRcIlB5dGhvblwiLFxyXG5cdFx0XHRcdFwiUEhQXCIsXHJcblx0XHRcdFx0XCJTUUxcIixcclxuXHRcdFx0XHRcIkpTT05cIixcclxuXHRcdFx0XSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcIkZyYW1ld29ya3NcIixcclxuXHRcdFx0XCJpdGVtc1wiOlxyXG5cdFx0XHRbXHJcblx0XHRcdFx0XCJBbmd1bGFySlNcIixcclxuXHRcdFx0XHRcImpRdWVyeVwiLFxyXG5cdFx0XHRcdFwiRGphbmdvXCIsXHJcblx0XHRcdFx0XCJMYXJhdmVsXCIsXHJcblx0XHRcdFx0XCJCb290c3RyYXBcIixcclxuXHRcdFx0XHRcIkd1bHBcIixcclxuXHRcdFx0XHRcIk5vZGVKU1wiLFxyXG5cdFx0XHRdLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiVmVyc2lvbiBDb250cm9sXCIsXHJcblx0XHRcdFwiaXRlbXNcIjpcclxuXHRcdFx0W1xyXG5cdFx0XHRcdFwiR2l0IChHaXRMYWIsIEdpdEh1YilcIixcclxuXHRcdFx0XHRcIlN1YnZlcnNpb24gKFRvcnRvaXNlU1ZOKVwiLFxyXG5cdFx0XHRdLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiUHJvamVjdCBUb29sc1wiLFxyXG5cdFx0XHRcIml0ZW1zXCI6XHJcblx0XHRcdFtcclxuXHRcdFx0XHRcIkNvbmZsdWVuY2VcIixcclxuXHRcdFx0XHRcIkpJUkFcIixcclxuXHRcdFx0XHRcIkdpdExhYlwiLFxyXG5cdFx0XHRcdFwiTWFudGlzXCIsXHJcblx0XHRcdFx0XCJSZXZpZXcgQm9hcmRcIixcclxuXHRcdFx0XSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcIkRlc2lnbiBUb29sc1wiLFxyXG5cdFx0XHRcIml0ZW1zXCI6XHJcblx0XHRcdFtcclxuXHRcdFx0XHRcIlNrZXRjaFwiLFxyXG5cdFx0XHRcdFwiQWRvYmUgUGhvdG9zaG9wXCIsXHJcblx0XHRcdFx0XCJJbGx1c3RyYXRvclwiLFxyXG5cdFx0XHRcdFwiSW5WaXNpb25cIixcclxuXHRcdFx0XHRcIm15QmFsc2FtaXFcIixcclxuXHRcdFx0XSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcIk1ldGhvZG9sb2dpZXNcIixcclxuXHRcdFx0XCJpdGVtc1wiOlxyXG5cdFx0XHRbXHJcblx0XHRcdFx0XCJBZ2lsZVwiLFxyXG5cdFx0XHRcdFwiU2NydW1cIixcclxuXHRcdFx0XHRcIlVuaXQgVGVzdFwiLFxyXG5cdFx0XHRcdFwiUmVzcG9uc2l2ZSBEZXNpZ25cIixcclxuXHRcdFx0XSxcclxuXHRcdH0sXHJcblx0XSxcclxuXHRcIndvcmtFeHBlcmllbmNlXCI6XHJcblx0W1xyXG5cdFx0e1xyXG5cdFx0XHRcInBvc2l0aW9uXCI6IFwiSW50ZXJtZWRpYXRlIEZyb250ZW5kIERldmVsb3BlclwiLFxyXG5cdFx0XHRcImNvbXBhbnlcIjogXCJBcHBub3ZhdGlvbiBUZWNobm9sb2dpZXNcIixcclxuXHRcdFx0XCJsb2NhdGlvblwiOiBcIlZhbmNvdXZlciwgQkMsIENhbmFkYVwiLFxyXG5cdFx0XHRcInRpbWVcIjogXCJNYXkgMjAxNiAtIEN1cnJlbnRcIixcclxuXHRcdFx0XCJkZXNjcmlwdGlvblwiOiBcIkRldmVsb3AgbmV3IFBhYVMgd2ViIGFwcGxpY2F0aW9uIHRvIHByb3ZpZGUgaW50ZXJuYWwgc2VydmljZXMgYW5kIGxhcmdlIGNsaWVudHMgYW4gZWFzeSB3b3JrZmxvdyBmb3Igd2ViIHNpdGUgZGV2ZWxvcG1lbnQgYW5kIGRlcGxveW1lbnQuIEJ1aWx0IGZyb250IGVuZCB3ZWIgcGFnZXMgaW4gQW5ndWxhckpTLCBTQVNTIGFuZCBIVE1MIGJhc2VkIG9uIGRlc2lnbmVyIG1vY2t1cHMsIGNvbnN1bWluZyBhIFJFU1QgQVBJIGZvciBjb21tdW5pY2F0aW9uIHdpdGggYmFja2VuZCBzZXJ2ZXJzLiBJbnRlZ3JhdGUgYSBjdXN0b20gc3VwcG9ydCBwb3J0YWwgd2ViIGFwcGxpY2F0aW9uIHdpdGggZXh0ZXJuYWwgQ29ubmVjdFdpc2UgdGlja2V0aW5nIHNlcnZpY2UgZm9yIGFuIHVzZXIgZnJpZW5kbHkgY2xpZW50IGZhY2luZyBwb3J0YWwuIERlc2lnbmVkIHdpcmVmcmFtZXMgYW5kIG1vY2t1cHMgdGhyb3VnaCByZXF1aXJlbWVudCBtZWV0aW5ncyBhbmQgZGVzaWduIHJldmlldyBtZWV0aW5ncyB3aXRoIGNsaWVudHMgdG8gcHJvdmlkZSBhbiBpbnR1aXRpdmUgdXNlciBpbnRlcmZhY2UgZGVzaWduIGZvciBjbGllbnQncyBzYWZldHkgd2ViIGFwcGxpY2F0aW9uLlwiLFxyXG5cdFx0XHRcInBvaW50c1wiOlxyXG5cdFx0XHRbXHJcblx0XHRcdFx0XCJEZXZlbG9wIG5ldyBQYWFTIHdlYiBhcHBsaWNhdGlvbiB0byBwcm92aWRlIGludGVybmFsIHNlcnZpY2VzIGFuZCBsYXJnZSBjbGllbnRzIGFuIGVhc3kgd29ya2Zsb3cgZm9yIHdlYnNpdGUgZGV2ZWxvcG1lbnQgYW5kIGRlcGxveW1lbnQuXCIsXHJcblx0XHRcdFx0XCJCdWlsdCBmcm9udCBlbmQgd2ViIHBhZ2VzIGluIEFuZ3VsYXJKUywgU0FTUyBhbmQgSFRNTCBiYXNlZCBvbiBkZXNpZ25lciBtb2NrdXBzLCBjb25zdW1pbmcgYSBSRVNUIEFQSSBmb3IgY29tbXVuaWNhdGlvbiB3aXRoIGJhY2tlbmQgc2VydmVycy5cIixcclxuXHRcdFx0XHRcIkludGVncmF0ZSBhIGN1c3RvbSBzdXBwb3J0IHBvcnRhbCB3ZWIgYXBwbGljYXRpb24gd2l0aCBleHRlcm5hbCBDb25uZWN0V2lzZSB0aWNrZXRpbmcgc2VydmljZSBmb3IgYW4gdXNlciBmcmllbmRseSBjbGllbnQgZmFjaW5nIHBvcnRhbC5cIixcclxuXHRcdFx0XHRcIkRlc2lnbmVkIHdpcmVmcmFtZXMgYW5kIG1vY2t1cHMgdGhyb3VnaCByZXF1aXJlbWVudCBtZWV0aW5ncyBhbmQgZGVzaWduIHJldmlldyBtZWV0aW5ncyB3aXRoIGNsaWVudHMgdG8gcHJvdmlkZSBhbiBpbnR1aXRpdmUgdXNlciBpbnRlcmZhY2UgZGVzaWduIGZvciBjbGllbnQncyBzYWZldHkgd2ViIGFwcGxpY2F0aW9uLlwiLFxyXG5cdFx0XHRdXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcInBvc2l0aW9uXCI6IFwiSnVuaW9yIFNvZnR3YXJlIERldmVsb3BlclwiLFxyXG5cdFx0XHRcImNvbXBhbnlcIjogXCJESFggTWVkaWFcIixcclxuXHRcdFx0XCJsb2NhdGlvblwiOiBcIlZhbmNvdXZlciwgQkMsIENhbmFkYVwiLFxyXG5cdFx0XHRcInRpbWVcIjogXCJNYXIgMjAxNCAtIEFwciAyMDE2XCIsXHJcblx0XHRcdFwiZGVzY3JpcHRpb25cIjogXCJEZXZlbG9wIG5ldyB3ZWIgYXBwbGljYXRpb25zIGZyb20gcmVxdWlyZW1lbnRzIGdhdGhlcmluZywgc3ByaW50IHBsYW5uaW5nLCBhZ2lsZSBkZXZlbG9wbWVudCwgcm9sbG91dCB0byBzeXN0ZW0gbWFpbnRlbmFuY2UgdG8gcHJvdmlkZSB0aGUgc3R1ZGlvIHdpdGggdW5pcXVlbHkgYnVpbHQgc3lzdGVtcyB0byBzdWl0IHRoZSBuZWVkcyBvZiBtYXJrZXRpbmcsIGludGVyYWN0aXZlIGFuZCBwaXBlbGluZS4gQ29sbGFib3JhdGUgd2l0aCBhIHRlYW0gb2YgNCAtIDcgZGV2ZWxvcGVycyB0byBkZXNpZ24gYW5kIGFyY2hpdGVjdCB0aGUgc3RydWN0dXJlIG9mIHRoZSBwcm9qZWN0cyB0byBkZXRlcm1pbmUgdGhlIG9wdGltYWwgZGV2ZWxvcG1lbnQgYXBwcm9hY2ggYW5kIGJlc3QgdGVjaG5vbG9naWVzIHRvIHVzZS4gUmVzZWFyY2ggb24gZXh0ZXJuYWwgc3R1ZGlvIG1hbmFnZW1lbnQgc3lzdGVtLCBTaG90Z3VuLCB0byBhc3Nlc3MgdGhlIGNvbXBhdGliaWxpdHkgb2YgU2hvdGd1biB3aXRoIGRhaWx5IHdvcmtmbG93IG9mIHRoZSBzdHVkaW8uIERlc2lnbiBjdXN0b20gc3lzdGVtLCBBcnRlbWlzLCB0byBiZSB1c2VkIG9uIHRvcCBvZiBTaG90Z3VuIGluIG9yZGVyIHRvIGVuaGFuY2UgdGhlIGZlYXR1cmVzIHByb3ZpZGVkIGFuZCB0YWlsb3IgaXQgdG8gdGhlIG5lZWRzIG9mIHRoZSB1c2Vycy4gRGV2ZWxvcCBhbmQgaW1wbGVtZW50IGRpZmZlcmVudCBBUElzIHRvIHVwZ3JhZGUgbGVnYWN5IHN5c3RlbXMgdG8gdXNlIGEgdW5pZmllZCBkYXRhYmFzZSB3aGlsZSBwbGFubmluZyBmb3IgZnV0dXJlIHN5c3RlbXMgdG8gcHJvdmlkZSBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSB3aXRoIHRoZSBwYXN0IHN5c3RlbXMuXCIsXHJcblx0XHRcdFwicG9pbnRzXCI6XHJcblx0XHRcdFtcclxuXHRcdFx0XHRcIkRldmVsb3AgbmV3IHdlYiBhcHBsaWNhdGlvbnMgZnJvbSByZXF1aXJlbWVudHMgZ2F0aGVyaW5nLCBzcHJpbnQgcGxhbm5pbmcsIGFnaWxlIGRldmVsb3BtZW50LCByb2xsb3V0IHRvIHN5c3RlbSBtYWludGVuYW5jZSB0byBwcm92aWRlIHRoZSBzdHVkaW8gd2l0aCB1bmlxdWVseSBidWlsdCBzeXN0ZW1zIHRvIHN1aXQgdGhlIG5lZWRzIG9mIG1hcmtldGluZywgaW50ZXJhY3RpdmUgYW5kIHBpcGVsaW5lLlwiLFxyXG5cdFx0XHRcdFwiQ29sbGFib3JhdGUgd2l0aCBhIHRlYW0gb2YgNCAtIDcgZGV2ZWxvcGVycyB0byBkZXNpZ24gYW5kIGFyY2hpdGVjdCB0aGUgc3RydWN0dXJlIG9mIHRoZSBwcm9qZWN0cyB0byBkZXRlcm1pbmUgdGhlIG9wdGltYWwgZGV2ZWxvcG1lbnQgYXBwcm9hY2ggYW5kIGJlc3QgdGVjaG5vbG9naWVzIHRvIHVzZS5cIixcclxuXHRcdFx0XHRcIlJlc2VhcmNoIG9uIGV4dGVybmFsIHN0dWRpbyBtYW5hZ2VtZW50IHN5c3RlbSwgU2hvdGd1biwgdG8gYXNzZXNzIHRoZSBjb21wYXRpYmlsaXR5IG9mIFNob3RndW4gd2l0aCBkYWlseSB3b3JrZmxvdyBvZiB0aGUgc3R1ZGlvLiBEZXNpZ24gY3VzdG9tIHN5c3RlbSwgQXJ0ZW1pcywgdG8gYmUgdXNlZCBvbiB0b3Agb2YgU2hvdGd1biBpbiBvcmRlciB0byBlbmhhbmNlIHRoZSBmZWF0dXJlcyBwcm92aWRlZCBhbmQgdGFpbG9yIGl0IHRvIHRoZSBuZWVkcyBvZiB0aGUgdXNlcnMuXCIsXHJcblx0XHRcdFx0XCJEZXZlbG9wIGFuZCBpbXBsZW1lbnQgZGlmZmVyZW50IEFQSXMgdG8gdXBncmFkZSBsZWdhY3kgc3lzdGVtcyB0byB1c2UgYSB1bmlmaWVkIGRhdGFiYXNlIHdoaWxlIHBsYW5uaW5nIGZvciBmdXR1cmUgc3lzdGVtcyB0byBwcm92aWRlIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IHdpdGggdGhlIHBhc3Qgc3lzdGVtcy5cIixcclxuXHRcdFx0XVxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJwb3NpdGlvblwiOiBcIlF1YWxpdHkgQXNzdXJhbmNlIFRlc3RlclwiLFxyXG5cdFx0XHRcImNvbXBhbnlcIjogXCJFbGVjdHJvbmljIEFydHMgQ2FuYWRhXCIsXHJcblx0XHRcdFwibG9jYXRpb25cIjogXCJCdXJuYWJ5LCBCQywgQ2FuYWRhXCIsXHJcblx0XHRcdFwidGltZVwiOiBcIkp1biAyMDA4IC0gU2VwIDIwMTFcIixcclxuXHRcdFx0XCJkZXNjcmlwdGlvblwiOiBcIlRlc3RlZCBnYW1pbmcgc29mdHdhcmUgZm9yIE5pbnRlbmRvIFdpaSwgWGJveCAzNjAgYW5kIFBsYXlTdGF0aW9uIDMgdG8gZW5zdXJlIHRoZSBxdWFsaXR5IG9mIHRoZSBjb21wYW55J3MgcHJvZHVjdCwgYWxsb3dpbmcgc3VjY2Vzc2Z1bCBmaXJzdC10aW1lIHBhc3NlcyBvbiBzZXZlcmFsIGZpcnN0LXBhcnR5IGNlcnRpZmljYXRpb25zLiBTcGVjaWFsaXplZCBpbiBOaW50ZW5kbyBjb21wbGlhbmNlIGFuZCBjcmVhdGVkIGNvbXBsaWFuY2UgdGVzdCBjYXNlcyBmb3IgRUEgU1BPUlRTIEFjdGl2ZSBhbmQgRUEgU1BPUlRTIEFjdGl2ZSBNb3JlIFdvcmtvdXRzIHVzaW5nIERldlRlc3QgdG8gZ3VpZGUgY29tcGxpYW5jZSB0ZXN0ZXJzIGR1cmluZyBkZXZlbG9wbWVudCBwcm9jZXNzLiBDb2xsYWJvcmF0ZWQgd2l0aCBwcm9qZWN0IG1hbmFnZXJzLCB0ZWFtIGxlYWRzIGFuZCBvdGhlciB0ZXN0ZXJzIHRvIGFuYWx5emUgdGhlIGNvdmVyYWdlIGFuZCByaXNrcyBvZiBlYWNoIHRlc3Qgc3VpdGUsIGVuc3VyaW5nIHRoYXQgdGhlIHJlcXVpcmVtZW50cyBvZiB0aGUgc29mdHdhcmUgd2FzIG1ldCB3aGlsZSB2YWxpZGF0aW5nIHRoZSBzdGFiaWxpdHkgb2YgZWFjaCBidWlsZCBhcyB0aGUgcHJvamVjdCBwcm9ncmVzc2VkLlwiLFxyXG5cdFx0XHRcInBvaW50c1wiOlxyXG5cdFx0XHRbXHJcblx0XHRcdFx0XCJUZXN0ZWQgZ2FtaW5nIHNvZnR3YXJlIGZvciBOaW50ZW5kbyBXaWksIFhib3ggMzYwIGFuZCBQbGF5U3RhdGlvbiAzIHRvIGVuc3VyZSB0aGUgcXVhbGl0eSBvZiB0aGUgY29tcGFueSdzIHByb2R1Y3QsIGFsbG93aW5nIHN1Y2Nlc3NmdWwgZmlyc3QtdGltZSBwYXNzZXMgb24gc2V2ZXJhbCBmaXJzdC1wYXJ0eSBjZXJ0aWZpY2F0aW9ucy5cIixcclxuXHRcdFx0XHRcIlNwZWNpYWxpemVkIGluIE5pbnRlbmRvIGNvbXBsaWFuY2UgYW5kIGNyZWF0ZWQgY29tcGxpYW5jZSB0ZXN0IGNhc2VzIGZvciBFQSBTUE9SVFMgQWN0aXZlIGFuZCBFQSBTUE9SVFMgQWN0aXZlIE1vcmUgV29ya291dHMgdXNpbmcgRGV2VGVzdCB0byBndWlkZSBjb21wbGlhbmNlIHRlc3RlcnMgZHVyaW5nIGRldmVsb3BtZW50IHByb2Nlc3MuXCIsXHJcblx0XHRcdFx0XCJDb2xsYWJvcmF0ZWQgd2l0aCBwcm9qZWN0IG1hbmFnZXJzLCB0ZWFtIGxlYWRzIGFuZCBvdGhlciB0ZXN0ZXJzIHRvIGFuYWx5emUgdGhlIGNvdmVyYWdlIGFuZCByaXNrcyBvZiBlYWNoIHRlc3Qgc3VpdGUsIGVuc3VyaW5nIHRoYXQgdGhlIHJlcXVpcmVtZW50cyBvZiB0aGUgc29mdHdhcmUgd2FzIG1ldCB3aGlsZSB2YWxpZGF0aW5nIHRoZSBzdGFiaWxpdHkgb2YgZWFjaCBidWlsZCBhcyB0aGUgcHJvamVjdCBwcm9ncmVzc2VkLlwiLFxyXG5cdFx0XHRdXHJcblx0XHR9LFxyXG5cdF0sXHJcblx0XCJlZHVjYXRpb25cIjpcclxuXHRbXHJcblx0XHR7XHJcblx0XHRcdFwic2Nob29sXCI6IFwiU2ltb24gRnJhc2VyIFVuaXZlcnNpdHlcIixcclxuXHRcdFx0XCJwcm9ncmFtXCI6IFwiTWFqb3IgaW4gQ29tcHV0aW5nIFNjaWVuY2VcIixcclxuXHRcdFx0XCJmYWN1bHR5XCI6IFwiQmFjaGVsb3Igb2YgU2NpZW5jZVwiLFxyXG5cdFx0XHRcInRpbWVcIjogXCJEZWMgMjAxM1wiLFxyXG5cdFx0XHRcImRlc2NyaXB0aW9uXCI6IFwiRm9jdXNlZCBvbiBPYmplY3QtT3JpZW50ZWQgUHJvZ3JhbW1pbmcgYW5kIG90aGVyIHNvZnR3YXJlIGRldmVsb3BtZW50IGNvbmNlcHRzIHN1Y2ggYXMgZGF0YWJhc2UgZGVzaWduLCBuZXR3b3JraW5nIGFuZCBzb2Z0d2FyZSBlbmdpbmVlcmluZy5cIixcclxuXHRcdH1cclxuXHRdLFxyXG5cdFwicHJvamVjdHNcIjpcclxuXHRbXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcIlByb2R1Y3Rpb24gTWFuYWdlbWVudCBTeXN0ZW1cIixcclxuXHRcdFx0XCJsb2NhdGlvblwiOiBcIkRIWCBNZWRpYVwiLFxyXG5cdFx0XHRcInJvbGVzXCI6IFtcIlNjcnVtIE1hc3RlclwiLCBcIlNvZnR3YXJlIERldmVsb3BlclwiLCBcIlVYIERlc2lnbmVyXCJdLFxyXG5cdFx0XHRcInN0YWNrXCI6IFtcIkRqYW5nbywgQW5ndWxhckpTLCBIVE1MLCBTQ1NTLCBNeVNRTFwiXSxcclxuXHRcdFx0XCJkZXNjcmlwdGlvblwiOiBcIkRlc2lnbmVkIGFuZCBkZXZlbG9wZWQgdGFzayBtYW5hZ2VtZW50IHN5c3RlbSBhbmQgc2hvdyBicmVha2Rvd24gc3lzdGVtIGFsb25nc2lkZSBleHRlcm5hbCBzeXN0ZW0sIFNob3RndW4sIHRvIGludGVncmF0ZSBTaG90Z3VuIGludG8gc3R1ZGlvIHBpcGVsaW5lIHdoaWxlIG1haW50YWluaW5nIGxlZ2FjeSBzeXN0ZW0gZmVhdHVyZXMuIERldmVsb3BlZCBhbiBBUEkgdG8gcHJvdmlkZSBjb21tdW5pY2F0aW9uIGJldHdlZW4gU2hvdGd1biBhbmQgbGVnYWN5IHN5c3RlbSwgYWxsb3dpbmcgY29ycG9yYXRlIGRlcGFydG1lbnRzIHRvIGNvbnRpbnVlIHVzaW5nIGxlZ2FjeSBzeXN0ZW0gdG8gZW50ZXIgdXNlciBpbmZvcm1hdGlvbiB3aGlsZSBlbnN1cmUgaW5mb3JtYXRpb24gaXMgcGFzc2VkIHRvIFNob3RndW4uIExlZCBhIHRlYW0gb2YgZml2ZSBkZXZlbG9wZXJzIGluIGFuIEFnaWxlIHNjcnVtIGVudmlyb25tZW50LCBhbGxvd2luZyB0YXNrcyB0byBiZSBjb21wbGV0ZWQgd2l0aGluIGRlYWRsaW5lcyB3aGlsZSByZXBvcnRpbmcgdG8gSGVhZCBvZiBTb2Z0d2FyZSBEZXBhcnRtZW50IG9uIHNjaGVkdWxlIGFkanVzdG1lbnRzLlwiLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiTXVzZSBDbGllbnQgUmV2aWV3XCIsXHJcblx0XHRcdFwibG9jYXRpb25cIjogXCJESFggTWVkaWFcIixcclxuXHRcdFx0XCJyb2xlc1wiOiBbXCJTb2Z0d2FyZSBEZXZlbG9wZXJcIl0sXHJcblx0XHRcdFwic3RhY2tcIjogW1wiRGphbmdvLCBBbmd1bGFySlMsIEhUTUwsIFNDU1MsIE15U1FMXCJdLFxyXG5cdFx0XHRcImRlc2NyaXB0aW9uXCI6IFwiRGV2ZWxvcGVkIGFuIGV4dGVybmFsIGNsaWVudCByZXZpZXcgc3lzdGVtIGNvbm5lY3RlZCB0byBzdHVkaW8gdGFzayBtYW5hZ2VtZW50IHN5c3RlbSB0aHJvdWdoIGFuIEFQSSwgYWxsb3dpbmcgY29vcmRpbmF0b3JzIHRvIHNlbmQgY29tcGxldGVkIGFzc2V0cyBhbmQgc2hvdHMgZm9yIGNsaWVudCByZXZpZXcuIFdvcmtlZCBpbiBhIHRlYW0gb2YgZml2ZSBkZXZlbG9wZXJzIGFuZCBhIGRlc2lnbmVyIGluIGEgc3ByaW50IGVudmlyb25tZW50IHRvIHBsYW4gYW5kIGRlc2lnbiB0aGUgZGV2ZWxvcG1lbnQgYXJjaGl0ZWN0dXJlIGZvciB0aGUgYXBwbGljYXRpb24gZW5zdXJlIGFsbCByZXF1aXJlbWVudHMgd2VyZSBjb25zaWRlcmVkIGluIHRoZSBkZXNpZ24uXCIsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJOZXJkIENvcnBzIFByb2R1Y3Rpb24gU2l0ZXNcIixcclxuXHRcdFx0XCJsb2NhdGlvblwiOiBcIkRIWCBNZWRpYVwiLFxyXG5cdFx0XHRcInJvbGVzXCI6IFtcIlNvZnR3YXJlIERldmVsb3BlclwiXSxcclxuXHRcdFx0XCJzdGFja1wiOiBbXCJMYXJhdmVsXCIsIFwialF1ZXJ5XCIsIFwiSFRNTFwiLCBcIlNDU1NcIiwgXCJNeVNRTFwiXSxcclxuXHRcdFx0XCJkZXNjcmlwdGlvblwiOiBcIkRlc2lnbiBhbmQgIGRldmVsb3BlZCBjdXN0b20gQ29udGVudCBNYW5hZ2VtZW50IFN5c3RlbSBmb3Igc3R1ZGlvIHByb2R1Y3Rpb24gc2l0ZXMsIHByb3ZpZGluZyBhIHdheSB0byBwZXJmb3JtIGVmZmljaWVudCB1cGRhdGVzIHRvIHdlYnNpdGUgY29udGVudHMgaW4gdGhlIGZ1dHVyZS4gRGV2ZWxvcGVkIG11bHRpcGxlIHByb2R1Y3Rpb24gd2Vic2l0ZXMgc3VjaCBhcyBrYXRlYW5kbWltbWltLmNhIHdpdGggbXVsdGktYnJvd3NlciBzdXBwb3J0IGFuZCByZXNwb25zaXZlIGRlc2lnbiB0byBwcm92aWRlIGtpZHMgd2l0aCBhIGZ1biBhbmQgaW50ZXJhY3RpdmUgbG9jYXRpb24gdG8gbGVhcm4gbW9yZSBhYm91dCB0aGUgc2hvdyBhbmQgcmVjZWl2ZSB1cGRhdGVzLlwiLFxyXG5cdFx0fVxyXG5cdF0sXHJcblx0XCJjb3ZlckxldHRlclwiOiB7XHJcblx0XHRcImNvbnRlbnRcIjogXCJcIlxyXG5cdH1cclxufVxyXG4iXX0=
