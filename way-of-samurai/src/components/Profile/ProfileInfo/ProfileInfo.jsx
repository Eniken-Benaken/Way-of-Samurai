import React from 'react';
import s from './ProfileInfo.module.css';
import Status from './Status';


const ProfileInfo = ({ fullName, is_looking, avatar, ownProfile, onPhotoUpload, status, updateStatus, contacts, setEditMode, lookingForAJobDescription, aboutMe, serverErrorMessage }) => {
	console.log(contacts);
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
				<h3 className={s.description_header}>Status: </h3>
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
				
				<div className={s.icons_author} onClick={(e) => {e.preventDefault()}}>Icons made by <a href="https://www.flaticon.com/authors/dave-gandy" title="Dave Gandy">Dave Gandy</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div><div className={s.icons_author} onClick={(e) => {e.preventDefault()}}>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div><div className={s.icons_author} onClick={(e) => {e.preventDefault()}}>Icons made by <a href="https://www.flaticon.com/authors/prettycons" title="prettycons">prettycons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div><div className={s.icons_author} onClick={(e) => {e.preventDefault()}}>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div><div className={s.icons_author} onClick={(e) => {e.preventDefault()}}>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
			</div>
		</div>
	</div>;
}

export default ProfileInfo;
