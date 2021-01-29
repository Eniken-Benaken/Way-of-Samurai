import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import MessageForm from '../Forms/MessageForm';



const Dialogs = (props) => {
	props.setCurrentRoute("/dialogs");
	let dialogs = [...props.dialogs.dialogs];
	let messages = [...props.dialogs.messages];
	// const newMessageState = props.dialogs.newMessageState;
	// const newMessage = React.createRef();
	const sendMessage = (new_message) => {
			props.sendMessage(new_message);
	};

	// const handleNewMessageChange = (e) => {
	// 	props.handleNewMessageChange(e);
	// };

	return (
		<div className={s.dialogs_wrapper}>
			<div className={s.dialog_items}>
				{dialogs.map(d => <Dialog key={d.id} id={d.id} dialog_name={d.dialog_name} dialog_avatar={d.dialog_avatar} />)}
			</div>
			<div className={s.messages}>
				{messages.map(m => <Message key={m.message_id} message_id={m.message_id} message={m.message} author_name={m.author_name} author_id={m.author_id} />)}
				<MessageForm sendMessage={sendMessage} />
			</div>
		</div>
	);
}

export default Dialogs;
