import axios from 'axios';
import React, { Component } from 'react';
import Profile from './Profile';
import {setUserProfile} from '../../redux/actionCreators';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends Component {
	componentDidMount() {
		debugger
		let userId = (this.props.match.params.userId);
		if(!userId) {
			userId = 2;
		}
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
			.then(response => {
				this.props.setUserProfile(response.data)
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
