import { Reducer } from "redux";
import { ThunkAction } from "redux-thunk";
import { resultCodes } from "../../api/API";
import { securityAPI } from "../../api/security-api";
import { authAPI } from "../../api/auth-api";
import { AppStateType } from "../redux_store";
import { BaseThunkType, InferActionTypes, PropertyTypes } from "./common";


//ACs Types
export type AuthAC_Types = PropertyTypes<typeof auth_actions>
export type AuthActionTypes = InferActionTypes<typeof auth_actions>


//ACs
const auth_actions = {
	setAuthData: (id: number | null, email: string | null, login: string | null) => ({
		type: 'wos/auth/SET_AUTH_DATA',
		data: {
			id,
			email,
			login
		}
	}) as const,
	setIsAuth: (is_auth: boolean) => ({
		type: 'wos/auth/SET_IS_AUTH',
		is_auth
	}) as const,
	stopSubmit: (error: string, error_code: number) => ({
		type: 'wos/auth/STOP_SUBMIT',
		submit_error: error,
		submit_error_code: error_code
	}) as const,
	getCaptchaUrlSuccess: (captcha_url: string) => ({
		type: 'wos/auth/SET_CAPTCHA_URL',
		captcha_url: captcha_url
	}) as const
}

type ThunkType = BaseThunkType<AuthActionTypes>


// THUNK CREATORS
export const getAuthData = (): ThunkType => async (dispatch) => {
	try {
		const data = await authAPI.getAuthData()
		if (data) {
			if(data.resultCode === resultCodes.Success) {
				let { id, email, login } = data.data;
				dispatch(auth_actions.setAuthData(id, email, login));
				
				if (login) {
					dispatch(auth_actions.setIsAuth(true));
				} else dispatch(auth_actions.setIsAuth(false));
			}
		}//removed return statement cause nobody needed it and because it requires special typing
	}
	catch(e) {
		console.error(e);
	}
}


export const submitLogin = (email: string, password: string, rememberMe: boolean, captcha: string | null): ThunkType => {
	return async (dispatch) => {
		const response = await authAPI.sendLoginData(email, password, rememberMe, captcha)
		if (response?.data.resultCode === resultCodes.Success) {
			const data = await authAPI.getAuthData();
			if (data?.resultCode === resultCodes.Error) {
				dispatch(auth_actions.setAuthData(null, '', ''));
				dispatch(auth_actions.setIsAuth(false));
			}
			else if (data?.resultCode === resultCodes.Success) {
				let { id, email, login } = data.data;
				dispatch(auth_actions.setAuthData(id, email, login));
				dispatch(auth_actions.setIsAuth(true));
			}
		}
		else if(response?.data.messages){
			dispatch(auth_actions.stopSubmit(response.data.messages[0], response.data.resultCode))
		}
	}
}

export const signOut = (): ThunkType => {
	return async (dispatch) => {
		const response = await authAPI.signOut()
		if (response?.data.resultCode === resultCodes.Success) {
			const data = await authAPI.getAuthData()
			if (data?.resultCode === resultCodes.Error) {
				dispatch(auth_actions.setAuthData(null, '', ''));
				dispatch(auth_actions.setIsAuth(false));
			}
			else if (data?.resultCode === resultCodes.Success) {
				let { id, email, login } = data.data;
				dispatch(auth_actions.setAuthData(id, email, login));
				dispatch(auth_actions.setIsAuth(true));
			}
		}
		else console.log(response?.data.messages[0]);
	}
}

export const getCaptcha = (): ThunkType => async (dispatch) => {
	const captcha_url = await securityAPI.getCaptchaUrl()
	if (captcha_url) dispatch(auth_actions.getCaptchaUrlSuccess(captcha_url));
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

const auth_reducer: Reducer<authType, AuthActionTypes> = (state = initial_state, action) => {
	switch (action.type) {
		case 'wos/auth/SET_AUTH_DATA':
			return {
				...state,
				...action.data
			}
		case 'wos/auth/SET_IS_AUTH':
			return {
				...state,
				is_auth: action.is_auth
			}
		// case TOGGLE_CHECKING_AUTH:
		// 	return {
		// 		...state,
		// 		checking_auth: action.checking_auth
		// 	}
		case 'wos/auth/STOP_SUBMIT':
			return {
				...state,
				submit_error: action.submit_error,
				submit_error_code: action.submit_error_code
			}
		case 'wos/auth/SET_CAPTCHA_URL':
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