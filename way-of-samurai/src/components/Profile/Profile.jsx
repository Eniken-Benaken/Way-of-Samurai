import React from 'react';
import s from './Profile.module.css';
import MyPosts from './Posts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
	return(
		<main className={s.profile_wrapper}>
			<ProfileInfo />
			<MyPosts posts={props.profile_data.posts} add_post={props.profile_data.functions.setters.add_new_post} handleTextareaChange={props.profile_data.functions.setters.handleTextareaChange} textareaState={props.profile_data.textareaState} />
		</main>
	);
}


export default Profile;
