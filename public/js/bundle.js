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
			"description": "Develop new PaaS web application to provide internal services and large clients an easy workflow for web site development and deployment. Built front end web pages in AngularJS, SASS and HTML based on designer mockups, consuming a REST API for communication with backend servers. Integrate a custom support portal web application with external ConnectWise ticketing service for an user friendly client facing portal. Designed wireframes and mockups through requirement meetings and design review meetings with clients to provide an intuitive user interface design for client's safety web application. Managed a team of four developers through sprints in an Agile development environment.",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9hcHAuanMiLCJwdWJsaWMvcmVzb3VyY2VzL2RhdGEuanNvbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsInZhciBfID0gcmVxdWlyZSgnbG9kYXNoJyk7XHJcbnZhciBhbmd1bGFyID0gcmVxdWlyZSgnYW5ndWxhcicpO1xyXG52YXIgZGF0YSA9IHJlcXVpcmUoJy4vLi4vcHVibGljL3Jlc291cmNlcy9kYXRhLmpzb24nKTtcclxuXHJcblxyXG52YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ1Jlc3VtZVRlbXBsYXRlQXBwJywgW10pO1xyXG5cclxuTGF5b3V0Q29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnXTtcclxuZnVuY3Rpb24gTGF5b3V0Q29udHJvbGxlcigkc2NvcGUpIHtcclxuXHQkc2NvcGUuZGF0YSA9IGRhdGE7XHJcblx0JHNjb3BlLmdldFByb2ZpbGVFbGVtZW50c0Rpc3BsYXkgPSBnZXRQcm9maWxlRWxlbWVudHNEaXNwbGF5O1xyXG5cdCRzY29wZS5nZXRQcm9qZWN0Um9sZXNEaXNwbGF5ID0gZ2V0UHJvamVjdFJvbGVzRGlzcGxheTtcclxuXHQkc2NvcGUuZ2V0UHJvamVjdFN0YWNrRGlzcGxheSA9IGdldFByb2plY3RTdGFja0Rpc3BsYXk7XHJcblx0JHNjb3BlLmdldENvdmVyTGV0dGVyUGllY2VzID0gZ2V0Q292ZXJMZXR0ZXJQaWVjZXM7XHJcblxyXG5cclxuXHRmdW5jdGlvbiBnZXRQcm9maWxlRWxlbWVudHNEaXNwbGF5KHByb2ZpbGUpIHtcclxuXHRcdHJldHVybiBfLmpvaW4ocHJvZmlsZS5pdGVtcywgJywgJyk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBnZXRQcm9qZWN0Um9sZXNEaXNwbGF5KHByb2plY3QpIHtcclxuXHRcdHJldHVybiBfLmpvaW4ocHJvamVjdC5yb2xlcywgJywgJyk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBnZXRQcm9qZWN0U3RhY2tEaXNwbGF5KHByb2plY3QpIHtcclxuXHRcdHJldHVybiBfLmpvaW4ocHJvamVjdC5zdGFjaywgJywgJyk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBnZXRDb3ZlckxldHRlclBpZWNlcygpIHtcclxuXHRcdHZhciBsZXR0ZXIgPSBkYXRhLmNvdmVyTGV0dGVyLmNvbnRlbnQ7XHJcblx0XHR2YXIgcGllY2VzID0gXy5zcGxpdChsZXR0ZXIsICdcXG4nKTtcclxuXHRcdHJldHVybiBwaWVjZXM7XHJcblx0fVxyXG59XHJcblxyXG5hcHAuY29udHJvbGxlcignTGF5b3V0Q29udHJvbGxlcicsIExheW91dENvbnRyb2xsZXIpO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRhbmd1bGFyLmJvb3RzdHJhcChkb2N1bWVudCwgWydSZXN1bWVUZW1wbGF0ZUFwcCddKTtcclxufSk7XHJcblxyXG4iLCJtb2R1bGUuZXhwb3J0cz17XHJcblx0XCJwcm9maWxlSW1hZ2VcIjogXCIuL3B1YmxpYy9yZXNvdXJjZXMvcHJvZmlsZS1waWN0dXJlLnBuZ1wiLFxyXG5cdFwiZmlyc3ROYW1lXCI6IFwiR2FyeSBLLlwiLFxyXG5cdFwibGFzdE5hbWVcIjogXCJZYXVcIixcclxuXHRcIm9jY3VwYXRpb25cIjogXCJEZXZlbG9wZXIuIERlc2lnbmVyLiBRdWFsaXR5IEFzc3VyYW5jZS5cIixcclxuXHRcImNvbnRhY3RcIjoge1xyXG5cdFx0XCJwaG9uZVwiOiBcIisxICg3NzgpIDg4MiAwNTI0XCIsXHJcblx0XHRcImVtYWlsXCI6IFwiZ3lhdTg4QGdtYWlsLmNvbVwiLFxyXG5cdFx0XCJsb2NhdGlvblwiOiBcIlZhbmNvdXZlciwgQkMsIENBXCIsXHJcblx0XHRcInNvY2lhbHNcIjpcclxuXHRcdFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwibmFtZVwiOiBcIkdpdEh1YlwiLFxyXG5cdFx0XHRcdFwibGlua1wiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9nYXJ5eWF1XCIsXHJcblx0XHRcdFx0XCJsaW5rVGV4dFwiOiBcImdpdGh1Yi5jb20vZ2FyeXlhdVwiLFxyXG5cdFx0XHRcdFwiaWNvbkNsYXNzZXNcIjogXCJ6bWRpIHptZGktZ2l0aHViLWFsdFwiLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJuYW1lXCI6IFwiTGlua2VkSW5cIixcclxuXHRcdFx0XHRcImxpbmtcIjogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vZ2FyeXlhdVwiLFxyXG5cdFx0XHRcdFwibGlua1RleHRcIjogXCJsaW5rZWRpbi5jb20vaW4vZ2FyeXlhdVwiLFxyXG5cdFx0XHRcdFwiaWNvbkNsYXNzZXNcIjogXCJ6bWRpIHptZGktbGlua2VkaW5cIixcclxuXHRcdFx0fSxcclxuXHRcdF1cclxuXHR9LFxyXG5cdFwib3ZlcnZpZXdcIjogXCJGcm9udGVuZCBkZXZlbG9wZXIgd2l0aCBhIHN0cm9uZyBwYXNzaW9uIGZvciBkZXZlbG9waW5nIGluc3BpcmF0aW9uYWwgd2ViIGFwcGxpY2F0aW9ucy4gRXhwZXJpZW5jZSBpbiBkaWZmZXJlbnQgdHlwZXMgb2YgbGFuZ3VhZ2VzIGFuZCBmcmFtZXdvcmtzIHdpdGggcXVpY2sgbGVhcm5pbmcgY2FwYWJpbGl0aWVzIHRvIGFkYXB0IGluIGRpZmZlcmVudCBwcm9qZWN0IHJlcXVpcmVtZW50cy4gRmxleGlibGUgaW4gZGlmZmVyZW50IHdvcmtpbmcgZW52aXJvbm1lbnRzLCBoYXZpbmcgd29ya2VkIGVmZmVjdGl2ZWx5IGJvdGggaW5kZXBlbmRlbnRseSBhbmQgYXMgYSB0ZWFtIGluIGFuIGFnaWxlIGRldmVsb3BtZW50IHByb2Nlc3MuIFVzZXMgc2tpbGxzZXRzIGluIHVzZXIgZXhwZXJpZW5jZSBkZXNpZ24sIHF1YWxpdHkgYXNzdXJhbmNlLCBhbmQgc29mdHdhcmUgZGV2ZWxvcG1lbnQgb250byBlYWNoIHByb2plY3Qgd2l0aCB0aGUgb2JqZWN0aXZlIG9mIGRlbGl2ZXJpbmcgaGlnaCBxdWFsaXR5IHByb2R1Y3RzLlwiLFxyXG5cdFwidGVjaG5pY2FsUHJvZmlsZVwiOlxyXG5cdFtcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiTGFuZ3VhZ2VzXCIsXHJcblx0XHRcdFwiaXRlbXNcIjpcclxuXHRcdFx0W1xyXG5cdFx0XHRcdFwiSmF2YVNjcmlwdCBFUzZcIixcclxuXHRcdFx0XHRcIkhUTUw1XCIsXHJcblx0XHRcdFx0XCJDU1MzXCIsXHJcblx0XHRcdFx0XCJBSkFYXCIsXHJcblx0XHRcdFx0XCJTQVNTXCIsXHJcblx0XHRcdFx0XCJQeXRob25cIixcclxuXHRcdFx0XHRcIlBIUFwiLFxyXG5cdFx0XHRcdC8vIFwiU1FMXCIsXHJcblx0XHRcdFx0Ly8gXCJKU09OXCIsXHJcblx0XHRcdF0sXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJGcmFtZXdvcmtzXCIsXHJcblx0XHRcdFwiaXRlbXNcIjpcclxuXHRcdFx0W1xyXG5cdFx0XHRcdFwiUmVhY3RcIixcclxuXHRcdFx0XHRcIlJlZHV4XCIsXHJcblx0XHRcdFx0XCJBbmd1bGFySlNcIixcclxuXHRcdFx0XHRcImpRdWVyeVwiLFxyXG5cdFx0XHRcdFwiRGphbmdvXCIsXHJcblx0XHRcdFx0XCJMYXJhdmVsXCIsXHJcblx0XHRcdFx0XCJOb2RlSlNcIixcclxuXHRcdFx0XSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcIlZlcnNpb24gQ29udHJvbFwiLFxyXG5cdFx0XHRcIml0ZW1zXCI6XHJcblx0XHRcdFtcclxuXHRcdFx0XHRcIkdpdCAoR2l0TGFiLCBHaXRIdWIpXCIsXHJcblx0XHRcdFx0XCJTdWJ2ZXJzaW9uIChUb3J0b2lzZVNWTilcIixcclxuXHRcdFx0XSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcIlByb2plY3QgVG9vbHNcIixcclxuXHRcdFx0XCJpdGVtc1wiOlxyXG5cdFx0XHRbXHJcblx0XHRcdFx0XCJHaXRMYWJcIixcclxuXHRcdFx0XHRcIkdpdEh1YlwiLFxyXG5cdFx0XHRcdFwiQ29uZmx1ZW5jZVwiLFxyXG5cdFx0XHRcdFwiSklSQVwiLFxyXG5cdFx0XHRdLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiRGVzaWduIFRvb2xzXCIsXHJcblx0XHRcdFwiaXRlbXNcIjpcclxuXHRcdFx0W1xyXG5cdFx0XHRcdFwiU2tldGNoXCIsXHJcblx0XHRcdFx0XCJJblZpc2lvblwiLFxyXG5cdFx0XHRcdFwiQWRvYmUgUGhvdG9zaG9wXCIsXHJcblx0XHRcdFx0XCJJbGx1c3RyYXRvclwiLFxyXG5cdFx0XHRcdFwibXlCYWxzYW1pcVwiLFxyXG5cdFx0XHRdLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiTWV0aG9kb2xvZ2llc1wiLFxyXG5cdFx0XHRcIml0ZW1zXCI6XHJcblx0XHRcdFtcclxuXHRcdFx0XHRcIkFnaWxlXCIsXHJcblx0XHRcdFx0XCJTY3J1bVwiLFxyXG5cdFx0XHRcdFwiVW5pdCBUZXN0XCIsXHJcblx0XHRcdFx0XCJSZXNwb25zaXZlIERlc2lnblwiLFxyXG5cdFx0XHRdLFxyXG5cdFx0fSxcclxuXHRdLFxyXG5cdFwid29ya0V4cGVyaWVuY2VcIjpcclxuXHRbXHJcblx0XHR7XHJcblx0XHRcdFwicG9zaXRpb25cIjogXCJTZW5pb3IgRnJvbnRlbmQgRGV2ZWxvcGVyXCIsXHJcblx0XHRcdFwiY29tcGFueVwiOiBcIlRoaW5raW5nYm94XCIsXHJcblx0XHRcdFwibG9jYXRpb25cIjogXCJWYW5jb3V2ZXIsIEJDLCBDYW5hZGFcIixcclxuXHRcdFx0XCJ0aW1lXCI6IFwiQXByaWwgMjAxOCAtIEN1cnJlbnRcIixcclxuXHRcdFx0XCJkZXNjcmlwdGlvblwiOiBcIkRldmVsb3AgbmV3IFBhYVMgd2ViIGFwcGxpY2F0aW9uIHRvIHByb3ZpZGUgaW50ZXJuYWwgc2VydmljZXMgYW5kIGxhcmdlIGNsaWVudHMgYW4gZWFzeSB3b3JrZmxvdyBmb3Igd2ViIHNpdGUgZGV2ZWxvcG1lbnQgYW5kIGRlcGxveW1lbnQuIEJ1aWx0IGZyb250IGVuZCB3ZWIgcGFnZXMgaW4gQW5ndWxhckpTLCBTQVNTIGFuZCBIVE1MIGJhc2VkIG9uIGRlc2lnbmVyIG1vY2t1cHMsIGNvbnN1bWluZyBhIFJFU1QgQVBJIGZvciBjb21tdW5pY2F0aW9uIHdpdGggYmFja2VuZCBzZXJ2ZXJzLiBJbnRlZ3JhdGUgYSBjdXN0b20gc3VwcG9ydCBwb3J0YWwgd2ViIGFwcGxpY2F0aW9uIHdpdGggZXh0ZXJuYWwgQ29ubmVjdFdpc2UgdGlja2V0aW5nIHNlcnZpY2UgZm9yIGFuIHVzZXIgZnJpZW5kbHkgY2xpZW50IGZhY2luZyBwb3J0YWwuIERlc2lnbmVkIHdpcmVmcmFtZXMgYW5kIG1vY2t1cHMgdGhyb3VnaCByZXF1aXJlbWVudCBtZWV0aW5ncyBhbmQgZGVzaWduIHJldmlldyBtZWV0aW5ncyB3aXRoIGNsaWVudHMgdG8gcHJvdmlkZSBhbiBpbnR1aXRpdmUgdXNlciBpbnRlcmZhY2UgZGVzaWduIGZvciBjbGllbnQncyBzYWZldHkgd2ViIGFwcGxpY2F0aW9uLiBNYW5hZ2VkIGEgdGVhbSBvZiBmb3VyIGRldmVsb3BlcnMgdGhyb3VnaCBzcHJpbnRzIGluIGFuIEFnaWxlIGRldmVsb3BtZW50IGVudmlyb25tZW50LlwiLFxyXG5cdFx0XHRcInBvaW50c1wiOlxyXG5cdFx0XHRbXHJcblx0XHRcdFx0XCJSZXNlYXJjaCBhbmQgZGV2ZWxvcCBwcm90b3R5cGVzIHRvIHVzZSBmcmFtZXdvcmtzIGluIHVuaXF1ZSB3YXlzIGluIG9yZGVyIHRvIHRlc3QgdGhlIGxpbWl0YXRpb25zIGFuZCBsZWFybiBtb3JlIGFib3V0IHRoZSBjcmVhdGl2ZSBwb3NzaWJpbGl0aWVzLlwiLFxyXG5cdFx0XHRcdFwiRGV2ZWxvcCBhbmQgc29sdXRpb25pbmcgY3JlYXRpdmUgaW50cmlndWluZyB3ZWJzaXRlcyBmb3IgY2xpZW50cyB0byBtb2Rlcm5pemUgdGhlIHRlY2hub2xvZ3kgYW5kIHN0eWxlIHRoYXQgdGhlIGNsaWVudCB1c2VzIGZvciBhZHZlcnRpc2luZy5cIixcclxuXHRcdFx0XHRcIkFkYXB0IGFuZCBsZWFybiBkaWZmZXJlbnQgZnJhbWV3b3JrcyBzdWNoIGFzIEZhY2Vib29rQVIgYW5kIFByaXNtaWMgQ01TIHRvIHByb3ZpZGUgZWFjaCBwcm9qZWN0IHdpdGggdGhlIGlkZWFsIHN0YWNrIGJhc2VkIG9uIHRoZSByZXF1aXJlbWVudHMgb2YgdGhlIHByb2plY3QuXCIsXHJcblx0XHRcdF1cclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwicG9zaXRpb25cIjogXCJJbnRlcm1lZGlhdGUgRnJvbnRlbmQgRGV2ZWxvcGVyL1NjcnVtIE1hc3RlclwiLFxyXG5cdFx0XHRcImNvbXBhbnlcIjogXCJBcHBub3ZhdGlvbiBUZWNobm9sb2dpZXNcIixcclxuXHRcdFx0XCJsb2NhdGlvblwiOiBcIlZhbmNvdXZlciwgQkMsIENhbmFkYVwiLFxyXG5cdFx0XHRcInRpbWVcIjogXCJNYXkgMjAxNiAtIE1hcmNoIDIwMThcIixcclxuXHRcdFx0XCJkZXNjcmlwdGlvblwiOiBcIkRldmVsb3AgbmV3IFBhYVMgd2ViIGFwcGxpY2F0aW9uIHRvIHByb3ZpZGUgaW50ZXJuYWwgc2VydmljZXMgYW5kIGxhcmdlIGNsaWVudHMgYW4gZWFzeSB3b3JrZmxvdyBmb3Igd2ViIHNpdGUgZGV2ZWxvcG1lbnQgYW5kIGRlcGxveW1lbnQuIEJ1aWx0IGZyb250IGVuZCB3ZWIgcGFnZXMgaW4gQW5ndWxhckpTLCBTQVNTIGFuZCBIVE1MIGJhc2VkIG9uIGRlc2lnbmVyIG1vY2t1cHMsIGNvbnN1bWluZyBhIFJFU1QgQVBJIGZvciBjb21tdW5pY2F0aW9uIHdpdGggYmFja2VuZCBzZXJ2ZXJzLiBJbnRlZ3JhdGUgYSBjdXN0b20gc3VwcG9ydCBwb3J0YWwgd2ViIGFwcGxpY2F0aW9uIHdpdGggZXh0ZXJuYWwgQ29ubmVjdFdpc2UgdGlja2V0aW5nIHNlcnZpY2UgZm9yIGFuIHVzZXIgZnJpZW5kbHkgY2xpZW50IGZhY2luZyBwb3J0YWwuIERlc2lnbmVkIHdpcmVmcmFtZXMgYW5kIG1vY2t1cHMgdGhyb3VnaCByZXF1aXJlbWVudCBtZWV0aW5ncyBhbmQgZGVzaWduIHJldmlldyBtZWV0aW5ncyB3aXRoIGNsaWVudHMgdG8gcHJvdmlkZSBhbiBpbnR1aXRpdmUgdXNlciBpbnRlcmZhY2UgZGVzaWduIGZvciBjbGllbnQncyBzYWZldHkgd2ViIGFwcGxpY2F0aW9uLiBNYW5hZ2VkIGEgdGVhbSBvZiBmb3VyIGRldmVsb3BlcnMgdGhyb3VnaCBzcHJpbnRzIGluIGFuIEFnaWxlIGRldmVsb3BtZW50IGVudmlyb25tZW50LlwiLFxyXG5cdFx0XHRcInBvaW50c1wiOlxyXG5cdFx0XHRbXHJcblx0XHRcdFx0XCJEZXZlbG9wIG5ldyBQYWFTIHdlYiBhcHBsaWNhdGlvbiB0byBwcm92aWRlIGludGVybmFsIHNlcnZpY2VzIGFuZCBsYXJnZSBjbGllbnRzIGFuIGVhc3kgd29ya2Zsb3cgZm9yIHdlYnNpdGUgZGV2ZWxvcG1lbnQgYW5kIGRlcGxveW1lbnQuXCIsXHJcblx0XHRcdFx0XCJCdWlsdCBmcm9udCBlbmQgd2ViIHBhZ2VzIGluIEFuZ3VsYXJKUywgU0FTUyBhbmQgSFRNTCBiYXNlZCBvbiBkZXNpZ25lciBtb2NrdXBzLCBjb25zdW1pbmcgYSBSRVNUIEFQSSBmb3IgY29tbXVuaWNhdGlvbiB3aXRoIGJhY2tlbmQgc2VydmVycy5cIixcclxuXHRcdFx0XHRcIkludGVncmF0ZSBhIGN1c3RvbSBzdXBwb3J0IHBvcnRhbCB3ZWIgYXBwbGljYXRpb24gd2l0aCBleHRlcm5hbCBDb25uZWN0V2lzZSB0aWNrZXRpbmcgc2VydmljZSBmb3IgYW4gdXNlciBmcmllbmRseSBjbGllbnQgZmFjaW5nIHBvcnRhbC5cIixcclxuXHRcdFx0XHRcIkRlc2lnbmVkIHdpcmVmcmFtZXMgYW5kIG1vY2t1cHMgdGhyb3VnaCByZXF1aXJlbWVudCBtZWV0aW5ncyBhbmQgZGVzaWduIHJldmlldyBtZWV0aW5ncyB3aXRoIGNsaWVudHMgdG8gcHJvdmlkZSBhbiBpbnR1aXRpdmUgdXNlciBpbnRlcmZhY2UgZGVzaWduIGZvciBjbGllbnQncyBzYWZldHkgd2ViIGFwcGxpY2F0aW9uLlwiLFxyXG5cdFx0XHRdXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcInBvc2l0aW9uXCI6IFwiSnVuaW9yIFNvZnR3YXJlIERldmVsb3BlclwiLFxyXG5cdFx0XHRcImNvbXBhbnlcIjogXCJESFggTWVkaWFcIixcclxuXHRcdFx0XCJsb2NhdGlvblwiOiBcIlZhbmNvdXZlciwgQkMsIENhbmFkYVwiLFxyXG5cdFx0XHRcInRpbWVcIjogXCJNYXIgMjAxNCAtIEFwciAyMDE2XCIsXHJcblx0XHRcdFwiZGVzY3JpcHRpb25cIjogXCJEZXZlbG9wIG5ldyB3ZWIgYXBwbGljYXRpb25zIGZyb20gcmVxdWlyZW1lbnRzIGdhdGhlcmluZywgc3ByaW50IHBsYW5uaW5nLCBhZ2lsZSBkZXZlbG9wbWVudCwgcm9sbG91dCB0byBzeXN0ZW0gbWFpbnRlbmFuY2UgdG8gcHJvdmlkZSB0aGUgc3R1ZGlvIHdpdGggdW5pcXVlbHkgYnVpbHQgc3lzdGVtcyB0byBzdWl0IHRoZSBuZWVkcyBvZiBtYXJrZXRpbmcsIGludGVyYWN0aXZlIGFuZCBwaXBlbGluZS4gQ29sbGFib3JhdGUgd2l0aCBhIHRlYW0gb2YgNCAtIDcgZGV2ZWxvcGVycyB0byBkZXNpZ24gYW5kIGFyY2hpdGVjdCB0aGUgc3RydWN0dXJlIG9mIHRoZSBwcm9qZWN0cyB0byBkZXRlcm1pbmUgdGhlIG9wdGltYWwgZGV2ZWxvcG1lbnQgYXBwcm9hY2ggYW5kIGJlc3QgdGVjaG5vbG9naWVzIHRvIHVzZS4gUmVzZWFyY2ggb24gZXh0ZXJuYWwgc3R1ZGlvIG1hbmFnZW1lbnQgc3lzdGVtLCBTaG90Z3VuLCB0byBhc3Nlc3MgdGhlIGNvbXBhdGliaWxpdHkgb2YgU2hvdGd1biB3aXRoIGRhaWx5IHdvcmtmbG93IG9mIHRoZSBzdHVkaW8uIERlc2lnbiBjdXN0b20gc3lzdGVtLCBBcnRlbWlzLCB0byBiZSB1c2VkIG9uIHRvcCBvZiBTaG90Z3VuIGluIG9yZGVyIHRvIGVuaGFuY2UgdGhlIGZlYXR1cmVzIHByb3ZpZGVkIGFuZCB0YWlsb3IgaXQgdG8gdGhlIG5lZWRzIG9mIHRoZSB1c2Vycy4gRGV2ZWxvcCBhbmQgaW1wbGVtZW50IGRpZmZlcmVudCBBUElzIHRvIHVwZ3JhZGUgbGVnYWN5IHN5c3RlbXMgdG8gdXNlIGEgdW5pZmllZCBkYXRhYmFzZSB3aGlsZSBwbGFubmluZyBmb3IgZnV0dXJlIHN5c3RlbXMgdG8gcHJvdmlkZSBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSB3aXRoIHRoZSBwYXN0IHN5c3RlbXMuXCIsXHJcblx0XHRcdFwicG9pbnRzXCI6XHJcblx0XHRcdFtcclxuXHRcdFx0XHRcIkRldmVsb3AgbmV3IHdlYiBhcHBsaWNhdGlvbnMgZnJvbSByZXF1aXJlbWVudHMgZ2F0aGVyaW5nLCBzcHJpbnQgcGxhbm5pbmcsIGFnaWxlIGRldmVsb3BtZW50LCByb2xsb3V0IHRvIHN5c3RlbSBtYWludGVuYW5jZSB0byBwcm92aWRlIHRoZSBzdHVkaW8gd2l0aCB1bmlxdWVseSBidWlsdCBzeXN0ZW1zIHRvIHN1aXQgdGhlIG5lZWRzIG9mIG1hcmtldGluZywgaW50ZXJhY3RpdmUgYW5kIHBpcGVsaW5lLlwiLFxyXG5cdFx0XHRcdFwiQ29sbGFib3JhdGUgd2l0aCBhIHRlYW0gb2YgNCAtIDcgZGV2ZWxvcGVycyB0byBkZXNpZ24gYW5kIGFyY2hpdGVjdCB0aGUgc3RydWN0dXJlIG9mIHRoZSBwcm9qZWN0cyB0byBkZXRlcm1pbmUgdGhlIG9wdGltYWwgZGV2ZWxvcG1lbnQgYXBwcm9hY2ggYW5kIGJlc3QgdGVjaG5vbG9naWVzIHRvIHVzZS5cIixcclxuXHRcdFx0XHRcIlJlc2VhcmNoIG9uIGV4dGVybmFsIHN0dWRpbyBtYW5hZ2VtZW50IHN5c3RlbSwgU2hvdGd1biwgdG8gYXNzZXNzIHRoZSBjb21wYXRpYmlsaXR5IG9mIFNob3RndW4gd2l0aCBkYWlseSB3b3JrZmxvdyBvZiB0aGUgc3R1ZGlvLiBEZXNpZ24gY3VzdG9tIHN5c3RlbSwgQXJ0ZW1pcywgdG8gYmUgdXNlZCBvbiB0b3Agb2YgU2hvdGd1biBpbiBvcmRlciB0byBlbmhhbmNlIHRoZSBmZWF0dXJlcyBwcm92aWRlZCBhbmQgdGFpbG9yIGl0IHRvIHRoZSBuZWVkcyBvZiB0aGUgdXNlcnMuXCIsXHJcblx0XHRcdFx0XCJEZXZlbG9wIGFuZCBpbXBsZW1lbnQgZGlmZmVyZW50IEFQSXMgdG8gdXBncmFkZSBsZWdhY3kgc3lzdGVtcyB0byB1c2UgYSB1bmlmaWVkIGRhdGFiYXNlIHdoaWxlIHBsYW5uaW5nIGZvciBmdXR1cmUgc3lzdGVtcyB0byBwcm92aWRlIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IHdpdGggdGhlIHBhc3Qgc3lzdGVtcy5cIixcclxuXHRcdFx0XVxyXG5cdFx0fSxcclxuXHRcdC8vIHtcclxuXHRcdC8vIFx0XCJwb3NpdGlvblwiOiBcIlF1YWxpdHkgQXNzdXJhbmNlIFRlc3RlclwiLFxyXG5cdFx0Ly8gXHRcImNvbXBhbnlcIjogXCJFbGVjdHJvbmljIEFydHMgQ2FuYWRhXCIsXHJcblx0XHQvLyBcdFwibG9jYXRpb25cIjogXCJCdXJuYWJ5LCBCQywgQ2FuYWRhXCIsXHJcblx0XHQvLyBcdFwidGltZVwiOiBcIkp1biAyMDA4IC0gU2VwIDIwMTFcIixcclxuXHRcdC8vIFx0XCJkZXNjcmlwdGlvblwiOiBcIlRlc3RlZCBnYW1pbmcgc29mdHdhcmUgZm9yIE5pbnRlbmRvIFdpaSwgWGJveCAzNjAgYW5kIFBsYXlTdGF0aW9uIDMgdG8gZW5zdXJlIHRoZSBxdWFsaXR5IG9mIHRoZSBjb21wYW55J3MgcHJvZHVjdCwgYWxsb3dpbmcgc3VjY2Vzc2Z1bCBmaXJzdC10aW1lIHBhc3NlcyBvbiBzZXZlcmFsIGZpcnN0LXBhcnR5IGNlcnRpZmljYXRpb25zLiBTcGVjaWFsaXplZCBpbiBOaW50ZW5kbyBjb21wbGlhbmNlIGFuZCBjcmVhdGVkIGNvbXBsaWFuY2UgdGVzdCBjYXNlcyBmb3IgRUEgU1BPUlRTIEFjdGl2ZSBhbmQgRUEgU1BPUlRTIEFjdGl2ZSBNb3JlIFdvcmtvdXRzIHVzaW5nIERldlRlc3QgdG8gZ3VpZGUgY29tcGxpYW5jZSB0ZXN0ZXJzIGR1cmluZyBkZXZlbG9wbWVudCBwcm9jZXNzLiBDb2xsYWJvcmF0ZWQgd2l0aCBwcm9qZWN0IG1hbmFnZXJzLCB0ZWFtIGxlYWRzIGFuZCBvdGhlciB0ZXN0ZXJzIHRvIGFuYWx5emUgdGhlIGNvdmVyYWdlIGFuZCByaXNrcyBvZiBlYWNoIHRlc3Qgc3VpdGUsIGVuc3VyaW5nIHRoYXQgdGhlIHJlcXVpcmVtZW50cyBvZiB0aGUgc29mdHdhcmUgd2FzIG1ldCB3aGlsZSB2YWxpZGF0aW5nIHRoZSBzdGFiaWxpdHkgb2YgZWFjaCBidWlsZCBhcyB0aGUgcHJvamVjdCBwcm9ncmVzc2VkLlwiLFxyXG5cdFx0Ly8gXHRcInBvaW50c1wiOlxyXG5cdFx0Ly8gXHRbXHJcblx0XHQvLyBcdFx0XCJUZXN0ZWQgZ2FtaW5nIHNvZnR3YXJlIGZvciBOaW50ZW5kbyBXaWksIFhib3ggMzYwIGFuZCBQbGF5U3RhdGlvbiAzIHRvIGVuc3VyZSB0aGUgcXVhbGl0eSBvZiB0aGUgY29tcGFueSdzIHByb2R1Y3QsIGFsbG93aW5nIHN1Y2Nlc3NmdWwgZmlyc3QtdGltZSBwYXNzZXMgb24gc2V2ZXJhbCBmaXJzdC1wYXJ0eSBjZXJ0aWZpY2F0aW9ucy5cIixcclxuXHRcdC8vIFx0XHRcIlNwZWNpYWxpemVkIGluIE5pbnRlbmRvIGNvbXBsaWFuY2UgYW5kIGNyZWF0ZWQgY29tcGxpYW5jZSB0ZXN0IGNhc2VzIGZvciBFQSBTUE9SVFMgQWN0aXZlIGFuZCBFQSBTUE9SVFMgQWN0aXZlIE1vcmUgV29ya291dHMgdXNpbmcgRGV2VGVzdCB0byBndWlkZSBjb21wbGlhbmNlIHRlc3RlcnMgZHVyaW5nIGRldmVsb3BtZW50IHByb2Nlc3MuXCIsXHJcblx0XHQvLyBcdFx0XCJDb2xsYWJvcmF0ZWQgd2l0aCBwcm9qZWN0IG1hbmFnZXJzLCB0ZWFtIGxlYWRzIGFuZCBvdGhlciB0ZXN0ZXJzIHRvIGFuYWx5emUgdGhlIGNvdmVyYWdlIGFuZCByaXNrcyBvZiBlYWNoIHRlc3Qgc3VpdGUsIGVuc3VyaW5nIHRoYXQgdGhlIHJlcXVpcmVtZW50cyBvZiB0aGUgc29mdHdhcmUgd2FzIG1ldCB3aGlsZSB2YWxpZGF0aW5nIHRoZSBzdGFiaWxpdHkgb2YgZWFjaCBidWlsZCBhcyB0aGUgcHJvamVjdCBwcm9ncmVzc2VkLlwiLFxyXG5cdFx0Ly8gXHRdXHJcblx0XHQvLyB9LFxyXG5cdF0sXHJcblx0XCJlZHVjYXRpb25cIjpcclxuXHRbXHJcblx0XHR7XHJcblx0XHRcdFwic2Nob29sXCI6IFwiU2ltb24gRnJhc2VyIFVuaXZlcnNpdHlcIixcclxuXHRcdFx0XCJwcm9ncmFtXCI6IFwiTWFqb3IgaW4gQ29tcHV0aW5nIFNjaWVuY2VcIixcclxuXHRcdFx0XCJmYWN1bHR5XCI6IFwiQmFjaGVsb3Igb2YgU2NpZW5jZVwiLFxyXG5cdFx0XHRcInRpbWVcIjogXCJEZWMgMjAxM1wiLFxyXG5cdFx0XHRcImRlc2NyaXB0aW9uXCI6IFwiRm9jdXNlZCBvbiBPYmplY3QtT3JpZW50ZWQgUHJvZ3JhbW1pbmcgYW5kIG90aGVyIHNvZnR3YXJlIGRldmVsb3BtZW50IGNvbmNlcHRzIHN1Y2ggYXMgZGF0YWJhc2UgZGVzaWduLCBuZXR3b3JraW5nIGFuZCBzb2Z0d2FyZSBlbmdpbmVlcmluZy5cIixcclxuXHRcdH1cclxuXHRdLFxyXG5cdFwicHJvamVjdHNcIjpcclxuXHRbXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcIlNpcyBLbm93cyBCZXN0IEZhY2Vib29rIEluc3RhbnQgR2FtZVwiLFxyXG5cdFx0XHRcImxvY2F0aW9uXCI6IFwiVGhpbmtpbmdib3hcIixcclxuXHRcdFx0XCJyb2xlc1wiOiBbXCJTZW5pb3IgRnJvbnRlbmQgRGV2ZWxvcGVyXCJdLFxyXG5cdFx0XHRcInN0YWNrXCI6IFtcIkZhY2Vib29rIFBsYXRmb3JtXCIsIFwiR1NBUFwiLCBcIkNhbnZhc1wiXSxcclxuXHRcdFx0XCJkZXNjcmlwdGlvblwiOiBcIkRldmVsb3BlZCBhIHNoYXJlYWJsZSBxdWl6IEZhY2Vib29rIEluc3RhbnQgR2FtZSB0byBwcm9tb3RlIHRoZSBtb3ZpZSBOb2JvZHkncyBGb29sLiBXb3JrZWQgdG9nZXRoZXIgd2l0aCBhbiBJbnRlcmFjdGl2ZSBEZXZlbG9wZXIgYW5kIGNyZWF0aXZlcyB0byBpbnRlZ3JhdGUgYW4gZW5nYWdpbmcgZXhwZXJpZW5jZSwgd2hpbGUgYWxzbyByZXBvcnRpbmcgYW55IGZvdW5kIGlzc3VlcyB3aXRoIHRoZSBGYWNlYm9vayBmcmFtZXdvcmsuIFVzZWQgR1NBUCB0byBjcmVhdGUgYSByZXNwb25zaXZlIGFuZCBlbmdhZ2luZyBleHBlcmllbmNlIGZvciB1c2VycyB0byBpbW1lcnNlIHRoZW1zZWx2ZXMgaW50byB0aGUgcHJvamVjdC5cIlxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiVmFuY291dmVyIEFxdWFyaXVtIFdlYnNpdGUgUmVmcmVzaFwiLFxyXG5cdFx0XHRcImxvY2F0aW9uXCI6IFwiVGhpbmtpbmdib3hcIixcclxuXHRcdFx0XCJyb2xlc1wiOiBbXCJTZW5pb3IgRnJvbnRlbmQgRGV2ZWxvcGVyXCJdLFxyXG5cdFx0XHRcInN0YWNrXCI6IFtcIkNvbmNyZXRlNVwiLCBcIkphdmFzY3JpcHRcIiwgXCJMRVNTXCJdLFxyXG5cdFx0XHRcImRlc2NyaXB0aW9uXCI6IFwiUmVzZWFyY2hlZCBvbiB2YXJpZXR5IG9mIENNUyB0byBwcm92aWRlIGNsaWVudCB3aXRoIHRoZSBiZXN0IG9wdGlvbiBmb3IgdGhlaXIgcmVxdWlyZW1lbnRzLiBXb3JrZWQgd2l0aCBhIHRlYW0gb2YgZm91ciBkZXZlbG9wZXJzIHRvIGRpc2NvdmVyIHRoZSB1c2FiaWxpdHkgYW5kIGxpbWl0YXRpb25zIG9mIENvbmNyZXRlNSwgYWxsb3dpbmcgYSBzbW9vdGggZGV2ZWxvcG1lbnQgY3ljbGUuIERldmVsb3BlZCBhIHJldXNhYmxlIGJsb2NrIGxheW91dCB1c2luZyBDb25jcmV0ZTUgdGhhdCBhbGxvd3MgY2xpZW50IHRvIGFkZCB0byBhbmQgcmVzdHJ1Y3R1cmUgdGhlIHdlYnNpdGUgYWZ0ZXIgaGFuZC1vZmYgd2hpbGUgbWFpbnRhaW5pbmcgYSBjb25zaXN0ZW50IGRlc2lnbiB0aHJvdWdob3V0LlwiXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJQcm9kdWN0aW9uIE1hbmFnZW1lbnQgU3lzdGVtXCIsXHJcblx0XHRcdFwibG9jYXRpb25cIjogXCJESFggTWVkaWFcIixcclxuXHRcdFx0XCJyb2xlc1wiOiBbXCJTY3J1bSBNYXN0ZXJcIiwgXCJTb2Z0d2FyZSBEZXZlbG9wZXJcIiwgXCJVWCBEZXNpZ25lclwiXSxcclxuXHRcdFx0XCJzdGFja1wiOiBbXCJEamFuZ28sIEFuZ3VsYXJKUywgSFRNTCwgU0NTUywgTXlTUUxcIl0sXHJcblx0XHRcdFwiZGVzY3JpcHRpb25cIjogXCJEZXNpZ25lZCBhbmQgZGV2ZWxvcGVkIHRhc2sgbWFuYWdlbWVudCBzeXN0ZW0gYW5kIHNob3cgYnJlYWtkb3duIHN5c3RlbSBhbG9uZ3NpZGUgZXh0ZXJuYWwgc3lzdGVtLCBTaG90Z3VuLCB0byBpbnRlZ3JhdGUgU2hvdGd1biBpbnRvIHN0dWRpbyBwaXBlbGluZSB3aGlsZSBtYWludGFpbmluZyBsZWdhY3kgc3lzdGVtIGZlYXR1cmVzLiBEZXZlbG9wZWQgYW4gQVBJIHRvIHByb3ZpZGUgY29tbXVuaWNhdGlvbiBiZXR3ZWVuIFNob3RndW4gYW5kIGxlZ2FjeSBzeXN0ZW0sIGFsbG93aW5nIGNvcnBvcmF0ZSBkZXBhcnRtZW50cyB0byBjb250aW51ZSB1c2luZyBsZWdhY3kgc3lzdGVtIHRvIGVudGVyIHVzZXIgaW5mb3JtYXRpb24gd2hpbGUgZW5zdXJlIGluZm9ybWF0aW9uIGlzIHBhc3NlZCB0byBTaG90Z3VuLiBMZWQgYSB0ZWFtIG9mIGZpdmUgZGV2ZWxvcGVycyBpbiBhbiBBZ2lsZSBzY3J1bSBlbnZpcm9ubWVudCwgYWxsb3dpbmcgdGFza3MgdG8gYmUgY29tcGxldGVkIHdpdGhpbiBkZWFkbGluZXMgd2hpbGUgcmVwb3J0aW5nIHRvIEhlYWQgb2YgU29mdHdhcmUgRGVwYXJ0bWVudCBvbiBzY2hlZHVsZSBhZGp1c3RtZW50cy5cIixcclxuXHRcdH0sXHJcblx0XHQvLyB7XHJcblx0XHQvLyBcdFwibmFtZVwiOiBcIk11c2UgQ2xpZW50IFJldmlld1wiLFxyXG5cdFx0Ly8gXHRcImxvY2F0aW9uXCI6IFwiREhYIE1lZGlhXCIsXHJcblx0XHQvLyBcdFwicm9sZXNcIjogW1wiU29mdHdhcmUgRGV2ZWxvcGVyXCJdLFxyXG5cdFx0Ly8gXHRcInN0YWNrXCI6IFtcIkRqYW5nbywgQW5ndWxhckpTLCBIVE1MLCBTQ1NTLCBNeVNRTFwiXSxcclxuXHRcdC8vIFx0XCJkZXNjcmlwdGlvblwiOiBcIkRldmVsb3BlZCBhbiBleHRlcm5hbCBjbGllbnQgcmV2aWV3IHN5c3RlbSBjb25uZWN0ZWQgdG8gc3R1ZGlvIHRhc2sgbWFuYWdlbWVudCBzeXN0ZW0gdGhyb3VnaCBhbiBBUEksIGFsbG93aW5nIGNvb3JkaW5hdG9ycyB0byBzZW5kIGNvbXBsZXRlZCBhc3NldHMgYW5kIHNob3RzIGZvciBjbGllbnQgcmV2aWV3LiBXb3JrZWQgaW4gYSB0ZWFtIG9mIGZpdmUgZGV2ZWxvcGVycyBhbmQgYSBkZXNpZ25lciBpbiBhIHNwcmludCBlbnZpcm9ubWVudCB0byBwbGFuIGFuZCBkZXNpZ24gdGhlIGRldmVsb3BtZW50IGFyY2hpdGVjdHVyZSBmb3IgdGhlIGFwcGxpY2F0aW9uIGVuc3VyZSBhbGwgcmVxdWlyZW1lbnRzIHdlcmUgY29uc2lkZXJlZCBpbiB0aGUgZGVzaWduLlwiLFxyXG5cdFx0Ly8gfSxcclxuXHRcdC8vIHtcclxuXHRcdC8vIFx0XCJuYW1lXCI6IFwiTmVyZCBDb3JwcyBQcm9kdWN0aW9uIFNpdGVzXCIsXHJcblx0XHQvLyBcdFwibG9jYXRpb25cIjogXCJESFggTWVkaWFcIixcclxuXHRcdC8vIFx0XCJyb2xlc1wiOiBbXCJTb2Z0d2FyZSBEZXZlbG9wZXJcIl0sXHJcblx0XHQvLyBcdFwic3RhY2tcIjogW1wiTGFyYXZlbFwiLCBcImpRdWVyeVwiLCBcIkhUTUxcIiwgXCJTQ1NTXCIsIFwiTXlTUUxcIl0sXHJcblx0XHQvLyBcdFwiZGVzY3JpcHRpb25cIjogXCJEZXNpZ24gYW5kICBkZXZlbG9wZWQgY3VzdG9tIENvbnRlbnQgTWFuYWdlbWVudCBTeXN0ZW0gZm9yIHN0dWRpbyBwcm9kdWN0aW9uIHNpdGVzLCBwcm92aWRpbmcgYSB3YXkgdG8gcGVyZm9ybSBlZmZpY2llbnQgdXBkYXRlcyB0byB3ZWJzaXRlIGNvbnRlbnRzIGluIHRoZSBmdXR1cmUuIERldmVsb3BlZCBtdWx0aXBsZSBwcm9kdWN0aW9uIHdlYnNpdGVzIHN1Y2ggYXMga2F0ZWFuZG1pbW1pbS5jYSB3aXRoIG11bHRpLWJyb3dzZXIgc3VwcG9ydCBhbmQgcmVzcG9uc2l2ZSBkZXNpZ24gdG8gcHJvdmlkZSBraWRzIHdpdGggYSBmdW4gYW5kIGludGVyYWN0aXZlIGxvY2F0aW9uIHRvIGxlYXJuIG1vcmUgYWJvdXQgdGhlIHNob3cgYW5kIHJlY2VpdmUgdXBkYXRlcy5cIixcclxuXHRcdC8vIH0sXHJcblx0XSxcclxuXHRcImNvdmVyTGV0dGVyXCI6IHtcclxuXHRcdFwiY29udGVudFwiOiBcIlwiXHJcblx0fVxyXG59XHJcbiJdfQ==
