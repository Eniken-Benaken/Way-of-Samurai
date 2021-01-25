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
	}
}

export const authAPI = {
	getAuthData() {
		return a.get(`auth/me`).then(response => response.data.data)
	}
}