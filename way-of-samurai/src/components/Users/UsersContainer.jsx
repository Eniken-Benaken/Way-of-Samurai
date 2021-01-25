import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers, followUser, unfollowUser } from '../../redux/thunkCreators'; 
import Users from './Users';
import Preloader from '../common/Preloader';


class UsersContainer extends Component {
	componentDidMount() {
		this.props.getUsers(this.props.activePage,this.props.pageSize);
		// this.props.toggleIsFetching(true);
		// if (this.props) {
		// 	usersAPI.getUsers(this.props.activePage, this.props.pageSize)
		// 		.then(data => {
		// 			if (!data.error) {
		// 				this.props.toggleIsFetching(false);
		// 				this.props.setUsers(data.items)
		// 			}
		// 		});
		// }
	}

	onPageChange = (pageNumber) => {
		this.props.getUsers(pageNumber,this.props.pageSize);
		// this.props.setCurrentUsersPage(pageNumber);
		// this.props.toggleIsFetching(true);
		// usersAPI.getUsers(pageNumber, this.props.pageSize)
		// 	.then(data => {
		// 		if (!data.error) {
		// 			this.props.toggleIsFetching(false);
		// 			this.props.setUsers(data.items)
		// 		}
		// 	});
	}

	render() {
		let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
		let pages = [];
		for (let i = 1; i <= pagesCount; i++) {
			pages.push(i);
		}

		const users = [...this.props.users];

		const follow = (userId) => {
			this.props.followUser(userId);
			

			// this.props.toggleFollowing(userId,true);
			// usersAPI.followUser(userId)
			// 	.then(response => {
			// 		if (response.data.resultCode === 0) {
			// 			this.props.toggleFollowing(userId,false);
			// 			this.props.followUser(userId);
			// 		}
			// 	})
		}

		const unfollow = (userId) => {
			this.props.unfollowUser(userId);
			// this.props.toggleFollowing(userId,true);
			// usersAPI.unfollowUser(userId)
			// 	.then(response => {
			// 		if (response.data.resultCode === 0) {
			// 			this.props.toggleFollowing(userId,false);
			// 			this.props.unfollowUser(userId);
			// 		}
			// 	})
		}

		return (
			<>
				{this.props.is_fetching && <Preloader />}
				<Users users={users} pagesNumbers={pages} activePage={this.props.activePage} followUser={follow} unfollowUser={unfollow} setActivePage={this.onPageChange} is_following={this.props.is_following} />
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
		is_following: state.users.is_following
	});
};

export default connect(mapStateToProps, { //JS looks for equal named imports(varibles)
	followUser, //same as followUser: followUser
	unfollowUser, //React-redux at the same time takes these ACs
	getUsers//and wraps it with dispatches inside CBs
})(UsersContainer);
