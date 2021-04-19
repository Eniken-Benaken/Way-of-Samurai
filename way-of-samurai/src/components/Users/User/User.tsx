import React from 'react';
import s from './User.module.css';
import avatar from '../../../assets/images/avatar.png';
import { NavLink } from 'react-router-dom';

type PropsType = {
	user_id: number,
	user_name: string,
	user_avatar: string | null,
	user_status_message: string | null,
	is_followed: boolean,
	is_following: boolean,
	followUser: (userId: number) => void, 
	unfollowUser: (userId: number) => void, 
}


const User: React.FC<PropsType> = ({
	user_id, 
	user_name, 
	user_avatar, 
	user_status_message, 
	is_followed, 
	is_following, 
	followUser, 
	unfollowUser
}) => {
	const followThisUser = (user_id: number) => {
		followUser(user_id)
	};

	const unfollowThisUser = (user_id: number) => {
		unfollowUser(user_id)
	};

	const button = is_followed ?
		<button className={s.followed} disabled={is_following} onClick={() => unfollowThisUser(user_id)}>Unfollow</button> :
		<button onClick={() => followThisUser(user_id)} disabled={is_following}>Follow</button>;

	return (
		<div className={s.item} id={`${user_id}`}> {/**this is for HTML inner types */}
			<div className={s.avatar_follow}>
				<NavLink to={`/profile/${user_id}`}>
					<img src={user_avatar ? user_avatar : avatar} alt="avatar" />
				</NavLink>
				{button}
			</div>
			<div className={s.user_info_wrapper}>
				<div className={s.user_info}>
					<div className={s.user_name}>
						<NavLink to={`/profile/${user_id}`}>{user_name}</NavLink>
					</div>
					<div className={s.user_status_message}>
						"{user_status_message}"
					</div>
				</div>
			</div>
		</div>
	);
}


export default User;
