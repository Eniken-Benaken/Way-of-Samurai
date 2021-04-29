import { userType } from "../redux/reducers/users_reducer";
import { serverResponseType, a } from "./API";

type getUsersRT = {
	data: {
		items: userType[];
		totalCount: number;
		error: string;
	};
};

export type followRT = serverResponseType<object>;


export const usersAPI = {
	async getUsers(pageNumber = 1, page_size = 50) {
		try {
			const response: getUsersRT = await a.get(`users?page=${pageNumber}&count=${page_size}`);
			console.log(response);
			return response.data;
		}
		catch (e) {
			console.error(e);
		}
	},
	async followUser(userId: number) {
		const response: followRT = await a.post(`follow/${userId}`);
		return response.data;
	},
	async unfollowUser(userId: number) {
		const response: followRT = await a.delete(`follow/${userId}`);
		return response.data;
	}
};
