(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var _ = require('lodash');
var angular = require('angular');
var data = require('./../public/resources/user-data/data.json');


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


},{"./../public/resources/user-data/data.json":2,"angular":undefined,"lodash":undefined}],2:[function(require,module,exports){
module.exports={
	"profileImage": "./resources/user-data/profile-picture.png",
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
			"description": "",
		}
	],
	"projects":
	[
		{
			"name": "Artemis/Shotgun",
			"location": "DHX Studios",
			"roles": ["Scrum Master", "Software Developer", "UX Designer"],
			"stack": ["Django, AngularJS, HTML, SCSS, MySQL"],
			"description": "Designed and developed task management system and show breakdown system alongside external system, Shotgun, to integrate Shotgun into studio pipeline while maintaining legacy system features. Developed an API to provide communication between Shotgun and legacy system, allowing corporate departments to continue using legacy system to enter user information while ensure information is passed to Shotgun. Led a team of five developers in an Agile scrum environment, allowing tasks to be completed within deadlines while reporting to Head of Software Department on schedule adjustments. Developed unit tests and executed multiple refactoring processes and quality assurance tests to optimize application performance while ensuring stability of each rollout.",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9hcHAuanMiLCJwdWJsaWMvcmVzb3VyY2VzL3VzZXItZGF0YS9kYXRhLmpzb24iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIF8gPSByZXF1aXJlKCdsb2Rhc2gnKTtcclxudmFyIGFuZ3VsYXIgPSByZXF1aXJlKCdhbmd1bGFyJyk7XHJcbnZhciBkYXRhID0gcmVxdWlyZSgnLi8uLi9wdWJsaWMvcmVzb3VyY2VzL3VzZXItZGF0YS9kYXRhLmpzb24nKTtcclxuXHJcblxyXG52YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ1Jlc3VtZVRlbXBsYXRlQXBwJywgW10pO1xyXG5cclxuTGF5b3V0Q29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnXTtcclxuZnVuY3Rpb24gTGF5b3V0Q29udHJvbGxlcigkc2NvcGUpIHtcclxuXHQkc2NvcGUuZGF0YSA9IGRhdGE7XHJcblx0JHNjb3BlLmdldFByb2ZpbGVFbGVtZW50c0Rpc3BsYXkgPSBnZXRQcm9maWxlRWxlbWVudHNEaXNwbGF5O1xyXG5cdCRzY29wZS5nZXRQcm9qZWN0Um9sZXNEaXNwbGF5ID0gZ2V0UHJvamVjdFJvbGVzRGlzcGxheTtcclxuXHQkc2NvcGUuZ2V0UHJvamVjdFN0YWNrRGlzcGxheSA9IGdldFByb2plY3RTdGFja0Rpc3BsYXk7XHJcblxyXG5cclxuXHRmdW5jdGlvbiBnZXRQcm9maWxlRWxlbWVudHNEaXNwbGF5KHByb2ZpbGUpIHtcclxuXHRcdHJldHVybiBfLmpvaW4ocHJvZmlsZS5pdGVtcywgJywgJyk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBnZXRQcm9qZWN0Um9sZXNEaXNwbGF5KHByb2plY3QpIHtcclxuXHRcdHJldHVybiBfLmpvaW4ocHJvamVjdC5yb2xlcywgJywgJyk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBnZXRQcm9qZWN0U3RhY2tEaXNwbGF5KHByb2plY3QpIHtcclxuXHRcdHJldHVybiBfLmpvaW4ocHJvamVjdC5zdGFjaywgJywgJyk7XHJcblx0fVxyXG59XHJcblxyXG5hcHAuY29udHJvbGxlcignTGF5b3V0Q29udHJvbGxlcicsIExheW91dENvbnRyb2xsZXIpO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRhbmd1bGFyLmJvb3RzdHJhcChkb2N1bWVudCwgWydSZXN1bWVUZW1wbGF0ZUFwcCddKTtcclxufSk7XHJcblxyXG4iLCJtb2R1bGUuZXhwb3J0cz17XHJcblx0XCJwcm9maWxlSW1hZ2VcIjogXCIuL3Jlc291cmNlcy91c2VyLWRhdGEvcHJvZmlsZS1waWN0dXJlLnBuZ1wiLFxyXG5cdFwiZmlyc3ROYW1lXCI6IFwiR2FyeSBLLlwiLFxyXG5cdFwibGFzdE5hbWVcIjogXCJZYXVcIixcclxuXHRcIm9jY3VwYXRpb25cIjogXCJEZXZlbG9wZXIuIERlc2lnbmVyLiBRdWFsaXR5IEFzc3VyYW5jZS5cIixcclxuXHRcImNvbnRhY3RcIjoge1xyXG5cdFx0XCJwaG9uZVwiOiBcIisxICg3NzgpIDg4MiAwNTI0XCIsXHJcblx0XHRcImVtYWlsXCI6IFwiZ3lhdTg4QGdtYWlsLmNvbVwiLFxyXG5cdFx0XCJzb2NpYWxzXCI6XHJcblx0XHRbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcIm5hbWVcIjogXCJHaXRIdWJcIixcclxuXHRcdFx0XHRcImxpbmtcIjogXCJodHRwczovL2dpdGh1Yi5jb20vZ2FyeXlhdVwiLFxyXG5cdFx0XHRcdFwibGlua1RleHRcIjogXCJnaXRodWIuY29tL2dhcnl5YXVcIixcclxuXHRcdFx0XHRcImljb25DbGFzc2VzXCI6IFwiem1kaSB6bWRpLWdpdGh1Yi1hbHRcIixcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwibmFtZVwiOiBcIkxpbmtlZEluXCIsXHJcblx0XHRcdFx0XCJsaW5rXCI6IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2dhcnl5YXVcIixcclxuXHRcdFx0XHRcImxpbmtUZXh0XCI6IFwibGlua2VkaW4uY29tL2luL2dhcnl5YXVcIixcclxuXHRcdFx0XHRcImljb25DbGFzc2VzXCI6IFwiem1kaSB6bWRpLWxpbmtlZGluXCIsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcIm5hbWVcIjogXCJGYWNlYm9va1wiLFxyXG5cdFx0XHRcdFwibGlua1wiOiBcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9na3kuYXNwZXJhXCIsXHJcblx0XHRcdFx0XCJsaW5rVGV4dFwiOiBcImZhY2Vib29rLmNvbS9na3kuYXNwZXJhXCIsXHJcblx0XHRcdFx0XCJpY29uQ2xhc3Nlc1wiOiBcInptZGkgem1kaS1mYWNlYm9va1wiLFxyXG5cdFx0XHR9XHJcblx0XHRdXHJcblx0fSxcclxuXHRcIm92ZXJ2aWV3XCI6IFwiRnJvbnQtZW5kIGRldmVsb3BlciB3aXRoIGEgc3Ryb25nIHBhc3Npb24gZm9yIGRldmVsb3BpbmcgaW5zcGlyYXRpb25hbCB3ZWIgYXBwbGljYXRpb25zLiBFeHBlcmllbmNlIGluIGRpZmZlcmVudCB0eXBlcyBvZiBsYW5ndWFnZXMgYW5kIGZyYW1ld29ya3Mgd2l0aCBxdWljayBsZWFybmluZyBjYXBhYmlsaXRpZXMgdG8gYWRhcHQgaW4gZGlmZmVyZW50IHByb2plY3QgcmVxdWlyZW1lbnRzLiBGbGV4aWJsZSBpbiBkaWZmZXJlbnQgd29ya2luZyBlbnZpcm9ubWVudHMsIGhhdmluZyB3b3JrZWQgZWZmZWN0aXZlbHkgYm90aCBpbmRlcGVuZGVudGx5IGFuZCBhcyBhIHRlYW0gaW4gYW4gYWdpbGUgZGV2ZWxvcG1lbnQgcHJvY2Vzcy4gVXNlcyBza2lsbHNldHMgaW4gdXNlciBleHBlcmllbmNlIGRlc2lnbiwgcXVhbGl0eSBhc3N1cmFuY2UsIGFuZCBzb2Z0d2FyZSBkZXZlbG9wbWVudCBvbnRvIGVhY2ggcHJvamVjdCB3aXRoIHRoZSBvYmplY3RpdmUgb2YgZGVsaXZlcmluZyBoaWdoIHF1YWxpdHkgcHJvZHVjdHMuXCIsXHJcblx0XCJ0ZWNobmljYWxQcm9maWxlXCI6XHJcblx0W1xyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJMYW5ndWFnZXNcIixcclxuXHRcdFx0XCJpdGVtc1wiOlxyXG5cdFx0XHRbXHJcblx0XHRcdFx0XCJQeXRob25cIixcclxuXHRcdFx0XHRcIlBIUFwiLFxyXG5cdFx0XHRcdFwiSmF2YVNjcmlwdFwiLFxyXG5cdFx0XHRcdFwiSlNPTlwiLFxyXG5cdFx0XHRcdFwiSFRNTDVcIixcclxuXHRcdFx0XHRcIkNTUzNcIixcclxuXHRcdFx0XHRcIlNDU1NcIixcclxuXHRcdFx0XHRcIlhNTFwiLFxyXG5cdFx0XHRcdFwiU1FMXCIsXHJcblx0XHRcdF0sXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJGcmFtZXdvcmtzXCIsXHJcblx0XHRcdFwiaXRlbXNcIjpcclxuXHRcdFx0W1xyXG5cdFx0XHRcdFwiRGphbmdvXCIsXHJcblx0XHRcdFx0XCJMYXJhdmVsXCIsXHJcblx0XHRcdFx0XCJBbmd1bGFySlNcIixcclxuXHRcdFx0XHRcIlJlYWN0XCIsXHJcblx0XHRcdFx0XCJLbm9ja291dFwiLFxyXG5cdFx0XHRcdFwialF1ZXJ5XCIsXHJcblx0XHRcdFx0XCJCb290c3RyYXBcIixcclxuXHRcdFx0XHRcIk1VSSBDU1NcIixcclxuXHRcdFx0XHRcIkd1bHBcIixcclxuXHRcdFx0XHRcIk5vZGVKU1wiLFxyXG5cdFx0XHRcdFwiVURLXCIsXHJcblx0XHRcdF0sXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJWZXJzaW9uIENvbnRyb2xcIixcclxuXHRcdFx0XCJpdGVtc1wiOlxyXG5cdFx0XHRbXHJcblx0XHRcdFx0XCJHaXQgKEdpdExhYiwgR2l0SHViKVwiLFxyXG5cdFx0XHRcdFwiU3VidmVyc2lvbiAoVG9ydG9pc2VTVk4pXCIsXHJcblx0XHRcdF0sXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJQcm9qZWN0IFRvb2xzXCIsXHJcblx0XHRcdFwiaXRlbXNcIjpcclxuXHRcdFx0W1xyXG5cdFx0XHRcdFwiQ29uZmx1ZW5jZVwiLFxyXG5cdFx0XHRcdFwiSklSQVwiLFxyXG5cdFx0XHRcdFwiR2l0TGFiXCIsXHJcblx0XHRcdFx0XCJNYW50aXNcIixcclxuXHRcdFx0XHRcIlJldmlldyBCb2FyZFwiLFxyXG5cdFx0XHRdLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiRGVzaWduIFRvb2xzXCIsXHJcblx0XHRcdFwiaXRlbXNcIjpcclxuXHRcdFx0W1xyXG5cdFx0XHRcdFwiQWRvYmUgUGhvdG9zaG9wXCIsXHJcblx0XHRcdFx0XCJJbGx1c3RyYXRvclwiLFxyXG5cdFx0XHRcdFwiRHJlYW13ZWF2ZXJcIixcclxuXHRcdFx0XHRcIlByZW1pZXJlIFByb1wiLFxyXG5cdFx0XHRcdFwibXlCYWxzYW1pcVwiLFxyXG5cdFx0XHRdLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiTWV0aG9kb2xvZ2llc1wiLFxyXG5cdFx0XHRcIml0ZW1zXCI6XHJcblx0XHRcdFtcclxuXHRcdFx0XHRcIk1WQ1wiLFxyXG5cdFx0XHRcdFwiQWdpbGVcIixcclxuXHRcdFx0XHRcIldhdGVyZmFsbFwiLFxyXG5cdFx0XHRcdFwiQUpBWFwiLFxyXG5cdFx0XHRcdFwiU2NydW1cIixcclxuXHRcdFx0XHRcIlVuaXQgVGVzdFwiLFxyXG5cdFx0XHRdLFxyXG5cdFx0fSxcclxuXHRdLFxyXG5cdFwid29ya0V4cGVyaWVuY2VcIjpcclxuXHRbXHJcblx0XHR7XHJcblx0XHRcdFwicG9zaXRpb25cIjogXCJKdW5pb3IgU29mdHdhcmUgRGV2ZWxvcGVyXCIsXHJcblx0XHRcdFwiY29tcGFueVwiOiBcIkRIWCBTdHVkaW9zXCIsXHJcblx0XHRcdFwibG9jYXRpb25cIjogXCJWYW5jb3V2ZXIsIEJDLCBDYW5hZGFcIixcclxuXHRcdFx0XCJ0aW1lXCI6IFwiTWFyY2ggMjAxNCAtIEN1cnJlbnRcIixcclxuXHRcdFx0XCJkZXNjcmlwdGlvblwiOiBcIkRldmVsb3AgbmV3IHdlYiBhcHBsaWNhdGlvbnMgZnJvbSByZXF1aXJlbWVudHMgZ2F0aGVyaW5nLCBzcHJpbnQgcGxhbm5pbmcsIGFnaWxlIGRldmVsb3BtZW50LCByb2xsb3V0IHRvIHN5c3RlbSBtYWludGVuYW5jZSB0byBwcm92aWRlIHRoZSBzdHVkaW8gd2l0aCB1bmlxdWVseSBidWlsdCBzeXN0ZW1zIHRvIHN1aXQgdGhlIG5lZWRzIG9mIG1hcmtldGluZywgaW50ZXJhY3RpdmUgYW5kIHBpcGVsaW5lLiBDb2xsYWJvcmF0ZSB3aXRoIGEgdGVhbSBvZiA0IC0gNyBkZXZlbG9wZXJzIHRvIGRlc2lnbiBhbmQgYXJjaGl0ZWN0IHRoZSBzdHJ1Y3R1cmUgb2YgdGhlIHByb2plY3RzIHRvIGRldGVybWluZSB0aGUgb3B0aW1hbCBkZXZlbG9wbWVudCBhcHByb2FjaCBhbmQgYmVzdCB0ZWNobm9sb2dpZXMgdG8gdXNlLiBSZXNlYXJjaCBvbiBleHRlcm5hbCBzdHVkaW8gbWFuYWdlbWVudCBzeXN0ZW0sIFNob3RndW4sIHRvIGFzc2VzcyB0aGUgY29tcGF0aWJpbGl0eSBvZiBTaG90Z3VuIHdpdGggZGFpbHkgd29ya2Zsb3cgb2YgdGhlIHN0dWRpby4gRGVzaWduIGN1c3RvbSBzeXN0ZW0sIEFydGVtaXMsIHRvIGJlIHVzZWQgb24gdG9wIG9mIFNob3RndW4gaW4gb3JkZXIgdG8gZW5oYW5jZSB0aGUgZmVhdHVyZXMgcHJvdmlkZWQgYW5kIHRhaWxvciBpdCB0byB0aGUgbmVlZHMgb2YgdGhlIHVzZXJzLiBEZXZlbG9wIGFuZCBpbXBsZW1lbnQgZGlmZmVyZW50IEFQSXMgdG8gdXBncmFkZSBsZWdhY3kgc3lzdGVtcyB0byB1c2UgYSB1bmlmaWVkIGRhdGFiYXNlIHdoaWxlIHBsYW5uaW5nIGZvciBmdXR1cmUgc3lzdGVtcyB0byBwcm92aWRlIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IHdpdGggdGhlIHBhc3Qgc3lzdGVtcy5cIixcclxuXHRcdFx0XCJwb2ludHNcIjpcclxuXHRcdFx0W1xyXG5cdFx0XHRcdFwiRGV2ZWxvcCBuZXcgd2ViIGFwcGxpY2F0aW9ucyBmcm9tIHJlcXVpcmVtZW50cyBnYXRoZXJpbmcsIHNwcmludCBwbGFubmluZywgYWdpbGUgZGV2ZWxvcG1lbnQsIHJvbGxvdXQgdG8gc3lzdGVtIG1haW50ZW5hbmNlIHRvIHByb3ZpZGUgdGhlIHN0dWRpbyB3aXRoIHVuaXF1ZWx5IGJ1aWx0IHN5c3RlbXMgdG8gc3VpdCB0aGUgbmVlZHMgb2YgbWFya2V0aW5nLCBpbnRlcmFjdGl2ZSBhbmQgcGlwZWxpbmUuXCIsXHJcblx0XHRcdFx0XCJDb2xsYWJvcmF0ZSB3aXRoIGEgdGVhbSBvZiA0IC0gNyBkZXZlbG9wZXJzIHRvIGRlc2lnbiBhbmQgYXJjaGl0ZWN0IHRoZSBzdHJ1Y3R1cmUgb2YgdGhlIHByb2plY3RzIHRvIGRldGVybWluZSB0aGUgb3B0aW1hbCBkZXZlbG9wbWVudCBhcHByb2FjaCBhbmQgYmVzdCB0ZWNobm9sb2dpZXMgdG8gdXNlLlwiLFxyXG5cdFx0XHRcdFwiUmVzZWFyY2ggb24gZXh0ZXJuYWwgc3R1ZGlvIG1hbmFnZW1lbnQgc3lzdGVtLCBTaG90Z3VuLCB0byBhc3Nlc3MgdGhlIGNvbXBhdGliaWxpdHkgb2YgU2hvdGd1biB3aXRoIGRhaWx5IHdvcmtmbG93IG9mIHRoZSBzdHVkaW8uIERlc2lnbiBjdXN0b20gc3lzdGVtLCBBcnRlbWlzLCB0byBiZSB1c2VkIG9uIHRvcCBvZiBTaG90Z3VuIGluIG9yZGVyIHRvIGVuaGFuY2UgdGhlIGZlYXR1cmVzIHByb3ZpZGVkIGFuZCB0YWlsb3IgaXQgdG8gdGhlIG5lZWRzIG9mIHRoZSB1c2Vycy5cIixcclxuXHRcdFx0XHRcIkRldmVsb3AgYW5kIGltcGxlbWVudCBkaWZmZXJlbnQgQVBJcyB0byB1cGdyYWRlIGxlZ2FjeSBzeXN0ZW1zIHRvIHVzZSBhIHVuaWZpZWQgZGF0YWJhc2Ugd2hpbGUgcGxhbm5pbmcgZm9yIGZ1dHVyZSBzeXN0ZW1zIHRvIHByb3ZpZGUgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgd2l0aCB0aGUgcGFzdCBzeXN0ZW1zLlwiLFxyXG5cdFx0XHRdXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcInBvc2l0aW9uXCI6IFwiSnVuaW9yIEFwcGxpY2F0aW9uIERldmVsb3BlciBDby1vcFwiLFxyXG5cdFx0XHRcImNvbXBhbnlcIjogXCJaRSBQb3dlckdyb3VwIEluYy5cIixcclxuXHRcdFx0XCJsb2NhdGlvblwiOiBcIlJpY2htb25kLCBCQywgQ2FuYWRhXCIsXHJcblx0XHRcdFwidGltZVwiOiBcIkphbiAyMDEzIC0gTWF5IDIwMTNcIixcclxuXHRcdFx0XCJkZXNjcmlwdGlvblwiOiBcIkRldmVsb3BlZCBhIEphdmFTY3JpcHQgcGx1Z2luIGZvciBTZWxlbml1bSBJREUgdG8gcHJvdmlkZSBRQSB0ZWFtIHdpdGggYSBiZXR0ZXIgdW5kZXJzdGFuZGluZyBvZiBob3cgdG8gY3JlYXRlIGFuZCBtYW5hZ2UgU2VsZW5pdW0gYXV0b21hdGlvbiBzY3JpcHRzLiBEZXZlbG9wZWQgb3ZlciAzMDAgYXV0b21hdGlvbiB0ZXN0IHNjcmlwdHMgdXNpbmcgU2VsZW5pdW0gSURFIGFuZCBYUEFUSCwgYWxsb3dpbmcgUUEgdG8gcnVuIHNjcmlwdHMgZHVyaW5nIGRhaWx5IGltcGxlbWVudGF0aW9ucyB0byBlbnN1cmUgcXVhbGl0eSBvdmVyIGFkZGVkIG9yIG1vZGlmaWVkIGZ1bmN0aW9uYWxpdHkgb2YgdGhlIHByb2plY3QuXCIsXHJcblx0XHRcdFwicG9pbnRzXCI6XHJcblx0XHRcdFtcclxuXHRcdFx0XHRcIkRldmVsb3BlZCBhIEphdmFTY3JpcHQgcGx1Z2luIGZvciBTZWxlbml1bSBJREUgdG8gcHJvdmlkZSBRQSB0ZWFtIHdpdGggYSBiZXR0ZXIgdW5kZXJzdGFuZGluZyBvZiBob3cgdG8gY3JlYXRlIGFuZCBtYW5hZ2UgU2VsZW5pdW0gYXV0b21hdGlvbiBzY3JpcHRzLlwiLFxyXG5cdFx0XHRcdFwiRGV2ZWxvcGVkIG92ZXIgMzAwIGF1dG9tYXRpb24gdGVzdCBzY3JpcHRzIHVzaW5nIFNlbGVuaXVtIElERSBhbmQgWFBBVEgsIGFsbG93aW5nIFFBIHRvIHJ1biBzY3JpcHRzIGR1cmluZyBkYWlseSBpbXBsZW1lbnRhdGlvbnMgdG8gZW5zdXJlIHF1YWxpdHkgb3ZlciBhZGRlZCBvciBtb2RpZmllZCBmdW5jdGlvbmFsaXR5IG9mIHRoZSBwcm9qZWN0LlwiLFxyXG5cdFx0XHRdXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcInBvc2l0aW9uXCI6IFwiUXVhbGl0eSBBc3N1cmFuY2UgVGVzdGVyXCIsXHJcblx0XHRcdFwiY29tcGFueVwiOiBcIkVsZWN0cm9uaWMgQXJ0cyBDYW5hZGFcIixcclxuXHRcdFx0XCJsb2NhdGlvblwiOiBcIkJ1cm5hYnksIEJDLCBDYW5hZGFcIixcclxuXHRcdFx0XCJ0aW1lXCI6IFwiSnVuIDIwMDggLSBTZXAgMjAxMVwiLFxyXG5cdFx0XHRcImRlc2NyaXB0aW9uXCI6IFwiVGVzdGVkIGdhbWluZyBzb2Z0d2FyZSBmb3IgTmludGVuZG8gV2lpLCBYYm94IDM2MCBhbmQgUGxheVN0YXRpb24gMyB0byBlbnN1cmUgdGhlIHF1YWxpdHkgb2YgdGhlIGNvbXBhbnnigJlzIHByb2R1Y3QsIGFsbG93aW5nIHN1Y2Nlc3NmdWwgZmlyc3QtdGltZSBwYXNzZXMgb24gc2V2ZXJhbCBmaXJzdC1wYXJ0eSBjZXJ0aWZpY2F0aW9ucy4gU3BlY2lhbGl6ZWQgaW4gTmludGVuZG8gY29tcGxpYW5jZSBhbmQgY3JlYXRlZCBjb21wbGlhbmNlIHRlc3QgY2FzZXMgZm9yIEVBIFNQT1JUUyBBY3RpdmUgYW5kIEVBIFNQT1JUUyBBY3RpdmUgTW9yZSBXb3Jrb3V0cyB1c2luZyBEZXZUZXN0IHRvIGd1aWRlIGNvbXBsaWFuY2UgdGVzdGVycyBkdXJpbmcgZGV2ZWxvcG1lbnQgcHJvY2Vzcy4gQ29sbGFib3JhdGVkIHdpdGggcHJvamVjdCBtYW5hZ2VycywgdGVhbSBsZWFkcyBhbmQgb3RoZXIgdGVzdGVycyB0byBhbmFseXplIHRoZSBjb3ZlcmFnZSBhbmQgcmlza3Mgb2YgZWFjaCB0ZXN0IHN1aXRlLCBlbnN1cmluZyB0aGF0IHRoZSByZXF1aXJlbWVudHMgb2YgdGhlIHNvZnR3YXJlIHdhcyBtZXQgd2hpbGUgdmFsaWRhdGluZyB0aGUgc3RhYmlsaXR5IG9mIGVhY2ggYnVpbGQgYXMgdGhlIHByb2plY3QgcHJvZ3Jlc3NlZC5cIixcclxuXHRcdFx0XCJwb2ludHNcIjpcclxuXHRcdFx0W1xyXG5cdFx0XHRcdFwiVGVzdGVkIGdhbWluZyBzb2Z0d2FyZSBmb3IgTmludGVuZG8gV2lpLCBYYm94IDM2MCBhbmQgUGxheVN0YXRpb24gMyB0byBlbnN1cmUgdGhlIHF1YWxpdHkgb2YgdGhlIGNvbXBhbnnigJlzIHByb2R1Y3QsIGFsbG93aW5nIHN1Y2Nlc3NmdWwgZmlyc3QtdGltZSBwYXNzZXMgb24gc2V2ZXJhbCBmaXJzdC1wYXJ0eSBjZXJ0aWZpY2F0aW9ucy5cIixcclxuXHRcdFx0XHRcIlNwZWNpYWxpemVkIGluIE5pbnRlbmRvIGNvbXBsaWFuY2UgYW5kIGNyZWF0ZWQgY29tcGxpYW5jZSB0ZXN0IGNhc2VzIGZvciBFQSBTUE9SVFMgQWN0aXZlIGFuZCBFQSBTUE9SVFMgQWN0aXZlIE1vcmUgV29ya291dHMgdXNpbmcgRGV2VGVzdCB0byBndWlkZSBjb21wbGlhbmNlIHRlc3RlcnMgZHVyaW5nIGRldmVsb3BtZW50IHByb2Nlc3MuXCIsXHJcblx0XHRcdFx0XCJDb2xsYWJvcmF0ZWQgd2l0aCBwcm9qZWN0IG1hbmFnZXJzLCB0ZWFtIGxlYWRzIGFuZCBvdGhlciB0ZXN0ZXJzIHRvIGFuYWx5emUgdGhlIGNvdmVyYWdlIGFuZCByaXNrcyBvZiBlYWNoIHRlc3Qgc3VpdGUsIGVuc3VyaW5nIHRoYXQgdGhlIHJlcXVpcmVtZW50cyBvZiB0aGUgc29mdHdhcmUgd2FzIG1ldCB3aGlsZSB2YWxpZGF0aW5nIHRoZSBzdGFiaWxpdHkgb2YgZWFjaCBidWlsZCBhcyB0aGUgcHJvamVjdCBwcm9ncmVzc2VkLlwiLFxyXG5cdFx0XHRdXHJcblx0XHR9LFxyXG5cdF0sXHJcblx0XCJlZHVjYXRpb25cIjpcclxuXHRbXHJcblx0XHR7XHJcblx0XHRcdFwic2Nob29sXCI6IFwiU2ltb24gRnJhc2VyIFVuaXZlcnNpdHlcIixcclxuXHRcdFx0XCJwcm9ncmFtXCI6IFwiTWFqb3IgaW4gQ29tcHV0aW5nIFNjaWVuY2VcIixcclxuXHRcdFx0XCJmYWN1bHR5XCI6IFwiQmFjaGVsb3Igb2YgU2NpZW5jZVwiLFxyXG5cdFx0XHRcInRpbWVcIjogXCJEZWMgMjAxM1wiLFxyXG5cdFx0XHRcImRlc2NyaXB0aW9uXCI6IFwiXCIsXHJcblx0XHR9XHJcblx0XSxcclxuXHRcInByb2plY3RzXCI6XHJcblx0W1xyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJBcnRlbWlzL1Nob3RndW5cIixcclxuXHRcdFx0XCJsb2NhdGlvblwiOiBcIkRIWCBTdHVkaW9zXCIsXHJcblx0XHRcdFwicm9sZXNcIjogW1wiU2NydW0gTWFzdGVyXCIsIFwiU29mdHdhcmUgRGV2ZWxvcGVyXCIsIFwiVVggRGVzaWduZXJcIl0sXHJcblx0XHRcdFwic3RhY2tcIjogW1wiRGphbmdvLCBBbmd1bGFySlMsIEhUTUwsIFNDU1MsIE15U1FMXCJdLFxyXG5cdFx0XHRcImRlc2NyaXB0aW9uXCI6IFwiRGVzaWduZWQgYW5kIGRldmVsb3BlZCB0YXNrIG1hbmFnZW1lbnQgc3lzdGVtIGFuZCBzaG93IGJyZWFrZG93biBzeXN0ZW0gYWxvbmdzaWRlIGV4dGVybmFsIHN5c3RlbSwgU2hvdGd1biwgdG8gaW50ZWdyYXRlIFNob3RndW4gaW50byBzdHVkaW8gcGlwZWxpbmUgd2hpbGUgbWFpbnRhaW5pbmcgbGVnYWN5IHN5c3RlbSBmZWF0dXJlcy4gRGV2ZWxvcGVkIGFuIEFQSSB0byBwcm92aWRlIGNvbW11bmljYXRpb24gYmV0d2VlbiBTaG90Z3VuIGFuZCBsZWdhY3kgc3lzdGVtLCBhbGxvd2luZyBjb3Jwb3JhdGUgZGVwYXJ0bWVudHMgdG8gY29udGludWUgdXNpbmcgbGVnYWN5IHN5c3RlbSB0byBlbnRlciB1c2VyIGluZm9ybWF0aW9uIHdoaWxlIGVuc3VyZSBpbmZvcm1hdGlvbiBpcyBwYXNzZWQgdG8gU2hvdGd1bi4gTGVkIGEgdGVhbSBvZiBmaXZlIGRldmVsb3BlcnMgaW4gYW4gQWdpbGUgc2NydW0gZW52aXJvbm1lbnQsIGFsbG93aW5nIHRhc2tzIHRvIGJlIGNvbXBsZXRlZCB3aXRoaW4gZGVhZGxpbmVzIHdoaWxlIHJlcG9ydGluZyB0byBIZWFkIG9mIFNvZnR3YXJlIERlcGFydG1lbnQgb24gc2NoZWR1bGUgYWRqdXN0bWVudHMuIERldmVsb3BlZCB1bml0IHRlc3RzIGFuZCBleGVjdXRlZCBtdWx0aXBsZSByZWZhY3RvcmluZyBwcm9jZXNzZXMgYW5kIHF1YWxpdHkgYXNzdXJhbmNlIHRlc3RzIHRvIG9wdGltaXplIGFwcGxpY2F0aW9uIHBlcmZvcm1hbmNlIHdoaWxlIGVuc3VyaW5nIHN0YWJpbGl0eSBvZiBlYWNoIHJvbGxvdXQuXCIsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJNdXNlIENsaWVudCBSZXZpZXdcIixcclxuXHRcdFx0XCJsb2NhdGlvblwiOiBcIkRIWCBTdHVkaW9zXCIsXHJcblx0XHRcdFwicm9sZXNcIjogW1wiU29mdHdhcmUgRGV2ZWxvcGVyXCJdLFxyXG5cdFx0XHRcInN0YWNrXCI6IFtcIkRqYW5nbywgQW5ndWxhckpTLCBIVE1MLCBTQ1NTLCBNeVNRTFwiXSxcclxuXHRcdFx0XCJkZXNjcmlwdGlvblwiOiBcIkRldmVsb3BlZCBhbiBleHRlcm5hbCBjbGllbnQgcmV2aWV3IHN5c3RlbSBjb25uZWN0ZWQgdG8gc3R1ZGlvIHRhc2sgbWFuYWdlbWVudCBzeXN0ZW0gdGhyb3VnaCBhbiBBUEksIGFsbG93aW5nIGNvb3JkaW5hdG9ycyB0byBzZW5kIGNvbXBsZXRlZCBhc3NldHMgYW5kIHNob3RzIGZvciBjbGllbnQgcmV2aWV3LiBXb3JrZWQgaW4gYSB0ZWFtIG9mIGZpdmUgZGV2ZWxvcGVycyBhbmQgYSBkZXNpZ25lciBpbiBhIHNwcmludCBlbnZpcm9ubWVudCB0byBwbGFuIGFuZCBkZXNpZ24gdGhlIGRldmVsb3BtZW50IGFyY2hpdGVjdHVyZSBmb3IgdGhlIGFwcGxpY2F0aW9uIGVuc3VyZSBhbGwgcmVxdWlyZW1lbnRzIHdlcmUgY29uc2lkZXJlZCBpbiB0aGUgZGVzaWduLlwiLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiTmVyZCBDb3JwcyBQcm9kdWN0aW9uIFNpdGVzXCIsXHJcblx0XHRcdFwibG9jYXRpb25cIjogXCJESFggU3R1ZGlvc1wiLFxyXG5cdFx0XHRcInJvbGVzXCI6IFtcIlNvZnR3YXJlIERldmVsb3BlclwiXSxcclxuXHRcdFx0XCJzdGFja1wiOiBbXCJMYXJhdmVsXCIsIFwialF1ZXJ5XCIsIFwiSFRNTFwiLCBcIlNDU1NcIiwgXCJNeVNRTFwiXSxcclxuXHRcdFx0XCJkZXNjcmlwdGlvblwiOiBcIkRlc2lnbiBhbmQgIGRldmVsb3BlZCBjdXN0b20gQ29udGVudCBNYW5hZ2VtZW50IFN5c3RlbSBmb3Igc3R1ZGlvIHByb2R1Y3Rpb24gc2l0ZXMsIHByb3ZpZGluZyBhIHdheSB0byBwZXJmb3JtIGVmZmljaWVudCB1cGRhdGVzIHRvIHdlYnNpdGUgY29udGVudHMgaW4gdGhlIGZ1dHVyZS4gRGV2ZWxvcGVkIG11bHRpcGxlIHByb2R1Y3Rpb24gd2Vic2l0ZXMgc3VjaCBhcyBrYXRlYW5kbWltbWltLmNhIHdpdGggbXVsdGktYnJvd3NlciBzdXBwb3J0IGFuZCByZXNwb25zaXZlIGRlc2lnbiB0byBwcm92aWRlIGtpZHMgd2l0aCBhIGZ1biBhbmQgaW50ZXJhY3RpdmUgbG9jYXRpb24gdG8gbGVhcm4gbW9yZSBhYm91dCB0aGUgc2hvdyBhbmQgcmVjZWl2ZSB1cGRhdGVzLlwiLFxyXG5cdFx0fVxyXG5cdF1cclxufVxyXG4iXX0=
