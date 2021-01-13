import React from 'react';
import { newMessageTextActionCreator, sendMessageActionCreator } from '../../redux/actionCreators';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {
	let dialogs = [...props.store.getState().dialogs.dialogs];
	let messages = [...props.store.getState().dialogs.messages];
	let newMessageState = props.store.getState().dialogs.newMessageState;
	const sendMessage = () => {
		props.store.dispatch(sendMessageActionCreator());
	};

	const handleNewMessageChange = (e) => {
		props.store.dispatch(newMessageTextActionCreator(e.target.value));
	};

	return (
		<Dialogs 
			sendMessage={sendMessage}
			handleNewMessageChange={handleNewMessageChange}
			dialogs={dialogs}
			messages={messages}
			newMessageState={newMessageState}
		/>
	);
}

export default DialogsContainer;
