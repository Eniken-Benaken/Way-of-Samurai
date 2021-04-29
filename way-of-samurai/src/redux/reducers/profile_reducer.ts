import { resultCodes } from './../../api/API';
import { Reducer } from 'redux';
import { profileAPI } from "../../api/profile-api";
import { BaseThunkType, InferActionTypes } from './common';



//ACs Types
export type profileActionTypes = InferActionTypes<typeof profile_actions>

//ACs
export const profile_actions = {
	addPostAC: (new_post: string) => ({
		type: 'wos/profile/ADD_POST',
		new_post
	}) as const,
	deletePostAC: (postId: number) => ({
		type: 'wos/profile/DELETE_POST',
		postId
	}) as const,
	setUserProfile: (current_visited_user: currentVisitedUserType) => ({
		type: 'wos/profile/SET_USER_PROFILE',
		current_visited_user: current_visited_user
	}) as const,
	setStatus: (status: string) => ({
		type: 'wos/profile/SET_STATUS',
		status
	}) as const,
	toggleIsFetching: (is_fetching: boolean) => ({
		type: 'wos/profile/TOGGLE_IS_FETCHING',
		is_fetching
	}) as const,
	toggleIsPhotoUploaded: (photoUploaded: boolean) => ({
		type: 'wos/profile/TOGGLE_IS_PHOTO_UPLOADED',
		photoUploaded
	}) as const
}

type ThunkType = BaseThunkType<profileActionTypes>;


//THUNK CREATORS
export const getUserData = (userId: number | null, isFetching: boolean): ThunkType => async (dispatch) => {
	console.log("getUserData - Dispatched", new Date().getSeconds());
	if (isFetching) return
	dispatch(profile_actions.toggleIsFetching(true));
	const data = await profileAPI.getUserData(userId)
	dispatch(profile_actions.setUserProfile(data));
	const response = await profileAPI.getStatus(userId)
	if (response.data)
		dispatch(profile_actions.setStatus(response.data))
	dispatch(profile_actions.toggleIsFetching(false));
}
export const updateStatus = (status: string | null): ThunkType => async (dispatch) => {
	try {
		if (status === null) return;
		const data = await profileAPI.setStatus(status)
		if (data.resultCode === resultCodes.Success) dispatch(profile_actions.setStatus(status));
	}
	catch (error) {
		console.log(error);
	}
}

export const savePhoto = (photo: File, userId: number | null): ThunkType => async (dispatch) => {
	console.log("savePhoto - Dispatched", new Date().getSeconds());

	const data = await profileAPI.setProfilePhoto(photo)
	if (data.resultCode === resultCodes.Success) {
		console.log(`photoUploaded changed to true`);
		dispatch(profile_actions.toggleIsPhotoUploaded(true))
	}
}


export type userContactsType = {
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

const profile_reducer: Reducer<profile_type, profileActionTypes> = (state = initial_state, action) => {
	switch (action.type) {
		case 'wos/profile/ADD_POST':
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
		case 'wos/profile/DELETE_POST':
			return {
				...state,
				posts: state.posts.filter(post => post.id !== action.postId),
			}
		case 'wos/profile/SET_USER_PROFILE':
			return {
				...state,
				current_visited_user: action.current_visited_user
			}
		case 'wos/profile/SET_STATUS':
			return {
				...state,
				status: action.status
			}
		case 'wos/profile/TOGGLE_IS_FETCHING':
			return {
				...state,
				is_fetching: action.is_fetching
			}
		case 'wos/profile/TOGGLE_IS_PHOTO_UPLOADED':
			return {
				...state,
				photoUploaded: action.photoUploaded
			}
		default:
			return state
	}
}
export default profile_reducer;
