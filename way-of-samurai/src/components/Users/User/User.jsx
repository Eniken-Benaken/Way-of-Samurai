import React from 'react';
import s from './User.module.css';

const User = (props) => {
	const followUser = (user_id) => {
		props.followUser(user_id)
	};

	const unfollowUser = (user_id) => {
		props.unfollowUser(user_id)
	};

	const button = props.is_followed ?
			<button onClick={() => unfollowUser(props.user_id)}>Unfollow</button> :
			<button onClick={() => followUser(props.user_id)}>Follow</button>;
	
	return(
		<div className={s.item} id={props.user_id}>
			<img src={props.user_avatar} alt="avatar"/>
			<div className={s.post_content_wrapper}>
				<div className={s.author}>
					<a href={props.user_id}>{props.user_name}</a>
				</div>
				<div className={s.post_content}>{props.user_status_message}</div>
			</div>
			<div className={s.action_buttons}>
				<div className={s.likes}>{props.user_city}</div>			
				<div className={s.add_comment}>{props.user_country}</div>
				{button}
			</div>
		</div>
		/* <div className={s.item}>{props.post_contents}</div> */
	);
}


export default User;
