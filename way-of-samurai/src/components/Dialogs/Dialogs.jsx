import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import { newMessageTextActionCreator, sendMessageActionCreator } from '../../redux/actionCreators';



const Dialogs = (props) => {
	let dialogs = [...props.dialogs_data.dialogs];
	let messages = [...props.dialogs_data.messages];
	const newMessage = React.createRef();
	const sendMessage = () => {
		props.dispatch(sendMessageActionCreator());
	};

	const handleNewMessageChange = (e) => {
		props.dispatch(newMessageTextActionCreator(e.target.value));
	};

	return (
		<div className={s.dialogs_wrapper}>
			<div className={s.dialog_items}>
				{dialogs.map(d => <Dialog id={d.id} dialog_name={d.dialog_name} dialog_avatar={d.dialog_avatar} />)}
			</div>
			<div className={s.messages}>
				{messages.map(m => <Message message_id={m.message_id} message={m.message} author_name={m.author_name} author_id={m.author_id} />)}
				<div className={s.new_message_wrapper}>
					<textarea ref={newMessage} className={s.new_message} value={props.dialogs_data.newMessageState} onChange={handleNewMessageChange}></textarea>
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
