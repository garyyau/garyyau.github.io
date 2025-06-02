export interface WorkExperience {
	company: string;
	location: string;
	startDate: string;
	endDate?: string;
	positions: {
		title: string;
		achievements: string[];
		startDate?: string;
		endDate?: string;
	}[];
}

export interface Project {
	title: string;
	company: string;
	description: string;
	positions: string[];
	technologies: string[];
}

export interface Resume {
	personalInfo: {
		name: string;
		title: string;
		email: string;
		linkedin: string;
		location: string;
	};
	summary: string;
	experience: WorkExperience[];
	projects: Project[];
}
