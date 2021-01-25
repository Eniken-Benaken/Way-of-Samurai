import React from 'react';
import { Route } from 'react-router-dom';
import s from './Sidebar.module.css';
import Friend from './Friend/Friend';
import MenuItem from './Menu_items/MenuItem';


const Sidebar = (props) => {
	let friends = [...props.friends];
	let menu_items = [...props.menu_items];

	return (
		<div className={s.sidebar_wrapper}>
			<nav className={s.menu}>
				{menu_items.map(
					menu_item => 
						<MenuItem key={menu_item.id} id={menu_item.id} path={menu_item.path} icon={menu_item.icon} item={menu_item.item} />
				)}
			</nav>
			<Route exact path="/profile" render={() =>
				<div className={s.friends_bar}>
					<div className={s.friends_header}>Friends</div>
					<div className={s.friends_block}>
						{friends.map(friend =>
							<Friend key={friend.id} id={friend.id} friend_avatar={friend.friend_avatar} friend_name={friend.friend_name} />
						)}
					</div>
				</div>
			} />

		</div>
	);
}


export default Sidebar;
