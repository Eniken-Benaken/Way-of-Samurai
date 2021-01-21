import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { followUser, setCurrentUsersPage, toggleIsFetching, setUsers, unfollowUser } from '../../redux/actionCreators';
import Users from './Users';
import Preloader from '../common/Preloader';


class UsersContainer extends Component {
	componentDidMount() {
		this.props.toggleIsFetching(true);
		if (this.props) {
			axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.activePage}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.toggleIsFetching(false);
				this.props.setUsers(response.data.items)
			});
		}
	}

	onPageChange = (pageNumber) => {
		this.props.setCurrentUsersPage(pageNumber);
		this.props.toggleIsFetching(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.toggleIsFetching(false);
				this.props.setUsers(response.data.items)
			});
	}

	render() {
		let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
		let pages = [];
		for (let i = 1; i <= pagesCount; i++) {
			pages.push(i);
		}

		const users = [...this.props.users];

		return (
			<>
				{this.props.is_fetching && <Preloader />}
				<Users users={users} pagesNumbers={pages} activePage={this.props.activePage} followUser={this.props.followUser} unfollowUser={this.props.unfollowUser} setActivePage={this.onPageChange} />
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
		is_fetching: state.users.is_fetching
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
		},
		toggleIsFetching: (is_fetching) => {
			const action = toggleIsFetching(is_fetching);
			dispatch(action);
		}
	})
}



export default connect(mapStateToProps, { //JS looks for equal named imports(varibles)
	followUser, //same as followUser: followUser
	unfollowUser, //React-redux at the same time takes these ACs
	setUsers, //and wraps it with dispatches inside CBs
	setCurrentUsersPage,
	toggleIsFetching
})(UsersContainer);
