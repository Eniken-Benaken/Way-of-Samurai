import { authAPI, profileAPI, usersAPI } from "../api/API";
import { setUsers, toggleFollowing, toggleIsFetching, followUserAC, unfollowUserAC, setCurrentUsersPage, setUserProfile, setAuthData, setIsAuth, toggleCkeckingAuth, setStatus } from "./actionCreators";

export const getUsers = (activePage, pageSize) => {
	return (dispatch) => {
		dispatch(toggleIsFetching(true));
		usersAPI.getUsers(activePage, pageSize)
			.then(data => {
				if (!data.error) {
					dispatch(toggleIsFetching(false));
					dispatch(setUsers(data.items));
					dispatch(setCurrentUsersPage(activePage));
				}
			})
	}
}
export const followUser = (userId) => {
	return (dispatch) => {
		dispatch(toggleFollowing(userId, true));
		usersAPI.followUser(userId)
			.then(response => {
				if (response.data.resultCode === 0) {
					dispatch(toggleFollowing(userId, false));
					dispatch(followUserAC(userId));
				}
			})
	}
}
export const unfollowUser = (userId) => {
	return (dispatch) => {
		dispatch(toggleFollowing(userId, true));
		usersAPI.unfollowUser(userId)
			.then(response => {
				if (response.data.resultCode === 0) {
					dispatch(toggleFollowing(userId, false));
					dispatch(unfollowUserAC(userId));
				}
			})
	}
}


export const getUserData = (userId) => {
	return (dispatch) => {
		dispatch(toggleIsFetching(true));
		profileAPI.getUserData(userId)
			.then(data => {
				dispatch(setUserProfile(data));
				dispatch(toggleIsFetching(false));
				profileAPI.getStatus(userId)
					.then(response => {
						if(response.data)
						dispatch(setStatus(response.data))
						else dispatch(setStatus(response.statusText))
					})
			});
	}
}
export const updateStatus = (status) => {
	return (dispatch) => {
		profileAPI.setStatus(status)
			.then(response => {
				if(response.status === 200)	dispatch(setStatus(status));
			});
	}
}

export const getAuthData = () => {
	return (dispatch) => {
		dispatch(toggleCkeckingAuth(true));
		authAPI.getAuthData()
		.then(data => {
			let {id,email,login} = data;
			if(login) {
				dispatch(setAuthData(id,email,login));
				dispatch(toggleCkeckingAuth(false));
				dispatch(setIsAuth(true));
				}
			});
	}
}

export const submitLogin = (email,password,rememberMe) => {
	return authAPI.sendLoginData(email,password,rememberMe);
}
