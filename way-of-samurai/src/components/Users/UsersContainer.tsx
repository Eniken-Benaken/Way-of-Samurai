import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers, followUser, unfollowUser } from '../../redux/reducers/users_reducer'; 
import Users from './Users';
import Preloader from '../common/Preloader';
import { compose } from 'redux';
import { userType } from '../../redux/reducers/users_reducer';
import { AppStateType } from '../../redux/redux_store';

type MapStatePropsType = {
	active_page: number,
	page_size: number,
	users: Array<userType>,
	is_fetching: boolean,
	total_users_count: number,
	portion_size: number
	is_following: Array<number>
}

type MapDispatchPropsType = {
	getUsers: (active_page: number, page_size: number) => void,
	followUser: (userId: number) => void,
	unfollowUser: (userId: number) => void,
}

// type OwnPropsType = { //THat is needed for connet typization
// 	haha: string
// }

type PropsType = MapStatePropsType & MapDispatchPropsType;

class UsersContainer extends Component<PropsType> {
	componentDidMount() {
		this.props.getUsers(this.props.active_page,this.props.page_size);
	}

	onPageChange = (pageNumber: number) => {
		this.props.getUsers(pageNumber,this.props.page_size);
	}

	render() {		
		const users = [...this.props.users];
		const follow = (userId: number) => {
			this.props.followUser(userId);
		}
		const unfollow = (userId: number) => {
			this.props.unfollowUser(userId);
		}

		return (
			<>
				{this.props.is_fetching && <Preloader />}
				<Users users={users} page_size={this.props.page_size} total_users_count={this.props.total_users_count} active_page={this.props.active_page} followUser={follow} unfollowUser={unfollow} set_active_page={this.onPageChange} portion_size={this.props.portion_size} is_following={this.props.is_following} />
			</>
		)
	}
}

function mapStateToProps (state: AppStateType): MapStatePropsType {
	const {users,page_size,total_users_count,active_page,is_fetching,is_following,portion_size} = state.users;
	return ({
		users: [...users],
		page_size,
		total_users_count,
		active_page,
		is_fetching,
		is_following: [...is_following],
		portion_size,
	});
};

export default compose (
	connect<MapStatePropsType,MapDispatchPropsType,{},AppStateType>(mapStateToProps, { //JS looks for equal named imports(varibles)
		followUser, //same as followUser: followUser
		unfollowUser, //React-redux at the same time takes these ACs
		getUsers,//and wraps it with dispatches inside CBs
	})
)(UsersContainer);

