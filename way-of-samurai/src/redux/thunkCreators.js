import { authAPI, profileAPI, usersAPI } from "../api/API";
import { setUsers, toggleFollowing, toggleIsFetching, followUserAC, unfollowUserAC, setCurrentUsersPage, setUserProfile, setAuthData, setIsAuth, setStatus, stopSubmit, initApp } from "./actionCreators";

const followUnfollowFlow = async (dispatch, userId, AC, APImethod) => {
dispatch(toggleFollowing(userId, true));
	const response = await APImethod(userId)
	if (response.data.resultCode === 0) {
		dispatch(toggleFollowing(userId, false));
		dispatch(AC(userId));
	}
}

export const getUsers = (activePage, pageSize) => async (dispatch) => {
	const data = await usersAPI.getUsers(activePage, pageSize)
	if (!data.error) {
		dispatch(setUsers(data.items));
		dispatch(setCurrentUsersPage(activePage));
	}
}
export const followUser = (userId) => async (dispatch) => {
	followUnfollowFlow(dispatch,userId,followUserAC, usersAPI.followUser)
}
export const unfollowUser = (userId) => async (dispatch) => {
	followUnfollowFlow(dispatch,userId,unfollowUserAC, usersAPI.unfollowUser)
}


export const getUserData = (userId) => async (dispatch) => {
	dispatch(toggleIsFetching(true));
	const data = await profileAPI.getUserData(userId)
	dispatch(setUserProfile(data));
	dispatch(toggleIsFetching(false));
	const response = await profileAPI.getStatus(userId)
	if (response.data)
		dispatch(setStatus(response.data))
	else dispatch(setStatus(response.statusText))
}
export const updateStatus = (status) => async (dispatch) => {
	const response = await profileAPI.setStatus(status)
	if (response.status === 200) dispatch(setStatus(status));
}

export const getAuthData = () => async (dispatch) => {
	const data = await authAPI.getAuthData()
	let { id, email, login } = data.data;
	dispatch(setAuthData(id, email, login));
	if (login) {
		dispatch(setIsAuth(true));
	} else dispatch(setIsAuth(false));
	return data;
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

export const init_app = () => async (dispatch) => {
	await dispatch(getAuthData())
	dispatch(initApp(true));
}
