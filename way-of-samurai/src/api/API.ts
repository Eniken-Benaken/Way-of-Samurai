import axios from "axios";
import { currentVisitedUserType } from "../redux/reducers/profile_reducer";
import { userType } from "../redux/reducers/users_reducer";
const a = axios.create({
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	withCredentials: true,
	headers: {
		"API-KEY": "5b4d3778-fd4c-41ab-b731-1b26cfea860b"
	},
})
//	https://social-network.samuraijs.com/api/1.0/profile/status/14327


type generalRT = {
	data: {
		resultCode: number
		messages: string[],
		data: object
	}
}


type getUsersRT = {
	data: {
		items: userType[],
		totalCount: number,
		error: string
	}
}

export type followRT = generalRT;


export const usersAPI = {
	async getUsers(pageNumber = 1, page_size = 50) {
		try {
			const response: getUsersRT = await a.get(`users?page=${pageNumber}&count=${page_size}`)
			console.log(response);
			return response.data;
		}
		catch (e) {
			console.error(e)
		}
	},
	async followUser(userId: number) {
		const response: followRT = await a.post(`follow/${userId}`)
		return response;
	},
	async unfollowUser(userId: number) {
		const response: followRT = await a.delete(`follow/${userId}`)
		return response;
	}
}





type setProfileInfoRT = generalRT;
type setProfilePhotoRT = generalRT;
type setStatusRT = generalRT;
type getStatusRT = {
	data: string
}


export const profileAPI = {
	async getUserData(userId: number | null) {
		try {
			const response = await a.get(`profile/${userId}`)
			return response.data
		}
		catch (e) {
			console.error(e)
		}
	},
	async getStatus(userId: number | null) {
		const response: getStatusRT = await a.get(`profile/status/${userId}`)
		return response;
	},
	async setStatus(status: string) {
		const response: setStatusRT = await a.put(`profile/status`, { status: status })
		return response
	},
	async setProfilePhoto(photo: any) {
		const formData = new FormData();
		formData.append('image', photo);
		const response: setProfilePhotoRT = await a.put(`profile/photo`, formData, {
			headers: {
				'Content-type': 'multipart/form-data'
			}
		})
		return response;
	},
	async setProfileInfo(changed_info: currentVisitedUserType) {
		const response: setProfileInfoRT = await a.put(`profile`, changed_info);
		return response
	},
}




export type getAuthDataRT = {//RT means Return Type
	data: {
		data: {
			id: number | null,
			email: string | null,
			login: string | null
		}
		resultCode: number
		messages: string[]
	}
}

type LoginRT = {
	data: {
		resultCode: number
		messages: string[],
		data: {
			userId: number
		}
	}
}

type LogoutRT = generalRT;


export const authAPI = {
	async getAuthData() {
		try {
			const response: getAuthDataRT = await a.get(`auth/me`)
			return response
		}
		catch (e) {
			console.error(e)
		}
	},
	async sendLoginData(email: string, password: string, rememberMe: boolean, captcha: string | null) {
		try {
			const response: LoginRT = await a.post(`auth/login`, { email, password, rememberMe, captcha })
			console.log(response);
			return response
		}
		catch (e) {
			console.error(e)
		}
	},
	async signOut() {
		try {
			const response: LogoutRT = await a.delete(`auth/login`)
			console.log(response);
			return response
		}
		catch (e) {
			console.error(e)
		}
	}
}




type getCaptchaRT = {//RT means Return Type
	data: {
		url: string
	}
}

export const securityAPI = {
	async getCaptchaUrl() {
		const response: getCaptchaRT = await a.get(`security/get-captcha-url`)
		return response.data.url;
	}
}
