import React from 'react';
import s from './Message.module.css';


const Message = ({message_id,author_id,message}) => {
	return(
		<div id={message_id} author={author_id} className={`${s.message} ${author_id === 0&&s.own}`}>{message}</div>
	);
}

export default Message;
