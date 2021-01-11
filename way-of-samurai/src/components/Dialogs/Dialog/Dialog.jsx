import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialog.module.css';

const Dialog = (props) => {
	const path = `/dialogs/${props.id}`;

	return (
		<div className={s.dialog}>
			<NavLink to={path} activeClassName={s.active}>
				<img src={props.dialog_avatar} alt='dialog_avatar'></img>
				<div>{props.dialog_name}</div>
			</NavLink>
		</div>
	);
}

export default Dialog;
