export interface Character {
	id: number;
	name: string;
	power: number;
	hp: number;
	createdAt: string;
	photo: {
		id: number;
		name: string;
		formats: {
			thumbnail: {
				url: string;
			};
			small: {
				url: string;
			};
			medium: {
				url: string;
			};
			large: {
				url: string;
			};
		};
		url: string;
	};
	category: {
		id: number;
		name: string;
	};
	habitat: {
		id: number;
		name: string;
	};
	race: {
		id: number;
		name: string;
	};
	powers: {
		count: number;
	};
}
