import React from 'react';
import { connect } from 'react-redux';
import { followUser, setUsers, unfollowUser } from '../../redux/actionCreators';
import Users from './Users';





const mapStateToProps = (state) => {
	console.log('mapStateToProps');
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
		},
		setUsers: (users) => {
			console.log('setUsersDispatch');
			const action = setUsers(users);
			dispatch(action);
		}
	})
}

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users);

export default UsersContainer;
