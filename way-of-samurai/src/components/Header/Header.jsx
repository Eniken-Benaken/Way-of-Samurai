import React from 'react';
import s from './Header.module.css';

const Header = (props) => {
	return(
		<header className={s.header}>
			<img src='https://dummyimage.com/200x120/00eaff/ffffff&text=Company+Ico'></img>
		</header>
	);
};

export default Header;
