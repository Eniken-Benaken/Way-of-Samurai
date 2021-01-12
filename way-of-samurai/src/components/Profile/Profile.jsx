import React from 'react';
import s from './Profile.module.css';
import MyPosts from './Posts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
	return(
		<main className={s.profile_wrapper}>
			<ProfileInfo />
			<MyPosts posts={props.profile_data.posts} dispatch={props.dispatch} newPostState={props.profile_data.newPostState} />
		</main>
	);
}


export default Profile;
