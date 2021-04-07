import { Dispatch } from "redux";
import { authAPI, profileAPI, usersAPI, securityAPI } from "../api/API";
import { setUsers, toggleFollowing, toggleIsFetching, followUserAC, unfollowUserAC, setCurrentUsersPage, setUserProfile, setAuthData, setIsAuth, setStatus, stopSubmit, initApp, getCaptchaUrlSuccess, profileActionTypes } from "./actionCreators";

const followUnfollowFlow = async (dispatch: any, userId: number, AC:any, APImethod:any) => {
	dispatch(toggleFollowing(userId, true));
	const response = await APImethod(userId)
	if (response.data.resultCode === 0) {
		dispatch(toggleFollowing(userId, false));
		dispatch(AC(userId));
	}
}

export const getUsers = (active_page: number, page_size: number) => async (dispatch: any) => {
	const data = await usersAPI.getUsers(active_page, page_size)
	if (!data.error) {
		dispatch(setUsers(data.items));
		dispatch(setCurrentUsersPage(active_page));
	}
}
export const followUser = (userId: number) => async (dispatch: any) => {
	followUnfollowFlow(dispatch, userId, followUserAC, usersAPI.followUser)
}
export const unfollowUser = (userId: number) => async (dispatch: any) => {
	followUnfollowFlow(dispatch, userId, unfollowUserAC, usersAPI.unfollowUser)
}


export const getUserData = (userId: number) => async (dispatch: Dispatch<profileActionTypes>) => {
	dispatch(toggleIsFetching(true));
	const data = await profileAPI.getUserData(userId)
	dispatch(setUserProfile(data));
	dispatch(toggleIsFetching(false));
	const response = await profileAPI.getStatus(userId)
	if (response.data)
		dispatch(setStatus(response.data))
	else dispatch(setStatus(response.statusText))
}
export const updateStatus = (status: string) => async (dispatch: any) => {
	try {
		const response = await profileAPI.setStatus(status)
		if (response.data.resultCode === 0) dispatch(setStatus(status));
	}
	catch (error) {
		console.log(error);
	}
}
export const getCaptcha = () => async (dispatch: any) => {
	const captcha_url = await securityAPI.getCaptchaUrl()
	if (captcha_url) dispatch(getCaptchaUrlSuccess(captcha_url));
	else console.log("AIN'T GET ANY CAPTCHA");
}
export const savePhoto = (photo: any, userId: number) => async (dispatch: any) => {
	const response = await profileAPI.setProfilePhoto(photo)
	if (response.data.resultCode === 0) dispatch(getUserData(userId));
}

export const getAuthData = () => async (dispatch: any) => {
	const data = await authAPI.getAuthData()
	let { id, email, login } = data.data;
	dispatch(setAuthData(id, email, login));
	if (login) {
		dispatch(setIsAuth(true));
	} else dispatch(setIsAuth(false));
	return data;
}

export const submitLogin = (email: string, password: string, rememberMe: boolean, captcha: any) => {
	return async (dispatch: any) => {
		const response = await authAPI.sendLoginData(email, password, rememberMe, captcha)
		if (response.data.resultCode === 0) {
			const data = await authAPI.getAuthData();
			if (data.resultCode === 1) {
				dispatch(setAuthData(null, '', ''));
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
	return async (dispatch: any) => {
		const response = await authAPI.signOut()
		if (response.data.resultCode === 0) {
			const data = await authAPI.getAuthData()
			if (data.resultCode === 1) {
				dispatch(setAuthData(null, '', ''));
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

export const init_app = () => async (dispatch: any) => {
	const response = await dispatch(getAuthData());
	if (response.resultCode === 0) {
		await dispatch(getUserData(response.data.id));
	}
	dispatch(initApp(true));
}
