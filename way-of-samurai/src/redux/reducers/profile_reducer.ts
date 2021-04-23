import { AxiosResponse } from 'axios';
import { Action, AnyAction, Dispatch, Reducer } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { profileAPI } from '../../api/API';


const ADD_POST = 'wos/profile/ADD_POST'
const DELETE_POST = 'wos/profile/DELETE_POST'
const SET_STATUS = 'wos/profile/SET_STATUS'
const TOGGLE_IS_FETCHING = 'wos/profile/TOGGLE_IS_FETCHING'
const TOGGLE_IS_PHOTO_UPLOADED = 'wos/profile/TOGGLE_IS_PHOTO_UPLOADED'
const SET_USER_PROFILE = 'wos/profile/SET_USER_PROFILE'




//ACs Types
interface IAddPostAC extends Action<typeof ADD_POST> {
	new_post: string
};

interface IDeletePostAC extends Action<typeof DELETE_POST> {
	postId: number
};

interface ISetUserProfileAC extends Action<typeof SET_USER_PROFILE> {
	current_visited_user: currentVisitedUserType
}

interface IToggleIsFetchingAC extends Action<typeof TOGGLE_IS_FETCHING> {
	is_fetching: boolean
}

interface IToggleIsPhotoUploadedAC extends Action<typeof TOGGLE_IS_PHOTO_UPLOADED> {
	photoUploaded: boolean
}

interface ISetStatusAC extends Action<typeof SET_STATUS> {
	status: string
}

export type profileActionTypes = IAddPostAC | IDeletePostAC | ISetUserProfileAC | ISetStatusAC | IToggleIsFetchingAC | IToggleIsPhotoUploadedAC;


//ACs
export const addPostAC = (new_post: string): IAddPostAC => ({ 
	type: ADD_POST, 
	new_post 
});
export const deletePostAC = (postId: number): IDeletePostAC => ({
	type: DELETE_POST,
	postId
})
const setUserProfile = (current_visited_user: currentVisitedUserType): ISetUserProfileAC => ({
	type: SET_USER_PROFILE,
	current_visited_user: current_visited_user
})
const setStatus = (status: string): ISetStatusAC => ({
	type: SET_STATUS,
	status
})
const toggleIsFetching = (is_fetching: boolean): IToggleIsFetchingAC => ({ 		type: TOGGLE_IS_FETCHING, 
	is_fetching 
});
export const toggleIsPhotoUploaded = (photoUploaded: boolean): IToggleIsPhotoUploadedAC => ({ 		type: TOGGLE_IS_PHOTO_UPLOADED, 
	photoUploaded
});



type dispatch = Dispatch<profileActionTypes> & {}
type dispatch_thunk = ThunkDispatch<profile_type,undefined,AnyAction>;



//THUNK CREATORS
export const getUserData = (userId: number | null) => async (dispatch: dispatch) => {
	console.log("getUserData - Dispatched", new Date().getSeconds());
	
	dispatch(toggleIsFetching(true));
	const data = await profileAPI.getUserData(userId)
	dispatch(setUserProfile(data));
	console.log(`photoUploaded changed to false`);
	dispatch(toggleIsPhotoUploaded(false));
	dispatch(toggleIsFetching(false));
	const response = await profileAPI.getStatus(userId)
	if (response.data)
		dispatch(setStatus(response.data))
	else dispatch(setStatus(response.statusText))
}
export const updateStatus = (status: string | null) => async (dispatch: dispatch) => {
	try {
		if(status === null) return;
		const response = await profileAPI.setStatus(status)
		if (response.data.resultCode === 0) dispatch(setStatus(status));
	}
	catch (error) {
		console.log(error);
	}
}

export const savePhoto = (photo: any, userId: number | null) => async (dispatch: dispatch & dispatch_thunk) => {
	console.log("savePhoto - Dispatched", new Date().getSeconds());
	
	const response = await profileAPI.setProfilePhoto(photo)
	if (response.data.resultCode === 0) {
		dispatch(getUserData(userId));
		console.log(`photoUploaded changed to true`);
		dispatch(toggleIsPhotoUploaded(true))
	}
}


export type  userContactsType = {
	facebook: string | null,
	website: string | null,
	vk: string | null,
	twitter: string | null,
	instagram: string | null,
	youtube: string | null,
	github: string | null,
	mainLink: string | null
}

export type currentVisitedUserType = {
	aboutMe: string | null,
	contacts: userContactsType,
	lookingForAJob: boolean,
	lookingForAJobDescription: string | null,
	fullName: string,
	userId: number,
	photos: {
		small: string | null,
		large: string | null
	}
}

export type postType = {
	id: number,
	author_name: string,
	author_id: number,
	post_content: string,
	likes_count: number
}

type profile_type = {
	posts: Array<postType>,
	current_visited_user: null | currentVisitedUserType,
	status: string,
	is_fetching: boolean,
	photoUploaded: boolean
}

const initial_state: profile_type = {
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
	is_fetching: false,
	photoUploaded: false
};

const profile_reducer: Reducer<profile_type,profileActionTypes> = (state = initial_state, action) => {
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
		// case TOGGLE_IS_PHOTO_UPLOADED:
		// 	return {
		// 		...state,
		// 		photoUploaded: action.photoUploaded
		// 	}
		default:
			return state
	}
}
export default profile_reducer;
