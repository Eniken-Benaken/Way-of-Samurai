import React from 'react';
import s from './Profile.module.css';
import MyPostsContainer from './Posts/MyPostsContainer';
import ProfileInfoContainer from './ProfileInfo/ProfileInfoContainer';
import { currentVisitedUserType } from '../../redux/reducers/profile_reducer';


type PropsTypes = {
	current_visited_user: currentVisitedUserType | null,
	is_fetching: boolean,
	status: null | string,
	user_id: number | null,
	current_route: string,
	is_auth: boolean
	getUserData: (userId: number | null) => void,
	updateStatus: (status: string | null) => void,
	savePhoto: (photo: any, userId: number | null) => void,
	getAuthData: () => void,
	setCurrentRoute: (route: string) => void
	ownProfile: boolean
	icons: any
}


const Profile: React.FC<PropsTypes> = (props) => {

	if(!props.ownProfile) return (<main className={s.profile_wrapper}>
		<ProfileInfoContainer {...props} />
	</main>)
	else return(
		<main className={s.profile_wrapper}>
			<ProfileInfoContainer {...props} />
			<MyPostsContainer />
		</main>
	);
}


export default Profile;