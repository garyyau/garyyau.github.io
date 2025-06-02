import type { Resume } from '@/types/resume';

export const data: Resume = {
	personalInfo: {
		name: 'Gary Yau',
		title: 'Frontend Web Developer',
		email: 'gyau88@gmail.com',
		linkedin: 'linkedin.com/garyyau/',
		location: 'Vancouver, BC, Canada',
	},
	summary:
		'Frontend developer with strong engineering skills, a sharp eye for design, and a detail-oriented mindset grounded in QA—paired with reliable project coordination and a talent for clear, collaborative communication. I bridge design and engineering, adapt quickly to new tools, and care deeply about creating web experiences that are pixel-perfect and push creative limitations.',

	experience: [
		{
			startDate: 'Jan 2020',
			endDate: null,
			location: 'Remote',
			company: 'BOND',
			positions: [
				{
					title: 'Technical Lead',
					achievements: [
						'Developed engineering workflows and contributed across projects while offering design-focused feedback to ensure polished, high quality executions.',
						'Led client communications, providing both technical and project guidance to keep expectations clear and decisions moving forward.',
						'Defined budgets, timelines, and scopes of work to align cross-functional teams and guide successful project delivery.',
					],
					startDate: 'Apr 2023',
				},
				{
					title: 'Senior Web Developer',
					achievements: [
						`Led frontend builds from architecture to launch, coordinating junior devs and navigating client feedback to deliver polished, on-time campaign sites.`,
						`Mentored junior developers through code reviews and onboarding, promoting shared patterns and thoughtful problem-solving across the team.`,
					],
					startDate: 'Oct 2021',
					endDate: 'Apr 2023',
				},
				{
					title: 'Web Developer',
					achievements: [
						`Adapted quickly to new frameworks like Vue 2 and Tailwind, contributing to dozens of fast-paced client projects with a strong focus on design fidelity and code quality.`,
						`Collaborated with designers and clients to deliver standout digital experiences—most notably Spirit Bonds, the first-ever interactive visual novel within the League of Legends client.`,
					],
					startDate: 'Jan 2020',
					endDate: 'Oct 2021',
				},
			],
		},
		{
			startDate: 'Apr 2018',
			endDate: 'Dec 2019',
			location: 'Vancouver, BC',
			company: 'Thinkingbox',
			positions: [
				{
					title: 'Senior Frontend Developer',
					achievements: [
						'Prototyped with different frameworks to push their creative limits and figure out what’s technically possible.',
						'Collaborated with designers to bring standout digital experiences to life, updating both the look and the underlying tech for clients.',
						'Quickly picked up tools like Facebook AR and Prismic CMS to tailor each build to the needs of the project.',
					],
				},
			],
		},
		// {
		// 	startDate: 'May 2016',
		// 	endDate: 'Mar 2018',
		// 	location: 'Vancouver, BC',
		// 	company: 'Appnovation Technologies',
		// 	positions: [
		// 		{
		// 			title: 'Intermediate Frontend Developer/Scrum Master',
		// 			achievements: [
		// 				'Develop new PaaS web application to provide internal services and large clients an easy workflow for website development and deployment.',
		// 				'Built front end web pages in AngularJS, SASS and HTML based on designer mockups, consuming a REST API for communication with backend servers.',
		// 				'Integrate a custom support portal web application with external ConnectWise ticketing service for an user friendly client facing portal.',
		// 				"Designed wireframes and mockups through requirement meetings and design review meetings with clients to provide an intuitive user interface design for client's safety web application.",
		// 			],
		// 		},
		// 	],
		// },
		// {
		// 	startDate: 'Mar 2014',
		// 	endDate: 'Apr 2016',
		// 	location: 'Vancouver, BC',
		// 	company: 'DHX Media',
		// 	positions: [
		// 		{
		// 			title: 'Junior Software Developer',
		// 			achievements: [
		// 				'Develop new web applications from requirements gathering, sprint planning, agile development, rollout to system maintenance to provide the studio with uniquely built systems to suit the needs of marketing, interactive and pipeline.',
		// 				'Collaborate with a team of 4 - 7 developers to design and architect the structure of the projects to determine the optimal development approach and best technologies to use.',
		// 				'Research on external studio management system, Shotgun, to assess the compatibility of Shotgun with daily workflow of the studio. Design custom system, Artemis, to be used on top of Shotgun in order to enhance the features provided and tailor it to the needs of the users.',
		// 				'Develop and implement different APIs to upgrade legacy systems to use a unified database while planning for future systems to provide backwards compatibility with the past systems.',
		// 			],
		// 		},
		// 	],
		// },
	],
	projects: [
		{
			title: 'Sis Knows Best Facebook Instant Game',
			company: 'Thinkingbox',
			description: `Developed a shareable quiz Facebook Instant Game to promote the movie Nobody's Fool. Worked together with an Interactive Developer and creatives to integrate an engaging experience, while also reporting any found issues with the Facebook framework. Used GSAP to create a responsive and engaging experience for users to immerse themselves into the project.`,
			positions: ['Senior Frontend Developer'],
			technologies: ['Facebook Platform', 'GSAP', 'Canvas'],
		},
		// {
		// 	title: 'Vancouver Aquarium Website Refresh',
		// 	company: 'Thinkingbox',
		// 	description:
		// 		'Researched on variety of CMS to provide client with the best option for their requirements. Worked with a team of four developers to discover the usability and limitations of Concrete5, allowing a smooth development cycle. Developed a reusable block layout using Concrete5 that allows client to add to and restructure the website after hand-off while maintaining a consistent design throughout.',
		// 	positions: ['Senior Frontend Developer'],
		// 	technologies: ['Concrete5', 'Javascript', 'LESS'],
		// },
		// {
		// 	title: 'Production Management System',
		// 	company: 'DHX Media',
		// 	description:
		// 		'Designed and developed task management system and show breakdown system alongside external system, Shotgun, to integrate Shotgun into studio pipeline while maintaining legacy system features. Developed an API to provide communication between Shotgun and legacy system, allowing corporate departments to continue using legacy system to enter user information while ensure information is passed to Shotgun. Led a team of five developers in an Agile scrum environment, allowing tasks to be completed within deadlines while reporting to Head of Software Department on schedule adjustments.',
		// 	positions: ['Scrum Master', 'Software Developer', 'UX Designer'],
		// 	technologies: ['Django, AngularJS, HTML, SCSS, MySQL'],
		// },
		// {
		// 	title: 'Muse Client Review',
		// 	company: 'DHX Media',
		// 	description:
		// 		'Developed an external client review system connected to studio task management system through an API, allowing coordinators to send completed assets and shots for client review. Worked in a team of five developers and a designer in a sprint environment to plan and design the development architecture for the application ensure all requirements were considered in the design.',
		// 	positions: ['Software Developer'],
		// 	technologies: ['Django, AngularJS, HTML, SCSS, MySQL'],
		// },
		// {
		// 	title: 'Nerd Corps Production Sites',
		// 	company: 'DHX Media',
		// 	description:
		// 		'Design and  developed custom Content Management System for studio production sites, providing a way to perform efficient updates to website contents in the future. Developed multiple production websites such as kateandmimmim.ca with multi-browser support and responsive design to provide kids with a fun and interactive location to learn more about the show and receive updates.',
		// 	positions: ['Software Developer'],
		// 	technologies: ['Laravel', 'jQuery', 'HTML', 'SCSS', 'MySQL'],
		// },
	],
};
