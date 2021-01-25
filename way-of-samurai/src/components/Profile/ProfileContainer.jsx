import React, { Component } from 'react';
import Profile from './Profile';
import {getUserData} from '../../redux/thunkCreators';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends Component {
	componentDidMount() {
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
		return(
			<Profile {...this.prors} profileInfo={this.props.current_user} />
		);
	}
}



const mapStateToProps = (state) => {
	return (
		{
			current_user: state.profile.current_user,
		}
	)
}



export default connect(mapStateToProps,{getUserData})(withRouter(ProfileContainer));
