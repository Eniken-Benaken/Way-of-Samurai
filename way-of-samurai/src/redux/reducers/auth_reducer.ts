import { actions } from '../actions';

const initial_state = {
	id: null as null | number,
	email: null as null | string,
	login: null as null | string,
	is_auth: false,
	checking_auth: false,
	submit_error: '',
	submit_error_code: '',
	captcha_url: null as null | string
};

const auth_reducer = (state = initial_state, action: any):typeof initial_state => {
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