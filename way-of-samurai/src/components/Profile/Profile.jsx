import React from 'react';
import s from './Profile.module.css';
import MyPostsContainer from './Posts/MyPostsContainer';
import ProfileInfoContainer from './ProfileInfo/ProfileInfoContainer';

const Profile = (props) => {

	if(!props.ownProfile) return (<main className={s.profile_wrapper}>
		<ProfileInfoContainer {...props} />
	</main>)
	else return(
		<main className={s.profile_wrapper}>
			<ProfileInfoContainer {...props} />
			<MyPostsContainer />
		</main>
	);
}


export default Profile;
