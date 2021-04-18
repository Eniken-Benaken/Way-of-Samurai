import { Action, Dispatch } from 'redux';
import { profileAPI } from '../../api/API';


export const ADD_POST = 'wos/profile/ADD_POST'
export const DELETE_POST = 'wos/profile/DELETE_POST'
export const SET_USER_INFO = 'wos/profile/SET_USER_INFO'
export const SET_STATUS = 'wos/profile/SET_STATUS'
export const TOGGLE_IS_FETCHING = 'wos/profile/TOGGLE_IS_FETCHING'
export const SET_USER_PROFILE = 'wos/profile/SET_USER_PROFILE'




//ACs Types
interface IAddPost extends Action<typeof ADD_POST> {
	new_post: string
};

interface IDeletePost extends Action<typeof DELETE_POST> {
	postId: number
};

interface ISetUserProfile extends Action<typeof SET_USER_PROFILE> {
	current_visited_user: currentVisitedUserType
}

interface IToggleIsFetching extends Action<typeof TOGGLE_IS_FETCHING> {
	is_fetching: boolean
}

interface ISetStatus extends Action<typeof SET_STATUS> {
	status: string
}

export type profileActionTypes = IAddPost | IDeletePost | ISetUserProfile | ISetStatus | IToggleIsFetching;


//ACs
export const addPostAC = (new_post: string):IAddPost => ({	type: ADD_POST,new_post });
export const deletePostAC = (postId: number):IDeletePost => ({
	type: DELETE_POST, postId
})
export const setUserProfile = (current_visited_user: currentVisitedUserType):ISetUserProfile => ({
	type: SET_USER_PROFILE, 
	current_visited_user: current_visited_user
})
export const setStatus = (status:string):ISetStatus => ({
	type: SET_STATUS, 
	status
})
export const toggleIsFetching = (is_fetching:boolean):IToggleIsFetching => ({ type: TOGGLE_IS_FETCHING,is_fetching });




//THUNK CREATORS
export const getUserData = (userId: number) => async (dispatch: Dispatch<profileActionTypes>) => {
	dispatch(toggleIsFetching(true));
	const data = await profileAPI.getUserData(userId)
	dispatch(setUserProfile(data));
	dispatch(toggleIsFetching(false));
	const response = await profileAPI.getStatus(userId)
	if (response.data)
		dispatch(setStatus(response.data))
	else dispatch(setStatus(response.statusText))
}
export const updateStatus = (status: string) => async (dispatch: any) => {
	try {
		const response = await profileAPI.setStatus(status)
		if (response.data.resultCode === 0) dispatch(setStatus(status));
	}
	catch (error) {
		console.log(error);
	}
}

export const savePhoto = (photo: any, userId: number) => async (dispatch: any) => {
	const response = await profileAPI.setProfilePhoto(photo)
	if (response.data.resultCode === 0) dispatch(getUserData(userId));
}




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

type postType = {
	id: number,
	author_name: string,
	author_id: number,
	post_content: string,
	likes_count: number
}

type profile_type = {
	posts: Array<postType>,
	current_visited_user: null|currentVisitedUserType,
	status: string,
	is_fetching: boolean
}

const initial_state:profile_type = {
	posts: [
		{
			id: 1,
			author_name: "Dem Pigeon",
			author_id: 14327,
			post_content: "Hey, My name is Dem Pigeon",
			likes_count: 13
		},
		{
			id: 2,
			author_name: "Dem Pigeon",
			author_id: 14327,
			post_content: "This is my first post",
			likes_count: 2
		}
	],
	current_visited_user: null,
	status: '',
	is_fetching: false
};

const profile_reducer = (state = initial_state, action: profileActionTypes):profile_type => {
	switch (action.type) {
		case ADD_POST:
			return {
				...state,
				posts: [...state.posts, {
					id: state.posts.length + 1,
					author_name: "Dem Pigoen",
					author_id: 14327,
					post_content: action.new_post,
					likes_count: 0
				}],
			}
		case DELETE_POST:
			return {
				...state,
				posts: state.posts.filter(post => post.id !== action.postId),
			}
		case SET_USER_PROFILE:
			return {
				...state,
				current_visited_user: action.current_visited_user
			}
		case SET_STATUS:
			return {
				...state,
				status: action.status
			}
		case TOGGLE_IS_FETCHING:
			return {
				...state,
				is_fetching: action.is_fetching
			}
		default:
			return state
	}
}
export default profile_reducer;
