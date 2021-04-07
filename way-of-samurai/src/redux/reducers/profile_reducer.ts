import { currentVisitedUserType, profileActionTypes } from './../actionCreators';
import * as actions from '../actions';

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
		case actions.ADD_POST:
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
		case actions.DELETE_POST:
			return {
				...state,
				posts: state.posts.filter(post => post.id !== action.postId),
			}
		case actions.SET_USER_PROFILE:
			return {
				...state,
				current_visited_user: action.current_visited_user
			}
		case actions.SET_STATUS:
			return {
				...state,
				status: action.status
			}
		case actions.TOGGLE_IS_FETCHING:
			return {
				...state,
				is_fetching: action.is_fetching
			}
		default:
			return state
	}
}
export default profile_reducer;
