import React from 'react';
import s from './Profile.module.css';
import MyPostsContainer from './Posts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
	return(
		<main className={s.profile_wrapper}>
			<ProfileInfo />
			<MyPostsContainer />
		</main>
	);
}


export default Profile;
