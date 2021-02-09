import React, { Component } from 'react';
import Profile from './Profile';
import { getUserData, updateStatus, savePhoto, getAuthData } from '../../redux/thunkCreators';
import { setCurrentRoute } from '../../redux/actionCreators';
import { connect } from 'react-redux';
import withAuthRedirect from '../common/withAuthRedirect';
import { compose } from 'redux';
import { getCurrentVisitedUserId, getIsFetchingProfileData, getCurrentVisitedUserstatus, getCurrentUserId, getCurrentRoute, getIsAuth } from '../../redux/selectors';

import facebookIcon from '../../assets/images/008-facebook.svg';
import websiteIcon from '../../assets/images/006-web-page.svg';
import vkIcon from '../../assets/images/005-vk.svg';
import twitterIcon from '../../assets/images/003-twitter.svg';
import instagramIcon from '../../assets/images/001-instagram.svg';
import youtubeIcon from '../../assets/images/002-youtube.svg';
import githubIcon from '../../assets/images/007-github-logo.svg';
import mainLinkIcon from '../../assets/images/004-network.svg';
import Preloader from '../common/Preloader';
import { Redirect } from 'react-router-dom';

class ProfileContainer extends Component {
	ownProfile;
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

	shouldComponentUpdate(nextProps,nextState) {
		return nextProps.match.params.userId !== this.props.match.params.userId || nextProps.status !== this.props.status || nextProps.user_id !== this.props.user_id || nextProps.current_visited_user !== this.props.current_visited_user || nextProps.is_auth !== this.props.is_auth
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
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
		if(this.ownProfile && !this.props.is_auth) return <Redirect to="/login" />
		return <Profile {...this.props} ownProfile={this.ownProfile} icons={this.icons} />
	}
}


const mapStateToProps = (state) => {
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
	connect(mapStateToProps, { getUserData, updateStatus, setCurrentRoute, getCurrentRoute, savePhoto, getAuthData }),
)(ProfileContainer);