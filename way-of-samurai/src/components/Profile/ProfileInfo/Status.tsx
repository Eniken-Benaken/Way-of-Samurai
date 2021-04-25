import s from './ProfileInfo.module.css';
import React, { ChangeEvent, FC, useEffect, useState } from 'react';

type PropsType = {
	statusText: string | null,
	ownProfile: boolean,
	updateStatus: (status: string | null) => void
	statusUpdateError: string
}

const Status: FC<PropsType> = ({ statusText, ownProfile, updateStatus, statusUpdateError }) => {
	let [status, setStatus] = useState(statusText)
	const [editMode, setEditMode] = useState(false)
	const [error,setError] = useState(statusUpdateError)

	if ((status === '' || status === null) && ownProfile) {
		setStatus('Double-click here to add status');
	}

	useEffect(() => {
		setStatus(statusText)
	}, [statusText]);

	const toggleEditMode = () => {
		setEditMode(!editMode);
	}

	const handleStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
		setStatus(e.target.value)
	}

	const updateUserStatus = () => {
		toggleEditMode()
		updateStatus(status);
	}

	let userStatus;

	if (ownProfile) {
		userStatus = !editMode
			? 
			<div key="status" data-testid='ownStatusText' onDoubleClick={toggleEditMode} className={s.status}>{statusText}</div> 
			: 
			<div>
				<input data-testid='statusChangeInput' type="text" autoFocus={true} onChange={handleStatusChange} value={!status? "": status} />
				<button data-testid="saveStatusButton" onClick={updateUserStatus}>Save Changes</button>
			</div>
	}
	else {
		userStatus = <div key="status" data-testid='statusText'>{status}</div>;
	}
	return userStatus;
}

export default Status;