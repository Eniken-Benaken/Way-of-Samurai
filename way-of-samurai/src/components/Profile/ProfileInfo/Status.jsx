import s from './ProfileInfo.module.css';
import React, { useEffect, useState } from 'react';

const Status = ({ statusText, ownProfile, updateStatus, serverErrorMessage }) => {
	const [status, setStatus] = useState(statusText)
	const [editMode, setEditMode] = useState(false)
	const [error,setError] = useState(serverErrorMessage)

	if (status === '' && ownProfile) {
		setStatus('Double-click here to add status');
	}

	useEffect(() => {
		setStatus(statusText)
	}, [statusText]);

	const toggleEditMode = () => {
		setEditMode(!editMode);
	}

	const handleStatusChange = (e) => {
		setStatus(e.target.value)
	}

	const updateUserStatus = () => {
		toggleEditMode()
		updateStatus(status);
	}

	let userStatus;

	if (ownProfile) {
		userStatus = !editMode
			? <div key="status" data-testid='ownStatusText' onDoubleClick={toggleEditMode} className={s.status}>{statusText}</div> : <div><input data-testid='statusChangeInput' type="text" autoFocus={true} onChange={handleStatusChange} value={status} /><button data-testid="saveStatusButton" onClick={updateUserStatus}>Save Changes</button></div>
	}
	else {
		userStatus = <div key="status" data-testid='statusText'>{status}</div>;
	}
	return userStatus;
}

export default Status;