import React from 'react';
import s from './Message.module.css';


const Message = (props) => {
	return(
		<div className={`${s.message} ${props.message_author === "Dem Pigeon"&&s.own}`}>{props.message}</div>
	);
}

export default Message;
