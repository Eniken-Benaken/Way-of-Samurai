import axios from "axios";

const a = axios.create({
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	withCredentials: true,
	headers: {
		"API-KEY" : "5b4d3778-fd4c-41ab-b731-1b26cfea860b"
	},
})

export const usersAPI = {
	getUsers(pageNumber = 1,pageSize = 50) {
		return a.get(`users?page=${pageNumber}&count=${pageSize}`)
		.then(response => response.data)
	},
	followUser(userId) {
		return a.post(`follow/${userId}`)
	},
	unfollowUser(userId) {
		return a.delete(`follow/${userId}`)
	}
} 

export const profileAPI = {
	getUserData(userId) {
		return a.get(`profile/${userId}`).then(response => response.data)
	},
	getStatus(userId=14327) {
		return a.get(`profile/status/${userId}`)
	},
	setStatus(status) {
		return a.put(`profile/status`, {status: status})
	},
	setProfilePhoto(photo) {
		const formData = new FormData();
		formData.append('image', photo);
		return a.put(`profile/photo`, formData, {
			headers: {
				'Content-type': 'multipart/form-data'
			}
		})
	},
	setProfileInfo(changed_info) {
		return a.put(`profile`, changed_info);
	},
}

export const authAPI = {
	getAuthData() {
		return a.get(`auth/me`).then(
			response => {
				console.log('authAPI.getAuthData() - response.data',response.data);
				return response.data
			})
	},
	sendLoginData(email,password,rememberMe,captcha) {
		return a.post(`auth/login`, { email,password,rememberMe,captcha}).then(
			response => {
				console.log('authAPI.sendLoginData() - response',response);
				return response
			})
	},
	signOut() {
		return a.delete(`auth/login`).then(
			response => {
				console.log('authAPI.signOut() - response',response);
				return response
			})
	}
}

export const securityAPI = {
	async getCaptchaUrl() {
		const response = await a.get(`security/get-captcha-url`)
		return response.data.url;
	}
}
