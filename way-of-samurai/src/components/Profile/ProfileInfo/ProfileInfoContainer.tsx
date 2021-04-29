import React, { useState } from 'react';
import Preloader from '../../common/Preloader';
import s from './ProfileInfo.module.css';
import avatarPlaceholder from '../../../assets/images/avatar.png';
import ProfileInfoForm from './ProfileInfoForm';
import ProfileInfo from './ProfileInfo';
import { resultCodes } from '../../../api/API';
import { profileAPI } from "../../../api/profile-api";
import { currentVisitedUserType, userContactsType } from '../../../redux/reducers/profile_reducer';
// import { useDispatch } from 'react-redux';


type PropsTypes = {
	current_visited_user: currentVisitedUserType | null,
	is_fetching: boolean,
	status: null | string,
	user_id: number | null,
	current_route: string,
	is_auth: boolean
	updateStatus: (status: string | null) => void,
	savePhoto: (photo: any, userId: number | null) => void,
	setCurrentRoute: (route: string) => void
	ownProfile: boolean
	icons: any
}


const ProfileInfoContainer: React.FC<PropsTypes> = ({ current_visited_user, is_fetching, status, updateStatus, user_id, savePhoto, ownProfile, icons }) => {
	let [statusUpdateError,setStatusUpdateError] = useState(null as null | string)
	let [editMode,setEditMode] = useState(false);
	let [error,setError] = useState("");
	// const dispatch = useDispatch();

	if (is_fetching) return <Preloader />
	if (!current_visited_user) return <Preloader />

	let is_looking = current_visited_user.lookingForAJob
		? <span className={s.looking_for_job}>🤑</span>
		: <span className={s.looking_for_job}>🤠</span>;

	let contacts = [];
	for (let contact in current_visited_user.contacts as userContactsType) {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment 
		// @ts-ignore
		if (current_visited_user.contacts[contact] as any) {
			
			contacts.push(
						// eslint-disable-next-line @typescript-eslint/ban-ts-comment 
		// @ts-ignore
				<a key={contact} className={s.contact} href={current_visited_user.contacts[contact] as any}><img className={s.contact_icon} src={icons[`${contact}Icon`]} alt={contact} title={contact} /></a>
			)
		}
	}

	let avatar = current_visited_user.photos.large
		? <img src={current_visited_user.photos.large} alt="avatar" />
		: <img src={avatarPlaceholder} alt="avatar" />

	
	const onPhotoUpload = async (e: any) => {
		if (e.target.files.length) {
			savePhoto(e.target.files[0],user_id);
		}
		else {
			console.log('No file loaded');
		}
	}

	const submitProfileInfoChange = async (changed_info: any) => {
		const response = await profileAPI.setProfileInfo(changed_info);
		console.log(response);
		if(response.data.resultCode === resultCodes.Success) {
			// dispatch(setUserInfo(changed_info))
			setEditMode(false);
		}
		else {
			response.data.messages.length && setError(response.data.messages[0]);
		}
	}


	return (
		editMode 
		? <ProfileInfoForm userId={current_visited_user.userId} fullName={current_visited_user.fullName} contacts={current_visited_user.contacts} lookingForAJob={current_visited_user.lookingForAJob} lookingForAJobDescription={current_visited_user.lookingForAJobDescription} submitProfileInfoChange={submitProfileInfoChange} error={error} aboutMe={current_visited_user.aboutMe}/>
		: <ProfileInfo fullName={current_visited_user.fullName} is_looking={is_looking} avatar={avatar} ownProfile={ownProfile} onPhotoUpload={onPhotoUpload} status={status} updateStatus={updateStatus} contacts={contacts} setEditMode={setEditMode} lookingForAJobDescription={current_visited_user.lookingForAJobDescription} aboutMe=
		{current_visited_user.aboutMe} 
		statusUpdateError={statusUpdateError} />
	);

}

export default ProfileInfoContainer;

//I am develloping web appliactions with ReactJS using Redux as state management tool.
//I'm switching to programming from being an industrial climber.