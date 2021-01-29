import React, { Component } from 'react';
import Profile from './Profile';
import {getUserData,updateStatus} from '../../redux/thunkCreators';
import { setCurrentRoute } from '../../redux/actionCreators';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import withAuthRedirect from '../common/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends Component {
	componentDidMount() {
		let userId = this.props.user_id;
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
			status: state.profile.status,
			user_id: state.auth.id,
			is_auth: state.auth.is_auth
		}
	)
}

export default compose (
	connect(mapStateToProps,{getUserData,updateStatus,setCurrentRoute}),
	withRouter,
	withAuthRedirect
)(ProfileContainer);