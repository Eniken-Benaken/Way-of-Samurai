import {actions} from '../actions';

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

const profile_reducer = (state = initial_state,action) => {
	let _state = state;
	function _setNewPostState(new_value) {
		_state.newPostState = new_value;
	};

	function _addNewPost () {
		_state.posts.push(
			{
				id: _state.posts.length + 1,
				author: "Dem Pigoen",
				post_content: _state.newPostState,
				likes_count: 0
			}
		);
		_setNewPostState("");
	}

	function _handleNewPostStateChange(text) {
		_setNewPostState(text);
	}
	
	switch (action.type) {
		case actions.ADD_POST:
			_addNewPost();
			_setNewPostState("");
			return _state;
		case actions.HANDLE_NEW_POST_CHANGE:
			_handleNewPostStateChange(action.textarea_value);
			return _state;
		default:
			return _state;
	}
}

export default profile_reducer;