import React from 'react';
import s from './Profile.module.css';
import MyPosts from './Posts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
	return(
		<main className={s.profile_wrapper}>
			<ProfileInfo />
			<MyPosts posts={props.profile_data.posts} add_post={props.add_new_post} handleNewPostStateChange={props.handleNewPostStateChange} newPostState={props.getNewPostState()} />
		</main>
	);
}


export default Profile;
