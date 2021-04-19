import React from 'react';
import s from './Message.module.css';

type PropsType = {
	message_id: number,
	message: string,
	author_id: number | string
}

const Message: React.FC<PropsType> = ({message_id,author_id,message}) => {
	return(
		<div id={`${message_id}`} className={`${s.message} ${author_id === 0&&s.own}`}>{message}</div>
	);
}

export default Message;
