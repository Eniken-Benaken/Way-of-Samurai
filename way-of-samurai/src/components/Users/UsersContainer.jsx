import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { followUser, setCurrentUsersPage, setUsers, unfollowUser } from '../../redux/actionCreators';
import Users from './Users';



class UsersAPI extends Component {
	componentDidMount() {
		if(this.props) {axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.activePage}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.setUsers(response.data.items)
			});
		}
	}

	onPageChange = (pageNumber) => {
		this.props.setActivePage(pageNumber);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.setUsers(response.data.items)
			});
	}

	render() {
		let pagesCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize);
		let pages = [];
		for (let i = 1; i<=pagesCount; i++) {
			pages.push(i);
		}

		const users = [...this.props.users];

	  return	<Users users={users} pagesNumbers={pages} activePage={this.props.activePage} followUser={this.props.followUser} unfollowUser={this.props.unfollowUser} setActivePage={this.onPageChange} />
	}
}





const mapStateToProps = (state) => {
	return ({
		users: [...state.users.users],
		pageSize: state.users.pageSize,
		totalUsersCount: state.users.totalUsersCount,
		activePage: state.users.activePage
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
			const action = setUsers(users);
			dispatch(action);
		},
		setActivePage: (activePage) => {
			const action = setCurrentUsersPage(activePage);
			dispatch(action);
		}
	})
}

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(UsersAPI);

export default UsersContainer;
