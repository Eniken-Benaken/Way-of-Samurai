import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';



const Dialogs = (props) => {
	let dialogs = [...props.dialogs.dialogs];
	let messages = [...props.dialogs.messages];
	const newMessageState = props.dialogs.newMessageState;
	const newMessage = React.createRef();
	const sendMessage = () => {
		if(newMessage.current.value) {
			props.sendMessage();
		}	
	};

	const handleNewMessageChange = (e) => {
		props.handleNewMessageChange(e);
	};

	return (
		<div className={s.dialogs_wrapper}>
			<div className={s.dialog_items}>
				{dialogs.map(d => <Dialog key={d.id} id={d.id} dialog_name={d.dialog_name} dialog_avatar={d.dialog_avatar} />)}
			</div>
			<div className={s.messages}>
				{messages.map(m => <Message key={m.message_id} message_id={m.message_id} message={m.message} author_name={m.author_name} author_id={m.author_id} />)}
				<div className={s.new_message_wrapper}>
					<textarea ref={newMessage} className={s.new_message} value={newMessageState} onChange={handleNewMessageChange}></textarea>
					<div className={s.new_message_buttons}>
						<button onClick={sendMessage}>Add message</button>
						<button>😉</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dialogs;
