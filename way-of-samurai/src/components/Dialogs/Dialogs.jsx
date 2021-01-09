import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';


const Dialogs = (props) => {
	let dialogs = [...props.dialogs];
	let messages = [...props.messages];

	return (
		<div className={s.dialogs_wrapper}>
			<div className={s.dialog_items}>
				{dialogs.map(d => <Dialog id={d.id} dialog_name={d.dialog_name} />)}
			</div>
			<div className={s.messages}>
				{messages.map(m => <Message id={m.id} message={m.message} />)}
			</div>
		</div>
	);
}

export default Dialogs;


