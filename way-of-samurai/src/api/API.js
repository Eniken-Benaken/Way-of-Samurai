import axios from "axios";

const a = axios.create({
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	withCredentials: true,
	headers: {
		"API-KEY" : "b84beec8-e3b9-460b-973c-27d3752e064a"
	},
})

export const usersAPI = {
	getUsers(pageNumber = 1,pageSize = 5) {
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
	}
}

export const authAPI = {
	getAuthData() {
		return a.get(`auth/me`).then(
			response => {
				console.log('authAPI.getAuthData() - response.data',response.data);
				return response.data
			})
	},
	sendLoginData(email,password,rememberMe) {
		return a.post(`auth/login`, { email,password,rememberMe}).then(
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

