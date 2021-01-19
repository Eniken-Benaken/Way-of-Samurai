import React from 'react';
import s from './Users.module.css';
import User from './User/User';
import axios from 'axios';

const Users = (props) => {
const getUsers = () =>
	{	if(props.users.length === 0) {
		console.log('users.lenght = '+props.users.length);
		const promise = axios.get('https://api.mockaroo.com/api/b6d63280?count=3&key=93914fd0');
		promise.then(response => {console.log('resolving promis, call setUsers()'+response.data);props.setUsers(response.data)});
		}}
	

	return(
		<div onMouseOver={getUsers} className={s.users}>
			{props.users.map(u => <User 
				key={u.id}
				user_id={u.id}
				user_name={u.name}
				user_avatar={u.avatar}
				user_status_message={u.status_message} 
				user_city={u.city}
				user_country={u.country}
				is_followed={u.is_followed}
				followUser={props.followUser}
				unfollowUser={props.unfollowUser}
			/>)}
		</div>
	);
}


export default Users;

