import { Action } from "redux";
import {authAPI, securityAPI} from "../../api/API";


export const SET_AUTH_DATA = 'wos/auth/SET_AUTH_DATA'
export const SET_IS_AUTH = 'wos/auth/SET_IS_AUTH'
export const TOGGLE_CHECKING_AUTH = 'wos/auth/TOGGLE_CHECKING_AUTH'
export const STOP_SUBMIT = 'wos/auth/STOP_SUBMIT'
export const SET_CAPTCHA_URL = 'wos/auth/SET_CAPTCHA_URL'



//ACs Types
interface ISetAuthData extends Action<typeof SET_AUTH_DATA> {
	data: {
		id: number|null,
		email: string,
		login: string
	}
}
interface ISetIsAuth extends Action<typeof SET_IS_AUTH> {
	is_auth: boolean
}
interface IStopSumbit extends Action<typeof STOP_SUBMIT> {
	submit_error: string,
	submit_error_code: number
}
interface ISetCaptchaUrl extends Action<typeof SET_CAPTCHA_URL> {
	captcha_url: string
}


//ACs
export const setAuthData = (id:number|null,email:string,login:string):ISetAuthData => ({
	type: SET_AUTH_DATA, 
	data: {
		id,
		email,
		login
	}
})
export const setIsAuth = (is_auth: boolean):ISetIsAuth => ({
	type: SET_IS_AUTH,
	is_auth
})
export const toggleCkeckingAuth = (checking_auth:boolean) => ({
	type: SET_IS_AUTH,
	checking_auth
})
export const stopSubmit = (error:string,error_code:number):IStopSumbit => ({
	type: STOP_SUBMIT,
	submit_error: error,
	submit_error_code: error_code
})
export const getCaptchaUrlSuccess = (captcha_url:string):ISetCaptchaUrl => ({
	type: SET_CAPTCHA_URL,
	captcha_url: captcha_url
})



// THUNK CREATORS
export const getAuthData = () => async (dispatch: any) => {
	const data = await authAPI.getAuthData()
	let { id, email, login } = data.data;
	dispatch(setAuthData(id, email, login));
	if (login) {
		dispatch(setIsAuth(true));
	} else dispatch(setIsAuth(false));
	return data;
}

export const submitLogin = (email: string, password: string, rememberMe: boolean, captcha: any) => {
	return async (dispatch: any) => {
		const response = await authAPI.sendLoginData(email, password, rememberMe, captcha)
		if (response.data.resultCode === 0) {
			const data = await authAPI.getAuthData();
			if (data.resultCode === 1) {
				dispatch(setAuthData(null, '', ''));
				dispatch(setIsAuth(false));
			}
			else if (data.resultCode === 0) {
				let { id, email, login } = data.data;
				dispatch(setAuthData(id, email, login));
				dispatch(setIsAuth(true));
			}
		}
		else {
			dispatch(stopSubmit(response.data.messages.toString(), response.data.resultCode))
		}
	}
}

export const signOut = () => {
	return async (dispatch: any) => {
		const response = await authAPI.signOut()
		if (response.data.resultCode === 0) {
			const data = await authAPI.getAuthData()
			if (data.resultCode === 1) {
				dispatch(setAuthData(null, '', ''));
				dispatch(setIsAuth(false));
			}
			else if (data.resultCode === 0) {
				let { id, email, login } = data.data;
				dispatch(setAuthData(id, email, login));
				dispatch(setIsAuth(true));
			}
		}
		else console.log(response.data.data.messages.toString());
	}
}

export const getCaptcha = () => async (dispatch: any) => {
	const captcha_url = await securityAPI.getCaptchaUrl()
	if (captcha_url) dispatch(getCaptchaUrlSuccess(captcha_url));
	else console.log("AIN'T GET ANY CAPTCHA");
}




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

type authType = typeof initial_state;

const auth_reducer = (state = initial_state, action: any): authType => {
	switch (action.type) {
		case SET_AUTH_DATA:
			return {
				...state,
				...action.data
			}
		case SET_IS_AUTH:
			return {
				...state,
				is_auth: action.is_auth
			}
		case TOGGLE_CHECKING_AUTH:
			return {
				...state,
				checking_auth: action.checking_auth
			}
		case STOP_SUBMIT:
			return {
				...state,
				submit_error: action.submit_error,
				submit_error_code: action.submit_error_code
			}
		case SET_CAPTCHA_URL:
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