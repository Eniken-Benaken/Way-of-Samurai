import React, { Component } from 'react';
import Profile from './Profile';
import { getUserData, updateStatus, savePhoto, currentVisitedUserType, toggleIsPhotoUploaded } from '../../redux/reducers/profile_reducer'
import { getAuthData } from '../../redux/reducers/auth_reducer';
import { setCurrentRoute } from '../../redux/reducers/app_reducer';
import { connect } from 'react-redux';
import withAuthRedirect from '../common/withAuthRedirect';
import { compose } from 'redux';
import { getIsFetchingProfileData, getCurrentVisitedUserstatus, getCurrentUserId, getCurrentRoute, getIsAuth, getIsPhotoUploaded, getCurrentVisitedUserData } from '../../redux/selectors';
import * as _ from 'lodash'

import facebookIcon from '../../assets/images/008-facebook.svg';
import websiteIcon from '../../assets/images/006-web-page.svg';
import vkIcon from '../../assets/images/005-vk.svg';
import twitterIcon from '../../assets/images/003-twitter.svg';
import instagramIcon from '../../assets/images/001-instagram.svg';
import youtubeIcon from '../../assets/images/002-youtube.svg';
import githubIcon from '../../assets/images/007-github-logo.svg';
import mainLinkIcon from '../../assets/images/004-network.svg';
import { Redirect } from 'react-router-dom';
import { AppStateType } from '../../redux/redux_store';



type mapStateToPropsType = {
	current_visited_user: currentVisitedUserType | null,
	is_fetching: boolean,
	status: null | string,
	user_id: number | null,
	current_route: string,
	is_auth: boolean,
	photoUploaded: boolean
}

type mapDispatchToPropsType = {
	getUserData: (userId: number | null, isFetching: boolean) => void,
	updateStatus: (status: string | null) => void,
	savePhoto: (photo: any, userId: number | null) => void,
	getAuthData: () => void,
	setCurrentRoute: (route: string) => void
	toggleIsPhotoUploaded: (photoUploaded: boolean) => void
}

type PropsTypes = mapStateToPropsType & mapDispatchToPropsType & { match: any };



class ProfileContainer extends Component<PropsTypes> {
	ownProfile: boolean = true; //JUST FOR IT WOULD WORK
	urlChanged: boolean = false;
	photoChanged: boolean = false;
	statusChanged: boolean = false;
	userInfoChanged: boolean = false;
	authChanged: boolean = false;

	icons = {
		facebookIcon,
		websiteIcon,
		vkIcon,
		twitterIcon,
		instagramIcon,
		youtubeIcon,
		githubIcon,
		mainLinkIcon
	}
	componentDidMount() {
		this.initProfile();
	}

	shouldComponentUpdate(nextProps: PropsTypes) {
		this.urlChanged = nextProps.match.params.userId !== this.props.match.params.userId
		if (this.urlChanged) console.log('url changed- rerender', new Date().getSeconds());
		this.photoChanged = nextProps.photoUploaded !== this.props.photoUploaded;
		if (this.photoChanged) console.log(`photo changed - rerender`, new Date().getSeconds());
		this.statusChanged = nextProps.status !== this.props.status;
		if (this.statusChanged) console.log('status changed- rerender', new Date().getSeconds());
		this.userInfoChanged = !(_.isEqual(nextProps.current_visited_user, this.props.current_visited_user));
		if(this.userInfoChanged) console.log('userInfo changed', new Date().getSeconds());
		this.authChanged = nextProps.is_auth !== this.props.is_auth;
		if (this.authChanged) console.log('auth changed- rerender', new Date().getSeconds());
		let somethingChanged = this.urlChanged || this.statusChanged || this.userInfoChanged || this.authChanged || this.photoChanged || this.props.is_fetching !== nextProps.is_fetching;
		return somethingChanged
	}

	componentDidUpdate() {
		if(this.urlChanged || this.authChanged || this.userInfoChanged || this.photoChanged)	{
			this.initProfile()
			if(this.urlChanged) this.urlChanged = !this.urlChanged;
			if(this.authChanged) this.authChanged = !this.authChanged;
			if(this.userInfoChanged) this.userInfoChanged = !this.userInfoChanged;
			if(this.photoChanged) {
				this.photoChanged = !this.photoChanged
				this.props.toggleIsPhotoUploaded(false);
			};
		}
	}

	initProfile() {
		let { userId } = this.props.match.params;
		if (!userId) {
			if (this.props.current_route !== `/profile`) this.props.setCurrentRoute(`/profile`)
			console.log("ProfileContainer calls - getUserData", new Date().getSeconds());
			this.props.getUserData(this.props.user_id,this.props.is_fetching);
			this.ownProfile = true;
		}
		else {
			this.ownProfile = false;
			if (this.props.current_route !== `/profile/${userId}`) this.props.setCurrentRoute(`/profile/${userId}`)
			else return
			this.props.getUserData(userId,this.props.is_fetching);
		}
	}

	render() {
		if (this.ownProfile && !this.props.is_auth) return <Redirect to="/login" />
		return <Profile {...this.props} ownProfile={this.ownProfile} icons={this.icons} />
	}
}



const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
	return (
		{
			current_visited_user: getCurrentVisitedUserData(state),
			is_fetching: getIsFetchingProfileData(state),
			status: getCurrentVisitedUserstatus(state),
			user_id: getCurrentUserId(state),
			current_route: getCurrentRoute(state),
			is_auth: getIsAuth(state),
			photoUploaded: getIsPhotoUploaded(state)
		}
	)
}

export default compose(
	withAuthRedirect,
	connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps, { getUserData, updateStatus, setCurrentRoute, savePhoto, getAuthData, toggleIsPhotoUploaded }),
)(ProfileContainer);