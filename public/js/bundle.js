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
	],
	"coverLetter": {
		"date": "March 27th, 2016",
		"content": "Dear Blizzard,\nMy name is Gary, a front end developer who is passionate about what I find are the three key elements to an amazing application: Development, User Experience and Quality Assurance. I have been a hardcore gamer from as far back as playing Dr. Mario on the Classic GameBoy device. Growing up, I've always loved the experiences that a multiplayer competitive game can give to a gamer, and one of the things that sparked my interest with games was the appeal of their website.\nIn every job that I've had, I've always develop a passion to what I'm working for, from the people I work with on a day-to-day basis to the whole studio itself. Surprisingly, my passion grows no matter what type of studio I work for. Starting at A&W, a fast food franchise, to Electronic Arts, a gaming studio, and now DHX Media, an animation studio. But then, as I was in search of other places to develop my experience, something clicked: I wanted to make front end websites for games, to bring the same spark that I had experienced from previous developers to a new set of audience.\nI am a Computing Science graduate from Simon Fraser University, with experience in front end development, user experience design and quality assurance. I've always stood out to my coworkers as someone who cares a lot about the projects, but on top of that, someone who cares about the users of the applications. Although I am still a junior software developer, I constantly thrive to learn more, experience more, to build on the foundation I've already built from the past. I strongly believe that for developers to grow, they must have team members that they can trust, someone they can learn from and also help: collaboration. It is through this type of collabation with my current teammates that has allows me to experience the design of development solutions from design, to integration, to rollout.\nThe culture of a company is something that's extremely important to me, as I aim to become part of the culture. Just as my love of games and the content that they bring, I believe that a collaborative team that challenges each other builds a lot of growth in each individual and the team overall. I believe that Blizzard is built with that type of idea, and I strongly feel that I would be a great addition as a Blizzard front end developer. Thank you for your time and consideration, and I hope to hear from you soon."
	}
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9hcHAuanMiLCJwdWJsaWMvcmVzb3VyY2VzL2RhdGEuanNvbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgXyA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xyXG52YXIgYW5ndWxhciA9IHJlcXVpcmUoJ2FuZ3VsYXInKTtcclxudmFyIGRhdGEgPSByZXF1aXJlKCcuLy4uL3B1YmxpYy9yZXNvdXJjZXMvZGF0YS5qc29uJyk7XHJcblxyXG5cclxudmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdSZXN1bWVUZW1wbGF0ZUFwcCcsIFtdKTtcclxuXHJcbkxheW91dENvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJ107XHJcbmZ1bmN0aW9uIExheW91dENvbnRyb2xsZXIoJHNjb3BlKSB7XHJcblx0JHNjb3BlLmRhdGEgPSBkYXRhO1xyXG5cdCRzY29wZS5nZXRQcm9maWxlRWxlbWVudHNEaXNwbGF5ID0gZ2V0UHJvZmlsZUVsZW1lbnRzRGlzcGxheTtcclxuXHQkc2NvcGUuZ2V0UHJvamVjdFJvbGVzRGlzcGxheSA9IGdldFByb2plY3RSb2xlc0Rpc3BsYXk7XHJcblx0JHNjb3BlLmdldFByb2plY3RTdGFja0Rpc3BsYXkgPSBnZXRQcm9qZWN0U3RhY2tEaXNwbGF5O1xyXG5cdCRzY29wZS5nZXRDb3ZlckxldHRlclBpZWNlcyA9IGdldENvdmVyTGV0dGVyUGllY2VzO1xyXG5cclxuXHJcblx0ZnVuY3Rpb24gZ2V0UHJvZmlsZUVsZW1lbnRzRGlzcGxheShwcm9maWxlKSB7XHJcblx0XHRyZXR1cm4gXy5qb2luKHByb2ZpbGUuaXRlbXMsICcsICcpO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZ2V0UHJvamVjdFJvbGVzRGlzcGxheShwcm9qZWN0KSB7XHJcblx0XHRyZXR1cm4gXy5qb2luKHByb2plY3Qucm9sZXMsICcsICcpO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZ2V0UHJvamVjdFN0YWNrRGlzcGxheShwcm9qZWN0KSB7XHJcblx0XHRyZXR1cm4gXy5qb2luKHByb2plY3Quc3RhY2ssICcsICcpO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZ2V0Q292ZXJMZXR0ZXJQaWVjZXMoKSB7XHJcblx0XHR2YXIgbGV0dGVyID0gZGF0YS5jb3ZlckxldHRlci5jb250ZW50O1xyXG5cdFx0dmFyIHBpZWNlcyA9IF8uc3BsaXQobGV0dGVyLCAnXFxuJyk7XHJcblx0XHRyZXR1cm4gcGllY2VzO1xyXG5cdH1cclxufVxyXG5cclxuYXBwLmNvbnRyb2xsZXIoJ0xheW91dENvbnRyb2xsZXInLCBMYXlvdXRDb250cm9sbGVyKTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0YW5ndWxhci5ib290c3RyYXAoZG9jdW1lbnQsIFsnUmVzdW1lVGVtcGxhdGVBcHAnXSk7XHJcbn0pO1xyXG5cclxuIiwibW9kdWxlLmV4cG9ydHM9e1xyXG5cdFwicHJvZmlsZUltYWdlXCI6IFwiLi9wdWJsaWMvcmVzb3VyY2VzL3Byb2ZpbGUtcGljdHVyZS5wbmdcIixcclxuXHRcImZpcnN0TmFtZVwiOiBcIkdhcnkgSy5cIixcclxuXHRcImxhc3ROYW1lXCI6IFwiWWF1XCIsXHJcblx0XCJvY2N1cGF0aW9uXCI6IFwiRGV2ZWxvcGVyLiBEZXNpZ25lci4gUXVhbGl0eSBBc3N1cmFuY2UuXCIsXHJcblx0XCJjb250YWN0XCI6IHtcclxuXHRcdFwicGhvbmVcIjogXCIrMSAoNzc4KSA4ODIgMDUyNFwiLFxyXG5cdFx0XCJlbWFpbFwiOiBcImd5YXU4OEBnbWFpbC5jb21cIixcclxuXHRcdFwibG9jYXRpb25cIjogXCJWYW5jb3V2ZXIsIEJDLCBDQVwiLFxyXG5cdFx0XCJzb2NpYWxzXCI6XHJcblx0XHRbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcIm5hbWVcIjogXCJHaXRIdWJcIixcclxuXHRcdFx0XHRcImxpbmtcIjogXCJodHRwczovL2dpdGh1Yi5jb20vZ2FyeXlhdVwiLFxyXG5cdFx0XHRcdFwibGlua1RleHRcIjogXCJnaXRodWIuY29tL2dhcnl5YXVcIixcclxuXHRcdFx0XHRcImljb25DbGFzc2VzXCI6IFwiem1kaSB6bWRpLWdpdGh1Yi1hbHRcIixcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwibmFtZVwiOiBcIkxpbmtlZEluXCIsXHJcblx0XHRcdFx0XCJsaW5rXCI6IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2dhcnl5YXVcIixcclxuXHRcdFx0XHRcImxpbmtUZXh0XCI6IFwibGlua2VkaW4uY29tL2luL2dhcnl5YXVcIixcclxuXHRcdFx0XHRcImljb25DbGFzc2VzXCI6IFwiem1kaSB6bWRpLWxpbmtlZGluXCIsXHJcblx0XHRcdH0sXHJcblx0XHRdXHJcblx0fSxcclxuXHRcIm92ZXJ2aWV3XCI6IFwiRnJvbnQtZW5kIGRldmVsb3BlciB3aXRoIGEgc3Ryb25nIHBhc3Npb24gZm9yIGRldmVsb3BpbmcgaW5zcGlyYXRpb25hbCB3ZWIgYXBwbGljYXRpb25zLiBFeHBlcmllbmNlIGluIGRpZmZlcmVudCB0eXBlcyBvZiBsYW5ndWFnZXMgYW5kIGZyYW1ld29ya3Mgd2l0aCBxdWljayBsZWFybmluZyBjYXBhYmlsaXRpZXMgdG8gYWRhcHQgaW4gZGlmZmVyZW50IHByb2plY3QgcmVxdWlyZW1lbnRzLiBGbGV4aWJsZSBpbiBkaWZmZXJlbnQgd29ya2luZyBlbnZpcm9ubWVudHMsIGhhdmluZyB3b3JrZWQgZWZmZWN0aXZlbHkgYm90aCBpbmRlcGVuZGVudGx5IGFuZCBhcyBhIHRlYW0gaW4gYW4gYWdpbGUgZGV2ZWxvcG1lbnQgcHJvY2Vzcy4gVXNlcyBza2lsbHNldHMgaW4gdXNlciBleHBlcmllbmNlIGRlc2lnbiwgcXVhbGl0eSBhc3N1cmFuY2UsIGFuZCBzb2Z0d2FyZSBkZXZlbG9wbWVudCBvbnRvIGVhY2ggcHJvamVjdCB3aXRoIHRoZSBvYmplY3RpdmUgb2YgZGVsaXZlcmluZyBoaWdoIHF1YWxpdHkgcHJvZHVjdHMuXCIsXHJcblx0XCJ0ZWNobmljYWxQcm9maWxlXCI6XHJcblx0W1xyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJMYW5ndWFnZXNcIixcclxuXHRcdFx0XCJpdGVtc1wiOlxyXG5cdFx0XHRbXHJcblx0XHRcdFx0XCJQeXRob25cIixcclxuXHRcdFx0XHRcIlBIUFwiLFxyXG5cdFx0XHRcdFwiSmF2YVNjcmlwdFwiLFxyXG5cdFx0XHRcdFwiSlNPTlwiLFxyXG5cdFx0XHRcdFwiSFRNTDVcIixcclxuXHRcdFx0XHRcIkNTUzNcIixcclxuXHRcdFx0XHRcIlNDU1NcIixcclxuXHRcdFx0XHRcIlNRTFwiLFxyXG5cdFx0XHRdLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiRnJhbWV3b3Jrc1wiLFxyXG5cdFx0XHRcIml0ZW1zXCI6XHJcblx0XHRcdFtcclxuXHRcdFx0XHRcIkRqYW5nb1wiLFxyXG5cdFx0XHRcdFwiTGFyYXZlbFwiLFxyXG5cdFx0XHRcdFwiQW5ndWxhckpTXCIsXHJcblx0XHRcdFx0XCJSZWFjdFwiLFxyXG5cdFx0XHRcdFwiS25vY2tvdXRcIixcclxuXHRcdFx0XHRcImpRdWVyeVwiLFxyXG5cdFx0XHRcdFwiQm9vdHN0cmFwXCIsXHJcblx0XHRcdFx0XCJHdWxwXCIsXHJcblx0XHRcdFx0XCJOb2RlSlNcIixcclxuXHRcdFx0XHRcIlVES1wiLFxyXG5cdFx0XHRdLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiVmVyc2lvbiBDb250cm9sXCIsXHJcblx0XHRcdFwiaXRlbXNcIjpcclxuXHRcdFx0W1xyXG5cdFx0XHRcdFwiR2l0IChHaXRMYWIsIEdpdEh1YilcIixcclxuXHRcdFx0XHRcIlN1YnZlcnNpb24gKFRvcnRvaXNlU1ZOKVwiLFxyXG5cdFx0XHRdLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiUHJvamVjdCBUb29sc1wiLFxyXG5cdFx0XHRcIml0ZW1zXCI6XHJcblx0XHRcdFtcclxuXHRcdFx0XHRcIkNvbmZsdWVuY2VcIixcclxuXHRcdFx0XHRcIkpJUkFcIixcclxuXHRcdFx0XHRcIkdpdExhYlwiLFxyXG5cdFx0XHRcdFwiTWFudGlzXCIsXHJcblx0XHRcdFx0XCJSZXZpZXcgQm9hcmRcIixcclxuXHRcdFx0XSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcIkRlc2lnbiBUb29sc1wiLFxyXG5cdFx0XHRcIml0ZW1zXCI6XHJcblx0XHRcdFtcclxuXHRcdFx0XHRcIkFkb2JlIFBob3Rvc2hvcFwiLFxyXG5cdFx0XHRcdFwiSWxsdXN0cmF0b3JcIixcclxuXHRcdFx0XHRcIkRyZWFtd2VhdmVyXCIsXHJcblx0XHRcdFx0XCJQcmVtaWVyZSBQcm9cIixcclxuXHRcdFx0XHRcIm15QmFsc2FtaXFcIixcclxuXHRcdFx0XSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcIk1ldGhvZG9sb2dpZXNcIixcclxuXHRcdFx0XCJpdGVtc1wiOlxyXG5cdFx0XHRbXHJcblx0XHRcdFx0XCJBZ2lsZVwiLFxyXG5cdFx0XHRcdFwiV2F0ZXJmYWxsXCIsXHJcblx0XHRcdFx0XCJTY3J1bVwiLFxyXG5cdFx0XHRcdFwiVW5pdCBUZXN0XCIsXHJcblx0XHRcdFx0XCJSZXNwb25zaXZlIERlc2lnblwiLFxyXG5cdFx0XHRdLFxyXG5cdFx0fSxcclxuXHRdLFxyXG5cdFwid29ya0V4cGVyaWVuY2VcIjpcclxuXHRbXHJcblx0XHR7XHJcblx0XHRcdFwicG9zaXRpb25cIjogXCJKdW5pb3IgU29mdHdhcmUgRGV2ZWxvcGVyXCIsXHJcblx0XHRcdFwiY29tcGFueVwiOiBcIkRIWCBNZWRpYVwiLFxyXG5cdFx0XHRcImxvY2F0aW9uXCI6IFwiVmFuY291dmVyLCBCQywgQ2FuYWRhXCIsXHJcblx0XHRcdFwidGltZVwiOiBcIk1hciAyMDE0IC0gQ3VycmVudFwiLFxyXG5cdFx0XHRcImRlc2NyaXB0aW9uXCI6IFwiRGV2ZWxvcCBuZXcgd2ViIGFwcGxpY2F0aW9ucyBmcm9tIHJlcXVpcmVtZW50cyBnYXRoZXJpbmcsIHNwcmludCBwbGFubmluZywgYWdpbGUgZGV2ZWxvcG1lbnQsIHJvbGxvdXQgdG8gc3lzdGVtIG1haW50ZW5hbmNlIHRvIHByb3ZpZGUgdGhlIHN0dWRpbyB3aXRoIHVuaXF1ZWx5IGJ1aWx0IHN5c3RlbXMgdG8gc3VpdCB0aGUgbmVlZHMgb2YgbWFya2V0aW5nLCBpbnRlcmFjdGl2ZSBhbmQgcGlwZWxpbmUuIENvbGxhYm9yYXRlIHdpdGggYSB0ZWFtIG9mIDQgLSA3IGRldmVsb3BlcnMgdG8gZGVzaWduIGFuZCBhcmNoaXRlY3QgdGhlIHN0cnVjdHVyZSBvZiB0aGUgcHJvamVjdHMgdG8gZGV0ZXJtaW5lIHRoZSBvcHRpbWFsIGRldmVsb3BtZW50IGFwcHJvYWNoIGFuZCBiZXN0IHRlY2hub2xvZ2llcyB0byB1c2UuIFJlc2VhcmNoIG9uIGV4dGVybmFsIHN0dWRpbyBtYW5hZ2VtZW50IHN5c3RlbSwgU2hvdGd1biwgdG8gYXNzZXNzIHRoZSBjb21wYXRpYmlsaXR5IG9mIFNob3RndW4gd2l0aCBkYWlseSB3b3JrZmxvdyBvZiB0aGUgc3R1ZGlvLiBEZXNpZ24gY3VzdG9tIHN5c3RlbSwgQXJ0ZW1pcywgdG8gYmUgdXNlZCBvbiB0b3Agb2YgU2hvdGd1biBpbiBvcmRlciB0byBlbmhhbmNlIHRoZSBmZWF0dXJlcyBwcm92aWRlZCBhbmQgdGFpbG9yIGl0IHRvIHRoZSBuZWVkcyBvZiB0aGUgdXNlcnMuIERldmVsb3AgYW5kIGltcGxlbWVudCBkaWZmZXJlbnQgQVBJcyB0byB1cGdyYWRlIGxlZ2FjeSBzeXN0ZW1zIHRvIHVzZSBhIHVuaWZpZWQgZGF0YWJhc2Ugd2hpbGUgcGxhbm5pbmcgZm9yIGZ1dHVyZSBzeXN0ZW1zIHRvIHByb3ZpZGUgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgd2l0aCB0aGUgcGFzdCBzeXN0ZW1zLlwiLFxyXG5cdFx0XHRcInBvaW50c1wiOlxyXG5cdFx0XHRbXHJcblx0XHRcdFx0XCJEZXZlbG9wIG5ldyB3ZWIgYXBwbGljYXRpb25zIGZyb20gcmVxdWlyZW1lbnRzIGdhdGhlcmluZywgc3ByaW50IHBsYW5uaW5nLCBhZ2lsZSBkZXZlbG9wbWVudCwgcm9sbG91dCB0byBzeXN0ZW0gbWFpbnRlbmFuY2UgdG8gcHJvdmlkZSB0aGUgc3R1ZGlvIHdpdGggdW5pcXVlbHkgYnVpbHQgc3lzdGVtcyB0byBzdWl0IHRoZSBuZWVkcyBvZiBtYXJrZXRpbmcsIGludGVyYWN0aXZlIGFuZCBwaXBlbGluZS5cIixcclxuXHRcdFx0XHRcIkNvbGxhYm9yYXRlIHdpdGggYSB0ZWFtIG9mIDQgLSA3IGRldmVsb3BlcnMgdG8gZGVzaWduIGFuZCBhcmNoaXRlY3QgdGhlIHN0cnVjdHVyZSBvZiB0aGUgcHJvamVjdHMgdG8gZGV0ZXJtaW5lIHRoZSBvcHRpbWFsIGRldmVsb3BtZW50IGFwcHJvYWNoIGFuZCBiZXN0IHRlY2hub2xvZ2llcyB0byB1c2UuXCIsXHJcblx0XHRcdFx0XCJSZXNlYXJjaCBvbiBleHRlcm5hbCBzdHVkaW8gbWFuYWdlbWVudCBzeXN0ZW0sIFNob3RndW4sIHRvIGFzc2VzcyB0aGUgY29tcGF0aWJpbGl0eSBvZiBTaG90Z3VuIHdpdGggZGFpbHkgd29ya2Zsb3cgb2YgdGhlIHN0dWRpby4gRGVzaWduIGN1c3RvbSBzeXN0ZW0sIEFydGVtaXMsIHRvIGJlIHVzZWQgb24gdG9wIG9mIFNob3RndW4gaW4gb3JkZXIgdG8gZW5oYW5jZSB0aGUgZmVhdHVyZXMgcHJvdmlkZWQgYW5kIHRhaWxvciBpdCB0byB0aGUgbmVlZHMgb2YgdGhlIHVzZXJzLlwiLFxyXG5cdFx0XHRcdFwiRGV2ZWxvcCBhbmQgaW1wbGVtZW50IGRpZmZlcmVudCBBUElzIHRvIHVwZ3JhZGUgbGVnYWN5IHN5c3RlbXMgdG8gdXNlIGEgdW5pZmllZCBkYXRhYmFzZSB3aGlsZSBwbGFubmluZyBmb3IgZnV0dXJlIHN5c3RlbXMgdG8gcHJvdmlkZSBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSB3aXRoIHRoZSBwYXN0IHN5c3RlbXMuXCIsXHJcblx0XHRcdF1cclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwicG9zaXRpb25cIjogXCJKdW5pb3IgQXBwbGljYXRpb24gRGV2ZWxvcGVyIENvLW9wXCIsXHJcblx0XHRcdFwiY29tcGFueVwiOiBcIlpFIFBvd2VyR3JvdXAgSW5jLlwiLFxyXG5cdFx0XHRcImxvY2F0aW9uXCI6IFwiUmljaG1vbmQsIEJDLCBDYW5hZGFcIixcclxuXHRcdFx0XCJ0aW1lXCI6IFwiSmFuIDIwMTMgLSBNYXkgMjAxM1wiLFxyXG5cdFx0XHRcImRlc2NyaXB0aW9uXCI6IFwiRGV2ZWxvcGVkIGEgSmF2YVNjcmlwdCBwbHVnaW4gZm9yIFNlbGVuaXVtIElERSB0byBwcm92aWRlIFFBIHRlYW0gd2l0aCBhIGJldHRlciB1bmRlcnN0YW5kaW5nIG9mIGhvdyB0byBjcmVhdGUgYW5kIG1hbmFnZSBTZWxlbml1bSBhdXRvbWF0aW9uIHNjcmlwdHMuIERldmVsb3BlZCBvdmVyIDMwMCBhdXRvbWF0aW9uIHRlc3Qgc2NyaXB0cyB1c2luZyBTZWxlbml1bSBJREUgYW5kIFhQQVRILCBhbGxvd2luZyBRQSB0byBydW4gc2NyaXB0cyBkdXJpbmcgZGFpbHkgaW1wbGVtZW50YXRpb25zIHRvIGVuc3VyZSBxdWFsaXR5IG92ZXIgYWRkZWQgb3IgbW9kaWZpZWQgZnVuY3Rpb25hbGl0eSBvZiB0aGUgcHJvamVjdC5cIixcclxuXHRcdFx0XCJwb2ludHNcIjpcclxuXHRcdFx0W1xyXG5cdFx0XHRcdFwiRGV2ZWxvcGVkIGEgSmF2YVNjcmlwdCBwbHVnaW4gZm9yIFNlbGVuaXVtIElERSB0byBwcm92aWRlIFFBIHRlYW0gd2l0aCBhIGJldHRlciB1bmRlcnN0YW5kaW5nIG9mIGhvdyB0byBjcmVhdGUgYW5kIG1hbmFnZSBTZWxlbml1bSBhdXRvbWF0aW9uIHNjcmlwdHMuXCIsXHJcblx0XHRcdFx0XCJEZXZlbG9wZWQgb3ZlciAzMDAgYXV0b21hdGlvbiB0ZXN0IHNjcmlwdHMgdXNpbmcgU2VsZW5pdW0gSURFIGFuZCBYUEFUSCwgYWxsb3dpbmcgUUEgdG8gcnVuIHNjcmlwdHMgZHVyaW5nIGRhaWx5IGltcGxlbWVudGF0aW9ucyB0byBlbnN1cmUgcXVhbGl0eSBvdmVyIGFkZGVkIG9yIG1vZGlmaWVkIGZ1bmN0aW9uYWxpdHkgb2YgdGhlIHByb2plY3QuXCIsXHJcblx0XHRcdF1cclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwicG9zaXRpb25cIjogXCJRdWFsaXR5IEFzc3VyYW5jZSBUZXN0ZXJcIixcclxuXHRcdFx0XCJjb21wYW55XCI6IFwiRWxlY3Ryb25pYyBBcnRzIENhbmFkYVwiLFxyXG5cdFx0XHRcImxvY2F0aW9uXCI6IFwiQnVybmFieSwgQkMsIENhbmFkYVwiLFxyXG5cdFx0XHRcInRpbWVcIjogXCJKdW4gMjAwOCAtIFNlcCAyMDExXCIsXHJcblx0XHRcdFwiZGVzY3JpcHRpb25cIjogXCJUZXN0ZWQgZ2FtaW5nIHNvZnR3YXJlIGZvciBOaW50ZW5kbyBXaWksIFhib3ggMzYwIGFuZCBQbGF5U3RhdGlvbiAzIHRvIGVuc3VyZSB0aGUgcXVhbGl0eSBvZiB0aGUgY29tcGFueSdzIHByb2R1Y3QsIGFsbG93aW5nIHN1Y2Nlc3NmdWwgZmlyc3QtdGltZSBwYXNzZXMgb24gc2V2ZXJhbCBmaXJzdC1wYXJ0eSBjZXJ0aWZpY2F0aW9ucy4gU3BlY2lhbGl6ZWQgaW4gTmludGVuZG8gY29tcGxpYW5jZSBhbmQgY3JlYXRlZCBjb21wbGlhbmNlIHRlc3QgY2FzZXMgZm9yIEVBIFNQT1JUUyBBY3RpdmUgYW5kIEVBIFNQT1JUUyBBY3RpdmUgTW9yZSBXb3Jrb3V0cyB1c2luZyBEZXZUZXN0IHRvIGd1aWRlIGNvbXBsaWFuY2UgdGVzdGVycyBkdXJpbmcgZGV2ZWxvcG1lbnQgcHJvY2Vzcy4gQ29sbGFib3JhdGVkIHdpdGggcHJvamVjdCBtYW5hZ2VycywgdGVhbSBsZWFkcyBhbmQgb3RoZXIgdGVzdGVycyB0byBhbmFseXplIHRoZSBjb3ZlcmFnZSBhbmQgcmlza3Mgb2YgZWFjaCB0ZXN0IHN1aXRlLCBlbnN1cmluZyB0aGF0IHRoZSByZXF1aXJlbWVudHMgb2YgdGhlIHNvZnR3YXJlIHdhcyBtZXQgd2hpbGUgdmFsaWRhdGluZyB0aGUgc3RhYmlsaXR5IG9mIGVhY2ggYnVpbGQgYXMgdGhlIHByb2plY3QgcHJvZ3Jlc3NlZC5cIixcclxuXHRcdFx0XCJwb2ludHNcIjpcclxuXHRcdFx0W1xyXG5cdFx0XHRcdFwiVGVzdGVkIGdhbWluZyBzb2Z0d2FyZSBmb3IgTmludGVuZG8gV2lpLCBYYm94IDM2MCBhbmQgUGxheVN0YXRpb24gMyB0byBlbnN1cmUgdGhlIHF1YWxpdHkgb2YgdGhlIGNvbXBhbnkncyBwcm9kdWN0LCBhbGxvd2luZyBzdWNjZXNzZnVsIGZpcnN0LXRpbWUgcGFzc2VzIG9uIHNldmVyYWwgZmlyc3QtcGFydHkgY2VydGlmaWNhdGlvbnMuXCIsXHJcblx0XHRcdFx0XCJTcGVjaWFsaXplZCBpbiBOaW50ZW5kbyBjb21wbGlhbmNlIGFuZCBjcmVhdGVkIGNvbXBsaWFuY2UgdGVzdCBjYXNlcyBmb3IgRUEgU1BPUlRTIEFjdGl2ZSBhbmQgRUEgU1BPUlRTIEFjdGl2ZSBNb3JlIFdvcmtvdXRzIHVzaW5nIERldlRlc3QgdG8gZ3VpZGUgY29tcGxpYW5jZSB0ZXN0ZXJzIGR1cmluZyBkZXZlbG9wbWVudCBwcm9jZXNzLlwiLFxyXG5cdFx0XHRcdFwiQ29sbGFib3JhdGVkIHdpdGggcHJvamVjdCBtYW5hZ2VycywgdGVhbSBsZWFkcyBhbmQgb3RoZXIgdGVzdGVycyB0byBhbmFseXplIHRoZSBjb3ZlcmFnZSBhbmQgcmlza3Mgb2YgZWFjaCB0ZXN0IHN1aXRlLCBlbnN1cmluZyB0aGF0IHRoZSByZXF1aXJlbWVudHMgb2YgdGhlIHNvZnR3YXJlIHdhcyBtZXQgd2hpbGUgdmFsaWRhdGluZyB0aGUgc3RhYmlsaXR5IG9mIGVhY2ggYnVpbGQgYXMgdGhlIHByb2plY3QgcHJvZ3Jlc3NlZC5cIixcclxuXHRcdFx0XVxyXG5cdFx0fSxcclxuXHRdLFxyXG5cdFwiZWR1Y2F0aW9uXCI6XHJcblx0W1xyXG5cdFx0e1xyXG5cdFx0XHRcInNjaG9vbFwiOiBcIlNpbW9uIEZyYXNlciBVbml2ZXJzaXR5XCIsXHJcblx0XHRcdFwicHJvZ3JhbVwiOiBcIk1ham9yIGluIENvbXB1dGluZyBTY2llbmNlXCIsXHJcblx0XHRcdFwiZmFjdWx0eVwiOiBcIkJhY2hlbG9yIG9mIFNjaWVuY2VcIixcclxuXHRcdFx0XCJ0aW1lXCI6IFwiRGVjIDIwMTNcIixcclxuXHRcdFx0XCJkZXNjcmlwdGlvblwiOiBcIkZvY3VzZWQgb24gT2JqZWN0LU9yaWVudGVkIFByb2dyYW1taW5nIGFuZCBvdGhlciBzb2Z0d2FyZSBkZXZlbG9wbWVudCBjb25jZXB0cyBzdWNoIGFzIGRhdGFiYXNlIGRlc2lnbiwgbmV0d29ya2luZyBhbmQgc29mdHdhcmUgZW5naW5lZXJpbmcuXCIsXHJcblx0XHR9XHJcblx0XSxcclxuXHRcInByb2plY3RzXCI6XHJcblx0W1xyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJQcm9kdWN0aW9uIE1hbmFnZW1lbnQgU3lzdGVtXCIsXHJcblx0XHRcdFwibG9jYXRpb25cIjogXCJESFggU3R1ZGlvc1wiLFxyXG5cdFx0XHRcInJvbGVzXCI6IFtcIlNjcnVtIE1hc3RlclwiLCBcIlNvZnR3YXJlIERldmVsb3BlclwiLCBcIlVYIERlc2lnbmVyXCJdLFxyXG5cdFx0XHRcInN0YWNrXCI6IFtcIkRqYW5nbywgQW5ndWxhckpTLCBIVE1MLCBTQ1NTLCBNeVNRTFwiXSxcclxuXHRcdFx0XCJkZXNjcmlwdGlvblwiOiBcIkRlc2lnbmVkIGFuZCBkZXZlbG9wZWQgdGFzayBtYW5hZ2VtZW50IHN5c3RlbSBhbmQgc2hvdyBicmVha2Rvd24gc3lzdGVtIGFsb25nc2lkZSBleHRlcm5hbCBzeXN0ZW0sIFNob3RndW4sIHRvIGludGVncmF0ZSBTaG90Z3VuIGludG8gc3R1ZGlvIHBpcGVsaW5lIHdoaWxlIG1haW50YWluaW5nIGxlZ2FjeSBzeXN0ZW0gZmVhdHVyZXMuIERldmVsb3BlZCBhbiBBUEkgdG8gcHJvdmlkZSBjb21tdW5pY2F0aW9uIGJldHdlZW4gU2hvdGd1biBhbmQgbGVnYWN5IHN5c3RlbSwgYWxsb3dpbmcgY29ycG9yYXRlIGRlcGFydG1lbnRzIHRvIGNvbnRpbnVlIHVzaW5nIGxlZ2FjeSBzeXN0ZW0gdG8gZW50ZXIgdXNlciBpbmZvcm1hdGlvbiB3aGlsZSBlbnN1cmUgaW5mb3JtYXRpb24gaXMgcGFzc2VkIHRvIFNob3RndW4uIExlZCBhIHRlYW0gb2YgZml2ZSBkZXZlbG9wZXJzIGluIGFuIEFnaWxlIHNjcnVtIGVudmlyb25tZW50LCBhbGxvd2luZyB0YXNrcyB0byBiZSBjb21wbGV0ZWQgd2l0aGluIGRlYWRsaW5lcyB3aGlsZSByZXBvcnRpbmcgdG8gSGVhZCBvZiBTb2Z0d2FyZSBEZXBhcnRtZW50IG9uIHNjaGVkdWxlIGFkanVzdG1lbnRzLlwiLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiTXVzZSBDbGllbnQgUmV2aWV3XCIsXHJcblx0XHRcdFwibG9jYXRpb25cIjogXCJESFggU3R1ZGlvc1wiLFxyXG5cdFx0XHRcInJvbGVzXCI6IFtcIlNvZnR3YXJlIERldmVsb3BlclwiXSxcclxuXHRcdFx0XCJzdGFja1wiOiBbXCJEamFuZ28sIEFuZ3VsYXJKUywgSFRNTCwgU0NTUywgTXlTUUxcIl0sXHJcblx0XHRcdFwiZGVzY3JpcHRpb25cIjogXCJEZXZlbG9wZWQgYW4gZXh0ZXJuYWwgY2xpZW50IHJldmlldyBzeXN0ZW0gY29ubmVjdGVkIHRvIHN0dWRpbyB0YXNrIG1hbmFnZW1lbnQgc3lzdGVtIHRocm91Z2ggYW4gQVBJLCBhbGxvd2luZyBjb29yZGluYXRvcnMgdG8gc2VuZCBjb21wbGV0ZWQgYXNzZXRzIGFuZCBzaG90cyBmb3IgY2xpZW50IHJldmlldy4gV29ya2VkIGluIGEgdGVhbSBvZiBmaXZlIGRldmVsb3BlcnMgYW5kIGEgZGVzaWduZXIgaW4gYSBzcHJpbnQgZW52aXJvbm1lbnQgdG8gcGxhbiBhbmQgZGVzaWduIHRoZSBkZXZlbG9wbWVudCBhcmNoaXRlY3R1cmUgZm9yIHRoZSBhcHBsaWNhdGlvbiBlbnN1cmUgYWxsIHJlcXVpcmVtZW50cyB3ZXJlIGNvbnNpZGVyZWQgaW4gdGhlIGRlc2lnbi5cIixcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcIk5lcmQgQ29ycHMgUHJvZHVjdGlvbiBTaXRlc1wiLFxyXG5cdFx0XHRcImxvY2F0aW9uXCI6IFwiREhYIFN0dWRpb3NcIixcclxuXHRcdFx0XCJyb2xlc1wiOiBbXCJTb2Z0d2FyZSBEZXZlbG9wZXJcIl0sXHJcblx0XHRcdFwic3RhY2tcIjogW1wiTGFyYXZlbFwiLCBcImpRdWVyeVwiLCBcIkhUTUxcIiwgXCJTQ1NTXCIsIFwiTXlTUUxcIl0sXHJcblx0XHRcdFwiZGVzY3JpcHRpb25cIjogXCJEZXNpZ24gYW5kICBkZXZlbG9wZWQgY3VzdG9tIENvbnRlbnQgTWFuYWdlbWVudCBTeXN0ZW0gZm9yIHN0dWRpbyBwcm9kdWN0aW9uIHNpdGVzLCBwcm92aWRpbmcgYSB3YXkgdG8gcGVyZm9ybSBlZmZpY2llbnQgdXBkYXRlcyB0byB3ZWJzaXRlIGNvbnRlbnRzIGluIHRoZSBmdXR1cmUuIERldmVsb3BlZCBtdWx0aXBsZSBwcm9kdWN0aW9uIHdlYnNpdGVzIHN1Y2ggYXMga2F0ZWFuZG1pbW1pbS5jYSB3aXRoIG11bHRpLWJyb3dzZXIgc3VwcG9ydCBhbmQgcmVzcG9uc2l2ZSBkZXNpZ24gdG8gcHJvdmlkZSBraWRzIHdpdGggYSBmdW4gYW5kIGludGVyYWN0aXZlIGxvY2F0aW9uIHRvIGxlYXJuIG1vcmUgYWJvdXQgdGhlIHNob3cgYW5kIHJlY2VpdmUgdXBkYXRlcy5cIixcclxuXHRcdH1cclxuXHRdLFxyXG5cdFwiY292ZXJMZXR0ZXJcIjoge1xyXG5cdFx0XCJkYXRlXCI6IFwiTWFyY2ggMjd0aCwgMjAxNlwiLFxyXG5cdFx0XCJjb250ZW50XCI6IFwiRGVhciBCbGl6emFyZCxcXG5NeSBuYW1lIGlzIEdhcnksIGEgZnJvbnQgZW5kIGRldmVsb3BlciB3aG8gaXMgcGFzc2lvbmF0ZSBhYm91dCB3aGF0IEkgZmluZCBhcmUgdGhlIHRocmVlIGtleSBlbGVtZW50cyB0byBhbiBhbWF6aW5nIGFwcGxpY2F0aW9uOiBEZXZlbG9wbWVudCwgVXNlciBFeHBlcmllbmNlIGFuZCBRdWFsaXR5IEFzc3VyYW5jZS4gSSBoYXZlIGJlZW4gYSBoYXJkY29yZSBnYW1lciBmcm9tIGFzIGZhciBiYWNrIGFzIHBsYXlpbmcgRHIuIE1hcmlvIG9uIHRoZSBDbGFzc2ljIEdhbWVCb3kgZGV2aWNlLiBHcm93aW5nIHVwLCBJJ3ZlIGFsd2F5cyBsb3ZlZCB0aGUgZXhwZXJpZW5jZXMgdGhhdCBhIG11bHRpcGxheWVyIGNvbXBldGl0aXZlIGdhbWUgY2FuIGdpdmUgdG8gYSBnYW1lciwgYW5kIG9uZSBvZiB0aGUgdGhpbmdzIHRoYXQgc3BhcmtlZCBteSBpbnRlcmVzdCB3aXRoIGdhbWVzIHdhcyB0aGUgYXBwZWFsIG9mIHRoZWlyIHdlYnNpdGUuXFxuSW4gZXZlcnkgam9iIHRoYXQgSSd2ZSBoYWQsIEkndmUgYWx3YXlzIGRldmVsb3AgYSBwYXNzaW9uIHRvIHdoYXQgSSdtIHdvcmtpbmcgZm9yLCBmcm9tIHRoZSBwZW9wbGUgSSB3b3JrIHdpdGggb24gYSBkYXktdG8tZGF5IGJhc2lzIHRvIHRoZSB3aG9sZSBzdHVkaW8gaXRzZWxmLiBTdXJwcmlzaW5nbHksIG15IHBhc3Npb24gZ3Jvd3Mgbm8gbWF0dGVyIHdoYXQgdHlwZSBvZiBzdHVkaW8gSSB3b3JrIGZvci4gU3RhcnRpbmcgYXQgQSZXLCBhIGZhc3QgZm9vZCBmcmFuY2hpc2UsIHRvIEVsZWN0cm9uaWMgQXJ0cywgYSBnYW1pbmcgc3R1ZGlvLCBhbmQgbm93IERIWCBNZWRpYSwgYW4gYW5pbWF0aW9uIHN0dWRpby4gQnV0IHRoZW4sIGFzIEkgd2FzIGluIHNlYXJjaCBvZiBvdGhlciBwbGFjZXMgdG8gZGV2ZWxvcCBteSBleHBlcmllbmNlLCBzb21ldGhpbmcgY2xpY2tlZDogSSB3YW50ZWQgdG8gbWFrZSBmcm9udCBlbmQgd2Vic2l0ZXMgZm9yIGdhbWVzLCB0byBicmluZyB0aGUgc2FtZSBzcGFyayB0aGF0IEkgaGFkIGV4cGVyaWVuY2VkIGZyb20gcHJldmlvdXMgZGV2ZWxvcGVycyB0byBhIG5ldyBzZXQgb2YgYXVkaWVuY2UuXFxuSSBhbSBhIENvbXB1dGluZyBTY2llbmNlIGdyYWR1YXRlIGZyb20gU2ltb24gRnJhc2VyIFVuaXZlcnNpdHksIHdpdGggZXhwZXJpZW5jZSBpbiBmcm9udCBlbmQgZGV2ZWxvcG1lbnQsIHVzZXIgZXhwZXJpZW5jZSBkZXNpZ24gYW5kIHF1YWxpdHkgYXNzdXJhbmNlLiBJJ3ZlIGFsd2F5cyBzdG9vZCBvdXQgdG8gbXkgY293b3JrZXJzIGFzIHNvbWVvbmUgd2hvIGNhcmVzIGEgbG90IGFib3V0IHRoZSBwcm9qZWN0cywgYnV0IG9uIHRvcCBvZiB0aGF0LCBzb21lb25lIHdobyBjYXJlcyBhYm91dCB0aGUgdXNlcnMgb2YgdGhlIGFwcGxpY2F0aW9ucy4gQWx0aG91Z2ggSSBhbSBzdGlsbCBhIGp1bmlvciBzb2Z0d2FyZSBkZXZlbG9wZXIsIEkgY29uc3RhbnRseSB0aHJpdmUgdG8gbGVhcm4gbW9yZSwgZXhwZXJpZW5jZSBtb3JlLCB0byBidWlsZCBvbiB0aGUgZm91bmRhdGlvbiBJJ3ZlIGFscmVhZHkgYnVpbHQgZnJvbSB0aGUgcGFzdC4gSSBzdHJvbmdseSBiZWxpZXZlIHRoYXQgZm9yIGRldmVsb3BlcnMgdG8gZ3JvdywgdGhleSBtdXN0IGhhdmUgdGVhbSBtZW1iZXJzIHRoYXQgdGhleSBjYW4gdHJ1c3QsIHNvbWVvbmUgdGhleSBjYW4gbGVhcm4gZnJvbSBhbmQgYWxzbyBoZWxwOiBjb2xsYWJvcmF0aW9uLiBJdCBpcyB0aHJvdWdoIHRoaXMgdHlwZSBvZiBjb2xsYWJhdGlvbiB3aXRoIG15IGN1cnJlbnQgdGVhbW1hdGVzIHRoYXQgaGFzIGFsbG93cyBtZSB0byBleHBlcmllbmNlIHRoZSBkZXNpZ24gb2YgZGV2ZWxvcG1lbnQgc29sdXRpb25zIGZyb20gZGVzaWduLCB0byBpbnRlZ3JhdGlvbiwgdG8gcm9sbG91dC5cXG5UaGUgY3VsdHVyZSBvZiBhIGNvbXBhbnkgaXMgc29tZXRoaW5nIHRoYXQncyBleHRyZW1lbHkgaW1wb3J0YW50IHRvIG1lLCBhcyBJIGFpbSB0byBiZWNvbWUgcGFydCBvZiB0aGUgY3VsdHVyZS4gSnVzdCBhcyBteSBsb3ZlIG9mIGdhbWVzIGFuZCB0aGUgY29udGVudCB0aGF0IHRoZXkgYnJpbmcsIEkgYmVsaWV2ZSB0aGF0IGEgY29sbGFib3JhdGl2ZSB0ZWFtIHRoYXQgY2hhbGxlbmdlcyBlYWNoIG90aGVyIGJ1aWxkcyBhIGxvdCBvZiBncm93dGggaW4gZWFjaCBpbmRpdmlkdWFsIGFuZCB0aGUgdGVhbSBvdmVyYWxsLiBJIGJlbGlldmUgdGhhdCBCbGl6emFyZCBpcyBidWlsdCB3aXRoIHRoYXQgdHlwZSBvZiBpZGVhLCBhbmQgSSBzdHJvbmdseSBmZWVsIHRoYXQgSSB3b3VsZCBiZSBhIGdyZWF0IGFkZGl0aW9uIGFzIGEgQmxpenphcmQgZnJvbnQgZW5kIGRldmVsb3Blci4gVGhhbmsgeW91IGZvciB5b3VyIHRpbWUgYW5kIGNvbnNpZGVyYXRpb24sIGFuZCBJIGhvcGUgdG8gaGVhciBmcm9tIHlvdSBzb29uLlwiXHJcblx0fVxyXG59XHJcbiJdfQ==
