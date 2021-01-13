import {actions} from '../actions';

const dialogs_reducer = (state,action) => {
	let _state = state;
	function _setNewMessageState(new_value) {
		_state.newMessageState = new_value;
	};

	function _sendMessage () {
		_state.messages.push(
			{
				message_id: _state.messages.length + 1,
				author_id: 0,
				author_name: "Dem Pigoen",
				message: _state.newMessageState,
			}
		);
		_setNewMessageState("");
	}

	function _handleNewMessageChange(text) {
		_setNewMessageState(text);
	}
	
	switch (action.type) {
		case actions.SEND_MESSAGE:
			_sendMessage();
			_setNewMessageState("");
			break;
		case actions.HANDLE_NEW_MESSAGE_CHANGE:
			_handleNewMessageChange(action.textarea_value);
			break;
		default:
			break;
	}
	return _state;
}

export default dialogs_reducer;