import React from 'react';
import s from './Users.module.css';
import User from './User/User';

const Users = (props) => {
	const users = props.users;

	return(
		<div className={s.users}>
			{users.map(u => <User 
				key={u.user_id}
				user_id={u.user_id}
				user_name={u.user_name}
				user_avatar={u.user_avatar}
				user_status_message={u.user_status_message} 
				user_city={u.user_city}
				user_country={u.user_country}
				is_followed={u.is_followed}
				followUser={props.followUser}
				unfollowUser={props.unfollowUser}
			/>)}
		</div>
	);
}


export default Users;

