import React from 'react';
import s from './User.module.css';
import avatar from '../../../assets/images/avatar.png';

const User = (props) => {
	const followUser = (user_id) => {
		props.followUser(user_id)
	};

	const unfollowUser = (user_id) => {
		props.unfollowUser(user_id)
	};

	const button = props.is_followed ?
		<button className={s.followed} onClick={() => unfollowUser(props.user_id)}>Unfollow</button> :
		<button onClick={() => followUser(props.user_id)}>Follow</button>;

	return (
		<div className={s.item} id={props.user_id}>
			<div className={s.avatar_follow}>
				<img src={props.user_avatar ? props.user_avatar : avatar} alt="avatar" />
				{button}
			</div>
			<div className={s.user_info_wrapper}>
				<div className={s.user_info}>
					<div className={s.user_name}>
						<a href={props.user_id}>{props.user_name}</a>
					</div>
					<div className={s.user_status_message}>
						"{props.user_status_message}"
					</div>
				</div>
				<div className={s.user_location_wrapper}>
					<div className={s.user_location}>{props.user_country}, {props.user_city}</div>
				</div>
			</div>
		</div>
	);
}


export default User;
