import { Action } from 'redux';
import { usersAPI } from '../../api/API';
import { updateObjectInArray } from '../../components/common/object-helpers';
const FOLLOW_USER = 'wos/users/FOLLOW_USER'
const UNFOLLOW_USER = 'wos/users/UNFOLLOW_USER'
const SET_USERS = 'wos/users/SET_USERS'
const SET_CURRENT_USERS_PAGE = 'wos/users/SET_CURRENT_USERS_PAGE'
const TOGGLE_FOLLOWING = 'wos/users/TOGGLE_FOLLOWING'



//ACs Types
interface IFollowUserAC extends Action<typeof FOLLOW_USER> {
	user_id: number
}

interface IUnfollowUserAC extends Action<typeof UNFOLLOW_USER> {
	user_id: number
}

interface ISetUsersAC extends Action<typeof SET_USERS> {
	users: Array<userType>,
}

interface ISetCurrentUserPageAC extends Action<typeof SET_CURRENT_USERS_PAGE> {
	active_page: number
}

interface IToggleFollowingAC extends Action<typeof TOGGLE_FOLLOWING> {
	is_fetching: boolean,
	user_id: number
}

type UsersAC_Types = IFollowUserAC | IUnfollowUserAC | ISetUsersAC | ISetCurrentUserPageAC | IToggleFollowingAC


//ACs
const followUserAC = (user_id: number):IFollowUserAC => ({	type: FOLLOW_USER,user_id: user_id});
const unfollowUserAC = (user_id:number):IUnfollowUserAC => ({	type: UNFOLLOW_USER,user_id: user_id});
const setUsers = (users: Array<userType>):ISetUsersAC => ({	type: SET_USERS,users: users});
const setCurrentUsersPage = (active_page = 1):ISetCurrentUserPageAC => ({ type: SET_CURRENT_USERS_PAGE,active_page: active_page });
const toggleFollowing = (user_id: number,is_fetching: boolean):IToggleFollowingAC => ({ type: TOGGLE_FOLLOWING, user_id, is_fetching});




//THUNK CREATORS
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





//Users Types
export type userType = {
	name: string,
	id: number,
	uniqueUrlName: null|string,
	photos: {
		small: null|string,
		large: null|string
	},
	status: null|string,
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

const users_reducer = (state = initial_state, action:UsersAC_Types):users_type => {
	switch (action.type) {
		case FOLLOW_USER:
			return {
				...state,
				users: updateObjectInArray(state.users, action.user_id, 'id', {followed: true})
			}
		case UNFOLLOW_USER:
			return {
				...state,
				users: updateObjectInArray(state.users, action.user_id, 'id', {followed: false})
			}
		case SET_USERS:
			return {
				...state,
				users: [...action.users],
			}
		case SET_CURRENT_USERS_PAGE:
			return {
				...state,
				active_page: action.active_page
			}
		case TOGGLE_FOLLOWING:
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