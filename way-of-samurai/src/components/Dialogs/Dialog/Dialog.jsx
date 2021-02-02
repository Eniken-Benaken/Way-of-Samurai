import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialog.module.css';

const Dialog = ({id,dialog_avatar,dialog_name}) => {
	const path = `/dialogs/${id}`;

	return (
		<div className={s.dialog}>
			<NavLink to={path} activeClassName={s.active}>
				<img src={dialog_avatar} alt='dialog_avatar'></img>
				<div>{dialog_name}</div>
			</NavLink>
		</div>
	);
}

export default Dialog;
