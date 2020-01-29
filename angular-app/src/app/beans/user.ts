export interface User {
	id: number;
	uri: string;
	lastModified: string;
	email: string;
    login: string;
	password: string;
	firstName: string;
	lastName: string;
	roles: string[];
}
