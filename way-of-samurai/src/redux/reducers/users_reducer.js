import { actions } from '../actions';

const initial_state = {
	users: [],
	pageSize: 5,
	totalUsersCount: 50,
	activePage: 1,
	is_fetching: false
};

const users_reducer = (state = initial_state, action) => {
	switch (action.type) {
		case actions.FOLLOW_USER:
			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.user_id && !user.followed) {
						return {
							...user,
							followed: true
						}
					}
					else return user
				})
			}
		case actions.UNFOLLOW_USER:
			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.user_id && user.followed) {
						return {
							...user,
							followed: false
						}
					}
					else return user;
				})
			}
		case actions.SET_USERS:
			return {
				...state,
				users: [...action.users],
				totalUsersCount: action.totalUsersCount
			}
		case actions.SET_CURRENT_USERS_PAGE:
			return {
				...state,
				activePage: action.activePage
			}
		case actions.TOGGLE_IS_FETCHING:
			return {
				...state,
				is_fetching: action.is_fetching
			}
		default:
			return state
	}
}
export default users_reducer;