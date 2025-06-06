export interface WorkExperience {
	startDate: string;
	endDate?: string;
	company: string;
	location: string;
	positions: {
		title: string;
		descriptions: string[];
		startDate?: string;
		endDate?: string;
	}[];
}

export interface Project {
	date: string;
	company: string;
	name: string;
	descriptions: string[];
	technologies?: string[];
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
