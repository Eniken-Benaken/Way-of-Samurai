import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers, followUser, unfollowUser } from '../../redux/thunkCreators'; 
import Users from './Users';
import Preloader from '../common/Preloader';
import { compose } from 'redux';


class UsersContainer extends Component {
	componentDidMount() {
		this.props.getUsers(this.props.activePage,this.props.pageSize);
	}

	onPageChange = (pageNumber) => {
		this.props.getUsers(pageNumber,this.props.pageSize);
	}

	render() {
		
		const users = [...this.props.users];

		const follow = (userId) => {
			this.props.followUser(userId);
		}

		const unfollow = (userId) => {
			this.props.unfollowUser(userId);
		}

		return (
			<>
				{this.props.is_fetching && <Preloader />}
				<Users users={users} pageSize={this.props.pageSize} totalUsersCount={this.props.totalUsersCount} activePage={this.props.activePage} followUser={follow} unfollowUser={unfollow} setActivePage={this.onPageChange} portionSize={this.props.portionSize} is_following={this.props.is_following} />
			</>
		)
	}
}



const mapStateToProps = (state) => {
	return ({
		users: [...state.users.users],
		pageSize: state.users.pageSize,
		totalUsersCount: state.users.totalUsersCount,
		activePage: state.users.activePage,
		is_fetching: state.users.is_fetching,
		is_following: state.users.is_following,
		portionSize: state.users.portionSize
	});
};

export default compose (
	connect(mapStateToProps, { //JS looks for equal named imports(varibles)
		followUser, //same as followUser: followUser
		unfollowUser, //React-redux at the same time takes these ACs
		getUsers,//and wraps it with dispatches inside CBs
	})
)(UsersContainer);
