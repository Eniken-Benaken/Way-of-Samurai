import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialog.module.css';

const Dialog = (props) => {
	const path = `/dialogs/${props.id}`;

	return (
		<div className={s.dialog}>
			<NavLink to={path} activeClassName={s.active}>{props.dialog_name}</NavLink>
		</div>
	);
}

export default Dialog;
