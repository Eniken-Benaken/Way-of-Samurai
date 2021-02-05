import React from 'react';
import Preloader from '../../common/Preloader';
import s from './ProfileInfo.module.css';
import avatarPlaceholder from '../../../assets/images/avatar.png';
import Status from './Status';

const ProfileInfo = ({ current_visited_user, isFetching, status, updateStatus, user_id }) => {

	if (isFetching) return <Preloader />
	if (!current_visited_user) return <Preloader />
	let ownProfile = current_visited_user.userId === user_id;

	let is_looking = current_visited_user.lookingForAJob
		? <span className={s.looking_for_job}>🤑</span>
		: <span className={s.looking_for_job}>🤠</span>;

	let contacts = [];
	for (let contact in current_visited_user.contacts) {
		if (current_visited_user.contacts[contact]) {
			contacts.push(
				<div key={contact} className={s.contact}>{`${contact}: ${current_visited_user.contacts[contact]}`}</div>
			)
		}
		else { contacts.push(<div key={contact} className={s.contact}>{`${contact}: --`}</div>) }
	}

	let avatar = current_visited_user.photos.large
		? <img src={current_visited_user.photos.large} alt="avatar" />
		: <img src={avatarPlaceholder} alt="avatar" />



	return (
		<div className={s.profileInfo_wrapper}>
			<div className={s.banner}>
				<img src="https://source.unsplash.com/1000x200/?city" alt="newyear" />
			</div>
			<div className={s.person_info}>
				<div className={s.avatar_block}>
					<div className={s.user_name}>{current_visited_user.fullName} {is_looking}</div>
					{avatar}
					<button>Change Profile Photo</button>
				</div>
				<div className={s.description_block}>
					<h3 className={s.description_header}>About me</h3>
					<div className={s.description_content}>
						<Status statusText={status} ownProfile={ownProfile} updateStatus={updateStatus} />
					</div>
					<h3 className={s.description_header}>Contacts:</h3>
					{contacts}
				</div>
			</div>
		</div>
	);

}


export default ProfileInfo;


