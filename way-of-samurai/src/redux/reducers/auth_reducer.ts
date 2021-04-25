import { getAuthDataRT } from './../../api/API';
import { Action, Reducer } from "redux";
import { ThunkAction } from "redux-thunk";
import { authAPI, securityAPI } from "../../api/API";
import { AppStateType } from "../redux_store";


const SET_AUTH_DATA = 'wos/auth/SET_AUTH_DATA'
const SET_IS_AUTH = 'wos/auth/SET_IS_AUTH'
// const TOGGLE_CHECKING_AUTH = 'wos/auth/TOGGLE_CHECKING_AUTH'
const STOP_SUBMIT = 'wos/auth/STOP_SUBMIT'
const SET_CAPTCHA_URL = 'wos/auth/SET_CAPTCHA_URL'


//ACs Types
interface ISetAuthDataAC extends Action<typeof SET_AUTH_DATA> {
	data: {
		id: number | null,
		email: string | null,
		login: string | null
	}
}
interface ISetIsAuthAC extends Action<typeof SET_IS_AUTH> {
	is_auth: boolean
}
interface IStopSumbitAC extends Action<typeof STOP_SUBMIT> {
	submit_error: string,
	submit_error_code: number
}
interface ISetCaptchaUrlAC extends Action<typeof SET_CAPTCHA_URL> {
	captcha_url: string
}

type AuthAC_Types = ISetAuthDataAC | ISetIsAuthAC | IStopSumbitAC | ISetCaptchaUrlAC;


//ACs
const setAuthData = (id: number | null, email: string | null, login: string | null): ISetAuthDataAC => ({
	type: SET_AUTH_DATA,
	data: {
		id,
		email,
		login
	}
})
const setIsAuth = (is_auth: boolean): ISetIsAuthAC => ({
	type: SET_IS_AUTH,
	is_auth
})
const stopSubmit = (error: string, error_code: number): IStopSumbitAC => ({
	type: STOP_SUBMIT,
	submit_error: error,
	submit_error_code: error_code
})
const getCaptchaUrlSuccess = (captcha_url: string): ISetCaptchaUrlAC => ({
	type: SET_CAPTCHA_URL,
	captcha_url: captcha_url
})


type ThunkType = ThunkAction<Promise<getAuthDataRT|undefined>, AppStateType, unknown, AuthAC_Types>


// THUNK CREATORS
export const getAuthData = (): ThunkType => async (dispatch) => {
	try {
		const data = await authAPI.getAuthData()
		if (data) {
			let { id, email, login } = data.data;
			dispatch(setAuthData(id, email, login));
			if (login) {
				dispatch(setIsAuth(true));
			} else dispatch(setIsAuth(false));
			return data;
		}
	}
	catch(e) {
		console.error(e);
	}
}


export const submitLogin = (email: string, password: string, rememberMe: boolean, captcha: string | null): ThunkType => {
	return async (dispatch) => {
		const response = await authAPI.sendLoginData(email, password, rememberMe, captcha)
		if (response?.data.resultCode === 0) {
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
			dispatch(stopSubmit(response?.data.messages.toString(), response?.data.resultCode))
		}
	}
}

export const signOut = (): ThunkType => {
	return async (dispatch) => {
		const response = await authAPI.signOut()
		if (response?.data.resultCode === 0) {
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
		else console.log(response?.data.data.messages.toString());
	}
}

export const getCaptcha = (): ThunkType => async (dispatch) => {
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
	submit_error_code: null as null | number,
	captcha_url: null as null | string
};

type authType = typeof initial_state;

const auth_reducer: Reducer<authType, AuthAC_Types> = (state = initial_state, action) => {
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
		// case TOGGLE_CHECKING_AUTH:
		// 	return {
		// 		...state,
		// 		checking_auth: action.checking_auth
		// 	}
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
				submit_error_code: null
			}
		default:
			return state
	}
}
export default auth_reducer;