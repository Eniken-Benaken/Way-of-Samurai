import React from 'react';
import s from './Profile.module.css';
import MyPostsContainer from './Posts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { MyContext } from '../../store_context';

const Profile = (props) => {
	return(
		<main className={s.profile_wrapper}>
			<ProfileInfo />
			<MyContext.Consumer>
				{store => <MyPostsContainer store={store} />}
			</MyContext.Consumer>
		</main>
	);
}


export default Profile;
