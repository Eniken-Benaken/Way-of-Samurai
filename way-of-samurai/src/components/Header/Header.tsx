import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';


type PropsType = {
	is_auth: boolean,
	login: string | null,
	signOut: () => void
}


const Header: React.FC<PropsType> = ({is_auth,login,signOut}) => {
	let signed = is_auth ? [<span key="span">Welcome, {login}</span>,<button key='signOut' onClick={signOut}>Sign Out</button>] : <NavLink key="signin" to='/login'>Sign in</NavLink>
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
