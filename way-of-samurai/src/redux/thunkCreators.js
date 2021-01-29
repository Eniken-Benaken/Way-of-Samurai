import { authAPI, profileAPI, usersAPI } from "../api/API";
import { setUsers, toggleFollowing, toggleIsFetching, followUserAC, unfollowUserAC, setCurrentUsersPage, setUserProfile, setAuthData, setIsAuth, setStatus, stopSubmit,initApp, setCurrentRoute } from "./actionCreators";

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
						if (response.data)
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
				if (response.status === 200) dispatch(setStatus(status));
			});
	}
}

export const getAuthData = () => {
	return (dispatch) => {
		return authAPI.getAuthData()
			.then(data => {
				let { id, email, login } = data.data;
				dispatch(setAuthData(id, email, login));
				if (login) {
					dispatch(setIsAuth(true));
				} else dispatch(setIsAuth(false));
				return data;
			});
	}
}

export const submitLogin = (email, password, rememberMe) => {
	return (dispatch) => {
		authAPI.sendLoginData(email, password, rememberMe).then(
			response => {
				// console.log("submitLogin thunk - response.data - ", response);
				if (response.data.resultCode === 0) {
					authAPI.getAuthData()
						.then(data => {
							if (data.resultCode === 1) {
								dispatch(setAuthData('', '', ''));
								dispatch(setIsAuth(false));
							}
							else if (data.resultCode === 0) {
								let { id, email, login } = data.data;
								dispatch(setAuthData(id, email, login));
								dispatch(setIsAuth(true));
							}
						});
				}
				else {
					dispatch(stopSubmit(response.data.messages.toString()))
				}
			}
		)
	}
}

export const signOut = () => {
	return (dispatch) => {
		authAPI.signOut().then(
			response => {
				// console.log("signOut thunk - response.data - ", response.data);
				if (response.data.resultCode === 0) {
					authAPI.getAuthData()
						.then(data => {
							if (data.resultCode === 1) {
								dispatch(setAuthData('', '', ''));
								dispatch(setIsAuth(false));
							}
							else if (data.resultCode === 0) {
								let { id, email, login } = data.data;
								dispatch(setAuthData(id, email, login));
								dispatch(setIsAuth(true));
							}
						});
				}
				else console.log(response.data.data.messages);
			}
		)
	}
}

export const init_app = () => {
	return (dispatch) => {
		dispatch(getAuthData()).then(
			(response) => {
				dispatch(initApp(true));
			}
		)
	}
}
