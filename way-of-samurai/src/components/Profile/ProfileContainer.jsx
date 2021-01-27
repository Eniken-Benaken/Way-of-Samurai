import React, { Component } from 'react';
import Profile from './Profile';
import {getUserData,updateStatus} from '../../redux/thunkCreators';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import withAuthRedirect from '../common/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends Component {
	componentDidMount() {
		let userId = (this.props.match.params.userId);
		this.props.getUserData(userId);
			// profileAPI.getUserData(userId)
			// .then(data => {
			// 	this.props.setUserProfile(data)
			// });
	}

	render() {
		return <Profile {...this.props} />
	}
}


const mapStateToProps = (state) => {
	return (
		{
			current_user: state.profile.current_user,
			is_fetching: state.profile.is_fetching,
			status: state.profile.status
		}
	)
}

export default compose (
	connect(mapStateToProps,{getUserData,updateStatus}),
	withRouter,
)(ProfileContainer);