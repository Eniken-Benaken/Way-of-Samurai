import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../Sidebar.module.css';

const MenuItem = (props) => {
	return(
		<div className={s.menu_item} id={props.id}>
					<NavLink exact to={props.path} activeClassName={s.active}>
						<div className={s.menu_item_icon}>{`${props.icon}`}</div>
						<div className={s.menu_item_item}>{props.item}</div> 
					</NavLink>
				</div>
	);
}

export default MenuItem;
