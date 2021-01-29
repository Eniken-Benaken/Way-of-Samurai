import { actions } from '../actions';

const initial_state = {
	id: null,
	email: null,
	login: null,
	is_auth: false,
	checking_auth: false,
	submit_error: '',
};

const auth_reducer = (state = initial_state, action) => {
	switch (action.type) {
		case actions.SET_AUTH_DATA:
			console.log('auth_reducer.SET_AUTH_DATA - prev.state+action.data',state,action.data);
			return {
				...state,
				...action.data
			}
		case actions.SET_IS_AUTH:
			console.log('auth_reducer.SET_IS_AUTH - prev.state+action.is_auth',state,action.is_auth);
			return {
				...state,
				is_auth: action.is_auth
			}
		case actions.TOGGLE_CHECKING_AUTH:
			return {
				...state,
				checking_auth: action.checking_auth
			}
		case actions.STOP_SUBMIT:
			// console.log(state,action.submit_error);
			return {
				...state,
				submit_error: action.submit_error
			}
		default:
			return state
	}
}
export default auth_reducer;