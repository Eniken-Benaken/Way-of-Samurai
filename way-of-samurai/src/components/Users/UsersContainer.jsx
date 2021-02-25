import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers, followUser, unfollowUser } from '../../redux/thunkCreators'; 
import Users from './Users';
import Preloader from '../common/Preloader';
import { compose } from 'redux';


class UsersContainer extends Component {
	componentDidMount() {
		this.props.getUsers(this.props.active_page,this.props.page_size);
	}

	onPageChange = (pageNumber) => {
		this.props.getUsers(pageNumber,this.props.page_size);
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
				<Users users={users} page_size={this.props.page_size} total_users_count={this.props.total_users_count} active_page={this.props.active_page} followUser={follow} unfollowUser={unfollow} setactive_page={this.onPageChange} portion_size={this.props.portion_size} is_following={this.props.is_following} />
			</>
		)
	}
}



const mapStateToProps = (state) => {
	const {users,page_size,total_users_count,active_page,is_fetching,is_following,portion_size} = state.users;
	return ({
		users: [...users],
		page_size,
		total_users_count,
		active_page,
		is_fetching,
		is_following: [...is_following],
		portion_size
	});
};

export default compose (
	connect(mapStateToProps, { //JS looks for equal named imports(varibles)
		followUser, //same as followUser: followUser
		unfollowUser, //React-redux at the same time takes these ACs
		getUsers,//and wraps it with dispatches inside CBs
	})
)(UsersContainer);
