import React from 'react';
import s from './Sidebar.module.css';


const Sidebar = (props) => {
	return(
		<nav className={s.sidebar}>
			<div className={`${s.item} ${s.active}`}><a href="/">Profile</a></div>
			<div className={s.item}><a href="/">Messages</a></div>
			<div className={s.item}><a href="/">News</a></div>
			<div className={s.item}><a href="/">Music</a></div>
			<div className={s.item}><a href="/">Settings</a></div>
		</nav>
	);
}


export default Sidebar;
