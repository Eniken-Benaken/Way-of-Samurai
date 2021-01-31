export const getIsAuth = (state) => {
	return state.auth.is_auth
}

export const getSubmitError = (state) => {
	return state.auth.submit_error
}

export const getCurrentRoute = (state) => {
	return state.app.current_route
}

export const getCurrentUserLogin = (state) => {
	return state.auth.login
}

export const getCurrentUserEmail = (state) => {
	return state.auth.email
}

export const getCurrentUserId = (state) => {
	return state.auth.id
}

export const getCurrentVisitedUserId = (state) => {
	return state.profile.current_visited_user
}

export const getCurrentVisitedUserstatus = (state) => {
	return state.profile.status
}

export const getIsFetchingProfileData = (state) => {
	return state.profile.is_fetching
}

export const getDialogs = (state) => {
	return state.dialogs
}