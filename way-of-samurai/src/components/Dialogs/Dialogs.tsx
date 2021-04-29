import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import MessageForm from '../Forms/MessageForm';
import { dialogs_type,dialogsActionTypes } from '../../redux/reducers/dialogs_reducer';
import { AppActionTypes } from '../../redux/reducers/app_reducer';


type PropsType = {
	dialogs: dialogs_type,
	sendMessage: (new_message: string) => dialogsActionTypes,
	setCurrentRoute: (currentRoute: string) => AppActionTypes
}

const Dialogs: React.FC<PropsType> = ({dialogs:{dialogs,messages},sendMessage,setCurrentRoute}) => {
	setCurrentRoute("/dialogs");
	let dialogsArray = [...dialogs];
	let messagesArray = [...messages];
	

	return (
		<div className={s.dialogs_wrapper}>
			<div className={s.dialog_items_wrapper}>
				<div className={s.dialog_items}>
					{dialogsArray.map(d => <Dialog key={d.id} id={d.id} dialog_name={d.dialog_name} dialog_avatar={d.dialog_avatar} />)}
				</div>
			</div>
			<div className={s.messages}>
				{messagesArray.map(m => <Message key={m.message_id} message_id={m.message_id} message={m.message} author_id={m.author_id} />)}
				<MessageForm sendMessage={sendMessage} />
			</div>
		</div>
	);
}

export default Dialogs;
