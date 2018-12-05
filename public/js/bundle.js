(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
				"JavaScript ES6",
				"HTML5",
				"CSS3",
				"AJAX",
				"SASS",
				"Python",
				"PHP",
				// "SQL",
				// "JSON",
			],
		},
		{
			"name": "Frameworks",
			"items":
			[
				"React",
				"Redux",
				"AngularJS",
				"jQuery",
				"Django",
				"Laravel",
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
				"GitLab",
				"GitHub",
				"Confluence",
				"JIRA",
			],
		},
		{
			"name": "Design Tools",
			"items":
			[
				"Sketch",
				"InVision",
				"Adobe Photoshop",
				"Illustrator",
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
			"position": "Senior Frontend Developer",
			"company": "Thinkingbox",
			"location": "Vancouver, BC, Canada",
			"time": "April 2018 - Current",
			"description": "Research and develop prototypes to use frameworks in unique ways in order to test the limitations and learn more about the creative possibilities. Develop and solutioning creative intriguing websites for clients to modernize the technology and style that the client uses for advertising. Adapt and learn different frameworks such as FacebookAR and Prismic CMS to provide each project with the ideal stack based on the requirements of the project.",
			"points":
			[
				"Research and develop prototypes to use frameworks in unique ways in order to test the limitations and learn more about the creative possibilities.",
				"Develop and solutioning creative intriguing websites for clients to modernize the technology and style that the client uses for advertising.",
				"Adapt and learn different frameworks such as FacebookAR and Prismic CMS to provide each project with the ideal stack based on the requirements of the project.",
			]
		},
		{
			"position": "Intermediate Frontend Developer/Scrum Master",
			"company": "Appnovation Technologies",
			"location": "Vancouver, BC, Canada",
			"time": "May 2016 - March 2018",
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
		// {
		// 	"position": "Quality Assurance Tester",
		// 	"company": "Electronic Arts Canada",
		// 	"location": "Burnaby, BC, Canada",
		// 	"time": "Jun 2008 - Sep 2011",
		// 	"description": "Tested gaming software for Nintendo Wii, Xbox 360 and PlayStation 3 to ensure the quality of the company's product, allowing successful first-time passes on several first-party certifications. Specialized in Nintendo compliance and created compliance test cases for EA SPORTS Active and EA SPORTS Active More Workouts using DevTest to guide compliance testers during development process. Collaborated with project managers, team leads and other testers to analyze the coverage and risks of each test suite, ensuring that the requirements of the software was met while validating the stability of each build as the project progressed.",
		// 	"points":
		// 	[
		// 		"Tested gaming software for Nintendo Wii, Xbox 360 and PlayStation 3 to ensure the quality of the company's product, allowing successful first-time passes on several first-party certifications.",
		// 		"Specialized in Nintendo compliance and created compliance test cases for EA SPORTS Active and EA SPORTS Active More Workouts using DevTest to guide compliance testers during development process.",
		// 		"Collaborated with project managers, team leads and other testers to analyze the coverage and risks of each test suite, ensuring that the requirements of the software was met while validating the stability of each build as the project progressed.",
		// 	]
		// },
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
			"name": "Sis Knows Best Facebook Instant Game",
			"location": "Thinkingbox",
			"roles": ["Senior Frontend Developer"],
			"stack": ["Facebook Platform", "GSAP", "Canvas"],
			"description": "Developed a shareable quiz Facebook Instant Game to promote the movie Nobody's Fool. Worked together with an Interactive Developer and creatives to integrate an engaging experience, while also reporting any found issues with the Facebook framework. Used GSAP to create a responsive and engaging experience for users to immerse themselves into the project."
		},
		{
			"name": "Vancouver Aquarium Website Refresh",
			"location": "Thinkingbox",
			"roles": ["Senior Frontend Developer"],
			"stack": ["Concrete5", "Javascript", "LESS"],
			"description": "Researched on variety of CMS to provide client with the best option for their requirements. Worked with a team of four developers to discover the usability and limitations of Concrete5, allowing a smooth development cycle. Developed a reusable block layout using Concrete5 that allows client to add to and restructure the website after hand-off while maintaining a consistent design throughout."
		},
		{
			"name": "Production Management System",
			"location": "DHX Media",
			"roles": ["Scrum Master", "Software Developer", "UX Designer"],
			"stack": ["Django, AngularJS, HTML, SCSS, MySQL"],
			"description": "Designed and developed task management system and show breakdown system alongside external system, Shotgun, to integrate Shotgun into studio pipeline while maintaining legacy system features. Developed an API to provide communication between Shotgun and legacy system, allowing corporate departments to continue using legacy system to enter user information while ensure information is passed to Shotgun. Led a team of five developers in an Agile scrum environment, allowing tasks to be completed within deadlines while reporting to Head of Software Department on schedule adjustments.",
		},
		// {
		// 	"name": "Muse Client Review",
		// 	"location": "DHX Media",
		// 	"roles": ["Software Developer"],
		// 	"stack": ["Django, AngularJS, HTML, SCSS, MySQL"],
		// 	"description": "Developed an external client review system connected to studio task management system through an API, allowing coordinators to send completed assets and shots for client review. Worked in a team of five developers and a designer in a sprint environment to plan and design the development architecture for the application ensure all requirements were considered in the design.",
		// },
		// {
		// 	"name": "Nerd Corps Production Sites",
		// 	"location": "DHX Media",
		// 	"roles": ["Software Developer"],
		// 	"stack": ["Laravel", "jQuery", "HTML", "SCSS", "MySQL"],
		// 	"description": "Design and  developed custom Content Management System for studio production sites, providing a way to perform efficient updates to website contents in the future. Developed multiple production websites such as kateandmimmim.ca with multi-browser support and responsive design to provide kids with a fun and interactive location to learn more about the show and receive updates.",
		// },
	],
	"coverLetter": {
		"content": ""
	}
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9hcHAuanMiLCJwdWJsaWMvcmVzb3VyY2VzL2RhdGEuanNvbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsInZhciBfID0gcmVxdWlyZSgnbG9kYXNoJyk7XHJcbnZhciBhbmd1bGFyID0gcmVxdWlyZSgnYW5ndWxhcicpO1xyXG52YXIgZGF0YSA9IHJlcXVpcmUoJy4vLi4vcHVibGljL3Jlc291cmNlcy9kYXRhLmpzb24nKTtcclxuXHJcblxyXG52YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ1Jlc3VtZVRlbXBsYXRlQXBwJywgW10pO1xyXG5cclxuTGF5b3V0Q29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnXTtcclxuZnVuY3Rpb24gTGF5b3V0Q29udHJvbGxlcigkc2NvcGUpIHtcclxuXHQkc2NvcGUuZGF0YSA9IGRhdGE7XHJcblx0JHNjb3BlLmdldFByb2ZpbGVFbGVtZW50c0Rpc3BsYXkgPSBnZXRQcm9maWxlRWxlbWVudHNEaXNwbGF5O1xyXG5cdCRzY29wZS5nZXRQcm9qZWN0Um9sZXNEaXNwbGF5ID0gZ2V0UHJvamVjdFJvbGVzRGlzcGxheTtcclxuXHQkc2NvcGUuZ2V0UHJvamVjdFN0YWNrRGlzcGxheSA9IGdldFByb2plY3RTdGFja0Rpc3BsYXk7XHJcblx0JHNjb3BlLmdldENvdmVyTGV0dGVyUGllY2VzID0gZ2V0Q292ZXJMZXR0ZXJQaWVjZXM7XHJcblxyXG5cclxuXHRmdW5jdGlvbiBnZXRQcm9maWxlRWxlbWVudHNEaXNwbGF5KHByb2ZpbGUpIHtcclxuXHRcdHJldHVybiBfLmpvaW4ocHJvZmlsZS5pdGVtcywgJywgJyk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBnZXRQcm9qZWN0Um9sZXNEaXNwbGF5KHByb2plY3QpIHtcclxuXHRcdHJldHVybiBfLmpvaW4ocHJvamVjdC5yb2xlcywgJywgJyk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBnZXRQcm9qZWN0U3RhY2tEaXNwbGF5KHByb2plY3QpIHtcclxuXHRcdHJldHVybiBfLmpvaW4ocHJvamVjdC5zdGFjaywgJywgJyk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBnZXRDb3ZlckxldHRlclBpZWNlcygpIHtcclxuXHRcdHZhciBsZXR0ZXIgPSBkYXRhLmNvdmVyTGV0dGVyLmNvbnRlbnQ7XHJcblx0XHR2YXIgcGllY2VzID0gXy5zcGxpdChsZXR0ZXIsICdcXG4nKTtcclxuXHRcdHJldHVybiBwaWVjZXM7XHJcblx0fVxyXG59XHJcblxyXG5hcHAuY29udHJvbGxlcignTGF5b3V0Q29udHJvbGxlcicsIExheW91dENvbnRyb2xsZXIpO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRhbmd1bGFyLmJvb3RzdHJhcChkb2N1bWVudCwgWydSZXN1bWVUZW1wbGF0ZUFwcCddKTtcclxufSk7XHJcblxyXG4iLCJtb2R1bGUuZXhwb3J0cz17XHJcblx0XCJwcm9maWxlSW1hZ2VcIjogXCIuL3B1YmxpYy9yZXNvdXJjZXMvcHJvZmlsZS1waWN0dXJlLnBuZ1wiLFxyXG5cdFwiZmlyc3ROYW1lXCI6IFwiR2FyeSBLLlwiLFxyXG5cdFwibGFzdE5hbWVcIjogXCJZYXVcIixcclxuXHRcIm9jY3VwYXRpb25cIjogXCJEZXZlbG9wZXIuIERlc2lnbmVyLiBRdWFsaXR5IEFzc3VyYW5jZS5cIixcclxuXHRcImNvbnRhY3RcIjoge1xyXG5cdFx0XCJwaG9uZVwiOiBcIisxICg3NzgpIDg4MiAwNTI0XCIsXHJcblx0XHRcImVtYWlsXCI6IFwiZ3lhdTg4QGdtYWlsLmNvbVwiLFxyXG5cdFx0XCJsb2NhdGlvblwiOiBcIlZhbmNvdXZlciwgQkMsIENBXCIsXHJcblx0XHRcInNvY2lhbHNcIjpcclxuXHRcdFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwibmFtZVwiOiBcIkdpdEh1YlwiLFxyXG5cdFx0XHRcdFwibGlua1wiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9nYXJ5eWF1XCIsXHJcblx0XHRcdFx0XCJsaW5rVGV4dFwiOiBcImdpdGh1Yi5jb20vZ2FyeXlhdVwiLFxyXG5cdFx0XHRcdFwiaWNvbkNsYXNzZXNcIjogXCJ6bWRpIHptZGktZ2l0aHViLWFsdFwiLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJuYW1lXCI6IFwiTGlua2VkSW5cIixcclxuXHRcdFx0XHRcImxpbmtcIjogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vZ2FyeXlhdVwiLFxyXG5cdFx0XHRcdFwibGlua1RleHRcIjogXCJsaW5rZWRpbi5jb20vaW4vZ2FyeXlhdVwiLFxyXG5cdFx0XHRcdFwiaWNvbkNsYXNzZXNcIjogXCJ6bWRpIHptZGktbGlua2VkaW5cIixcclxuXHRcdFx0fSxcclxuXHRcdF1cclxuXHR9LFxyXG5cdFwib3ZlcnZpZXdcIjogXCJGcm9udGVuZCBkZXZlbG9wZXIgd2l0aCBhIHN0cm9uZyBwYXNzaW9uIGZvciBkZXZlbG9waW5nIGluc3BpcmF0aW9uYWwgd2ViIGFwcGxpY2F0aW9ucy4gRXhwZXJpZW5jZSBpbiBkaWZmZXJlbnQgdHlwZXMgb2YgbGFuZ3VhZ2VzIGFuZCBmcmFtZXdvcmtzIHdpdGggcXVpY2sgbGVhcm5pbmcgY2FwYWJpbGl0aWVzIHRvIGFkYXB0IGluIGRpZmZlcmVudCBwcm9qZWN0IHJlcXVpcmVtZW50cy4gRmxleGlibGUgaW4gZGlmZmVyZW50IHdvcmtpbmcgZW52aXJvbm1lbnRzLCBoYXZpbmcgd29ya2VkIGVmZmVjdGl2ZWx5IGJvdGggaW5kZXBlbmRlbnRseSBhbmQgYXMgYSB0ZWFtIGluIGFuIGFnaWxlIGRldmVsb3BtZW50IHByb2Nlc3MuIFVzZXMgc2tpbGxzZXRzIGluIHVzZXIgZXhwZXJpZW5jZSBkZXNpZ24sIHF1YWxpdHkgYXNzdXJhbmNlLCBhbmQgc29mdHdhcmUgZGV2ZWxvcG1lbnQgb250byBlYWNoIHByb2plY3Qgd2l0aCB0aGUgb2JqZWN0aXZlIG9mIGRlbGl2ZXJpbmcgaGlnaCBxdWFsaXR5IHByb2R1Y3RzLlwiLFxyXG5cdFwidGVjaG5pY2FsUHJvZmlsZVwiOlxyXG5cdFtcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiTGFuZ3VhZ2VzXCIsXHJcblx0XHRcdFwiaXRlbXNcIjpcclxuXHRcdFx0W1xyXG5cdFx0XHRcdFwiSmF2YVNjcmlwdCBFUzZcIixcclxuXHRcdFx0XHRcIkhUTUw1XCIsXHJcblx0XHRcdFx0XCJDU1MzXCIsXHJcblx0XHRcdFx0XCJBSkFYXCIsXHJcblx0XHRcdFx0XCJTQVNTXCIsXHJcblx0XHRcdFx0XCJQeXRob25cIixcclxuXHRcdFx0XHRcIlBIUFwiLFxyXG5cdFx0XHRcdC8vIFwiU1FMXCIsXHJcblx0XHRcdFx0Ly8gXCJKU09OXCIsXHJcblx0XHRcdF0sXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJGcmFtZXdvcmtzXCIsXHJcblx0XHRcdFwiaXRlbXNcIjpcclxuXHRcdFx0W1xyXG5cdFx0XHRcdFwiUmVhY3RcIixcclxuXHRcdFx0XHRcIlJlZHV4XCIsXHJcblx0XHRcdFx0XCJBbmd1bGFySlNcIixcclxuXHRcdFx0XHRcImpRdWVyeVwiLFxyXG5cdFx0XHRcdFwiRGphbmdvXCIsXHJcblx0XHRcdFx0XCJMYXJhdmVsXCIsXHJcblx0XHRcdFx0XCJOb2RlSlNcIixcclxuXHRcdFx0XSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcIlZlcnNpb24gQ29udHJvbFwiLFxyXG5cdFx0XHRcIml0ZW1zXCI6XHJcblx0XHRcdFtcclxuXHRcdFx0XHRcIkdpdCAoR2l0TGFiLCBHaXRIdWIpXCIsXHJcblx0XHRcdFx0XCJTdWJ2ZXJzaW9uIChUb3J0b2lzZVNWTilcIixcclxuXHRcdFx0XSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcIlByb2plY3QgVG9vbHNcIixcclxuXHRcdFx0XCJpdGVtc1wiOlxyXG5cdFx0XHRbXHJcblx0XHRcdFx0XCJHaXRMYWJcIixcclxuXHRcdFx0XHRcIkdpdEh1YlwiLFxyXG5cdFx0XHRcdFwiQ29uZmx1ZW5jZVwiLFxyXG5cdFx0XHRcdFwiSklSQVwiLFxyXG5cdFx0XHRdLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiRGVzaWduIFRvb2xzXCIsXHJcblx0XHRcdFwiaXRlbXNcIjpcclxuXHRcdFx0W1xyXG5cdFx0XHRcdFwiU2tldGNoXCIsXHJcblx0XHRcdFx0XCJJblZpc2lvblwiLFxyXG5cdFx0XHRcdFwiQWRvYmUgUGhvdG9zaG9wXCIsXHJcblx0XHRcdFx0XCJJbGx1c3RyYXRvclwiLFxyXG5cdFx0XHRcdFwibXlCYWxzYW1pcVwiLFxyXG5cdFx0XHRdLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiTWV0aG9kb2xvZ2llc1wiLFxyXG5cdFx0XHRcIml0ZW1zXCI6XHJcblx0XHRcdFtcclxuXHRcdFx0XHRcIkFnaWxlXCIsXHJcblx0XHRcdFx0XCJTY3J1bVwiLFxyXG5cdFx0XHRcdFwiVW5pdCBUZXN0XCIsXHJcblx0XHRcdFx0XCJSZXNwb25zaXZlIERlc2lnblwiLFxyXG5cdFx0XHRdLFxyXG5cdFx0fSxcclxuXHRdLFxyXG5cdFwid29ya0V4cGVyaWVuY2VcIjpcclxuXHRbXHJcblx0XHR7XHJcblx0XHRcdFwicG9zaXRpb25cIjogXCJTZW5pb3IgRnJvbnRlbmQgRGV2ZWxvcGVyXCIsXHJcblx0XHRcdFwiY29tcGFueVwiOiBcIlRoaW5raW5nYm94XCIsXHJcblx0XHRcdFwibG9jYXRpb25cIjogXCJWYW5jb3V2ZXIsIEJDLCBDYW5hZGFcIixcclxuXHRcdFx0XCJ0aW1lXCI6IFwiQXByaWwgMjAxOCAtIEN1cnJlbnRcIixcclxuXHRcdFx0XCJkZXNjcmlwdGlvblwiOiBcIlJlc2VhcmNoIGFuZCBkZXZlbG9wIHByb3RvdHlwZXMgdG8gdXNlIGZyYW1ld29ya3MgaW4gdW5pcXVlIHdheXMgaW4gb3JkZXIgdG8gdGVzdCB0aGUgbGltaXRhdGlvbnMgYW5kIGxlYXJuIG1vcmUgYWJvdXQgdGhlIGNyZWF0aXZlIHBvc3NpYmlsaXRpZXMuIERldmVsb3AgYW5kIHNvbHV0aW9uaW5nIGNyZWF0aXZlIGludHJpZ3Vpbmcgd2Vic2l0ZXMgZm9yIGNsaWVudHMgdG8gbW9kZXJuaXplIHRoZSB0ZWNobm9sb2d5IGFuZCBzdHlsZSB0aGF0IHRoZSBjbGllbnQgdXNlcyBmb3IgYWR2ZXJ0aXNpbmcuIEFkYXB0IGFuZCBsZWFybiBkaWZmZXJlbnQgZnJhbWV3b3JrcyBzdWNoIGFzIEZhY2Vib29rQVIgYW5kIFByaXNtaWMgQ01TIHRvIHByb3ZpZGUgZWFjaCBwcm9qZWN0IHdpdGggdGhlIGlkZWFsIHN0YWNrIGJhc2VkIG9uIHRoZSByZXF1aXJlbWVudHMgb2YgdGhlIHByb2plY3QuXCIsXHJcblx0XHRcdFwicG9pbnRzXCI6XHJcblx0XHRcdFtcclxuXHRcdFx0XHRcIlJlc2VhcmNoIGFuZCBkZXZlbG9wIHByb3RvdHlwZXMgdG8gdXNlIGZyYW1ld29ya3MgaW4gdW5pcXVlIHdheXMgaW4gb3JkZXIgdG8gdGVzdCB0aGUgbGltaXRhdGlvbnMgYW5kIGxlYXJuIG1vcmUgYWJvdXQgdGhlIGNyZWF0aXZlIHBvc3NpYmlsaXRpZXMuXCIsXHJcblx0XHRcdFx0XCJEZXZlbG9wIGFuZCBzb2x1dGlvbmluZyBjcmVhdGl2ZSBpbnRyaWd1aW5nIHdlYnNpdGVzIGZvciBjbGllbnRzIHRvIG1vZGVybml6ZSB0aGUgdGVjaG5vbG9neSBhbmQgc3R5bGUgdGhhdCB0aGUgY2xpZW50IHVzZXMgZm9yIGFkdmVydGlzaW5nLlwiLFxyXG5cdFx0XHRcdFwiQWRhcHQgYW5kIGxlYXJuIGRpZmZlcmVudCBmcmFtZXdvcmtzIHN1Y2ggYXMgRmFjZWJvb2tBUiBhbmQgUHJpc21pYyBDTVMgdG8gcHJvdmlkZSBlYWNoIHByb2plY3Qgd2l0aCB0aGUgaWRlYWwgc3RhY2sgYmFzZWQgb24gdGhlIHJlcXVpcmVtZW50cyBvZiB0aGUgcHJvamVjdC5cIixcclxuXHRcdFx0XVxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJwb3NpdGlvblwiOiBcIkludGVybWVkaWF0ZSBGcm9udGVuZCBEZXZlbG9wZXIvU2NydW0gTWFzdGVyXCIsXHJcblx0XHRcdFwiY29tcGFueVwiOiBcIkFwcG5vdmF0aW9uIFRlY2hub2xvZ2llc1wiLFxyXG5cdFx0XHRcImxvY2F0aW9uXCI6IFwiVmFuY291dmVyLCBCQywgQ2FuYWRhXCIsXHJcblx0XHRcdFwidGltZVwiOiBcIk1heSAyMDE2IC0gTWFyY2ggMjAxOFwiLFxyXG5cdFx0XHRcImRlc2NyaXB0aW9uXCI6IFwiRGV2ZWxvcCBuZXcgUGFhUyB3ZWIgYXBwbGljYXRpb24gdG8gcHJvdmlkZSBpbnRlcm5hbCBzZXJ2aWNlcyBhbmQgbGFyZ2UgY2xpZW50cyBhbiBlYXN5IHdvcmtmbG93IGZvciB3ZWIgc2l0ZSBkZXZlbG9wbWVudCBhbmQgZGVwbG95bWVudC4gQnVpbHQgZnJvbnQgZW5kIHdlYiBwYWdlcyBpbiBBbmd1bGFySlMsIFNBU1MgYW5kIEhUTUwgYmFzZWQgb24gZGVzaWduZXIgbW9ja3VwcywgY29uc3VtaW5nIGEgUkVTVCBBUEkgZm9yIGNvbW11bmljYXRpb24gd2l0aCBiYWNrZW5kIHNlcnZlcnMuIEludGVncmF0ZSBhIGN1c3RvbSBzdXBwb3J0IHBvcnRhbCB3ZWIgYXBwbGljYXRpb24gd2l0aCBleHRlcm5hbCBDb25uZWN0V2lzZSB0aWNrZXRpbmcgc2VydmljZSBmb3IgYW4gdXNlciBmcmllbmRseSBjbGllbnQgZmFjaW5nIHBvcnRhbC4gRGVzaWduZWQgd2lyZWZyYW1lcyBhbmQgbW9ja3VwcyB0aHJvdWdoIHJlcXVpcmVtZW50IG1lZXRpbmdzIGFuZCBkZXNpZ24gcmV2aWV3IG1lZXRpbmdzIHdpdGggY2xpZW50cyB0byBwcm92aWRlIGFuIGludHVpdGl2ZSB1c2VyIGludGVyZmFjZSBkZXNpZ24gZm9yIGNsaWVudCdzIHNhZmV0eSB3ZWIgYXBwbGljYXRpb24uIE1hbmFnZWQgYSB0ZWFtIG9mIGZvdXIgZGV2ZWxvcGVycyB0aHJvdWdoIHNwcmludHMgaW4gYW4gQWdpbGUgZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnQuXCIsXHJcblx0XHRcdFwicG9pbnRzXCI6XHJcblx0XHRcdFtcclxuXHRcdFx0XHRcIkRldmVsb3AgbmV3IFBhYVMgd2ViIGFwcGxpY2F0aW9uIHRvIHByb3ZpZGUgaW50ZXJuYWwgc2VydmljZXMgYW5kIGxhcmdlIGNsaWVudHMgYW4gZWFzeSB3b3JrZmxvdyBmb3Igd2Vic2l0ZSBkZXZlbG9wbWVudCBhbmQgZGVwbG95bWVudC5cIixcclxuXHRcdFx0XHRcIkJ1aWx0IGZyb250IGVuZCB3ZWIgcGFnZXMgaW4gQW5ndWxhckpTLCBTQVNTIGFuZCBIVE1MIGJhc2VkIG9uIGRlc2lnbmVyIG1vY2t1cHMsIGNvbnN1bWluZyBhIFJFU1QgQVBJIGZvciBjb21tdW5pY2F0aW9uIHdpdGggYmFja2VuZCBzZXJ2ZXJzLlwiLFxyXG5cdFx0XHRcdFwiSW50ZWdyYXRlIGEgY3VzdG9tIHN1cHBvcnQgcG9ydGFsIHdlYiBhcHBsaWNhdGlvbiB3aXRoIGV4dGVybmFsIENvbm5lY3RXaXNlIHRpY2tldGluZyBzZXJ2aWNlIGZvciBhbiB1c2VyIGZyaWVuZGx5IGNsaWVudCBmYWNpbmcgcG9ydGFsLlwiLFxyXG5cdFx0XHRcdFwiRGVzaWduZWQgd2lyZWZyYW1lcyBhbmQgbW9ja3VwcyB0aHJvdWdoIHJlcXVpcmVtZW50IG1lZXRpbmdzIGFuZCBkZXNpZ24gcmV2aWV3IG1lZXRpbmdzIHdpdGggY2xpZW50cyB0byBwcm92aWRlIGFuIGludHVpdGl2ZSB1c2VyIGludGVyZmFjZSBkZXNpZ24gZm9yIGNsaWVudCdzIHNhZmV0eSB3ZWIgYXBwbGljYXRpb24uXCIsXHJcblx0XHRcdF1cclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwicG9zaXRpb25cIjogXCJKdW5pb3IgU29mdHdhcmUgRGV2ZWxvcGVyXCIsXHJcblx0XHRcdFwiY29tcGFueVwiOiBcIkRIWCBNZWRpYVwiLFxyXG5cdFx0XHRcImxvY2F0aW9uXCI6IFwiVmFuY291dmVyLCBCQywgQ2FuYWRhXCIsXHJcblx0XHRcdFwidGltZVwiOiBcIk1hciAyMDE0IC0gQXByIDIwMTZcIixcclxuXHRcdFx0XCJkZXNjcmlwdGlvblwiOiBcIkRldmVsb3AgbmV3IHdlYiBhcHBsaWNhdGlvbnMgZnJvbSByZXF1aXJlbWVudHMgZ2F0aGVyaW5nLCBzcHJpbnQgcGxhbm5pbmcsIGFnaWxlIGRldmVsb3BtZW50LCByb2xsb3V0IHRvIHN5c3RlbSBtYWludGVuYW5jZSB0byBwcm92aWRlIHRoZSBzdHVkaW8gd2l0aCB1bmlxdWVseSBidWlsdCBzeXN0ZW1zIHRvIHN1aXQgdGhlIG5lZWRzIG9mIG1hcmtldGluZywgaW50ZXJhY3RpdmUgYW5kIHBpcGVsaW5lLiBDb2xsYWJvcmF0ZSB3aXRoIGEgdGVhbSBvZiA0IC0gNyBkZXZlbG9wZXJzIHRvIGRlc2lnbiBhbmQgYXJjaGl0ZWN0IHRoZSBzdHJ1Y3R1cmUgb2YgdGhlIHByb2plY3RzIHRvIGRldGVybWluZSB0aGUgb3B0aW1hbCBkZXZlbG9wbWVudCBhcHByb2FjaCBhbmQgYmVzdCB0ZWNobm9sb2dpZXMgdG8gdXNlLiBSZXNlYXJjaCBvbiBleHRlcm5hbCBzdHVkaW8gbWFuYWdlbWVudCBzeXN0ZW0sIFNob3RndW4sIHRvIGFzc2VzcyB0aGUgY29tcGF0aWJpbGl0eSBvZiBTaG90Z3VuIHdpdGggZGFpbHkgd29ya2Zsb3cgb2YgdGhlIHN0dWRpby4gRGVzaWduIGN1c3RvbSBzeXN0ZW0sIEFydGVtaXMsIHRvIGJlIHVzZWQgb24gdG9wIG9mIFNob3RndW4gaW4gb3JkZXIgdG8gZW5oYW5jZSB0aGUgZmVhdHVyZXMgcHJvdmlkZWQgYW5kIHRhaWxvciBpdCB0byB0aGUgbmVlZHMgb2YgdGhlIHVzZXJzLiBEZXZlbG9wIGFuZCBpbXBsZW1lbnQgZGlmZmVyZW50IEFQSXMgdG8gdXBncmFkZSBsZWdhY3kgc3lzdGVtcyB0byB1c2UgYSB1bmlmaWVkIGRhdGFiYXNlIHdoaWxlIHBsYW5uaW5nIGZvciBmdXR1cmUgc3lzdGVtcyB0byBwcm92aWRlIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IHdpdGggdGhlIHBhc3Qgc3lzdGVtcy5cIixcclxuXHRcdFx0XCJwb2ludHNcIjpcclxuXHRcdFx0W1xyXG5cdFx0XHRcdFwiRGV2ZWxvcCBuZXcgd2ViIGFwcGxpY2F0aW9ucyBmcm9tIHJlcXVpcmVtZW50cyBnYXRoZXJpbmcsIHNwcmludCBwbGFubmluZywgYWdpbGUgZGV2ZWxvcG1lbnQsIHJvbGxvdXQgdG8gc3lzdGVtIG1haW50ZW5hbmNlIHRvIHByb3ZpZGUgdGhlIHN0dWRpbyB3aXRoIHVuaXF1ZWx5IGJ1aWx0IHN5c3RlbXMgdG8gc3VpdCB0aGUgbmVlZHMgb2YgbWFya2V0aW5nLCBpbnRlcmFjdGl2ZSBhbmQgcGlwZWxpbmUuXCIsXHJcblx0XHRcdFx0XCJDb2xsYWJvcmF0ZSB3aXRoIGEgdGVhbSBvZiA0IC0gNyBkZXZlbG9wZXJzIHRvIGRlc2lnbiBhbmQgYXJjaGl0ZWN0IHRoZSBzdHJ1Y3R1cmUgb2YgdGhlIHByb2plY3RzIHRvIGRldGVybWluZSB0aGUgb3B0aW1hbCBkZXZlbG9wbWVudCBhcHByb2FjaCBhbmQgYmVzdCB0ZWNobm9sb2dpZXMgdG8gdXNlLlwiLFxyXG5cdFx0XHRcdFwiUmVzZWFyY2ggb24gZXh0ZXJuYWwgc3R1ZGlvIG1hbmFnZW1lbnQgc3lzdGVtLCBTaG90Z3VuLCB0byBhc3Nlc3MgdGhlIGNvbXBhdGliaWxpdHkgb2YgU2hvdGd1biB3aXRoIGRhaWx5IHdvcmtmbG93IG9mIHRoZSBzdHVkaW8uIERlc2lnbiBjdXN0b20gc3lzdGVtLCBBcnRlbWlzLCB0byBiZSB1c2VkIG9uIHRvcCBvZiBTaG90Z3VuIGluIG9yZGVyIHRvIGVuaGFuY2UgdGhlIGZlYXR1cmVzIHByb3ZpZGVkIGFuZCB0YWlsb3IgaXQgdG8gdGhlIG5lZWRzIG9mIHRoZSB1c2Vycy5cIixcclxuXHRcdFx0XHRcIkRldmVsb3AgYW5kIGltcGxlbWVudCBkaWZmZXJlbnQgQVBJcyB0byB1cGdyYWRlIGxlZ2FjeSBzeXN0ZW1zIHRvIHVzZSBhIHVuaWZpZWQgZGF0YWJhc2Ugd2hpbGUgcGxhbm5pbmcgZm9yIGZ1dHVyZSBzeXN0ZW1zIHRvIHByb3ZpZGUgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgd2l0aCB0aGUgcGFzdCBzeXN0ZW1zLlwiLFxyXG5cdFx0XHRdXHJcblx0XHR9LFxyXG5cdFx0Ly8ge1xyXG5cdFx0Ly8gXHRcInBvc2l0aW9uXCI6IFwiUXVhbGl0eSBBc3N1cmFuY2UgVGVzdGVyXCIsXHJcblx0XHQvLyBcdFwiY29tcGFueVwiOiBcIkVsZWN0cm9uaWMgQXJ0cyBDYW5hZGFcIixcclxuXHRcdC8vIFx0XCJsb2NhdGlvblwiOiBcIkJ1cm5hYnksIEJDLCBDYW5hZGFcIixcclxuXHRcdC8vIFx0XCJ0aW1lXCI6IFwiSnVuIDIwMDggLSBTZXAgMjAxMVwiLFxyXG5cdFx0Ly8gXHRcImRlc2NyaXB0aW9uXCI6IFwiVGVzdGVkIGdhbWluZyBzb2Z0d2FyZSBmb3IgTmludGVuZG8gV2lpLCBYYm94IDM2MCBhbmQgUGxheVN0YXRpb24gMyB0byBlbnN1cmUgdGhlIHF1YWxpdHkgb2YgdGhlIGNvbXBhbnkncyBwcm9kdWN0LCBhbGxvd2luZyBzdWNjZXNzZnVsIGZpcnN0LXRpbWUgcGFzc2VzIG9uIHNldmVyYWwgZmlyc3QtcGFydHkgY2VydGlmaWNhdGlvbnMuIFNwZWNpYWxpemVkIGluIE5pbnRlbmRvIGNvbXBsaWFuY2UgYW5kIGNyZWF0ZWQgY29tcGxpYW5jZSB0ZXN0IGNhc2VzIGZvciBFQSBTUE9SVFMgQWN0aXZlIGFuZCBFQSBTUE9SVFMgQWN0aXZlIE1vcmUgV29ya291dHMgdXNpbmcgRGV2VGVzdCB0byBndWlkZSBjb21wbGlhbmNlIHRlc3RlcnMgZHVyaW5nIGRldmVsb3BtZW50IHByb2Nlc3MuIENvbGxhYm9yYXRlZCB3aXRoIHByb2plY3QgbWFuYWdlcnMsIHRlYW0gbGVhZHMgYW5kIG90aGVyIHRlc3RlcnMgdG8gYW5hbHl6ZSB0aGUgY292ZXJhZ2UgYW5kIHJpc2tzIG9mIGVhY2ggdGVzdCBzdWl0ZSwgZW5zdXJpbmcgdGhhdCB0aGUgcmVxdWlyZW1lbnRzIG9mIHRoZSBzb2Z0d2FyZSB3YXMgbWV0IHdoaWxlIHZhbGlkYXRpbmcgdGhlIHN0YWJpbGl0eSBvZiBlYWNoIGJ1aWxkIGFzIHRoZSBwcm9qZWN0IHByb2dyZXNzZWQuXCIsXHJcblx0XHQvLyBcdFwicG9pbnRzXCI6XHJcblx0XHQvLyBcdFtcclxuXHRcdC8vIFx0XHRcIlRlc3RlZCBnYW1pbmcgc29mdHdhcmUgZm9yIE5pbnRlbmRvIFdpaSwgWGJveCAzNjAgYW5kIFBsYXlTdGF0aW9uIDMgdG8gZW5zdXJlIHRoZSBxdWFsaXR5IG9mIHRoZSBjb21wYW55J3MgcHJvZHVjdCwgYWxsb3dpbmcgc3VjY2Vzc2Z1bCBmaXJzdC10aW1lIHBhc3NlcyBvbiBzZXZlcmFsIGZpcnN0LXBhcnR5IGNlcnRpZmljYXRpb25zLlwiLFxyXG5cdFx0Ly8gXHRcdFwiU3BlY2lhbGl6ZWQgaW4gTmludGVuZG8gY29tcGxpYW5jZSBhbmQgY3JlYXRlZCBjb21wbGlhbmNlIHRlc3QgY2FzZXMgZm9yIEVBIFNQT1JUUyBBY3RpdmUgYW5kIEVBIFNQT1JUUyBBY3RpdmUgTW9yZSBXb3Jrb3V0cyB1c2luZyBEZXZUZXN0IHRvIGd1aWRlIGNvbXBsaWFuY2UgdGVzdGVycyBkdXJpbmcgZGV2ZWxvcG1lbnQgcHJvY2Vzcy5cIixcclxuXHRcdC8vIFx0XHRcIkNvbGxhYm9yYXRlZCB3aXRoIHByb2plY3QgbWFuYWdlcnMsIHRlYW0gbGVhZHMgYW5kIG90aGVyIHRlc3RlcnMgdG8gYW5hbHl6ZSB0aGUgY292ZXJhZ2UgYW5kIHJpc2tzIG9mIGVhY2ggdGVzdCBzdWl0ZSwgZW5zdXJpbmcgdGhhdCB0aGUgcmVxdWlyZW1lbnRzIG9mIHRoZSBzb2Z0d2FyZSB3YXMgbWV0IHdoaWxlIHZhbGlkYXRpbmcgdGhlIHN0YWJpbGl0eSBvZiBlYWNoIGJ1aWxkIGFzIHRoZSBwcm9qZWN0IHByb2dyZXNzZWQuXCIsXHJcblx0XHQvLyBcdF1cclxuXHRcdC8vIH0sXHJcblx0XSxcclxuXHRcImVkdWNhdGlvblwiOlxyXG5cdFtcclxuXHRcdHtcclxuXHRcdFx0XCJzY2hvb2xcIjogXCJTaW1vbiBGcmFzZXIgVW5pdmVyc2l0eVwiLFxyXG5cdFx0XHRcInByb2dyYW1cIjogXCJNYWpvciBpbiBDb21wdXRpbmcgU2NpZW5jZVwiLFxyXG5cdFx0XHRcImZhY3VsdHlcIjogXCJCYWNoZWxvciBvZiBTY2llbmNlXCIsXHJcblx0XHRcdFwidGltZVwiOiBcIkRlYyAyMDEzXCIsXHJcblx0XHRcdFwiZGVzY3JpcHRpb25cIjogXCJGb2N1c2VkIG9uIE9iamVjdC1PcmllbnRlZCBQcm9ncmFtbWluZyBhbmQgb3RoZXIgc29mdHdhcmUgZGV2ZWxvcG1lbnQgY29uY2VwdHMgc3VjaCBhcyBkYXRhYmFzZSBkZXNpZ24sIG5ldHdvcmtpbmcgYW5kIHNvZnR3YXJlIGVuZ2luZWVyaW5nLlwiLFxyXG5cdFx0fVxyXG5cdF0sXHJcblx0XCJwcm9qZWN0c1wiOlxyXG5cdFtcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiU2lzIEtub3dzIEJlc3QgRmFjZWJvb2sgSW5zdGFudCBHYW1lXCIsXHJcblx0XHRcdFwibG9jYXRpb25cIjogXCJUaGlua2luZ2JveFwiLFxyXG5cdFx0XHRcInJvbGVzXCI6IFtcIlNlbmlvciBGcm9udGVuZCBEZXZlbG9wZXJcIl0sXHJcblx0XHRcdFwic3RhY2tcIjogW1wiRmFjZWJvb2sgUGxhdGZvcm1cIiwgXCJHU0FQXCIsIFwiQ2FudmFzXCJdLFxyXG5cdFx0XHRcImRlc2NyaXB0aW9uXCI6IFwiRGV2ZWxvcGVkIGEgc2hhcmVhYmxlIHF1aXogRmFjZWJvb2sgSW5zdGFudCBHYW1lIHRvIHByb21vdGUgdGhlIG1vdmllIE5vYm9keSdzIEZvb2wuIFdvcmtlZCB0b2dldGhlciB3aXRoIGFuIEludGVyYWN0aXZlIERldmVsb3BlciBhbmQgY3JlYXRpdmVzIHRvIGludGVncmF0ZSBhbiBlbmdhZ2luZyBleHBlcmllbmNlLCB3aGlsZSBhbHNvIHJlcG9ydGluZyBhbnkgZm91bmQgaXNzdWVzIHdpdGggdGhlIEZhY2Vib29rIGZyYW1ld29yay4gVXNlZCBHU0FQIHRvIGNyZWF0ZSBhIHJlc3BvbnNpdmUgYW5kIGVuZ2FnaW5nIGV4cGVyaWVuY2UgZm9yIHVzZXJzIHRvIGltbWVyc2UgdGhlbXNlbHZlcyBpbnRvIHRoZSBwcm9qZWN0LlwiXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJWYW5jb3V2ZXIgQXF1YXJpdW0gV2Vic2l0ZSBSZWZyZXNoXCIsXHJcblx0XHRcdFwibG9jYXRpb25cIjogXCJUaGlua2luZ2JveFwiLFxyXG5cdFx0XHRcInJvbGVzXCI6IFtcIlNlbmlvciBGcm9udGVuZCBEZXZlbG9wZXJcIl0sXHJcblx0XHRcdFwic3RhY2tcIjogW1wiQ29uY3JldGU1XCIsIFwiSmF2YXNjcmlwdFwiLCBcIkxFU1NcIl0sXHJcblx0XHRcdFwiZGVzY3JpcHRpb25cIjogXCJSZXNlYXJjaGVkIG9uIHZhcmlldHkgb2YgQ01TIHRvIHByb3ZpZGUgY2xpZW50IHdpdGggdGhlIGJlc3Qgb3B0aW9uIGZvciB0aGVpciByZXF1aXJlbWVudHMuIFdvcmtlZCB3aXRoIGEgdGVhbSBvZiBmb3VyIGRldmVsb3BlcnMgdG8gZGlzY292ZXIgdGhlIHVzYWJpbGl0eSBhbmQgbGltaXRhdGlvbnMgb2YgQ29uY3JldGU1LCBhbGxvd2luZyBhIHNtb290aCBkZXZlbG9wbWVudCBjeWNsZS4gRGV2ZWxvcGVkIGEgcmV1c2FibGUgYmxvY2sgbGF5b3V0IHVzaW5nIENvbmNyZXRlNSB0aGF0IGFsbG93cyBjbGllbnQgdG8gYWRkIHRvIGFuZCByZXN0cnVjdHVyZSB0aGUgd2Vic2l0ZSBhZnRlciBoYW5kLW9mZiB3aGlsZSBtYWludGFpbmluZyBhIGNvbnNpc3RlbnQgZGVzaWduIHRocm91Z2hvdXQuXCJcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcIlByb2R1Y3Rpb24gTWFuYWdlbWVudCBTeXN0ZW1cIixcclxuXHRcdFx0XCJsb2NhdGlvblwiOiBcIkRIWCBNZWRpYVwiLFxyXG5cdFx0XHRcInJvbGVzXCI6IFtcIlNjcnVtIE1hc3RlclwiLCBcIlNvZnR3YXJlIERldmVsb3BlclwiLCBcIlVYIERlc2lnbmVyXCJdLFxyXG5cdFx0XHRcInN0YWNrXCI6IFtcIkRqYW5nbywgQW5ndWxhckpTLCBIVE1MLCBTQ1NTLCBNeVNRTFwiXSxcclxuXHRcdFx0XCJkZXNjcmlwdGlvblwiOiBcIkRlc2lnbmVkIGFuZCBkZXZlbG9wZWQgdGFzayBtYW5hZ2VtZW50IHN5c3RlbSBhbmQgc2hvdyBicmVha2Rvd24gc3lzdGVtIGFsb25nc2lkZSBleHRlcm5hbCBzeXN0ZW0sIFNob3RndW4sIHRvIGludGVncmF0ZSBTaG90Z3VuIGludG8gc3R1ZGlvIHBpcGVsaW5lIHdoaWxlIG1haW50YWluaW5nIGxlZ2FjeSBzeXN0ZW0gZmVhdHVyZXMuIERldmVsb3BlZCBhbiBBUEkgdG8gcHJvdmlkZSBjb21tdW5pY2F0aW9uIGJldHdlZW4gU2hvdGd1biBhbmQgbGVnYWN5IHN5c3RlbSwgYWxsb3dpbmcgY29ycG9yYXRlIGRlcGFydG1lbnRzIHRvIGNvbnRpbnVlIHVzaW5nIGxlZ2FjeSBzeXN0ZW0gdG8gZW50ZXIgdXNlciBpbmZvcm1hdGlvbiB3aGlsZSBlbnN1cmUgaW5mb3JtYXRpb24gaXMgcGFzc2VkIHRvIFNob3RndW4uIExlZCBhIHRlYW0gb2YgZml2ZSBkZXZlbG9wZXJzIGluIGFuIEFnaWxlIHNjcnVtIGVudmlyb25tZW50LCBhbGxvd2luZyB0YXNrcyB0byBiZSBjb21wbGV0ZWQgd2l0aGluIGRlYWRsaW5lcyB3aGlsZSByZXBvcnRpbmcgdG8gSGVhZCBvZiBTb2Z0d2FyZSBEZXBhcnRtZW50IG9uIHNjaGVkdWxlIGFkanVzdG1lbnRzLlwiLFxyXG5cdFx0fSxcclxuXHRcdC8vIHtcclxuXHRcdC8vIFx0XCJuYW1lXCI6IFwiTXVzZSBDbGllbnQgUmV2aWV3XCIsXHJcblx0XHQvLyBcdFwibG9jYXRpb25cIjogXCJESFggTWVkaWFcIixcclxuXHRcdC8vIFx0XCJyb2xlc1wiOiBbXCJTb2Z0d2FyZSBEZXZlbG9wZXJcIl0sXHJcblx0XHQvLyBcdFwic3RhY2tcIjogW1wiRGphbmdvLCBBbmd1bGFySlMsIEhUTUwsIFNDU1MsIE15U1FMXCJdLFxyXG5cdFx0Ly8gXHRcImRlc2NyaXB0aW9uXCI6IFwiRGV2ZWxvcGVkIGFuIGV4dGVybmFsIGNsaWVudCByZXZpZXcgc3lzdGVtIGNvbm5lY3RlZCB0byBzdHVkaW8gdGFzayBtYW5hZ2VtZW50IHN5c3RlbSB0aHJvdWdoIGFuIEFQSSwgYWxsb3dpbmcgY29vcmRpbmF0b3JzIHRvIHNlbmQgY29tcGxldGVkIGFzc2V0cyBhbmQgc2hvdHMgZm9yIGNsaWVudCByZXZpZXcuIFdvcmtlZCBpbiBhIHRlYW0gb2YgZml2ZSBkZXZlbG9wZXJzIGFuZCBhIGRlc2lnbmVyIGluIGEgc3ByaW50IGVudmlyb25tZW50IHRvIHBsYW4gYW5kIGRlc2lnbiB0aGUgZGV2ZWxvcG1lbnQgYXJjaGl0ZWN0dXJlIGZvciB0aGUgYXBwbGljYXRpb24gZW5zdXJlIGFsbCByZXF1aXJlbWVudHMgd2VyZSBjb25zaWRlcmVkIGluIHRoZSBkZXNpZ24uXCIsXHJcblx0XHQvLyB9LFxyXG5cdFx0Ly8ge1xyXG5cdFx0Ly8gXHRcIm5hbWVcIjogXCJOZXJkIENvcnBzIFByb2R1Y3Rpb24gU2l0ZXNcIixcclxuXHRcdC8vIFx0XCJsb2NhdGlvblwiOiBcIkRIWCBNZWRpYVwiLFxyXG5cdFx0Ly8gXHRcInJvbGVzXCI6IFtcIlNvZnR3YXJlIERldmVsb3BlclwiXSxcclxuXHRcdC8vIFx0XCJzdGFja1wiOiBbXCJMYXJhdmVsXCIsIFwialF1ZXJ5XCIsIFwiSFRNTFwiLCBcIlNDU1NcIiwgXCJNeVNRTFwiXSxcclxuXHRcdC8vIFx0XCJkZXNjcmlwdGlvblwiOiBcIkRlc2lnbiBhbmQgIGRldmVsb3BlZCBjdXN0b20gQ29udGVudCBNYW5hZ2VtZW50IFN5c3RlbSBmb3Igc3R1ZGlvIHByb2R1Y3Rpb24gc2l0ZXMsIHByb3ZpZGluZyBhIHdheSB0byBwZXJmb3JtIGVmZmljaWVudCB1cGRhdGVzIHRvIHdlYnNpdGUgY29udGVudHMgaW4gdGhlIGZ1dHVyZS4gRGV2ZWxvcGVkIG11bHRpcGxlIHByb2R1Y3Rpb24gd2Vic2l0ZXMgc3VjaCBhcyBrYXRlYW5kbWltbWltLmNhIHdpdGggbXVsdGktYnJvd3NlciBzdXBwb3J0IGFuZCByZXNwb25zaXZlIGRlc2lnbiB0byBwcm92aWRlIGtpZHMgd2l0aCBhIGZ1biBhbmQgaW50ZXJhY3RpdmUgbG9jYXRpb24gdG8gbGVhcm4gbW9yZSBhYm91dCB0aGUgc2hvdyBhbmQgcmVjZWl2ZSB1cGRhdGVzLlwiLFxyXG5cdFx0Ly8gfSxcclxuXHRdLFxyXG5cdFwiY292ZXJMZXR0ZXJcIjoge1xyXG5cdFx0XCJjb250ZW50XCI6IFwiXCJcclxuXHR9XHJcbn1cclxuIl19
