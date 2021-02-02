import React, { useEffect, useState } from 'react';
import Preloader from '../../common/Preloader';
import s from './ProfileInfo.module.css';
import avatarPlaceholder from '../../../assets/images/avatar.png';

const ProfileInfo = ({ current_visited_user, isFetching, status, updateStatus, user_id }) => {
	let statusText = status;
	const [state, setState] = useState({
		editMode: false,
		status: statusText
	})

	useEffect(() => {
		setState(
			{
				...state,
				status: status
			}
		)
	}, [status]);


	if (isFetching) return <Preloader />
	if (!current_visited_user) return <Preloader />
	let ownProfile = current_visited_user.userId === user_id;
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

	const updateUserStatus = () => {
		toggleEditMode()
		updateStatus(state.status);
	}

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

	let userStatus = !state.editMode
		? <span key="status" onDoubleClick={toggleEditMode}>{statusText}</span> : <input type="text" autoFocus={true} onChange={handleStatusChange} onBlur={updateUserStatus} value={state.status} />;

	if (ownProfile) {
		userStatus = !state.editMode
			? <span key="status" onDoubleClick={toggleEditMode}>{statusText}</span> : <input type="text" autoFocus={true} onChange={handleStatusChange} onBlur={updateUserStatus} value={state.status} />
	}
	else {
		userStatus = <span key="status" onDoubleClick={toggleEditMode}>{statusText}</span>;
	}

	return (
		<div className={s.profileInfo_wrapper}>
			<div className={s.banner}>
				<img src="https://source.unsplash.com/1000x200/?city" alt="newyear" />
			</div>
			<div className={s.person_info}>
				<div className={s.avatar_block}>
					<div className={s.user_name}>{current_visited_user.fullName} {is_looking}</div>
					{avatar}
					<button>Change Profile Photo</button>
				</div>
				<div className={s.description_block}>
					<h3 className={s.description_header}>About me</h3>
					<div className={s.description_content}>{userStatus}</div>
					<h3 className={s.description_header}>Contacts:</h3>
					{contacts}
				</div>
			</div>
		</div>
	);

}


export default ProfileInfo;
