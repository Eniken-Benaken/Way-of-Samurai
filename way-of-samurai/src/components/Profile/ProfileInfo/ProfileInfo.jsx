import React, { useEffect, useState } from 'react';
import Preloader from '../../common/Preloader';
import s from './ProfileInfo.module.css';
import avatarPlaceholder from '../../../assets/images/avatar.png';

const ProfileInfo = (props) => {
	let statusText = props.status;

	const [state, setState] = useState({
		editMode: false,
		status: statusText
	})

	useEffect(() => {
		setState(
			{
				...state,
				status: props.status
			}
		)
	}, [props.status]);

	if (!props.current_user) return <Preloader />
	let ownProfile = props.current_user.userId === 14327;
	if (statusText === '' && ownProfile) {
		statusText = 'Double-click here to add status';
	}
	const toggleEditMode = () => {
		setState({
			...state,
			editMode: !state.editMode
		})
	}

	const handleStatusChange = (e) => {
		setState({
			...state,
			status: e.target.value
		})
	}

	const updateStatus = () => {
		toggleEditMode()
		props.updateStatus(state.status);
	}
	if (!props.current_user) {
		return (<Preloader />)
	}


	let is_looking = props.current_user.lookingForAJob
		? <span className={s.looking_for_job}>🤑</span>
		: <span className={s.looking_for_job}>🤠</span>;

	let contacts = [];
	for (let contact in props.current_user.contacts) {
		if (props.current_user.contacts[contact]) {
			contacts.push(
				<div key={contact} className={s.contact}>{`${contact}: ${props.current_user.contacts[contact]}`}</div>
			)
		}
		else { contacts.push(<div key={contact} className={s.contact}>{`${contact}: --`}</div>) }
	}

	let avatar = props.current_user.photos.large
		? <img src={props.current_user.photos.large} alt="avatar" />
		: <img src={avatarPlaceholder} alt="avatar" />

	let status = !state.editMode
		? <span key="status" onDoubleClick={toggleEditMode}>{statusText}</span> : <input type="text" autoFocus={true} onChange={handleStatusChange} onBlur={updateStatus} value={state.status} />;

	if (ownProfile) {
		status = !state.editMode
			? <span key="status" onDoubleClick={toggleEditMode}>{statusText}</span> : <input type="text" autoFocus={true} onChange={handleStatusChange} onBlur={updateStatus} value={state.status} />
	}
	else {
		status = <span key="status" onDoubleClick={toggleEditMode}>{statusText}</span>;
	}

	return (
		<div className={s.profileInfo_wrapper}>
			<div className={s.banner}>
				<img src="https://source.unsplash.com/1000x200/?city" alt="newyear" />
			</div>
			<div className={s.person_info}>
				<div className={s.avatar_block}>
					<div className={s.user_name}>{props.current_user.fullName} {is_looking}</div>
					{avatar}
					<button>Change Profile Photo</button>
				</div>
				<div className={s.description_block}>
					<h3 className={s.description_header}>About me</h3>
					<div className={s.description_content}>{status}</div>
					<h3 className={s.description_header}>Contacts:</h3>
					{contacts}
				</div>
			</div>
		</div>
	);

}


export default ProfileInfo;
