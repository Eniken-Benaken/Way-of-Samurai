import { actions } from './actions';




export type addPostType = {
	type: typeof actions.ADD_POST,
	new_post: string
};

export type deletePostType = {
	type: typeof actions.DELETE_POST,
	postId: number
};

export const addPostAC = (new_post: string):addPostType => ({	type: actions.ADD_POST,new_post });
export const deletePostAC = (postId: number):deletePostType => ({
	type: actions.DELETE_POST, postId
})




export type sendMessageType = {
	type: typeof actions.SEND_MESSAGE,
	new_message: string
};

export const sendMessageActionCreator = (new_message: string):sendMessageType => ({	type: actions.SEND_MESSAGE, new_message });




export type followUserType = {
	type: typeof actions.FOLLOW_USER,
	user_id: number
}
export type unfollowUserType = {
	type: typeof actions.UNFOLLOW_USER,
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
export type setUsersType = {
	type: typeof actions.SET_USERS,
	users: Array<userType>,
}
export type setCurrentUserPageType = {
	type: typeof actions.SET_CURRENT_USERS_PAGE,
	active_page: number
}
export type toggleIsFetchingType = {
	type: typeof actions.TOGGLE_IS_FETCHING,
	is_fetching: boolean
}
export type toggleFollowingType = {
	type: typeof actions.TOGGLE_IS_FETCHING,
	is_fetching: boolean,
	user_id: number
}


export const followUserAC = (user_id: number):followUserType => ({	type: actions.FOLLOW_USER,user_id: user_id});
export const unfollowUserAC = (user_id:number):unfollowUserType => ({	type: actions.UNFOLLOW_USER,user_id: user_id});
export const setUsers = (users: Array<userType>):setUsersType => ({	type: actions.SET_USERS,users: users});
export const setCurrentUsersPage = (active_page = 1):setCurrentUserPageType => ({ type: actions.SET_CURRENT_USERS_PAGE,active_page: active_page });
export const toggleIsFetching = (is_fetching:boolean):toggleIsFetchingType => ({ type: actions.TOGGLE_IS_FETCHING,is_fetching });
export const toggleFollowing = (user_id: number,is_fetching: boolean):toggleFollowingType => ({ type: actions.TOGGLE_FOLLOWING, user_id, is_fetching});




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
export type setUserProfileType = {
	type: typeof actions.SET_CURRENT_USERS_PAGE,
	current_visited_user: currentVisitedUserType
}
export type setStatusType = {
	type: typeof actions.SET_STATUS,
	status: string
}


export const setUserProfile = (current_visited_user: currentVisitedUserType):setUserProfileType => ({
	type: actions.SET_USER_PROFILE, 
	current_visited_user: current_visited_user
})
export const setUserInfo = (current_visited_user:currentVisitedUserType):setUserProfileType => ({
	type: actions.SET_USER_INFO, 
	current_visited_user
})
export const setStatus = (status:string):setStatusType => ({
	type: actions.SET_STATUS, 
	status
})




export type setAuthDataType = {
	type: typeof actions.SET_AUTH_DATA,
	data: {
		id: number,
		email: string,
		login: string
	}
}
export type setIsAuthType = {
	type: typeof actions.SET_IS_AUTH,
	is_auth: boolean
}
export type stopSumbitType = {
	type: typeof actions.STOP_SUBMIT,
	submit_error: string,
	submit_error_code: number
}
export type setCaptchaUrlType = {
	type: typeof actions.SET_CAPTCHA_URL,
	captcha_url: string
}



export const setAuthData = (id:number,email:string,login:string):setAuthDataType => ({
	type: actions.SET_AUTH_DATA, 
	data: {
		id,
		email,
		login
	}
})
export const setIsAuth = (is_auth: boolean):setIsAuthType => ({
	type: actions.SET_IS_AUTH,
	is_auth
})
export const toggleCkeckingAuth = (checking_auth:boolean) => ({
	type: actions.SET_IS_AUTH,
	checking_auth
})
export const stopSubmit = (error:string,error_code:number):stopSumbitType => ({
	type: actions.STOP_SUBMIT,
	submit_error: error,
	submit_error_code: error_code
})
export const getCaptchaUrlSuccess = (captcha_url:string):setCaptchaUrlType => ({
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