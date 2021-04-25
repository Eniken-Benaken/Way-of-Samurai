import axios from "axios";
import { currentVisitedUserType } from "../redux/reducers/profile_reducer";
const a = axios.create({
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	withCredentials: true,
	headers: {
		"API-KEY": "5b4d3778-fd4c-41ab-b731-1b26cfea860b"
	},
})
//	https://social-network.samuraijs.com/api/1.0/security/get-captcha-url
export const usersAPI = {
	async getUsers(pageNumber = 1, page_size = 50) {
		try {
			const response = await a.get(`users?page=${pageNumber}&count=${page_size}`)
			console.log(response);
			return response.data;
		}
		catch (e) {
			console.error(e)
		}
	},
	followUser(userId: number) {
		return a.post(`follow/${userId}`)
	},
	unfollowUser(userId: number) {
		return a.delete(`follow/${userId}`)
	}
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
	getStatus(userId: number | null) {
		let uid = userId;
		return a.get(`profile/status/${uid}`)
	},
	setStatus(status: string) {
		return a.put(`profile/status`, { status: status })
	},
	setProfilePhoto(photo: any) {
		const formData = new FormData();
		formData.append('image', photo);
		return a.put(`profile/photo`, formData, {
			headers: {
				'Content-type': 'multipart/form-data'
			}
		})
	},
	setProfileInfo(changed_info: currentVisitedUserType) {
		return a.put(`profile`, changed_info);
	},
}




export type getAuthDataRT = {//RT means Return Type
	data: {
		id: number | null,
		email: string | null,
		login: string | null
	}
	resultCode: number
	messages: string[]
}


export const authAPI = {
	async getAuthData() {
		try {
			const response:getAuthDataRT = await a.get(`auth/me`)
			return response
		}
		catch (e) {
			console.error(e)
		}
	},
	async sendLoginData(email: string, password: string, rememberMe: boolean, captcha: string | null) {
		try {
			const response = await a.post(`auth/login`, { email, password, rememberMe, captcha })
			return response
		}
		catch (e) {
			console.error(e)
		}
	},
	async signOut() {
		try {
			const response = await a.delete(`auth/login`)
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
