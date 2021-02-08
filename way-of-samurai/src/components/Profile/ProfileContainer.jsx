import React, { Component } from 'react';
import Profile from './Profile';
import { getUserData, updateStatus, savePhoto, getAuthData } from '../../redux/thunkCreators';
import { setCurrentRoute } from '../../redux/actionCreators';
import { connect } from 'react-redux';
import withAuthRedirect from '../common/withAuthRedirect';
import { compose } from 'redux';
import { getCurrentVisitedUserId, getIsFetchingProfileData, getCurrentVisitedUserstatus, getCurrentUserId, getCurrentRoute } from '../../redux/selectors';
import Preloader from '../common/Preloader';

class ProfileContainer extends Component {
	componentDidMount() {
		this.initProfile();
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		const userIds_are_not_equal = prevProps.match.params.userId !== this.props.match.params.userId;
		// const current_user_photo_changed = prevProps.current_visited_user.photos.large !== this.props.current_visited_user.photos.large;
		const current_user_status_changed = prevProps.status !== this.props.status;
		const somethingChanged = userIds_are_not_equal || /*current_user_photo_changed ||*/ current_user_status_changed;
		somethingChanged && this.initProfile()
	}

	initProfile() {
		let { userId } = this.props.match.params;
		if (!userId) {
			if (this.props.current_route !== `/profile`) this.props.setCurrentRoute(`/profile`)
			this.props.getUserData(this.props.user_id);
		}
		else {
			if (this.props.current_route !== `/profile/${userId}`) this.props.setCurrentRoute(`/profile/${userId}`)
			this.props.getUserData(userId);
		}
	}

	render() {
		return <Profile {...this.props} />
	}
}


const mapStateToProps = (state) => {
	return (
		{
			current_visited_user: getCurrentVisitedUserId(state),
			is_fetching: getIsFetchingProfileData(state),
			status: getCurrentVisitedUserstatus(state),
			user_id: getCurrentUserId(state),
			current_route: getCurrentRoute(state)
		}
	)
}

export default compose(
	connect(mapStateToProps, { getUserData, updateStatus, setCurrentRoute, getCurrentRoute, savePhoto, getAuthData }),
	withAuthRedirect
)(ProfileContainer);