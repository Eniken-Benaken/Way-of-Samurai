import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import MessageForm from '../Forms/MessageForm';



const Dialogs = ({dialogs:{dialogs,messages},sendMessage,setCurrentRoute}) => {
	setCurrentRoute("/dialogs");
	let dialogsArray = [...dialogs];
	let messagesArray = [...messages];
	const sendNewMessage = (new_message) => {
			sendMessage(new_message);
	};

	return (
		<div className={s.dialogs_wrapper}>
			<div className={s.dialog_items}>
				{dialogsArray.map(d => <Dialog key={d.id} id={d.id} dialog_name={d.dialog_name} dialog_avatar={d.dialog_avatar} />)}
			</div>
			<div className={s.messages}>
				{messagesArray.map(m => <Message key={m.message_id} message_id={m.message_id} message={m.message} author_name={m.author_name} author_id={m.author_id} />)}
				<MessageForm sendMessage={sendNewMessage} />
			</div>
		</div>
	);
}

export default Dialogs;
