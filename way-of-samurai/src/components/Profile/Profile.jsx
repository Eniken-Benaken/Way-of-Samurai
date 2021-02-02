import React from 'react';
import s from './Profile.module.css';
import MyPostsContainer from './Posts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({current_visited_user,isFetching,status,updateStatus,setCurrentRoute,user_id}) => {
	setCurrentRoute("/profile");
	return(
		<main className={s.profile_wrapper}>
			<ProfileInfo current_visited_user={current_visited_user} isFetching={isFetching} status={status} updateStatus={updateStatus} user_id={user_id} />
			<MyPostsContainer />
		</main>
	);
}


export default Profile;
