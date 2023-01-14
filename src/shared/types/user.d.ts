export interface User {
	confirmed: boolean;
	blocked: boolean;
	role: {
		disconnect: [];
		connect: [
			{
				id: 1;
			}
		];
	};
	username: string;
	email: string;
	password: string;
}
