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
	let stateCopy = {
		posts: [...state.posts],
		newPostState: state.newPostState
	}

	function _setNewPostState(new_value) {
		stateCopy.newPostState = new_value;
	};

	function _addNewPost() {
		stateCopy.posts.push(
			{
				id: stateCopy.posts.length + 1,
				author: "Dem Pigoen",
				post_content: stateCopy.newPostState,
				likes_count: 0
			}
		);
		_setNewPostState("");
	}

	function _handleNewPostStateChange(e) {
		_setNewPostState(e.target.value);
	}

	switch (action.type) {
		case actions.ADD_POST:
			_addNewPost();
			_setNewPostState("");
			return stateCopy;
		case actions.HANDLE_NEW_POST_CHANGE:
			_handleNewPostStateChange(action.textarea_value);
			return stateCopy;
		default:
			return stateCopy;
	}
}
export default profile_reducer;