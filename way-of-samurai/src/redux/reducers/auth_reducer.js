import { actions } from '../actions';

const initial_state = {
	id: null,
	email: null,
	login: null,
	is_auth: false,
	checking_auth: false,
	submit_error: '',
	submit_error_code: '',
	captcha_url: null
};

const auth_reducer = (state = initial_state, action) => {
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
		case actions.TOGGLE_CHECKING_AUTH:
			return {
				...state,
				checking_auth: action.checking_auth
			}
		case actions.STOP_SUBMIT:
			return {
				...state,
				submit_error: action.submit_error,
				submit_error_code: action.submit_error_code
			}
		case actions.SET_CAPTCHA_URL:
			return {
				...state,
				captcha_url: action.captcha_url,
				submit_error_code: ''
			}
		default:
			return state
	}
}
export default auth_reducer;