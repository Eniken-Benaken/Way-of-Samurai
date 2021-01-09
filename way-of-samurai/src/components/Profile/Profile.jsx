import React from 'react';
import s from './Profile.module.css';
import MyPosts from './Posts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
	console.log(props.posts);
	return(
		<main className={s.profile_wrapper}>
			<ProfileInfo />
			<MyPosts posts={props.posts} />
		</main>
	);
}


export default Profile;
