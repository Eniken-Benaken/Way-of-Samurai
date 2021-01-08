import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';


const Dialogs = (props) => {
	return (
		<div className={s.dialogs_wrapper}>
			<div className={s.dialog_items}>
				<Dialog id='pavlo' dialog_name="Pavlo" />
				<Dialog id='meyrin' dialog_name="Meyrin" />
				<Dialog id='katya' dialog_name="Katya" />
				<Dialog id='bruno' dialog_name="Bruno" />
				<Dialog id='marko' dialog_name="Marko" />
				<Dialog id='roman' dialog_name="Roman" />
			</div>
			<div className={s.messages}>
				<Message message='We need to get food.' />
				<Message message='This is so wrong to steal food from others like us!' />
				<Message message='I would eat anything!' />
				<Message message="I haven't slept for a long time" />
				<Message message='Smoke is soothing me.' />
				<Message message='I hope we will be able to warm up this shelter' />
			</div>
		</div>
	);
}

export default Dialogs;


