import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';


const Dialogs = (props) => {
	let dialogs = [...props.dialogs_data.dialogs];
	let messages = [...props.dialogs_data.messages];

	return (
		<div className={s.dialogs_wrapper}>
			<div className={s.dialog_items}>
				{dialogs.map(d => <Dialog id={d.id} dialog_name={d.dialog_name} dialog_avatar={d.dialog_avatar} />)}
			</div>
			<div className={s.messages}>
				{messages.map(m => <Message id={m.id} message={m.message} message_author={m.author} />)}
			</div>
		</div>
	);
}

export default Dialogs;
