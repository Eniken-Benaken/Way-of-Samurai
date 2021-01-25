import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
	let signed = props.is_auth ? [<span key="span">Welcome, {props.login}</span>,<NavLink key="signout" to='/login'>Sign out</NavLink>] : <NavLink key="signin" to='/login'>Sign in</NavLink>
	return(
		<header className={s.header}>
			<img src='https://dummyimage.com/160x46/ffffff/5cc6fe&text=React+Net' alt="fuck-off"></img>
			<div className={s.loginBlock}>
				{signed}
			</div>
		</header>
	);
};

export default Header;
