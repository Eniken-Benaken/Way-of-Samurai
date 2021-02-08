import React, { useState } from 'react';
import s from './Profile.module.css';
import MyPostsContainer from './Posts/MyPostsContainer';
import ProfileInfoContainer from './ProfileInfo/ProfileInfoContainer';

const Profile = (props) => {
	let [editMode,setEditMode] = useState(false);

	if(editMode) return (<main className={s.profile_wrapper}>
		<ProfileInfoContainer {...props} editMode={editMode} setEditMode={setEditMode}/>
	</main>)
	else return(
		<main className={s.profile_wrapper}>
			<ProfileInfoContainer {...props} editMode={editMode} setEditMode={setEditMode}/>
			<MyPostsContainer />
		</main>
	);
}


export default Profile;
