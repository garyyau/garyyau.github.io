import type { Resume } from '@/types/resume';

export const data: Resume = {
	personalInfo: {
		name: 'Gary Yau',
		title: 'Frontend Web Developer',
		email: 'gyau88@gmail.com',
		linkedin: 'linkedin.com/garyyau/',
		location: 'Coquitlam, BC, Canada',
	},
	summary: `Frontend developer with strong engineering skills, a sharp eye for design, and a detail-oriented mindset grounded in QA—paired with reliable project coordination and a talent for clear, collaborative communication. I bridge design and engineering, adapt quickly to new tools, and care deeply about creating web experiences that are pixel-perfect and push creative limitations.`,
	experience: [
		{
			startDate: 'Jan 2020',
			endDate: null,
			company: 'BOND',
			location: 'Remote',
			positions: [
				{
					title: 'Technical Lead',
					descriptions: [
						`Developed engineering workflows and contributed across projects while offering design-focused feedback to ensure polished, high quality executions.`,
						`Led client communications, providing both technical and project guidance to keep expectations clear and decisions moving forward.`,
						`Defined budgets, timelines, and scopes of work to align cross-functional teams and guide successful project delivery.`,
					],
					startDate: 'Apr 2023',
				},
				{
					title: 'Senior Web Developer',
					descriptions: [
						`Led frontend builds from architecture to launch, coordinating junior developers and navigating client feedback to deliver polished, on-time campaign sites.`,
						`Mentored junior developers through code reviews and onboarding, promoting shared patterns and thoughtful problem-solving across the team.`,
					],
					startDate: 'Oct 2021',
					endDate: 'Apr 2023',
				},
				{
					title: 'Web Developer',
					descriptions: [
						`Adapted quickly to new frameworks such as Vue 2 and Tailwind, contributing to numerous fast-paced client projects with a strong focus on design fidelity and code quality`,
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
			company: 'Thinkingbox',
			location: 'Vancouver, BC',
			positions: [
				{
					title: 'Senior Frontend Developer',
					descriptions: [
						`Prototyped with different frameworks to push their creative limits and assess technical possibilities.`,
						`Collaborated with designers to bring standout digital experiences to life, updating both the look and the underlying tech for clients.`,
						`Readily adopted  tools such as Facebook AR and Prismic CMS to tailor each build to project requirements.`,
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
		// 			descriptions: [
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
		// 			descriptions: [
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
			date: 'Jun 2025',
			company: 'BOND x Warner Bros',
			name: 'F1® The Movie Racing Card Generator',
			descriptions: [
				`Navigated changing requirements and tech hurdles, resolving issues quickly to maintain momentum across tight timelines and evolving client needs.`,
				`Partnered with designers from early UX to final UI, contributing technical insight to ensure feasibility, performance, and a clear user experience.`,
			],
			technologies: ['Vue 2', 'TypeScript', 'TailwindCSS'],
		},
		{
			date: 'Aug 2023',
			company: 'BOND x Riot Games',
			name: 'Briar Teaser Embed',
			descriptions: [
				`Built a modular component system with two developers to seamlessly link videos based on randomization and player input, creating an interactive teaser that reacted to viewer choices.`,
				`Helped shape the system’s dynamic logic by aligning technical structure with the client’s creative vision—offering UX-driven input to bring the interactivity to life.`,
			],
			technologies: ['Vue 2', 'TypeScript', 'TailwindCSS'],
		},
		{
			date: 'Jul 2022',
			company: 'BOND x Riot Games',
			name: 'Another Sky (Star Guardian)',
			descriptions: [
				`Engineered a dynamic visual novel experience driven by narrative and creative config files—supporting thousands of scenes and hundreds of assets across a highly customizable story framework.`,
				`Collaborated with Riot Games creatives to elevate storytelling through animation—using motion backgrounds, expressive transitions, and cinematic scene changes to match the anime-style narratives.`,
			],
			technologies: ['Vue 2', 'TypeScript', 'TailwindCSS'],
		},
	],
	education: {
		school: 'Simon Fraser University',
		location: 'Vancouver, BC',
		degree: 'Bachelor of Science - Computer Science',
		date: 'Dec 2013',
	},
};
