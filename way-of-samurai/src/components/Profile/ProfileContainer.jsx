import axios from 'axios';
import React, { Component } from 'react';
import Profile from './Profile';
import {setUserProfile} from '../../redux/actionCreators';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { profileAPI } from '../../api/API';

class ProfileContainer extends Component {
	componentDidMount() {
		let userId = (this.props.match.params.userId);
		if(!userId) {
			userId = 2;
		}
			profileAPI.getUserData()
			.then(data => {
				this.props.setUserProfile(data)
			});
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



export default connect(mapStateToProps,{setUserProfile})(withRouter(ProfileContainer));
