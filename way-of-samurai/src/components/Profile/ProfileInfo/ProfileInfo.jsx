import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
	return(
		<div className={s.profileInfo_wrapper}>
			<div className={s.banner}>
				<img src="https://source.unsplash.com/1000x200/?city" alt="newyear"/>
			</div>
			<div className={s.person_info}>
				<div className={s.avatar_block}>
					<img src="https://i.guim.co.uk/img/media/d31ebd49b32a5aa609a584ababb1e03bc70b4942/573_213_2929_1758/master/2929.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=a54fc963e39dd6645fce012663ed13c1" alt="avatar" />
					<button>Change Profile Photo</button>
				</div>
				<div className={s.description_block}>
					<h3 className={s.description_header}>About me</h3>
					<p className={s.description_content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non at nulla vel ab nam perferendis quisquam ducimus a vitae cumque sequi, suscipit placeat optio blanditiis tenetur adipisci quod assumenda libero repellat explicabo ratione facilis? Tempora rem facilis deleniti ipsa? Similique, beatae! Enim placeat suscipit asperiores dolorum cum autem voluptatum rerum?</p>
				</div>
			</div>
		</div>
	);
}


export default ProfileInfo;
