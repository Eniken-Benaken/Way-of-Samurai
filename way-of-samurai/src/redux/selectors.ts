import {AppStateType} from './redux_store';
export const getIsAuth = (state: AppStateType) => {
	return state.auth.is_auth
}

export const getSubmitError = (state: AppStateType) => {
	return state.auth.submit_error
}

export const getSubmitErrorCode = (state: AppStateType) => {
	return state.auth.submit_error_code
}

export const getCurrentRoute = (state: AppStateType) => {
	return state.app.current_route
}

export const getCurrentUserLogin = (state: AppStateType) => {
	return state.auth.login
}

export const getCurrentUserEmail = (state: AppStateType) => {
	return state.auth.email
}

export const getCurrentUserId = (state: AppStateType) => {
	return state.auth.id
}

export const getCaptchaUrl = (state: AppStateType) => {
	return state.auth.captcha_url
}

export const getCurrentVisitedUserId = (state: AppStateType) => {
	return state.profile.current_visited_user
}

export const getCurrentVisitedUserstatus = (state: AppStateType) => {
	return state.profile.status
}

export const getIsFetchingProfileData = (state: AppStateType) => {
	return state.profile.is_fetching
}

export const getDialogs = (state: AppStateType) => {
	return state.dialogs
}

export const getPosts = (state: AppStateType) => {
	return state.profile.posts
}

export const getFriendsBarItems = (state: AppStateType) => {
	return state.sidebar.friends
}

export const getSideMenuItems = (state: AppStateType) => {
	return state.sidebar.menu_items
}
