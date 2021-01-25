import React from 'react';
import Preloader from '../../common/Preloader';
import s from './ProfileInfo.module.css';
import avatarPlaceholder from '../../../assets/images/avatar.png';

const ProfileInfo = (props) => {
	if (!props.profileInfo) {
		return (<Preloader />)
	}
	let is_looking = props.profileInfo.lookingForAJob ? <span className={s.looking_for_job}>🤑</span> : <span className={s.looking_for_job}>🤠</span>;

	let contacts = [];
	for (let prop in props.profileInfo.contacts) {
		if(props.profileInfo.contacts[prop])
		{contacts.push(<div key={prop} className={s.contact}>{`${prop}: ${props.profileInfo.contacts[prop]}`}</div>)}
		else {contacts.push(<div key={prop} className={s.contact}>{`${prop}: --`}</div>)}
	}

	let avatar = props.profileInfo.photos.large ? <img src={props.profileInfo.photos.large} alt="avatar" /> : <img src={avatarPlaceholder} alt="avatar" />

	return (
		<div className={s.profileInfo_wrapper}>
			<div className={s.banner}>
				<img src="https://source.unsplash.com/1000x200/?city" alt="newyear" />
			</div>
			<div className={s.person_info}>
				<div className={s.avatar_block}>
					<div className={s.user_name}>{props.profileInfo.fullName} {is_looking}</div>
					{avatar}
					<button>Change Profile Photo</button>
				</div>
				<div className={s.description_block}>
					<h3 className={s.description_header}>About me</h3>
					<div className={s.description_content}>{props.profileInfo.aboutMe}</div>
					<h3 className={s.description_header}>Contacts:</h3>
					{contacts}
				</div>
			</div>
		</div>
	);

}


export default ProfileInfo;
