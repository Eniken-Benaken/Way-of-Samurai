import { actions } from '../actions';

const initial_state = {
	id: null,
	email: null,
	login: null,
	is_auth: false
};

const users_reducer = (state = initial_state, action) => {
	switch (action.type) {
		case actions.SET_AUTH_DATA:
			return {
				...state,
				...action.data
			}
		case actions.SET_IS_AUTH:
			return {
				...state,
				is_auth: action.is_auth
			}
		default:
			return state
	}
}
export default users_reducer;