import React from 'react';
import Preloader from '../../common/Preloader';
import s from './ProfileInfo.module.css';
import avatarPlaceholder from '../../../assets/images/avatar.png';

const ProfileInfo = (props) => {
	if (!props.current_user) {
		return (<Preloader />)
	}
	let is_looking = props.current_user.lookingForAJob ? <span className={s.looking_for_job}>🤑</span> : <span className={s.looking_for_job}>🤠</span>;

	let contacts = [];
	for (let prop in props.current_user.contacts) {
		if(props.current_user.contacts[prop])
		{contacts.push(<div key={prop} className={s.contact}>{`${prop}: ${props.current_user.contacts[prop]}`}</div>)}
		else {contacts.push(<div key={prop} className={s.contact}>{`${prop}: --`}</div>)}
	}

	let avatar = props.current_user.photos.large ? <img src={props.current_user.photos.large} alt="avatar" /> : <img src={avatarPlaceholder} alt="avatar" />

	return (
		<div className={s.profileInfo_wrapper}>
			<div className={s.banner}>
				<img src="https://source.unsplash.com/1000x200/?city" alt="newyear" />
			</div>
			<div className={s.person_info}>
				<div className={s.avatar_block}>
					<div className={s.user_name}>{props.current_user.fullName} {is_looking}</div>
					{avatar}
					<button>Change Profile Photo</button>
				</div>
				<div className={s.description_block}>
					<h3 className={s.description_header}>About me</h3>
					<div className={s.description_content}>{props.current_user.aboutMe}</div>
					<h3 className={s.description_header}>Contacts:</h3>
					{contacts}
				</div>
			</div>
		</div>
	);

}


export default ProfileInfo;
