import React from 'react';
import s from './ProfileInfo.module.css';
import Status from './Status';


const ProfileInfo = ({ fullName, is_looking, avatar, ownProfile, onPhotoUpload, status, updateStatus, contacts, setEditMode, lookingForAJobDescription, aboutMe, serverErrorMessage }) => {
	return <div className={s.profileInfo_wrapper}>
		<div className={s.banner}>
			<img src="https://source.unsplash.com/1000x200/?city" alt="newyear" />
		</div>
		<div className={s.person_info}>
			<div className={s.avatar_block}>
				<div className={s.user_name}>{fullName} {is_looking}</div>
				{avatar}
				{ownProfile && <input type="file" onChange={onPhotoUpload} />}
			</div>
			<div className={s.description_block}>
				<Status statusText={status} ownProfile={ownProfile} updateStatus={updateStatus} serverErrorMessage={serverErrorMessage}/>
				<h3 className={s.description_header}>About me: </h3>
				<div className={s.description_content}>
					{aboutMe}
				</div>
				<h3 className={s.description_header}>My Skills:</h3>
				<div className={s.description_content}>
					{lookingForAJobDescription}
				</div>
				<h3 className={s.description_header}>Contacts:</h3>
				{contacts}
				{ownProfile && <button onClick={() => setEditMode(true)}>Change Your Info</button>}
			</div>
		</div>
	</div>;
}

export default ProfileInfo;
