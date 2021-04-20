import React, { Component } from 'react';
import Profile from './Profile';
import { getUserData, updateStatus, savePhoto, currentVisitedUserType } from '../../redux/reducers/profile_reducer'
import { getAuthData } from '../../redux/reducers/auth_reducer';
import { setCurrentRoute } from '../../redux/reducers/app_reducer';
import { connect } from 'react-redux';
import withAuthRedirect from '../common/withAuthRedirect';
import { compose } from 'redux';
import { getCurrentVisitedUserId, getIsFetchingProfileData, getCurrentVisitedUserstatus, getCurrentUserId, getCurrentRoute, getIsAuth } from '../../redux/selectors';
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
	is_auth: boolean
}

type mapDispatchToPropsType = {
	getUserData: (userId: number | null) => void,
	updateStatus: (status: string | null) => void,
	savePhoto: (photo: any, userId: number | null) => void,
	getAuthData: () => void,
	setCurrentRoute: (route: string) => void
}

type PropsTypes = mapStateToPropsType & mapDispatchToPropsType & {match: any};



class ProfileContainer extends Component<PropsTypes> {
	ownProfile: boolean = true; //JUST FOR IT WOULD WORK
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
		let urlChanged = nextProps.match.params.userId !== this.props.match.params.userId
		let statusChanged = nextProps.status !== this.props.status;
		let userIdChanged = nextProps.user_id !== this.props.user_id;
		let userInfoChanged = !(_.isEqual(nextProps.current_visited_user,this.props.current_visited_user));
		let authStateChanged = nextProps.is_auth !== this.props.is_auth;
		let somethingChanged = urlChanged || statusChanged || userIdChanged || userInfoChanged || authStateChanged;
		return  somethingChanged
	}

	componentDidUpdate(prevProps: PropsTypes) {
		this.initProfile()
	}

	initProfile() { 
		let { userId } = this.props.match.params;
		if (!userId) {
			if (this.props.current_route !== `/profile`) this.props.setCurrentRoute(`/profile`)
			if(!this.ownProfile)this.props.getUserData(this.props.user_id);
			this.ownProfile = true;
		}
		else {
			this.ownProfile = false;
			if (this.props.current_route !== `/profile/${userId}`) this.props.setCurrentRoute(`/profile/${userId}`)
			else return
			this.props.getUserData(userId);
		}
	}

	
	render() {
		debugger
		if(this.ownProfile && !this.props.is_auth) return <Redirect to="/login" />
		return <Profile {...this.props} ownProfile={this.ownProfile} icons={this.icons} />
	}
}



const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
	return (
		{
			current_visited_user: getCurrentVisitedUserId(state),
			is_fetching: getIsFetchingProfileData(state),
			status: getCurrentVisitedUserstatus(state),
			user_id: getCurrentUserId(state),
			current_route: getCurrentRoute(state),
			is_auth: getIsAuth(state)
		}
	)
}

export default compose(
	withAuthRedirect,
	connect<mapStateToPropsType,mapDispatchToPropsType,{},AppStateType>(mapStateToProps, { getUserData, updateStatus, setCurrentRoute, savePhoto, getAuthData }),
)(ProfileContainer);