import React, { Component } from 'react';
import Profile from './Profile';
import {getUserData,updateStatus} from '../../redux/thunkCreators';
import { setCurrentRoute } from '../../redux/actionCreators';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import withAuthRedirect from '../common/withAuthRedirect';
import { compose } from 'redux';
import { getCurrentVisitedUserId, getIsFetchingProfileData,getCurrentVisitedUserstatus, getCurrentUserId } from '../../redux/selectors';

class ProfileContainer extends Component {
	componentDidMount() {
		let {userId} = this.props.match.params;
		if(!userId) userId = this.props.user_id;
		this.props.getUserData(userId);
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
		}
	)
}

export default compose (
	connect(mapStateToProps,{getUserData,updateStatus,setCurrentRoute}),
	withRouter,
	withAuthRedirect
)(ProfileContainer);