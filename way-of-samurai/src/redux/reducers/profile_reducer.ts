import { Action, Dispatch } from 'redux';
import { profileAPI } from '../../api/API';


const ADD_POST = 'wos/profile/ADD_POST'
const DELETE_POST = 'wos/profile/DELETE_POST'
// const SET_USER_INFO = 'wos/profile/SET_USER_INFO'
const SET_STATUS = 'wos/profile/SET_STATUS'
const TOGGLE_IS_FETCHING = 'wos/profile/TOGGLE_IS_FETCHING'
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

interface ISetStatusAC extends Action<typeof SET_STATUS> {
	status: string
}

export type profileActionTypes = IAddPostAC | IDeletePostAC | ISetUserProfileAC | ISetStatusAC | IToggleIsFetchingAC;


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




//THUNK CREATORS
export const getUserData = (userId: number | null) => async (dispatch: Dispatch<profileActionTypes>) => {
	dispatch(toggleIsFetching(true));
	const data = await profileAPI.getUserData(userId)
	dispatch(setUserProfile(data));
	dispatch(toggleIsFetching(false));
	const response = await profileAPI.getStatus(userId)
	if (response.data)
		dispatch(setStatus(response.data))
	else dispatch(setStatus(response.statusText))
}
export const updateStatus = (status: string | null) => async (dispatch: any) => {
	try {
		if(status === null) return;
		const response = await profileAPI.setStatus(status)
		if (response.data.resultCode === 0) dispatch(setStatus(status));
	}
	catch (error) {
		console.log(error);
	}
}

export const savePhoto = (photo: any, userId: number | null) => async (dispatch: any) => {
	const response = await profileAPI.setProfilePhoto(photo)
	if (response.data.resultCode === 0) dispatch(getUserData(userId));
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

type postType = {
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
	is_fetching: boolean
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
	is_fetching: false
};

const profile_reducer = (state = initial_state, action: profileActionTypes): profile_type => {
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
