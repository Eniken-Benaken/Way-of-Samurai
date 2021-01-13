import React from 'react';
import s from './Message.module.css';


const Message = (props) => {
	return(
		<div id={props.message_id} author={props.author_id} className={`${s.message} ${props.author_id === 0&&s.own}`}>{props.message}</div>
	);
}

export default Message;
