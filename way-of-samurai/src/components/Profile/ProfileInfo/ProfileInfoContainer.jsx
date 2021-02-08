import React, { useState } from 'react';
import Preloader from '../../common/Preloader';
import s from './ProfileInfo.module.css';
import avatarPlaceholder from '../../../assets/images/avatar.png';
import ProfileInfoForm from './ProfileInfoForm';
import ProfileInfo from './ProfileInfo';
import {setUserInfo} from './../../../redux/actionCreators';
import { profileAPI } from '../../../api/API';
import { useDispatch } from 'react-redux';

const ProfileInfoContainer = ({ current_visited_user, isFetching, status, updateStatus, user_id, savePhoto, editMode, setEditMode }) => {

	let [error,setError] = useState(null);
	const dispatch = useDispatch();

	if (isFetching) return <Preloader />
	if (!current_visited_user) return <Preloader />
	let ownProfile = current_visited_user.userId === user_id;

	let is_looking = current_visited_user.lookingForAJob
		? <span className={s.looking_for_job}>🤑</span>
		: <span className={s.looking_for_job}>🤠</span>;

	let contacts = [];
	for (let contact in current_visited_user.contacts) {
		if (current_visited_user.contacts[contact]) {
			contacts.push(
				<div key={contact} className={s.contact}>{`${contact}: ${current_visited_user.contacts[contact]}`}</div>
			)
		}
		else { contacts.push(<div key={contact} className={s.contact}>{`${contact}: --`}</div>) }
	}

	let avatar = current_visited_user.photos.large
		? <img src={current_visited_user.photos.large} alt="avatar" />
		: <img src={avatarPlaceholder} alt="avatar" />

	
	const onPhotoUpload = (e) => {
		if (e.target.files.length) {
			savePhoto(e.target.files[0],user_id);
		}
		else {
			console.log('No file loaded');
		}
	}

	const submitProfileInfoChange = async (changed_info) => {
		const response = await profileAPI.setProfileInfo(changed_info);
		console.log(response);
		if(response.data.resultCode === 0) {
			dispatch(setUserInfo(changed_info))
			setEditMode(false);
		}
		else {
			response.data.messages.length && setError(response.data.messages[0]);
		}
	}


	return (
		editMode 
		? <ProfileInfoForm userId={current_visited_user.userId} fullName={current_visited_user.fullName} contacts={current_visited_user.contacts} lookingForAJob={current_visited_user.lookingForAJob} lookingForAJobDescription={current_visited_user.lookingForAJobDescription} submitProfileInfoChange={submitProfileInfoChange} error={error} aboutMe={current_visited_user.aboutMe}/>
		: <ProfileInfo fullName={current_visited_user.fullName} is_looking={is_looking} avatar={avatar} ownProfile={ownProfile} onPhotoUpload={onPhotoUpload} status={status} updateStatus={updateStatus} contacts={contacts} setEditMode={setEditMode} lookingForAJobDescription={current_visited_user.lookingForAJobDescription} aboutMe={current_visited_user.aboutMe} />
	);

}

export default ProfileInfoContainer;

//I am develloping web appliactions with ReactJS using Redux as state management tool.
//I'm switching to programming from being an industrial climber.