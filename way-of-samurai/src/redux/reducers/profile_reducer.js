import { actions } from '../actions';

const initial_state = {
	posts: [
		{
			id: 1,
			author: "Dem Pigeon",
			post_content: "Hey, My name is Dem Pigeon",
			likes_count: 13
		},
		{
			id: 2,
			author: "Dem Pigeon",
			post_content: "This is my first post",
			likes_count: 2
		}
	],
	newPostState: ''
};

const profile_reducer = (state = initial_state, action) => {
	switch (action.type) {
		case actions.ADD_POST:
			return {
				posts: [...state.posts,{
					id: state.posts.length + 1,
					author: "Dem Pigoen",
					post_content: state.newPostState,
					likes_count: 0
				}],
				newPostState: ''
			}
		case actions.HANDLE_NEW_POST_CHANGE:
			return {
				...state,
				newPostState: action.textarea_value
			}
		default:
			return state
	}
}
export default profile_reducer;