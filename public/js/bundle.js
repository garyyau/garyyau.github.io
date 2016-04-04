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
				"JavaScript",
				"HTML5",
				"CSS3",
				"AJAX",
				"SCSS",
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
				"React",
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
		"date": "March 27th, 2016",
		"content": "Dear Blizzard,\nMy name is Gary, a front end developer who is passionate about what I find are the three key elements to an amazing application: Development, User Experience and Quality Assurance. I have been a hardcore gamer from as far back as playing Dr. Mario on the Classic GameBoy device. Growing up, I've always loved the experiences that a multiplayer competitive game can give to a gamer, and one of the things that sparked my interest with games was the appeal of their website.\nIn every job that I've had, I've always develop a passion to what I'm working for, from the people I work with on a day-to-day basis to the whole studio itself. Surprisingly, my passion grows no matter what type of studio I work for. Starting at A&W, a fast food franchise, to Electronic Arts, a gaming studio, and now DHX Media, an animation studio. But then, as I was in search of other places to develop my experience, something clicked: I wanted to make front end websites for games, to bring the same spark that I had experienced from previous developers to a new set of audience.\nI am a Computing Science graduate from Simon Fraser University, with experience in front end development, user experience design and quality assurance. I've always stood out to my coworkers as someone who cares a lot about the projects, but on top of that, someone who cares about the users of the applications. Although I am still a junior software developer, I constantly thrive to learn more, experience more, to build on the foundation I've already built from the past. I strongly believe that for developers to grow, they must have team members that they can trust, someone they can learn from and also help: collaboration. It is through this type of collabation with my current teammates that has allows me to experience the design of development solutions from design, to integration, to rollout.\nThe culture of a company is something that's extremely important to me, as I aim to become part of the culture. Just as my love of games and the content that they bring, I believe that a collaborative team that challenges each other builds a lot of growth in each individual and the team overall. I believe that Blizzard is built with that type of idea, and I strongly feel that I would be a great addition as a Blizzard front end developer. Thank you for your time and consideration, and I hope to hear from you soon."
	}
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9hcHAuanMiLCJwdWJsaWMvcmVzb3VyY2VzL2RhdGEuanNvbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIF8gPSByZXF1aXJlKCdsb2Rhc2gnKTtcclxudmFyIGFuZ3VsYXIgPSByZXF1aXJlKCdhbmd1bGFyJyk7XHJcbnZhciBkYXRhID0gcmVxdWlyZSgnLi8uLi9wdWJsaWMvcmVzb3VyY2VzL2RhdGEuanNvbicpO1xyXG5cclxuXHJcbnZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnUmVzdW1lVGVtcGxhdGVBcHAnLCBbXSk7XHJcblxyXG5MYXlvdXRDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZSddO1xyXG5mdW5jdGlvbiBMYXlvdXRDb250cm9sbGVyKCRzY29wZSkge1xyXG5cdCRzY29wZS5kYXRhID0gZGF0YTtcclxuXHQkc2NvcGUuZ2V0UHJvZmlsZUVsZW1lbnRzRGlzcGxheSA9IGdldFByb2ZpbGVFbGVtZW50c0Rpc3BsYXk7XHJcblx0JHNjb3BlLmdldFByb2plY3RSb2xlc0Rpc3BsYXkgPSBnZXRQcm9qZWN0Um9sZXNEaXNwbGF5O1xyXG5cdCRzY29wZS5nZXRQcm9qZWN0U3RhY2tEaXNwbGF5ID0gZ2V0UHJvamVjdFN0YWNrRGlzcGxheTtcclxuXHQkc2NvcGUuZ2V0Q292ZXJMZXR0ZXJQaWVjZXMgPSBnZXRDb3ZlckxldHRlclBpZWNlcztcclxuXHJcblxyXG5cdGZ1bmN0aW9uIGdldFByb2ZpbGVFbGVtZW50c0Rpc3BsYXkocHJvZmlsZSkge1xyXG5cdFx0cmV0dXJuIF8uam9pbihwcm9maWxlLml0ZW1zLCAnLCAnKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGdldFByb2plY3RSb2xlc0Rpc3BsYXkocHJvamVjdCkge1xyXG5cdFx0cmV0dXJuIF8uam9pbihwcm9qZWN0LnJvbGVzLCAnLCAnKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGdldFByb2plY3RTdGFja0Rpc3BsYXkocHJvamVjdCkge1xyXG5cdFx0cmV0dXJuIF8uam9pbihwcm9qZWN0LnN0YWNrLCAnLCAnKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGdldENvdmVyTGV0dGVyUGllY2VzKCkge1xyXG5cdFx0dmFyIGxldHRlciA9IGRhdGEuY292ZXJMZXR0ZXIuY29udGVudDtcclxuXHRcdHZhciBwaWVjZXMgPSBfLnNwbGl0KGxldHRlciwgJ1xcbicpO1xyXG5cdFx0cmV0dXJuIHBpZWNlcztcclxuXHR9XHJcbn1cclxuXHJcbmFwcC5jb250cm9sbGVyKCdMYXlvdXRDb250cm9sbGVyJywgTGF5b3V0Q29udHJvbGxlcik7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbihldmVudCkge1xyXG5cdGFuZ3VsYXIuYm9vdHN0cmFwKGRvY3VtZW50LCBbJ1Jlc3VtZVRlbXBsYXRlQXBwJ10pO1xyXG59KTtcclxuXHJcbiIsIm1vZHVsZS5leHBvcnRzPXtcclxuXHRcInByb2ZpbGVJbWFnZVwiOiBcIi4vcHVibGljL3Jlc291cmNlcy9wcm9maWxlLXBpY3R1cmUucG5nXCIsXHJcblx0XCJmaXJzdE5hbWVcIjogXCJHYXJ5IEsuXCIsXHJcblx0XCJsYXN0TmFtZVwiOiBcIllhdVwiLFxyXG5cdFwib2NjdXBhdGlvblwiOiBcIkRldmVsb3Blci4gRGVzaWduZXIuIFF1YWxpdHkgQXNzdXJhbmNlLlwiLFxyXG5cdFwiY29udGFjdFwiOiB7XHJcblx0XHRcInBob25lXCI6IFwiKzEgKDc3OCkgODgyIDA1MjRcIixcclxuXHRcdFwiZW1haWxcIjogXCJneWF1ODhAZ21haWwuY29tXCIsXHJcblx0XHRcImxvY2F0aW9uXCI6IFwiVmFuY291dmVyLCBCQywgQ0FcIixcclxuXHRcdFwic29jaWFsc1wiOlxyXG5cdFx0W1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJuYW1lXCI6IFwiR2l0SHViXCIsXHJcblx0XHRcdFx0XCJsaW5rXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2dhcnl5YXVcIixcclxuXHRcdFx0XHRcImxpbmtUZXh0XCI6IFwiZ2l0aHViLmNvbS9nYXJ5eWF1XCIsXHJcblx0XHRcdFx0XCJpY29uQ2xhc3Nlc1wiOiBcInptZGkgem1kaS1naXRodWItYWx0XCIsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcIm5hbWVcIjogXCJMaW5rZWRJblwiLFxyXG5cdFx0XHRcdFwibGlua1wiOiBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9nYXJ5eWF1XCIsXHJcblx0XHRcdFx0XCJsaW5rVGV4dFwiOiBcImxpbmtlZGluLmNvbS9pbi9nYXJ5eWF1XCIsXHJcblx0XHRcdFx0XCJpY29uQ2xhc3Nlc1wiOiBcInptZGkgem1kaS1saW5rZWRpblwiLFxyXG5cdFx0XHR9LFxyXG5cdFx0XVxyXG5cdH0sXHJcblx0XCJvdmVydmlld1wiOiBcIkZyb250LWVuZCBkZXZlbG9wZXIgd2l0aCBhIHN0cm9uZyBwYXNzaW9uIGZvciBkZXZlbG9waW5nIGluc3BpcmF0aW9uYWwgd2ViIGFwcGxpY2F0aW9ucy4gRXhwZXJpZW5jZSBpbiBkaWZmZXJlbnQgdHlwZXMgb2YgbGFuZ3VhZ2VzIGFuZCBmcmFtZXdvcmtzIHdpdGggcXVpY2sgbGVhcm5pbmcgY2FwYWJpbGl0aWVzIHRvIGFkYXB0IGluIGRpZmZlcmVudCBwcm9qZWN0IHJlcXVpcmVtZW50cy4gRmxleGlibGUgaW4gZGlmZmVyZW50IHdvcmtpbmcgZW52aXJvbm1lbnRzLCBoYXZpbmcgd29ya2VkIGVmZmVjdGl2ZWx5IGJvdGggaW5kZXBlbmRlbnRseSBhbmQgYXMgYSB0ZWFtIGluIGFuIGFnaWxlIGRldmVsb3BtZW50IHByb2Nlc3MuIFVzZXMgc2tpbGxzZXRzIGluIHVzZXIgZXhwZXJpZW5jZSBkZXNpZ24sIHF1YWxpdHkgYXNzdXJhbmNlLCBhbmQgc29mdHdhcmUgZGV2ZWxvcG1lbnQgb250byBlYWNoIHByb2plY3Qgd2l0aCB0aGUgb2JqZWN0aXZlIG9mIGRlbGl2ZXJpbmcgaGlnaCBxdWFsaXR5IHByb2R1Y3RzLlwiLFxyXG5cdFwidGVjaG5pY2FsUHJvZmlsZVwiOlxyXG5cdFtcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiTGFuZ3VhZ2VzXCIsXHJcblx0XHRcdFwiaXRlbXNcIjpcclxuXHRcdFx0W1xyXG5cdFx0XHRcdFwiSmF2YVNjcmlwdFwiLFxyXG5cdFx0XHRcdFwiSFRNTDVcIixcclxuXHRcdFx0XHRcIkNTUzNcIixcclxuXHRcdFx0XHRcIkFKQVhcIixcclxuXHRcdFx0XHRcIlNDU1NcIixcclxuXHRcdFx0XHRcIlB5dGhvblwiLFxyXG5cdFx0XHRcdFwiUEhQXCIsXHJcblx0XHRcdFx0XCJTUUxcIixcclxuXHRcdFx0XHRcIkpTT05cIixcclxuXHRcdFx0XSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcIkZyYW1ld29ya3NcIixcclxuXHRcdFx0XCJpdGVtc1wiOlxyXG5cdFx0XHRbXHJcblx0XHRcdFx0XCJBbmd1bGFySlNcIixcclxuXHRcdFx0XHRcIlJlYWN0XCIsXHJcblx0XHRcdFx0XCJqUXVlcnlcIixcclxuXHRcdFx0XHRcIkRqYW5nb1wiLFxyXG5cdFx0XHRcdFwiTGFyYXZlbFwiLFxyXG5cdFx0XHRcdFwiQm9vdHN0cmFwXCIsXHJcblx0XHRcdFx0XCJHdWxwXCIsXHJcblx0XHRcdFx0XCJOb2RlSlNcIixcclxuXHRcdFx0XSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcIlZlcnNpb24gQ29udHJvbFwiLFxyXG5cdFx0XHRcIml0ZW1zXCI6XHJcblx0XHRcdFtcclxuXHRcdFx0XHRcIkdpdCAoR2l0TGFiLCBHaXRIdWIpXCIsXHJcblx0XHRcdFx0XCJTdWJ2ZXJzaW9uIChUb3J0b2lzZVNWTilcIixcclxuXHRcdFx0XSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcIlByb2plY3QgVG9vbHNcIixcclxuXHRcdFx0XCJpdGVtc1wiOlxyXG5cdFx0XHRbXHJcblx0XHRcdFx0XCJDb25mbHVlbmNlXCIsXHJcblx0XHRcdFx0XCJKSVJBXCIsXHJcblx0XHRcdFx0XCJHaXRMYWJcIixcclxuXHRcdFx0XHRcIk1hbnRpc1wiLFxyXG5cdFx0XHRcdFwiUmV2aWV3IEJvYXJkXCIsXHJcblx0XHRcdF0sXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJEZXNpZ24gVG9vbHNcIixcclxuXHRcdFx0XCJpdGVtc1wiOlxyXG5cdFx0XHRbXHJcblx0XHRcdFx0XCJBZG9iZSBQaG90b3Nob3BcIixcclxuXHRcdFx0XHRcIklsbHVzdHJhdG9yXCIsXHJcblx0XHRcdFx0XCJEcmVhbXdlYXZlclwiLFxyXG5cdFx0XHRcdFwiUHJlbWllcmUgUHJvXCIsXHJcblx0XHRcdFx0XCJteUJhbHNhbWlxXCIsXHJcblx0XHRcdF0sXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJNZXRob2RvbG9naWVzXCIsXHJcblx0XHRcdFwiaXRlbXNcIjpcclxuXHRcdFx0W1xyXG5cdFx0XHRcdFwiQWdpbGVcIixcclxuXHRcdFx0XHRcIldhdGVyZmFsbFwiLFxyXG5cdFx0XHRcdFwiU2NydW1cIixcclxuXHRcdFx0XHRcIlVuaXQgVGVzdFwiLFxyXG5cdFx0XHRcdFwiUmVzcG9uc2l2ZSBEZXNpZ25cIixcclxuXHRcdFx0XSxcclxuXHRcdH0sXHJcblx0XSxcclxuXHRcIndvcmtFeHBlcmllbmNlXCI6XHJcblx0W1xyXG5cdFx0e1xyXG5cdFx0XHRcInBvc2l0aW9uXCI6IFwiSnVuaW9yIFNvZnR3YXJlIERldmVsb3BlclwiLFxyXG5cdFx0XHRcImNvbXBhbnlcIjogXCJESFggTWVkaWFcIixcclxuXHRcdFx0XCJsb2NhdGlvblwiOiBcIlZhbmNvdXZlciwgQkMsIENhbmFkYVwiLFxyXG5cdFx0XHRcInRpbWVcIjogXCJNYXIgMjAxNCAtIEN1cnJlbnRcIixcclxuXHRcdFx0XCJkZXNjcmlwdGlvblwiOiBcIkRldmVsb3AgbmV3IHdlYiBhcHBsaWNhdGlvbnMgZnJvbSByZXF1aXJlbWVudHMgZ2F0aGVyaW5nLCBzcHJpbnQgcGxhbm5pbmcsIGFnaWxlIGRldmVsb3BtZW50LCByb2xsb3V0IHRvIHN5c3RlbSBtYWludGVuYW5jZSB0byBwcm92aWRlIHRoZSBzdHVkaW8gd2l0aCB1bmlxdWVseSBidWlsdCBzeXN0ZW1zIHRvIHN1aXQgdGhlIG5lZWRzIG9mIG1hcmtldGluZywgaW50ZXJhY3RpdmUgYW5kIHBpcGVsaW5lLiBDb2xsYWJvcmF0ZSB3aXRoIGEgdGVhbSBvZiA0IC0gNyBkZXZlbG9wZXJzIHRvIGRlc2lnbiBhbmQgYXJjaGl0ZWN0IHRoZSBzdHJ1Y3R1cmUgb2YgdGhlIHByb2plY3RzIHRvIGRldGVybWluZSB0aGUgb3B0aW1hbCBkZXZlbG9wbWVudCBhcHByb2FjaCBhbmQgYmVzdCB0ZWNobm9sb2dpZXMgdG8gdXNlLiBSZXNlYXJjaCBvbiBleHRlcm5hbCBzdHVkaW8gbWFuYWdlbWVudCBzeXN0ZW0sIFNob3RndW4sIHRvIGFzc2VzcyB0aGUgY29tcGF0aWJpbGl0eSBvZiBTaG90Z3VuIHdpdGggZGFpbHkgd29ya2Zsb3cgb2YgdGhlIHN0dWRpby4gRGVzaWduIGN1c3RvbSBzeXN0ZW0sIEFydGVtaXMsIHRvIGJlIHVzZWQgb24gdG9wIG9mIFNob3RndW4gaW4gb3JkZXIgdG8gZW5oYW5jZSB0aGUgZmVhdHVyZXMgcHJvdmlkZWQgYW5kIHRhaWxvciBpdCB0byB0aGUgbmVlZHMgb2YgdGhlIHVzZXJzLiBEZXZlbG9wIGFuZCBpbXBsZW1lbnQgZGlmZmVyZW50IEFQSXMgdG8gdXBncmFkZSBsZWdhY3kgc3lzdGVtcyB0byB1c2UgYSB1bmlmaWVkIGRhdGFiYXNlIHdoaWxlIHBsYW5uaW5nIGZvciBmdXR1cmUgc3lzdGVtcyB0byBwcm92aWRlIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IHdpdGggdGhlIHBhc3Qgc3lzdGVtcy5cIixcclxuXHRcdFx0XCJwb2ludHNcIjpcclxuXHRcdFx0W1xyXG5cdFx0XHRcdFwiRGV2ZWxvcCBuZXcgd2ViIGFwcGxpY2F0aW9ucyBmcm9tIHJlcXVpcmVtZW50cyBnYXRoZXJpbmcsIHNwcmludCBwbGFubmluZywgYWdpbGUgZGV2ZWxvcG1lbnQsIHJvbGxvdXQgdG8gc3lzdGVtIG1haW50ZW5hbmNlIHRvIHByb3ZpZGUgdGhlIHN0dWRpbyB3aXRoIHVuaXF1ZWx5IGJ1aWx0IHN5c3RlbXMgdG8gc3VpdCB0aGUgbmVlZHMgb2YgbWFya2V0aW5nLCBpbnRlcmFjdGl2ZSBhbmQgcGlwZWxpbmUuXCIsXHJcblx0XHRcdFx0XCJDb2xsYWJvcmF0ZSB3aXRoIGEgdGVhbSBvZiA0IC0gNyBkZXZlbG9wZXJzIHRvIGRlc2lnbiBhbmQgYXJjaGl0ZWN0IHRoZSBzdHJ1Y3R1cmUgb2YgdGhlIHByb2plY3RzIHRvIGRldGVybWluZSB0aGUgb3B0aW1hbCBkZXZlbG9wbWVudCBhcHByb2FjaCBhbmQgYmVzdCB0ZWNobm9sb2dpZXMgdG8gdXNlLlwiLFxyXG5cdFx0XHRcdFwiUmVzZWFyY2ggb24gZXh0ZXJuYWwgc3R1ZGlvIG1hbmFnZW1lbnQgc3lzdGVtLCBTaG90Z3VuLCB0byBhc3Nlc3MgdGhlIGNvbXBhdGliaWxpdHkgb2YgU2hvdGd1biB3aXRoIGRhaWx5IHdvcmtmbG93IG9mIHRoZSBzdHVkaW8uIERlc2lnbiBjdXN0b20gc3lzdGVtLCBBcnRlbWlzLCB0byBiZSB1c2VkIG9uIHRvcCBvZiBTaG90Z3VuIGluIG9yZGVyIHRvIGVuaGFuY2UgdGhlIGZlYXR1cmVzIHByb3ZpZGVkIGFuZCB0YWlsb3IgaXQgdG8gdGhlIG5lZWRzIG9mIHRoZSB1c2Vycy5cIixcclxuXHRcdFx0XHRcIkRldmVsb3AgYW5kIGltcGxlbWVudCBkaWZmZXJlbnQgQVBJcyB0byB1cGdyYWRlIGxlZ2FjeSBzeXN0ZW1zIHRvIHVzZSBhIHVuaWZpZWQgZGF0YWJhc2Ugd2hpbGUgcGxhbm5pbmcgZm9yIGZ1dHVyZSBzeXN0ZW1zIHRvIHByb3ZpZGUgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgd2l0aCB0aGUgcGFzdCBzeXN0ZW1zLlwiLFxyXG5cdFx0XHRdXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcInBvc2l0aW9uXCI6IFwiSnVuaW9yIEFwcGxpY2F0aW9uIERldmVsb3BlciBDby1vcFwiLFxyXG5cdFx0XHRcImNvbXBhbnlcIjogXCJaRSBQb3dlckdyb3VwIEluYy5cIixcclxuXHRcdFx0XCJsb2NhdGlvblwiOiBcIlJpY2htb25kLCBCQywgQ2FuYWRhXCIsXHJcblx0XHRcdFwidGltZVwiOiBcIkphbiAyMDEzIC0gTWF5IDIwMTNcIixcclxuXHRcdFx0XCJkZXNjcmlwdGlvblwiOiBcIkRldmVsb3BlZCBhIEphdmFTY3JpcHQgcGx1Z2luIGZvciBTZWxlbml1bSBJREUgdG8gcHJvdmlkZSBRQSB0ZWFtIHdpdGggYSBiZXR0ZXIgdW5kZXJzdGFuZGluZyBvZiBob3cgdG8gY3JlYXRlIGFuZCBtYW5hZ2UgU2VsZW5pdW0gYXV0b21hdGlvbiBzY3JpcHRzLiBEZXZlbG9wZWQgb3ZlciAzMDAgYXV0b21hdGlvbiB0ZXN0IHNjcmlwdHMgdXNpbmcgU2VsZW5pdW0gSURFIGFuZCBYUEFUSCwgYWxsb3dpbmcgUUEgdG8gcnVuIHNjcmlwdHMgZHVyaW5nIGRhaWx5IGltcGxlbWVudGF0aW9ucyB0byBlbnN1cmUgcXVhbGl0eSBvdmVyIGFkZGVkIG9yIG1vZGlmaWVkIGZ1bmN0aW9uYWxpdHkgb2YgdGhlIHByb2plY3QuXCIsXHJcblx0XHRcdFwicG9pbnRzXCI6XHJcblx0XHRcdFtcclxuXHRcdFx0XHRcIkRldmVsb3BlZCBhIEphdmFTY3JpcHQgcGx1Z2luIGZvciBTZWxlbml1bSBJREUgdG8gcHJvdmlkZSBRQSB0ZWFtIHdpdGggYSBiZXR0ZXIgdW5kZXJzdGFuZGluZyBvZiBob3cgdG8gY3JlYXRlIGFuZCBtYW5hZ2UgU2VsZW5pdW0gYXV0b21hdGlvbiBzY3JpcHRzLlwiLFxyXG5cdFx0XHRcdFwiRGV2ZWxvcGVkIG92ZXIgMzAwIGF1dG9tYXRpb24gdGVzdCBzY3JpcHRzIHVzaW5nIFNlbGVuaXVtIElERSBhbmQgWFBBVEgsIGFsbG93aW5nIFFBIHRvIHJ1biBzY3JpcHRzIGR1cmluZyBkYWlseSBpbXBsZW1lbnRhdGlvbnMgdG8gZW5zdXJlIHF1YWxpdHkgb3ZlciBhZGRlZCBvciBtb2RpZmllZCBmdW5jdGlvbmFsaXR5IG9mIHRoZSBwcm9qZWN0LlwiLFxyXG5cdFx0XHRdXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcInBvc2l0aW9uXCI6IFwiUXVhbGl0eSBBc3N1cmFuY2UgVGVzdGVyXCIsXHJcblx0XHRcdFwiY29tcGFueVwiOiBcIkVsZWN0cm9uaWMgQXJ0cyBDYW5hZGFcIixcclxuXHRcdFx0XCJsb2NhdGlvblwiOiBcIkJ1cm5hYnksIEJDLCBDYW5hZGFcIixcclxuXHRcdFx0XCJ0aW1lXCI6IFwiSnVuIDIwMDggLSBTZXAgMjAxMVwiLFxyXG5cdFx0XHRcImRlc2NyaXB0aW9uXCI6IFwiVGVzdGVkIGdhbWluZyBzb2Z0d2FyZSBmb3IgTmludGVuZG8gV2lpLCBYYm94IDM2MCBhbmQgUGxheVN0YXRpb24gMyB0byBlbnN1cmUgdGhlIHF1YWxpdHkgb2YgdGhlIGNvbXBhbnkncyBwcm9kdWN0LCBhbGxvd2luZyBzdWNjZXNzZnVsIGZpcnN0LXRpbWUgcGFzc2VzIG9uIHNldmVyYWwgZmlyc3QtcGFydHkgY2VydGlmaWNhdGlvbnMuIFNwZWNpYWxpemVkIGluIE5pbnRlbmRvIGNvbXBsaWFuY2UgYW5kIGNyZWF0ZWQgY29tcGxpYW5jZSB0ZXN0IGNhc2VzIGZvciBFQSBTUE9SVFMgQWN0aXZlIGFuZCBFQSBTUE9SVFMgQWN0aXZlIE1vcmUgV29ya291dHMgdXNpbmcgRGV2VGVzdCB0byBndWlkZSBjb21wbGlhbmNlIHRlc3RlcnMgZHVyaW5nIGRldmVsb3BtZW50IHByb2Nlc3MuIENvbGxhYm9yYXRlZCB3aXRoIHByb2plY3QgbWFuYWdlcnMsIHRlYW0gbGVhZHMgYW5kIG90aGVyIHRlc3RlcnMgdG8gYW5hbHl6ZSB0aGUgY292ZXJhZ2UgYW5kIHJpc2tzIG9mIGVhY2ggdGVzdCBzdWl0ZSwgZW5zdXJpbmcgdGhhdCB0aGUgcmVxdWlyZW1lbnRzIG9mIHRoZSBzb2Z0d2FyZSB3YXMgbWV0IHdoaWxlIHZhbGlkYXRpbmcgdGhlIHN0YWJpbGl0eSBvZiBlYWNoIGJ1aWxkIGFzIHRoZSBwcm9qZWN0IHByb2dyZXNzZWQuXCIsXHJcblx0XHRcdFwicG9pbnRzXCI6XHJcblx0XHRcdFtcclxuXHRcdFx0XHRcIlRlc3RlZCBnYW1pbmcgc29mdHdhcmUgZm9yIE5pbnRlbmRvIFdpaSwgWGJveCAzNjAgYW5kIFBsYXlTdGF0aW9uIDMgdG8gZW5zdXJlIHRoZSBxdWFsaXR5IG9mIHRoZSBjb21wYW55J3MgcHJvZHVjdCwgYWxsb3dpbmcgc3VjY2Vzc2Z1bCBmaXJzdC10aW1lIHBhc3NlcyBvbiBzZXZlcmFsIGZpcnN0LXBhcnR5IGNlcnRpZmljYXRpb25zLlwiLFxyXG5cdFx0XHRcdFwiU3BlY2lhbGl6ZWQgaW4gTmludGVuZG8gY29tcGxpYW5jZSBhbmQgY3JlYXRlZCBjb21wbGlhbmNlIHRlc3QgY2FzZXMgZm9yIEVBIFNQT1JUUyBBY3RpdmUgYW5kIEVBIFNQT1JUUyBBY3RpdmUgTW9yZSBXb3Jrb3V0cyB1c2luZyBEZXZUZXN0IHRvIGd1aWRlIGNvbXBsaWFuY2UgdGVzdGVycyBkdXJpbmcgZGV2ZWxvcG1lbnQgcHJvY2Vzcy5cIixcclxuXHRcdFx0XHRcIkNvbGxhYm9yYXRlZCB3aXRoIHByb2plY3QgbWFuYWdlcnMsIHRlYW0gbGVhZHMgYW5kIG90aGVyIHRlc3RlcnMgdG8gYW5hbHl6ZSB0aGUgY292ZXJhZ2UgYW5kIHJpc2tzIG9mIGVhY2ggdGVzdCBzdWl0ZSwgZW5zdXJpbmcgdGhhdCB0aGUgcmVxdWlyZW1lbnRzIG9mIHRoZSBzb2Z0d2FyZSB3YXMgbWV0IHdoaWxlIHZhbGlkYXRpbmcgdGhlIHN0YWJpbGl0eSBvZiBlYWNoIGJ1aWxkIGFzIHRoZSBwcm9qZWN0IHByb2dyZXNzZWQuXCIsXHJcblx0XHRcdF1cclxuXHRcdH0sXHJcblx0XSxcclxuXHRcImVkdWNhdGlvblwiOlxyXG5cdFtcclxuXHRcdHtcclxuXHRcdFx0XCJzY2hvb2xcIjogXCJTaW1vbiBGcmFzZXIgVW5pdmVyc2l0eVwiLFxyXG5cdFx0XHRcInByb2dyYW1cIjogXCJNYWpvciBpbiBDb21wdXRpbmcgU2NpZW5jZVwiLFxyXG5cdFx0XHRcImZhY3VsdHlcIjogXCJCYWNoZWxvciBvZiBTY2llbmNlXCIsXHJcblx0XHRcdFwidGltZVwiOiBcIkRlYyAyMDEzXCIsXHJcblx0XHRcdFwiZGVzY3JpcHRpb25cIjogXCJGb2N1c2VkIG9uIE9iamVjdC1PcmllbnRlZCBQcm9ncmFtbWluZyBhbmQgb3RoZXIgc29mdHdhcmUgZGV2ZWxvcG1lbnQgY29uY2VwdHMgc3VjaCBhcyBkYXRhYmFzZSBkZXNpZ24sIG5ldHdvcmtpbmcgYW5kIHNvZnR3YXJlIGVuZ2luZWVyaW5nLlwiLFxyXG5cdFx0fVxyXG5cdF0sXHJcblx0XCJwcm9qZWN0c1wiOlxyXG5cdFtcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiUHJvZHVjdGlvbiBNYW5hZ2VtZW50IFN5c3RlbVwiLFxyXG5cdFx0XHRcImxvY2F0aW9uXCI6IFwiREhYIE1lZGlhXCIsXHJcblx0XHRcdFwicm9sZXNcIjogW1wiU2NydW0gTWFzdGVyXCIsIFwiU29mdHdhcmUgRGV2ZWxvcGVyXCIsIFwiVVggRGVzaWduZXJcIl0sXHJcblx0XHRcdFwic3RhY2tcIjogW1wiRGphbmdvLCBBbmd1bGFySlMsIEhUTUwsIFNDU1MsIE15U1FMXCJdLFxyXG5cdFx0XHRcImRlc2NyaXB0aW9uXCI6IFwiRGVzaWduZWQgYW5kIGRldmVsb3BlZCB0YXNrIG1hbmFnZW1lbnQgc3lzdGVtIGFuZCBzaG93IGJyZWFrZG93biBzeXN0ZW0gYWxvbmdzaWRlIGV4dGVybmFsIHN5c3RlbSwgU2hvdGd1biwgdG8gaW50ZWdyYXRlIFNob3RndW4gaW50byBzdHVkaW8gcGlwZWxpbmUgd2hpbGUgbWFpbnRhaW5pbmcgbGVnYWN5IHN5c3RlbSBmZWF0dXJlcy4gRGV2ZWxvcGVkIGFuIEFQSSB0byBwcm92aWRlIGNvbW11bmljYXRpb24gYmV0d2VlbiBTaG90Z3VuIGFuZCBsZWdhY3kgc3lzdGVtLCBhbGxvd2luZyBjb3Jwb3JhdGUgZGVwYXJ0bWVudHMgdG8gY29udGludWUgdXNpbmcgbGVnYWN5IHN5c3RlbSB0byBlbnRlciB1c2VyIGluZm9ybWF0aW9uIHdoaWxlIGVuc3VyZSBpbmZvcm1hdGlvbiBpcyBwYXNzZWQgdG8gU2hvdGd1bi4gTGVkIGEgdGVhbSBvZiBmaXZlIGRldmVsb3BlcnMgaW4gYW4gQWdpbGUgc2NydW0gZW52aXJvbm1lbnQsIGFsbG93aW5nIHRhc2tzIHRvIGJlIGNvbXBsZXRlZCB3aXRoaW4gZGVhZGxpbmVzIHdoaWxlIHJlcG9ydGluZyB0byBIZWFkIG9mIFNvZnR3YXJlIERlcGFydG1lbnQgb24gc2NoZWR1bGUgYWRqdXN0bWVudHMuXCIsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJNdXNlIENsaWVudCBSZXZpZXdcIixcclxuXHRcdFx0XCJsb2NhdGlvblwiOiBcIkRIWCBNZWRpYVwiLFxyXG5cdFx0XHRcInJvbGVzXCI6IFtcIlNvZnR3YXJlIERldmVsb3BlclwiXSxcclxuXHRcdFx0XCJzdGFja1wiOiBbXCJEamFuZ28sIEFuZ3VsYXJKUywgSFRNTCwgU0NTUywgTXlTUUxcIl0sXHJcblx0XHRcdFwiZGVzY3JpcHRpb25cIjogXCJEZXZlbG9wZWQgYW4gZXh0ZXJuYWwgY2xpZW50IHJldmlldyBzeXN0ZW0gY29ubmVjdGVkIHRvIHN0dWRpbyB0YXNrIG1hbmFnZW1lbnQgc3lzdGVtIHRocm91Z2ggYW4gQVBJLCBhbGxvd2luZyBjb29yZGluYXRvcnMgdG8gc2VuZCBjb21wbGV0ZWQgYXNzZXRzIGFuZCBzaG90cyBmb3IgY2xpZW50IHJldmlldy4gV29ya2VkIGluIGEgdGVhbSBvZiBmaXZlIGRldmVsb3BlcnMgYW5kIGEgZGVzaWduZXIgaW4gYSBzcHJpbnQgZW52aXJvbm1lbnQgdG8gcGxhbiBhbmQgZGVzaWduIHRoZSBkZXZlbG9wbWVudCBhcmNoaXRlY3R1cmUgZm9yIHRoZSBhcHBsaWNhdGlvbiBlbnN1cmUgYWxsIHJlcXVpcmVtZW50cyB3ZXJlIGNvbnNpZGVyZWQgaW4gdGhlIGRlc2lnbi5cIixcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcIk5lcmQgQ29ycHMgUHJvZHVjdGlvbiBTaXRlc1wiLFxyXG5cdFx0XHRcImxvY2F0aW9uXCI6IFwiREhYIE1lZGlhXCIsXHJcblx0XHRcdFwicm9sZXNcIjogW1wiU29mdHdhcmUgRGV2ZWxvcGVyXCJdLFxyXG5cdFx0XHRcInN0YWNrXCI6IFtcIkxhcmF2ZWxcIiwgXCJqUXVlcnlcIiwgXCJIVE1MXCIsIFwiU0NTU1wiLCBcIk15U1FMXCJdLFxyXG5cdFx0XHRcImRlc2NyaXB0aW9uXCI6IFwiRGVzaWduIGFuZCAgZGV2ZWxvcGVkIGN1c3RvbSBDb250ZW50IE1hbmFnZW1lbnQgU3lzdGVtIGZvciBzdHVkaW8gcHJvZHVjdGlvbiBzaXRlcywgcHJvdmlkaW5nIGEgd2F5IHRvIHBlcmZvcm0gZWZmaWNpZW50IHVwZGF0ZXMgdG8gd2Vic2l0ZSBjb250ZW50cyBpbiB0aGUgZnV0dXJlLiBEZXZlbG9wZWQgbXVsdGlwbGUgcHJvZHVjdGlvbiB3ZWJzaXRlcyBzdWNoIGFzIGthdGVhbmRtaW1taW0uY2Egd2l0aCBtdWx0aS1icm93c2VyIHN1cHBvcnQgYW5kIHJlc3BvbnNpdmUgZGVzaWduIHRvIHByb3ZpZGUga2lkcyB3aXRoIGEgZnVuIGFuZCBpbnRlcmFjdGl2ZSBsb2NhdGlvbiB0byBsZWFybiBtb3JlIGFib3V0IHRoZSBzaG93IGFuZCByZWNlaXZlIHVwZGF0ZXMuXCIsXHJcblx0XHR9XHJcblx0XSxcclxuXHRcImNvdmVyTGV0dGVyXCI6IHtcclxuXHRcdFwiZGF0ZVwiOiBcIk1hcmNoIDI3dGgsIDIwMTZcIixcclxuXHRcdFwiY29udGVudFwiOiBcIkRlYXIgQmxpenphcmQsXFxuTXkgbmFtZSBpcyBHYXJ5LCBhIGZyb250IGVuZCBkZXZlbG9wZXIgd2hvIGlzIHBhc3Npb25hdGUgYWJvdXQgd2hhdCBJIGZpbmQgYXJlIHRoZSB0aHJlZSBrZXkgZWxlbWVudHMgdG8gYW4gYW1hemluZyBhcHBsaWNhdGlvbjogRGV2ZWxvcG1lbnQsIFVzZXIgRXhwZXJpZW5jZSBhbmQgUXVhbGl0eSBBc3N1cmFuY2UuIEkgaGF2ZSBiZWVuIGEgaGFyZGNvcmUgZ2FtZXIgZnJvbSBhcyBmYXIgYmFjayBhcyBwbGF5aW5nIERyLiBNYXJpbyBvbiB0aGUgQ2xhc3NpYyBHYW1lQm95IGRldmljZS4gR3Jvd2luZyB1cCwgSSd2ZSBhbHdheXMgbG92ZWQgdGhlIGV4cGVyaWVuY2VzIHRoYXQgYSBtdWx0aXBsYXllciBjb21wZXRpdGl2ZSBnYW1lIGNhbiBnaXZlIHRvIGEgZ2FtZXIsIGFuZCBvbmUgb2YgdGhlIHRoaW5ncyB0aGF0IHNwYXJrZWQgbXkgaW50ZXJlc3Qgd2l0aCBnYW1lcyB3YXMgdGhlIGFwcGVhbCBvZiB0aGVpciB3ZWJzaXRlLlxcbkluIGV2ZXJ5IGpvYiB0aGF0IEkndmUgaGFkLCBJJ3ZlIGFsd2F5cyBkZXZlbG9wIGEgcGFzc2lvbiB0byB3aGF0IEknbSB3b3JraW5nIGZvciwgZnJvbSB0aGUgcGVvcGxlIEkgd29yayB3aXRoIG9uIGEgZGF5LXRvLWRheSBiYXNpcyB0byB0aGUgd2hvbGUgc3R1ZGlvIGl0c2VsZi4gU3VycHJpc2luZ2x5LCBteSBwYXNzaW9uIGdyb3dzIG5vIG1hdHRlciB3aGF0IHR5cGUgb2Ygc3R1ZGlvIEkgd29yayBmb3IuIFN0YXJ0aW5nIGF0IEEmVywgYSBmYXN0IGZvb2QgZnJhbmNoaXNlLCB0byBFbGVjdHJvbmljIEFydHMsIGEgZ2FtaW5nIHN0dWRpbywgYW5kIG5vdyBESFggTWVkaWEsIGFuIGFuaW1hdGlvbiBzdHVkaW8uIEJ1dCB0aGVuLCBhcyBJIHdhcyBpbiBzZWFyY2ggb2Ygb3RoZXIgcGxhY2VzIHRvIGRldmVsb3AgbXkgZXhwZXJpZW5jZSwgc29tZXRoaW5nIGNsaWNrZWQ6IEkgd2FudGVkIHRvIG1ha2UgZnJvbnQgZW5kIHdlYnNpdGVzIGZvciBnYW1lcywgdG8gYnJpbmcgdGhlIHNhbWUgc3BhcmsgdGhhdCBJIGhhZCBleHBlcmllbmNlZCBmcm9tIHByZXZpb3VzIGRldmVsb3BlcnMgdG8gYSBuZXcgc2V0IG9mIGF1ZGllbmNlLlxcbkkgYW0gYSBDb21wdXRpbmcgU2NpZW5jZSBncmFkdWF0ZSBmcm9tIFNpbW9uIEZyYXNlciBVbml2ZXJzaXR5LCB3aXRoIGV4cGVyaWVuY2UgaW4gZnJvbnQgZW5kIGRldmVsb3BtZW50LCB1c2VyIGV4cGVyaWVuY2UgZGVzaWduIGFuZCBxdWFsaXR5IGFzc3VyYW5jZS4gSSd2ZSBhbHdheXMgc3Rvb2Qgb3V0IHRvIG15IGNvd29ya2VycyBhcyBzb21lb25lIHdobyBjYXJlcyBhIGxvdCBhYm91dCB0aGUgcHJvamVjdHMsIGJ1dCBvbiB0b3Agb2YgdGhhdCwgc29tZW9uZSB3aG8gY2FyZXMgYWJvdXQgdGhlIHVzZXJzIG9mIHRoZSBhcHBsaWNhdGlvbnMuIEFsdGhvdWdoIEkgYW0gc3RpbGwgYSBqdW5pb3Igc29mdHdhcmUgZGV2ZWxvcGVyLCBJIGNvbnN0YW50bHkgdGhyaXZlIHRvIGxlYXJuIG1vcmUsIGV4cGVyaWVuY2UgbW9yZSwgdG8gYnVpbGQgb24gdGhlIGZvdW5kYXRpb24gSSd2ZSBhbHJlYWR5IGJ1aWx0IGZyb20gdGhlIHBhc3QuIEkgc3Ryb25nbHkgYmVsaWV2ZSB0aGF0IGZvciBkZXZlbG9wZXJzIHRvIGdyb3csIHRoZXkgbXVzdCBoYXZlIHRlYW0gbWVtYmVycyB0aGF0IHRoZXkgY2FuIHRydXN0LCBzb21lb25lIHRoZXkgY2FuIGxlYXJuIGZyb20gYW5kIGFsc28gaGVscDogY29sbGFib3JhdGlvbi4gSXQgaXMgdGhyb3VnaCB0aGlzIHR5cGUgb2YgY29sbGFiYXRpb24gd2l0aCBteSBjdXJyZW50IHRlYW1tYXRlcyB0aGF0IGhhcyBhbGxvd3MgbWUgdG8gZXhwZXJpZW5jZSB0aGUgZGVzaWduIG9mIGRldmVsb3BtZW50IHNvbHV0aW9ucyBmcm9tIGRlc2lnbiwgdG8gaW50ZWdyYXRpb24sIHRvIHJvbGxvdXQuXFxuVGhlIGN1bHR1cmUgb2YgYSBjb21wYW55IGlzIHNvbWV0aGluZyB0aGF0J3MgZXh0cmVtZWx5IGltcG9ydGFudCB0byBtZSwgYXMgSSBhaW0gdG8gYmVjb21lIHBhcnQgb2YgdGhlIGN1bHR1cmUuIEp1c3QgYXMgbXkgbG92ZSBvZiBnYW1lcyBhbmQgdGhlIGNvbnRlbnQgdGhhdCB0aGV5IGJyaW5nLCBJIGJlbGlldmUgdGhhdCBhIGNvbGxhYm9yYXRpdmUgdGVhbSB0aGF0IGNoYWxsZW5nZXMgZWFjaCBvdGhlciBidWlsZHMgYSBsb3Qgb2YgZ3Jvd3RoIGluIGVhY2ggaW5kaXZpZHVhbCBhbmQgdGhlIHRlYW0gb3ZlcmFsbC4gSSBiZWxpZXZlIHRoYXQgQmxpenphcmQgaXMgYnVpbHQgd2l0aCB0aGF0IHR5cGUgb2YgaWRlYSwgYW5kIEkgc3Ryb25nbHkgZmVlbCB0aGF0IEkgd291bGQgYmUgYSBncmVhdCBhZGRpdGlvbiBhcyBhIEJsaXp6YXJkIGZyb250IGVuZCBkZXZlbG9wZXIuIFRoYW5rIHlvdSBmb3IgeW91ciB0aW1lIGFuZCBjb25zaWRlcmF0aW9uLCBhbmQgSSBob3BlIHRvIGhlYXIgZnJvbSB5b3Ugc29vbi5cIlxyXG5cdH1cclxufVxyXG4iXX0=
