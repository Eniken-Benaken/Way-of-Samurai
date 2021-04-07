import { Action } from 'redux';
import * as actions from './actions';


interface IAddPost extends Action<typeof actions.ADD_POST> {
	new_post: string
};

interface IDeletePost extends Action<typeof actions.DELETE_POST> {
	postId: number
};

export type currentVisitedUserType = {
	aboutMe: string|null,
	contacts: {
		facebook: string|null,
		website: string|null,
		vk: string|null,
		twitter: string|null,
		instagram: string|null,
		youtube: string|null,
		github: string|null,
		mainLink: string|null
	},
	lookingForAJob: boolean,
	lookingForAJobDescription: string|null,
	fullName: string,
	userId: number,
	photos: {
		small: string|null,
		large: string|null
	}
}

interface ISetUserProfile extends Action<typeof actions.SET_USER_PROFILE> {
	current_visited_user: currentVisitedUserType
}

interface ISetStatus extends Action<typeof actions.SET_STATUS> {
	status: string
}

interface IToggleIsFetching extends Action<typeof actions.TOGGLE_IS_FETCHING> {
	is_fetching: boolean
}

export type profileActionTypes = IAddPost | IDeletePost | ISetUserProfile | ISetStatus | IToggleIsFetching;



export const addPostAC = (new_post: string):IAddPost => ({	type: actions.ADD_POST,new_post });
export const deletePostAC = (postId: number):IDeletePost => ({
	type: actions.DELETE_POST, postId
})
export const setUserProfile = (current_visited_user: currentVisitedUserType):ISetUserProfile => ({
	type: actions.SET_USER_PROFILE, 
	current_visited_user: current_visited_user
})
// export const setUserInfo = (current_visited_user:currentVisitedUserType):ISetUserProfile => ({
// 	type: actions.SET_USER_PROFILE, 
// 	current_visited_user
// })
export const setStatus = (status:string):ISetStatus => ({
	type: actions.SET_STATUS, 
	status
})
export const toggleIsFetching = (is_fetching:boolean):IToggleIsFetching => ({ type: actions.TOGGLE_IS_FETCHING,is_fetching });




interface ISendMessage extends Action<typeof actions.SEND_MESSAGE> {
	new_message: string
};

export type dialogsActionTypes = ISendMessage;

export const sendMessageActionCreator = (new_message: string):ISendMessage => ({	type: actions.SEND_MESSAGE, new_message });





interface IFollowUser extends Action<typeof actions.FOLLOW_USER> {
	user_id: number
}

interface IUnfollowUser extends Action<typeof actions.UNFOLLOW_USER> {
	user_id: number
}

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

interface ISetUsers extends Action<typeof actions.SET_USERS> {
	users: Array<userType>,
}

interface ISetCurrentUserPage extends Action<typeof actions.SET_CURRENT_USERS_PAGE> {
	active_page: number
}

interface IToggleFollowing extends Action<typeof actions.TOGGLE_FOLLOWING> {
	is_fetching: boolean,
	user_id: number
}


export const followUserAC = (user_id: number):IFollowUser => ({	type: actions.FOLLOW_USER,user_id: user_id});
export const unfollowUserAC = (user_id:number):IUnfollowUser => ({	type: actions.UNFOLLOW_USER,user_id: user_id});
export const setUsers = (users: Array<userType>):ISetUsers => ({	type: actions.SET_USERS,users: users});
export const setCurrentUsersPage = (active_page = 1):ISetCurrentUserPage => ({ type: actions.SET_CURRENT_USERS_PAGE,active_page: active_page });
export const toggleFollowing = (user_id: number,is_fetching: boolean):IToggleFollowing => ({ type: actions.TOGGLE_FOLLOWING, user_id, is_fetching});





interface ISetAuthData extends Action<typeof actions.SET_AUTH_DATA> {
	data: {
		id: number|null,
		email: string,
		login: string
	}
}
interface ISetIsAuth extends Action<typeof actions.SET_IS_AUTH> {
	is_auth: boolean
}
interface IStopSumbit extends Action<typeof actions.STOP_SUBMIT> {
	submit_error: string,
	submit_error_code: number
}
interface ISetCaptchaUrl extends Action<typeof actions.SET_CAPTCHA_URL> {
	captcha_url: string
}



export const setAuthData = (id:number|null,email:string,login:string):ISetAuthData => ({
	type: actions.SET_AUTH_DATA, 
	data: {
		id,
		email,
		login
	}
})
export const setIsAuth = (is_auth: boolean):ISetIsAuth => ({
	type: actions.SET_IS_AUTH,
	is_auth
})
export const toggleCkeckingAuth = (checking_auth:boolean) => ({
	type: actions.SET_IS_AUTH,
	checking_auth
})
export const stopSubmit = (error:string,error_code:number):IStopSumbit => ({
	type: actions.STOP_SUBMIT,
	submit_error: error,
	submit_error_code: error_code
})
export const getCaptchaUrlSuccess = (captcha_url:string):ISetCaptchaUrl => ({
	type: actions.SET_CAPTCHA_URL,
	captcha_url: captcha_url
})





export type initAppType = {
	type: typeof actions.INIT_APP,
	initialized: boolean
}

export const initApp = (initialized: boolean):initAppType => ({
	type: actions.INIT_APP,
	initialized
})





export type setCurrentRouteType = {
	type: typeof actions.SET_CURRENT_ROUTE,
	current_route: string
}

export const setCurrentRoute = (current_route: string):setCurrentRouteType => ({
	type: actions.SET_CURRENT_ROUTE,
	current_route
})