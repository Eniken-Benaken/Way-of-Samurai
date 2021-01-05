import React from 'react';
import s from './Profile.module.css';
import MyPosts from './Posts/MyPosts';

const Profile = (props) => {
	return(
		<main className={s.main}>
			<div className={s.banner}>
				<img src="https://source.unsplash.com/1200x200/?new-year" alt="newyear"/>
			</div>
			<div className={s.person_info}>ava + description</div>
			<MyPosts />
		</main>
	);
}


export default Profile;
