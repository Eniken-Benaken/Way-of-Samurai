import React, { Component } from 'react';
import Profile from './Profile';
import {getUserData} from '../../redux/thunkCreators';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import withAuthRedirect from '../common/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends Component {
	componentDidMount() {
		debugger
		let userId = (this.props.match.params.userId);
		if(!userId) {
			userId = 2;
		}
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
		}
	)
}

export default compose (
	connect(mapStateToProps,{getUserData}),
	withRouter,
	withAuthRedirect
)(ProfileContainer);