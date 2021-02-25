import { updateObjectInArray } from '../../components/common/object-helpers';
import { userType } from '../actionCreators';
import { actions } from '../actions';

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
	is_following: [],
	portion_size: 20
};

const users_reducer = (state = initial_state, action:any):users_type => {
	switch (action.type) {
		case actions.FOLLOW_USER:
			return {
				...state,
				users: updateObjectInArray(state.users, action.user_id, 'id', {followed: true})
			}
		case actions.UNFOLLOW_USER:
			return {
				...state,
				users: updateObjectInArray(state.users, action.user_id, 'id', {followed: false})
			}
		case actions.SET_USERS:
			return {
				...state,
				users: [...action.users],
			}
		case actions.SET_CURRENT_USERS_PAGE:
			return {
				...state,
				active_page: action.active_page
			}
		case actions.TOGGLE_IS_FETCHING:
			return {
				...state,
				is_fetching: action.is_fetching
			}
		case actions.TOGGLE_FOLLOWING:
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