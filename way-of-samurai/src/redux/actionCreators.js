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
