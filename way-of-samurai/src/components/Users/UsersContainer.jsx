import React from 'react';
import { connect } from 'react-redux';
import { followUser, unfollowUser } from '../../redux/actionCreators';
import Users from './Users';

const mapStateToProps = (state) => {
	return ({
		users: [...state.users.users]
	});
};

const mapDispatchToProps = (dispatch) => {
	return ({
		followUser: (user_id) => {
			const action = followUser(user_id);
			dispatch(action);
		},
		unfollowUser: (user_id) => {
			const action = unfollowUser(user_id);
			dispatch(action);
		}
	})
}

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users);

export default UsersContainer;
