import { resultCodes } from './../../api/API';
import { Dispatch, Reducer } from 'redux';
import { usersAPI } from "../../api/users-api";
import { updateObjectInArray } from '../../components/common/object-helpers';
import { BaseThunkType, InferActionTypes } from './common';


//ACs Types
type UsersActionTypes = InferActionTypes<typeof users_actions>


//ACs
const users_actions = {
	followUserAC: (user_id: number) => ({
		type: 'wos/users/FOLLOW_USER',
		user_id: user_id
	}) as const,
	unfollowUserAC: (user_id: number) => ({
		type: 'wos/users/UNFOLLOW_USER',
		user_id: user_id
	}) as const,
	setUsers: (users: userType[]) => ({
		type: 'wos/users/SET_USERS',
		users: users
	}) as const,
	setCurrentUsersPage: (active_page: number) => ({
		type: 'wos/users/SET_CURRENT_USERS_PAGE',
		active_page: active_page
	}) as const,
	toggleFollowing: (user_id: number, is_fetching: boolean) => ({
		type: 'wos/users/TOGGLE_FOLLOWING',
		user_id,
		is_fetching
	}) as const
}



type dispatch = Dispatch<UsersActionTypes>;
type ThunkType = BaseThunkType<UsersActionTypes>


//THUNK CREATORS
const _followUnfollowFlow = async (dispatch: dispatch, userId: number, AC: (userId: number) => UsersActionTypes, APImethod: (userId: number) => any) => {//API method should be properly typed
	dispatch(users_actions.toggleFollowing(userId, true));
	const data = await APImethod(userId)//no type here
	if (data.resultCode === resultCodes.Success) {
		dispatch(users_actions.toggleFollowing(userId, false));
		dispatch(AC(userId));
	}
	else {
		console.error('Error has occured when tried to follow/unfollow')
	}
}

export const getUsers = (active_page: number, page_size: number): ThunkType => async (dispatch) => {
	const data = await usersAPI.getUsers(active_page, page_size)
	if (data) {
		if (!data.error) {
			dispatch(users_actions.setUsers(data.items));
			dispatch(users_actions.setCurrentUsersPage(active_page));
		}
	}
}
export const followUser = (userId: number): ThunkType => async (dispatch) => {
	_followUnfollowFlow(dispatch, userId, users_actions.followUserAC, usersAPI.followUser)
}
export const unfollowUser = (userId: number): ThunkType => async (dispatch) => {
	_followUnfollowFlow(dispatch, userId, users_actions.unfollowUserAC, usersAPI.unfollowUser)
}





//Users Types
export type userType = {
	name: string,
	id: number,
	photos: {
		small: null | string,
		large: null | string
	},
	status: null | string,
	followed: false
}

type users_type = {
	users: Array<userType>,
	page_size: number,
	total_users_count: number,
	active_page: number,
	is_fetching: boolean,
	is_following: Array<number>,
	portion_size: number
}

const initial_state: users_type = {
	users: [],
	page_size: 10,
	total_users_count: 501,
	active_page: 1,
	is_fetching: false,
	is_following: [], //Array of followed users ids.
	portion_size: 20
};

const users_reducer: Reducer<users_type, UsersActionTypes> = (state = initial_state, action) => {
	switch (action.type) {
		case 'wos/users/FOLLOW_USER':
			return {
				...state,
				users: updateObjectInArray(state.users, action.user_id, 'id', { followed: true })
			}
		case 'wos/users/UNFOLLOW_USER':
			return {
				...state,
				users: updateObjectInArray(state.users, action.user_id, 'id', { followed: false })
			}
		case 'wos/users/SET_USERS':
			return {
				...state,
				users: [...action.users],
			}
		case 'wos/users/SET_CURRENT_USERS_PAGE':
			return {
				...state,
				active_page: action.active_page
			}
		case 'wos/users/TOGGLE_FOLLOWING':
			return {
				...state,
				is_following: action.is_fetching
					? [...state.is_following, action.user_id]
					: state.is_following.filter(item => item !== action.user_id)
			}
		default:
			return state
	}
}




export default users_reducer;