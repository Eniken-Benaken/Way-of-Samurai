import { authAPI, profileAPI, usersAPI, securityAPI } from "../api/API";
import { setUsers, toggleFollowing, toggleIsFetching, followUserAC, unfollowUserAC, setCurrentUsersPage, setUserProfile, setAuthData, setIsAuth, setStatus, stopSubmit, initApp, getCaptchaUrlSuccess } from "./actionCreators";

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
	followUnfollowFlow(dispatch, userId, followUserAC, usersAPI.followUser)
}
export const unfollowUser = (userId) => async (dispatch) => {
	followUnfollowFlow(dispatch, userId, unfollowUserAC, usersAPI.unfollowUser)
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
	try {
		const response = await profileAPI.setStatus(status)
		if (response.data.resultCode === 0) dispatch(setStatus(status));
	}
	catch (error) {
		console.log(error);
	}
}
export const getCaptcha = () => async (dispatch) => {
	const captcha_url = await securityAPI.getCaptchaUrl()
	if (captcha_url) dispatch(getCaptchaUrlSuccess(captcha_url));
	else console.log("AIN'T GET ANY CAPTCHA");
}
export const savePhoto = (photo, userId) => async (dispatch) => {
	const response = await profileAPI.setProfilePhoto(photo)
	if (response.data.resultCode === 0) dispatch(getUserData(userId));
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

export const submitLogin = (email, password, rememberMe, captcha) => {
	return async (dispatch) => {
		const response = await authAPI.sendLoginData(email, password, rememberMe, captcha)
		if (response.data.resultCode === 0) {
			const data = await authAPI.getAuthData();
			if (data.resultCode === 1) {
				dispatch(setAuthData('', '', ''));
				dispatch(setIsAuth(false));
			}
			else if (data.resultCode === 0) {
				let { id, email, login } = data.data;
				dispatch(setAuthData(id, email, login));
				dispatch(setIsAuth(true));
			}
		}
		else {
			dispatch(stopSubmit(response.data.messages.toString(), response.data.resultCode))
		}
	}
}

export const signOut = () => {
	return async (dispatch) => {
		const response = await authAPI.signOut()
		if (response.data.resultCode === 0) {
			const data = await authAPI.getAuthData()
			if (data.resultCode === 1) {
				dispatch(setAuthData('', '', ''));
				dispatch(setIsAuth(false));
			}
			else if (data.resultCode === 0) {
				let { id, email, login } = data.data;
				dispatch(setAuthData(id, email, login));
				dispatch(setIsAuth(true));
			}
		}
		else console.log(response.data.data.messages.toString());
	}
}

export const init_app = () => async (dispatch) => {
	const response = await dispatch(getAuthData());
	if (response.resultCode === 0) {
		await dispatch(getUserData(response.data.id));
	}
	dispatch(initApp(true));
}
