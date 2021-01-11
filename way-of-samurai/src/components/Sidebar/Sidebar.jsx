import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import s from './Sidebar.module.css';
import Friend from './Friend/Friend';
import MenuItem from './Menu_items/MenuItem';


const Sidebar = (props) => {
	let friends = props.sidebar.friends;
	let menu_items = props.sidebar.menu_items;

	return (
		<div className={s.sidebar_wrapper}>
			<nav className={s.menu}>
				{menu_items.map(
					menu_item => 
						<MenuItem id={menu_item.id} path={menu_item.path} icon={menu_item.icon} item={menu_item.item} />
				)}
			</nav>
			<Route exact path="/" render={() =>
				<div className={s.friends_bar}>
					<div className={s.friends_header}>Friends</div>
					<div className={s.friends_block}>
						{friends.map(friend =>
							<Friend id={friend.id} friend_avatar={friend.friend_avatar} friend_name={friend.friend_name} />
						)}
					</div>
				</div>
			} />

		</div>
	);
}


export default Sidebar;
