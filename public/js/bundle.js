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
			"position": "Intermediate Frontend Developer/Scrum Master",
			"company": "Appnovation Technologies",
			"location": "Vancouver, BC, Canada",
			"time": "May 2016 - Current",
			"description": "Develop new PaaS web application to provide internal services and large clients an easy workflow for web site development and deployment. Built front end web pages in AngularJS, SASS and HTML based on designer mockups, consuming a REST API for communication with backend servers. Integrate a custom support portal web application with external ConnectWise ticketing service for an user friendly client facing portal. Designed wireframes and mockups through requirement meetings and design review meetings with clients to provide an intuitive user interface design for client's safety web application. Managed a team of four developers through sprints in an Agile development environment.",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9hcHAuanMiLCJwdWJsaWMvcmVzb3VyY2VzL2RhdGEuanNvbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBfID0gcmVxdWlyZSgnbG9kYXNoJyk7XHJcbnZhciBhbmd1bGFyID0gcmVxdWlyZSgnYW5ndWxhcicpO1xyXG52YXIgZGF0YSA9IHJlcXVpcmUoJy4vLi4vcHVibGljL3Jlc291cmNlcy9kYXRhLmpzb24nKTtcclxuXHJcblxyXG52YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ1Jlc3VtZVRlbXBsYXRlQXBwJywgW10pO1xyXG5cclxuTGF5b3V0Q29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnXTtcclxuZnVuY3Rpb24gTGF5b3V0Q29udHJvbGxlcigkc2NvcGUpIHtcclxuXHQkc2NvcGUuZGF0YSA9IGRhdGE7XHJcblx0JHNjb3BlLmdldFByb2ZpbGVFbGVtZW50c0Rpc3BsYXkgPSBnZXRQcm9maWxlRWxlbWVudHNEaXNwbGF5O1xyXG5cdCRzY29wZS5nZXRQcm9qZWN0Um9sZXNEaXNwbGF5ID0gZ2V0UHJvamVjdFJvbGVzRGlzcGxheTtcclxuXHQkc2NvcGUuZ2V0UHJvamVjdFN0YWNrRGlzcGxheSA9IGdldFByb2plY3RTdGFja0Rpc3BsYXk7XHJcblx0JHNjb3BlLmdldENvdmVyTGV0dGVyUGllY2VzID0gZ2V0Q292ZXJMZXR0ZXJQaWVjZXM7XHJcblxyXG5cclxuXHRmdW5jdGlvbiBnZXRQcm9maWxlRWxlbWVudHNEaXNwbGF5KHByb2ZpbGUpIHtcclxuXHRcdHJldHVybiBfLmpvaW4ocHJvZmlsZS5pdGVtcywgJywgJyk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBnZXRQcm9qZWN0Um9sZXNEaXNwbGF5KHByb2plY3QpIHtcclxuXHRcdHJldHVybiBfLmpvaW4ocHJvamVjdC5yb2xlcywgJywgJyk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBnZXRQcm9qZWN0U3RhY2tEaXNwbGF5KHByb2plY3QpIHtcclxuXHRcdHJldHVybiBfLmpvaW4ocHJvamVjdC5zdGFjaywgJywgJyk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBnZXRDb3ZlckxldHRlclBpZWNlcygpIHtcclxuXHRcdHZhciBsZXR0ZXIgPSBkYXRhLmNvdmVyTGV0dGVyLmNvbnRlbnQ7XHJcblx0XHR2YXIgcGllY2VzID0gXy5zcGxpdChsZXR0ZXIsICdcXG4nKTtcclxuXHRcdHJldHVybiBwaWVjZXM7XHJcblx0fVxyXG59XHJcblxyXG5hcHAuY29udHJvbGxlcignTGF5b3V0Q29udHJvbGxlcicsIExheW91dENvbnRyb2xsZXIpO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRhbmd1bGFyLmJvb3RzdHJhcChkb2N1bWVudCwgWydSZXN1bWVUZW1wbGF0ZUFwcCddKTtcclxufSk7XHJcblxyXG4iLCJtb2R1bGUuZXhwb3J0cz17XHJcblx0XCJwcm9maWxlSW1hZ2VcIjogXCIuL3B1YmxpYy9yZXNvdXJjZXMvcHJvZmlsZS1waWN0dXJlLnBuZ1wiLFxyXG5cdFwiZmlyc3ROYW1lXCI6IFwiR2FyeSBLLlwiLFxyXG5cdFwibGFzdE5hbWVcIjogXCJZYXVcIixcclxuXHRcIm9jY3VwYXRpb25cIjogXCJEZXZlbG9wZXIuIERlc2lnbmVyLiBRdWFsaXR5IEFzc3VyYW5jZS5cIixcclxuXHRcImNvbnRhY3RcIjoge1xyXG5cdFx0XCJwaG9uZVwiOiBcIisxICg3NzgpIDg4MiAwNTI0XCIsXHJcblx0XHRcImVtYWlsXCI6IFwiZ3lhdTg4QGdtYWlsLmNvbVwiLFxyXG5cdFx0XCJsb2NhdGlvblwiOiBcIlZhbmNvdXZlciwgQkMsIENBXCIsXHJcblx0XHRcInNvY2lhbHNcIjpcclxuXHRcdFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwibmFtZVwiOiBcIkdpdEh1YlwiLFxyXG5cdFx0XHRcdFwibGlua1wiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9nYXJ5eWF1XCIsXHJcblx0XHRcdFx0XCJsaW5rVGV4dFwiOiBcImdpdGh1Yi5jb20vZ2FyeXlhdVwiLFxyXG5cdFx0XHRcdFwiaWNvbkNsYXNzZXNcIjogXCJ6bWRpIHptZGktZ2l0aHViLWFsdFwiLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJuYW1lXCI6IFwiTGlua2VkSW5cIixcclxuXHRcdFx0XHRcImxpbmtcIjogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vZ2FyeXlhdVwiLFxyXG5cdFx0XHRcdFwibGlua1RleHRcIjogXCJsaW5rZWRpbi5jb20vaW4vZ2FyeXlhdVwiLFxyXG5cdFx0XHRcdFwiaWNvbkNsYXNzZXNcIjogXCJ6bWRpIHptZGktbGlua2VkaW5cIixcclxuXHRcdFx0fSxcclxuXHRcdF1cclxuXHR9LFxyXG5cdFwib3ZlcnZpZXdcIjogXCJGcm9udGVuZCBkZXZlbG9wZXIgd2l0aCBhIHN0cm9uZyBwYXNzaW9uIGZvciBkZXZlbG9waW5nIGluc3BpcmF0aW9uYWwgd2ViIGFwcGxpY2F0aW9ucy4gRXhwZXJpZW5jZSBpbiBkaWZmZXJlbnQgdHlwZXMgb2YgbGFuZ3VhZ2VzIGFuZCBmcmFtZXdvcmtzIHdpdGggcXVpY2sgbGVhcm5pbmcgY2FwYWJpbGl0aWVzIHRvIGFkYXB0IGluIGRpZmZlcmVudCBwcm9qZWN0IHJlcXVpcmVtZW50cy4gRmxleGlibGUgaW4gZGlmZmVyZW50IHdvcmtpbmcgZW52aXJvbm1lbnRzLCBoYXZpbmcgd29ya2VkIGVmZmVjdGl2ZWx5IGJvdGggaW5kZXBlbmRlbnRseSBhbmQgYXMgYSB0ZWFtIGluIGFuIGFnaWxlIGRldmVsb3BtZW50IHByb2Nlc3MuIFVzZXMgc2tpbGxzZXRzIGluIHVzZXIgZXhwZXJpZW5jZSBkZXNpZ24sIHF1YWxpdHkgYXNzdXJhbmNlLCBhbmQgc29mdHdhcmUgZGV2ZWxvcG1lbnQgb250byBlYWNoIHByb2plY3Qgd2l0aCB0aGUgb2JqZWN0aXZlIG9mIGRlbGl2ZXJpbmcgaGlnaCBxdWFsaXR5IHByb2R1Y3RzLlwiLFxyXG5cdFwidGVjaG5pY2FsUHJvZmlsZVwiOlxyXG5cdFtcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiTGFuZ3VhZ2VzXCIsXHJcblx0XHRcdFwiaXRlbXNcIjpcclxuXHRcdFx0W1xyXG5cdFx0XHRcdFwiSmF2YVNjcmlwdFwiLFxyXG5cdFx0XHRcdFwiSFRNTDVcIixcclxuXHRcdFx0XHRcIkNTUzNcIixcclxuXHRcdFx0XHRcIkFKQVhcIixcclxuXHRcdFx0XHRcIlNBU1NcIixcclxuXHRcdFx0XHRcIlB5dGhvblwiLFxyXG5cdFx0XHRcdFwiUEhQXCIsXHJcblx0XHRcdFx0XCJTUUxcIixcclxuXHRcdFx0XHRcIkpTT05cIixcclxuXHRcdFx0XSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcIkZyYW1ld29ya3NcIixcclxuXHRcdFx0XCJpdGVtc1wiOlxyXG5cdFx0XHRbXHJcblx0XHRcdFx0XCJBbmd1bGFySlNcIixcclxuXHRcdFx0XHRcImpRdWVyeVwiLFxyXG5cdFx0XHRcdFwiRGphbmdvXCIsXHJcblx0XHRcdFx0XCJMYXJhdmVsXCIsXHJcblx0XHRcdFx0XCJCb290c3RyYXBcIixcclxuXHRcdFx0XHRcIkd1bHBcIixcclxuXHRcdFx0XHRcIk5vZGVKU1wiLFxyXG5cdFx0XHRdLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiVmVyc2lvbiBDb250cm9sXCIsXHJcblx0XHRcdFwiaXRlbXNcIjpcclxuXHRcdFx0W1xyXG5cdFx0XHRcdFwiR2l0IChHaXRMYWIsIEdpdEh1YilcIixcclxuXHRcdFx0XHRcIlN1YnZlcnNpb24gKFRvcnRvaXNlU1ZOKVwiLFxyXG5cdFx0XHRdLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiUHJvamVjdCBUb29sc1wiLFxyXG5cdFx0XHRcIml0ZW1zXCI6XHJcblx0XHRcdFtcclxuXHRcdFx0XHRcIkNvbmZsdWVuY2VcIixcclxuXHRcdFx0XHRcIkpJUkFcIixcclxuXHRcdFx0XHRcIkdpdExhYlwiLFxyXG5cdFx0XHRcdFwiTWFudGlzXCIsXHJcblx0XHRcdFx0XCJSZXZpZXcgQm9hcmRcIixcclxuXHRcdFx0XSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcIkRlc2lnbiBUb29sc1wiLFxyXG5cdFx0XHRcIml0ZW1zXCI6XHJcblx0XHRcdFtcclxuXHRcdFx0XHRcIlNrZXRjaFwiLFxyXG5cdFx0XHRcdFwiQWRvYmUgUGhvdG9zaG9wXCIsXHJcblx0XHRcdFx0XCJJbGx1c3RyYXRvclwiLFxyXG5cdFx0XHRcdFwiSW5WaXNpb25cIixcclxuXHRcdFx0XHRcIm15QmFsc2FtaXFcIixcclxuXHRcdFx0XSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcIk1ldGhvZG9sb2dpZXNcIixcclxuXHRcdFx0XCJpdGVtc1wiOlxyXG5cdFx0XHRbXHJcblx0XHRcdFx0XCJBZ2lsZVwiLFxyXG5cdFx0XHRcdFwiU2NydW1cIixcclxuXHRcdFx0XHRcIlVuaXQgVGVzdFwiLFxyXG5cdFx0XHRcdFwiUmVzcG9uc2l2ZSBEZXNpZ25cIixcclxuXHRcdFx0XSxcclxuXHRcdH0sXHJcblx0XSxcclxuXHRcIndvcmtFeHBlcmllbmNlXCI6XHJcblx0W1xyXG5cdFx0e1xyXG5cdFx0XHRcInBvc2l0aW9uXCI6IFwiSW50ZXJtZWRpYXRlIEZyb250ZW5kIERldmVsb3Blci9TY3J1bSBNYXN0ZXJcIixcclxuXHRcdFx0XCJjb21wYW55XCI6IFwiQXBwbm92YXRpb24gVGVjaG5vbG9naWVzXCIsXHJcblx0XHRcdFwibG9jYXRpb25cIjogXCJWYW5jb3V2ZXIsIEJDLCBDYW5hZGFcIixcclxuXHRcdFx0XCJ0aW1lXCI6IFwiTWF5IDIwMTYgLSBDdXJyZW50XCIsXHJcblx0XHRcdFwiZGVzY3JpcHRpb25cIjogXCJEZXZlbG9wIG5ldyBQYWFTIHdlYiBhcHBsaWNhdGlvbiB0byBwcm92aWRlIGludGVybmFsIHNlcnZpY2VzIGFuZCBsYXJnZSBjbGllbnRzIGFuIGVhc3kgd29ya2Zsb3cgZm9yIHdlYiBzaXRlIGRldmVsb3BtZW50IGFuZCBkZXBsb3ltZW50LiBCdWlsdCBmcm9udCBlbmQgd2ViIHBhZ2VzIGluIEFuZ3VsYXJKUywgU0FTUyBhbmQgSFRNTCBiYXNlZCBvbiBkZXNpZ25lciBtb2NrdXBzLCBjb25zdW1pbmcgYSBSRVNUIEFQSSBmb3IgY29tbXVuaWNhdGlvbiB3aXRoIGJhY2tlbmQgc2VydmVycy4gSW50ZWdyYXRlIGEgY3VzdG9tIHN1cHBvcnQgcG9ydGFsIHdlYiBhcHBsaWNhdGlvbiB3aXRoIGV4dGVybmFsIENvbm5lY3RXaXNlIHRpY2tldGluZyBzZXJ2aWNlIGZvciBhbiB1c2VyIGZyaWVuZGx5IGNsaWVudCBmYWNpbmcgcG9ydGFsLiBEZXNpZ25lZCB3aXJlZnJhbWVzIGFuZCBtb2NrdXBzIHRocm91Z2ggcmVxdWlyZW1lbnQgbWVldGluZ3MgYW5kIGRlc2lnbiByZXZpZXcgbWVldGluZ3Mgd2l0aCBjbGllbnRzIHRvIHByb3ZpZGUgYW4gaW50dWl0aXZlIHVzZXIgaW50ZXJmYWNlIGRlc2lnbiBmb3IgY2xpZW50J3Mgc2FmZXR5IHdlYiBhcHBsaWNhdGlvbi4gTWFuYWdlZCBhIHRlYW0gb2YgZm91ciBkZXZlbG9wZXJzIHRocm91Z2ggc3ByaW50cyBpbiBhbiBBZ2lsZSBkZXZlbG9wbWVudCBlbnZpcm9ubWVudC5cIixcclxuXHRcdFx0XCJwb2ludHNcIjpcclxuXHRcdFx0W1xyXG5cdFx0XHRcdFwiRGV2ZWxvcCBuZXcgUGFhUyB3ZWIgYXBwbGljYXRpb24gdG8gcHJvdmlkZSBpbnRlcm5hbCBzZXJ2aWNlcyBhbmQgbGFyZ2UgY2xpZW50cyBhbiBlYXN5IHdvcmtmbG93IGZvciB3ZWJzaXRlIGRldmVsb3BtZW50IGFuZCBkZXBsb3ltZW50LlwiLFxyXG5cdFx0XHRcdFwiQnVpbHQgZnJvbnQgZW5kIHdlYiBwYWdlcyBpbiBBbmd1bGFySlMsIFNBU1MgYW5kIEhUTUwgYmFzZWQgb24gZGVzaWduZXIgbW9ja3VwcywgY29uc3VtaW5nIGEgUkVTVCBBUEkgZm9yIGNvbW11bmljYXRpb24gd2l0aCBiYWNrZW5kIHNlcnZlcnMuXCIsXHJcblx0XHRcdFx0XCJJbnRlZ3JhdGUgYSBjdXN0b20gc3VwcG9ydCBwb3J0YWwgd2ViIGFwcGxpY2F0aW9uIHdpdGggZXh0ZXJuYWwgQ29ubmVjdFdpc2UgdGlja2V0aW5nIHNlcnZpY2UgZm9yIGFuIHVzZXIgZnJpZW5kbHkgY2xpZW50IGZhY2luZyBwb3J0YWwuXCIsXHJcblx0XHRcdFx0XCJEZXNpZ25lZCB3aXJlZnJhbWVzIGFuZCBtb2NrdXBzIHRocm91Z2ggcmVxdWlyZW1lbnQgbWVldGluZ3MgYW5kIGRlc2lnbiByZXZpZXcgbWVldGluZ3Mgd2l0aCBjbGllbnRzIHRvIHByb3ZpZGUgYW4gaW50dWl0aXZlIHVzZXIgaW50ZXJmYWNlIGRlc2lnbiBmb3IgY2xpZW50J3Mgc2FmZXR5IHdlYiBhcHBsaWNhdGlvbi5cIixcclxuXHRcdFx0XVxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJwb3NpdGlvblwiOiBcIkp1bmlvciBTb2Z0d2FyZSBEZXZlbG9wZXJcIixcclxuXHRcdFx0XCJjb21wYW55XCI6IFwiREhYIE1lZGlhXCIsXHJcblx0XHRcdFwibG9jYXRpb25cIjogXCJWYW5jb3V2ZXIsIEJDLCBDYW5hZGFcIixcclxuXHRcdFx0XCJ0aW1lXCI6IFwiTWFyIDIwMTQgLSBBcHIgMjAxNlwiLFxyXG5cdFx0XHRcImRlc2NyaXB0aW9uXCI6IFwiRGV2ZWxvcCBuZXcgd2ViIGFwcGxpY2F0aW9ucyBmcm9tIHJlcXVpcmVtZW50cyBnYXRoZXJpbmcsIHNwcmludCBwbGFubmluZywgYWdpbGUgZGV2ZWxvcG1lbnQsIHJvbGxvdXQgdG8gc3lzdGVtIG1haW50ZW5hbmNlIHRvIHByb3ZpZGUgdGhlIHN0dWRpbyB3aXRoIHVuaXF1ZWx5IGJ1aWx0IHN5c3RlbXMgdG8gc3VpdCB0aGUgbmVlZHMgb2YgbWFya2V0aW5nLCBpbnRlcmFjdGl2ZSBhbmQgcGlwZWxpbmUuIENvbGxhYm9yYXRlIHdpdGggYSB0ZWFtIG9mIDQgLSA3IGRldmVsb3BlcnMgdG8gZGVzaWduIGFuZCBhcmNoaXRlY3QgdGhlIHN0cnVjdHVyZSBvZiB0aGUgcHJvamVjdHMgdG8gZGV0ZXJtaW5lIHRoZSBvcHRpbWFsIGRldmVsb3BtZW50IGFwcHJvYWNoIGFuZCBiZXN0IHRlY2hub2xvZ2llcyB0byB1c2UuIFJlc2VhcmNoIG9uIGV4dGVybmFsIHN0dWRpbyBtYW5hZ2VtZW50IHN5c3RlbSwgU2hvdGd1biwgdG8gYXNzZXNzIHRoZSBjb21wYXRpYmlsaXR5IG9mIFNob3RndW4gd2l0aCBkYWlseSB3b3JrZmxvdyBvZiB0aGUgc3R1ZGlvLiBEZXNpZ24gY3VzdG9tIHN5c3RlbSwgQXJ0ZW1pcywgdG8gYmUgdXNlZCBvbiB0b3Agb2YgU2hvdGd1biBpbiBvcmRlciB0byBlbmhhbmNlIHRoZSBmZWF0dXJlcyBwcm92aWRlZCBhbmQgdGFpbG9yIGl0IHRvIHRoZSBuZWVkcyBvZiB0aGUgdXNlcnMuIERldmVsb3AgYW5kIGltcGxlbWVudCBkaWZmZXJlbnQgQVBJcyB0byB1cGdyYWRlIGxlZ2FjeSBzeXN0ZW1zIHRvIHVzZSBhIHVuaWZpZWQgZGF0YWJhc2Ugd2hpbGUgcGxhbm5pbmcgZm9yIGZ1dHVyZSBzeXN0ZW1zIHRvIHByb3ZpZGUgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgd2l0aCB0aGUgcGFzdCBzeXN0ZW1zLlwiLFxyXG5cdFx0XHRcInBvaW50c1wiOlxyXG5cdFx0XHRbXHJcblx0XHRcdFx0XCJEZXZlbG9wIG5ldyB3ZWIgYXBwbGljYXRpb25zIGZyb20gcmVxdWlyZW1lbnRzIGdhdGhlcmluZywgc3ByaW50IHBsYW5uaW5nLCBhZ2lsZSBkZXZlbG9wbWVudCwgcm9sbG91dCB0byBzeXN0ZW0gbWFpbnRlbmFuY2UgdG8gcHJvdmlkZSB0aGUgc3R1ZGlvIHdpdGggdW5pcXVlbHkgYnVpbHQgc3lzdGVtcyB0byBzdWl0IHRoZSBuZWVkcyBvZiBtYXJrZXRpbmcsIGludGVyYWN0aXZlIGFuZCBwaXBlbGluZS5cIixcclxuXHRcdFx0XHRcIkNvbGxhYm9yYXRlIHdpdGggYSB0ZWFtIG9mIDQgLSA3IGRldmVsb3BlcnMgdG8gZGVzaWduIGFuZCBhcmNoaXRlY3QgdGhlIHN0cnVjdHVyZSBvZiB0aGUgcHJvamVjdHMgdG8gZGV0ZXJtaW5lIHRoZSBvcHRpbWFsIGRldmVsb3BtZW50IGFwcHJvYWNoIGFuZCBiZXN0IHRlY2hub2xvZ2llcyB0byB1c2UuXCIsXHJcblx0XHRcdFx0XCJSZXNlYXJjaCBvbiBleHRlcm5hbCBzdHVkaW8gbWFuYWdlbWVudCBzeXN0ZW0sIFNob3RndW4sIHRvIGFzc2VzcyB0aGUgY29tcGF0aWJpbGl0eSBvZiBTaG90Z3VuIHdpdGggZGFpbHkgd29ya2Zsb3cgb2YgdGhlIHN0dWRpby4gRGVzaWduIGN1c3RvbSBzeXN0ZW0sIEFydGVtaXMsIHRvIGJlIHVzZWQgb24gdG9wIG9mIFNob3RndW4gaW4gb3JkZXIgdG8gZW5oYW5jZSB0aGUgZmVhdHVyZXMgcHJvdmlkZWQgYW5kIHRhaWxvciBpdCB0byB0aGUgbmVlZHMgb2YgdGhlIHVzZXJzLlwiLFxyXG5cdFx0XHRcdFwiRGV2ZWxvcCBhbmQgaW1wbGVtZW50IGRpZmZlcmVudCBBUElzIHRvIHVwZ3JhZGUgbGVnYWN5IHN5c3RlbXMgdG8gdXNlIGEgdW5pZmllZCBkYXRhYmFzZSB3aGlsZSBwbGFubmluZyBmb3IgZnV0dXJlIHN5c3RlbXMgdG8gcHJvdmlkZSBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSB3aXRoIHRoZSBwYXN0IHN5c3RlbXMuXCIsXHJcblx0XHRcdF1cclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwicG9zaXRpb25cIjogXCJRdWFsaXR5IEFzc3VyYW5jZSBUZXN0ZXJcIixcclxuXHRcdFx0XCJjb21wYW55XCI6IFwiRWxlY3Ryb25pYyBBcnRzIENhbmFkYVwiLFxyXG5cdFx0XHRcImxvY2F0aW9uXCI6IFwiQnVybmFieSwgQkMsIENhbmFkYVwiLFxyXG5cdFx0XHRcInRpbWVcIjogXCJKdW4gMjAwOCAtIFNlcCAyMDExXCIsXHJcblx0XHRcdFwiZGVzY3JpcHRpb25cIjogXCJUZXN0ZWQgZ2FtaW5nIHNvZnR3YXJlIGZvciBOaW50ZW5kbyBXaWksIFhib3ggMzYwIGFuZCBQbGF5U3RhdGlvbiAzIHRvIGVuc3VyZSB0aGUgcXVhbGl0eSBvZiB0aGUgY29tcGFueSdzIHByb2R1Y3QsIGFsbG93aW5nIHN1Y2Nlc3NmdWwgZmlyc3QtdGltZSBwYXNzZXMgb24gc2V2ZXJhbCBmaXJzdC1wYXJ0eSBjZXJ0aWZpY2F0aW9ucy4gU3BlY2lhbGl6ZWQgaW4gTmludGVuZG8gY29tcGxpYW5jZSBhbmQgY3JlYXRlZCBjb21wbGlhbmNlIHRlc3QgY2FzZXMgZm9yIEVBIFNQT1JUUyBBY3RpdmUgYW5kIEVBIFNQT1JUUyBBY3RpdmUgTW9yZSBXb3Jrb3V0cyB1c2luZyBEZXZUZXN0IHRvIGd1aWRlIGNvbXBsaWFuY2UgdGVzdGVycyBkdXJpbmcgZGV2ZWxvcG1lbnQgcHJvY2Vzcy4gQ29sbGFib3JhdGVkIHdpdGggcHJvamVjdCBtYW5hZ2VycywgdGVhbSBsZWFkcyBhbmQgb3RoZXIgdGVzdGVycyB0byBhbmFseXplIHRoZSBjb3ZlcmFnZSBhbmQgcmlza3Mgb2YgZWFjaCB0ZXN0IHN1aXRlLCBlbnN1cmluZyB0aGF0IHRoZSByZXF1aXJlbWVudHMgb2YgdGhlIHNvZnR3YXJlIHdhcyBtZXQgd2hpbGUgdmFsaWRhdGluZyB0aGUgc3RhYmlsaXR5IG9mIGVhY2ggYnVpbGQgYXMgdGhlIHByb2plY3QgcHJvZ3Jlc3NlZC5cIixcclxuXHRcdFx0XCJwb2ludHNcIjpcclxuXHRcdFx0W1xyXG5cdFx0XHRcdFwiVGVzdGVkIGdhbWluZyBzb2Z0d2FyZSBmb3IgTmludGVuZG8gV2lpLCBYYm94IDM2MCBhbmQgUGxheVN0YXRpb24gMyB0byBlbnN1cmUgdGhlIHF1YWxpdHkgb2YgdGhlIGNvbXBhbnkncyBwcm9kdWN0LCBhbGxvd2luZyBzdWNjZXNzZnVsIGZpcnN0LXRpbWUgcGFzc2VzIG9uIHNldmVyYWwgZmlyc3QtcGFydHkgY2VydGlmaWNhdGlvbnMuXCIsXHJcblx0XHRcdFx0XCJTcGVjaWFsaXplZCBpbiBOaW50ZW5kbyBjb21wbGlhbmNlIGFuZCBjcmVhdGVkIGNvbXBsaWFuY2UgdGVzdCBjYXNlcyBmb3IgRUEgU1BPUlRTIEFjdGl2ZSBhbmQgRUEgU1BPUlRTIEFjdGl2ZSBNb3JlIFdvcmtvdXRzIHVzaW5nIERldlRlc3QgdG8gZ3VpZGUgY29tcGxpYW5jZSB0ZXN0ZXJzIGR1cmluZyBkZXZlbG9wbWVudCBwcm9jZXNzLlwiLFxyXG5cdFx0XHRcdFwiQ29sbGFib3JhdGVkIHdpdGggcHJvamVjdCBtYW5hZ2VycywgdGVhbSBsZWFkcyBhbmQgb3RoZXIgdGVzdGVycyB0byBhbmFseXplIHRoZSBjb3ZlcmFnZSBhbmQgcmlza3Mgb2YgZWFjaCB0ZXN0IHN1aXRlLCBlbnN1cmluZyB0aGF0IHRoZSByZXF1aXJlbWVudHMgb2YgdGhlIHNvZnR3YXJlIHdhcyBtZXQgd2hpbGUgdmFsaWRhdGluZyB0aGUgc3RhYmlsaXR5IG9mIGVhY2ggYnVpbGQgYXMgdGhlIHByb2plY3QgcHJvZ3Jlc3NlZC5cIixcclxuXHRcdFx0XVxyXG5cdFx0fSxcclxuXHRdLFxyXG5cdFwiZWR1Y2F0aW9uXCI6XHJcblx0W1xyXG5cdFx0e1xyXG5cdFx0XHRcInNjaG9vbFwiOiBcIlNpbW9uIEZyYXNlciBVbml2ZXJzaXR5XCIsXHJcblx0XHRcdFwicHJvZ3JhbVwiOiBcIk1ham9yIGluIENvbXB1dGluZyBTY2llbmNlXCIsXHJcblx0XHRcdFwiZmFjdWx0eVwiOiBcIkJhY2hlbG9yIG9mIFNjaWVuY2VcIixcclxuXHRcdFx0XCJ0aW1lXCI6IFwiRGVjIDIwMTNcIixcclxuXHRcdFx0XCJkZXNjcmlwdGlvblwiOiBcIkZvY3VzZWQgb24gT2JqZWN0LU9yaWVudGVkIFByb2dyYW1taW5nIGFuZCBvdGhlciBzb2Z0d2FyZSBkZXZlbG9wbWVudCBjb25jZXB0cyBzdWNoIGFzIGRhdGFiYXNlIGRlc2lnbiwgbmV0d29ya2luZyBhbmQgc29mdHdhcmUgZW5naW5lZXJpbmcuXCIsXHJcblx0XHR9XHJcblx0XSxcclxuXHRcInByb2plY3RzXCI6XHJcblx0W1xyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJQcm9kdWN0aW9uIE1hbmFnZW1lbnQgU3lzdGVtXCIsXHJcblx0XHRcdFwibG9jYXRpb25cIjogXCJESFggTWVkaWFcIixcclxuXHRcdFx0XCJyb2xlc1wiOiBbXCJTY3J1bSBNYXN0ZXJcIiwgXCJTb2Z0d2FyZSBEZXZlbG9wZXJcIiwgXCJVWCBEZXNpZ25lclwiXSxcclxuXHRcdFx0XCJzdGFja1wiOiBbXCJEamFuZ28sIEFuZ3VsYXJKUywgSFRNTCwgU0NTUywgTXlTUUxcIl0sXHJcblx0XHRcdFwiZGVzY3JpcHRpb25cIjogXCJEZXNpZ25lZCBhbmQgZGV2ZWxvcGVkIHRhc2sgbWFuYWdlbWVudCBzeXN0ZW0gYW5kIHNob3cgYnJlYWtkb3duIHN5c3RlbSBhbG9uZ3NpZGUgZXh0ZXJuYWwgc3lzdGVtLCBTaG90Z3VuLCB0byBpbnRlZ3JhdGUgU2hvdGd1biBpbnRvIHN0dWRpbyBwaXBlbGluZSB3aGlsZSBtYWludGFpbmluZyBsZWdhY3kgc3lzdGVtIGZlYXR1cmVzLiBEZXZlbG9wZWQgYW4gQVBJIHRvIHByb3ZpZGUgY29tbXVuaWNhdGlvbiBiZXR3ZWVuIFNob3RndW4gYW5kIGxlZ2FjeSBzeXN0ZW0sIGFsbG93aW5nIGNvcnBvcmF0ZSBkZXBhcnRtZW50cyB0byBjb250aW51ZSB1c2luZyBsZWdhY3kgc3lzdGVtIHRvIGVudGVyIHVzZXIgaW5mb3JtYXRpb24gd2hpbGUgZW5zdXJlIGluZm9ybWF0aW9uIGlzIHBhc3NlZCB0byBTaG90Z3VuLiBMZWQgYSB0ZWFtIG9mIGZpdmUgZGV2ZWxvcGVycyBpbiBhbiBBZ2lsZSBzY3J1bSBlbnZpcm9ubWVudCwgYWxsb3dpbmcgdGFza3MgdG8gYmUgY29tcGxldGVkIHdpdGhpbiBkZWFkbGluZXMgd2hpbGUgcmVwb3J0aW5nIHRvIEhlYWQgb2YgU29mdHdhcmUgRGVwYXJ0bWVudCBvbiBzY2hlZHVsZSBhZGp1c3RtZW50cy5cIixcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcIk11c2UgQ2xpZW50IFJldmlld1wiLFxyXG5cdFx0XHRcImxvY2F0aW9uXCI6IFwiREhYIE1lZGlhXCIsXHJcblx0XHRcdFwicm9sZXNcIjogW1wiU29mdHdhcmUgRGV2ZWxvcGVyXCJdLFxyXG5cdFx0XHRcInN0YWNrXCI6IFtcIkRqYW5nbywgQW5ndWxhckpTLCBIVE1MLCBTQ1NTLCBNeVNRTFwiXSxcclxuXHRcdFx0XCJkZXNjcmlwdGlvblwiOiBcIkRldmVsb3BlZCBhbiBleHRlcm5hbCBjbGllbnQgcmV2aWV3IHN5c3RlbSBjb25uZWN0ZWQgdG8gc3R1ZGlvIHRhc2sgbWFuYWdlbWVudCBzeXN0ZW0gdGhyb3VnaCBhbiBBUEksIGFsbG93aW5nIGNvb3JkaW5hdG9ycyB0byBzZW5kIGNvbXBsZXRlZCBhc3NldHMgYW5kIHNob3RzIGZvciBjbGllbnQgcmV2aWV3LiBXb3JrZWQgaW4gYSB0ZWFtIG9mIGZpdmUgZGV2ZWxvcGVycyBhbmQgYSBkZXNpZ25lciBpbiBhIHNwcmludCBlbnZpcm9ubWVudCB0byBwbGFuIGFuZCBkZXNpZ24gdGhlIGRldmVsb3BtZW50IGFyY2hpdGVjdHVyZSBmb3IgdGhlIGFwcGxpY2F0aW9uIGVuc3VyZSBhbGwgcmVxdWlyZW1lbnRzIHdlcmUgY29uc2lkZXJlZCBpbiB0aGUgZGVzaWduLlwiLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiTmVyZCBDb3JwcyBQcm9kdWN0aW9uIFNpdGVzXCIsXHJcblx0XHRcdFwibG9jYXRpb25cIjogXCJESFggTWVkaWFcIixcclxuXHRcdFx0XCJyb2xlc1wiOiBbXCJTb2Z0d2FyZSBEZXZlbG9wZXJcIl0sXHJcblx0XHRcdFwic3RhY2tcIjogW1wiTGFyYXZlbFwiLCBcImpRdWVyeVwiLCBcIkhUTUxcIiwgXCJTQ1NTXCIsIFwiTXlTUUxcIl0sXHJcblx0XHRcdFwiZGVzY3JpcHRpb25cIjogXCJEZXNpZ24gYW5kICBkZXZlbG9wZWQgY3VzdG9tIENvbnRlbnQgTWFuYWdlbWVudCBTeXN0ZW0gZm9yIHN0dWRpbyBwcm9kdWN0aW9uIHNpdGVzLCBwcm92aWRpbmcgYSB3YXkgdG8gcGVyZm9ybSBlZmZpY2llbnQgdXBkYXRlcyB0byB3ZWJzaXRlIGNvbnRlbnRzIGluIHRoZSBmdXR1cmUuIERldmVsb3BlZCBtdWx0aXBsZSBwcm9kdWN0aW9uIHdlYnNpdGVzIHN1Y2ggYXMga2F0ZWFuZG1pbW1pbS5jYSB3aXRoIG11bHRpLWJyb3dzZXIgc3VwcG9ydCBhbmQgcmVzcG9uc2l2ZSBkZXNpZ24gdG8gcHJvdmlkZSBraWRzIHdpdGggYSBmdW4gYW5kIGludGVyYWN0aXZlIGxvY2F0aW9uIHRvIGxlYXJuIG1vcmUgYWJvdXQgdGhlIHNob3cgYW5kIHJlY2VpdmUgdXBkYXRlcy5cIixcclxuXHRcdH1cclxuXHRdLFxyXG5cdFwiY292ZXJMZXR0ZXJcIjoge1xyXG5cdFx0XCJjb250ZW50XCI6IFwiXCJcclxuXHR9XHJcbn1cclxuIl19
