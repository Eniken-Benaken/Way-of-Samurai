import React from 'react';
import s from '../Sidebar.module.css';

const Friend = (props) => {
	return (
		<a className={s.friend} href={`/${props.id}`}>
			<img className={s.friend_avatar} src={props.friend_avatar} alt="ico"></img>
			<div className={s.friend_name}>{props.friend_name}</div>
		</a>
	);
}

export default Friend;