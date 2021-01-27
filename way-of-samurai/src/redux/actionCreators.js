import { actions } from './actions';

export const addPostActionCreator = (new_post) => ({	type: actions.ADD_POST,new_post });

export const sendMessageActionCreator = (new_message) => ({	type: actions.SEND_MESSAGE, new_message });

export const followUserAC = (user_id) => ({	type: actions.FOLLOW_USER,user_id: user_id});
export const unfollowUserAC = (user_id) => ({	type: actions.UNFOLLOW_USER,user_id: user_id});
export const setUsers = (users,totalUsersCount = 50) => ({	type: actions.SET_USERS,users: users, totalUsersCount: totalUsersCount});
export const setCurrentUsersPage = (activePage = 1) => ({ type: actions.SET_CURRENT_USERS_PAGE,activePage: activePage });
export const toggleIsFetching = (is_fetching) => ({ type: actions.TOGGLE_IS_FETCHING,is_fetching: is_fetching });
export const toggleFollowing = (user_id,is_fetching) => ({ type: actions.TOGGLE_FOLLOWING, user_id: user_id, is_fetching: is_fetching});


export const setUserProfile = (user_id) => ({
	type: actions.SET_USER_PROFILE, 
	current_user: user_id
})
export const setStatus = (status) => ({
	type: actions.SET_STATUS, 
	status: status
})


export const setAuthData = (id,email,login) => ({
	type: actions.SET_AUTH_DATA, 
	data: {
		id,
		email,
		login
	}
})
export const setIsAuth = (is_auth) => ({
	type: actions.SET_IS_AUTH,
	is_auth: is_auth
})
export const toggleCkeckingAuth = (checking_auth) => ({
	type: actions.SET_IS_AUTH,
	checking_auth: checking_auth
})