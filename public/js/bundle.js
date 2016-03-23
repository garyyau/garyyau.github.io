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
			{
				"name": "Facebook",
				"link": "https://www.facebook.com/gky.aspera",
				"linkText": "facebook.com/gky.aspera",
				"iconClasses": "zmdi zmdi-facebook",
			}
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
				"XML",
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
				"MUI CSS",
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
				"MVC",
				"Agile",
				"Waterfall",
				"AJAX",
				"Scrum",
				"Unit Test",
			],
		},
	],
	"workExperience":
	[
		{
			"position": "Junior Software Developer",
			"company": "DHX Studios",
			"location": "Vancouver, BC, Canada",
			"time": "March 2014 - Current",
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
			"name": "Artemis/Shotgun",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9hcHAuanMiLCJwdWJsaWMvcmVzb3VyY2VzL2RhdGEuanNvbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgXyA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xyXG52YXIgYW5ndWxhciA9IHJlcXVpcmUoJ2FuZ3VsYXInKTtcclxudmFyIGRhdGEgPSByZXF1aXJlKCcuLy4uL3B1YmxpYy9yZXNvdXJjZXMvZGF0YS5qc29uJyk7XHJcblxyXG5cclxudmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdSZXN1bWVUZW1wbGF0ZUFwcCcsIFtdKTtcclxuXHJcbkxheW91dENvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJ107XHJcbmZ1bmN0aW9uIExheW91dENvbnRyb2xsZXIoJHNjb3BlKSB7XHJcblx0JHNjb3BlLmRhdGEgPSBkYXRhO1xyXG5cdCRzY29wZS5nZXRQcm9maWxlRWxlbWVudHNEaXNwbGF5ID0gZ2V0UHJvZmlsZUVsZW1lbnRzRGlzcGxheTtcclxuXHQkc2NvcGUuZ2V0UHJvamVjdFJvbGVzRGlzcGxheSA9IGdldFByb2plY3RSb2xlc0Rpc3BsYXk7XHJcblx0JHNjb3BlLmdldFByb2plY3RTdGFja0Rpc3BsYXkgPSBnZXRQcm9qZWN0U3RhY2tEaXNwbGF5O1xyXG5cclxuXHJcblx0ZnVuY3Rpb24gZ2V0UHJvZmlsZUVsZW1lbnRzRGlzcGxheShwcm9maWxlKSB7XHJcblx0XHRyZXR1cm4gXy5qb2luKHByb2ZpbGUuaXRlbXMsICcsICcpO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZ2V0UHJvamVjdFJvbGVzRGlzcGxheShwcm9qZWN0KSB7XHJcblx0XHRyZXR1cm4gXy5qb2luKHByb2plY3Qucm9sZXMsICcsICcpO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZ2V0UHJvamVjdFN0YWNrRGlzcGxheShwcm9qZWN0KSB7XHJcblx0XHRyZXR1cm4gXy5qb2luKHByb2plY3Quc3RhY2ssICcsICcpO1xyXG5cdH1cclxufVxyXG5cclxuYXBwLmNvbnRyb2xsZXIoJ0xheW91dENvbnRyb2xsZXInLCBMYXlvdXRDb250cm9sbGVyKTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0YW5ndWxhci5ib290c3RyYXAoZG9jdW1lbnQsIFsnUmVzdW1lVGVtcGxhdGVBcHAnXSk7XHJcbn0pO1xyXG5cclxuIiwibW9kdWxlLmV4cG9ydHM9e1xyXG5cdFwicHJvZmlsZUltYWdlXCI6IFwiLi9wdWJsaWMvcmVzb3VyY2VzL3Byb2ZpbGUtcGljdHVyZS5wbmdcIixcclxuXHRcImZpcnN0TmFtZVwiOiBcIkdhcnkgSy5cIixcclxuXHRcImxhc3ROYW1lXCI6IFwiWWF1XCIsXHJcblx0XCJvY2N1cGF0aW9uXCI6IFwiRGV2ZWxvcGVyLiBEZXNpZ25lci4gUXVhbGl0eSBBc3N1cmFuY2UuXCIsXHJcblx0XCJjb250YWN0XCI6IHtcclxuXHRcdFwicGhvbmVcIjogXCIrMSAoNzc4KSA4ODIgMDUyNFwiLFxyXG5cdFx0XCJlbWFpbFwiOiBcImd5YXU4OEBnbWFpbC5jb21cIixcclxuXHRcdFwic29jaWFsc1wiOlxyXG5cdFx0W1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJuYW1lXCI6IFwiR2l0SHViXCIsXHJcblx0XHRcdFx0XCJsaW5rXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2dhcnl5YXVcIixcclxuXHRcdFx0XHRcImxpbmtUZXh0XCI6IFwiZ2l0aHViLmNvbS9nYXJ5eWF1XCIsXHJcblx0XHRcdFx0XCJpY29uQ2xhc3Nlc1wiOiBcInptZGkgem1kaS1naXRodWItYWx0XCIsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcIm5hbWVcIjogXCJMaW5rZWRJblwiLFxyXG5cdFx0XHRcdFwibGlua1wiOiBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9nYXJ5eWF1XCIsXHJcblx0XHRcdFx0XCJsaW5rVGV4dFwiOiBcImxpbmtlZGluLmNvbS9pbi9nYXJ5eWF1XCIsXHJcblx0XHRcdFx0XCJpY29uQ2xhc3Nlc1wiOiBcInptZGkgem1kaS1saW5rZWRpblwiLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJuYW1lXCI6IFwiRmFjZWJvb2tcIixcclxuXHRcdFx0XHRcImxpbmtcIjogXCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vZ2t5LmFzcGVyYVwiLFxyXG5cdFx0XHRcdFwibGlua1RleHRcIjogXCJmYWNlYm9vay5jb20vZ2t5LmFzcGVyYVwiLFxyXG5cdFx0XHRcdFwiaWNvbkNsYXNzZXNcIjogXCJ6bWRpIHptZGktZmFjZWJvb2tcIixcclxuXHRcdFx0fVxyXG5cdFx0XVxyXG5cdH0sXHJcblx0XCJvdmVydmlld1wiOiBcIkZyb250LWVuZCBkZXZlbG9wZXIgd2l0aCBhIHN0cm9uZyBwYXNzaW9uIGZvciBkZXZlbG9waW5nIGluc3BpcmF0aW9uYWwgd2ViIGFwcGxpY2F0aW9ucy4gRXhwZXJpZW5jZSBpbiBkaWZmZXJlbnQgdHlwZXMgb2YgbGFuZ3VhZ2VzIGFuZCBmcmFtZXdvcmtzIHdpdGggcXVpY2sgbGVhcm5pbmcgY2FwYWJpbGl0aWVzIHRvIGFkYXB0IGluIGRpZmZlcmVudCBwcm9qZWN0IHJlcXVpcmVtZW50cy4gRmxleGlibGUgaW4gZGlmZmVyZW50IHdvcmtpbmcgZW52aXJvbm1lbnRzLCBoYXZpbmcgd29ya2VkIGVmZmVjdGl2ZWx5IGJvdGggaW5kZXBlbmRlbnRseSBhbmQgYXMgYSB0ZWFtIGluIGFuIGFnaWxlIGRldmVsb3BtZW50IHByb2Nlc3MuIFVzZXMgc2tpbGxzZXRzIGluIHVzZXIgZXhwZXJpZW5jZSBkZXNpZ24sIHF1YWxpdHkgYXNzdXJhbmNlLCBhbmQgc29mdHdhcmUgZGV2ZWxvcG1lbnQgb250byBlYWNoIHByb2plY3Qgd2l0aCB0aGUgb2JqZWN0aXZlIG9mIGRlbGl2ZXJpbmcgaGlnaCBxdWFsaXR5IHByb2R1Y3RzLlwiLFxyXG5cdFwidGVjaG5pY2FsUHJvZmlsZVwiOlxyXG5cdFtcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiTGFuZ3VhZ2VzXCIsXHJcblx0XHRcdFwiaXRlbXNcIjpcclxuXHRcdFx0W1xyXG5cdFx0XHRcdFwiUHl0aG9uXCIsXHJcblx0XHRcdFx0XCJQSFBcIixcclxuXHRcdFx0XHRcIkphdmFTY3JpcHRcIixcclxuXHRcdFx0XHRcIkpTT05cIixcclxuXHRcdFx0XHRcIkhUTUw1XCIsXHJcblx0XHRcdFx0XCJDU1MzXCIsXHJcblx0XHRcdFx0XCJTQ1NTXCIsXHJcblx0XHRcdFx0XCJYTUxcIixcclxuXHRcdFx0XHRcIlNRTFwiLFxyXG5cdFx0XHRdLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiRnJhbWV3b3Jrc1wiLFxyXG5cdFx0XHRcIml0ZW1zXCI6XHJcblx0XHRcdFtcclxuXHRcdFx0XHRcIkRqYW5nb1wiLFxyXG5cdFx0XHRcdFwiTGFyYXZlbFwiLFxyXG5cdFx0XHRcdFwiQW5ndWxhckpTXCIsXHJcblx0XHRcdFx0XCJSZWFjdFwiLFxyXG5cdFx0XHRcdFwiS25vY2tvdXRcIixcclxuXHRcdFx0XHRcImpRdWVyeVwiLFxyXG5cdFx0XHRcdFwiQm9vdHN0cmFwXCIsXHJcblx0XHRcdFx0XCJNVUkgQ1NTXCIsXHJcblx0XHRcdFx0XCJHdWxwXCIsXHJcblx0XHRcdFx0XCJOb2RlSlNcIixcclxuXHRcdFx0XHRcIlVES1wiLFxyXG5cdFx0XHRdLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiVmVyc2lvbiBDb250cm9sXCIsXHJcblx0XHRcdFwiaXRlbXNcIjpcclxuXHRcdFx0W1xyXG5cdFx0XHRcdFwiR2l0IChHaXRMYWIsIEdpdEh1YilcIixcclxuXHRcdFx0XHRcIlN1YnZlcnNpb24gKFRvcnRvaXNlU1ZOKVwiLFxyXG5cdFx0XHRdLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiUHJvamVjdCBUb29sc1wiLFxyXG5cdFx0XHRcIml0ZW1zXCI6XHJcblx0XHRcdFtcclxuXHRcdFx0XHRcIkNvbmZsdWVuY2VcIixcclxuXHRcdFx0XHRcIkpJUkFcIixcclxuXHRcdFx0XHRcIkdpdExhYlwiLFxyXG5cdFx0XHRcdFwiTWFudGlzXCIsXHJcblx0XHRcdFx0XCJSZXZpZXcgQm9hcmRcIixcclxuXHRcdFx0XSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcIkRlc2lnbiBUb29sc1wiLFxyXG5cdFx0XHRcIml0ZW1zXCI6XHJcblx0XHRcdFtcclxuXHRcdFx0XHRcIkFkb2JlIFBob3Rvc2hvcFwiLFxyXG5cdFx0XHRcdFwiSWxsdXN0cmF0b3JcIixcclxuXHRcdFx0XHRcIkRyZWFtd2VhdmVyXCIsXHJcblx0XHRcdFx0XCJQcmVtaWVyZSBQcm9cIixcclxuXHRcdFx0XHRcIm15QmFsc2FtaXFcIixcclxuXHRcdFx0XSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcIk1ldGhvZG9sb2dpZXNcIixcclxuXHRcdFx0XCJpdGVtc1wiOlxyXG5cdFx0XHRbXHJcblx0XHRcdFx0XCJNVkNcIixcclxuXHRcdFx0XHRcIkFnaWxlXCIsXHJcblx0XHRcdFx0XCJXYXRlcmZhbGxcIixcclxuXHRcdFx0XHRcIkFKQVhcIixcclxuXHRcdFx0XHRcIlNjcnVtXCIsXHJcblx0XHRcdFx0XCJVbml0IFRlc3RcIixcclxuXHRcdFx0XSxcclxuXHRcdH0sXHJcblx0XSxcclxuXHRcIndvcmtFeHBlcmllbmNlXCI6XHJcblx0W1xyXG5cdFx0e1xyXG5cdFx0XHRcInBvc2l0aW9uXCI6IFwiSnVuaW9yIFNvZnR3YXJlIERldmVsb3BlclwiLFxyXG5cdFx0XHRcImNvbXBhbnlcIjogXCJESFggU3R1ZGlvc1wiLFxyXG5cdFx0XHRcImxvY2F0aW9uXCI6IFwiVmFuY291dmVyLCBCQywgQ2FuYWRhXCIsXHJcblx0XHRcdFwidGltZVwiOiBcIk1hcmNoIDIwMTQgLSBDdXJyZW50XCIsXHJcblx0XHRcdFwiZGVzY3JpcHRpb25cIjogXCJEZXZlbG9wIG5ldyB3ZWIgYXBwbGljYXRpb25zIGZyb20gcmVxdWlyZW1lbnRzIGdhdGhlcmluZywgc3ByaW50IHBsYW5uaW5nLCBhZ2lsZSBkZXZlbG9wbWVudCwgcm9sbG91dCB0byBzeXN0ZW0gbWFpbnRlbmFuY2UgdG8gcHJvdmlkZSB0aGUgc3R1ZGlvIHdpdGggdW5pcXVlbHkgYnVpbHQgc3lzdGVtcyB0byBzdWl0IHRoZSBuZWVkcyBvZiBtYXJrZXRpbmcsIGludGVyYWN0aXZlIGFuZCBwaXBlbGluZS4gQ29sbGFib3JhdGUgd2l0aCBhIHRlYW0gb2YgNCAtIDcgZGV2ZWxvcGVycyB0byBkZXNpZ24gYW5kIGFyY2hpdGVjdCB0aGUgc3RydWN0dXJlIG9mIHRoZSBwcm9qZWN0cyB0byBkZXRlcm1pbmUgdGhlIG9wdGltYWwgZGV2ZWxvcG1lbnQgYXBwcm9hY2ggYW5kIGJlc3QgdGVjaG5vbG9naWVzIHRvIHVzZS4gUmVzZWFyY2ggb24gZXh0ZXJuYWwgc3R1ZGlvIG1hbmFnZW1lbnQgc3lzdGVtLCBTaG90Z3VuLCB0byBhc3Nlc3MgdGhlIGNvbXBhdGliaWxpdHkgb2YgU2hvdGd1biB3aXRoIGRhaWx5IHdvcmtmbG93IG9mIHRoZSBzdHVkaW8uIERlc2lnbiBjdXN0b20gc3lzdGVtLCBBcnRlbWlzLCB0byBiZSB1c2VkIG9uIHRvcCBvZiBTaG90Z3VuIGluIG9yZGVyIHRvIGVuaGFuY2UgdGhlIGZlYXR1cmVzIHByb3ZpZGVkIGFuZCB0YWlsb3IgaXQgdG8gdGhlIG5lZWRzIG9mIHRoZSB1c2Vycy4gRGV2ZWxvcCBhbmQgaW1wbGVtZW50IGRpZmZlcmVudCBBUElzIHRvIHVwZ3JhZGUgbGVnYWN5IHN5c3RlbXMgdG8gdXNlIGEgdW5pZmllZCBkYXRhYmFzZSB3aGlsZSBwbGFubmluZyBmb3IgZnV0dXJlIHN5c3RlbXMgdG8gcHJvdmlkZSBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSB3aXRoIHRoZSBwYXN0IHN5c3RlbXMuXCIsXHJcblx0XHRcdFwicG9pbnRzXCI6XHJcblx0XHRcdFtcclxuXHRcdFx0XHRcIkRldmVsb3AgbmV3IHdlYiBhcHBsaWNhdGlvbnMgZnJvbSByZXF1aXJlbWVudHMgZ2F0aGVyaW5nLCBzcHJpbnQgcGxhbm5pbmcsIGFnaWxlIGRldmVsb3BtZW50LCByb2xsb3V0IHRvIHN5c3RlbSBtYWludGVuYW5jZSB0byBwcm92aWRlIHRoZSBzdHVkaW8gd2l0aCB1bmlxdWVseSBidWlsdCBzeXN0ZW1zIHRvIHN1aXQgdGhlIG5lZWRzIG9mIG1hcmtldGluZywgaW50ZXJhY3RpdmUgYW5kIHBpcGVsaW5lLlwiLFxyXG5cdFx0XHRcdFwiQ29sbGFib3JhdGUgd2l0aCBhIHRlYW0gb2YgNCAtIDcgZGV2ZWxvcGVycyB0byBkZXNpZ24gYW5kIGFyY2hpdGVjdCB0aGUgc3RydWN0dXJlIG9mIHRoZSBwcm9qZWN0cyB0byBkZXRlcm1pbmUgdGhlIG9wdGltYWwgZGV2ZWxvcG1lbnQgYXBwcm9hY2ggYW5kIGJlc3QgdGVjaG5vbG9naWVzIHRvIHVzZS5cIixcclxuXHRcdFx0XHRcIlJlc2VhcmNoIG9uIGV4dGVybmFsIHN0dWRpbyBtYW5hZ2VtZW50IHN5c3RlbSwgU2hvdGd1biwgdG8gYXNzZXNzIHRoZSBjb21wYXRpYmlsaXR5IG9mIFNob3RndW4gd2l0aCBkYWlseSB3b3JrZmxvdyBvZiB0aGUgc3R1ZGlvLiBEZXNpZ24gY3VzdG9tIHN5c3RlbSwgQXJ0ZW1pcywgdG8gYmUgdXNlZCBvbiB0b3Agb2YgU2hvdGd1biBpbiBvcmRlciB0byBlbmhhbmNlIHRoZSBmZWF0dXJlcyBwcm92aWRlZCBhbmQgdGFpbG9yIGl0IHRvIHRoZSBuZWVkcyBvZiB0aGUgdXNlcnMuXCIsXHJcblx0XHRcdFx0XCJEZXZlbG9wIGFuZCBpbXBsZW1lbnQgZGlmZmVyZW50IEFQSXMgdG8gdXBncmFkZSBsZWdhY3kgc3lzdGVtcyB0byB1c2UgYSB1bmlmaWVkIGRhdGFiYXNlIHdoaWxlIHBsYW5uaW5nIGZvciBmdXR1cmUgc3lzdGVtcyB0byBwcm92aWRlIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IHdpdGggdGhlIHBhc3Qgc3lzdGVtcy5cIixcclxuXHRcdFx0XVxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJwb3NpdGlvblwiOiBcIkp1bmlvciBBcHBsaWNhdGlvbiBEZXZlbG9wZXIgQ28tb3BcIixcclxuXHRcdFx0XCJjb21wYW55XCI6IFwiWkUgUG93ZXJHcm91cCBJbmMuXCIsXHJcblx0XHRcdFwibG9jYXRpb25cIjogXCJSaWNobW9uZCwgQkMsIENhbmFkYVwiLFxyXG5cdFx0XHRcInRpbWVcIjogXCJKYW4gMjAxMyAtIE1heSAyMDEzXCIsXHJcblx0XHRcdFwiZGVzY3JpcHRpb25cIjogXCJEZXZlbG9wZWQgYSBKYXZhU2NyaXB0IHBsdWdpbiBmb3IgU2VsZW5pdW0gSURFIHRvIHByb3ZpZGUgUUEgdGVhbSB3aXRoIGEgYmV0dGVyIHVuZGVyc3RhbmRpbmcgb2YgaG93IHRvIGNyZWF0ZSBhbmQgbWFuYWdlIFNlbGVuaXVtIGF1dG9tYXRpb24gc2NyaXB0cy4gRGV2ZWxvcGVkIG92ZXIgMzAwIGF1dG9tYXRpb24gdGVzdCBzY3JpcHRzIHVzaW5nIFNlbGVuaXVtIElERSBhbmQgWFBBVEgsIGFsbG93aW5nIFFBIHRvIHJ1biBzY3JpcHRzIGR1cmluZyBkYWlseSBpbXBsZW1lbnRhdGlvbnMgdG8gZW5zdXJlIHF1YWxpdHkgb3ZlciBhZGRlZCBvciBtb2RpZmllZCBmdW5jdGlvbmFsaXR5IG9mIHRoZSBwcm9qZWN0LlwiLFxyXG5cdFx0XHRcInBvaW50c1wiOlxyXG5cdFx0XHRbXHJcblx0XHRcdFx0XCJEZXZlbG9wZWQgYSBKYXZhU2NyaXB0IHBsdWdpbiBmb3IgU2VsZW5pdW0gSURFIHRvIHByb3ZpZGUgUUEgdGVhbSB3aXRoIGEgYmV0dGVyIHVuZGVyc3RhbmRpbmcgb2YgaG93IHRvIGNyZWF0ZSBhbmQgbWFuYWdlIFNlbGVuaXVtIGF1dG9tYXRpb24gc2NyaXB0cy5cIixcclxuXHRcdFx0XHRcIkRldmVsb3BlZCBvdmVyIDMwMCBhdXRvbWF0aW9uIHRlc3Qgc2NyaXB0cyB1c2luZyBTZWxlbml1bSBJREUgYW5kIFhQQVRILCBhbGxvd2luZyBRQSB0byBydW4gc2NyaXB0cyBkdXJpbmcgZGFpbHkgaW1wbGVtZW50YXRpb25zIHRvIGVuc3VyZSBxdWFsaXR5IG92ZXIgYWRkZWQgb3IgbW9kaWZpZWQgZnVuY3Rpb25hbGl0eSBvZiB0aGUgcHJvamVjdC5cIixcclxuXHRcdFx0XVxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJwb3NpdGlvblwiOiBcIlF1YWxpdHkgQXNzdXJhbmNlIFRlc3RlclwiLFxyXG5cdFx0XHRcImNvbXBhbnlcIjogXCJFbGVjdHJvbmljIEFydHMgQ2FuYWRhXCIsXHJcblx0XHRcdFwibG9jYXRpb25cIjogXCJCdXJuYWJ5LCBCQywgQ2FuYWRhXCIsXHJcblx0XHRcdFwidGltZVwiOiBcIkp1biAyMDA4IC0gU2VwIDIwMTFcIixcclxuXHRcdFx0XCJkZXNjcmlwdGlvblwiOiBcIlRlc3RlZCBnYW1pbmcgc29mdHdhcmUgZm9yIE5pbnRlbmRvIFdpaSwgWGJveCAzNjAgYW5kIFBsYXlTdGF0aW9uIDMgdG8gZW5zdXJlIHRoZSBxdWFsaXR5IG9mIHRoZSBjb21wYW554oCZcyBwcm9kdWN0LCBhbGxvd2luZyBzdWNjZXNzZnVsIGZpcnN0LXRpbWUgcGFzc2VzIG9uIHNldmVyYWwgZmlyc3QtcGFydHkgY2VydGlmaWNhdGlvbnMuIFNwZWNpYWxpemVkIGluIE5pbnRlbmRvIGNvbXBsaWFuY2UgYW5kIGNyZWF0ZWQgY29tcGxpYW5jZSB0ZXN0IGNhc2VzIGZvciBFQSBTUE9SVFMgQWN0aXZlIGFuZCBFQSBTUE9SVFMgQWN0aXZlIE1vcmUgV29ya291dHMgdXNpbmcgRGV2VGVzdCB0byBndWlkZSBjb21wbGlhbmNlIHRlc3RlcnMgZHVyaW5nIGRldmVsb3BtZW50IHByb2Nlc3MuIENvbGxhYm9yYXRlZCB3aXRoIHByb2plY3QgbWFuYWdlcnMsIHRlYW0gbGVhZHMgYW5kIG90aGVyIHRlc3RlcnMgdG8gYW5hbHl6ZSB0aGUgY292ZXJhZ2UgYW5kIHJpc2tzIG9mIGVhY2ggdGVzdCBzdWl0ZSwgZW5zdXJpbmcgdGhhdCB0aGUgcmVxdWlyZW1lbnRzIG9mIHRoZSBzb2Z0d2FyZSB3YXMgbWV0IHdoaWxlIHZhbGlkYXRpbmcgdGhlIHN0YWJpbGl0eSBvZiBlYWNoIGJ1aWxkIGFzIHRoZSBwcm9qZWN0IHByb2dyZXNzZWQuXCIsXHJcblx0XHRcdFwicG9pbnRzXCI6XHJcblx0XHRcdFtcclxuXHRcdFx0XHRcIlRlc3RlZCBnYW1pbmcgc29mdHdhcmUgZm9yIE5pbnRlbmRvIFdpaSwgWGJveCAzNjAgYW5kIFBsYXlTdGF0aW9uIDMgdG8gZW5zdXJlIHRoZSBxdWFsaXR5IG9mIHRoZSBjb21wYW554oCZcyBwcm9kdWN0LCBhbGxvd2luZyBzdWNjZXNzZnVsIGZpcnN0LXRpbWUgcGFzc2VzIG9uIHNldmVyYWwgZmlyc3QtcGFydHkgY2VydGlmaWNhdGlvbnMuXCIsXHJcblx0XHRcdFx0XCJTcGVjaWFsaXplZCBpbiBOaW50ZW5kbyBjb21wbGlhbmNlIGFuZCBjcmVhdGVkIGNvbXBsaWFuY2UgdGVzdCBjYXNlcyBmb3IgRUEgU1BPUlRTIEFjdGl2ZSBhbmQgRUEgU1BPUlRTIEFjdGl2ZSBNb3JlIFdvcmtvdXRzIHVzaW5nIERldlRlc3QgdG8gZ3VpZGUgY29tcGxpYW5jZSB0ZXN0ZXJzIGR1cmluZyBkZXZlbG9wbWVudCBwcm9jZXNzLlwiLFxyXG5cdFx0XHRcdFwiQ29sbGFib3JhdGVkIHdpdGggcHJvamVjdCBtYW5hZ2VycywgdGVhbSBsZWFkcyBhbmQgb3RoZXIgdGVzdGVycyB0byBhbmFseXplIHRoZSBjb3ZlcmFnZSBhbmQgcmlza3Mgb2YgZWFjaCB0ZXN0IHN1aXRlLCBlbnN1cmluZyB0aGF0IHRoZSByZXF1aXJlbWVudHMgb2YgdGhlIHNvZnR3YXJlIHdhcyBtZXQgd2hpbGUgdmFsaWRhdGluZyB0aGUgc3RhYmlsaXR5IG9mIGVhY2ggYnVpbGQgYXMgdGhlIHByb2plY3QgcHJvZ3Jlc3NlZC5cIixcclxuXHRcdFx0XVxyXG5cdFx0fSxcclxuXHRdLFxyXG5cdFwiZWR1Y2F0aW9uXCI6XHJcblx0W1xyXG5cdFx0e1xyXG5cdFx0XHRcInNjaG9vbFwiOiBcIlNpbW9uIEZyYXNlciBVbml2ZXJzaXR5XCIsXHJcblx0XHRcdFwicHJvZ3JhbVwiOiBcIk1ham9yIGluIENvbXB1dGluZyBTY2llbmNlXCIsXHJcblx0XHRcdFwiZmFjdWx0eVwiOiBcIkJhY2hlbG9yIG9mIFNjaWVuY2VcIixcclxuXHRcdFx0XCJ0aW1lXCI6IFwiRGVjIDIwMTNcIixcclxuXHRcdFx0XCJkZXNjcmlwdGlvblwiOiBcIkZvY3VzZWQgb24gT2JqZWN0LU9yaWVudGVkIFByb2dyYW1taW5nIGFuZCBvdGhlciBzb2Z0d2FyZSBkZXZlbG9wbWVudCBjb25jZXB0cyBzdWNoIGFzIGRhdGFiYXNlIGRlc2lnbiwgbmV0d29ya2luZyBhbmQgc29mdHdhcmUgZW5naW5lZXJpbmcuXCIsXHJcblx0XHR9XHJcblx0XSxcclxuXHRcInByb2plY3RzXCI6XHJcblx0W1xyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJBcnRlbWlzL1Nob3RndW5cIixcclxuXHRcdFx0XCJsb2NhdGlvblwiOiBcIkRIWCBTdHVkaW9zXCIsXHJcblx0XHRcdFwicm9sZXNcIjogW1wiU2NydW0gTWFzdGVyXCIsIFwiU29mdHdhcmUgRGV2ZWxvcGVyXCIsIFwiVVggRGVzaWduZXJcIl0sXHJcblx0XHRcdFwic3RhY2tcIjogW1wiRGphbmdvLCBBbmd1bGFySlMsIEhUTUwsIFNDU1MsIE15U1FMXCJdLFxyXG5cdFx0XHRcImRlc2NyaXB0aW9uXCI6IFwiRGVzaWduZWQgYW5kIGRldmVsb3BlZCB0YXNrIG1hbmFnZW1lbnQgc3lzdGVtIGFuZCBzaG93IGJyZWFrZG93biBzeXN0ZW0gYWxvbmdzaWRlIGV4dGVybmFsIHN5c3RlbSwgU2hvdGd1biwgdG8gaW50ZWdyYXRlIFNob3RndW4gaW50byBzdHVkaW8gcGlwZWxpbmUgd2hpbGUgbWFpbnRhaW5pbmcgbGVnYWN5IHN5c3RlbSBmZWF0dXJlcy4gRGV2ZWxvcGVkIGFuIEFQSSB0byBwcm92aWRlIGNvbW11bmljYXRpb24gYmV0d2VlbiBTaG90Z3VuIGFuZCBsZWdhY3kgc3lzdGVtLCBhbGxvd2luZyBjb3Jwb3JhdGUgZGVwYXJ0bWVudHMgdG8gY29udGludWUgdXNpbmcgbGVnYWN5IHN5c3RlbSB0byBlbnRlciB1c2VyIGluZm9ybWF0aW9uIHdoaWxlIGVuc3VyZSBpbmZvcm1hdGlvbiBpcyBwYXNzZWQgdG8gU2hvdGd1bi4gTGVkIGEgdGVhbSBvZiBmaXZlIGRldmVsb3BlcnMgaW4gYW4gQWdpbGUgc2NydW0gZW52aXJvbm1lbnQsIGFsbG93aW5nIHRhc2tzIHRvIGJlIGNvbXBsZXRlZCB3aXRoaW4gZGVhZGxpbmVzIHdoaWxlIHJlcG9ydGluZyB0byBIZWFkIG9mIFNvZnR3YXJlIERlcGFydG1lbnQgb24gc2NoZWR1bGUgYWRqdXN0bWVudHMuXCIsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJNdXNlIENsaWVudCBSZXZpZXdcIixcclxuXHRcdFx0XCJsb2NhdGlvblwiOiBcIkRIWCBTdHVkaW9zXCIsXHJcblx0XHRcdFwicm9sZXNcIjogW1wiU29mdHdhcmUgRGV2ZWxvcGVyXCJdLFxyXG5cdFx0XHRcInN0YWNrXCI6IFtcIkRqYW5nbywgQW5ndWxhckpTLCBIVE1MLCBTQ1NTLCBNeVNRTFwiXSxcclxuXHRcdFx0XCJkZXNjcmlwdGlvblwiOiBcIkRldmVsb3BlZCBhbiBleHRlcm5hbCBjbGllbnQgcmV2aWV3IHN5c3RlbSBjb25uZWN0ZWQgdG8gc3R1ZGlvIHRhc2sgbWFuYWdlbWVudCBzeXN0ZW0gdGhyb3VnaCBhbiBBUEksIGFsbG93aW5nIGNvb3JkaW5hdG9ycyB0byBzZW5kIGNvbXBsZXRlZCBhc3NldHMgYW5kIHNob3RzIGZvciBjbGllbnQgcmV2aWV3LiBXb3JrZWQgaW4gYSB0ZWFtIG9mIGZpdmUgZGV2ZWxvcGVycyBhbmQgYSBkZXNpZ25lciBpbiBhIHNwcmludCBlbnZpcm9ubWVudCB0byBwbGFuIGFuZCBkZXNpZ24gdGhlIGRldmVsb3BtZW50IGFyY2hpdGVjdHVyZSBmb3IgdGhlIGFwcGxpY2F0aW9uIGVuc3VyZSBhbGwgcmVxdWlyZW1lbnRzIHdlcmUgY29uc2lkZXJlZCBpbiB0aGUgZGVzaWduLlwiLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiTmVyZCBDb3JwcyBQcm9kdWN0aW9uIFNpdGVzXCIsXHJcblx0XHRcdFwibG9jYXRpb25cIjogXCJESFggU3R1ZGlvc1wiLFxyXG5cdFx0XHRcInJvbGVzXCI6IFtcIlNvZnR3YXJlIERldmVsb3BlclwiXSxcclxuXHRcdFx0XCJzdGFja1wiOiBbXCJMYXJhdmVsXCIsIFwialF1ZXJ5XCIsIFwiSFRNTFwiLCBcIlNDU1NcIiwgXCJNeVNRTFwiXSxcclxuXHRcdFx0XCJkZXNjcmlwdGlvblwiOiBcIkRlc2lnbiBhbmQgIGRldmVsb3BlZCBjdXN0b20gQ29udGVudCBNYW5hZ2VtZW50IFN5c3RlbSBmb3Igc3R1ZGlvIHByb2R1Y3Rpb24gc2l0ZXMsIHByb3ZpZGluZyBhIHdheSB0byBwZXJmb3JtIGVmZmljaWVudCB1cGRhdGVzIHRvIHdlYnNpdGUgY29udGVudHMgaW4gdGhlIGZ1dHVyZS4gRGV2ZWxvcGVkIG11bHRpcGxlIHByb2R1Y3Rpb24gd2Vic2l0ZXMgc3VjaCBhcyBrYXRlYW5kbWltbWltLmNhIHdpdGggbXVsdGktYnJvd3NlciBzdXBwb3J0IGFuZCByZXNwb25zaXZlIGRlc2lnbiB0byBwcm92aWRlIGtpZHMgd2l0aCBhIGZ1biBhbmQgaW50ZXJhY3RpdmUgbG9jYXRpb24gdG8gbGVhcm4gbW9yZSBhYm91dCB0aGUgc2hvdyBhbmQgcmVjZWl2ZSB1cGRhdGVzLlwiLFxyXG5cdFx0fVxyXG5cdF1cclxufVxyXG4iXX0=
