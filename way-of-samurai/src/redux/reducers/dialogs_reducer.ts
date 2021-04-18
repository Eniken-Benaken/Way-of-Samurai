import { Action } from 'redux';
export const SEND_MESSAGE = 'wos/dialogs/SEND_MESSAGE'


interface ISendMessage extends Action<typeof SEND_MESSAGE> {
	new_message: string
};

export type dialogsActionTypes = ISendMessage;

export const sendMessageActionCreator = (new_message: string):ISendMessage => ({	type: SEND_MESSAGE, new_message });







type dialogs_item_type = {
	id: string,
	dialog_name: string,
	dialog_avatar: string
}

type messages_item_type = {
	message_id: number,
	message: string,
	author_id: number | string,
	author_name: string,
}

type dialogs_type = {
	dialogs: Array<dialogs_item_type>,
	messages: Array<messages_item_type>,
	newMessageState: string
}

const initial_state: dialogs_type =  {
	dialogs: [
		{ id: "pavlo", dialog_name: "Pavlo", dialog_avatar: "https://static.wikia.nocookie.net/this-war-of-mine/images/7/7e/70px-Pavle.jpg" },
		{ id: "meyrin", dialog_name: "Meyrin", dialog_avatar: "https://static.wikia.nocookie.net/this-war-of-mine/images/d/de/70px-Marin.jpg" },
		{ id: "katya", dialog_name: "Katya", dialog_avatar: "https://static.wikia.nocookie.net/this-war-of-mine/images/2/2c/70px-Katia.jpg" },
		{ id: "bruno", dialog_name: "Bruno", dialog_avatar: "https://static.wikia.nocookie.net/this-war-of-mine/images/d/d6/70px-Bruno.jpg" },
		{ id: "marko", dialog_name: "Marko", dialog_avatar: "https://static.wikia.nocookie.net/this-war-of-mine/images/c/cc/70px-Marko.jpg" },
		{ id: "roman", dialog_name: "Roman", dialog_avatar: "https://static.wikia.nocookie.net/this-war-of-mine/images/0/07/70px-Roman.jpg" }
	],
	messages: [
		{ message_id: 1, message: "We need to get food.", author_id: 0, author_name: "Dem Pigeon" },
		{ message_id: 2, message: "This is so wrong to steal food from others like us!", author_id: "pavlo", author_name: "Pavlo" },
		{ message_id: 3, message: "I would eat anything!", author_id: 0, author_name: "Dem Pigeon" },
		{ message_id: 4, message: "I haven't slept for a long time", author_id: "pavlo", author_name: "Pavlo" },
		{ message_id: 5, message: "Smoke is soothing me.", author_id: 0, author_name: "Dem Pigeon" },
		{ message_id: 6, message: "I hope we will be able to warm up this shelter", author_id: "pavlo", author_name: "Pavlo" }
	],
	newMessageState: ""
};


const dialogs_reducer = (state = initial_state,action: dialogsActionTypes) => {
	switch (action.type) {
		case SEND_MESSAGE:
			return {
				...state,
				messages: [...state.messages,{
					message_id: state.messages.length + 1,
					author_id: 0,
					author_name: "Dem Pigoen",
					message: action.new_message,
				}],
				newMessageState: ""
			} as dialogs_type
		default:
			return state;
	}
}

export default dialogs_reducer;