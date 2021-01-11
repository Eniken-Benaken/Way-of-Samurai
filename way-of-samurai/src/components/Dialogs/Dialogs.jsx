import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';


const Dialogs = (props) => {
	let dialogs = [...props.dialogs_data.dialogs];
	let messages = [...props.dialogs_data.messages];
	const newMessage = React.createRef();
	const addMessage = () => {
		alert(`${newMessage.current.value}`)
	}

	return (
		<div className={s.dialogs_wrapper}>
			<div className={s.dialog_items}>
				{dialogs.map(d => <Dialog id={d.id} dialog_name={d.dialog_name} dialog_avatar={d.dialog_avatar} />)}
			</div>
			<div className={s.messages}>
				{messages.map(m => <Message id={m.id} message={m.message} message_author={m.author} />)}
				<div className={s.new_message_wrapper}>
					<textarea ref={newMessage} className={s.new_message}></textarea>
					<div className={s.new_message_buttons}>
						<button onClick={addMessage}>Add message</button>
						<button>😉</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dialogs;
