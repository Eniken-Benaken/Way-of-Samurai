import { actions } from './actions';

export const addPostActionCreator = () => ({	type: actions.ADD_POST });
export const newPostTextActionCreator = (textarea_value) => 
({type: actions.HANDLE_NEW_POST_CHANGE,	textarea_value: textarea_value});

export const sendMessageActionCreator = () => ({	type: actions.SEND_MESSAGE });
export const newMessageTextActionCreator = (textarea_value) => 
({type: actions.HANDLE_NEW_MESSAGE_CHANGE,	textarea_value: textarea_value});

export const followUser = (user_id) => ({	type: actions.FOLLOW_USER,user_id: user_id});
export const unfollowUser = (user_id) => ({	type: actions.UNFOLLOW_USER,user_id: user_id});
export const setUsers = (users,totalUsersCount = 50) => ({	type: actions.SET_USERS,users: users, totalUsersCount: totalUsersCount});
export const setCurrentUsersPage = (activePage = 1) => ({ type: actions.SET_CURRENT_USERS_PAGE,activePage: activePage });
export const toggleIsFetching = (is_fetching) => ({ type: actions.TOGGLE_IS_FETCHING,is_fetching: is_fetching });
export const toggleFollowing = (user_id,is_fetching) => ({ type: actions.TOGGLE_FOLLOWING, user_id: user_id, is_fetching: is_fetching});


export const setUserProfile = (user_id) => ({
	type: actions.SET_USER_PROFILE, 
	current_user: user_id
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