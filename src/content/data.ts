import type { Resume } from '@/types/resume';

export const data: Resume = {
	personalInfo: {
		name: 'Gary Yau',
		title: 'Frontend Web Developer',
		email: 'gyau88@gmail.com',
		linkedin: 'linkedin.com/in/garyyau/',
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
						`Fostered long-term client relationships by communicating technical decisions clearly and delivering consistently strong results across diverse project scopes.`,
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
						`Used GSAP and SVGs to build motion-rich microsites, exploring animation techniques that enhanced interactivity and visual storytelling.`,
						`Collaborated with designers to bring standout digital experiences to life, updating both the look and the underlying tech for clients.`,
						`Readily adopted tools such as Facebook AR and Prismic CMS to tailor each build to project requirements.`,
					],
				},
			],
		},
		{
			startDate: 'May 2016',
			endDate: 'Mar 2018',
			location: 'Vancouver, BC',
			company: 'Appnovation Technologies',
			positions: [
				{
					title: 'Intermediate Frontend Developer/Scrum Master',
					descriptions: [
						`Developed a new PaaS web app enabling internal teams and enterprise clients to streamline website creation, deployment, and maintenance workflows.`,
						`Built frontend interfaces in AngularJS and SASS, translating mockups into responsive pages and integrating with REST APIs to connect backend services.`,
						`Integrated a custom support portal with the ConnectWise ticketing system, creating a seamless, client-facing tool for streamlined issue tracking.`,
						`Designed wireframes and UI mockups in close collaboration with clients, translating requirements into intuitive interfaces for a safety-focused web application.`,
					],
				},
			],
		},
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
			name: 'Briar Release Teaser Embed',
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
			technologies: ['Vue 2', 'TypeScript', 'TailwindCSS', 'GSAP'],
		},
		{
			date: 'Jun 2021',
			company: 'BOND x Riot Games',
			name: 'Teamfight Tactics Skyglass Origins',
			descriptions: [
				`Built the first-ever in-client hub for Teamfight Tactics, creating a mission-driven engine that rewarded player progression through interactive states.`,
				`Implemented video-based UI transitions, giving creatives fine-grained control over animations and deepening player immersion throughout the hub experience.`,
			],
			technologies: ['Vue 2', 'TypeScript', 'TailwindCSS', 'GSAP'],
		},
	],
	capabilities: [
		{
			name: 'Development',
			list: [
				'TypeScript',
				'JavaScript',
				'Vue 2 & 3',
				'React',
				'GSAP',
				'Tailwind CSS',
				'Git',
			],
		},
		{
			name: 'Design',
			list: [
				'Figma',
				'Adobe Photoshop',
				'Adobe Illustrator',
				'Design Systems',
			],
		},
		{
			name: 'Project Management',
			list: ['Jira', 'Asana', 'Notion', 'Google Suite', 'Slack'],
		},
		{
			name: 'Work Vibes',
			list: [
				'Reliable',
				'Organized',
				'Detail-oriented',
				'Adaptable',
				'Design-sensitive',
				'Collaborative',
				'Empathetic',
			],
		},
	],
	education: {
		school: 'Simon Fraser University',
		location: 'Vancouver, BC',
		degree: 'Bachelor of Science - Computer Science',
		date: 'Dec 2013',
	},
};
