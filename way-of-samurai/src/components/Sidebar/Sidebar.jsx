import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Sidebar.module.css';


const Sidebar = (props) => {
	return(
		<nav className={s.sidebar}>
			<div className={`${s.item}`}>
				<NavLink exact to="/" activeClassName={s.active}>&#128100; Profile</NavLink>
			</div>
			<div className={s.item}>
				<NavLink exact to="/dialogs" activeClassName={s.active}>&#9993; Messages</NavLink>
			</div>
			<div className={s.item}>
				<NavLink exact to="/news" activeClassName={s.active}>&#128226; News</NavLink>
			</div>
			<div className={s.item}>
				<NavLink exact to="/music" activeClassName={s.active}>&#9835; Music</NavLink>
			</div>
			<div className={s.item}>
				<NavLink exact to="/settings" activeClassName={s.active}>	&#9966; Settings</NavLink>
			</div>
		</nav>
	);
}


export default Sidebar;
