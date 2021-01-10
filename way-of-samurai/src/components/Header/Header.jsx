import React from 'react';
import s from './Header.module.css';

const Header = (props) => {
	return(
		<header className={s.header}>
			<img src='https://dummyimage.com/160x46/ffffff/5cc6fe&text=React+Net'></img>
		</header>
	);
};

export default Header;
