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
	"profileImage": "./resources/profile-picture.png",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9hcHAuanMiLCJwdWJsaWMvcmVzb3VyY2VzL2RhdGEuanNvbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgXyA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xyXG52YXIgYW5ndWxhciA9IHJlcXVpcmUoJ2FuZ3VsYXInKTtcclxudmFyIGRhdGEgPSByZXF1aXJlKCcuLy4uL3B1YmxpYy9yZXNvdXJjZXMvZGF0YS5qc29uJyk7XHJcblxyXG5cclxudmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdSZXN1bWVUZW1wbGF0ZUFwcCcsIFtdKTtcclxuXHJcbkxheW91dENvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJ107XHJcbmZ1bmN0aW9uIExheW91dENvbnRyb2xsZXIoJHNjb3BlKSB7XHJcblx0JHNjb3BlLmRhdGEgPSBkYXRhO1xyXG5cdCRzY29wZS5nZXRQcm9maWxlRWxlbWVudHNEaXNwbGF5ID0gZ2V0UHJvZmlsZUVsZW1lbnRzRGlzcGxheTtcclxuXHQkc2NvcGUuZ2V0UHJvamVjdFJvbGVzRGlzcGxheSA9IGdldFByb2plY3RSb2xlc0Rpc3BsYXk7XHJcblx0JHNjb3BlLmdldFByb2plY3RTdGFja0Rpc3BsYXkgPSBnZXRQcm9qZWN0U3RhY2tEaXNwbGF5O1xyXG5cclxuXHJcblx0ZnVuY3Rpb24gZ2V0UHJvZmlsZUVsZW1lbnRzRGlzcGxheShwcm9maWxlKSB7XHJcblx0XHRyZXR1cm4gXy5qb2luKHByb2ZpbGUuaXRlbXMsICcsICcpO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZ2V0UHJvamVjdFJvbGVzRGlzcGxheShwcm9qZWN0KSB7XHJcblx0XHRyZXR1cm4gXy5qb2luKHByb2plY3Qucm9sZXMsICcsICcpO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZ2V0UHJvamVjdFN0YWNrRGlzcGxheShwcm9qZWN0KSB7XHJcblx0XHRyZXR1cm4gXy5qb2luKHByb2plY3Quc3RhY2ssICcsICcpO1xyXG5cdH1cclxufVxyXG5cclxuYXBwLmNvbnRyb2xsZXIoJ0xheW91dENvbnRyb2xsZXInLCBMYXlvdXRDb250cm9sbGVyKTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0YW5ndWxhci5ib290c3RyYXAoZG9jdW1lbnQsIFsnUmVzdW1lVGVtcGxhdGVBcHAnXSk7XHJcbn0pO1xyXG5cclxuIiwibW9kdWxlLmV4cG9ydHM9e1xyXG5cdFwicHJvZmlsZUltYWdlXCI6IFwiLi9yZXNvdXJjZXMvcHJvZmlsZS1waWN0dXJlLnBuZ1wiLFxyXG5cdFwiZmlyc3ROYW1lXCI6IFwiR2FyeSBLLlwiLFxyXG5cdFwibGFzdE5hbWVcIjogXCJZYXVcIixcclxuXHRcIm9jY3VwYXRpb25cIjogXCJEZXZlbG9wZXIuIERlc2lnbmVyLiBRdWFsaXR5IEFzc3VyYW5jZS5cIixcclxuXHRcImNvbnRhY3RcIjoge1xyXG5cdFx0XCJwaG9uZVwiOiBcIisxICg3NzgpIDg4MiAwNTI0XCIsXHJcblx0XHRcImVtYWlsXCI6IFwiZ3lhdTg4QGdtYWlsLmNvbVwiLFxyXG5cdFx0XCJzb2NpYWxzXCI6XHJcblx0XHRbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcIm5hbWVcIjogXCJHaXRIdWJcIixcclxuXHRcdFx0XHRcImxpbmtcIjogXCJodHRwczovL2dpdGh1Yi5jb20vZ2FyeXlhdVwiLFxyXG5cdFx0XHRcdFwibGlua1RleHRcIjogXCJnaXRodWIuY29tL2dhcnl5YXVcIixcclxuXHRcdFx0XHRcImljb25DbGFzc2VzXCI6IFwiem1kaSB6bWRpLWdpdGh1Yi1hbHRcIixcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwibmFtZVwiOiBcIkxpbmtlZEluXCIsXHJcblx0XHRcdFx0XCJsaW5rXCI6IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2dhcnl5YXVcIixcclxuXHRcdFx0XHRcImxpbmtUZXh0XCI6IFwibGlua2VkaW4uY29tL2luL2dhcnl5YXVcIixcclxuXHRcdFx0XHRcImljb25DbGFzc2VzXCI6IFwiem1kaSB6bWRpLWxpbmtlZGluXCIsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcIm5hbWVcIjogXCJGYWNlYm9va1wiLFxyXG5cdFx0XHRcdFwibGlua1wiOiBcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9na3kuYXNwZXJhXCIsXHJcblx0XHRcdFx0XCJsaW5rVGV4dFwiOiBcImZhY2Vib29rLmNvbS9na3kuYXNwZXJhXCIsXHJcblx0XHRcdFx0XCJpY29uQ2xhc3Nlc1wiOiBcInptZGkgem1kaS1mYWNlYm9va1wiLFxyXG5cdFx0XHR9XHJcblx0XHRdXHJcblx0fSxcclxuXHRcIm92ZXJ2aWV3XCI6IFwiRnJvbnQtZW5kIGRldmVsb3BlciB3aXRoIGEgc3Ryb25nIHBhc3Npb24gZm9yIGRldmVsb3BpbmcgaW5zcGlyYXRpb25hbCB3ZWIgYXBwbGljYXRpb25zLiBFeHBlcmllbmNlIGluIGRpZmZlcmVudCB0eXBlcyBvZiBsYW5ndWFnZXMgYW5kIGZyYW1ld29ya3Mgd2l0aCBxdWljayBsZWFybmluZyBjYXBhYmlsaXRpZXMgdG8gYWRhcHQgaW4gZGlmZmVyZW50IHByb2plY3QgcmVxdWlyZW1lbnRzLiBGbGV4aWJsZSBpbiBkaWZmZXJlbnQgd29ya2luZyBlbnZpcm9ubWVudHMsIGhhdmluZyB3b3JrZWQgZWZmZWN0aXZlbHkgYm90aCBpbmRlcGVuZGVudGx5IGFuZCBhcyBhIHRlYW0gaW4gYW4gYWdpbGUgZGV2ZWxvcG1lbnQgcHJvY2Vzcy4gVXNlcyBza2lsbHNldHMgaW4gdXNlciBleHBlcmllbmNlIGRlc2lnbiwgcXVhbGl0eSBhc3N1cmFuY2UsIGFuZCBzb2Z0d2FyZSBkZXZlbG9wbWVudCBvbnRvIGVhY2ggcHJvamVjdCB3aXRoIHRoZSBvYmplY3RpdmUgb2YgZGVsaXZlcmluZyBoaWdoIHF1YWxpdHkgcHJvZHVjdHMuXCIsXHJcblx0XCJ0ZWNobmljYWxQcm9maWxlXCI6XHJcblx0W1xyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJMYW5ndWFnZXNcIixcclxuXHRcdFx0XCJpdGVtc1wiOlxyXG5cdFx0XHRbXHJcblx0XHRcdFx0XCJQeXRob25cIixcclxuXHRcdFx0XHRcIlBIUFwiLFxyXG5cdFx0XHRcdFwiSmF2YVNjcmlwdFwiLFxyXG5cdFx0XHRcdFwiSlNPTlwiLFxyXG5cdFx0XHRcdFwiSFRNTDVcIixcclxuXHRcdFx0XHRcIkNTUzNcIixcclxuXHRcdFx0XHRcIlNDU1NcIixcclxuXHRcdFx0XHRcIlhNTFwiLFxyXG5cdFx0XHRcdFwiU1FMXCIsXHJcblx0XHRcdF0sXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJGcmFtZXdvcmtzXCIsXHJcblx0XHRcdFwiaXRlbXNcIjpcclxuXHRcdFx0W1xyXG5cdFx0XHRcdFwiRGphbmdvXCIsXHJcblx0XHRcdFx0XCJMYXJhdmVsXCIsXHJcblx0XHRcdFx0XCJBbmd1bGFySlNcIixcclxuXHRcdFx0XHRcIlJlYWN0XCIsXHJcblx0XHRcdFx0XCJLbm9ja291dFwiLFxyXG5cdFx0XHRcdFwialF1ZXJ5XCIsXHJcblx0XHRcdFx0XCJCb290c3RyYXBcIixcclxuXHRcdFx0XHRcIk1VSSBDU1NcIixcclxuXHRcdFx0XHRcIkd1bHBcIixcclxuXHRcdFx0XHRcIk5vZGVKU1wiLFxyXG5cdFx0XHRcdFwiVURLXCIsXHJcblx0XHRcdF0sXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJWZXJzaW9uIENvbnRyb2xcIixcclxuXHRcdFx0XCJpdGVtc1wiOlxyXG5cdFx0XHRbXHJcblx0XHRcdFx0XCJHaXQgKEdpdExhYiwgR2l0SHViKVwiLFxyXG5cdFx0XHRcdFwiU3VidmVyc2lvbiAoVG9ydG9pc2VTVk4pXCIsXHJcblx0XHRcdF0sXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJQcm9qZWN0IFRvb2xzXCIsXHJcblx0XHRcdFwiaXRlbXNcIjpcclxuXHRcdFx0W1xyXG5cdFx0XHRcdFwiQ29uZmx1ZW5jZVwiLFxyXG5cdFx0XHRcdFwiSklSQVwiLFxyXG5cdFx0XHRcdFwiR2l0TGFiXCIsXHJcblx0XHRcdFx0XCJNYW50aXNcIixcclxuXHRcdFx0XHRcIlJldmlldyBCb2FyZFwiLFxyXG5cdFx0XHRdLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiRGVzaWduIFRvb2xzXCIsXHJcblx0XHRcdFwiaXRlbXNcIjpcclxuXHRcdFx0W1xyXG5cdFx0XHRcdFwiQWRvYmUgUGhvdG9zaG9wXCIsXHJcblx0XHRcdFx0XCJJbGx1c3RyYXRvclwiLFxyXG5cdFx0XHRcdFwiRHJlYW13ZWF2ZXJcIixcclxuXHRcdFx0XHRcIlByZW1pZXJlIFByb1wiLFxyXG5cdFx0XHRcdFwibXlCYWxzYW1pcVwiLFxyXG5cdFx0XHRdLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiTWV0aG9kb2xvZ2llc1wiLFxyXG5cdFx0XHRcIml0ZW1zXCI6XHJcblx0XHRcdFtcclxuXHRcdFx0XHRcIk1WQ1wiLFxyXG5cdFx0XHRcdFwiQWdpbGVcIixcclxuXHRcdFx0XHRcIldhdGVyZmFsbFwiLFxyXG5cdFx0XHRcdFwiQUpBWFwiLFxyXG5cdFx0XHRcdFwiU2NydW1cIixcclxuXHRcdFx0XHRcIlVuaXQgVGVzdFwiLFxyXG5cdFx0XHRdLFxyXG5cdFx0fSxcclxuXHRdLFxyXG5cdFwid29ya0V4cGVyaWVuY2VcIjpcclxuXHRbXHJcblx0XHR7XHJcblx0XHRcdFwicG9zaXRpb25cIjogXCJKdW5pb3IgU29mdHdhcmUgRGV2ZWxvcGVyXCIsXHJcblx0XHRcdFwiY29tcGFueVwiOiBcIkRIWCBTdHVkaW9zXCIsXHJcblx0XHRcdFwibG9jYXRpb25cIjogXCJWYW5jb3V2ZXIsIEJDLCBDYW5hZGFcIixcclxuXHRcdFx0XCJ0aW1lXCI6IFwiTWFyY2ggMjAxNCAtIEN1cnJlbnRcIixcclxuXHRcdFx0XCJkZXNjcmlwdGlvblwiOiBcIkRldmVsb3AgbmV3IHdlYiBhcHBsaWNhdGlvbnMgZnJvbSByZXF1aXJlbWVudHMgZ2F0aGVyaW5nLCBzcHJpbnQgcGxhbm5pbmcsIGFnaWxlIGRldmVsb3BtZW50LCByb2xsb3V0IHRvIHN5c3RlbSBtYWludGVuYW5jZSB0byBwcm92aWRlIHRoZSBzdHVkaW8gd2l0aCB1bmlxdWVseSBidWlsdCBzeXN0ZW1zIHRvIHN1aXQgdGhlIG5lZWRzIG9mIG1hcmtldGluZywgaW50ZXJhY3RpdmUgYW5kIHBpcGVsaW5lLiBDb2xsYWJvcmF0ZSB3aXRoIGEgdGVhbSBvZiA0IC0gNyBkZXZlbG9wZXJzIHRvIGRlc2lnbiBhbmQgYXJjaGl0ZWN0IHRoZSBzdHJ1Y3R1cmUgb2YgdGhlIHByb2plY3RzIHRvIGRldGVybWluZSB0aGUgb3B0aW1hbCBkZXZlbG9wbWVudCBhcHByb2FjaCBhbmQgYmVzdCB0ZWNobm9sb2dpZXMgdG8gdXNlLiBSZXNlYXJjaCBvbiBleHRlcm5hbCBzdHVkaW8gbWFuYWdlbWVudCBzeXN0ZW0sIFNob3RndW4sIHRvIGFzc2VzcyB0aGUgY29tcGF0aWJpbGl0eSBvZiBTaG90Z3VuIHdpdGggZGFpbHkgd29ya2Zsb3cgb2YgdGhlIHN0dWRpby4gRGVzaWduIGN1c3RvbSBzeXN0ZW0sIEFydGVtaXMsIHRvIGJlIHVzZWQgb24gdG9wIG9mIFNob3RndW4gaW4gb3JkZXIgdG8gZW5oYW5jZSB0aGUgZmVhdHVyZXMgcHJvdmlkZWQgYW5kIHRhaWxvciBpdCB0byB0aGUgbmVlZHMgb2YgdGhlIHVzZXJzLiBEZXZlbG9wIGFuZCBpbXBsZW1lbnQgZGlmZmVyZW50IEFQSXMgdG8gdXBncmFkZSBsZWdhY3kgc3lzdGVtcyB0byB1c2UgYSB1bmlmaWVkIGRhdGFiYXNlIHdoaWxlIHBsYW5uaW5nIGZvciBmdXR1cmUgc3lzdGVtcyB0byBwcm92aWRlIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IHdpdGggdGhlIHBhc3Qgc3lzdGVtcy5cIixcclxuXHRcdFx0XCJwb2ludHNcIjpcclxuXHRcdFx0W1xyXG5cdFx0XHRcdFwiRGV2ZWxvcCBuZXcgd2ViIGFwcGxpY2F0aW9ucyBmcm9tIHJlcXVpcmVtZW50cyBnYXRoZXJpbmcsIHNwcmludCBwbGFubmluZywgYWdpbGUgZGV2ZWxvcG1lbnQsIHJvbGxvdXQgdG8gc3lzdGVtIG1haW50ZW5hbmNlIHRvIHByb3ZpZGUgdGhlIHN0dWRpbyB3aXRoIHVuaXF1ZWx5IGJ1aWx0IHN5c3RlbXMgdG8gc3VpdCB0aGUgbmVlZHMgb2YgbWFya2V0aW5nLCBpbnRlcmFjdGl2ZSBhbmQgcGlwZWxpbmUuXCIsXHJcblx0XHRcdFx0XCJDb2xsYWJvcmF0ZSB3aXRoIGEgdGVhbSBvZiA0IC0gNyBkZXZlbG9wZXJzIHRvIGRlc2lnbiBhbmQgYXJjaGl0ZWN0IHRoZSBzdHJ1Y3R1cmUgb2YgdGhlIHByb2plY3RzIHRvIGRldGVybWluZSB0aGUgb3B0aW1hbCBkZXZlbG9wbWVudCBhcHByb2FjaCBhbmQgYmVzdCB0ZWNobm9sb2dpZXMgdG8gdXNlLlwiLFxyXG5cdFx0XHRcdFwiUmVzZWFyY2ggb24gZXh0ZXJuYWwgc3R1ZGlvIG1hbmFnZW1lbnQgc3lzdGVtLCBTaG90Z3VuLCB0byBhc3Nlc3MgdGhlIGNvbXBhdGliaWxpdHkgb2YgU2hvdGd1biB3aXRoIGRhaWx5IHdvcmtmbG93IG9mIHRoZSBzdHVkaW8uIERlc2lnbiBjdXN0b20gc3lzdGVtLCBBcnRlbWlzLCB0byBiZSB1c2VkIG9uIHRvcCBvZiBTaG90Z3VuIGluIG9yZGVyIHRvIGVuaGFuY2UgdGhlIGZlYXR1cmVzIHByb3ZpZGVkIGFuZCB0YWlsb3IgaXQgdG8gdGhlIG5lZWRzIG9mIHRoZSB1c2Vycy5cIixcclxuXHRcdFx0XHRcIkRldmVsb3AgYW5kIGltcGxlbWVudCBkaWZmZXJlbnQgQVBJcyB0byB1cGdyYWRlIGxlZ2FjeSBzeXN0ZW1zIHRvIHVzZSBhIHVuaWZpZWQgZGF0YWJhc2Ugd2hpbGUgcGxhbm5pbmcgZm9yIGZ1dHVyZSBzeXN0ZW1zIHRvIHByb3ZpZGUgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgd2l0aCB0aGUgcGFzdCBzeXN0ZW1zLlwiLFxyXG5cdFx0XHRdXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcInBvc2l0aW9uXCI6IFwiSnVuaW9yIEFwcGxpY2F0aW9uIERldmVsb3BlciBDby1vcFwiLFxyXG5cdFx0XHRcImNvbXBhbnlcIjogXCJaRSBQb3dlckdyb3VwIEluYy5cIixcclxuXHRcdFx0XCJsb2NhdGlvblwiOiBcIlJpY2htb25kLCBCQywgQ2FuYWRhXCIsXHJcblx0XHRcdFwidGltZVwiOiBcIkphbiAyMDEzIC0gTWF5IDIwMTNcIixcclxuXHRcdFx0XCJkZXNjcmlwdGlvblwiOiBcIkRldmVsb3BlZCBhIEphdmFTY3JpcHQgcGx1Z2luIGZvciBTZWxlbml1bSBJREUgdG8gcHJvdmlkZSBRQSB0ZWFtIHdpdGggYSBiZXR0ZXIgdW5kZXJzdGFuZGluZyBvZiBob3cgdG8gY3JlYXRlIGFuZCBtYW5hZ2UgU2VsZW5pdW0gYXV0b21hdGlvbiBzY3JpcHRzLiBEZXZlbG9wZWQgb3ZlciAzMDAgYXV0b21hdGlvbiB0ZXN0IHNjcmlwdHMgdXNpbmcgU2VsZW5pdW0gSURFIGFuZCBYUEFUSCwgYWxsb3dpbmcgUUEgdG8gcnVuIHNjcmlwdHMgZHVyaW5nIGRhaWx5IGltcGxlbWVudGF0aW9ucyB0byBlbnN1cmUgcXVhbGl0eSBvdmVyIGFkZGVkIG9yIG1vZGlmaWVkIGZ1bmN0aW9uYWxpdHkgb2YgdGhlIHByb2plY3QuXCIsXHJcblx0XHRcdFwicG9pbnRzXCI6XHJcblx0XHRcdFtcclxuXHRcdFx0XHRcIkRldmVsb3BlZCBhIEphdmFTY3JpcHQgcGx1Z2luIGZvciBTZWxlbml1bSBJREUgdG8gcHJvdmlkZSBRQSB0ZWFtIHdpdGggYSBiZXR0ZXIgdW5kZXJzdGFuZGluZyBvZiBob3cgdG8gY3JlYXRlIGFuZCBtYW5hZ2UgU2VsZW5pdW0gYXV0b21hdGlvbiBzY3JpcHRzLlwiLFxyXG5cdFx0XHRcdFwiRGV2ZWxvcGVkIG92ZXIgMzAwIGF1dG9tYXRpb24gdGVzdCBzY3JpcHRzIHVzaW5nIFNlbGVuaXVtIElERSBhbmQgWFBBVEgsIGFsbG93aW5nIFFBIHRvIHJ1biBzY3JpcHRzIGR1cmluZyBkYWlseSBpbXBsZW1lbnRhdGlvbnMgdG8gZW5zdXJlIHF1YWxpdHkgb3ZlciBhZGRlZCBvciBtb2RpZmllZCBmdW5jdGlvbmFsaXR5IG9mIHRoZSBwcm9qZWN0LlwiLFxyXG5cdFx0XHRdXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcInBvc2l0aW9uXCI6IFwiUXVhbGl0eSBBc3N1cmFuY2UgVGVzdGVyXCIsXHJcblx0XHRcdFwiY29tcGFueVwiOiBcIkVsZWN0cm9uaWMgQXJ0cyBDYW5hZGFcIixcclxuXHRcdFx0XCJsb2NhdGlvblwiOiBcIkJ1cm5hYnksIEJDLCBDYW5hZGFcIixcclxuXHRcdFx0XCJ0aW1lXCI6IFwiSnVuIDIwMDggLSBTZXAgMjAxMVwiLFxyXG5cdFx0XHRcImRlc2NyaXB0aW9uXCI6IFwiVGVzdGVkIGdhbWluZyBzb2Z0d2FyZSBmb3IgTmludGVuZG8gV2lpLCBYYm94IDM2MCBhbmQgUGxheVN0YXRpb24gMyB0byBlbnN1cmUgdGhlIHF1YWxpdHkgb2YgdGhlIGNvbXBhbnnigJlzIHByb2R1Y3QsIGFsbG93aW5nIHN1Y2Nlc3NmdWwgZmlyc3QtdGltZSBwYXNzZXMgb24gc2V2ZXJhbCBmaXJzdC1wYXJ0eSBjZXJ0aWZpY2F0aW9ucy4gU3BlY2lhbGl6ZWQgaW4gTmludGVuZG8gY29tcGxpYW5jZSBhbmQgY3JlYXRlZCBjb21wbGlhbmNlIHRlc3QgY2FzZXMgZm9yIEVBIFNQT1JUUyBBY3RpdmUgYW5kIEVBIFNQT1JUUyBBY3RpdmUgTW9yZSBXb3Jrb3V0cyB1c2luZyBEZXZUZXN0IHRvIGd1aWRlIGNvbXBsaWFuY2UgdGVzdGVycyBkdXJpbmcgZGV2ZWxvcG1lbnQgcHJvY2Vzcy4gQ29sbGFib3JhdGVkIHdpdGggcHJvamVjdCBtYW5hZ2VycywgdGVhbSBsZWFkcyBhbmQgb3RoZXIgdGVzdGVycyB0byBhbmFseXplIHRoZSBjb3ZlcmFnZSBhbmQgcmlza3Mgb2YgZWFjaCB0ZXN0IHN1aXRlLCBlbnN1cmluZyB0aGF0IHRoZSByZXF1aXJlbWVudHMgb2YgdGhlIHNvZnR3YXJlIHdhcyBtZXQgd2hpbGUgdmFsaWRhdGluZyB0aGUgc3RhYmlsaXR5IG9mIGVhY2ggYnVpbGQgYXMgdGhlIHByb2plY3QgcHJvZ3Jlc3NlZC5cIixcclxuXHRcdFx0XCJwb2ludHNcIjpcclxuXHRcdFx0W1xyXG5cdFx0XHRcdFwiVGVzdGVkIGdhbWluZyBzb2Z0d2FyZSBmb3IgTmludGVuZG8gV2lpLCBYYm94IDM2MCBhbmQgUGxheVN0YXRpb24gMyB0byBlbnN1cmUgdGhlIHF1YWxpdHkgb2YgdGhlIGNvbXBhbnnigJlzIHByb2R1Y3QsIGFsbG93aW5nIHN1Y2Nlc3NmdWwgZmlyc3QtdGltZSBwYXNzZXMgb24gc2V2ZXJhbCBmaXJzdC1wYXJ0eSBjZXJ0aWZpY2F0aW9ucy5cIixcclxuXHRcdFx0XHRcIlNwZWNpYWxpemVkIGluIE5pbnRlbmRvIGNvbXBsaWFuY2UgYW5kIGNyZWF0ZWQgY29tcGxpYW5jZSB0ZXN0IGNhc2VzIGZvciBFQSBTUE9SVFMgQWN0aXZlIGFuZCBFQSBTUE9SVFMgQWN0aXZlIE1vcmUgV29ya291dHMgdXNpbmcgRGV2VGVzdCB0byBndWlkZSBjb21wbGlhbmNlIHRlc3RlcnMgZHVyaW5nIGRldmVsb3BtZW50IHByb2Nlc3MuXCIsXHJcblx0XHRcdFx0XCJDb2xsYWJvcmF0ZWQgd2l0aCBwcm9qZWN0IG1hbmFnZXJzLCB0ZWFtIGxlYWRzIGFuZCBvdGhlciB0ZXN0ZXJzIHRvIGFuYWx5emUgdGhlIGNvdmVyYWdlIGFuZCByaXNrcyBvZiBlYWNoIHRlc3Qgc3VpdGUsIGVuc3VyaW5nIHRoYXQgdGhlIHJlcXVpcmVtZW50cyBvZiB0aGUgc29mdHdhcmUgd2FzIG1ldCB3aGlsZSB2YWxpZGF0aW5nIHRoZSBzdGFiaWxpdHkgb2YgZWFjaCBidWlsZCBhcyB0aGUgcHJvamVjdCBwcm9ncmVzc2VkLlwiLFxyXG5cdFx0XHRdXHJcblx0XHR9LFxyXG5cdF0sXHJcblx0XCJlZHVjYXRpb25cIjpcclxuXHRbXHJcblx0XHR7XHJcblx0XHRcdFwic2Nob29sXCI6IFwiU2ltb24gRnJhc2VyIFVuaXZlcnNpdHlcIixcclxuXHRcdFx0XCJwcm9ncmFtXCI6IFwiTWFqb3IgaW4gQ29tcHV0aW5nIFNjaWVuY2VcIixcclxuXHRcdFx0XCJmYWN1bHR5XCI6IFwiQmFjaGVsb3Igb2YgU2NpZW5jZVwiLFxyXG5cdFx0XHRcInRpbWVcIjogXCJEZWMgMjAxM1wiLFxyXG5cdFx0XHRcImRlc2NyaXB0aW9uXCI6IFwiRm9jdXNlZCBvbiBPYmplY3QtT3JpZW50ZWQgUHJvZ3JhbW1pbmcgYW5kIG90aGVyIHNvZnR3YXJlIGRldmVsb3BtZW50IGNvbmNlcHRzIHN1Y2ggYXMgZGF0YWJhc2UgZGVzaWduLCBuZXR3b3JraW5nIGFuZCBzb2Z0d2FyZSBlbmdpbmVlcmluZy5cIixcclxuXHRcdH1cclxuXHRdLFxyXG5cdFwicHJvamVjdHNcIjpcclxuXHRbXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcIkFydGVtaXMvU2hvdGd1blwiLFxyXG5cdFx0XHRcImxvY2F0aW9uXCI6IFwiREhYIFN0dWRpb3NcIixcclxuXHRcdFx0XCJyb2xlc1wiOiBbXCJTY3J1bSBNYXN0ZXJcIiwgXCJTb2Z0d2FyZSBEZXZlbG9wZXJcIiwgXCJVWCBEZXNpZ25lclwiXSxcclxuXHRcdFx0XCJzdGFja1wiOiBbXCJEamFuZ28sIEFuZ3VsYXJKUywgSFRNTCwgU0NTUywgTXlTUUxcIl0sXHJcblx0XHRcdFwiZGVzY3JpcHRpb25cIjogXCJEZXNpZ25lZCBhbmQgZGV2ZWxvcGVkIHRhc2sgbWFuYWdlbWVudCBzeXN0ZW0gYW5kIHNob3cgYnJlYWtkb3duIHN5c3RlbSBhbG9uZ3NpZGUgZXh0ZXJuYWwgc3lzdGVtLCBTaG90Z3VuLCB0byBpbnRlZ3JhdGUgU2hvdGd1biBpbnRvIHN0dWRpbyBwaXBlbGluZSB3aGlsZSBtYWludGFpbmluZyBsZWdhY3kgc3lzdGVtIGZlYXR1cmVzLiBEZXZlbG9wZWQgYW4gQVBJIHRvIHByb3ZpZGUgY29tbXVuaWNhdGlvbiBiZXR3ZWVuIFNob3RndW4gYW5kIGxlZ2FjeSBzeXN0ZW0sIGFsbG93aW5nIGNvcnBvcmF0ZSBkZXBhcnRtZW50cyB0byBjb250aW51ZSB1c2luZyBsZWdhY3kgc3lzdGVtIHRvIGVudGVyIHVzZXIgaW5mb3JtYXRpb24gd2hpbGUgZW5zdXJlIGluZm9ybWF0aW9uIGlzIHBhc3NlZCB0byBTaG90Z3VuLiBMZWQgYSB0ZWFtIG9mIGZpdmUgZGV2ZWxvcGVycyBpbiBhbiBBZ2lsZSBzY3J1bSBlbnZpcm9ubWVudCwgYWxsb3dpbmcgdGFza3MgdG8gYmUgY29tcGxldGVkIHdpdGhpbiBkZWFkbGluZXMgd2hpbGUgcmVwb3J0aW5nIHRvIEhlYWQgb2YgU29mdHdhcmUgRGVwYXJ0bWVudCBvbiBzY2hlZHVsZSBhZGp1c3RtZW50cy5cIixcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcIk11c2UgQ2xpZW50IFJldmlld1wiLFxyXG5cdFx0XHRcImxvY2F0aW9uXCI6IFwiREhYIFN0dWRpb3NcIixcclxuXHRcdFx0XCJyb2xlc1wiOiBbXCJTb2Z0d2FyZSBEZXZlbG9wZXJcIl0sXHJcblx0XHRcdFwic3RhY2tcIjogW1wiRGphbmdvLCBBbmd1bGFySlMsIEhUTUwsIFNDU1MsIE15U1FMXCJdLFxyXG5cdFx0XHRcImRlc2NyaXB0aW9uXCI6IFwiRGV2ZWxvcGVkIGFuIGV4dGVybmFsIGNsaWVudCByZXZpZXcgc3lzdGVtIGNvbm5lY3RlZCB0byBzdHVkaW8gdGFzayBtYW5hZ2VtZW50IHN5c3RlbSB0aHJvdWdoIGFuIEFQSSwgYWxsb3dpbmcgY29vcmRpbmF0b3JzIHRvIHNlbmQgY29tcGxldGVkIGFzc2V0cyBhbmQgc2hvdHMgZm9yIGNsaWVudCByZXZpZXcuIFdvcmtlZCBpbiBhIHRlYW0gb2YgZml2ZSBkZXZlbG9wZXJzIGFuZCBhIGRlc2lnbmVyIGluIGEgc3ByaW50IGVudmlyb25tZW50IHRvIHBsYW4gYW5kIGRlc2lnbiB0aGUgZGV2ZWxvcG1lbnQgYXJjaGl0ZWN0dXJlIGZvciB0aGUgYXBwbGljYXRpb24gZW5zdXJlIGFsbCByZXF1aXJlbWVudHMgd2VyZSBjb25zaWRlcmVkIGluIHRoZSBkZXNpZ24uXCIsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJOZXJkIENvcnBzIFByb2R1Y3Rpb24gU2l0ZXNcIixcclxuXHRcdFx0XCJsb2NhdGlvblwiOiBcIkRIWCBTdHVkaW9zXCIsXHJcblx0XHRcdFwicm9sZXNcIjogW1wiU29mdHdhcmUgRGV2ZWxvcGVyXCJdLFxyXG5cdFx0XHRcInN0YWNrXCI6IFtcIkxhcmF2ZWxcIiwgXCJqUXVlcnlcIiwgXCJIVE1MXCIsIFwiU0NTU1wiLCBcIk15U1FMXCJdLFxyXG5cdFx0XHRcImRlc2NyaXB0aW9uXCI6IFwiRGVzaWduIGFuZCAgZGV2ZWxvcGVkIGN1c3RvbSBDb250ZW50IE1hbmFnZW1lbnQgU3lzdGVtIGZvciBzdHVkaW8gcHJvZHVjdGlvbiBzaXRlcywgcHJvdmlkaW5nIGEgd2F5IHRvIHBlcmZvcm0gZWZmaWNpZW50IHVwZGF0ZXMgdG8gd2Vic2l0ZSBjb250ZW50cyBpbiB0aGUgZnV0dXJlLiBEZXZlbG9wZWQgbXVsdGlwbGUgcHJvZHVjdGlvbiB3ZWJzaXRlcyBzdWNoIGFzIGthdGVhbmRtaW1taW0uY2Egd2l0aCBtdWx0aS1icm93c2VyIHN1cHBvcnQgYW5kIHJlc3BvbnNpdmUgZGVzaWduIHRvIHByb3ZpZGUga2lkcyB3aXRoIGEgZnVuIGFuZCBpbnRlcmFjdGl2ZSBsb2NhdGlvbiB0byBsZWFybiBtb3JlIGFib3V0IHRoZSBzaG93IGFuZCByZWNlaXZlIHVwZGF0ZXMuXCIsXHJcblx0XHR9XHJcblx0XVxyXG59XHJcbiJdfQ==
